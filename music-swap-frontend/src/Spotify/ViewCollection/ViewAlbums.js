import React, { useState, useEffect, useMemo } from "react";
import { useStore } from "../../Store/Store";
import { Link } from "react-router-dom";

export default function ViewAlbums({ selectAlbum }) {
  const { albums, addToAlbumsToClone, removeFromAlbumsToClone, albumsToClone } =
    useStore((state) => state);

  //

  const handleCheckboxClick = (album) => {
    if (albumsToClone.includes(album)) {
      // If the album is already in albumsToClone, remove it
      removeFromAlbumsToClone(album);
    } else {
      // If the album is not in albumsToClone, add it
      addToAlbumsToClone(album);
    }
  };
  console.log(albums);

  console.log(albumsToClone);

  return (
    <div>
      <h3>
        These are your Spotify Albums. You can only pick one to send to YouTube,
        for now
      </h3>
      <form>
        {albums.map((album, idx) => (
          <div key={idx}>
            <label htmlFor={`album-${idx}`}>
              <img src={album.image} alt={`${album.name} by ${album.artist}`} />
              {album.name} {album.artist}
              <input
                type="checkbox"
                id={`album-${idx}`}
                name="album"
                value={album}
                checked={albumsToClone.includes(album)}
                onChange={() => handleCheckboxClick(album)}
              />
            </label>
          </div>
        ))}
      </form>

      <div>
        <Link to="/youtube/login"> Confirm </Link>
      </div>
    </div>
  );
}
