import React, { useState } from "react";
import SpotifyAuthentication from "./Authentication/SpotifyAuthentication";
import ExtractAlbums from "./ExtractCollection/ExtractAlbums";
import GoogleAuth from "../YouTube/Authentication/GoogleAuth";
import ViewAlbums from "./ViewCollection/ViewAlbums";
import { useStore } from "../Store/Store";

function Spotify({ setAlbums, filteredAlbums, selectAlbum }) {
  const { accessToken } = useStore((state) => state);

  return (
    <div>
      <SpotifyAuthentication />
      <ExtractAlbums />
      <ViewAlbums />
    </div>
  );
}

export default Spotify;
