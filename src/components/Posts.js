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
      {posts.map((post, i) => (
        <Post
          // Using index here because post.id is equal in both elements
          key={i}
          post={post}
          toggleLike={toggleLike}
          handleToggleLike={handleToggleLike}
        />
      ))}
    </Box>
  );
};

export default Posts;
