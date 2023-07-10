import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
import CreateSurvey from "./survey_components/CreateSurvey";
import { Route, Routes } from "react-router-dom";
import * as React from "react";
import "./App.css";
import SurveyQues from "./survey_components/SurveyQues";

function App() {
  return (
    <div>
      <NavBar />
      <div className="side-and-main">
        <SideList />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createSurvey" element={<CreateSurvey />} />
          <Route path="/createSurvey/:id" element={<SurveyQues />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
