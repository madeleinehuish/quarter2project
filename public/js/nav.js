'use strict';
(function() {
  $.getJSON('/token')
    .done((loggedIn) => {
      if (loggedIn) {
        const userOptions = {
          url: '/users',
          type: 'GET',
          dataType: 'json'
        }
        $.ajax(userOptions)
          .done((data) => {
            $('.firstNavItem').text(data.firstName);
            $('.secondNavItem').click((event) => {
              event.preventDefault();
              const options = {
                dataType: 'json',
                type: 'DELETE',
                url: '/token'
              };

              $.ajax(options)
                .done(() => {
                  window.location.href = '/main.html';
                })
                .fail(() => {
    							alert('Unable to log out. Please try again.');
                });
          });
            })
          .fail(() => {
            alert('Unable to access users.');
          })
      };
      // else {
      //   const $signup = $('<a>')
      //     .attr('href', '/signup.html')
      //     .text('Sign up');
      //
      //   const $login = $('<a>')
      //     .attr('href', '/login.html')
      //     .text('Log in');
      //
      // }
    })
    .fail(($xhr) => {
      alert($xhr.responseText);
    });

  window.QUERY_PARAMETERS = {};
  if (window.location.search) {
    window.location.search.substr(1).split('&').forEach((paramStr) => {
      const param = paramStr.split('=');

      window.QUERY_PARAMETERS[param[0]] = param[1];
    });
  }
})();
