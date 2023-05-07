import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import surveyGrid from "../images/my_surveys_grid.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="194"
        image={surveyGrid}
        alt="Paella dish"
        sx={{ margin: "7px auto", background: "#d2eaff", width: "95%" }}
      />
      <CardContent sx={{ padding: "0 10px" }}>
        <Typography sx={{ fontWeight: "bold" }} variant="P" component="div">
          Career Skill Feedback
        </Typography>
        <Typography color="text.secondary">
          <CalendarMonthIcon /> adjective
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ width: "100%" }} variant="contained">
          View Response
        </Button>
      </CardActions>
    </Card>
  );
}
