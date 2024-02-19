import React, { useState, useEffect } from "react";
import ReceiveQuery from "../../TheBridge/ReceiveQuery";

export default function ViewAlbums({ filteredAlbums }) {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {filteredAlbums.map((album, idx) => (
          <li key={`${album.id}`}>
            <div>
              {album.name} {album.artist}
              <img src={album.image} alt={`${album.name} by ${album.artist}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
