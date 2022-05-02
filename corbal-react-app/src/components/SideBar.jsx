import React from "react";
import { Link } from "react-router-dom";
import "./css/sideBar.css";

function SideBar() {
  const scale = 2.65;

  const items = [
    {
      key: "HOME",
      icon: 
      <i className="assetContainer">
        <svg width={122/3.6} height={122/3.6} viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M121.15 48.33V121.15H0V48.33L60.57 0L121.15 48.33Z" fill="#EDECF4"/>
          <path d="M76.16 76.9101V121.15H44.99V60.5801L76.16 76.9101Z" fill="url(#paint0_linear_1653_153)"/>
          <defs>
          <linearGradient id="paint0_linear_1653_153" x1="44.9884" y1="90.8646" x2="76.1584" y2="90.8646" gradientUnits="userSpaceOnUse">
          <stop offset="0.1229" stop-color="#DA4D26"/>
          <stop offset="0.5114" stop-color="#E66525"/>
          <stop offset="0.9442" stop-color="#F47B21"/>
          </linearGradient>
          </defs>
        </svg>
      </i>,
      link: "/",
    },
    {
      key: "FEED",
      icon: <i className="assetContainer">
        <svg width={138/4.1} height={113/4.1} viewBox="0 0 138 113" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1653_138)">
          <path d="M137.69 0L121.35 31.16H17.64L34.1 0H137.69Z" fill="#EDECF4"/>
          <path d="M0 40.53L16.33 71.7H120.05L103.58 40.53H0Z" fill="url(#paint0_linear_1653_138)"/>
          <path d="M137.69 81.0601L121.35 112.23H17.64L34.1 81.0601H137.69Z" fill="#EDECF4"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_1653_138" x1="120.052" y1="56.1142" x2="0" y2="56.1142" gradientUnits="userSpaceOnUse">
          <stop offset="0.1229" stop-color="#DA4D26"/>
          <stop offset="0.5114" stop-color="#E66525"/>
          <stop offset="0.9442" stop-color="#F47B21"/>
          </linearGradient>
          <clipPath id="clip0_1653_138">
          <rect width="137.69" height="112.23" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </i>,
      link: "/artist/tracks",
    },
    {
      key: "PROFILE",
      icon: <i className="assetContainer">
        <svg width={121/3.3} height={104/3.3} viewBox="0 0 121 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1653_142)">
          <path d="M120.05 72.6599L103.72 103.82H0L16.47 72.6599H120.05Z" fill="#EDECF4"/>
          <path d="M67.1901 60.26C83.8304 60.26 97.3201 46.7703 97.3201 30.13C97.3201 13.4897 83.8304 0 67.1901 0C50.5497 0 37.0601 13.4897 37.0601 30.13C37.0601 46.7703 50.5497 60.26 67.1901 60.26Z" fill="url(#paint0_linear_1653_142)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_1653_142" x1="97.3212" y1="30.1285" x2="37.0601" y2="30.1285" gradientUnits="userSpaceOnUse">
          <stop offset="0.1229" stop-color="#DA4D26"/>
          <stop offset="0.5114" stop-color="#E66525"/>
          <stop offset="0.9442" stop-color="#F47B21"/>
          </linearGradient>
          <clipPath id="clip0_1653_142">
          <rect width="120.05" height="103.82" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </i>,
      link: "/",
    },
    {
      key: "ANALYTICS",
      icon: <i className="assetContainer">
        <svg width={122/3.6} height={122/3.6} viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.16 39.01V121.44H0V55.47L31.16 39.01Z" fill="#EDECF4"/>
          <path d="M76.16 35.4201V121.44H44.99V19.0901L76.16 35.4201Z" fill="url(#paint0_linear_1653_134)"/>
          <path d="M121.15 0V121.44H89.98V16.47L120.6 0.29L121.15 0Z" fill="#EDECF4"/>
          <defs>
          <linearGradient id="paint0_linear_1653_134" x1="76.1606" y1="70.2625" x2="44.99" y2="70.2625" gradientUnits="userSpaceOnUse">
          <stop offset="0.1229" stop-color="#DA4D26"/>
          <stop offset="0.5114" stop-color="#E66525"/>
          <stop offset="0.9442" stop-color="#F47B21"/>
          </linearGradient>
          </defs>
        </svg>
      </i>,
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
