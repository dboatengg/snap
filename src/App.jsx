import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./style/style.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
