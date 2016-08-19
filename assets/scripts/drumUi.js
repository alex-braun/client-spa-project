'use strict';

const app = require('./app');
const drumPatterns = require('./drumPatterns');

const createSuccess = function (data) {
  createdPattern = data.pattern;
  if (data.pattern) {
    console.log(data.pattern);
  }
  app.pattern = data.pattern;
  return createdPattern;
};


const showAllSuccess = function (data) {
  let completedPatterns = 0;
  if (data) {
    console.log(data);
    for (let i = 0; i < data.patterns.length; i++) {
      // console.log(data.games[i].cells) ;
      if (data.patterns[i].over === true) {
        completedPatterns++;
      }
    }
    console.log(completedPatterns)
    return completedPatterns;
  }
};


const showPatternSuccess = (data) => {
  app.pattern = data.pattern;
  console.log(app);
  for (let i = 0; i < data.pattern.cells.length; i++) {

  }
  console.log(data.pattern.cells.length);
};

const failure = (error) => {
  console.error(error);
};



module.exports = {
  failure,
  createSuccess,
  showAllSuccess,
  showPatternSuccess,
};
