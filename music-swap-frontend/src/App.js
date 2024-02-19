import React, { useEffect, useState } from "react";
import Spotify from "./Spotify/Spotify";
import YouTube from "./YouTube/YouTube";

function App() {
  const [token, setToken] = useState("");
  const receiveToken = (token) => {
    setToken(token);
    console.log(token);
  };
  return (
    <>
      <Spotify />
      <YouTube />
    </>
  );
}

export default App;
