const listaNomi = ["mario", "maria", "gino", "ginetta", "paolo", "mario", "maria", "gino", "ginetta", "paolo"]
const listaCognomi = ["pietra", "sasso", "carta", "forbice", "falegname", "pietra", "sasso", "carta", "forbice",]
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