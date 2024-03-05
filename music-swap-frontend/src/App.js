import React, { useState, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Spotify from "./Spotify/Spotify";
import YouTube from "./YouTube/YouTube";
import Home from "./Home/Home";
import { useStore } from "./Store/Store";

function App() {
  return (
    <div>
      <Spotify />
      <YouTube />
    </div>
  );
}

export default App;
