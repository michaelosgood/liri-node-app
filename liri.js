// Required files
// Twitter Keys
var keysJS = require("./keys.js");
// Spotify Package
var Spotify = require('node-spotify-api');
// Twitter Package
var Twitter = require('twitter');
// Request Package (OMDB)
var request = require('request');

// Gets twitterKeys from keys.js
var keyList = keysJS.twitterKeys;

// Store my twitterKeys in variables
var consumerKey = keysJS.twitterKeys.consumer_key;
var consumerSecret = keysJS.twitterKeys.consumer_secret;
var accessTokenKey = keysJS.twitterKeys.access_token_key;
var accessTokenSecret = keysJS.twitterKeys.access_token_secret;

// comand = ["my-tweets","spotify-this-song",
// "movie-this","do-what-it-says"]
var command = process.argv[2];
var MovieOrSong = process.argv[3];

if (command === "my-tweets"){
  console.log("grabbing tweets");
}
else if (command === "spotify-this-song"){
  console.log("searching spotify");
  var spotify = new Spotify({
    id: '6a4fc3cb81474ef79373b922ff0a8576',
    secret: 'efcdea0ad29c4173a6dd0a21027050c3'
   });
   //receiving an error message, not sure why
   spotify
   .search ({ type: "track", query: "My search query"})
   .then(function(response) {
    console.log(response);
   })
   .catch(function(err) {
     console.log(err);
   });
}
else if (command === "movie-this"){
  
}
else if (command === "do-what-it-says"){
  //grab song data
}
// node liri.js my-tweets
// my-tweets will show the last 20 tweets and when they were created
// at in your bash window

// node liri.js spotify-this-song <song name>
// spotify-this-song will show artist, song's name, preview link (spotify), album
// if no song is provided, play "The Sign" by Ace of Base 