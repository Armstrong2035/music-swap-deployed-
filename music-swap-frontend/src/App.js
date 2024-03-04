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
  const [albumsToClone, setAlbumsToClone] = useState([]);

  const { albums, setFilteredAlbums } = useStore((state) => state);

  // const parsedAlbums = useMemo(
  //   () =>
  //     albums
  //       .filter((album) => album.album.album_type === "album")
  //       .map((album) => ({
  //         id: album.album.id,
  //         name: album.album.name,
  //         artist: album.album.artists[0].name,
  //         image: album.album.images[2].url,
  //         tracks: album.album.tracks.items.map((track) => ({
  //           id: track.id,
  //           name: track.name,
  //         })),
  //       })),
  //   []
  // );

  // console.log("hi");
  // console.log(parsedAlbums);
  // setFilteredAlbums(parsedAlbums);

  const selectAlbum = (album) => {
    if (!albumsToClone.includes(album)) {
      setAlbumsToClone([...albumsToClone, album]);
    } else {
      alert("Album already selected");
    }
  };

  // console.log(albumsToClone);

  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={accessToken ? <Navigate to={"/spotify"} /> : <Home />}
        /> */}
        <Route path="/" element={<Spotify {...{ selectAlbum }} />}></Route>

        <Route
          path="/youtube"
          element={<YouTube {...{ albumsToClone }} />}
        ></Route>
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;
