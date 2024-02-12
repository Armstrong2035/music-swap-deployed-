import React, { useEffect, useState } from "react";
import GenerateAccessToken from "./Authentication/SpotifyAuthentication";

function App() {
  const [token, setToken] = useState("");
  const receiveToken = (token) => {
    setToken(token);
    console.log(token);
  };
  return (
    <>
      <GenerateAccessToken receiveToken={receiveToken} />
    </>
  );
}

export default App;
