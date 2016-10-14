(function() {
  'use strict';

  // $('.button-collapse').sideNav();

  // eslint-disable-next-line max-statements
  $('#signUpForm').submit((event) => {
    event.preventDefault();

    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();

    if (!firstName) {
      alert('First name must not be blank');
      // return Materialize.toast('First name must not be blank', 3000);
    }

    if (!lastName) {
      alert('Last name must not be blank');
      // return Materialize.toast('Last name must not be blank', 3000);
    }

    if (!email) {
      alert('Email must not be blank.');
      // return Materialize.toast('Email must not be blank', 3000);
    }

    if (email.indexOf('@') < 0) {
      alert('Email must be valid.');
      // return Materialize.toast('Email must be valid', 3000);
    }

    if (!password || password.length < 8) {
      alert('Password must be valid.');
      // return Materialize.toast(
      //   'Password must be at least 8 characters long',
      //   3000
      // );
    }

    const settings = {
      contentType: 'application/json',
      data: JSON.stringify({ firstName, lastName, email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/users'
    };

    $.ajax(settings)
      .done(() => {
        console.log('yo');
        window.location.href = '/index.html';
        //maybe we change to a different landing page?
      })
      .fail(($xhr) => {
        console.log('fail');
        alert($xhr.responseText, 3000);
        // Materialize.toast($xhr.responseText, 3000);
      });
  });
})();
