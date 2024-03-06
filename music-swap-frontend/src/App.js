import React, { useState, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Spotify from "./Spotify/Spotify";
import SpotifyAuthentication from "./Spotify/Authentication/SpotifyAuthentication";
import ViewAlbums from "./Spotify/ViewCollection/ViewAlbums";
import YouTube from "./YouTube/YouTube";
import Home from "./Home/Home";
import { useStore } from "./Store/Store";
import ExtractAlbums from "./Spotify/ExtractCollection/ExtractAlbums";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/spotify/login" element={<SpotifyAuthentication />} />
        <Route path="/spotify/extractalbums" element={<ExtractAlbums />} />
        <Route path="/spotify/viewalbums" element={<ViewAlbums />} />
        <Route path="/youtube" element={<YouTube />} />
      </Routes>
    </Router>
  );
}

export default App;
