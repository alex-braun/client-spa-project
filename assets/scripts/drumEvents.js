'use strict';

// const drumPatterns = require('./drumPatterns');
const drumPatterns = require('./drumPatterns');

let currentDrum;
// let currentGrid;


const addDrumHandlers = () => {

//This references the jQuery Knob plugin
  $(".dial").knob({
  angleArc: 250,
  angleOffset: 235,
  thickness: 0.5,
  width: 40,
  height: 30,
  });

  //Trigger pad cannot be selected when no instruments are selected.
  $(function() {
    $('.pad').attr('disabled', true);
  });

  //find the correct user selected drum type
    $('.drum.button').click(function() {
      if ($(this).hasClass('kick')) {
        currentDrum = 'kick';
      }
      if ($(this).hasClass('snare')) {
        currentDrum = 'snare';
      }
      if ($(this).hasClass('hat-close')) {
        currentDrum = 'hat-close';
      }
      if ($(this).hasClass('hat-open')) {
        currentDrum = 'hat-open';
      }
      if ($(this).hasClass('clap')) {
        currentDrum = 'clap';
      }
      drumPatterns.userSelectDrum(currentDrum);
      $('.pad').attr('disabled', false);
  });

  //find the correct user selected trigger pad
 $('.pad').click(function() {
  let currentGrid = $(this).data('grid');
  drumPatterns.padIndex(currentGrid);
});
};


module.exports = {
  addDrumHandlers,
};
