import React from "react";
import { useState } from "react";
import applemusicicon from "../mediaa/applemusicicon.png";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
} from "@mui/material";

export default function AppleMusicAuthentication({ isAppleMusicActive }) {
  const [color, setColor] = useState(isAppleMusicActive ? "#011A51" : "grey");
  return (
    <Box
      variant="outlined"
      sx={{
        backgroundColor: "#F5F5F5",
        color: "black",
        width: "300px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img src={applemusicicon} />

        <Typography
          variant="h4"
          component="p"
          gutterBottom
          sx={{
            color: "000000",
          }}
        >
          Apple Music
        </Typography>
      </Stack>
    </Box>
  );
}
