import "./App.css";
import React from "react";
import Intro from "./components/Intro";
import Model from "./components/Model";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SideBarNav from "./components/sideBarNav";
import MainLinks from "./components/MainLinks";
import Credits from "./components/Credits";
function App() {
  return (
    <div className="container">
      <div id="content">
        <Intro />
        <MainLinks />
        <Model />
        <Experience />
        <Projects />
        <SideBarNav />
        <Credits />
      </div>
    </div>
  );
}

export default App;
