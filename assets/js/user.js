/**
 * user.js
 *
 * Task related to Users are done Here
 *
 */

// Update the current user's username
function updateName() {
  // Use the Sails blueprint action to update the user
  io.socket.put('/user/'+window.me.id, {name: $('#my-name').val()});
}
