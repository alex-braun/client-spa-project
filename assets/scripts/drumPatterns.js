'use strict';


const drumEvents = require('./drumEvents');
const knobJQuery = require('./jquery.knob.min');

// const kick = $('.wav-kick');
// const snare = $('.wav-snare');
// const clap = $('.wav-clap');
// const hatClose = $('.wav-hat-close');
// const hatOpen = $('.wav-hat-open');

const triggerGrid = ['pad 1', 'pad 2', 'pad 3', 'pad 4', 'pad 5', 'pad 6', 'pad 7', 'pad 8'];


let kickPattern = ['','','','','','','',''];
let snarePattern = ['','','','','','','',''];
let hatClosePattern = ['','','','','','','',''];
let hatOpenPattern = ['','','','','','','',''];
let clapPattern = ['','','','','','','',''];
let drum;
// let currentPattern;

//This turns on indicators according to the arrays.
// let mapPatternsToIndicators = function(inst) {
//   if (inst === 'kick') {
//     for (let i = 0; i < triggerGrid.length; i++) {
//       let selected;
//       if (kickPattern[i] === true) {
//         selected = triggerGrid[i];
//         console.log(kickPattern);
//         $(".pad[data-grid ='"+selected+"']").closest('.pad').find('.trigger.indicator')
//         .addClass('clicked');
//       } else if(kickPattern[i] === ''){
//         selected = triggerGrid[i];
//         $(".pad[data-grid ='"+selected+"']").closest('.pad').find('.trigger.indicator')
//         .removeClass('clicked');
//       }
//     }
//   }
// };
  //   else if (inst === 'snare' && snarePattern[i] === true) {
  //     $('.pad').attr('data-grid',triggerGrid[i]).find('.trigger.indicator')
  //     .addClass('clicked');
  //   }
  //   else if (inst === 'hat-close' && hatClosePattern[i] === true) {
  //     $('.pad').attr('data-grid',triggerGrid[i]).find('.trigger.indicator')
  //     .addClass('clicked');
  //   }
  //   else if (inst === 'hat-open' && hatOpenPattern[i] === true) {
  //     $('.pad').attr('data-grid',triggerGrid[i]).find('.trigger.indicator')
  //     .addClass('clicked');
  //   }
  //   else if (inst === 'clap' && clapPattern[i] === true) {
  //     $('.pad').attr('data-grid',triggerGrid[i]).find('.trigger.indicator')
  //     .addClass('clicked');
  //   } else {
  //     $('.pad').attr('data-grid',triggerGrid[i]).find('.trigger.indicatior')
  //     .removeClass('clicked');
  //   }
  // };


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

  } else if (triggerGrid[i] === index && drum === 'snare') {
      if (snarePattern[i] === '') {
        snarePattern[i] = true;
      } else {
        snarePattern[i] = '';
      }
        console.log(snarePattern);

  } else if (triggerGrid[i] === index && drum === 'hat-close') {
      if (hatClosePattern[i] === '') {
        hatClosePattern[i] = true;
      } else {
        hatClosePattern[i] = '';
      }
        console.log(hatClosePattern);

  } else if (triggerGrid[i] === index && drum === 'hat-open') {
      if (hatOpenPattern[i] === '') {
        hatOpenPattern[i] = true;
      } else {
        hatOpenPattern[i] = '';
      }
        console.log(hatOpenPattern);

  } else if (triggerGrid[i] === index && drum === 'clap') {
      if (clapPattern[i] === '') {
      clapPattern[i] = true;
      } else {
        clapPattern[i] = '';
      }
        console.log(clapPattern);
      }
    }

};


let userSelectDrum = function(inst) {
drum = inst;
};

let padIndex = function(grid) {
  constructPattern(drum, grid);

};


















// let mapPatternsToIndicators = function() {
//   for (let i = 0; i < triggerGrid.length; i++) {
//     if (currentPattern[i] === true) {
//       ('.pad').data(triggerGrid[i]).attr('class','clicked');
//     }
//   }
// };













module.exports = {
  constructPattern,
  padIndex,
  userSelectDrum,
  // mapPatternsToIndicators
};
