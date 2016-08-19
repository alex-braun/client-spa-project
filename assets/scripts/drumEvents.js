'use strict';

const getFormFields = require('../../lib/get-form-fields');
const drumApi = require('./drumApi')
const drumPatterns = require('./drumPatterns');
const drumUi = require('./drumUi');


const onShowPattern = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  drumApi.patternShow(data)
    .done(drumUi.showPatternSuccess)
    .fail(drumUi.failure);
};

const onCreatePattern = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  drumApi.patternCreate(data)
    .done(drumUi.createSuccess)
    .fail(drumUi.failure);
};


const onShowAllPatterns = function (event) {
  event.preventDefault();
  let data = drumUi.patternId;
  drumApi.patternShowAll(data)
    .done(drumUi.showAllSuccess)
    .fail(drumUi.failure);
};


//event handlers below
let currentDrum;
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

$(document).click(function() {
drumPatterns.mapPatternsToIndicators(currentDrum);
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
        currentDrum = 'hatClose';
      }
      if ($(this).hasClass('hat-open')) {
        currentDrum = 'hatOpen';
      }
      if ($(this).hasClass('clap')) {
        currentDrum = 'clap';
      }
      drumPatterns.userSelectDrum(currentDrum);
      $('.pad').attr('disabled', false);
      // drumPatterns.mapPatternsToIndicators(currentDrum);

  });

  //find the correct user selected trigger pad
 $('.pad').click(function() {
  let currentGrid = $(this).data('grid');
  drumPatterns.padIndex(currentGrid);
});
};

$('.create-pattern').on('click', onCreatePattern);
$('#show-game').on('submit', onShowPattern);
$('.show-all-games').on('click', onShowAllPatterns);

module.exports = {
  addDrumHandlers,
};
