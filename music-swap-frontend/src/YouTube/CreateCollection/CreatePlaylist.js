import React, { useEffect, useState } from "react";
import SearchSongs from "../SearchSongs/SearchSongs";

const CreatePlaylist = ({
  accessToken = "ya29.a0AfB_byDTl-1kJYU-DpFWHv0OFv8RtcZTbPpE_U2gfjv1cGvM1fx85yFhlrI_XtGL_9VxefToGwx0BrbsBnsWoUFi4gNWc1ra_Iqo0qznAbcNH0YJqMwzicONNwxux5aigYFkeqSJO6wqQfMMcBaPeSBAj0tQJ4q75CAaCgYKAVoSARMSFQHGX2MifdyAw2_MEzdlsKtOPUlkqQ0170",
  albumDetails,
}) => {
  const [playlistId, setPlaylistId] = useState("");

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
              title: "My new playlist 2223",
              description: "just testing",
              status: {
                privacyStatus: "public",
              },
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setPlaylistId(data.id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(playlistId);

  return (
    <div>
      <button onClick={createPlaylist}>Create Playlist</button>
      <SearchSongs {...{ accessToken, albumDetails }} />
    </div>
  );
};

export default CreatePlaylist;
