import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import ContextProvider from "./context/context";

function App() {
  return (
    <div className="widthCheck">
      <header>
        <NavBar />
      </header>
      <main>
        <ContextProvider>
          <Home />
          <About />
          <Projects />
        </ContextProvider>
      </main>
    </div>
  );
}

export default App;
