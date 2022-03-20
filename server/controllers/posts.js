/* eslint-disable no-console */
// REFERENCE THIS
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  // finding a message takes time, so the function must be asynchronous (await)
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    // save is async, so must add await in front of function
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
