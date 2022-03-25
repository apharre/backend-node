// useEffect is the component that mounts, but will become the component that updates
import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
// allows to dispatch an action
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import gopherRipped from "./images/gopherRipped.png";
import useStyles from "./styles";

function App() {
  // keep track of current_id here because <Posts /> and <Form /> have to share the state of current_id between them. <App /> is a parent component to both.
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch(); // a hook

  // a successful dispatch action from src/actions/posts.js
  // then the src/reducers/posts handles the logic for handling posts
  useEffect(
    () => {
      dispatch(getPosts());
    },
    // adding currentId (from clear function in Form.jsx) means when currentId gets changed, the app will dispatch and getPosts. Then the app gets new posts on every action.
    [currentId, dispatch]
    // make sure the server/controllers/posts.js file
  );

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Apharre
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
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
