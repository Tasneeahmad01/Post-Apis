$(document).ready(function () {
   $(window).scroll(function () {
       var positionTop = $(document).scrollTop();

       if ((positionTop > 10) && (positionTop < 213)) {
           $("#card-one").addClass("animate__animated animate__bounceInLeft");
           $("#card-two").addClass("animate__animated animate__zoomInDown");
           $("#card-three").addClass("animate__animated animate__flipInX");
       }
       if ((positionTop > 240) && (positionTop < 515)) {
           $("#textanimate").addClass("animate__animated animate__slideInUp");
       }
       if ((positionTop > 550) && (positionTop < 800)) {
           $("#cardtwo-one").addClass("animate__animated animate__slideInLeft");
           $("#cardtwo-two").addClass("animate__animated animate__zoomInDown");
           $("#cardtwo-three").addClass("animate__animated animate__flipInX");
       }
   });
});

$(document).ready(function(){
   $("button").click(function(){
   $("p").slideToggle();   
   })
   
});