import React, { useEffect } from "react";

const MyComponent = ({ accessToken }) => {
  console.log(accessToken);
  const createPlaylist = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/playlists?part=id,snippet",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            snippet: {
              title: "My new playlist 2222",
              description: "just testing",
              status: {
                privacyStatus: "public",
              },
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("failed to create playlist");

        const data = response.data.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={createPlaylist}>Create Playlist</button>
    </div>
  );
};

export default MyComponent;
