import GlobalStyle from "./GlobalStyles";
import Navbar from "./Components/Navigation/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
