
  // 'use strict';
var x = [];
// Movie Trailer Carousel
$(document).ready(function () {

// const movieStorageObjectArray = [];
// var pressedMovieIds = [];

//Movie Linking to movies page on click
  $('.toMoviePage').click(function(event) {
    // alert(x);
    // console.log(event.target.id);
    const pressedMovieId = event.target.id.substring('poster'.length);
    // console.log(pressedMovieId)
    // movieStorageObjectArray[event.target]
    sessionStorage.setItem('movieId', pressedMovieId);
    // window.location.href = '/movies.html';
    window.location.href = `/movies.html?id=${pressedMovieId}`
    // window.location.href = `/movies/${pressedMovieId}`;
  })

// Carousel
    let displacement = 0;
    $('.left').click(function() {
      displace(-250);
    });

    $('.right').click(function() {
      displace(250);
    });

    function displace(amount) {
      displacement += amount;
      $('.row__inner').css('transform', `translate3d(${displacement}px, 0, 0)`);
    }
// Dynamic Page Content
  const filmURLs = [
    "http://www.youtube.com/embed/cRArsUp50TQ?origin=http://example.com",
    "http://www.youtube.com/embed/KrjlTciTB7U?origin=http://example.com",
    "http://www.youtube.com/embed/pqRe7wDY8WA?origin=http://example.com",
    "http://www.youtube.com/embed/Vjk2So3KvSQ?origin=http://example.com",
    "http://www.youtube.com/embed/Ylg5EJl83N4?origin=http://example.com",
    "http://www.youtube.com/embed/9592F2RpRPo?origin=http://example.com",
    "http://www.youtube.com/embed/eCoUI65-BLM?origin=http://example.com",
    "http://www.youtube.com/embed/yMEhkTxs3_E?origin=http://example.com",
    "http://www.youtube.com/embed/IbHod2ur4CI?origin=http://example.com"
  ];

  const filmTitles = ["Evil Dead","Texas Chainsaw 3D","Carrie","The Conjuring","Fright Night","Dark Skies",
  "‘A Haunted House 2","Pandorum","The Purge","Vampire"];


  for (var i = 0; i < filmURLs.length; i++) {
    const url = filmURLs[i];
    const title = filmTitles[i];
    const $slide = $(`<div class="tile item"><div class="tile__media"><iframe class="tile__img" src="${url}" frameborder="0" allowfullscreen></iframe></div> <div class="tile__details"><div class="tile__title">${title}</div></div></div>`);

     $slide.appendTo($(".row__inner"));

  }

 $('.tile').click(function(event) {

      const url = $(event.currentTarget).find('.tile__img').attr('src');
      const $iframe = $(`<iframe id="ytplayer" type="text/html" width="640" height="360"
src="${url}" frameborder="0"/>`);

      $("#viewscreen").empty();
      $( "#viewscreen" ).append( $iframe );
  });

});
// End Movie Trailers


// Movie Box Poster Grid - TEST
// const movieUrl = [

//
// for (var i = 0; i < movieUrl.length; i++) {
//     const url = movieUrl[i];
//     const $movieBox = $(`<div class="item"></div><div id="hover" class="box-item"><div class="transform-item col-lg-2 col-md-2 col-sm-4 col-xs-4"><img class="movie-poster" src="${url}"/><div class="overlay-item"></div></div></div>`);
//
//     $movieBox.appendTo($(".row"));
// }

const renderMovies = function(movies) {
  const $movies = $('#grid');
  var posterId;
  for (var i = 0; i < movies.length; i++) {
      const url = movies[i].posterPath;

      posterId = movies[i].id;
      x[i] = `poster${posterId}`;
      const $movieBox = $(`<div class="item"></div><div id="hover" class="box-item "><div  class="transform-item  col-lg-2 col-md-2 col-sm-4 col-xs-4"><img class="movie-poster" src="${url}"/><div id="${x[i]}" class="overlay-item toMoviePage"></div></div></div>`);

      // let pressedMovieIds[i] = x.substring('poster'.length);
      // console.log(x);
      // console.log(y);
      $movieBox.appendTo($(".posters"));
  }
}

// Browse Movies

  $.getJSON('/movies')
    .done((movies) => {
      // movieStorageObjectArray = movies;

      renderMovies(movies);


    })
    .fail(() => {
      // Materialize.toast('Unable to retrieve movies', 3000);
      alert('Unable to retrieve movies');
    });


      // for (const movie of movies) {
      //   const $anchor = $('<a>')
      //     .attr({
      //       href: `/movie.html?id=${movie.id}`,
      //       'data-delay': '50',
      //       'data-tooltip': movie.title
      //     })
      //     .tooltip();
      //
      //   const $card = $('<div>').addClass('card');
      //   const $cardImage = $('<div>').addClass('img-responsive');
      //   const $col = $('<div>').addClass('col-sm-6 col-md-4 col-lg-3');
      //   const $img = $('<img>').attr({ src: movie.posterPath, alt: movie.title });
      //
      //   $cardImage.append($img);
      //   $anchor.append($cardImage);
      //   $card.append($anchor);
      //   $col.append($card);
      //   $movies.append($col);
      // }
