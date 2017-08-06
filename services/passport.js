const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');

const User = mongoose.model('users');

// Serialize User -> take a user and assign an ID
passport.serializeUser((user, done) => {
  // should never error while serializing user info
  done(null, user.id);
});

// Deserialize User -> take id and turn it back into a user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    // should never error while deserializing user info
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we have a record of this user, given profile id of user
        // since there were no errors, first pass in null
        return done(null, existingUser);
      }
      // we don't have a record of this user, make a new one
      // since there were no errors, first pass in null
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
