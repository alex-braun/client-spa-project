'use strict';


const drumEvents = require('./drumEvents');
const knobJQuery = require('./jquery.knob.min');

const kick = $('.wav-kick');
const snare = $('.wav-snare');
const clap = $('.wav-clap');
const hatClose = $('.wav-hat-close');
const hatOpen = $('.wav-hat-open');

const triggerGrid = ['pad 1', 'pad 2', 'pad 3', 'pad 4', 'pad 5', 'pad 6', 'pad 7', 'pad 8'];


let kickPattern = ['','','','','','','',''];
let snarePattern = ['','','','','','','',''];
let hatClosePattern = ['','','','','','','',''];
let hatOpenPattern = ['','','','','','','',''];
let clapPattern = ['','','','','','','',''];
let drum;

let constructPattern = function(drum, index) {
  // console.log(drum);
  for (let i = 0; i < triggerGrid.length; i++) {
    if (triggerGrid[i] === index && drum === 'kick') {
      if (kickPattern[i] === '') {
        kickPattern[i] = true;
      } else {
        kickPattern[i] = '';
      }
        console.log(kickPattern);
        kick.get(0).play();
    } else if (triggerGrid[i] === index && drum === 'snare') {
      if (snarePattern[i] === '') {
        snarePattern[i] = true;
      } else {
        snarePattern[i] = '';
      }
        console.log(snarePattern);
        snare.get(0).play();
    } else if (triggerGrid[i] === index && drum === 'hat-close') {
      if (hatClosePattern[i] === '') {
        hatClosePattern[i] = true;
      } else {
        hatClosePattern[i] = '';
      }
        console.log(hatClosePattern);
        hatClose.get(0).play();
    } else if (triggerGrid[i] === index && drum === 'hat-open') {
      if (hatOpenPattern[i] === '') {
        hatOpenPattern[i] = true;
      } else {
        hatOpenPattern[i] = '';
      }
        console.log(hatOpenPattern);
        hatOpen.get(0).play();
    } else if (triggerGrid[i] === index && drum === 'clap') {
      if (clapPattern[i] === '') {
        clapPattern[i] = true;
      } else {
        clapPattern[i] = '';
      }
        console.log(clapPattern);
        clap.get(0).play();
      }
    }
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
  userSelectDrum
};
