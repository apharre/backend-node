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

export { fetchPosts, createPost, updatePost };
// then go to src/actions/posts.js to add the updated function
