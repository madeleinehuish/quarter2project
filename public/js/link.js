'use strict';
$(document).ready(function() {
  $('.toMoviePage').click(function(event) {
    const pressedMovieId = event.target.id.substring('poster'.length);

    sessionStorage.setItem('movieId', pressedMovieId);
    window.location.href = `/movies.html?id=${pressedMovieId}`;
  });
});
