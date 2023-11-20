/* richiedo due parole */
const firstWord = prompt('inserisci una parola')
const secondWord = prompt('inserisci una parola')

/* controllo la lunghezza delle parole */
console.log(firstWord.length)
console.log(secondWord.length)

/* creo funzione con parole chiave */
function whichOneIsLonger (wordA, wordB){

    if (wordA.length > wordB.length){
        return wordA
    } else if (wordB.length > wordA.length){
        return wordB
    }else{
        return `${wordA} ${wordB}`
    }
}

/* uso funzione e inserisco le parole prompt da lavorare */
let LongerWord = whichOneIsLonger(firstWord, secondWord)

/* mostro il return della funzione */
console.log(LongerWord)