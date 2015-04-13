$(function(){
  //Below function found at
  //http://stackoverflow.com/questions/18546067/why-is-the-window-width-smaller-than-the-viewport-width-set-in-media-queries
  var spotLightCounter = 0;
  function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
  }

  function checkCollision(){
    var spotTop = $("#spotlightCover").position().top;
    var spotLeft = $("#spotlightCover").position().left;
    var dogeCollTop = $("#dogeMeme").position().top;
    var dogeCollLeft = $("#dogeMeme").position().left;

    var spotTopLeft = {'x': spotLeft, 'y': spotTop};
    var spotTopRight = {'x': spotLeft + $("#spotlightCover").width(), 'y':spotTop};
    var spotBottomLeft = {'x':spotLeft , 'y':spotTop + $("#spotlightCover").height()};
    var spotBottomRight = {'x':spotLeft + $("#spotlightCover").width(), 'y':spotTop + $("#spotlightCover").height()};

    var dogeCollTopLeft = {'x': dogeCollLeft, 'y': dogeCollTop};
    var dogeCollTopRight = {'x': dogeCollLeft + $("#dogeMeme").width(), 'y':dogeCollTop};
    var dogeCollBottomLeft = {'x':dogeCollLeft , 'y':dogeCollTop + $("#dogeMeme").height()};
    var dogeCollBottomRight = {'x':dogeCollLeft + $("#dogeMeme").width(), 'y':dogeCollTop + $("#dogeMeme").height()};

    if(spotTopLeft.x <= dogeCollTopLeft.x
      && spotTopLeft.y <= dogeCollTopLeft.y
      && spotTopRight.x >= dogeCollTopRight.x
      && spotTopRight.y <= dogeCollTopRight.y
      && spotBottomLeft.x <= dogeCollBottomLeft.x
      && spotBottomLeft.y >= dogeCollBottomLeft.y
      && spotBottomRight.x >= dogeCollBottomRight.x
      && spotBottomRight.y >= dogeCollBottomRight.y){
        spotLightCounter++;
      }
      else{
        spotLightCounter = 0;
      }
      if(spotLightCounter > 50){
        console.log("Found!");
      }
  }

  var vpWidth = viewport().width;
  var vpHeight = viewport().height;

  var dogeTop = Math.floor(Math.random()*(vpHeight - $("#dogeMeme").height()));
  var dogeLeft = Math.floor(Math.random()*(vpWidth - $("#dogeMeme").width()));

  $("#dogeMeme").css("top", dogeTop);
  $("#dogeMeme").css("left", dogeLeft);

  $(window).resize(function(){
    vpWidth = viewport().width;
    vpHeight = viewport().height;
    dogeTop = Math.floor(Math.random()*(vpHeight - $("#dogeMeme").height()));
    dogeLeft = Math.floor(Math.random()*(vpWidth - $("#dogeMeme").width()));
    $("#dogeMeme").css("top", dogeTop);
    $("#dogeMeme").css("left", dogeLeft);
  }); // window resize listener

  //check collision
  var collisionDetector = window.setInterval(checkCollision, 1)

  $("body").mouseenter(function(event){
    $("#darkness").hide();
  });// end mouse enter

  $("body").mousemove(function(event){
      $("#spotlight").show();
      $("#spotlight").css("top", event.pageY);
      $("#spotlight").css("left", event.pageX);
      $("#spotlightCover").css("top", event.pageY - 7);
      $("#spotlightCover").css("left", event.pageX - 7);
      $("#darknessLeft").css("right",(vpWidth -event.pageX));
      $("#darknessLeft").css("width", event.pageX);
      $("#darknessRight").css("width", (vpWidth - event.pageX) - $("#spotlight").width());
      $("#darknessRight").css("left", event.pageX + $("#spotlight").width());
      $("#darknessTop").css("height", event.pageY);
      $("#darknessTop").css("left", event.pageX);
      $("#darknessBottom").css("height", vpHeight - event.pageY - $("#spotlight").height());
      $("#darknessBottom").css("left", event.pageX);
  });//end mouse move

  $("body").mouseleave(function(event){
    $("#darkness").show();
  });
});//doc ready
