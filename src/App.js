import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Fotter from "./components/Fotter";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContextProvider from "./context/context";

function App() {
  return (
    <div className="widthCheck">
      <ContextProvider>
        <Home />
        <About />
        <Projects />
      </ContextProvider>
    </div>
  );
}

export default App;
