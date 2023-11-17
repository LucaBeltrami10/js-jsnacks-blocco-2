const numbersEntered = []
let userNumber = parseInt(prompt('inserisci un numero'))
console.log(`primo numero inserito ${userNumber}`)

let numbersEnteredSum = 0

while (numbersEnteredSum < 50){
    userNumber = parseInt(prompt('inserisci un nuovo numero'))
    console.log(`numero inserito ${userNumber}`)
    numbersEntered.push(userNumber)
    numbersEnteredSum += userNumber
    
}

console.log(`i numeri inseriti nella lista sono: ${numbersEntered}`)
console.log(`la loro somma è: ${numbersEnteredSum}`)
