const express = require('express');
const cors = require('cors');
const db = require('./app/models');

// Point towards the config file for mongodb. TODO: Can switch to ENV vars later
const dbConfig = require('./app/config/db.config');

const Role = db.role;
const app = express();

// ********** Routes **********
require('./app/routes/auth.routes');
require('./app/routes/user.routes');

// ********** Cors **********
const corsOptions = {
  origin: 'http://localhost:8081',
};

// set the origin on port 8081
app.use(cors(corsOptions));
// requests will have the content type of application/json
app.use(express.json());
// read requests using application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Baby's first route
app.get('/', (req, res) => {
  res.json({ message: 'your first API Call to your cool backend' });
});

// App will listen on port 8080 or whatever the environment decides for the port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Dan's Server is running on port ${PORT}`);
});

// ********** MongoDB **********
// seed the database with initial data
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((userErr) => {
        if (userErr) {
          console.log('error', userErr);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: 'moderator',
        // eslint-disable-next-line no-shadow
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }
        console.log('added "moderator" to the roles collection');
      });
      new Role({
        name: 'admin',
        // eslint-disable-next-line no-shadow
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }
        console.log('added "admin" to the roles collection');
      });
    }
  });
}

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
  .then(() => {
    console.log('Successful connection to your Database!');
    initial();
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });
