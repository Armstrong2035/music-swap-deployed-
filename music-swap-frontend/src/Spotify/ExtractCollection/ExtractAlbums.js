import React, { useEffect } from "react";
import { useStore } from "../../Store/Store";
import ViewAlbums from "../ViewCollection/ViewAlbums";

export default function ExtractAlbums() {
  const { albums, setAlbums, playlists, setPlaylists, accessToken } = useStore(
    (state) => state
  );

  useEffect(() => {
    if (accessToken) {
      const headers = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      async function getCollection() {
        try {
          const albumsResponse = await fetch(
            "https://api.spotify.com/v1/me/albums?limit=50",
            headers
          );
          const albumsData = await albumsResponse.json();

          const parsedAlbums = albumsData.items
            .filter((album) => album.album.album_type === "album")
            .map((album) => ({
              id: album.album.id,
              name: album.album.name,
              artist: album.album.artists[0].name,
              image: album.album.images[2].url,
              tracks: album.album.tracks.items.map((track) => ({
                id: track.id,
                name: track.name,
              })),
            }));

          setAlbums(parsedAlbums);

          const playlistsResponse = await fetch(
            "https://api.spotify.com/v1/me/playlists?limit=50",
            headers
          );
          const playlistsData = await playlistsResponse.json();

          const parsedPlaylists = await Promise.all(
            playlistsData.items.map(async (playlist) => {
              const playlistResponse = await fetch(
                `https://api.spotify.com/v1/playlists/${playlist.id}`,
                headers
              );
              const playlistData = await playlistResponse.json();

              // console.log(playlistData);

              return {
                id: playlistData.id,
                name: playlistData.name
                  ? playlistData.name
                  : playlistData.owner.display_name,

                tracks: playlistData.tracks.items.map((track) => ({
                  name: track.track.name,
                  artist: track.track.artists[0].name,
                })),
              };
            })
          );

          setPlaylists(parsedPlaylists);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      getCollection();
    }
  }, [accessToken]);

  // useEffect(() => {
  //   console.log(albums);
  //   console.log(playlists);
  // });

  return (
    <>
      <ViewAlbums />
    </>
  );
}
