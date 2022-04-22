import React from "react";
import { Link } from "react-router-dom";
import "./css/sideBar.css";

function SideBar() {
  const items = [
    {
      key: "home",
      icon: <i className="bi bi-house-fill"></i>,
      link: "/",
    },
    {
      key: "feed",
      icon: <i className="bi bi-person"></i>,
      link: "/artist/tracks",
    },
    {
      key: "profile",
      icon: <i className="bi bi-person"></i>,
      link: "/",
    },
    {
      key: "analytics",
      icon: <i className="bi bi-clipboard-data"></i>,
      link: "/",
    },
  ];

  return (
    <div className="SideBar">
      <ul className="SideBar-list">
        <div className="logo-container"></div>
        <div className="line" />

        {items.map(({ key, icon, link }) => {
          return (
            <li className="SideBar-item" key={key}>
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
