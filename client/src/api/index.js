import axios from "axios";

const url = "http://localhost:5000/posts";

// function fetchPosts() {
//   axios.get(url);
// }

const fetchPosts = () => {
  return axios.get(url);
};

// for submitting the form on the main page
// function createPost(newPost) {
//   axios.post(url, newPost);
// }
const createPost = (newPost) => {
  axios.post(url, newPost);
};

// instantaneous return, so arrow function
const updatePost = (id, updatedPost) => {
  axios.patch(`${url}/${id}`, updatedPost);
};

const deletePost = (id) => {
  axios.delete(`${url}/${id}`);
};

const likePost = (id) => {
  axios.patch(`${url}/${id}/likePost`);
};

export { fetchPosts, createPost, updatePost, deletePost, likePost };
// then go to src/actions/posts.js to add the updated function
