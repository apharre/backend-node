import React from "react";
import { useSelector } from "react-redux";
// pulls data from /src/reducers/posts.js

import Post from "./Post/Post";

import useStyles from "./styles";

function Posts() {
  // the state is the whole global redux store or state.
  // this is found in src/reducers/index.js
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  // eslint-disable-next-line no-console
  console.log(posts);

  return (
    <>
      <h1 className={classes.mainContainer}>POSTS</h1>;
      <Post />
    </>
  );
}

export default Posts;
