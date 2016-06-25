// This is the Slack Token generated when creating the slash command
var token = "YOUR_SLACK_TOKEN";
var qs = require('querystring');

exports.handler = function (event, context) {
    if (token !== "YOUR_SLACK_TOKEN") {
        processEvent(event, context);
    } else {
        context.fail("Token has not been set.");
    }
};

var processEvent = function(event, context) {
    var body = event.body;
    var params = qs.parse(body);
    var requestToken = params.token;
    if (requestToken !== token) {
        console.error("Request token (" + requestToken + ") does not match exptected");
        context.fail("Invalid request token");
    }

    var user = params.user_name;
    var command = params.command;
    var channel = params.channel_name;
    var commandText = params.text;

    context.succeed(user + " invoked " + command + " in " + channel + " with the following text: " + commandText);
};

var parseCommand = function (text) {

}
