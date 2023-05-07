import DropDown from "./DropDown";
import viewList from "../images/view_list.png";
import viewGrid from "../images/view_grid.png";
import ViewToggleButton from "./ViewToggleButton";

function HomePage() {
  return (
    <div className="hp">
      <div className="heading-div">
        <span>
          <h4> My Surveys</h4>
        </span>
      </div>
      <DropDown />
      <ViewToggleButton />
      <div className="create-survey-button">
        <button style={{ height: "100%" }} className="btn btn-primary btn-sm">
          CREATE SURVEY
        </button>
      </div>
    </div>
  );
}

export default HomePage;
