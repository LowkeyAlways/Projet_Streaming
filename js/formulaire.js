document.addEventListener("DOMContentLoaded", (e) => {
    var submit = document.getElementById("inscription");
    
    submit.addEventListener("submit", function() {
        e.preventDefault();

        var erreur

        var inputs = document.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Veuillez renseigner tous les champs";
                break
            }
        }

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {
            alert('Formulaire envoyé !');
        }

        // var nom = document.getElementById("nom");
        // var prenom = document.getElementById("prenom");
        // var email = document.getElementById("email");
        // var pays = document.getElementById("pays");
        // var ville = document.getElementById("ville");

        
        
        
        
        // if (!ville.value){
        //     erreur = "Veuillez renseigner une ville";
        // }
        // if (!pays.value){
        //     erreur = "Veuillez renseigner un pays";
        // }
        // if (!email.value){
        //     erreur = "Veuillez renseigner un email";
        // }
        // if (!prenom.value){
        //     erreur = "Veuillez renseigner un prénom";
        // }
        // if (!nom.value){
        //     erreur = "Veuillez renseigner un nom";
        // }

        

    });
});