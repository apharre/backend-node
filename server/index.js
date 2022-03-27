/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import cameraRoutes from './routes/cameraRoutes.js';

const app = express();
dotenv.config();

/* *************** API Limits *************** */
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(cors());

/* *************** API Restrictions *************** */
// every route inside postRoutes starts with "post"
app.use('/posts', postRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/cameras', cameraRoutes);

/* *************** MongoDB Connection *************** */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
