'use strict';
const app = require('../app');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $('.player-id').text("Hello, user: " + data.user.id);
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
  $('.player-id').empty();
  $('.completed-games-count').empty();
};

const changePassSuccess = (data) => {
  console.log(data);
  // $('.player-id').text("Password successfully changed");
};

const failure = (error) => {
  console.log(error);
};

const signInFailure = (error) => {
  console.log(error);
  $('.player-id').text('Error!  Please check your password!');

};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signInFailure,
  changePassSuccess,
  app,
};
