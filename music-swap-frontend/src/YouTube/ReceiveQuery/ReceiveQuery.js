import React, { useState, useEffect } from "react";
import CloneAlbum from "../CreateCollection/CreatePlaylist";
import SearchAlbums from "../CreateCollection/CreatePlaylist";
import { useStore } from "../../Store/Store";

export default function ReceiveQuery() {
  const { albumsToClone, setQueries } = useStore((state) => state);

  useEffect(() => {
    const query = albumsToClone.map((album) => {
      return {
        title: `${album.name} ${album.artist}`,
        tracks: album.tracks.map((track) => `${track.name} by ${album.artist}`),
      };
    });
    setQueries(query);
  }, [albumsToClone]);

  console.log(albumsToClone);
  return <></>;
}
