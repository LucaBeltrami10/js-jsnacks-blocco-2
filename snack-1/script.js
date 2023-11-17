const numbersEntered = []
let userNumber = parseInt(prompt('inserisci un numero'))

let numbersEnteredSum = 0

while (numbersEnteredSum < 50){
    numbersEntered.push(userNumber)
    numbersEnteredSum += userNumber
    userNumber = parseInt(prompt('inserisci un nuovo numero'))
}

console.log(`i numeri inseriti nella lista sono: ${numbersEntered}`)