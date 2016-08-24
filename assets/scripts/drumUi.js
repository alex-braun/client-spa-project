'use strict';

const app = require('./app');
const drumPatterns = require('./drumPatterns');
const drumEvents = require('./drumEvents');

// const patternFromData = {
//   kick: [false,false,false,false,false,false,false,false,false,false,false,false,
//     false,false,false,false],
//   snare: [false,false,false,false,false,false,false,false,false,false,false,false,
//     false,false,false,false],
//   hatClose: [false,false,false,false,false,false,false,false,false,false,false,
//     false,false,false,false,false],
//   hatOpen: [false,false,false,false,false,false,false,false,false,false,false,
//     false,false,false,false,false],
//   clap: [false,false,false,false,false,false,false,false,false,false,false,false,
//     false,false,false,false],
// };

//global variable that always takes the current beat id.
let idNum;


const deleteBeatSuccess = (event) => {
  drumPatterns.clearBeat();
};


const createSuccess = function (data) {
  idNum = data.beat.id;
  if (data.beat) {
    // drumPatterns.userSelectId(idNum);
    console.log(data.beat);
  }
  app.beat = data.beat;

  $('.command-bottom').empty().append('<h2>' + data.beat.name + 'created.</h2>');
};


const showAllSuccess = function (data) {
  if (data) {
    console.log(data.beats);
    for (let i = 0; i < data.beats.length; i++) {
      console.log(data.beats[i].name);
    $('.name').append('<li>' + data.beats[i].name + '</li>');
    $('.id').append('<li>' + data.beats[i].id + '</li>');
      }
    }
};


const showBeatSuccess = (data) => {
  idNum = data.beat.id;
  let patternFromData = {
  kick: JSON.parse(data.beat.kick),
  snare: JSON.parse(data.beat.snare),
  hatClose: JSON.parse(data.beat.hatClose),
  hatOpen: JSON.parse(data.beat.hatOpen),
  clap: JSON.parse(data.beat.clap),
};
  console.log(idNum);
  drumPatterns.replacePatternFromData(patternFromData);
  drumEvents.getIdNum(idNum);
  $('.command-bottom').empty().append('<h2 class = "message">Beat successfully saved!</h2>');
  $('.message').fadeOut(5000);
};

const updateBeatSuccess = function() {
  $('.command-bottom').empty().append('<h2 class = "message">Beat successfully saved!</h2>');
  $('.message').fadeOut(5000);
};

const showBeatFailure = function (error) {
  $('.command-bottom').empty().append('<h2 class = "message">Beat not found</h2>');
  $('.message').fadeOut(5000);
  console.log(error);
};

const updateBeatFailure = function (error) {
  $('.command-bottom').html('<h2 class = "message">Please create a beat first</h2>');
  $('.message').fadeOut(5000);
  console.log(error);
};


const failure = (error) => {
  console.error(error);
};




module.exports = {
  failure,
  createSuccess,
  showAllSuccess,
  showBeatSuccess,
  deleteBeatSuccess,
  showBeatFailure,
  updateBeatFailure,
  updateBeatSuccess
};
