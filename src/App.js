import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import Posts from "./components/Posts";

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(process.env.REACT_APP_NASA_URL);
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
