/* genero funzione */
function addNumberOfChildToParent(numElements, parentId){

    for (let i = 0 ; i < numElements ; i++){
        let element = document.createElement('div')
        element.classList.add('square-element')

        let parent = document.getElementById(parentId)
        parent.appendChild(element)
    }
}


/* chiedo all'utente un numero */
const numberOfSquares = parseInt(prompt('Inserisci quanti quadrati vuoi visualizzare'))

/*  applico funzione*/

addNumberOfChildToParent(numberOfSquares, 'square-container')

