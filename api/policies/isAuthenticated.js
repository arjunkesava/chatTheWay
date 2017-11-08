/**
 * isAuthenticated
 *
 * @description :: Server-side logic for managing policies, to check isAuthenticated
 */

module.exports = function(request, response, next) {

	if (request.isAuthenticated()) {
        return next();
    } else {
        return response.redirect('/login');
    }

};