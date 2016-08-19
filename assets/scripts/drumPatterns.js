'use strict';


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

let replacePatternFromData = function(object) {
  for (let key in object) {
    beat[key] = object[key];
  }
  console.log(beat);
};



module.exports = {
  constructPattern,
  padIndex,
  userSelectDrum,
  mapPatternsToIndicators,
  replacePatternFromData
};
