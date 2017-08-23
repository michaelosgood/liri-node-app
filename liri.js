// Required files
// Twitter Keys
var keys = require("./keys.js");
// Spotify Package
var Spotify = require('node-spotify-api');
// Twitter Package
var Twitter = require('twitter');
// Request Package (OMDB)
var request = require('request');
// File System
var fs = require('fs');

//  Function to grab tweets
var getMyTweets = function() {
  var client = new Twitter(keys.twitterKeys);
  var params = {screen_name: 'GoldenAquila'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
          //console.log(tweets);
          for (var i=0; i<tweets.length; i++){
              console.log(tweets[i].created_at);
              console.log(' ');
              console.log(tweets[i].text);
              console.log('----------------------------------------------------------------');
          }
      }
  });
}
var getArtistNames = function(artist) {
  return artist.name; 
}

var getMeSpotify = function(songName) {
  var spotify = new Spotify({
      id: '6a4fc3cb81474ef79373b922ff0a8576',
      secret: 'efcdea0ad29c4173a6dd0a21027050c3'
  });
  spotify.search({ type: 'track', query: songName })
  .then(function(response) {
      var songs = response.tracks.items;
      for (var i=0; i<songs.length; i++){
          console.log(i);
          console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
          console.log('song name: ' + songs[i].name);
          console.log('preview song: ' + songs[i].preview_url);
          console.log('album: ' + songs[i].album.name);
          console.log('----------------------------------------------------------------');
      }
  })
  .catch(function(err) {
      console.log(err);
  });
}

var getMovie = function(movieName) {
  request('http://www.omdbapi.com/?apikey=40e9cece&t=' + movieName + '&y=&plot=short&r=json', function (error, response, body) {
      if (!error && response.statusCode === 200) {
          var jsonData = JSON.parse(body);
          console.log('Title: ' + jsonData.Title);
          console.log('Year: ' + jsonData.Year);
          console.log('Rated: ' + jsonData.Rated);
          console.log('IMDB Rating: ' + jsonData.imdbRating);
          console.log('Country: ' + jsonData.Country);
          console.log('Language: ' + jsonData.Language);
          console.log('Plot: ' + jsonData.Plot);
          console.log('Actors: ' + jsonData.Actors);
          console.log('Rotten Tomatoes rating: ' + jsonData.tomatoRating);
          console.log('Rotten Tomatoes URL: ' + jsonData.tomatorURL);
          console.log('----------------------------------------------------------------');
          
      }
  })
}

var doWhatItSays = function() {

// Reads random.txt file 
fs.readFile('random.txt', 'utf8', function (err, data) {
  if (err) throw err;
  // Runs the command in random.txt
  var dataArr = data.split(',');
  if (dataArr.length === 2) {
      pick(dataArr[0], dataArr[1]);
  }
  else if (dataArr.length === 1) {
      pick(dataArr[0]);
  }
});
}

// Grabs the user input and runs specified function
var pick = function(caseData, functionData) {
  switch(caseData) {
      case 'my-tweets':
          getMyTweets();
          break;
      case 'spotify-this-song':
          getMeSpotify(functionData);
          break;
      case 'movie-this':
          getMovie(functionData);
          break;
      case 'do-what-it-says':
          doWhatItSays();
  default:
  console.log('LIRI does not know that');
  }
}
// Grabs the arguements
var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};
runThis(process.argv[2], process.argv[3]);