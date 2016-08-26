'use strict';

const app = require('./app');
const drumPatterns = require('./drumPatterns');
// const drumEvents = require('./drumEvents');

//global variable that always takes the current beat id.

let id;


const deleteBeatSuccess = (event) => {
  drumPatterns.clearBeat();
  $('.command-bottom').empty().append('<h2 class = "message">Beat succesfully deleted</h2>');
  $('.message').fadeOut(5000);
};


const createSuccess = function (data) {
  id = data.beat.id;
  console.log(id);
  if (data.beat) {
  }
  app.beat = data.beat;
  $('.command-bottom').empty().append('<h2>' + data.beat.name + ' created.</h2>');
  drumPatterns.clearBeat();
  return id;
};


// const showAllSuccess = function (data) {
//   if (data) {
//     for (let i = 0; i < data.beats.length; i++) {
//     $('.name').append('<li>' + data.beats[i].name + '</li>');
//     $('.id').append('<li>' + data.beats[i].id + '</li>');
//       }
//     }
// };

let displayBeats = function(data) {
  let beatTemplate = require('./templates/beats.handlebars');

  $('.command-bottom').empty().append(beatTemplate({
  beats:data.beats

}));
};

const showAllSuccess = function (data) {
  console.log(data.beats.name);

  $('.command-middle').empty().append('<h5 class = "message">SELECT A BEAT</h5>');
  displayBeats(data);
};

const showBeatSuccess = (data) => {

  id = data.beat.id;
  console.log(id);
  let patternFromData = {
    kick: JSON.parse(data.beat.kick),
    snare: JSON.parse(data.beat.snare),
    hatClose: JSON.parse(data.beat.hatClose),
    hatOpen: JSON.parse(data.beat.hatOpen),
    clap: JSON.parse(data.beat.clap),
  };
  console.log(patternFromData);
  drumPatterns.replacePatternFromData(patternFromData);
  $('.command-bottom').empty().append('<h2 class = "message">' + data.beat.name + ' loaded</h2>');
  $('.command-middle').empty();
  return id;
};


const updateBeatSuccess = function() {
  // console.log(data)
  $('.command-bottom').empty().append('<h2 class = "message">Beat successfully saved!</h2>');
  $('.message').fadeOut(5000);
  $('.command-middle').empty();
};


const showBeatFailure = function (error) {
  drumPatterns.clearBeat();
  $('.command-bottom').empty().append('<h2 class = "message">Beat not found</h2>');
  $('.message').fadeOut(5000);
  $('.command-middle').empty();
  console.log(error);

};


const updateBeatFailure = function (error) {
  $('.command-bottom').html('<h2 class = "message">Please create a beat first</h2>');
  $('.message').fadeOut(5000);
  $('.command-middle').empty();

  console.log(error);
};


const failure = (error) => {
  console.error(error);
};


module.exports = {
  id,
  displayBeats,
  createSuccess,
  showAllSuccess,
  showBeatSuccess,
  showBeatFailure,
  deleteBeatSuccess,
  updateBeatSuccess,
  updateBeatFailure,
  failure
};
