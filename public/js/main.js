// Movie Trailer Carousel
$(document).ready(function () {
  $.getJSON('/token')
    .done((loggedIn) => {
      if (!loggedIn) {
        window.location.href = '/index.html';
      }
  //Movie Linking to movies page on click
      $('.toMoviePage').click(function(event) {
        const pressedMovieId = event.target.id.substring('poster'.length);
        sessionStorage.setItem('movieId', pressedMovieId);
        window.location.href = `/movies.html?id=${pressedMovieId}`;
      })

  // Carousel
      let displacement = 0;
      $('.left').click(function() {
        displace(-250);
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

 //end carousel

 //start trailers
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

$.getJSON('/movies')
  .done((movies) => {
    // movieStorageObjectArray = movies;

    // renderMovies(movies);
    renderTrailers(movies);

  })
  .fail(() => {
    // Materialize.toast('Unable to retrieve movies', 3000);
    alert('Unable to retrieve movies');
  })

.fail(() => {
  // Materialize.toast('Unable to retrieve movies', 3000);
  alert('Unable to retrieve movies');
});
})
})
