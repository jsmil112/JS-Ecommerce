const express = require('express');
const router = express.Router();
const { User } = require('../models');
const passport = require('passport');
const passportConfig = require('../config/passport');

//https://localhost:3000/api/user/login/google

router.get(
  '/login/google/redirect',

  passport.authenticate('google'),
  function(req, res) {
    res.send('great success');
    //correct auth, code a redirect
  }
);

router.post(
  '/login/google',
  passport.authenticate(
    'google',
    {
      scope: ['profile']
    },
    () => console.log('THIS!', this)
  )
);

//login
router.post('/login', passportConfig.authenticate('local'), function(req, res) {
  res.status(201).send(req.user);
});

// register (create) user
router.post('/register', function(req, res) {
  User.create(req.body).then(user => res.status(201).send(user));
});

router.get('/logout', function(req, res) {
  req.logout();
  res.sendStatus(200);
});

router.get('/me', function(req, res) {
  res.send(req.user);
});

//return all user
//TODO

module.exports = router;
