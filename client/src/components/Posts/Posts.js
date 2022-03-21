import React from "react";
import Post from "./Post/Post";

import useStyles from "./styles";

function Posts() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.mainContainer}>POSTS</h1>;
      <Post />
    </>
  );
}

export default Posts;
