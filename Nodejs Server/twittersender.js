var Twitter = require('twitter');
var client1 = new Twitter({
  consumer_key: 'LmNp3JwAQZnuBr4SQFaM7UZG3',
  consumer_secret: 'Xps6ziqIhZ0exAPoIAeyqj7myu7L78ZLHQDni67dzD9koJQTAD',
  access_token_key: '151128859-F4Wk8KebqH4ZDwp8tMWY8PkoTQzfiEJrN1t2Knfc',
  access_token_secret: 'czQre16YZKoC4Csi18gGufu8PxF733aL5VnzbhurlGvHw'
});

var params = {screen_name: '@darshanhs'};
var cors = require('cors')
var express=require('express');
var app = express();
app.use(cors());
  var PushBullet = require('pushbullet');
    var pusher = new PushBullet('Xej3VrcULqqRjo7SPkl7WJsaTkFTao8E');
 var accountSid = 'AC07275e4294f1b0d42623c3ec9559911e';
var authToken = "650d049a9bd99323fb899ce4b9e84fcc";
var client = require('twilio')(accountSid, authToken);


client1.stream('statuses/filter', {track: '@darshanhs'},  function(stream){
  stream.on('data', function(tweet) {
    //console.log(tweet);
    //tweet has appeared
    pusher.note('ujxoVhoOrjosjz7O3P0Jl6', 'Twitter', tweet.text, function(error, response) {
      console.log(response)
                    });

client.messages.create({
    body: tweet.text,
    to: "+14697672278",
    from: "+14694164117"
}, function(err, message) {
    console.log(err);
    console.log(message);
     
});




  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
