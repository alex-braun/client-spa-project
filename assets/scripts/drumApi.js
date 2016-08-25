'use strict';
const app = require('./app');


//GET SHOW
const beatShow = (id) => $.ajax({
    url: app.api + '/beats/' + id,
    method: 'GET',
    // data,
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

//POST CREATE
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
            'kick': '[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]',
            'snare': '[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]',
            'hatClose': '[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]',
            'hatOpen': '[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]',
            'clap': '[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]',
            },
          }
    });
};


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

//DESTROY
const beatDelete = (dataId) => $.ajax({
    url: app.api + '/beats/'+ dataId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });

module.exports = {
  beatCreate,
  beatShowAll,
  beatShow,
  beatUpdate,
  beatDelete
};
