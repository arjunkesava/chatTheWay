/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {
	login: function(request, response) {

		// Using Passport for Authentication
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return response.send({
                    message: info.message,
                    user: user
                });
            }
            request.logIn(user, function(err) {
                if (err) response.send(err);

                // Adding UserId, Mobile No and UserName to the Session
                request.session.userId = user.id; 
                request.session.userName = user.username; 
                request.session.mobile_no = user.mobile_no; 

                // if The Login is Valid, then redirecting
                // to the Main Home Page
                return response.redirect('/');
            });

        })(request, response);
    },
    logout: function(request, response) {
        request.logout();
        response.redirect('/');
    }
};

