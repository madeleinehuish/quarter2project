'use strict';
$(document).ready(function() {
  $.getJSON('/token')
    .done((loggedIn) => {
      if (!loggedIn) {
        window.location.href = '/index.html';
      }
      let displacement = 0;

      function displace(amount) {
        displacement += amount;
        $('.inside-row').css('transform', `translate3d(${displacement}px, 0, 0)`);
      }
      $('.left').click(function() {
        if (displacement <= -250) {
          displace(250);
        }
      });
      $('.right').click(function() {
        const numTiles = $('.trailer').length;
        const maxDis = (numTiles - 6) * -250;

        if (displacement >= maxDis) {
          displace(-250);
        }
      });
      const renderTrailers = function(movies) {

        for (let i = 0; i < movies.length; i++) {
          if (movies[i].trailerUrl) {
            const url = movies[i].trailerUrl;
            const title = movies[i].title;
            const $slide = $(`<div class="trailer item"><div class="tile__media"><iframe class="trailer-image" src="${url}" frameborder="0" allowfullscreen></iframe></div> <div class="trailer-box"><div class="trailer-title">${title}</div></div></div>`);

            $slide.appendTo($('.inside-row'));
          }
        }
        $('.trailer').click(function(event) {
          const url = $(event.currentTarget).find('.trailer-image').attr('src');
          const $iframe = $(`<iframe id="ytplayer" type="text/html" width="640" height="360" src="${url}" frameborder="0"/>`);

          $('#viewscreen').empty();
          $('#viewscreen').append($iframe);
        });
      };
      $.getJSON('/movies')
        .done((movies) => {
          renderTrailers(movies);
        })
        .fail(() => {
          alert('Unable to retrieve movies');
        })
        .fail(() => {
          alert('Unable to retrieve movies');
        });
    });
});
