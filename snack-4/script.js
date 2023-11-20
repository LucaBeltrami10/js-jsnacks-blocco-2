function firstIsDivisibleBySecond (numberA, numberB){
    if(numberA == numberB){
        return `i numeri ${numberA} e ${numberB} sono uguali`
    }

    if (numberA % numberB == 0){
        return true
     } else{ 
        return false
    }
}

/* richiedo due numeri all'user */
const firstNumber = prompt('inserisci un numero')
const secondNumber = prompt('inserisci un secondo numero')

/* uso la funzione per determinare se il primo è divisibile per il secondo */
let firstIsDivisible = firstIsDivisibleBySecond(firstNumber, secondNumber)

/* mostro in console il return della funzione */
console.log(firstIsDivisible)
