$(function (){
    var mode = false;

    $("img").on('click',function (){
        mode = !mode;
        if(!mode){
            $("#content").removeClass("light");
        }
        else{
            $("#content").addClass("light");
        }
    });
})

