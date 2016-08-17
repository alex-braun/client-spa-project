'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  $('.player-id').text("Hello, User: " + data);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure);
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
  .done(ui.changePassSuccess)
  .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  //this is the modal form
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);

  $('.sign-in-button').click(function() {
  $('#sign-in-modal').modal('hide');
  });
  $('.sign-out-button').click(function() {
  $('#sign-out-modal').modal('hide');
  });
  $('.sign-up-button').click(function() {
  $('#sign-up-modal').modal('hide');
  });
  $('.change-password-button').click(function() {
  $('#change-password-modal').modal('hide');
  });



};


module.exports = {
  addHandlers,
};
