'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

// const drumEvents = require('./drumEvents');
// const drumPatterns = require('./drumPatterns');
// const knobJQuery = require('./jquery.knob.min');
const drumEvents = require('./drumEvents');


$(() => {
  drumEvents.addDrumHandlers();
});
