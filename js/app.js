document.addEventListener("DOMContentLoaded", e => {
    let form

    form = ({
        name: document.querySelectorAll("input")[0],
        btn : document.querySelectorAll("input")[4],
        valider(){
            this.name.value ? console.log(this.name.value) : console.log("remplir les champs")
        }
    })

    form.btn.addEventListener("click",(e)=>{
        e.preventDefault()
        form.valider();
        
        
    })

});