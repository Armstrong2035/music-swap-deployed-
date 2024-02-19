import react, { useState, useEffect } from "react";
import GoogleAuth from "./Authentication/YouTubeAuthentication";
import ReceiveQuery from "../TheBridge/ReceiveQuery";

function YouTube() {
  const [accessToken, setAccessToken] = useState("");
  const [query, setQuery] = useState([]);

  const receiveToken = (token) => {
    setAccessToken(token);
  };

  const receiveQuery = (query) => {
    setQuery((prevQuery) => [...prevQuery, query]);
  };

  // useEffect(() => {
  //   console.log(accessToken);
  // }, [accessToken]);

  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <div>
      <h1>YouTube</h1>
      <GoogleAuth receiveToken={receiveToken} />
      <ReceiveQuery receiveQuery={receiveQuery} />
    </div>
  );
}

export default YouTube;
