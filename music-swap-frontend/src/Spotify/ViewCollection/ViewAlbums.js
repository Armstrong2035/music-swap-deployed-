import React, { useState, useEffect } from "react";

export default function ViewAlbums({ albums }) {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    const filteredAlbums = albums.filter(
      (album) => album.album.album_type === "album"
    );
    const albumsToAdd = filteredAlbums.map((album) => ({
      id: album.album.id,
      album: album.album.name,
      artist: album.album.artists[0].name,
      image: album.album.images[2].url,
      uri: album.album.uri,
    }));
    setAlbumList((prevAlbumList) => [...prevAlbumList, ...albumsToAdd]);
  }, [albums]);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albumList.map((album) => (
          <li key={album.id}>
            <div>
              {album.album} {album.artist}
              <img
                src={album.image}
                alt={`${album.album} by ${album.artist}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
