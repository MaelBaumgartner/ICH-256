$(function (){
    $("#content").css("background-color","grey");
    $("h1, h2:not(.anecdote)").css("color","brown");
    $("h1, h2:not(.anecdote)").css("border-left", "1px solid brown");
    $("h1, h2").css("border-bottom", "1px solid brown");
    $("p").css("color", "black");
    $("h2.anecdote + p").css("color", "#fff");
});