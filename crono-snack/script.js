const start = document.getElementById('start')
const stop = document.getElementById('stop')
const tempo = document.getElementById('tempo')

let tempoTrascorso = 0

start.addEventListener('click', function(){
    setInterval(addSecondInDecimali, 100, tempoTrascorso);
})


function addSecondInDecimali(conteggioTempo){
    conteggioTempo += 0.1
    console.log(conteggioTempo)
}