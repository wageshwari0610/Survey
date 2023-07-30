import * as React from "react";
import Box from "@mui/material/Box";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./Emoji.css";

export default function Emoji() {
  return (
    <div className="emojiSelection">
      <div className="emojiSpace">
        <Box component="span" sx={{ p: 2 }}>
          <MoodBadIcon />
          <h5>Terrible</h5>
        </Box>
      </div>
      <div className="emojiSpace">
        <Box component="span" sx={{ p: 2 }}>
          <SentimentVeryDissatisfiedIcon />
          <h5>Bad</h5>
        </Box>
      </div>

      <div className="emojiSpace">
        <Box component="span" sx={{ p: 2 }}>
          <SentimentSatisfiedIcon />
          <h5>Okay</h5>
        </Box>
      </div>
      <div className="emojiSpace">
        <Box component="span" sx={{ p: 2 }}>
          <SentimentSatisfiedAltIcon />
          <h5>Good</h5>
        </Box>
      </div>
    </div>
  );
}
