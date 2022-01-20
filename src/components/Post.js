import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Post = ({ post, toggleLike, handleToggleLike }) => {
  return (
    <Box sx={{ m: 2, boxShadow: 1, borderRadius: 2 }}>
      <img src={post.img_src} alt={post.camera.full_name} />
      <Box sx={{ m: 2 }}>
        <Typography fontWeight="bold">
          {post.camera.name} - {post.camera.full_name}
        </Typography>
        <Typography fontSize={15}>{post.earth_date}</Typography>
        <Button
          sx={{ my: 2 }}
          variant="outlined"
          color={toggleLike ? "error" : "success"}
          onClick={handleToggleLike}
        >
          {toggleLike ? "Dislike" : "Like"}
        </Button>
      </Box>
    </Box>
  );
};

export default Post;
