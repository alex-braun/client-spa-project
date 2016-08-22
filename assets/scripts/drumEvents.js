'use strict';

const getFormFields = require('../../lib/get-form-fields');
const drumApi = require('./drumApi');
const drumPatterns = require('./drumPatterns');
const drumUi = require('./drumUi');

let dataId;

//WORKING
const onShowBeat = function (event) {
  let data = getFormFields(this);
  dataId = data.beats.id;
  console.log(data);
  event.preventDefault();
  drumApi.beatShow(data)
    .done(drumUi.showBeatSuccess)
    .fail(drumUi.failure);
};


//WORKING
const onShowAllBeats = function (event) {
  event.preventDefault();
  let data = drumUi.patternId;
  drumApi.beatShowAll(data)
    .done(drumUi.showAllSuccess)
    .fail(drumUi.failure);
};

const onCreateBeat = function (event) {
  let data = getFormFields(this);
  // console.log(data.patterns.name);
  event.preventDefault();
  drumApi.beatCreate(data)
    .done(drumUi.createSuccess)
    .fail(drumUi.failure);
};

const onDeleteBeat = function (event) {
  event.preventDefault();
  drumApi.beatDelete(dataId)
  .done(drumUi.deleteItemSuccess(event))
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
    $('.crud').attr('disabled', true);

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
// $('.create-pattern').on('submit', onCreatePattern);
$('.view-all-beats').hide();
$('#create-beat').on('submit', onCreateBeat);
$('.delete-beat').on('click', onDeleteBeat);
$('#show-beat').on('submit', onShowBeat);
$('.search-beat-button').click(function() {
  $('#show-beat-modal').modal('hide');
});
// $('.index-beats').on('click', function() {
//   $('ul').empty();
// });
// $('.index-beats').click('click', onShowAllBeats);
// $('.index-beats').on('click', function() {
//   $('.view-all-beats').slideToggle(400);
//   // $('.view-all-beats ul').toggle();
// });

// $('.index-beats').on('click', function() {
//
// });
$('.index-beats').click(function(event) {
$('.titles').delay(1000);
$('ul.get').delay(1000).empty();
$('.view-all-beats').fadeToggle(1250, function() {
onShowAllBeats(event);
  });
});


$('.save-beat').on('click', drumPatterns.onSaveBeat);
};

module.exports = {
  addDrumHandlers,
};
