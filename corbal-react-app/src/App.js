import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/pages/LogIn";
// import Playlist from "./components/pages/Playlist";
import ArtistPage from "./components/pages/ArtistPage";
import CuratorPage from "./components/pages/CuratorPage";

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            {/* <Route path="/playlists" element={<Playlist />} /> */}
            <Route path="/artist/home" element={<ArtistPage />} />
            <Route path="/curator/home" element={<CuratorPage />} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
