var TwitterPackage = require('twitter');
var fs = require('fs');

var secret = {
  consumer_key: 'ENTER CONSUMER KEY',
  consumer_secret: 'ENTER CONSUMER SECRET',
  access_token_key: 'ENTER ACCESS TOKEN KEY',
  access_token_secret: 'ENTER ACCESS TOKEN SECRET'
}
var Twitter = new TwitterPackage(secret);


function tweetStuff() {
var text = fs.readFileSync("./tweets.txt").toString('utf-8');
var tweetArray = textByLine = text.split("\n")

console.log("Posting: "+tweetArray[Math.floor(Math.random() * tweetArray.length)])

Twitter.post('statuses/update', {status: tweetArray[Math.floor(Math.random() * tweetArray.length)]},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);
  console.log(response);
});
setTimeout(tweetStuff,3600000)
}

tweetStuff()
