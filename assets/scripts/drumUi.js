'use strict';

const app = require('./app');
const drumPatterns = require('./drumPatterns');

const patternFromData = {
  kick: [],
  snare: [],
  hatClose: [],
  hatOpen: [],
  clap: [],
};


const createSuccess = function (data) {
  let createdPattern = data.pattern;
  if (data.pattern) {
    console.log(data.pattern);
  }
  app.pattern = data.pattern;
  return createdPattern;
};


const showAllSuccess = function (data) {
  let completedPatterns = 0;
  if (data) {
    console.log(data);
    for (let i = 0; i < data.patterns.length; i++) {
      // console.log(data.games[i].cells) ;
      if (data.patterns[i].over === true) {
        completedPatterns++;
      }
    }
    console.log(completedPatterns);
    return completedPatterns;
  }
};


const showPatternSuccess = (data) => {
  app.pattern = data.pattern;
  console.log(app);
  // for (let i = 0; i < data.pattern.length; i++) {
// THE OBJECT (PATTERN)
    // console.log(app.pattern);
  for (let i = 0; i < app.pattern.beats.length; i++) {
    patternFromData.kick[i] = app.pattern.beats[i].kick;
    patternFromData.snare[i] = app.pattern.beats[i].snare;
    patternFromData.hatClose[i] = app.pattern.beats[i].hatClose;
    patternFromData.hatOpen[i] = app.pattern.beats[i].hatOpen;
    patternFromData.clap[i] = app.pattern.beats[i].clap;
  }
  // console.log(patternFromData);
  drumPatterns.replacePatternFromData(patternFromData);
};
//THE OBJECT NAME (PATTERN NAME)
    // console.log(app.pattern.name);
//THE OBJECT USER ID (USER ID IN PATTERN)
    // console.log(app.pattern.user_id);
//THE ARRAY OF BEAT OBJECTS([object]x8)
    // console.log(app.pattern.beats);
//EACH OF THE 8 BEATS OBJECTS(one per line)
// app.pattern.beats.forEach(function(kick) {
//   console.log(kick);
// });
///
//return ID's ONLY of each of the 8 array objects.
// for (let key in app.pattern.beats) {
//   if (app.pattern.beats.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
//RETURNS THE BEAT ARRAY '1'
  // console.log(app.pattern.beats[1]);
//GETS THE VALUE OF THE KICK ON BEAT 1!
// console.log(app.pattern.beats[1].kick);



const failure = (error) => {
  console.error(error);
};



module.exports = {
  failure,
  createSuccess,
  showAllSuccess,
  showPatternSuccess,
  // replacePatternFromData
};
