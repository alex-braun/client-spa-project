'use strict';

const drumApi = require('./drumApi');
const drumEvents = require('./drumEvents');
const knobJQuery = require('./jquery.knob.min');

// const kick = $('.wav-kick');
// const snare = $('.wav-snare');
// const clap = $('.wav-clap');
// const hatClose = $('.wav-hat-close');
// const hatOpen = $('.wav-hat-open');

const triggerGrid = ['pad 1', 'pad 2', 'pad 3', 'pad 4', 'pad 5', 'pad 6', 'pad 7', 'pad 8'];

const beat = {
  kick: [false,false,false,false,false,false,false,false],
  snare: [false,false,false,false,false,false,false,false],
  hatClose: [false,false,false,false,false,false,false,false],
  hatOpen: [false,false,false,false,false,false,false,false],
  clap: [false,false,false,false,false,false,false,false],
};

let drum;



//maps drum patterns to the individual pad indicators.  This function is
//triggered any time the document is selected by the user.
let mapPatternsToIndicators = function(inst) {
  for (let i = 0; i < triggerGrid.length; i++) {
    let selected;
    if (beat[inst][i] === true) {
      selected = triggerGrid[i];
      $(".pad[data-grid ='"+selected+"']").closest('.pad').find('.trigger.indicator')
      .addClass('clicked');
    }
    else {
      selected = triggerGrid[i];
      $(".pad[data-grid ='"+selected+"']").closest('.pad').find('.trigger.indicator')
      .removeClass('clicked');
    }
    // console.log(selected);
  }
};



// This function constructs the correct drum array with the parameters passed in
// by the event handlers.
let constructPattern = function(drum, index) {
  // console.log(drum);
  for (let i = 0; i < triggerGrid.length; i++) {
    if(triggerGrid[i] === index) {
      if(beat[drum][i] === false) {
        beat[drum][i] = true;
      }
      else {
        beat[drum][i] = false;
      }
    }
  }
  console.log(beat[drum]);
};




let userSelectDrum = function(inst) {
drum = inst;
};



let padIndex = function(grid) {
  constructPattern(drum, grid);
};



// let replacePatternFromData = function(object) {
//   for (let key in object) {
//     beat[key] = object[key];
//   }
//
// };


// let onSavePattern = function() {
//   let dataKick;
//   let dataSnare;
//   let dataHatClose;
//   let dataHatOpen;
//   let dataClap;
//   for (let i = 0; i < triggerGrid.length; i++) {
//     dataKick = beat['kick'][i];
//     dataSnare = beat['snare'][i];
//     dataHatClose = beat['hatClose'][i];
//     dataHatOpen = beat['hatOpen'][i];
//     dataClap = beat['clap'][i];
//   }
//   console.log(dataKick,dataSnare,dataHatClose,dataHatOpen,dataClap);
//   drumApi.patternUpdate(dataKick,dataSnare,dataHatClose,dataHatOpen,dataClap);
//
// };
let onSaveBeat = function() {
  let stringKick = JSON.stringify(beat.kick);
  let stringSnare = JSON.stringify(beat.snare);
  let stringHatClose = JSON.stringify(beat.hatClose);
  let stringHatOpen = JSON.stringify(beat.hatOpen);
  let stringClap = JSON.stringify(beat.clap);
  // console.log(stringKick,stringSnare,stringHatClose,stringHatOpen,stringClap);
  drumApi.beatUpdate(stringKick,stringSnare,stringHatClose,stringHatOpen,stringClap);
};



//   for (let i = 0; i < triggerGrid.length; i++) {
//     dataKick = beat['kick'][i];
//     dataSnare = beat['snare'][i];
//     dataHatClose = beat['hatClose'][i];
//     dataHatOpen = beat['hatOpen'][i];
//     dataClap = beat['clap'][i];
//   }
//   console.log(dataKick,dataSnare,dataHatClose,dataHatOpen,dataClap);
//   drumApi.patternUpdate(dataKick,dataSnare,dataHatClose,dataHatOpen,dataClap);
//
// };



const showPatternSuccess = (data) => {
  app.beat = data.beat;
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
// var context;
// window.addEventListener('load', init, false);
// function init() {
//   try {
//     // Fix up for prefixing
//     window.AudioContext = window.AudioContext||window.webkitAudioContext;
//     context = new AudioContext();
//   }
//   catch(e) {
//     alert('Web Audio API is not supported in this browser');
//   }
// }


// let RhythmSample = {
// };

// RhythmSample.play = function() {
//   function playSound(buffer, time) {
//     var source = context.createBufferSource();
//     source.buffer = buffer;
//     source.connect(context.destination);
//     if (!source.start)
//       source.start = source.noteOn;
//     source.start(time);
//   }

  // var kick = BUFFERS.kick;
  // var snare = BUFFERS.snare;
  // var hihat = BUFFERS.hihat;
  //
  // // We'll start playing the rhythm 100 milliseconds from "now"
  // var startTime = context.currentTime + 0.100;
  // var tempo = 80; // BPM (beats per minute)
  // var eighthNoteTime = (60 / tempo) / 2;
  //
  // // Play 2 bars of the following:
  // for (var bar = 0; bar < 2; bar++) {
  //   var time = startTime + bar * 8 * eighthNoteTime;
  //   // Play the bass (kick) drum on beats 1, 5
  //   playSound(kick, time);
  //   playSound(kick, time + 4 * eighthNoteTime);
  //
  //   // Play the snare drum on beats 3, 7
  //   playSound(snare, time + 2 * eighthNoteTime);
  //   playSound(snare, time + 6 * eighthNoteTime);
  //
  //   // Play the hi-hat every eighthh note.
  //   for (var i = 0; i < 8; ++i) {
  //     playSound(hihat, time + i * eighthNoteTime);
  //   }
  // }
// };

module.exports = {
  constructPattern,
  padIndex,
  userSelectDrum,
  mapPatternsToIndicators,
  // replacePatternFromData,
  onSaveBeat
};
