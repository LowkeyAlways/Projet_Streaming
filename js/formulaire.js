document.addEventListener("DOMContentLoaded", (e) => {
    var submit = document.getElementById("inscription");
    
    submit.addEventListener("submit", function(e) {
        e.preventDefault();

        var erreur

        var inputs = document.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Tous les champs ne sont pas remplis !";
                break
            }
        }

        if (erreur) {
            e.preventDefault()
            alert('Tous les champs ne sont pas remplis !');
            return false;
        } else {
            alert('Formulaire envoyé !');
        }
    });
});