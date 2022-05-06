import React from "react";
import "./App.css";
import About from "./components/About";
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
