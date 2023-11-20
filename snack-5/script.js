/* creo funzione per generare padre e figlio */

function addParentAndChildText (tagParent, TagChild, TextChild){
    /* genero parent */
    let newParent = document.createElement(tagParent)
    /* genero figlio e lo inserisco in parent */
    let newChild = document.createElement(TagChild)
    newParent.appendChild(newChild)
    /* inserisco testo in child */
    newChild.innerHTML = TextChild

    return newParent
}

/* recupero il tag a cui aggiungere parent e child */
const divParent = document.getElementById('container')

/* richiedo all'utente cosa inserire */
let text1 = prompt('parent')
let text2 = prompt('figlio')
let text3 = prompt('contenuto')

/* uso funzione per generare elementi all'interno e collego padre */
divParent.appendChild(addParentAndChildText(text1, text2, text3))


