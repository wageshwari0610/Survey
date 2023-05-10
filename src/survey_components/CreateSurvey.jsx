import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField } from "@mui/material";
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
        <TextField id="input1" placeholder="Survey Name" />
        <div>
          <TextField id="input2" placeholder="Describe your survey" />
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
