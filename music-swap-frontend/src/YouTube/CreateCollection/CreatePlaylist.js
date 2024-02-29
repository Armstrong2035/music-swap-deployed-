import React, { useState } from "react";
// import SearchSongs from "../SearchSongs/SearchSongs";

const CreatePlaylist = ({
  accessToken = "ya29.a0AfB_byBKZKqsZcPqFTmCB37tQG5U0xvkJrMnkBM9voF5CjDVI0qDLl9_GAP_GTODIrgMfV9UbtawMT8NjijaNGZaQgekd7MGWfYTSu1iXUtVN_eklGuAU6qSEeQkUlZQyxKisamuQ5IvuCsIcPdEu0ItS3MhYBgB5UAaCgYKAT4SARMSFQHGX2Mi67JJouiEbocLaIY5iKnO9A0170",
  // albumDetails,
}) => {
  const albumDetails = [
    {
      title: "Album 1",
      tracks: [
        "Bohemian Rhapsody - Queen",
        "Hotel California - Eagles",
        "Stairway to Heaven - Led Zeppelin",
      ],
    },
    {
      title: "Album 2",
      tracks: [
        "Imagine - John Lennon",
        "Hey Jude - The Beatles",
        "Thriller - Michael Jackson",
      ],
    },
  ];
  console.log(albumDetails);

  const createPlaylist = async () => {
    for (const album of albumDetails) {
      try {
        const playlistResponse = await fetch(
          "https://www.googleapis.com/youtube/v3/playlists?part=id,snippet",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              snippet: {
                title: album.title,
                description: "just testing",
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
                Authorization: `Bearer ${accessToken}`,
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
