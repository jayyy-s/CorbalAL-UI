import React from "react";
import SideBar from "../SideBar";
import "../css/Artist_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SongInfo from "../SongInfo";

function ArtistPage() {
  return (
    <div className="app-container">
      <SideBar />
      <ul>
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
  );
}

export default ArtistPage;
