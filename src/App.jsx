import React, { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 text-center md:text-left`}>
      <Navbar mode={mode} handleToggle={handleToggle} />
      <About mode={mode} />
      <Skills mode={mode} />
      <Project mode={mode} />
      <Footer mode={mode}/>
    </div>
  )
}

export default App
