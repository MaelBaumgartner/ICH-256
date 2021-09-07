$(function (){
   /*$("#mainTitre").on("click", function (){
      $("#prems").removeClass("hid");
   })
   $("#prems").on("click", function (){
      $("#sec").removeClass("hid");
   })
   $("#sec").on("click", function (){
      $("#third").removeClass("hid");
   })*/
   $("#mainTitre").on("click", function (){
      $("#mainTitre").next().removeClass("hid");
   })
   $("h2").on("click", function (){
      $(this).next().removeClass("hid");
   })
   $("#third").on("click", function(){
      $("#blody").addClass("backgroundImage");
   })
})