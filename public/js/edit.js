(function() {
  'use strict';

  // $('.button-collapse').sideNav();

  // eslint-disable-next-line max-statements

  $(document).ready(function(){
    $.getJSON('/users')
      .done((user) => {

        $('#firstName').val(user.firstName).addClass('toGrey');
        $('#lastName').val(user.lastName).addClass('toGrey');
        $('#email').val(user.email).addClass('toGrey');
        $('#password').val('password').addClass('toGrey');
        
      })
      .fail(() => {
        alert('Unable to retrieve user info');
      });


  })

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
      type: 'PATCH',
      url: `/users/${sessionStorage.getItem('userId')}`
    };

    $.ajax(settings)
      .done(() => {
        window.location.href = '/main.html';
        //maybe we change to a different landing page?
      })
      .fail(($xhr) => {
        console.log('fail');
        alert($xhr.responseText, 3000);
        // Materialize.toast($xhr.responseText, 3000);
      });
  });


})();
