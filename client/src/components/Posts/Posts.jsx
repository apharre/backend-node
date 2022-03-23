import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
// pulls data from /src/reducers/posts.js

import Post from "./Post/Post";

import useStyles from "./styles";

function Posts() {
  // the state is the whole global redux store or state.
  // this is found in src/reducers/index.js
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  // // eslint-disable-next-line no-console
  // console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        // eslint-disable-next-line no-underscore-dangle
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
