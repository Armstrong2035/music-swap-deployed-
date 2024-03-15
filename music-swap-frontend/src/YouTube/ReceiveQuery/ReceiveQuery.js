import React, { useState, useEffect, useMemo } from "react";
import CreatePlaylist from "../CreateCollection/CreatePlaylist";
import { useStore } from "../../Store/Store";

export default function ReceiveQuery() {
  const { albumsToClone, setQueries } = useStore((state) => state);

  const query = useMemo(() => {
    return albumsToClone.map((album) => ({
      title: `${album.name} ${album.artist}`,
      image: album.image,
      tracks: album.tracks.map((track) => `${track.name} by ${album.artist}`),
    }));
  }, [albumsToClone]);

  useEffect(() => {
    setQueries(query);
  }, [query, setQueries]);

  console.log(albumsToClone);
  return (
    <>
      <CreatePlaylist />
    </>
  );
}
