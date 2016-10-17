(function() {
  'use strict';

  // $('.button-collapse').sideNav();

  // eslint-disable-next-line max-statements
  $('#editForm').submit((event) => {
    event.preventDefault();

    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();

    const settings = {
      contentType: 'application/json',
      data: JSON.stringify({ firstName, lastName, email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/users'
    };

    $.ajax(settings)
      .done(() => {
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
