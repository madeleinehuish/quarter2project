$(document).ready(function () {

  var obj = document.createElement("audio");
        obj.src="assets/jlcurtis-scream.mp3";
        obj.volume=0.50;
        obj.autoPlay=false;
        obj.preLoad=true;
        $(".scream").click(function() {
            obj.play();
        });

})
