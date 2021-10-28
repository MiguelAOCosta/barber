import GlobalStyle from "./GlobalStyles";
import Navbar from "./Components/Navigation/NavBar";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <div style={{ height: "400vh", backgroundColor: "green" }}></div>
    </>
  );
}

export default App;
