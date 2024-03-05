import React, { useState } from "react";
import { useStore } from "../../Store/Store";

const CreatePlaylist = () => {
  const { youTubeAccessToken: accessToken, queries } = useStore(
    (state) => state
  );

  console.log(accessToken);

  const createPlaylist = async () => {
    for (const album of queries) {
      try {
        const playlistResponse = await fetch(
          "https://www.googleapis.com/youtube/v3/playlists?part=id,snippet",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken.access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              snippet: {
                title: album.title,
                description: "",
                status: {
                  privacyStatus: "public",
                },
              },
            }),
          }
        );

        const playlistData = await playlistResponse.json();
        const newPlaylistId = playlistData.id;

        for (const track of album.tracks) {
          const searchResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyB0I-vMhKJ2jWoTShRAqIZOal_TFfCxayI&q=${track}&type=video&part=snippet`
          );
          const searchData = await searchResponse.json();
          const videoId = searchData.items[0].id.videoId;

          // Add video to playlist
          await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${accessToken.access_token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                snippet: {
                  playlistId: newPlaylistId,
                  resourceId: {
                    kind: "youtube#video",
                    videoId: videoId,
                  },
                },
              }),
            }
          );
        }
      } catch (error) {
        console.error("Error creating playlist:", error);
      }
    }
  };

  return (
    <div>
      <button onClick={createPlaylist}>Create Playlist</button>
    </div>
  );
};

export default CreatePlaylist;
