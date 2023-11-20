const firstWord = prompt('inserisci una parola')
const secondWord = prompt('inserisci una parola')

console.log(firstWord.length)
console.log(secondWord.length)

function whichOneIsLonger (wordA, wordB){

    if (wordA.length > wordB.length){
        return wordA
    } else if (wordB.length > wordA.length){
        return wordB
    }else{
        return `${wordA} ${wordB}`
    }
}

let LongerWord = whichOneIsLonger(firstWord, secondWord)
console.log(LongerWord)