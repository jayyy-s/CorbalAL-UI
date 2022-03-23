import React from "react";
import "./css/yourMusic.css";
import { Link } from "react-router-dom";

function YourMusic(props) {

  const viewAll = [
    {
      key: "home",
      link: "/",
    }
  ];

  return (
    <div class="YourMusic ml-align">
      <div class="your-music-wrapper">
        <div class="your-bids-text">Your Music</div>
        
          {viewAll.map(({ key, link }) => {
            return (
              <div className="view-all-button" >
                <Link className="view-all-link" to={link} key={key}>View All</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default YourMusic;
