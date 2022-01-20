import React, { useState } from "react";
import { Box } from "@mui/material";

import Post from "./Post";

const Posts = ({ posts }) => {
  const [toggleLike, setToggleLike] = useState(false);

  const handleToggleLike = () => {
    setToggleLike(prev => !prev);
  };

  return (
    <Box>
      {posts.map(post => (
        <Post
          post={post}
          toggleLike={toggleLike}
          handleToggleLike={handleToggleLike}
          key={posts.id}
        />
      ))}
    </Box>
  );
};

export default Posts;
