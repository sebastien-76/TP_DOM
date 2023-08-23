const boutonChoixNotation = document.getElementById("bouton_choix_notation");
const boutonInitial = document.getElementById("bouton_initial");
const choixNotation = document.getElementById("choix_notation");
const note = document.getElementById("note");
const couleur = document.getElementById("couleur");
const input = document.getElementById("input");
const listeInput = document.getElementsByClassName("input");
const noteRegex = /^[1-5]{1}$/;
const couleurRegex = /^[1-4]{1}$/;

/* action sur le bouton de hoix de notation*/
boutonChoixNotation.addEventListener("click", () => {
    /* Lorsque qu'on click sur le bouton, on cache le texte initial
        on affiche le choix de notation */
        boutonInitial.setAttribute("hidden", true)
        choixNotation.removeAttribute("hidden")
    /* switch le type de notation */
    note.toggleAttribute("hidden");
    couleur.toggleAttribute("hidden");
    for (let element of listeInput) {  
        element.removeAttribute("hidden");
    };
    /* bascule le background en blanc ou en vert suivant le type de notation */
    for (var element of listeInput) {
        if (couleur.hidden) {
            element.style.backgroundColor = ("white");
        }
        else {
            element.style.backgroundColor = ("green");
        }
    };
        /* Focus sur le premier input */
        input.focus();
});



for (let element of listeInput) {
    element.addEventListener("keyup", () => {
        if (couleur.hidden) {
           if (noteRegex.test(element.value)) {
                const parentElementNode = element.parentNode;
                const grandParentElementNode = parentElementNode.parentNode;
                const next = grandParentElementNode.nextElementSibling;
                if (next !== null) {
                    const nextInput = next.querySelector("input");
                    nextInput.focus();
                    }
           } else {
                element.value = "";
                alert("veuillez entrer une note entre 1 et 5!");
                }
           } 
        else {
            if (couleurRegex.test(element.value)) {
                switch (element.value) {
                    case '1':
                        element.style.backgroundColor = ("red");
                        element.value = ("");
                        break;
                    case '2':
                        element.style.backgroundColor = ("orange");
                        element.value = ("");
                        break;
                    case '3':
                        element.style.backgroundColor = ("yellow");
                        element.value = ("");
                        break;
                    case '4':
                        element.style.backgroundColor = ("green");
                        element.value = ("");
                        break;
                };
                const parentElementNode = element.parentNode;
                const grandParentElementNode = parentElementNode.parentNode;
                const next = grandParentElementNode.nextElementSibling;
                if (next !== null) {
                    const nextInput = next.querySelector("input");
                    nextInput.focus();
                    }
            } else {
                element.value = "";
                alert("veuillez entrer une des quatre couleurs autorisées!");
                }
            }
        }   
    )};
