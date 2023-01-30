import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/ProjectCard";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import PortfolioContainer from "./components/PortfolioContainer";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <PortfolioContainer />
      {/* <Landing />
      <About />
      <Card />
      <Contact />
      <Resume /> */}
      <Footer />
    </div>
  );
}

export default App;