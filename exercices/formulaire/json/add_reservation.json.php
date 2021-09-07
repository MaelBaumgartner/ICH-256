<?php
$nb_place_dispo = 10;

$reponse = array();
$reponse["type"] = "success";
$reponse["message"] = "Tout c'est bien passe";

if($_POST["nb_eleves"] == ""){
    $_POST["nb_eleves"] = 0;
}

if($_POST["nb_eleves"] + 1 > $nb_place_dispo){
    $reponse["type"] = "danger";
    $reponse["message"] = "Il ne reste que " . $nb_place_dispo . " place pour ce jour";
}


echo json_encode($reponse);
?>
