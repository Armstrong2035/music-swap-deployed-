import React, { useState, useEffect, useMemo } from "react";
import ViewAlbums from "../ViewCollection/ViewAlbums";
import { useStore } from "../../Store/Store";

export default function ExtractAlbums({ filteredAlbums }) {
  const { setAlbums, accessToken } = useStore((state) => state);

  console.log(accessToken);

  const extractAlbums = () => {
    var headers = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    fetch("https://api.spotify.com/v1/me/albums?limit=50", headers)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const parsedAlbums = data.items
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
          }));

        setAlbums(parsedAlbums);
      });
  };

  return (
    <>
      <button onClick={extractAlbums}>Generate albums</button>
    </>
  );
}

// export { ExtractAlbums };
