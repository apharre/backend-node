const express = require("express");
const cors = require("cors");
const { ServerApiVersion } = require("mongodb");
const { default: mongoose } = require("mongoose");
const authRoutes = require("./routes/authRoutes");
// const routes = require('./app/routes');

// Point towards the config file for mongodb. TODO: Can switch to ENV vars later
// const dbConfig = require('./app/config/db.config');

const app = express();

/* ********** Middleware ********** */
app.use(express.static("public"));

/* ********** View engine ********** */
// app.set('view engine', 'ejs');

/* ********** MongoDB ********** */
// seed the database with initial data
// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: 'user',
//       }).save((userErr) => {
//         if (userErr) {
//           console.log('error', userErr);
//         }
//         console.log("added 'user' to roles collection");
//       });
//       new Role({
//         name: 'moderator',
//         // eslint-disable-next-line no-shadow
//       }).save((err) => {
//         if (err) {
//           console.log('error', err);
//         }
//         console.log('added "moderator" to the roles collection');
//       });
//       new Role({
//         name: 'admin',
//         // eslint-disable-next-line no-shadow
//       }).save((err) => {
//         if (err) {
//           console.log('error', err);
//         }
//         console.log('added "admin" to the roles collection');
//       });
//     }
//   });
// }

/* ********** Mongoose Connection to MongoDB ********** */
// db.mongoose
//   .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
//   .then(() => {
//     console.log('Successful connection to your Database!');
//     initial();
//   })
//   .catch((err) => {
//     console.error('Connection error', err);
//     process.exit();
//   });

const uri =
  "mongodb+srv://dankal11:t4dkLHzJT!SP2RCUqxwb@cluster0.flalt.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

/* ********** Routes ********** */
// app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);
console.log("server started successfully! Listening on port 3001");

/* ********** Error Handler ********** */
app.use(errorHandler);
