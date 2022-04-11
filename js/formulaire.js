document.addEventListener("DOMContentLoaded", (e) => {
    var submit = document.getElementById("inscription");
    
    submit.addEventListener("submit", function(e) {
        

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
    const formulaire = {
        last_name : document.getElementsByName("nom")[0],
        first_name : document.getElementsByName("prenom")[0],
        email : document.getElementsByName("email")[0],
        pays : document.getElementsByName("pays")[0],
        ville : document.getElementsByName("ville")[0],
        btn : document.getElementById('submit'),
        data : [],

    send() {
        if (this.first_name.value && this.last_name.value && this.email.value && this.pays.value && this.ville.value) {
            console.log(`Nom : ${this.first_name.value} 
            Prénom : ${this.last_name.value}
            Email : ${this.email.value}
            Pays : ${this.pays.value}
            Ville : ${this.ville.value}`);
            formulaire.data.push(this.first_name.value, this.last_name.value, this.email.value, this.pays.value, this.ville.value);
            console.table(formulaire.data);
            localStorage.setItem('User', JSON.stringify(formulaire.data));
            alert('Formulaire envoyé');
        } else {
            alert('Veuillez remplir les champs');
        }
    }
    }

    formulaire.btn.addEventListener("click", (e) => {
        e.preventDefault();
        formulaire.send();
    });
});
