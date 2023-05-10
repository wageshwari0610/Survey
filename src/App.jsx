import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
import CreateSurvey from "./survey_components/CreateSurvey";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="side-and-main">
        <SideList />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createSurvey" element={<CreateSurvey />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
