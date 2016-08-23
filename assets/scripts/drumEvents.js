'use strict';

const getFormFields = require('../../lib/get-form-fields');
const drumApi = require('./drumApi');
const drumPatterns = require('./drumPatterns');
const drumUi = require('./drumUi');

const kick = $('.wav-kick');
const snare = $('.wav-snare');
const clap = $('.wav-clap');
const hatClose = $('.wav-hat-close');
const hatOpen = $('.wav-hat-open');

let dataId;

//This callback sets dataId to a number for the delete function.
const getIdNum = function(idNum) {
  dataId = idNum;
};


const onShowBeat = function (event) {
  let data = getFormFields(this);
  dataId = data.beats.id;
  console.log(data);
  event.preventDefault();
  drumApi.beatShow(data)
    .done(drumUi.showBeatSuccess)
    .fail(drumUi.showBeatFailure);
};


const onShowAllBeats = function (event) {
  event.preventDefault();
  let data = drumUi.patternId;
  drumApi.beatShowAll(data)
    .done(drumUi.showAllSuccess)
    .fail(drumUi.failure);
};


const onCreateBeat = function (event) {
  let data = getFormFields(this);
  // dataId = data.beats.id;
  event.preventDefault();
  drumApi.beatCreate(data)
    .done(drumUi.createSuccess)
    .fail(drumUi.failure);
};


const onDeleteBeat = function (event) {
  event.preventDefault();
  drumApi.beatDelete(dataId)
  .done(drumUi.deleteBeatSuccess(event))
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
      $(this).closest('.drum-select').find('.drum.indicator')
      .toggleClass('clicked');
    $(this).attr('disabled', true);

//turn on the correct indicator for each drum type
    $('.drum.button').not(this).closest('.drum-select')
      .find('.drum.indicator').removeClass('clicked');
    $('.drum.button').not(this).attr('disabled', false);

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

//playback has been added to this as well.  No ideal, as jQuery does not register
//the clicks very well.
 $('.pad').click(function() {
  let currentGrid = $(this).data('grid');
  drumPatterns.padIndex(currentGrid);
  if (currentDrum === 'kick') {
  kick.get(0).play();
} if (currentDrum === 'snare') {
  snare.get(0).play();
} if (currentDrum === 'hatClose') {
  hatClose.get(0).play();
} if (currentDrum === 'hatOpen') {
  hatOpen.get(0).play();
} if (currentDrum === 'clap') {
  clap.get(0).play();
}
});

// $('.create-pattern').on('submit', onCreatePattern);
$('.view-all-beats').hide();

$('#create-beat').on('submit', onCreateBeat);
$('.create-beat-button').click(function() {
  $('#create-beat-modal').modal('hide');
});
$('.delete-beat').on('click', onDeleteBeat);
$('#show-beat').on('submit', onShowBeat);
$('.show-beat-button').click(function() {
  $('#show-beat-modal').modal('hide');
});

$('.index-beats').click(function() {
  $('ul.id, ul.name').empty();
});

$('.index-beats').click(function(event) {
$('.titles').delay(1000);
$('.view-all-beats').fadeToggle(1250,onShowAllBeats(event));
});

$('.save-beat').on('click', drumPatterns.onSaveBeat);
};

module.exports = {
  addDrumHandlers,
  getIdNum
};
