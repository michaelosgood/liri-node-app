// Required files
var keysJS = require("./keys.js");
var Spotify = require('node-spotify-api');

// Gets twitterKeys from keys.js
var keyList = keysJS.twitterKeys;

// Store my twitterKeys in variables
var consumerKey = keysJS.twitterKeys.consumer_key;
var consumerSecret = keysJS.twitterKeys.consumer_secret;
var accessTokenKey = keysJS.twitterKeys.access_token_key;
var accessTokenSecret = keysJS.twitterKeys.access_token_secret;

// comands = ["my-tweets","spotify-this-song",
// "movie-this","do-what-it-says"]
var commands = process.argv[2];

// node liri.js my-tweets
// my-tweets will show the last 20 tweets and when they were created
// at in your bash window

// node liri.js spotify-this-song <song name>
// spotify-this-song will show artist, song's name, preview link (spotify), album
// if no song is provided, play "The Sign" by Ace of Base 


var spotify = new Spotify({
 id: '6a4fc3cb81474ef79373b922ff0a8576',
 secret: 'efcdea0ad29c4173a6dd0a21027050c3'
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log(data); 
});
