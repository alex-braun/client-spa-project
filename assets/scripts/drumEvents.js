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
