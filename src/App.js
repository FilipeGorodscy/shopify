import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import Posts from "./components/Posts";

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Exposing API Key for the purpose of the challenge, otherwise would hide under a .env file
      const { data } = await axios.get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=2cq3Ijgxe7IvwdjFYrmoh3xWMT8fLmBh1CfMmRfY"
      );
      setPhotos(data.photos);
    };
    fetchPosts();
  }, []);
  return (
    <Grid container justifyContent="center">
      <Posts posts={photos} />
    </Grid>
  );
};

export default App;
