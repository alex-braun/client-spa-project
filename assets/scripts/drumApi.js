'use strict';
const app = require('./app');

// const patternCreate = () => $.ajax({
//       url: app.api + '/patterns',
//       method: 'POST',
//       headers: {
//         Authorization: 'Token token=' + app.user.token,
//       },
//       data: {
//             "name":
//             "user_id":
//       });


    // curl --include --request POST http://localhost:3000/patterns \
    //   --header "Authorization: Token token=BAhJIiUwZWQ5M2RhYTVlZmYwOWMzOTExZDVmZWM5N2Y2ZGEzNgY6BkVG--1fbbfe83cd2c6d95f8c657abc8a079c524104281" \
    //   --header "Content-Type: application/json" \
    //   --data '{
    //     "pattern": {
    //       "name": "Rock",
    //       "user_id": "2"
    //     }
    //   }'


  const patternShowAll = (data) => $.ajax({
      url: app.api + '/patterns/',
      method: 'GET',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });

  const patternShow = (data) => $.ajax({
      url: app.api + '/patterns/' + data.pattern.id,
      method: 'GET',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });

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
  // patternCreate,
  patternShowAll,
  patternShow,
  // patternUpdate,
};
