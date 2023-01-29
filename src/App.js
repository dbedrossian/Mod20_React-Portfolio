import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Card from "./components/ProjectCard";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
}

export default App;