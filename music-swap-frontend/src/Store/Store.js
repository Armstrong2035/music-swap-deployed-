import { create } from "zustand";

export const useStore = create((set) => ({
  albums: [],
  accessToken: "",
  albumsToClone: [],
  albumsToShare: [],
  playlists: [],
  playlistsToClone: [],
  playlistsToShare: [],
  youTubeAccessToken: "",
  queries: [],
  uploadData: [],
  color: "",
  setAlbums: (albums) => set({ albums }),
  setPlaylists: (playlists) => set({ playlists }),
  setAccessToken: (accessToken) => set({ accessToken }),
  setYouTubeAccessToken: (youTubeAccessToken) => set({ youTubeAccessToken }),
  setQueries: (queries) => set({ queries }),
  setUploadData: (newUploadobject) =>
    set((state) => ({ uploadData: [...state.uploadData, newUploadobject] })),
  addToAlbumsToClone: (album) => {
    set((state) => {
      return { albumsToClone: [...state.albumsToClone, album] };
    });
  },
  removeFromAlbumsToClone: (album) => {
    set((state) => ({
      albumsToClone: state.albumsToClone.filter((item) => item !== album),
    }));
  },

  addToPlaylistsToClone: (album) => {
    set((state) => {
      return { playlistsToClone: [...state.playlistsToClone, album] };
    });
  },
  removeFromPlaylistsToClone: (album) => {
    set((state) => ({
      playlistsToClone: state.playlistsToClone.filter((item) => item !== album),
    }));
  },

  addToAlbumsToShare: (album) => {
    set((state) => {
      return { albumsToShare: [...state.albumsToShare, album] };
    });
  },
}));

/* Here are the state variables and what they do:
1. albums: an array of album objects that are returned from the Spotify API. The data here is not parsed. It is just the raw data from the API.

2. accessToken: a string that is the access token that is returned from the Spotify API. This is used to authenticate the user and make requests to the Spotify API.
*/
