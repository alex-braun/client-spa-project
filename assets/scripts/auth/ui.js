'use strict';
const app = require('../app');



let user;
const success = (data) => {
  console.log(data);
};


const signInSuccess = (data) => {
  app.user = data.user;
  user = data.user.id;
  console.log(app);
  $('.command-top').empty().append('<h2>Hello, user: ' + data.user.id + '</h2>').fadeIn(2000);
  $('.command-bottom').empty().append('<h2>Ready to make some beats?</h2>').fadeIn(2000)
  .delay(2000).fadeOut(1000);
  $('.crud').attr('disabled', false);
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
  $('.command-top').empty().append('<h2>User: ' + user + '<br>Sign out successful</h2>')
  .fadeOut(2000);
  $('.crud').attr('disabled', true);

};

const changePassSuccess = (data) => {
    $('.command-bottom').empty().append('<h2>Password update successful</h2>').fadeOut(2000);
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const signInFailure = (error) => {
  console.log(error);
  $('.command-top').empty().append('<h2>Error! Check your password or sign Up!</h2>').fadeOut(4000);
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
