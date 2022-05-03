import React from "react";
import "./css/yourMusic.css";
import { Link } from "react-router-dom";

function YourMusic(props) {


  return (
    <div class="YourMusic ml-align">
      <div class="your-bids-text">Your Music</div>
      <div className="view-all-button" >
        <Link className="view-all-link" to="/artist/tracks" >View All</Link>
      </div>
    </div>
  );
}

export default YourMusic;
