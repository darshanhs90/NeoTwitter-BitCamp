var Twitter = require('twitter');
var client1 = new Twitter({
  consumer_key: 'consumer_key',
  consumer_secret: 'consumer_secret',
  access_token_key: 'access_token_key',
  access_token_secret: 'access_token_secret'
});

var params = {screen_name: '@id'};
var cors = require('cors')
var express=require('express');
var app = express();
app.use(cors());
  var PushBullet = require('pushbullet');
    var pusher = new PushBullet('secret');
 var accountSid = 'id';
var authToken = "token";
var client = require('twilio')(accountSid, authToken);


client1.stream('statuses/filter', {track: '@id'},  function(stream){
  stream.on('data', function(tweet) {
    //console.log(tweet);
    //tweet has appeared
    pusher.note('id', 'Twitter', tweet.text, function(error, response) {
      console.log(response)
                    });

client.messages.create({
    body: tweet.text,
    to: "+number",
    from: "+othernumber"
}, function(err, message) {
    console.log(err);
    console.log(message);
     
});




  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
