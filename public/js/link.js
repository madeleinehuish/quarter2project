'use strict';
$(document).ready(() => {
  $('.toMoviePage').click((event) => {
    const pressedMovieId = event.target.id.substring('poster'.length);

    sessionStorage.setItem('movieId', pressedMovieId);
    window.location.href = `/movies.html?id=${pressedMovieId}`;
  });
});
