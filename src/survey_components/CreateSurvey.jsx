import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import "./createsurvey.css";

function CreateSurvey() {
  return (
    <div className="create-survey-main">
      <nav className="navbarHeading">
        <p className="createSurveyHeading"> Create Survey</p>
        <p className="createSurveysubHeading">Home/MySurveys/CreateSurvey</p>
      </nav>
      <div className="create-survey-body">
        <div>
          <h3 className="bodyHeading">Survey Subject & Description</h3>
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
          <button className="btncs btn-light">
            NEXT
            <ArrowForwardIcon sx={{ marginLeft: 7 }} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateSurvey;
