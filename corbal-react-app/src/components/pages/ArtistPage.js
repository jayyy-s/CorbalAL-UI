import React from "react";
import SideBar from "../SideBar";
import BidInfo from "../BidInfo";
import SongInfo from "../SongInfo";
import UserCard from "../UserCard";
import YourBids from "../YourBids";
import YourMusic from "../YourMusic";


import "../css/Artist_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ArtistPage() {
  return (
<div className="app-container">
    <div className="sideBar-container">
        <SideBar />
    </div>
    <div className="main-container">
        <div className="header-container">
            <UserCard src="https://i.kym-cdn.com/photos/images/newsfeed/002/205/323/176.jpg" username="77777777"
                realName="Jef" age="500" genre="the genre" location="Boston, MA" email="strictly@business.com"
                phone="111-222-3333" />
        </div>
        <div className="body-container">
            <div className="bid-section">
                <YourBids numCompleted="10" numPending="10" numUnread="10" />
                <div class="ml-align">
                    <div class="bids-divider"></div>
                </div>
                <div className="ml-align">
                    <BidInfo songName="where heebo" genre="GENRE??????" playlistPosition="number 1"
                        timeFeatured="65 days" />
                    <BidInfo songName="who heebo" genre="genre." playlistPosition="9" timeFeatured="2 days" />
                </div>
            </div>
            <div className="music-section">
                <YourMusic numCompleted="10" numPending="10" numUnread="10" />
                <div class="ml-align">
                    <div class="bids-divider"></div>
                </div>
                <div className="ml-align">
                    <SongInfo songName="where heebo" genre="GENRE??????" totalRevenue="$100"
                        totalListens="65" />
                    <SongInfo songName="who heebo" genre="genre." totalRevenue="$200" totalListens="25" />
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default ArtistPage;
