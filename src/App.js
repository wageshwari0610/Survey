import "./App.css";
import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
import GridList from "./componenets/GridList";
import ListView from "./componenets/ListView";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="side-and-main">
        <SideList />
        <div className="main-page">
          <HomePage />
          <GridList />
        </div>
      </div>
    </div>
  );
}

export default App;
