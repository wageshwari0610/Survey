import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import mySurvey from "../images/my_surveys.png";
import requestinactive from "../images/requested_surveys_inactive.png";

export default function FolderList() {
  const [activeSurvey, setactiveSurvey] = React.useState("mysurveys");
  const handleactiveSurvey = (event, requestedsurvey) => {
    if (requestedsurvey !== null) {
      setactiveSurvey(requestedsurvey);
    }
    console.log(activeSurvey);
  };
  return (
    <div className="sideList">
      <div className="side-list-heading">
        <p>Survey</p>
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
          <button className="surveylist" onClick={handleactiveSurvey}>
            <b>My Surveys </b>
          </button>
        </ListItem>
        <ListItem>
          <img src={requestinactive} />
          <button className="requestedlist" onClick={handleactiveSurvey}>
            <b>Requested Surveys</b>
          </button>
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
