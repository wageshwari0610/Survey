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
      <SideList />
      <HomePage />
    </div>
  );
}

export default App;
