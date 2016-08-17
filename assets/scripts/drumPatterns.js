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
  kick: ['','','','','','','',''],
  snare: ['','','','','','','',''],
  hatClose: ['','','','','','','',''],
  hatOpen: ['','','','','','','',''],
  clap: ['','','','','','','',''],
};

let drum;


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
  }
};


let constructPattern = function(drum, index) {
  // console.log(drum);
  for (let i = 0; i < triggerGrid.length; i++) {
    if(triggerGrid[i] === index) {
      if(beat[drum][i] === '') {
        beat[drum][i] = true;
      }
      else {
        beat[drum][i] = '';
      }
    }
  }
  // console.log(beat[drum]);
};


let userSelectDrum = function(inst) {
drum = inst;
};

let padIndex = function(grid) {
  constructPattern(drum, grid);

};


module.exports = {
  constructPattern,
  padIndex,
  userSelectDrum,
  mapPatternsToIndicators
};
