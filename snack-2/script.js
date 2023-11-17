const listaNomi = ["mario", "maria", "gino", "ginetta", "paolo", "mario", "maria", "gino", "ginetta", "paolo"]
const listaCognomi = ["pietra", "sasso", "carta", "forbice", "falegname", "pietra", "sasso", "carta", "forbice", "falegname"]

let PersonaInvitata;

for (i=0; i<10; i++){
    let numRandom1 = Math.floor(Math.random() * 10) * 1
    let numRandom2 = Math.floor(Math.random() * 10) * 1

    let nomeInvitato = listaNomi[numRandom1]
    let cognomeInvitato = listaCognomi[numRandom2]

    PersonaInvitata =`${nomeInvitato} ${cognomeInvitato}`

    console.log(`persona invitata: ${PersonaInvitata}`)
}