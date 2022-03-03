import "../App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/pages/LogIn";
import Playlist from "./components/pages/Playlist"

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/playlists" element={<Playlist />} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
