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

export { fetchPosts, createPost };
