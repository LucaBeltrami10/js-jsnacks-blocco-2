const listaNomi = ["mario", "maria", "gino", "ginetta", "paolo", "sandro", "pino", "antò", "gianmaria", "pierpablo"]
const listaCognomi = ["pietra", "sasso", "carta", "forbice", "falegname", "gianbruno", "amaratto", "hofame", "marimba", "trapezio"]
const numeroInvitati = 20

console.log(listaNomi.length, listaCognomi.length)

let PersonaInvitata;

for (i=0; i<numeroInvitati; i++){
    let numRandom1 = Math.floor(Math.random() * listaNomi.length) * 1
    let numRandom2 = Math.floor(Math.random() * listaCognomi.length) * 1

    let nomeInvitato = listaNomi[numRandom1]
    let cognomeInvitato = listaCognomi[numRandom2]

    PersonaInvitata =`${nomeInvitato} ${cognomeInvitato}`

    console.log(`persona invitata: ${PersonaInvitata}`)
}