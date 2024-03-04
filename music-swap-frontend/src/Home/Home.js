import React from "react";
import Spotify from "../Spotify/Spotify";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Transfer your music from:</h1>
      <Link to="/spotify">Spotify</Link>
    </div>
  );
}
