// image imports
// mechs
import {
  BlueRomanCancel,
  ForceRomanCancel,
  PurpleRomanCancel,
  RomanCancel,
  YellowRomanCancel,
  DragonPunch,
  FullCircle,
  HalfCircle,
  Pretzel,
  QuarterCircle,

} from "../../index";
// specials
// actions
import { Dust, HeavySlash, Kick, Punch, Slash } from "../../index";
//moves
// arrow links

const sol_badguy = [
    {
        name: "Sol Badguy",
        input: [],
        type: "",
        regex: /(?!)/,
        description: "The Guilty Gear",
        img: "",
      },
  // -------------------------------------------------------------------------
  // mechs
  // -------------------------------------------------------------------------
  {
    name: "Jump Install",
    input: ["ji"],
    type: "mech",
    regex: /ji\.|ji/i,
    description: "",
    img: "",
    moreLink: "https://www.dustloop.com/w/GGACR/Movement#Jump_Install",
    moreName: "Dustloop",
  },
  {
    name: "Force Roman Cancel",
    input: ["frc"],
    type: "mech-icon",
    regex: /frc/i,
    description: "3 Attack Buttons, Except for D, During Valid FRC Window",
    img: <ForceRomanCancel />,
    moreLink: "https://www.dustloop.com/w/GGACR/Mechanics#Force_Roman_Cancel",
    moreName: "Dustloop",
  },
  {
    name: "Red Roman Cancel",
    input: ["rrc"],
    type: "mech-icon",
    regex: /rrc/i,
    description:
      "3 Attack Buttons, Except for D, while the opponent is in hitstun or blockstun.",
    img: <RomanCancel />,
    moreLink:
      "https://www.dustloop.com/w/GGXRD-R2/Controls#:~:text=Red%20when%20Roman%20Canceling%20while%20the%20opponent%20is%20in%20hitstun%20or%20blockstun.%20Costs%2050%25%20Tension..",
    moreName: "Dustloop",
  },
  {
    name: "Yellow Roman Cancel",
    input: ["yrc"],
    type: "mech-icon",
    regex: /yrc/i,
    description:
      "3 Attack Buttons, Except for D, while the opponent is in neither hitstun nor blockstun. Occurs during start-up and early active frames.",
    img: <YellowRomanCancel />,
    moreLink:
      "https://www.dustloop.com/w/GGXRD-R2/Controls#:~:text=Yellow%20when%20Roman%20Canceling%20while%20the%20opponent%20is%20in%20neither%20hitstun%20nor%20blockstun.%20Occurs%20during%20start%2Dup%20and%20early%20active%20frames.%20Can%20also%20be%20performed%20in%20neutral%20or%20during%20movement%20options.%20Costs%2025%25%20Tension.",
    moreName: "Dustloop",
  },
  {
    name: "Purple Roman Cancel",
    input: ["prc"],
    type: "mech-icon",
    regex: /prc/i,
    description:
      "3 Attack Buttons, while the opponent is in neither hitstun nor blockstun. Occurs during late active and recovery frames.",
    img: <PurpleRomanCancel />,
    moreLink:
      "https://www.dustloop.com/w/GGXRD-R2/Controls#:~:text=Purple%20when%20Roman%20Canceling%20while%20the%20opponent%20is%20in%20neither%20hitstun%20nor%20blockstun.%20Occurs%20during%20late%20active%20and%20recovery%20frames.%20Costs%2050%25%20Tension.%0A(Some%20actions%2C%20such%20as%20specials%20with%20full%20invincibility%20on%20start%2Dup%20cannot%20be%20Yellow%20or%20Purple%20Roman%20Canceled.)",
    moreName: "Dustloop",
  },
  {
    name: "Blue Roman Cancel",
    input: ["brc"],
    type: "mech-icon",
    regex: /brc/i,
    description:
      "3 Attack Buttons, Except for D, during neutral or basic movement.",
    img: <BlueRomanCancel />,
    moreLink:
      "https://www.dustloop.com/w/GGST/Controls#:~:text=Blue%20during%20neutral%20or%20basic%20movement.%20Has%20the%20longest%20slowdown%20period%2C%20allowing%20you%20to%20respond%20to%20neutral%20situations%20or%20enable%20links%20not%20normally%20possible.%20Slowdown%20caused%20by%20the%20shockwave%20still%20continues%20even%20if%20the%20opponent%20gets%20hit.",
    moreName: "Dustloop",
  },
  {
    name: "Roman Cancel",
    input: ["rc"],
    type: "mech-icon",
    regex: /rc/i,
    description: "3 Attack Buttons, Except for D, After an Attack Connects",
    img: <RomanCancel />,
    moreLink: "https://www.dustloop.com/w/GGACR/Mechanics#Roman_Cancel",
    moreName: "Dustloop",
  },
  {
    name: "Wall Splat",
    input: ["WS"],
    type: "mech-icon",
    regex: /WS/i,
    description: "3 Attack Buttons, Except for D, After an Attack Connects",
    img: <RomanCancel />,
    moreLink: "https://www.dustloop.com/w/GGACR/Mechanics#Roman_Cancel",
    moreName: "Dustloop",
  },
  // -------------------------------------------------------------------------
  // actions
  // -------------------------------------------------------------------------
  {
    name: "Punch",
    input: ["P"],
    type: "action",
    regex: /\bP\b/i,
    description: "",
    img: <Punch />,
  },
  {
    name: "Kick",
    input: ["K"],
    type: "action",
    regex: /\bK\b/i,
    description: "",
    img: <Kick />,
  },
  {
    name: "Slash",
    input: ["S"],
    type: "action",
    regex: /\bS\b/i,
    description: "",
    img: <Slash />,
  },
  {
    name: "Heavy Slash",
    input: ["H"],
    type: "action",
    regex: /\bH\b/i,
    description: "",
    img: <HeavySlash />,
  },
  {
    name: "Dust",
    input: ["D"],
    type: "action",
    regex: /\bD\b/i,
    description: "",
    img: <Dust />,
  },
  // -------------------------------------------------------------------------
  // Character
  // ------------------------------------------------------------------------- 
{
    name: "Bandit Revolver1",
    input: "236K",
    type: "move",
    regex: /\b236k|BR1|br1|236K\b/,
    description:
        "First hit of Bandit Revolver",
        img: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <QuarterCircle style={{ width: '32px', height: '32px' }} />
              <Kick style={{ width: '32px', height: '32px' }} />
            </div>
          ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Bandit_Revolver",
    moreName: "Dustloop",
    },
{
    name: "Bandit Revolver2",
    input: "236KK",
    type: "move",
    regex: /\bbr2|BR2|236kk|236KK\b/,
    description:
        "Second hit of Bandit Revolver",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <QuarterCircle style={{ width: '32px', height: '32px' }} />
            <Kick style={{ width: '32px', height: '32px' }} />
            <Kick style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Bandit_Revolver",
    moreName: "Dustloop",
    },
{
    name: "Bandit Revolver",
    input: "236KK",
    type: "move",
    regex: /\bbr|BR|236kk|236KK\b/i,
    description:
        "Full Bandit Revolver",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <QuarterCircle style={{ width: '32px', height: '32px' }} />
            <Kick style={{ width: '32px', height: '32px' }} />
            <Kick style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Bandit_Revolver",
    moreName: "Dustloop",
    },
{
    name: "Gun Flame",
    input: "236P",
    type: "move",
    regex: /\bgf|GF|236p|236P\b/i,
    description:
        "Gun Flame",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <QuarterCircle style={{ width: '32px', height: '32px' }} />
            <Punch style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Gun_Flame",
    moreName: "Dustloop",
    },
{
    name: "Gun Flame (Feint)",
    input: "214P",
    type: "move",
    regex: /\bgff|GFF|214p|214P\b/i,
    description:
        "Gun Flame (Feint)",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <QuarterCircle style={{ width: '32px', height: '32px' }} />
            <Kick style={{ width: '32px', height: '32px' }} />
            <Kick style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Gun_Flame_(Feint)",
    moreName: "Dustloop",
    }, 
{
    name: "Volcanic Viper",
    input: "623S",
    type: "move",
    regex: /\bvv|623S|623s\b/i,
    description:
        "Volcanic Viper",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DragonPunch style={{ width: '32px', height: '32px' }} />
            <Slash style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Volcanic_Viper",
    moreName: "Dustloop",
    },        
{
    name: "Heavy Volcanic Viper",
    input: "623H",
    type: "move",
    regex: /\bHVV|623H|623h\b/i,
    description:
        "Heavy Volcanic Viper",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DragonPunch style={{ width: '32px', height: '32px' }} />
            <HeavySlash style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Volcanic_Viper",
    moreName: "Dustloop",
},
  {
    name: "Bandit Bringer",
    input: "214K",
    type: "move",
    regex: /\bbb|BB|214k|214K\b/i,
    description:
        "Bandit Bringer",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DragonPunch style={{ width: '32px', height: '32px', transform: "scaleX(-1)" }} />
            <Kick style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Bandit_Bringer",
    moreName: "Dustloop",
    },     
{
    name: "Wild Throw",
    input: "623K",
    type: "move",
    regex: /\bwt|WT|623K|623k\b/i,
    description:
        "Wild Throw",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DragonPunch style={{ width: '32px', height: '32px' }} />
            <Kick style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Wild_Throw",
    moreName: "Dustloop",
    },     
{
      name: "Night Raid Vortex",
    input: "214S",
    type: "move",
    regex: /\bnrv|NRV|214S|214s\b/i,
    description:
        "Night Raid Vortex",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DragonPunch style={{ width: '32px', height: '32px', transform: "scaleX(-1)" }} />
            <Slash style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Night_Raid_Vortex",
    moreName: "Dustloop",
},     
{
      name: "Night Raid Vortex",
    input: "214S",
    type: "move",
    regex: /\bnrv|NRV|214S|214s\b/i,
    description:
        "Night Raid Vortex",
        img: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DragonPunch style={{ width: '32px', height: '32px', transform: "scaleX(-1)" }} />
            <Slash style={{ width: '32px', height: '32px' }} />
          </div>
        ),
    moreLink: "https://www.dustloop.com/w/GGST/Sol_Badguy#Night_Raid_Vortex",
    moreName: "Dustloop",
},      
  ];
export { sol_badguy};