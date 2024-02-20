import react, { useState, useEffect } from "react";
import GoogleAuth from "./Authentication/GoogleAuth";
import ReceiveQuery from "./ReceiveQuery/ReceiveQuery";

function YouTube({ filteredAlbums }) {
  const [accessToken, setAccessToken] = useState("");
  const [queryArray, setQueryArray] = useState([]);

  const receiveToken = (token) => {
    setAccessToken(token);
  };
  console.log(queryArray);
  return (
    <div>
      <h1>YouTube</h1>
      <GoogleAuth receiveToken={receiveToken} />
      <ReceiveQuery {...{ filteredAlbums, queryArray, setQueryArray }} />
      <
    </div>
  );
}

export default YouTube;
