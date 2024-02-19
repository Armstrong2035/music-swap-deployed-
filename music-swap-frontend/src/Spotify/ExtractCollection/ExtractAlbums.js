import React, { useState, useEffect } from "react";
import ViewAlbums from "../ViewCollection/ViewAlbums";

export default function ExtractAlbums({
  accessToken,
  receiveAlbums,
  setAlbums,
}) {
  // const [albums, setAlbums] = useState(() => {
  //   const localData = localStorage.getItem("albums");
  //   return localData ? JSON.parse(localData) : [];
  // });

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
        setAlbums(data.items);
      });
  };

  return (
    <>
      <button onClick={extractAlbums}>Generate albums</button>
    </>
  );
}

// export { ExtractAlbums };
