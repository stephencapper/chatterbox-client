// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // What work needs to be done when this view loads?

    this.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // get the messages array from messages.js class
    // iterate over array
    //this.renderMessage(message)

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //create username variable
    //create message text variable
    // call on render from messageView with something like render({username: usernameVariable, messageText: messageTextVariable});

    var username = message.username;
    var messageText = message.text;
    var newMessage = MessageView.render({'username': username, 'messageText': messageText});
    this.$chats.append(newMessage);


  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};