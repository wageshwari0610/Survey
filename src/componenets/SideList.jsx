import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import mySurvey from "../images/my_surveys.png";
import requestinactive from "../images/requested_surveys_inactive.png";

export default function FolderList() {
  return (
    <div className="sideList">
      <div className="side-list-heading">
        <h3>Survey</h3>
        <div className="line"></div>
      </div>
      <List
        sx={{
          bgcolor: "white",
          height: "75%",
        }}
      >
        <ListItem>
          <img src={mySurvey} className="surveylistIcon" />
          <span className="surveylist">
            <b>My Surveys </b>
          </span>
        </ListItem>
        <ListItem>
          <img src={requestinactive} />
          <span className="requestedlist">
            <b>Requested Surveys</b>
          </span>
        </ListItem>
      </List>
      <div className="para">
        <span>
          <b>"Hard work will pay off later, laziness"</b>
        </span>
        <br />
        <span className="writer">
          <b>- Adam Smith</b>
        </span>
      </div>
    </div>
  );
}
