import React, { useEffect, useState } from "react";
import Spotify from "./Spotify/Spotify";

function App() {
  const [token, setToken] = useState("");
  const receiveToken = (token) => {
    setToken(token);
    console.log(token);
  };
  return (
    <>
      <Spotify />
    </>
  );
}

export default App;
