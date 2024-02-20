import React, { useEffect, useState } from "react";

const GoogleAuth = ({ receiveToken }) => {
  const [client, setClient] = useState(null);
  const [token, setToken] = useState("");

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
          "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl",
        callback: (response) => {
          console.log(response);
          setToken(response.access_token);
        },
      });
      setClient(tokenClient);
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

  receiveToken(token);

  return (
    <div>
      <button onClick={handleAuthClick}>Login to YouTube</button>
    </div>
  );
};

export default GoogleAuth;
