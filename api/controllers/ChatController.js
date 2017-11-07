/**
 * ChatController
 *
 * @description :: Server-side logic for managing Chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    "sendMessage": function(request, response) {
        console.log("In sendMessage Chat API");
        var socketId = sails.sockets.getId(request.socket);
        User.findOne(request.param('receiverId')).exec(function(err, sender) {
            User.message(request.param('receiverId'), {
                sender: sender,
                message: request.param('message')
            });
        });
    }
};