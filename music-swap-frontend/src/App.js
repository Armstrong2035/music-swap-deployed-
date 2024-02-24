import React, { useState, useEffect, useMemo } from "react";
import Spotify from "./Spotify/Spotify";
import YouTube from "./YouTube/YouTube";

function App() {
  const [albums, setAlbums] = useState(() => {
    const localData = localStorage.getItem("albums");
    return localData ? JSON.parse(localData) : [];
  });
  const [albumsToClone, setAlbumsToClone] = useState([]);

  const filteredAlbums = useMemo(
    () =>
      albums
        .filter((album) => album.album.album_type === "album")
        .map((album) => ({
          id: album.album.id,
          name: album.album.name,
          artist: album.album.artists[0].name,
          image: album.album.images[2].url,
          tracks: album.album.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
          })),
        })),
    [albums]
  );

  const selectAlbum = (album) => {
    if (!albumsToClone.includes(album)) {
      setAlbumsToClone([...albumsToClone, album]);
    } else {
      alert("Album already selected");
    }
  };

  console.log(albumsToClone);

  return (
    <div>
      <Spotify {...{ filteredAlbums, selectAlbum, setAlbums }} />
      <YouTube {...{ albumsToClone }} />
    </div>
  );
}

export default App;
