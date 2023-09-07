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
    for (let element of listeInput) {
        if (couleur.hidden) {
            element.style.backgroundColor = ("white");
            element.value = "";
        }
        else {
            element.style.backgroundColor = ("green");
            element.value = "";
        }
    };
        /* Focus sur le premier input */
        input.focus();
});

for (let element of listeInput) {
    const parentElementNode = element.parentNode;
    const grandParentElementNode = parentElementNode.parentNode;
    const next = grandParentElementNode.nextElementSibling;
    element.addEventListener("keyup", () => {
            /* Cas de la notation par note */
        if (couleur.hidden) {
            /* Vérification de la regex pour les notes */
            if (noteRegex.test(element.value)) {
                /* Si regex ok, passage du focus en dessous sauf pour le dernier */
                if (next != null) {
                    const nextInput = next.querySelector("input");
                    nextInput.focus();
                } else {
                    element.blur();
                };

            } else {
                /* Sinon regex ko, on vide l'input et message pour demander de rentrer une note correcte */
                element.value = "";
                alert("veuillez entrer une note entre 1 et 5!");
            }
        } 
        else {
                /* Cas de la notation par couleur */
                /* Vérification de la regex couleur */
            if (couleurRegex.test(element.value)) {
                /* si ok, on tranforme l'entrée en couleur et on supprimer l'entrée */
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
            /* Passage du focus en dessous */
            if (next != null) {
                const nextInput = next.querySelector("input");
                nextInput.focus();
            } else {
                element.blur();
            }
            } else {
            /* si regex ko, on vide l'entréé et on demande une nouvelle entrée*/
            element.value = "";
            alert("veuillez entrer une des quatre couleurs autorisées!");
            }
        }
    }   
)};
