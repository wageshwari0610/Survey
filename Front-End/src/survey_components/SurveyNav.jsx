import "./createsurvey.css";
import BreadCrumbs from "./BreadCrumbs";
import React from "react";

function SurveyNav() {
  return (
    <nav className="navbarHeading">
      <p className="createSurveyHeading"> Create Survey</p>
      {/* <p className="createSurveysubHeading">Home/MySurveys/CreateSurvey</p> */}
      <BreadCrumbs />
    </nav>
  );
}

export default SurveyNav;
