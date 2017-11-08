/**
 * ChatController
 *
 * @description :: Server-side logic for managing Chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    sendMessage: function(request, response) {
        
        var socketId = sails.sockets.getId(request.socket);

        if(!request.param('receiverId')){
            User.findOne(request.param('receiverId')).exec(function(err, sender) {
                User.message(request.param('receiverId'), {
                    sender: sender,
                    message: request.param('message')
                });
            });
        }
    }
};