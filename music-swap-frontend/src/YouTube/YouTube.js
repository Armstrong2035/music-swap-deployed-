import react, { useState, useEffect } from "react";
import GoogleAuth from "./Authentication/GoogleAuth";
import ReceiveQuery from "./ReceiveQuery/ReceiveQuery";
import CreatePlaylist from "./CreateCollection/CreatePlaylist";
import SearchSongs from "./SearchSongs/SearchSongs";

function YouTube({ albumsToClone }) {
  return (
    <div>
      <h1>YouTube</h1>
      <GoogleAuth />
      <ReceiveQuery />
      <CreatePlaylist />
    </div>
  );
}

export default YouTube;
