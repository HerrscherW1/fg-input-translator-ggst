import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TechInput } from "../components/index";
import {
  arrowLinks,
  ggac_actionInputs,
  ggac_mechInputs,
  moveInputs,
  specialMoveInputs,
} from "../data/index";

const InputContext = createContext();

export const useInput = () => useContext(InputContext);

const createMoveListRegex = (list) => {
  // create a regex based on the move lists
  const moves = list.map((move) => {
    const regex = move.regex?.length > 0;
    if (regex) return move.regex;
    return move.input;
  });
  const fixedMovesForRegex = moves.map((str) => {
    // fix any special regex characters that need escape
    const isArray = Array.isArray(str);
    const isNumber = typeof str === "number";
    if (isArray) return str.map((str) => str.replace(".", "\\."));
    if (isNumber) return str;
    else return str.replace(".", "\\.");
  });

  return new RegExp(`(${fixedMovesForRegex.join("|")})`);
};

function fixRegex(input) {
  const isArray = Array.isArray(input);
  const isNumber = typeof input === "number";
  if (isArray) return input.map((str) => str.replace(".", "\\."));
  if (isNumber) return input;
  else return input.replace(".", "\\.");
}

const createArrowLinkRegex = (list) => {
  const moves = list.map((move) => {
    const { input } = move;
    if (Array.isArray(input)) return input.join("");
    else return input;
  });
  const regex = new RegExp(`[${moves.join("")}]`);
  return regex;
};

// GUILTY GEAR AC+R
const arrowLinkList = [">", "->", "~", ","];
const inputRegex__Moves = createMoveListRegex(moveInputs);
const inputRegex__Action = createMoveListRegex(ggac_actionInputs);
const inputRegex__Mechs = createMoveListRegex(ggac_mechInputs);
const inputRegex__SpecialMoves = createMoveListRegex(specialMoveInputs);
const inputRegex__Arrow = createArrowLinkRegex(arrowLinks);

export const InputProvider = ({ children }) => {
  // States
  // Input
  const [rawInput, setRawInput] = useState("");
  const [output, setOutput] = useState([]);
  const [gameInputs, setGameInputs] = useState(ggac_actionInputs);
  const [gameMechs, setGameMechs] = useState(ggac_mechInputs);

  function testRegex(list, input) {
    return list.find((move) => {
      if (move.regex.test(input)) return move;
    });
  }

  function getMoveObject(input) {
    const mech = testRegex(ggac_mechInputs, input);
    const arrowLink = testRegex(arrowLinks, input);
    const move = testRegex(moveInputs, input);
    const special = testRegex(specialMoveInputs, input);
    const action = testRegex(ggac_actionInputs, input);

    if (special) return special;
    if (mech) return mech;
    if (arrowLink) return arrowLink;
    if (move) return move;
    if (action) return action;
    else return;
  }

  // Functions
  const getMove = (array, userInput) => {
    const userInputIsArray = Array.isArray(userInput);
    // search move in JSON file based on input
    return array.find((item) => {
      const { input } = item;
      const inputIsArray = Array.isArray(input);
      const inputIsNumber = typeof input === "number";

      if (!userInputIsArray) {
        if (inputIsArray)
          return input.find((itemInput) => itemInput === userInput);
        else if (inputIsNumber) return input.toString() === userInput;
        else if (input) return input === userInput;
        else return input;
      }
    });
  };

  const checkInput = (input) => {
    // if input is empty, return the input, which should be ('')
    if (!input) return input;

    const isArray = Array.isArray(input);
    const isString = typeof input === "string" && input.length > 2;

    // new logic
    const move = getMoveObject(input);
    if (move) return createInputComponent(move);

    // get the move from JSON
    const moveInput = getMove(moveInputs, input);
    const arrowLink = getMove(arrowLinks, input);
    const spMoveInput = getMove(specialMoveInputs, input);
    const actionInput = getMove(gameInputs, input);
    const mechInputs = getMove(gameMechs, input);
    const allFalse =
      !moveInput && !arrowLink && !spMoveInput && !actionInput && !mechInputs;
    // return the move Object
    if (moveInput) return createInputComponent(moveInput);
    if (arrowLink) return createInputComponent(arrowLink);
    if (spMoveInput) return createInputComponent(spMoveInput);
    if (actionInput) return createInputComponent(actionInput);
    if (mechInputs) return createInputComponent(mechInputs);
    else if (isArray && allFalse) return checkInputArray(input);
    else if (isString) return checkInputArray(input.split(""));
    else return input;
  };

  function checkInputArray(array) {
    // get array and use checkInput in every element
    const newArray = array.map((input) => {
      const isArray = Array.isArray(input);
      const isSpecial = checkInput(input);
      const isString = typeof input === "string" && input.length >= 2;
      if (isArray && !isSpecial) return input.map((el) => checkInput(el));
      if (isString && !isSpecial) {
        const stringToArray = input.split("");
        return stringToArray.map((el) => checkInput(el));
      }
      return checkInput(input);
    });
    return newArray;
  }
  function createInputComponent(obj) {
    if (!obj) return "not found";

    return <TechInput inputObj={obj} key={uuidv4()} />;
  }

  function checkSpecialInputs(arr) {
    const characterRegex = new RegExp("[a-z]");
    const numberRegex = new RegExp("\\d");

    const newArray = arr.map((inputs) => {
      let isSpecial = inputRegex__SpecialMoves.test(inputs);
      let isMech = inputRegex__Mechs.test(inputs);
      let isCharacter = characterRegex.test(inputs);
      let isNumber = numberRegex.test(inputs);
      if (isSpecial && !isMech)
        return inputs
          .split(inputRegex__SpecialMoves)
          .filter((str) => str !== "");

      if (isMech) {
        return inputs.split(inputRegex__Mechs).filter((str) => {
          if (typeof str === "undefined") return;
          else return str !== "";
        });
      }

      if (isCharacter && !isMech && !isSpecial)
        return splitSpecialMoves(inputs);

      if (isNumber && !isMech && !isSpecial) {
        return inputs;
      } else return inputs.split("");
    });
    return newArray;
  }

  function comboWrapper(arr) {
    if (!arr) return;
    const newArray = arr.map((el) => {
      const isArrow = !inputRegex__Arrow.test(el[0]?.props?.inputObj?.input);
      if (isArrow)
        return (
          <div className="combo-container" key={uuidv4()}>
            {el}
          </div>
        );
      else return el;
    });

    return newArray;
  }

  function splitSpecialMoves(input) {
    const regex = new RegExp("[a-z]");

    let str = input;
    let arr = [];
    let startIndex = 0;
    let matches = input.match(regex);

    for (let i = 0; i < matches.length; i++) {
      let index = str.indexOf(matches[i], startIndex);
      arr.push(str.slice(startIndex, index));
      arr.push(matches[i]);
      startIndex = index + 1;
    }
    arr.push(str.slice(startIndex));
    return arr.filter((str) => str !== "");
  }

  function splitSpecial(str) {
    let regex = inputRegex__SpecialMoves;
    let arr = [];

    while (true) {
      let index = str.search(regex);
      if (index === -1) {
        arr.push(str);
        break;
      }
      arr.push(str.slice(0, index));
      arr.push(str.slice(index, index + 1));
      str = str.slice(index + 1);
    }

    return arr;
  }

  function splitFollowUps(str) {
    let regexp = /(>|->|~|,)/g;
    let matches = str.match(regexp);

    let parts = [];
    if (matches) {
      let index = 0;
      for (let match of matches) {
        let split = str.slice(index).split(match);
        parts.push(split[0], match);
        index += split[0].length + match.length;
      }
      parts.push(str.slice(index));
    }
    console.log(parts);
    return parts;
  }
  // Render Effects
  useEffect(() => {
    const cleanInputs = rawInput.toLowerCase().replace(/ /g, "");
    const arr = splitFollowUps(cleanInputs);
    const checkedSpecials = checkSpecialInputs(arr);
    const checkedInputs = checkInputArray(checkedSpecials);
    const comboArray = comboWrapper(checkedInputs);

    // console.log(arr);
    setOutput(comboArray);
  }, [rawInput]);

  const value = { setRawInput, output };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
