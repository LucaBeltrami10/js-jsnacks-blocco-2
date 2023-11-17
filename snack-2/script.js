const listaNomi = [mario, maria, gino, ginetta, paolo, sandrone, carmelo, carmela, titti, pluto]
const listaCognomi = [pietra, sasso, carta, forbice, falegname, fungo, penna, telefono, cavo]

let PersonaInvitata;

for (i=0; i<10; i++){
    let numRandom1 = Math.floor(Math.random() * 10) * 1
    let numRandom2 = Math.floor(Math.random() * 10) * 1

    let nomeInvitato = listaNomi[1]
    let cognomeInvitato = listaCognomi[1]

    PersonaInvitata = `${nomeInvitato} ${cognomeInvitato}`

    console.log(`persona invitata: ${PersonaInvitata}`)
}