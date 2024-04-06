const CLIENT_ID = "b841fe980d704720934f655f5e92d2e3";
const REDIRECT_URI = "http://localhost:3000/spotify/login";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const scopes = ["playlist-read-private", "user-library-read"];

export const getTokenFromUrl = () =>
  window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

export const spotifyLogin = () =>
  `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
    "%20"
  )}&response_type=${RESPONSE_TYPE}&show_dialog=${true}`;
