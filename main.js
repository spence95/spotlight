$(function(){
    $("#darkness").mousemove(function(event){
      $("#spotlight").show();
      $("#spotlight").css("top", event.pageY);
      $("#spotlight").css("left", event.pageX);
      $("#spotlightCover").css("top", event.pageY - 7);
      $("#spotlightCover").css("left", event.pageX - 7);
      $("#darknessLeft").css("right",(screen.width -event.pageX));
      $("#darknessLeft").css("width", event.pageX);
      $("#darknessRight").css("width", (screen.width - event.pageX));
      $("#darknessRight").css("left", event.pageX + $("#spotlight").width());
      $("#darknessTop").css("height", event.pageY);
      $("#darknessTop").css("left", event.pageX);
      $("#darknessBottom").css("height", screen.height - event.pageY - 204);
      $("#darknessBottom").css("left", event.pageX);
      console.log(screen.height);
      console.log(event.pageY);
      console.log($("#darknessBottom").css("height"));
    });//end mouse move
});//doc ready
