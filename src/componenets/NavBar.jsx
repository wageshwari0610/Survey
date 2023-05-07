import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import manager from "../images/manager-5.png";
import coin from "../images/group-16.png";
import { Avatar } from "@mui/material";
import notification from "../images/notification-2.png";
import calender from "../images/group-2-copy-4.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
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
        <img src={calender} />
        <div className="vl"></div>
        <img src={notification} />
        <div className="vl"></div>

        <Avatar sx={{ width: 20, height: 20 }}>N</Avatar>
        <span className="profileName">Sangeeta</span>
        <KeyboardArrowDownOutlinedIcon sx={{ color: "white" }} />
      </div>
    </nav>
  );
}

export default NavBar;
