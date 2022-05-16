import React from "react";
import {Routes, Route } from "react-router-dom";
import LogIn from "./components/pages/LogIn";
import ArtistPage from "./components/pages/ArtistPage";
import CuratorPage from "./components/pages/CuratorPage";
import ArtistFeedTracksPage from "./components/pages/ArtistFeedTracksPage";
import ArtistFeedOffersPage from "./components/pages/ArtistFeedOffersPage";
import CuratorFeedMusicPage from  "./components/pages/CuratorFeedMusicPage";
import CuratorFeedMyBidsPage from "./components/pages/CuratorFeedMyBidsPage";
import CuratorFeedCompletedBidsPage from "./components/pages/CuratorFeedCompletedBidsPage";

/**
 * The App Component serves as the Single Page where we render different components
 * based on the url.
 */
class App extends React.Component {
  render() {
    return (
      <React.StrictMode>

        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/artist/home" element={<ArtistPage />} />
          <Route path="/curator/home" element={<CuratorPage />} />
          <Route path="/artist/tracks" element={<ArtistFeedTracksPage />} />
          <Route path="/artist/offers" element={<ArtistFeedOffersPage />} />
          <Route path="/curator/music" element={<CuratorFeedMusicPage />} />
          <Route path="/curator/completed-bids" element={<CuratorFeedCompletedBidsPage />} />
          <Route path="/curator/my-bids" element={<CuratorFeedMyBidsPage />} />
        </Routes>

      </React.StrictMode>
    );
  }
}

export default App;
