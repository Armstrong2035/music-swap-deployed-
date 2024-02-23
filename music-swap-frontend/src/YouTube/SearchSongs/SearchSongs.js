import react, { useState, useEffect } from "react";

function SearchSongs({ accessToken, albumDetails }) {
  const songsToFind = albumDetails.map((album) => {
    return album.tracks;
  });

  const SearchSongs = async () => {
    try {
      const response = await fetch();
    } catch {}
  };

  return <></>;
}

export default SearchSongs;
