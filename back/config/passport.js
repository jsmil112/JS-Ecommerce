const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//const gStrategy = require('passport-google-oauth20');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const fbStrategy = require('passport-facebook');

const User = require('../models/User');
require('dotenv').config();

passport.use(
  new LocalStrategy({ usernameField: 'email' }, function(
    email,
    password,
    done
  ) {
    User.findOne({ where: { email } })
      .then(user => {
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        if (!user.validatePassword(password))
          return done(null, false, { message: 'Incorrect password.' });

        return done(null, user);
      })
      .catch(done);
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '196300300927-l1podpfbip1sogdv5fqgacgplm2nmdla.apps.googleusercontent.com',
      clientSecret: 'YzmfjUHzybnT-hJVuIEuewrH',
      callbackURL: 'api/user/login/google/redirect',
      passReqToCallback: true
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(accessToken, refreshToken, profile, done);
      /*
      User.findOrCreate({
        where: { username: 'g' + profile.id, name: profile.displayName }
      })
        .then(user => done(null, user))
        .catch(err => done(err)); */
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(user => done(null, user));
});

module.exports = passport;
