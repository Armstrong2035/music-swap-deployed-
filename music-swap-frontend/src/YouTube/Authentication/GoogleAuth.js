import React, { useEffect, useState } from "react";
import { useStore } from "../../Store/Store";
import { useNavigate } from "react-router-dom";

const GoogleAuth = ({ receiveAccessToken }) => {
  // const [token, setToken] = useState(null);
  const [client, setClient] = useState(null);
  const { youTubeAccessToken, setYouTubeAccessToken } = useStore(
    (state) => state
  );
  const navigate = useNavigate();

  useEffect(() => {
    const loadGoogleIdentityPlatform = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => {
        initTokenClient();
      };
      document.body.appendChild(script);
    };

    const initTokenClient = () => {
      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id:
          "639409206129-0jtt27lo6t93agp5k9qnm48t1cqrtg1e.apps.googleusercontent.com",
        scope:
          "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner",
        callback: (response) => {
          console.log(response);
          setYouTubeAccessToken(response);

          if (response) {
            navigate("/youtube/receivequery");
          }
        },
      });
      setClient(tokenClient);
      // console.log(tokenClient);
    };

    if (
      !window.google ||
      !window.google.accounts ||
      !window.google.accounts.oauth2
    ) {
      loadGoogleIdentityPlatform();
    } else {
      initTokenClient();
    }
  }, []);

  const handleAuthClick = () => {
    if (client) {
      client.requestAccessToken();
    }
  };

  // setYouTubeAccessToken(token);
  console.log(youTubeAccessToken);

  // console.log(accessToken);

  return (
    <div>
      <button onClick={handleAuthClick}>Login to YouTube</button>
    </div>
  );
};

export default GoogleAuth;
