import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import surveyGrid from "../images/my_surveys_grid.png";
import calender from "../images/calendar.png";

function ListView() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Card sx={{ width: "75%" }}>
      <div className="surveyGridSize"></div>
      <div>
        <span>
          <b>Career-Skill feedback</b>
        </span>
      </div>
      <div>
        <img src={calender} />
        <span>2 Feb 2022 at 11:00 AM</span>
      </div>
      <div>
        <button className="btn btn-primary btn-sm">VIEW RESPONSE</button>
      </div>
    </Card>
  );
}

export default ListView;
