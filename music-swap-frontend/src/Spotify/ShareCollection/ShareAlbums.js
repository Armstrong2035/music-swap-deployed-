import React from "react";
import { useStore } from "../../Store/Store";

function ShareAlbums() {
  const { albums, albumsToShare, addToAlbumsToShare } = useStore(
    (state) => state
  );

  const handleCheckboxClick = (album) => {
    if (albumsToShare.includes(album)) {
      // If the album is already in albumsToClone, remove it
      alert(`${album} is already on your share list`);
    } else {
      // If the album is not in albumsToClone, add it
      addToAlbumsToClone(album);
    }
  };

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

    <Button variant={"contained"} sx={{ backgroundColor: "#011A51" }}>
      Share
    </Button>
  </Container>;
}
