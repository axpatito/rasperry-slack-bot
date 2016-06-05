var RtmClient = require('@slack/client').RtmClient;

var token = 'xoxb-48320139617-B6sSN72aMsemqSvDQLRz5UFN'; 

var rtm = new RtmClient(token, {logLevel: 'debug'});
rtm.start();

var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

rtm.on(RTM_EVENTS.MESSAGE, function (message) {
  // Listens to all `message` events from the team
	
});

rtm.on(RTM_EVENTS.CHANNEL_CREATED, function (message) {
  // Listens to all `channel_created` events from the team
});

var RTM_CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS.RTM;

// you need to wait for the client to fully connect before you can send messages
rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
  // This will send the message 'this is a test message' to the channel identified by id 'C0CHZA86Q'
  rtm.sendMessage('this is a test message', 'C1E986Y1E', function messageSent() {
    // optionally, you can supply a callback to execute once the message has been sent
  });
});

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

// Responds to a message with a 'hello' DM
rtm.on(RTM_EVENTS.MESSAGE, function(message) {
  var user = rtm.dataStore.getUserById(message.user)

  var dm = rtm.dataStore.getDMByName(user.name);

  rtm.sendMessage('Hello ' + user.name + '!', dm.id);
});
