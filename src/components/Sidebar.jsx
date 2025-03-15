import React from "react";
import searchIcon from "../images/search1.png";
import homeIcon from "../images/home.png";
import likesIcon from "../images/likes.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <span>
          <img src={homeIcon} id="sidebar-icon" />
        </span>
      </div>
      <div>
        <button id="sidebar-favorites">
          <img src={likesIcon} />
        </button>
      </div>
      <div id="sidebar-item">
        <div>
          {" "}
          <img src={searchIcon} id="sidebar-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
