/**
 * HomepageController
 *
 * @description :: Server-side logic for managing homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function(request, response) {

        User.find({
                "status": 1
            })
            .then(function(activeUsers) {
                
                // Below Query returns all the Active Users
                User.find({})
                    .then(function(allUsers) {
                        
                        // Currently this Promise, returns  only activeUsers & allContactUsers
                        return response.view('homepage', {
                            activeUsers: activeUsers,
                            allUsers: allUsers
                        });

                    });
            });
    }
};