const db = require('../models');

// TODO: const ROLES = db.ROLES;
const { ROLES } = db;
const User = db.user;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Check Username
  User.findOne({ username: req.body.username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: 'That username already exists!' });
    }
  });
  // Check Email
  User.findOne({ email: req.body.email }).exec((err, email) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (email) {
      res.status(400).send({ message: 'That email is already in use!' });
    }
    next();
  });
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i += 1) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({ message: `${req.body.roles[i]} does not exist!` });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
