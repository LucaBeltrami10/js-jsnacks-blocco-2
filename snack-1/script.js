const numbersEntered = []
let userNumber = prompt('inserisci un numero')

let numbersEnteredSum = 0

while (numbersEnteredSum < 50){
    numbersEntered.push(userNumber)
    numbersEnteredSum += userNumber
    console.log(numbersEntered)
    userNumber = prompt('inserisci un nuovo numero')


}

console.log(numbersEntered)