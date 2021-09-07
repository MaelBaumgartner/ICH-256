$(function(){
    $('#affiliation_2').on('click', function(){
        $("#cache_1").addClass("cache")
        $("#cmb_club").val("");
    });

    $('#affiliation').on('click', function(){
        $("#cache_1").removeClass("cache")
        $("#cmb_club").val("");
    });

    $('#affiliation_2').on('click', function(){
        $("#cache_2").addClass("cache")
        $("#txt_affiliation").val("");
    });

    $('#cmb_club').change(function(){
        if($(this).children("option:selected").val() == "Autre"){
            $("#cache_2").removeClass("cache")
        }
        else{
            $("#txt_affiliation").val("");
            $("#cache_2").addClass("cache")
        }
    });

    $('#monitor').on('click', function(){
        if($(this).is(":checked")){
            $("#cache_3").removeClass("cache")
        }
        else{
            $("#cache_3").addClass("cache")
            $("#nb_eleves").val("");
        }
    });

    $('#reset').on('click', function() {
        $("#nb_eleves").val("");
    });
});