import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
import CreateSurvey from "./survey_components/CreateSurvey";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as React from "react";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/createSurvey");
  };

  return (
    <div>
      <NavBar />
      <div className="side-and-main">
        <SideList />{" "}
        <div className="main-page">
          <Routes>
            <Route
              path="/"
              element={<HomePage handleNavigate={handleNavigate} />}
            />
            <Route path="/createSurvey" element={<CreateSurvey />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
