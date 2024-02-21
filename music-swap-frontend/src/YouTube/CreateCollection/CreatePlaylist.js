import React, { useState, useEffect } from "react";

export default function CreatePlaylist({ queryArray, setYouTubeAlbums }) {
  useEffect(() => {
    const fetchAlbumData = async () => {
      const albumData = [];
      let errorOccured = false;
      for (const query of queryArray) {
        if (errorOccured) {
          break;
        }
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDFmaNtVlA__pYH6higfqR9TdSZf7WuYVo&q=${query}&part=snippet&type=playlist`
          );
          const data = await response.json();
          if (data.items && data.items.length > 0) {
            albumData.push(data.items[0]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      setYouTubeAlbums(albumData);
    };

    fetchAlbumData();
  }, [queryArray]);

  return <></>;
}
