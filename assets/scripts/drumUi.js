'use strict';

const app = require('./app');
const drumPatterns = require('./drumPatterns');

const patternFromData = {
  kick: [false,false,false,false,false,false,false,false],
  snare: [false,false,false,false,false,false,false,false],
  hatClose: [false,false,false,false,false,false,false,false],
  hatOpen: [false,false,false,false,false,false,false,false],
  clap: [false,false,false,false,false,false,false,false],
};
let idNum;


const deleteItemSuccess = (event) => {
  drumPatterns.clearBeat();

};


const createSuccess = function (data) {
  idNum = data.beat.id;
  if (data.beat) {
    console.log(data.beat);
  }
  app.beat = data.beat;
  drumPatterns.userSelectId(idNum);
  return idNum;
};


const showAllSuccess = function (data) {
  if (data) {
    console.log(data.beats);
    for (let i = 0; i < data.beats.length; i++) {
      console.log(data.beats[i].name);
    $('.name').append('<li>' + data.beats[i].name + '</li>');
    $('.id').append('<li>' + data.beats[i].id + '</li>');
      }
    }
};


const showBeatSuccess = (data) => {
  idNum = data.beat.id;
  patternFromData.kick = JSON.parse(data.beat.kick);
  patternFromData.snare = JSON.parse(data.beat.snare);
  patternFromData.hatClose = JSON.parse(data.beat.hatClose);
  patternFromData.hatOpen = JSON.parse(data.beat.hatOpen);
  patternFromData.clap = JSON.parse(data.beat.clap);
  drumPatterns.replacePatternFromData(patternFromData);
  drumPatterns.userSelectId(idNum);
};
  // for (let key in data.beat) {
  //   JSON.parse(data.beat[kick])
  //   let array = data.beat[key];
  //     if ([key] === "kick")
  //   console.log(array);
  //   for (let i = 0; i < 8; i++) {
    // let newArray = array.split(',');
// }
//   }
// };
  // let kick = data.beat.kick.split(',');
  // let snare = data.beat.snare.split(',');
  // let hatClose = data.beat.hatClose.split(',');
  // let hatOpen = data.beat.hatOpen.split(',');
  // let clap = data.beat.clap.split(',');
  // console.log(clap);

//   for (let i = 0; i < 8; i++) {
//     if (kick[i] === "true") {
//       patternFromData[kick][i] === true;
//     }
//     if (array[i] === "false") {
//       patternFromData[snare][i] === false;
//     }
//   }
// }
// }
// console.log(patternFromData);
// };

  // kick = data.beat.kick.split(',');
  // snare = data.beat.snare.split(',');
  // hatClose = data.beat.hatClose.split(',');
  // hatOpen = data.beat.hatOpen.split(',');
  // clap = data.beat.clap.split(',');
  // console.log(string);
  // string.split(',');
  // patternFromData.kick = data.beat.kick.replace(/"/g,"");
  // for (let key in data.beat) {
  //   if (data.beat.hasOwnProperty(key)) {
    // let array = data.beat[key].split(',');
    // console.log(array);

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === "true") {
//         patternFromData[key][i] === true;
//       }
//       if (array[i] === "false") {
//         patternFromData[key][i] === false;
//       }
//     }
//   }
// }
// console.log(patternFromData);
// };





//     if (data.beat[key] === "true")
//
//   }
//   for (let i = 0; i < 8; i++) {
//     if (data.beat.kick)
//   let kick = data.beat.kick.replace(/"/g,"");
//   let bool = (kick === "true");
// }
  // patternFromData.snarde = data.beat.snare.replace(/"/g,"");
  // patternFromData.hatClose = data.beat.hatClose.replace(/"/g,"");
  // patternFromData.hatOpen = data.beat.hatOpen.replace(/"/g,"");
  // patternFromData.clap = data.beat.clap.replace(/"/g,"");
  // drumPatterns.replacePatternFromData(patternFromData);
  // console.log(bool);
  // console.log(kick);
  // patternFromData.snare = data.beat.kick.split(',').replace(/"/g,"");;
  // patternFromData.hatClose = data.beat.kick.split(',').replace(/"/g,"");;
  // patternFromData.hatOpen = data.beat.kick.split(',').replace(/"/g,"");;
  // patternFromData.clap = data.beat.kick.split(',').replace(/"/g,"");;
  // for (let key in data.beat) {
  //   if (data.beat.hasOwnProperty(key)) {
  //      let removeQuotes = data.beat[key].split(',');
      // patternFromData[key] = JSON.parse(data.beat[key]);)
      // console.log(removeQuotes);
    // }
  //
  // }
  // replace(/"/g,"")
  // console.log(patternFromData);
  // };

  // for (let i = 0; i < data.pattern.length; i++) {
// THE OBJECT (PATTERN)

  // for (let key in data) {
  //
  // }
  // for (let i = 0; i < app.pattern.beats.length; i++) {
  // patternFromData.kick[i] = app.pattern.beats[i].kick;
  // patternFromData.snare[i] = app.pattern.beats[i].snare;
  // patternFromData.hatClose[i] = app.pattern.beats[i].hatClose;
  // patternFromData.hatOpen[i] = app.pattern.beats[i].hatOpen;
  // patternFromData.clap[i] = app.pattern.beats[i].clap;
  // }
// };
  // console.log(patternFromData);

// };
//THE OBJECT NAME (PATTERN NAME)
    // console.log(app.pattern.name);
//THE OBJECT USER ID (USER ID IN PATTERN)
    // console.log(app.pattern.user_id);
//THE ARRAY OF BEAT OBJECTS([object]x8)
    // console.log(app.pattern.beats);
//EACH OF THE 8 BEATS OBJECTS(one per line)
// app.pattern.beats.forEach(function(kick) {
//   console.log(kick);
// });
///
//return ID's ONLY of each of the 8 array objects.
// for (let key in app.pattern.beats) {
//   if (app.pattern.beats.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
//RETURNS THE BEAT ARRAY '1'
  // console.log(app.pattern.beats[1]);
//GETS THE VALUE OF THE KICK ON BEAT 1!
// console.log(app.pattern.beats[1].kick);



const failure = (error) => {
  console.error(error);
};



module.exports = {
  failure,
  createSuccess,
  showAllSuccess,
  showBeatSuccess,
  // replacePatternFromData
};
