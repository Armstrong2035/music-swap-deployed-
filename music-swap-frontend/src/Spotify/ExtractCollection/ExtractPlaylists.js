import React, { useState, useEffect } from "react";

function ExtractPlaylists() {
  async function extractPlaylist() {
    playlistsResponse = await fetch(
      "https://api.spotify.com/v1/me/playlists?limit=50",
      headers
    );

    const playlistsData = await playlistsResponse.json();

    const playlists = await playlistsData.items.map((playlist) => {
      const id = playlist.id;

      const playlistTracks = () => {
        fetch(`https://api.spotify.com/v1/playlists/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const playlists = playlistTracks.json();
      };
    });
  }
}
