$(document).ready(function() {

  $(".expChoice").click(function() {
    $(".expChoice").addClass('expChoiceHidden');

    $(this).removeClass("expChoiceHidden");
    $(this).addClass("expChoiceExpand");
  });


  $("#menu-expo-link").hover(function() {
    $("#menu-expo").css("filter", "brightness(100%)");
  }, function(){
    $("#menu-expo").css("filter", "brightness(80%)");
  });
  $("#menu-music-link").hover(function() {
    $("#menu-music").css("filter", "brightness(100%)");
  }, function(){
    $("#menu-music").css("filter", "brightness(80%)");
  });
  $("#menu-dance-link").hover(function() {
    $("#menu-dance").css("filter", "brightness(100%)");
  }, function(){
    $("#menu-dance").css("filter", "brightness(80%)");
  });

  var pos = $("#menu-section").position();
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    if(scrollPos > pos.top) {
      const menuSection = document.querySelector("#menu-section");
      bodyScrollLock.disableBodyScroll(menuSection);
      goToByScroll("menu-section");
    }
  });


});
