'use strict';

const app = require('./app');
const drumPatterns = require('./drumPatterns');
const drumEvents = require('./drumEvents');

const patternFromData = {
  kick: [false,false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false],
  snare: [false,false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false],
  hatClose: [false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false],
  hatOpen: [false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false],
  clap: [false,false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false],
};

let idNum;



const deleteBeatSuccess = (event) => {
  drumPatterns.clearBeat();
};


const createSuccess = function (data) {
  idNum = data.beat.id;
  let name = data.beat.name;
  console.log(idNum);
  console.log(data.beat.name);
  if (data.beat) {
    console.log(data.beat);
  }
  app.beat = data.beat;
  drumPatterns.userSelectId(idNum);
  // debugger;
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
  patternFromData.kick = JSON.parse(data.beat.kick);
  patternFromData.snare = JSON.parse(data.beat.snare);
  patternFromData.hatClose = JSON.parse(data.beat.hatClose);
  patternFromData.hatOpen = JSON.parse(data.beat.hatOpen);
  patternFromData.clap = JSON.parse(data.beat.clap);
  drumPatterns.replacePatternFromData(patternFromData);
  drumPatterns.userSelectId(idNum);
};

const showBeatFailure = function (error) {
  $('.command-bottom').empty().append('<h2>Beat not found</h2>').fadeOut(5000);
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
  showBeatFailure
};
