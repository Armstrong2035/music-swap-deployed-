import react, { useState, useEffect } from "react";
import GoogleAuth from "./Authentication/YouTubeAuthentication";
import ReceiveQuery from "../TheBridge/ReceiveQuery";

function YouTube({ albums }) {
  const [accessToken, setAccessToken] = useState("");
  const [queryArray, setQueryArray] = useState([]);

  const receiveToken = (token) => {
    setAccessToken(token);
  };

  console.log(albums);
  return (
    <div>
      <h1>YouTube</h1>
      <GoogleAuth receiveToken={receiveToken} />
      {/* <ReceiveQuery collectQuery={collectQuery} /> */}
    </div>
  );
}

export default YouTube;
