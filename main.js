$(function(){
    $("#darkness").mousemove(function(event){
      console.log(event.pageX + " " + event.pageY)
      $("#spotlight").show();
      $("#spotlight").css("top", event.pageY);
      $("#spotlight").css("left", event.pageX);
    });//end mouse move
});//doc ready
