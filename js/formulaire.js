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
    });
});