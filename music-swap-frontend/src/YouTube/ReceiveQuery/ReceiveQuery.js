import React, { useState, useEffect } from "react";
import CloneAlbum from "../CreateCollection/CreatePlaylist";
import SearchAlbums from "../CreateCollection/CreatePlaylist";

export default function ReceiveQuery({
  filteredAlbums,
  setAlbumDetails,
  queryArray,
}) {
  useEffect(() => {
    const query = filteredAlbums.map((album) => {
      return {
        title: `${album.name} ${album.artist}`,
        tracks: album.tracks.map((track) => `${track.name} by ${album.artist}`),
      };
    });
    setAlbumDetails(query);
  }, [filteredAlbums]);
  return <></>;
}
