import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SurveyNav from "./SurveyNav";
import InputField from "./InputField";
import axios from "axios";
import "./createsurvey.css";

function CreateSurvey() {
  const [isSurveyHeadingFocused, setIsSurveyHeadingFocused] = useState(false);
  const [surveyName, setSurveyName] = useState("");
  const [isSurveyTextFocused, setIsSurveyTextFocused] = useState(false);
  const [surveyText, setSurveyText] = useState("");

  const handleNext = surveyName && surveyText ? false : true;
  const btnColor =
    surveyName && surveyText ? "btncs btnactive" : "btncs btninactive";

  const handleNextBtn = () => {
    axios
      .post(
        "https://izrmdya4vg.execute-api.ap-south-1.amazonaws.com/prod/create_survey_request",
        { survey_name: surveyName, survey_description: surveyText },
        {
          headers: {
            Authorization:
              "Bearer efdhfddfkndsjknfkdsfnsdkjfndskjfnaprwjnkxnfs",
          },
        }
      )
      .then((response) => console.log(response));
  };
  const handleChange = (e) => {
    if (e.target.name === "survey name") {
      setSurveyName(e.target.value);
    }
  };

  const handleText = (e) => {
    if (e.target.name === "survey description") {
      setSurveyText(e.target.value);
    }
  };

  return (
    <div className="create-survey-main">
      <SurveyNav />
      <div className="create-survey-body">
        <div className="mt-5">
          <h3 className="bodyHeading">Survey Subject & Description</h3>
        </div>
        <InputField
          handleChange={handleChange}
          value={surveyName}
          onFocus={() => setIsSurveyHeadingFocused(true)}
          onBlur={() => setIsSurveyHeadingFocused(false)}
          placeholder="Survey Name"
          isHeadingFocused={isSurveyHeadingFocused}
          name="survey name"
        />
        <div className="textAreas d-flex flex-column mt-5">
          <label htmlFor="describeInput">
            {(isSurveyTextFocused || surveyText) && "Describe your survey"}
          </label>
          <textarea
            onFocus={() => setIsSurveyTextFocused(true)}
            onBlur={() => setIsSurveyTextFocused(false)}
            onChange={handleText}
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

          <Link to={surveyName.replace(" ", "")}>
            <button
              className={btnColor}
              disabled={handleNext}
              onClick={handleNextBtn}
            >
              NEXT
              <ArrowForwardIcon sx={{ marginLeft: 7 }} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CreateSurvey;
