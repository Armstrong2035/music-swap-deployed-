import React from "react";
import { useState } from "react";
import applemusicicon from "../mediaa/applemusicicon.png";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";

export default function AppleMusicAuthentication({ isAppleMusicActive }) {
  const [color, setColor] = useState(isAppleMusicActive ? "#011A51" : "grey");
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: color,
        color: "black",
        maxwidth: 300,
      }}
      raised={true}
    >
      <CardContent>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CardMedia>
            <img src={applemusicicon} />
          </CardMedia>
          <Typography
            variant="h4"
            component="p"
            gutterBottom
            sx={{
              color: "white",
            }}
          >
            Apple Music
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
