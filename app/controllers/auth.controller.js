/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../config/auth.config');
const db = require('../models');

const User = db.user;
const Role = db.role;

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 12),
  });
  // eslint-disable-next-line no-shadow
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        // eslint-disable-next-line no-shadow
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.roles = roles.map((role) => role._id);
          // eslint-disable-next-line no-shadow
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            res.send({ message: 'The user was registered successfully!' });
          });
        }
      );
    } else {
      // eslint-disable-next-line no-shadow
      Role.findOne({ name: 'user' }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles = [role._id];
        // eslint-disable-next-line no-shadow
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: 'User was registered successfully!' });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate('roles', '-__v')
    // eslint-disable-next-line no-shadow
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        // eslint-disable-next-line consistent-return
        return res.status(404).send({ message: 'User not found' });
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        // eslint-disable-next-line consistent-return
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password',
        });
      }
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 3600, // one hour
      });
      const authorities = [];
      for (let i = 0; i < user.roles.length; i += 1) {
        authorities.push(`ROLE_${user.roles[i].name.toUpperCase()}`);
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token,
      });
    });
};
