import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Card from "./components/ProjectCard";
import Landing from "./components/Landing";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Card />
      <Footer />
    </div>
  );
}

export default App;