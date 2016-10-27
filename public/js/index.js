'use strict';
(function() {
  const obj = document.createElement('audio');

  obj.src = 'assets/jlcurtis-scream.mp3';
  obj.volume = 0.80;
  obj.autoPlay = false;
  obj.preLoad = true;
  $('.scream').click(() => {
    obj.play();
  });
})();
