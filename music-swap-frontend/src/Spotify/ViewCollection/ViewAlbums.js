import React, { useState, useEffect, useMemo } from "react";
import { useStore } from "../../Store/Store";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Typography,
  FormGroup,
  CardContent,
  CardMedia,
  CardActions,
  Checkbox,
  Grid,
} from "@mui/material";

export default function ViewAlbums({ selectAlbum }) {
  const { albums, addToAlbumsToClone, removeFromAlbumsToClone, albumsToClone } =
    useStore((state) => state);

  //

  const handleCheckboxClick = (album) => {
    if (albumsToClone.includes(album)) {
      // If the album is already in albumsToClone, remove it
      removeFromAlbumsToClone(album);
    } else {
      // If the album is not in albumsToClone, add it
      addToAlbumsToClone(album);
    }
  };
  console.log(albums);

  console.log(albumsToClone);

  return (
    <Container>
      <Typography variant="h4" component="h4" gutterBottom>
        Albums to Clone
      </Typography>
      <FormGroup>
        {albums.map((album, idx) => (
          <Card key={idx}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"flex-start"}
              direction={"row"}
              spacing={0}
            >
              <Grid item xs={4} sm={4}>
                <CardMedia>
                  <img
                    src={album.image}
                    alt={`${album.name} by ${album.artist}`}
                  />
                </CardMedia>
              </Grid>
              <Grid item xs={4} sm={4}>
                <CardContent>
                  <Typography>
                    {album.name} {album.artist}
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item xs={4} sm={4}>
                <CardActions>
                  <Checkbox
                    id={`album-${idx}`}
                    name="album"
                    value={album}
                    checked={albumsToClone.includes(album)}
                    onChange={() => handleCheckboxClick(album)}
                    defaultColor={"success"}
                    size={"large"}
                  />
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        ))}
      </FormGroup>

      <Link to="/transfer">
        <Button variant={"contained"} sx={{ backgroundColor: "#011A51" }}>
          Next
        </Button>
      </Link>
    </Container>
  );
}
