
var x = [];

// Movie Trailer Carousel
$(document).ready(function () {

//Movie Linking to movies page on click
  $('.toMoviePage').click(function(event) {
    const pressedMovieId = event.target.id.substring('poster'.length);
    sessionStorage.setItem('movieId', pressedMovieId);
    window.location.href = `/movies.html?id=${pressedMovieId}`;
  })

// Carousel
    let displacement = 0;
    $('.left').click(function() {
      if (displacement !== 0) {
        displace(250);
      }
    });

    $('.right').click(function() {
      console.log(displacement);
      const numTiles = $('.tile').length;
      const maxDis = (numTiles - 6) * -250;
      if (displacement >= maxDis){
        displace(-250);
      }
    });

    function displace(amount) {

      displacement += amount;
      $('.row__inner').css('transform', `translate3d(${displacement}px, 0, 0)`);
    }

// End Carousel

//Start Movie Grid

const renderMovies = function(movies) {
  const $movies = $('#grid');
  var posterId;
  for (var i = 0; i < movies.length; i++) {
      const url = movies[i].posterPath;

      posterId = movies[i].id;
      x[i] = `poster${posterId}`;
      const $movieBox = $(`<div class="item"></div><div id="hover" class="box-item "><div  class="transform-item  col-lg-2 col-md-2 col-sm-4 col-xs-4"><img class="movie-poster" src="${url}"/><div id="${x[i]}" class="overlay-item toMoviePage"></div></div></div>`);

      $movieBox.appendTo($(".posters"));
  }
}

const renderTrailers = function(movies) {

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].trailerUrl) {

      const url = movies[i].trailerUrl;
      const title = movies[i].title;
      const $slide = $(`<div class="tile item"><div class="tile__media"><iframe class="tile__img" src="${url}" frameborder="0" allowfullscreen></iframe></div> <div class="tile__details"><div class="tile__title">${title}</div></div></div>`);

      $slide.appendTo($(".row__inner"));
    }

  }

  $('.tile').click(function(event) {

       const url = $(event.currentTarget).find('.tile__img').attr('src');
       const $iframe = $(`<iframe id="ytplayer" type="text/html" width="640" height="360" src="${url}" frameborder="0"/>`);

       $("#viewscreen").empty();
       $( "#viewscreen" ).append( $iframe );
   });
}

// Browse Movies

  $.getJSON('/movies')
    .done((movies) => {
      // movieStorageObjectArray = movies;

      renderMovies(movies);
      renderTrailers(movies);

    })
    .fail(() => {
      // Materialize.toast('Unable to retrieve movies', 3000);
      alert('Unable to retrieve movies');
    });
});
