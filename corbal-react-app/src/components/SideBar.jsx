import React from "react";
import { Link } from "react-router-dom";
import "./css/sideBar.css";

function SideBar() {
  const items = [
    {
      key: "home",
      icon: <i class="bi bi-house-fill"></i>,
      link: "/",
    },
    {
      key: "profile",
      icon: <i class="bi bi-person"></i>,
      link: "/",
    },
    {
      key: "analytics",
      icon: <i class="bi bi-clipboard-data"></i>,
      link: "/",
    },
  ];

  return (
    <div className="SideBar">
      <ul className="SideBar-list">
        <div className = "logo-container"> 
        </div>
        <div className = "line"/>

        {items.map(({ key, icon, link }) => {
          return (
            <li className="SideBar-item">
              {/* <div className="Sidebar-item-box"> */}
              <Link className="SideBar-Link" to={link} key={key}>
                {icon}
              </Link>
              {/* </div> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
