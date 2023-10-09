import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Card />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
