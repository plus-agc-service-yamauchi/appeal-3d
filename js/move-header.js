var menuHeight = $("header").height();
var startPos = 0;
var $win = $(window);

$win.on("load resize", function() {  
  if (window.matchMedia("(max-width:750px)").matches) {
  } else {
    $win.on("scroll", function(){
      var currentPos = $(this).scrollTop();
      if (currentPos > startPos) {
        if($(window).scrollTop() >= 100) {
          $("header").css("top", "-170px");
        }
      } else {
        $("header").css("top", "0px");
      }
      startPos = currentPos;
    });
  }
});