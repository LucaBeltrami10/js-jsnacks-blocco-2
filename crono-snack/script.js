const start = document.getElementById('start')
const stop = document.getElementById('stop')
const tempo = document.getElementById('tempo')

let tempoTrascorso = 0

start.addEventListener('click', function(){
    setInterval(addSecond, 100);
})


function addSecond(conteggioTempo){
    conteggioTempo += 0.1
    tempo.innerHTML = tempoTrascorso
}