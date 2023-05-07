import DropDown from "./DropDown";
import viewList from "../images/view_list.png";
import viewGrid from "../images/view_grid.png";

function HomePage() {
  return (
    <div className="hp">
      <span>
        <b> My Surveys</b>
      </span>
      <DropDown />
      <div className="grid">
        <img src={viewGrid} />
      </div>
      <div className="list">
        <img src={viewList} />
      </div>
      <div>
        <button className="btn btn-primary btn-sm">CREATE SURVEY</button>
      </div>
    </div>
  );
}

export default HomePage;
