'use strict';
(function() {
  $('#loginForm').submit((event) => {
    event.preventDefault();
    const email = $('#email').val().trim();
    const password = $('#password').val();

    if (!email) {
      alert('Email must not be blank');
    }
    if (!password) {
      alert('Password must not be blank');
    }
    const settings = {
      contentType: 'application/json',
      data: JSON.stringify({ email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/token'
    };

    $.ajax(settings)
      .done((user) => {
        sessionStorage.setItem('userId', user.id);
        window.location.href = '/main.html';
      })
      .fail(($xhr) => {
        alert($xhr.responseText, 3000);
      });
  });
})();
