import { useState } from "react";
import About from "./Components/About/About";
import Drop from "./Components/DropDownNav/Drop";
import Info from "./Components/Info/Info";
import Nav from "./Components/Navigation/Nav";
import Slider from "./Components/Slider/Slider";
import GlobalStyle from "./GlobalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(0);
  const toogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Info />
      <Nav isOpen={isOpen} toogle={toogle} />
      <Drop isOpen={isOpen} toogle={toogle} />
      <Slider />
      <About />
    </>
  );
}

export default App;
