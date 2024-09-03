import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        {/* Navbar */}
        <Navbar />
        {/* Intro */}
        <Home />
        {/* Skills */}
        <Skills />
        {/* Portfolio */}
        <Portfolio />
        {/* Companies */}
        <Companies />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
