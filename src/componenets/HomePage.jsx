import DropDown from "./DropDown";
import ViewToggleButton from "./ViewToggleButton";
import * as React from "react";
import GridList from "./GridList";
import ListView from "./ListView";

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
          <button
            style={{ height: "100%" }}
            className="btn btn-primary btn-sm"
            onClick={props.handleNavigate}
          >
            CREATE SURVEY
          </button>
        </div>
      </div>
      <div>{view == "list" ? <GridList /> : <ListView />}</div>
    </div>
  );
}

export default HomePage;
