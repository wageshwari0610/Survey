import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import "./createsurvey.css";

function CreateSurvey() {
  const [isSurveyHeadingFocused, setIsSurveyHeadingFocused] = useState(false);
  const [surveyName, setSurveyName] = useState("");
  const [isSurveyTextFocused, setIsSurveyTextFocused] = useState(false);
  const [surveyText, setSurveyText] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "survey name") {
      setSurveyName(e.target.value);
    } else if (e.target.name === "survey description") {
      setSurveyText(e.target.value);
    }
  };
  return (
    <div className="create-survey-main">
      <nav className="navbarHeading">
        <p className="createSurveyHeading">Create Survey</p>
        <p className="createSurveysubHeading">Home/MySurveys/CreateSurvey</p>
      </nav>
      <div className="create-survey-body">
        <div className="mt-5">
          <h3 className="bodyHeading">Survey Subject & Description</h3>
        </div>
        <div className="textAreas d-flex flex-column mt-5">
          <label htmlFor="descInput">
            {(isSurveyHeadingFocused || surveyName) && "Survey Name"}
          </label>
          <input
            onFocus={() => setIsSurveyHeadingFocused(true)}
            onBlur={() => setIsSurveyHeadingFocused(false)}
            onChange={handleChange}
            placeholder="Survey Name"
            value={surveyName}
            type="text"
            name="survey name"
            id="descInput"
          />
        </div>
        <div className="textAreas d-flex flex-column mt-5">
          <label htmlFor="describeInput">
            {(isSurveyTextFocused || surveyText) && "Describe your survey"}
          </label>
          <textarea
            onFocus={() => setIsSurveyTextFocused(true)}
            onBlur={() => setIsSurveyTextFocused(false)}
            onChange={handleChange}
            value={surveyText}
            name="survey description"
            id="describeInput"
            cols="30"
            rows="4"
            placeholder="Describe your survey"
          ></textarea>
        </div>
        <div className="footer">
          <div className="footerline"></div>
          <button className="btncs">
            NEXT
            <ArrowForwardIcon sx={{ marginLeft: 7 }} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateSurvey;
