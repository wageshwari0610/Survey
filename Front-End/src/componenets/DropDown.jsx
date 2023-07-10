import drop from "../images/dropdown.png";
import Box from "@mui/material/Box";
import "../App.css";

function DropDown() {
  return (
    <div class="dropdown">
      <Box component="span" className="sortBy">
        <span>Sort By: Date</span>
        <img src={drop} alt="dropdown" className="dropImage" />
      </Box>
    </div>
  );
}

export default DropDown;
