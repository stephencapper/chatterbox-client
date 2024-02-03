// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    // Input - message (includes object with properties:  roomname, text, username); 2 functions
    // Output - uses POST to send the new message to the API object with properties: roomname, text, username
    // Constraints -
    // Edge cases -

    //make a call on ajax
    //needs the url
    //type of POST
    //data: message [should be a JSON.stringify(message)]
    //contentType 'application/json'
    //success, function
    //error, function

    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB || function(success) {
        console.log('chatterbox: Message sent');
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to send the message', error);
      }
    });



  },

  //get back array of objects with properties: message_id, roomname, text, username, github_handle
  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }




};