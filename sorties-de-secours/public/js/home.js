$(document).ready(function() {

  $("#button-start").click(function(e) {
    bodyScrollLock.enableBodyScroll(container);
    goToByScroll("loading-section", 500);

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
    bodyScrollLock.disableBodyScroll(container);
    mouseAnimated.addEventListener('animationend', function() { bodyScrollLock.enableBodyScroll(container); });

    set_music_play("generalMusic");
  });

  $("#button-start").hover(function() {
    $("#img-start").css("opacity", "1");
  },
  function() {
    $("#img-start").css("opacity", "0");
  });


  /*var video_logo = document.getElementById("video_logo");
  video_logo.play();*/
});
