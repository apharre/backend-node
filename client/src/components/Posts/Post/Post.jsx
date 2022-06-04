// import React from "react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
// } from "@material-ui/core";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import moment from "moment";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";

// import { deletePostAction, likePostAction } from "../../../actions/posts";
// import useStyles from "./styles";

// function Posts({ post, setCurrentId }) {
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <CardMedia
//         className={classes.media}
//         image="https://www.backpacker.com/wp-content/uploads/2014/05/wilson-peak-autumn.jpg"
//         title={post.title}
//       />
//       <div className={classes.overlay}>
//         <Typography variant="h6">{post.creator}</Typography>
//         <Typography variant="body2">
//           {moment(post.createdAt).fromNow()}
//         </Typography>
//       </div>
//       <div className={classes.overlay2}>
//         <Button
//           style={{ color: "white" }}
//           size="small"
//           onClick={() => setCurrentId(post._id)}
//         >
//           <MoreHorizIcon fontSize="medium" />
//         </Button>
//       </div>
//       <div className={classes.details}>
//         <Typography variant="body2" color="textSecondary">
//           {/* {post.tags} */}
//           {/* eslint-disable-next-line react/prop-types */}
//           {post.tags.map((tag) => `#${tag}`)}
//           {/* {!post.length ? "no Tags" : post.tags.map((tag) => `#${tag}`)} */}
//         </Typography>
//       </div>
//       <Typography className={classes.title} variant="h5" gutterBottom>
//         {post.title}
//       </Typography>
//       <CardContent>
//         <Typography
//           className={classes.title}
//           variant="body2"
//           color="textSecondary"
//           component="p"
//         >
//           {post.message}
//         </Typography>
//       </CardContent>
//       <CardActions className={classes.cardActions}>
//         <Button
//           size="small"
//           color="primary"
//           onClick={() => dispatch(likePostAction(post._id))}
//         >
//           <ThumbUpAltIcon fontSize="small" />
//           Like {post.likeCount}
//         </Button>
//         <Button
//           size="small"
//           color="primary"
//           onClick={() => dispatch(deletePostAction(post._id))}
//         >
//           <DeleteIcon fontSize="small" />
//           Delete
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// Posts.propTypes = {
//   post: PropTypes.arrayOf(
//     PropTypes.shape({
//       creator: PropTypes.string,
//       title: PropTypes.string,
//       createdAt: PropTypes.string,
//       message: PropTypes.string,
//       likeCount: PropTypes.number,
//       tags: PropTypes.arrayOf(PropTypes.shape({ tag: PropTypes.string })),
//     })
//   ).isRequired,
//   setCurrentId: PropTypes.func.isRequired,
// };

// export default Posts;
