import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import manager from "../images/manager-5.png";
import coin from "../images/group-16.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li className="navList">
            <span>Learn</span>
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "small" }} />
          </li>
          <li className="navList">
            <span>Network</span>
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "small" }} />
          </li>
          <li className="navList">
            <span>Evaluate</span>
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "small" }} />
          </li>
          <li className="navList">
            <span>Jobs</span>
          </li>
        </ul>
        <div className="vl"></div>
        <div className="manager">
          <img src={manager} />
          <span className="managerNo">1305</span>
          <span className="score">Profile Score</span>
        </div>
        <div className="vl"></div>
        <div className="coin">
          <img src={coin} />
          <span className="managerNo">400</span>
          <span className="token">Tokens</span>
        </div>
        <div className="vl"></div>
        <CalendarMonthIcon className="calendar" />
        <div className="vl"></div>
        <NotificationsIcon className="calendar" />
        <div className="vl"></div>
        <Avatar sx={{ width: 20, height: 20 }}>N</Avatar>
      </div>
    </nav>
  );
}

export default NavBar;
