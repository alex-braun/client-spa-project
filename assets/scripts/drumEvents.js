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


const onShowBeat = function (id) {
  // let data = getFormFields(this);
  // id = $(this).data("id");
  console.log(id);
  // dataId = data.id;
  // console.log(data);
  event.preventDefault();
  drumApi.beatShow(id)
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
  console.log(data);
  // dataId = data.beats.id;
  event.preventDefault();
  drumApi.beatCreate(data)
    .done(drumUi.createSuccess)
    .fail(drumUi.failure);
};

const onUpdateBeat = function() {
  console.log(dataId);
  console.log(drumPatterns.beat);
  if (typeof dataId === 'undefined') {
    drumUi.updateBeatFailure();
  } else {
  let stringKick = JSON.stringify(drumPatterns.beat.kick);
  let stringSnare = JSON.stringify(drumPatterns.beat.snare);
  let stringHatClose = JSON.stringify(drumPatterns.beat.hatClose);
  let stringHatOpen = JSON.stringify(drumPatterns.beat.hatOpen);
  let stringClap = JSON.stringify(drumPatterns.beat.clap);
  // console.log(stringKick,stringSnare,stringHatClose,stringHatOpen,stringClap);
  drumUi.updateBeatSuccess();
  drumApi.beatUpdate(dataId,stringKick,stringSnare,stringHatClose,stringHatOpen,stringClap);
  }
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

$(document).on("click", ".list", function() {
let id = $(this).data('id');
onShowBeat(id);
});
// $('.view-all-beats').hide();
$('#create-beat').on('submit', onCreateBeat);
$('.create-beat-button').click(function() {
  $('#create-beat-modal').modal('hide');
});
$('.delete-beat').on('click', onDeleteBeat);
// $('#show-beat').on('submit', onShowBeat);
// $('.show-beat-button').click(function() {
//   $('#show-beat-modal').modal('hide');
// });
// $('li.list').on('click', function() {
//   alert($(this).data('id'));
// });
$('.index-beats').click(function() {
  $('ul').empty();
});
$('.index-beats').on('click',onShowAllBeats);

// $('.view-all-beats').fadeToggle(1250,onShowAllBeats(event));

$('.save-beat').on('click', onUpdateBeat);
};

module.exports = {
  addDrumHandlers,
};
