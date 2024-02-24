import React, { useState, useEffect } from "react";

export default function ViewAlbums({ filteredAlbums, selectAlbum }) {
  return (
    <div>
      <h3>
        These are your Spotify Albums. You can only pick one to send to YouTube,
        for now
      </h3>
      <ul>
        {filteredAlbums.map((album, idx) => (
          <li key={`${album.id}`}>
            <div>
              <img src={album.image} alt={`${album.name} by ${album.artist}`} />
              {album.name} {album.artist}
              <button onClick={() => selectAlbum(album)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
