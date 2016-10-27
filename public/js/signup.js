'use strict';
(function() {
  $('#signUpForm').submit((event) => {
    event.preventDefault();

    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();

    if (!firstName) {
      alert('First name must not be blank');
    }
    if (!lastName) {
      alert('Last name must not be blank');
    }
    if (!email) {
      alert('Email must not be blank.');
    }
    if (email.indexOf('@') < 0) {
      alert('Email must be valid.');
    }
    if (!password || password.length < 8) {
      alert('Password must be valid.');
    }
    const createUserSettings = {
      contentType: 'application/json',
      data: JSON.stringify({ firstName, lastName, email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/users'
    };

    $.ajax(createUserSettings)
      .done(() => {
        const createTokenSettings = {
          contentType: 'application/json',
          data: JSON.stringify({ email, password }),
          dataType: 'json',
          type: 'POST',
          url: '/token'
        };

        $.ajax(createTokenSettings)
          .done((user) => {
            sessionStorage.setItem('userId', user.id);
            window.location.href = '/main.html';
          })
          .fail(($xhr) => {
            alert($xhr.responseText, 3000);
          });
      })
      .fail(($xhr) => {
        alert($xhr.responseText, 3000);
      });
  });
})();
