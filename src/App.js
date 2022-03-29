import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Fotter from "./components/Fotter";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
