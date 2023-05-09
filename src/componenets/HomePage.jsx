import CreateSurvey from "../survey_components/CreateSurvey";
import DropDown from "./DropDown";
import ViewToggleButton from "./ViewToggleButton";
import * as React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function HomePage(props) {
  return (
    <div className="hp">
      <div className="heading-div">
        <span>
          <h4> My Surveys</h4>
        </span>
      </div>
      <DropDown />
      <ViewToggleButton handleChange={props.handleChange} view={props.view} />
      <div className="create-survey-button">
        <button
          style={{ height: "100%" }}
          className="btn btn-primary btn-sm"
          onClick={props.handleNavigate}
        >
          CREATE SURVEY
        </button>
      </div>
    </div>
  );
}

export default HomePage;
