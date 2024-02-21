import React, { useEffect } from "react";

export default function CloneAlbums({ youTubeAlbums, accessToken }) {
  useEffect(() => {
    console.log(`${youTubeAlbums} ${accessToken}`);
  }, [youTubeAlbums, accessToken]);

  const exportAlbums = async () => {
    for (const album of youTubeAlbums) {
      const PLAYLIST_ID = album.id.playlistId;
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&access_token=${accessToken}`;
      const requestBody = {
        snippet: {
          playlistId: PLAYLIST_ID,
          resourceId: {
            kind: "youtube#playlist",
            playlistId: PLAYLIST_ID,
          },
        },
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Playlist saved successfully:", data);
        } else {
          console.error(
            "Failed to save playlist:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error saving playlist:", error);
      }
    }
  };

  return (
    <>
      <div>
        <button onClick={exportAlbums}>Export to youtube</button>
      </div>
    </>
  );
}
