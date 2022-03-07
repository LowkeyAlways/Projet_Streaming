document.addEventListener("DOMContentLoaded",()=>{
    console.log("Loaded")
    let form, parents
        // Chercher les éléments du dom
        parents = document.querySelector("body")
        console.log(parents.parentElement)
        console.log(parents.childNodes.length+" éléments dans le document")
        console.log(parents.childNodes[3].childNodes)
    
    
    // form object
    form = ({
        name: document.querySelectorAll("input")[0],
        btn : document.querySelectorAll("input")[4],
        valider(){
            this.name.value ? console.log(this.name.value) : console.log("remplir les champs")
        }
    })
    
    //event pour capter si les champs sont vides
   form.btn.addEventListener("click",(e)=>{
        e.preventDefault()
        form.valider();
        //console.log(e.target.tagName)  
    })
})