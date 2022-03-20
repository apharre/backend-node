/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

/* *************** API Restrictions *************** */
// every route inside postRoutes starts with "post"
app.use('/posts', postRoutes);

/* *************** API Limits *************** */
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(cors());

/* *************** MongoDB Connection *************** */
// process.env.MONGO_USERNAME
const mongoUsername = 'dankal11';
const mongoPassword = 't4dkLHzJT!SP2RCUqxwb';

const CONNECTION_URL = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.flalt.mongodb.net/Cluster0?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () =>
      app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
      })
    // eslint-disable-next-line function-paren-newline
  )
  .catch((err) => console.log(err));
