import React from "react";
import useStyles from "./styles";

function Posts() {
  const classes = useStyles();

  return <h1 className={classes.title}>POST</h1>;
}

export default Posts;
