import React, { useState, useEffect } from "react";

export default function ExtractAlbums({ accessToken, receiveAlbums }) {
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
        receiveAlbums(data.items);
      });
  };

  return (
    <>
      <button onClick={extractAlbums}>Generatae albums</button>
    </>
  );
}

// export { ExtractAlbums };
