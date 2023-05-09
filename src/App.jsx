import "./App.css";
import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
import GridList from "./componenets/GridList";
import ListView from "./componenets/ListView";
import * as React from "react";
import CreateSurvey from "./survey_components/CreateSurvey";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [view, setView] = React.useState("list");

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/createSurvey");
  };

  return (
    <div className="App">
      <NavBar />
      <div className="side-and-main">
        <SideList />{" "}
        <div className="main-page">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  handleChange={handleChange}
                  view={view}
                  handleNavigate={handleNavigate}
                />
              }
            />
            <Route path="/createSurvey" element={<CreateSurvey />} />
          </Routes>
          {view == "list" ? <GridList /> : <ListView />}
        </div>
      </div>
    </div>
  );
}

export default App;
