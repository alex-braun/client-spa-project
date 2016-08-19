'use strict';
const app = require('./app');

const patternCreate = () => $.ajax({
      url: app.api + '/patterns',
      method: 'POST',
      data: '',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });


  const patternShowAll = (data) => $.ajax({
      url: app.api + '/games/',
      method: 'GET',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });

  const patternShow = (data) => $.ajax({
      url: app.api + '/games/' + data.pattern.id,
      method: 'GET',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });


  const patternUpdate = function (gridLocation, player, over) {
      return $.ajax({
      url: app.api + '/games/' + app.pattern.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
                "game": {
                  "cell": {
                    "index": gridLocation,
                    "value": player,
                  },
                  "over": over,
                }
              },
  });
};

module.exports = {
  patternCreate,
  patternShowAll,
  patternShow,
  patternUpdate,
};
