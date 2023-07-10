import * as React from "react";
import Box from "@mui/material/Box";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./Emoji.css";

export default function Emoji(props) {
  return (
    <div className="emojiSelection">
      <div className="emojiSpace">
        <Box component="span" sx={{ p: 2 }} onClick={props.handleEmoji}>
          <MoodBadIcon />
          <h5>Terrible</h5>
        </Box>
      </div>
      <div className="emojiSpace">
        <Box component="span" sx={{ p: 2 }} onClick={props.handleEmoji}>
          <SentimentVeryDissatisfiedIcon />
          <h5>Bad</h5>
        </Box>
      </div>

      <div className="emojiSpace">
        <Box component="span" sx={{ p: 2 }} onClick={props.handleEmoji}>
          <SentimentSatisfiedIcon />
          <h5>Okay</h5>
        </Box>
      </div>
      <div className="emojiSpace">
        <Box component="span" sx={{ p: 2 }} onClick={props.handleEmoji}>
          <SentimentSatisfiedAltIcon />
          <h5>Good</h5>
        </Box>
      </div>
    </div>
  );
}
