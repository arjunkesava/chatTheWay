/**
 * app.js
 *
 * Front-end code and event handling for sailsChat
 *
 */

// Initially Socket Connection
io.socket.on('connect', function socketConnected() {

	console.log("Sockect Connected Bro");
	// Add a click handler for the "Update name" button, allowing the user to update their name.
	// updateName() is defined in user.js.
	$('#update-name').click(updateName);
});