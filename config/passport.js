var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'mobile_no',
    passwordField: 'password'
  },
  function(mobile_no, password, done) {

    User.findOne({ mobile_no: mobile_no }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect Details.' });
      }

      bcrypt.compare(password, user.password, function (err, res) {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnUser = {
            username: user.username,
            mobile_no: user.mobile_no,
            createdAt: user.createdAt,
            id: user.id
          };
          return done(null, returnUser, {
            message: 'Logged In Successfully'
          });
        });
    });
  }
));