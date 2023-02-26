import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "react-tooltip";
import { Footer, Header, Modal } from "./components/index";
import { InputProvider, ModalProvider } from "./contexts/index";
import { Home, NotFound } from "./Pages/index";

import "react-tooltip/dist/react-tooltip.css";
import "./style/App.css";

function App() {
  return (
    <Router basename={"/fg-input-translator"}>
      <div className="h-screen overflow-x-hidden bg-neutral-900 text-neutral-400">
        <ModalProvider>
          <Modal />
          <Header />
        </ModalProvider>
        <InputProvider>
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:game/:input" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </InputProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
