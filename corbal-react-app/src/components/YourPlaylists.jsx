import React from "react";
import "./css/yourMusic.css";
import { Link } from "react-router-dom";

function YourMusic(props) {


  return (
    <div class="YourMusic ml-align">
      <div class="your-music-wrapper">
        <div class="your-bids-text">Your Top Playlists</div>
        <div className="view-all-button" >
                <Link className="view-all-link" to="/curator/music" >View All</Link>
              </div>
      </div>
    </div>
  );
}

export default YourMusic;
