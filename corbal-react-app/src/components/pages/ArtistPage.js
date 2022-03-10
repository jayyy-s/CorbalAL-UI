import React from "react";
import SideBar from "../SideBar";
import "../css/Artist_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SongInfo from "../SongInfo";
import UserCard from "../UserCard";
import YourBids from "../YourBids";

function ArtistPage() {
  return (
    <html>    
      <div className="app-container">
        <div class="row">
          <div class="col-md-1">
            <SideBar />
          </div>
          <div class="col-md-6">
            <UserCard 
              src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/323/176.jpg'
              username='77777777'
              realName='Jef'
              age='500'
              genre='the genre'
              location='Boston, MA'
              email='strictly@business.com'
              phone='111-222-3333' />
            <YourBids
              numCompleted="10"
              numPending="10"
              numUnread="10"
            />
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
          </div>
        </div>
      </div>
    </html>
  );
}

export default ArtistPage;
