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
