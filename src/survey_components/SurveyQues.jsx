import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import "./createsurvey.css";

function SurveyQues() {
  return (
    <div>
      <div>
        <span>QUESTION 1</span>
      </div>
      <input placeholder="Survey Name" className="input1"></input>
      <div>
        <textarea
          placeholder="Describe your survey"
          className="teaxtareafield"
        ></textarea>
      </div>
      <div className="footerline"></div>
      <div>
        <button className="btn btn-light">
          NEXT
          <ArrowForwardIcon sx={{ marginLeft: 7 }} />
        </button>
      </div>
    </div>
  );
}

export default SurveyQues;
