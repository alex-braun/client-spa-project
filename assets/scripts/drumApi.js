'use strict';
const app = require('./app');



//GET SHOW
const beatShow = (data) => $.ajax({
    url: app.api + '/beats/' + data.beats.id,
    method: 'GET',
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
});

//GET INDEX
const beatShowAll = (data) => $.ajax({
    url: app.api + '/beats/',
    method: 'GET',
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
});

const beatCreate = function(data) {
  return $.ajax({
      url: app.api + '/beats/',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
          'beat': {
            'name': data.beat.name,
            'kick': '[false,false,false,false,false,false,false,false]',
            'snare': '[false,false,false,false,false,false,false,false]',
            'hatClose': '[false,false,false,false,false,false,false,false]',
            'hatOpen': '[false,false,false,false,false,false,false,false]',
            'clap': '[false,false,false,false,false,false,false,false]',
            },
          }
      });
};

// const beatCreate = function(data) {
// return $.ajax({
//       url: app.api + '/patterns/',
//       method: 'POST',
//       data: ''
//       headers: {
//         Authorization: 'Token token=' + app.user.token,
//       },
//       data: {
//         'pattern': {
//           'name': data.patterns.name,
//           'user_id': app.user.id,
//           'beats': {
//             kick: false
//             snare: false
//             hatClose: false
//             hatOpen: false
//             clap: false
//           }
//         }
//       }
// });
// }

//PATCH
const beatUpdate = function(dataNum, dataKick,dataSnare,dataHatClose,dataHatOpen,dataClap) {
  console.log(app.beat);
  return $.ajax({
  url: app.api + '/beats/' + dataNum,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data: {
      'beat': {
        'kick': dataKick,
        'snare': dataSnare,
        'hatClose': dataHatClose,
        'hatOpen': dataHatOpen,
        'clap': dataClap
        },
      }
  });
};










// "pattern": {
//   "name": "Jimmy",
//   "user_id": "2",
//   "beat": {
//     "kick": "true",
//     "snare": "true",
//     "hatClose": "true",
//     "hatOpen": "true",
//     "clap": "true",
//     "pattern_id": "17",
//     "order": "1"
//     }
// }
// }'
//
//     // curl --include --request POST http://localhost:3000/patterns \
//     //   --header "Authorization: Token token=BAhJIiUwZWQ5M2RhYTVlZmYwOWMzOTExZDVmZWM5N2Y2ZGEzNgY6BkVG--1fbbfe83cd2c6d95f8c657abc8a079c524104281" \
//     //   --header "Content-Type: application/json" \
//     //   --data '{
    //     "pattern": {
    //       "name": "Rock",
    //       "user_id": "2"
    //     }
    //   }'






//updates the pattern after the "save" button
//   const patternUpdate = function (gridLocation, player, over) {
//       return $.ajax({
//       url: app.api + '/patterns/' + app.pattern.id,
//       method: 'PATCH',
//       headers: {
//         Authorization: 'Token token=' + app.user.token,
//       },
//       data: {
//                 "game": {
//                   "cell": {
//                     "index": gridLocation,
//                     "value": player,
//                   },
//                   "over": over,
//                 }
//               },
//   });
// };

module.exports = {
  beatCreate,
  beatShowAll,
  beatShow,
  beatUpdate
  // patternUpdate,
};
