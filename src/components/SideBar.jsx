import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as LogoIcon} from "../assets/Logo.svg";
import {ReactComponent as HomeIcon} from "../assets/HomeSVG.svg";
import {ReactComponent as FeedIcon} from "../assets/FeedSVG.svg";
import {ReactComponent as ProfileIcon} from "../assets/ProfileSVG.svg";
import {ReactComponent as AnalyticsIcon} from "../assets/AnalyticsSVG.svg";
import "./css/sideBar.css";

/**
 * This functional component is used to render the side navigation bar for the artist
 * @returns 
 */
function SideBar() {
  const scale = 2.65;

  const items = [
    {
      key: "HOME",
      icon:
        <i className="assetContainer">
          <HomeIcon />
        </i>,
      link: "/artist/home",
    },
    {
      key: "FEED",
      icon: <i className="assetContainer">
        <FeedIcon />
      </i>,
      link: "/artist/tracks",
    },
    {
      key: "PROFILE",
      icon: <i className="assetContainer">
        <ProfileIcon />
      </i>,
      link: "/",
    },
    {
      key: "ANALYTICS",
      icon: <i className="assetContainer">
        <AnalyticsIcon />
      </i>,
      link: "/",
    },
  ];

  return (
    <div className="SideBar">
      <ul className="SideBar-list">
        <div className="logo-container">
          <LogoIcon />
        </div>
        <div className="line" />

        {items.map(({ key, icon, link }) => {
          return (
            <li className="SideBar-item" key={key}>
              {/* <div className="Sidebar-item-box"> */}
              <Link className="SideBar-Link" to={link} key={key}>
                {icon}
              </Link>
              <div className="sideBarLinkName">
                {key}
              </div>
              {/* </div> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
