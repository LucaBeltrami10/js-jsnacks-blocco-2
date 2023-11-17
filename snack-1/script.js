const numbersEntered = []
let userNumber = parseInt(prompt('inserisci un numero'))
console.log(`primo numero inserito ${userNumber}`)

let numbersEnteredSum = 0

while (numbersEnteredSum < 50){
    numbersEnteredSum += userNumber
    numbersEntered.push(userNumber)
    console.log(`numero inserito ${userNumber}`)
    userNumber = parseInt(prompt('inserisci un nuovo numero'))
    if(numbersEnteredSum > 50){
        numbersEntered.pop()
    }
}

console.log(`i numeri inseriti nella lista sono: ${numbersEntered}`)
console.log(`la loro somma è: ${numbersEnteredSum}`)
