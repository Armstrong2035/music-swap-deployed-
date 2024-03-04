import React, { useState, useEffect, useMemo } from "react";
import { useStore } from "../../Store/Store";

export default function ViewAlbums({ selectAlbum }) {
  const { albums } = useStore((state) => state);

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
                value={album.id}
              />
            </label>
          </div>
        ))}

        <button type="submit">Clone Albums</button>
      </form>
    </div>
  );
}
{
  /* <ul>
        {albums.map((album, idx) => (
          <li key={`${album.id}`}>
            <div>
              <img src={album.image} alt={`${album.name} by ${album.artist}`} />
              {album.name} {album.artist}
              <button onClick={() => selectAlbum(album)}>+</button>
            </div>
          </li>
        ))}
      </ul> */
}
