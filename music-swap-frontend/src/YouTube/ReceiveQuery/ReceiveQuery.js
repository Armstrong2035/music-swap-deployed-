import React, { useState, useEffect } from "react";

export default function ReceiveQuery({
  filteredAlbums,
  setQueryArray,
  queryArray,
}) {
  useEffect(() => {
    const query = filteredAlbums.map((album) => {
      return `${album.name} ${album.artist}`;
    });
    setQueryArray(query);
  }, [filteredAlbums]);
  return (
    <>
      <CloneAlbum />
    </>
  );
}
