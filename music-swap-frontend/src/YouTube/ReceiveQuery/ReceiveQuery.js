import React, { useState, useEffect, useMemo } from "react";
import CreatePlaylist from "../CreateCollection/CreatePlaylist";
import { useStore } from "../../Store/Store";

export default function ReceiveQuery() {
  const { albumsToClone, playlistsToClone, setQueries } = useStore(
    (state) => state
  );

  const newQueries = [];

  for (const album of albumsToClone) {
    const query = {
      title: `${album.name} ${album.artist}`,
      image: album.image,
      tracks: album.tracks.map((track) => `${track.name} by ${album.artist}`),
    };

    newQueries.push(query);
  }

  for (const playlist of playlistsToClone) {
    const query = {
      title: `${playlist.name}`,
      tracks: playlist.tracks.map(
        (track) => `${track.name} by ${track.artist}`
      ),
    };
    newQueries.push(query);
  }

  console.log(newQueries);

  useMemo(() => {
    setQueries(newQueries);
  }, [albumsToClone, playlistsToClone]);

  return (
    <>
      <CreatePlaylist />
    </>
  );
}
