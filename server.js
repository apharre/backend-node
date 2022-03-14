const express = require('express');
const cors = require('cors');

const app = express();

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
