// useEffect is the component that mounts, but will become the component that updates
import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
// allows to dispatch an action
import { useDispatch } from "react-redux";

import getPosts from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import gopherRipped from "./images/gopherRipped.png";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch(); // a hook

  // a successful dispatch action from src/actions/posts.js
  // then the src/reducers/posts handles the logic for handling posts
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={gopherRipped}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
