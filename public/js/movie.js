(function() {
  'use strict';

  const renderMovie = function(movie) {
    $('#movie-title-moviespage').text(movie.title);
    $('#movie-director-moviespage').text(movie.director);
    $('#movie-year-moviespage').text(movie.year);
    $('#movie-synopsis-moviespage').text(movie.synopsis);
    // $('#movie-poster-moviespage').attr({ src: movie.posterPath, alt: movie.title });
    // $('#editBook').attr('href', `/edit_book.html?id=${book.id}`);
  };

  const renderComments = function(comments) {
    console.log(comments);

    for (let i = 0; i < comments.length; i++) {
      $('#movie-comments-moviespage').append($('<h4>').text('"' + comments[i].comment + '"'));
    }
  };

  $('#addFavorite').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ movieId: movie.id }),
        dataType: 'json',
        type: 'POST',
        url: '/favorites'
      };

      $.ajax(options)
        .done(() => {
          $('#addFavorite').addClass('hide');
          $('#removeFavorite').removeClass('hide');
          alert('Added book to your favorites');
          // Materialize.toast('Added book to your favorites', 3000);
        })
        .fail(() => {
          alert('Unable to add this book to your favorites')
          // Materialize.toast('Unable to add this book to your favorites', 3000);
        });
    });

    $('#removeFavorite').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ movieId: movie.id }),
        dataType: 'json',
        type: 'DELETE',
        url: '/favorites'
      };

      $.ajax(options)
        .done(() => {
          $('#removeFavorite').addClass('hide');
          $('#addFavorite').removeClass('hide');

          Materialize.toast('Removed book from your favorites', 3000);
        })
        .fail(() => {
          Materialize.toast(
            'Unable to remove this book from your favorites',
            3000
          );
        });
    });



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

      renderMovie(movie);

      //movie comments generation

    })

    .fail(() => {
      // Materialize.toast('Unable to retrieve movies', 3000);
      alert('Unable to retrieve movies');
    });

    $.getJSON('/comments/1')
      .done((comments) => {

        renderComments(comments);

      })
      .fail(() => {
        // Materialize.toast('Unable to retrieve movies', 3000);
        alert('Unable to retrieve movies');
      });

})();
