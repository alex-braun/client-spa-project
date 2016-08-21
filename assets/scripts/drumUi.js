'use strict';

const app = require('./app');
const drumPatterns = require('./drumPatterns');

const patternFromData = {
  kick: [false,false,false,false,false,false,false,false],
  snare: [false,false,false,false,false,false,false,false],
  hatClose: [false,false,false,false,false,false,false,false],
  hatOpen: [false,false,false,false,false,false,false,false],
  clap: [false,false,false,false,false,false,false,false],
};


const createSuccess = function (data) {
  if (data.beat) {
    console.log(data.beat);
  }
};


const showAllSuccess = function (data) {
  if (data) {
    console.log(data.beats);
    for (let i = 0; i < data.beats.length; i++) {
      console.log(data.beats[i].name);
    $('.name').append('<li>' + data.beats[i].name + '</li>');
    $('.id').append('<li>' + data.beats[i].id + '</li>');
    // $('.view-all-beats table').append('<tr><td>' + data.beats[i].id + '</td></tr>');


      // $('.beats-list').append('<li>' + data.beats[i].id +
      //  '       '+ data.beats[i].name + '</li>');
      }
    }
};


const showBeatSuccess = (data) => {
  app.beat = data.beat;
  // console.log(app);

  // for (let i = 0; i < data.pattern.length; i++) {
// THE OBJECT (PATTERN)
  console.log(app.pattern);
  for (let i = 0; i < app.pattern.beats.length; i++) {
  patternFromData.kick[i] = app.pattern.beats[i].kick;
  patternFromData.snare[i] = app.pattern.beats[i].snare;
  patternFromData.hatClose[i] = app.pattern.beats[i].hatClose;
  patternFromData.hatOpen[i] = app.pattern.beats[i].hatOpen;
  patternFromData.clap[i] = app.pattern.beats[i].clap;
  }
};
  // console.log(patternFromData);
//   drumPatterns.replacePatternFromData(patternFromData);
// };
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
  showBeatSuccess,
  // replacePatternFromData
};
