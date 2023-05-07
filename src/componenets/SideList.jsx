import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import mySurvey from "../images/my_surveys.png";
import requestinactive from "../images/requested_surveys_inactive.png";

export default function FolderList() {
  return (
    <div className="sideList">
      <List
        sx={{
          width: "20%",
          maxWidth: 175,
          bgcolor: "white",
          overflow: "auto",
          height: 420,
          float: "left",
        }}
      >
        <ListItem>
          <span>
            <b>Survey</b>
          </span>
        </ListItem>
        <div className="line"></div>
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
        <div className="para">
          <span>
            <b>"Hard work will pay off later, laziness"</b>
          </span>
          <br />
          <span className="writer">
            <b>- Adam Smith</b>
          </span>
        </div>
      </List>
    </div>
  );
}
