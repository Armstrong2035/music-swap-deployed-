// const CLIENT_ID =
//   "639409206129-0jtt27lo6t93agp5k9qnm48t1cqrtg1e.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";
// const REDIRECT_URI = "http://localhost:3000";
// const AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
// const RESPONSE_TYPE = "token";

// const scopes = "https://www.googleapis.com/auth/youtube";

// export const getTokenFromUrl = () =>
//   window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial, item) => {
//       const parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);
//       return initial;
//     }, {});

// export const youtubeLogin = () =>
//   `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
//     "%20"
//   )}&response_type=${RESPONSE_TYPE}&show_dialog=${true}`;
