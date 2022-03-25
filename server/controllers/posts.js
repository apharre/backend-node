/* eslint-disable no-console */
import mongoose from 'mongoose';
// REFERENCE THIS
// PostMessage is the model based on the mongoose schema
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

// TODO: this could be a problem with the arrow function
// eslint-disable-next-line consistent-return
export const updatePost = async (req, res) => {
  // rename id to _id
  const { id: _id } = req.params;
  const post = req.body; // this comes from the frontend
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');

  // new: true receives updated version of the post add await to make synchronous
  // 32:09 part2 findByIdAndUpdate(_id, {...post, _id }) _id was added because the Backend requires an _id for each post
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
  res.json(updatedPost);
  // client/src/components/Form.js is where the logic will be updated for this call.
  // also the three dots on the top of the post are where the ID will come from
};

// eslint-disable-next-line consistent-return
export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');
  await PostMessage.findByIdAndRemove(_id);
  res.json({ message: 'Post deleted successfully' });
};
