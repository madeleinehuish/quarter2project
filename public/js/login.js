(function() {
  'use strict';

  // $('.button-collapse').sideNav();

  $('#loginForm').submit((event) => {
    event.preventDefault();

    const email = $('#email').val().trim();
    const password = $('#password').val();

    if (!email) {
			alert('Email must not be blank');
			// return Materialize.toast('Email must not be blank', 3000);
    }

    if (!password) {
			alert('Password must not be blank');
      // return Materialize.toast('Password must not be blank', 3000);
    }

    console.log('got 1/2 way through login.js!');

    const settings = {
      contentType: 'application/json',
      data: JSON.stringify({ email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/token'
    };

    $.ajax(settings)
      .done((user) => {
        console.log(user);
        sessionStorage.setItem('userId', user.id);
        console.log(user.id);
        window.location.href = '/main.html';
      })
      .fail(($xhr) => {
				alert($xhr.responseText, 3000);
        // Materialize.toast($xhr.responseText, 3000);
      });
  });
})();
