const firstWord = prompt('inserisci una parola')
const secondtWord = prompt('inserisci una parola')

console.log(firstWord.length)
console.log(secondtWord)

function whichOneIsLonger (firstWord, secondtWord){

    if (firstWord.length > secondtWord.length){
        return console.log(firstWord)
    } else if (secondtWord.length > firstWord.length){
        return console.log(secondtWord)
    }else{
        return console.log(`${firstWord} ${secondtWord}`)
    }
}



console.log(whichOneIsLonger)