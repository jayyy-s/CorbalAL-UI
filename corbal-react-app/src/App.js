import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/pages/LogIn";
// import Playlist from "./components/pages/Playlist";
import ArtistPage from "./components/pages/ArtistPage";
import CuratorPage from "./components/pages/CuratorPage";
import ArtistFeedTracksPage from "./components/pages/ArtistFeedTracksPage";
import ArtistFeedOffersPage from "./components/pages/ArtistFeedOffersPage";

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>

        <Routes>
          <Route path="/" element={<LogIn />} />
          {/* <Route path="/playlists" element={<Playlist />} /> */}
          <Route path="/artist/home" element={<ArtistPage />} />
          <Route path="/curator/home" element={<CuratorPage />} />
          <Route path="/artist/tracks" element={<ArtistFeedTracksPage />} />
          <Route path="/artist/offers" element={<ArtistFeedOffersPage />} />
        </Routes>

      </React.StrictMode>
    );
  }
}

export default App;
