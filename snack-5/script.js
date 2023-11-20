/* creo funzione per generare padre e figlio */

function addParentAndChildText (tagParent, TagChild, TextChild){
    /* genero parent */
    let newParent = document.createElement(tagParent)
    /* genero figlio e lo inserisco in parent */
    let newChild = document.createElement(TagChild)
    newParent.appendchild(newChild)
    /* inserisco testo in child */
    newChild.innerHTML = TextChild

    return newParent
}

/* recupero il tag a cui aggiungere parent e child */
const divParent = document.getElementById('container')

/* uso funzione per generare elementi all'interno e collego padre */


