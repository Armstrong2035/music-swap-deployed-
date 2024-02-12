import React, { useState, useEffect } from "react";

export default function ViewAlbums({ albums }) {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    const albumsToAdd = albums.map((i, index) => ({
      id: index,
      album: i.album.name,
      artist: i.album.artists[0].name,
      image: i.album.images[2].url,
      uri: i.album.uri,
    }));
    setAlbumList((prevAlbumList) => [...prevAlbumList, ...albumsToAdd]);
  }, [albums]);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albumList.map((album) => (
          <li key={album.id}>
            {album.album} {album.artist}
            <img src={album.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
