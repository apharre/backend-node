import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import useStyles from "./styles";
import { createPostAction, updatePostAction } from "../../actions/posts"; // TODO: this could be a problem

// fetch data from redux in src/components/Posts.jsx const posts = useSelector((state) =>
function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    // selectedFile: "",
  });

  // only get the data from one post, not all of them
  const post = useSelector((state) => {
    if (currentId) {
      // return the post with the current ID, or nothing
      return state.posts.find((p) => p._id === currentId);
    }
    return null;
  });

  const classes = useStyles();
  const dispatch = useDispatch(); // allows for dispatching of actions

  // useEffect populates the values of the form.
  // has 2 parameters, a callback function, and a dependency array
  // the callback function should be run when the dependency array changes [post]
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      // selectedFile: "",
    });
  };

  const handleSubmit = (event) => {
    // to send the data that the user wants to submit
    event.preventDefault();

    if (currentId) {
      dispatch(updatePostAction(currentId, postData));
      // actions use the API, so you need to change src/api/index to add this
      // then add this to the posts under src/actions/posts
    } else {
      // src/actions/posts.js::createPostAction()
      dispatch(createPostAction(postData));
      // once the action is dispatched, go to reducers/posts
    }
    clear();
  };

  return (
    <Paper className={classes.Paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root}${classes.form}`}
        onSubmit={handleSubmit}
      >
        {/* Change the title based on wether you're editing or not */}
        <Typography variant="h6">
          {currentId ? "Edit" : "Create"} an Element
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(event) =>
            // ... is the spread operator: it destructures the the post data
            // (property spread notation) will only change "creator" while everything else persists
            setPostData({ ...postData, creator: event.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(event) =>
            setPostData({ ...postData, message: event.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(event) =>
            setPostData({ ...postData, tags: event.target.value })
          }
        />
        <div className={classes.fileInput}>
          {/* <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          /> */}
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
          {/* src/api/index.js is where the action is executed */}
          {/* src/actions/posts.js is where the action is created */}
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

Form.propTypes = {
  currentId: PropTypes.string.isRequired,
  setCurrentId: PropTypes.func.isRequired,
};

export default Form;
