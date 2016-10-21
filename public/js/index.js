$(document).ready(function () {

// $('.scream').click(function() {
  var obj = document.createElement("audio");
        obj.src="assets/scream.mp3";
        obj.volume=0.50;
        obj.autoPlay=false;
        obj.preLoad=true;
        $(".scream").click(function() {
            obj.play();
        });
  // new Audio('assets/scream.mp3').play();          //play corresponding audio
// });

})
