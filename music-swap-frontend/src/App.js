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
import Home from "./TheBridge/Home";
import { useStore } from "./Store/Store";
import ExtractAlbums from "./Spotify/ExtractCollection/ExtractAlbums";
import ReceiveQuery from "./YouTube/ReceiveQuery/ReceiveQuery";
import GoogleAuth from "./YouTube/Authentication/GoogleAuth";
import TransferTo from "./TheBridge/TransferTo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transfer" element={<TransferTo />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/spotify/login" element={<SpotifyAuthentication />} />
        <Route path="/spotify/extractalbums" element={<ExtractAlbums />} />
        <Route path="/spotify/viewalbums" element={<ViewAlbums />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/youtube/login" element={<GoogleAuth />} />
        <Route path="/youtube/receivequery" element={<ReceiveQuery />} />
      </Routes>
    </Router>
  );
}

export default App;
