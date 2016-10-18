(function() {
  'use strict';

  // $.getJSON(`/movies/${sessionStorage.getItem('movieId')}`)
  $.getJSON('/movies/1')
    .done((movie) => {
      const $movie = $('#movie-poster-moviespage');
      const $anchor = $('<a>')
        .attr({
          href: `/movie.html?id=${movie.id}`,
          'data-delay': '50',
          'data-tooltip': movie.title
        })
        .tooltip();

      const $card = $('<div>').addClass('card');
      const $cardImage = $('<div>').addClass('img-responsive');
      const $col = $('<div>').addClass('col-sm-6 col-md-4 col-lg-3');
      const $img = $('<img>').attr({ src: movie.posterPath, alt: movie.title });

      $cardImage.append($img);
      $anchor.append($cardImage);
      $card.append($anchor);
      $col.append($card);
      $movie.append($col);

    })
    .fail(() => {
      // Materialize.toast('Unable to retrieve movies', 3000);
      alert('Unable to retrieve movies');
    });
})();
