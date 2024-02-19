import react, { useState, useEffect } from "react";
import GoogleAuth from "./Authentication/YouTubeAuthentication";

function YouTube() {
  const [accessToken, setAccessToken] = useState("");
  const receiveToken = (token) => {
    setAccessToken(token);
  };

  // useEffect(() => {
  //   console.log(accessToken);
  // }, [accessToken]);
  return (
    <div>
      <h1>YouTube</h1>
      <GoogleAuth receiveToken={receiveToken} />
    </div>
  );
}

export default YouTube;
