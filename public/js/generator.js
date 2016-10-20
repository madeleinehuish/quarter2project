var x = [];

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

// Browse Movies

//set path
let path;
if (window.location.pathname === '/main.html') {
  path = '/movies';
} else {
  path = `/favorites/${sessionStorage.getItem('userId')}`;
}

$.getJSON(path)
  .done((movies) => {

    renderMovies(movies);

  })
  .fail(() => {
    
    alert('Unable to retrieve movies');
  });
