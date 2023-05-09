import DropDown from "./DropDown";
import ViewToggleButton from "./ViewToggleButton";
import * as React from "react";
import GridList from "./GridList";
import ListView from "./ListView";
import { Link } from "react-router-dom";

function HomePage(props) {
  const [view, setView] = React.useState("list");

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  return (
    <div>
      <div className="hp">
        <div className="heading-div">
          <span>
            <h4> My Surveys</h4>
          </span>
        </div>
        <DropDown />
        <ViewToggleButton handleChange={handleChange} view={view} />
        <div className="create-survey-button">
          <Link to={"createSurvey"}>
            <button className="btn btn-primary">CREATE SURVEY</button>
          </Link>
        </div>
      </div>
      <div>{view === "list" ? <GridList /> : <ListView />}</div>
    </div>
  );
}

export default HomePage;
