import React from "react";
import SideBar from "../SideBar";
import "../css/Artist_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SongInfo from "../SongInfo";
import UserCard from "../UserCard";

function ArtistPage() {
  return (
    <html>    
      <div className="app-container">
        <div class="row">
          <div class="col-md-1">
            <SideBar />
          </div>
          <div class="col-md-6">
            <ul>
              <UserCard 
                src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/323/176.jpg'/>
              <SongInfo 
                songName='where heebo'
                genre='GENRE??????'
                playlistPosition='number 1'
                timeFeatured='65 days' />
              <SongInfo
                songName='who heebo'
                genre='genre.'
                playlistPosition='9'
                timeFeatured='2 days' />
            </ul>
          </div>
        </div>
      </div>
    </html>
  );
}

export default ArtistPage;
