var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'LmNp3JwAQZnuBr4SQFaM7UZG3',
  consumer_secret: 'Xps6ziqIhZ0exAPoIAeyqj7myu7L78ZLHQDni67dzD9koJQTAD',
  access_token_key: '151128859-F4Wk8KebqH4ZDwp8tMWY8PkoTQzfiEJrN1t2Knfc',
  access_token_secret: 'czQre16YZKoC4Csi18gGufu8PxF733aL5VnzbhurlGvHw'
});
 var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('7b6bf4773c39c9e271f6bd999fea5df5179a6dad');
var params = {screen_name: '@darshanhs'};
var cors = require('cors')
var express=require('express');
var app = express();
app.use(cors());
app.get('/', function(req, res) {

  client.get('statuses/home_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  res.send(tweets)
  }
  else
    console.log(error);
});
  });
app.get('/poststat', function(req, res) {
  //console.log(req);
  var data=req.url;
  data=data.substring(17);
  console.log(data);


 client.post('statuses/update', {status: data},  function(error, tweet, response){
  if(error) 
    throw error;
  res.send("Tweet Success");  
});
});


app.get('/getusertime', function(req, res) {
 client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    //console.log(tweets)
    res.send(tweets);
  }
});
});





app.get('/postmultstat', function(req, res) {
  //console.log(req);
  var data=req.url;
  //console.log(req);
  data=data.replace('23',' #');
  console.log("**************urlfollows********");
  console.log(data);
  var strn=data.split("+");
  var value=(data.substring(data.indexOf('&txtval=')+8));
  value=value.split('+').join(' ');
  console.log(strn);
  /*var value=strn[strn.length-1].substring(8);
  console.log(value);*/
  /*value=value.replace('23',' #');
  console.log(value);*/
  
  var strn=data.split("=");
  var rcpt=(strn[1].split("+"));
  for (var i = 0; i <rcpt.length-1; i++) {
    var strng=rcpt[i]+" "+value;
    console.log(strng);
    client.post('statuses/update', {status: strng},  function(error, tweet, response){
  if(error) {    throw error;
    console.log("error");
  }
  else
   console.log("tweet");
  });
  }
    res.send("Tweet Success"); 
  });
  
  app.get('/alchemy', function(req, res) {
 
console.log(req.url);
var data=req.url;
  console.log(data);
  data=data.substring(16);
  console.log(data);
  data=data.split('+').join(' ');
  console.log("data1 is "+data);
var asd=''
//res.end('asd');
alchemy.sentiment(data, {}, function(err, response) {
  if (err) throw err;

  var sentiment = response.docSentiment;
  //console.log(sentiment);
  asd=sentiment;
  res.send(asd);
});
console.log(asd);
//console.log(sentiment);


});




app.get('/getfriends', function(req, res) {
 client.get('friends/list', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets)
    res.send(tweets);
  }
});
});





app.get('/getfollowers', function(req, res) {
 client.get('followers/list', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets)
    res.send(tweets);
  }
});
});

app.get('/getmyinfo', function(req, res) {
 client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets)
    res.send(tweets);
  }
});
});












/*
app.listen(1337,'52.5.230.85');*/


app.listen(1337,'172.20.10.3');


/*client.stream('statuses/filter', {track: '@darshanhs'},  function(stream){
  stream.on('data', function(tweet) {
    console.log(tweet);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});*/
/*client.get('search?', {q: 'darshanhs'}, function(error, tweets, response){
   console.log(tweets);
});*/