$(function (){

    $.validator.addMethod("PWCheck",
        function (value, element){
            if(/^(?=.*?[A-Z]{1,})(?=(.*[a-z]){1,})(?=(.*[0-9]){1,})(?=(.*[$@$!%*?&]){1,}).{8,}$/.test(value)){
                return true;
            }
            else{
                return false;
            }
        })

   $("#inscription_form").validate(
       {
           rules:{
               nom_per:{
                   required: true,
                   minlength: 2
               },
               prenom_per:{
                   required: true,
                   minlength: 2
               },
               email_per:{
                   required: true,
                   email: true
               },
               password:{
                   required: true,
                   PWCheck: true
               },
               password_conf:{
                   required: true,
                   equalTo:"#password"
               }
           },
           messages:{
               nom_per:{
                   required: "Veuillez saisir votre nom",
                   minlength: "Votre nom doit être composé d'au moins 2 charatères"
               },
               prenom_per:{
                   required: "Veuillez saisir votre prénom",
                   minlength: "Votre prénom doit être composé d'au moins 2 charatères"
               },
               email_per:{
                   required: "Veuillez saisir votre adresse e-mail",
                   email: "Votre adresse e-mail doit avoir le format suivant : nom@domain.com"
               },
               password:{
                   required: "Veuillez saisir un mot de passe",
                   PWCheck: "Votre mot de passe doit contenir 8 charactères dont une minuscule, une majuscule, un chiffre et un charactère spécial"
               },
               password_conf:{
                   required: "Veuillez entrer votre mot de passe à nouveau",
                   equalTo: "Les mots de passes ne correspondent pas"
               }
           },
           submitHandler: function(form){
               console.log("formulaire envoyé");
           }
       }
   );
});