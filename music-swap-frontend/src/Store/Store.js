import { create } from "zustand";

export const useStore = create((set) => ({
  albums: [],
  accessToken: "",
  albumsToClone: [],
  youTubeAccessToken: "",
  setAlbums: (albums) => set({ albums }),
  setAccessToken: (accessToken) => set({ accessToken }),
  setYouTubeAccessToken: (youTubeAccessToken) => set({ youTubeAccessToken }),
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
}));

/* Here are the state variables and what they do:
1. albums: an array of album objects that are returned from the Spotify API. The data here is not parsed. It is just the raw data from the API.

2. accessToken: a string that is the access token that is returned from the Spotify API. This is used to authenticate the user and make requests to the Spotify API.
*/
