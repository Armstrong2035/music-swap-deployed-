import React, { useState, useEffect } from "react";
import ReceiveQuery from "../../TheBridge/ReceiveQuery";

export default function ViewAlbums({ albums }) {
  const [albumList, setAlbumList] = useState([]);
  const [albumsQuery, setAlbumsQuery] = useState([]);

  useEffect(() => {
    const filteredAlbums = albums.filter(
      (album) => album.album.album_type === "album"
    );

    const albumsToAdd = filteredAlbums.map((album) => ({
      id: album.album.id,
      name: album.album.name,
      artist: album.album.artists[0].name,
      image: album.album.images[2].url,
      uri: album.album.uri,
    }));

    const queries = filteredAlbums.map((album) => ({
      name: album.album.name,
      artist: album.album.artists[0].name,
    }));

    setAlbumList((prevAlbumList) => [...prevAlbumList, ...albumsToAdd]);
    setAlbumsQuery((prevAlbumsQuery) => [...prevAlbumsQuery, ...queries]);
  }, [albums]);

  console.log(albumsQuery);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albumList.map((album) => (
          <li key={album.id}>
            <div>
              {album.name} {album.artist}
              <img src={album.image} alt={`${album.name} by ${album.artist}`} />
            </div>
          </li>
        ))}
      </ul>

      <ReceiveQuery albumsQuery={albumsQuery} />
    </div>
  );
}
