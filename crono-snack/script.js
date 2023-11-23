const starttime = document.getElementById('start')
const stoptime = document.getElementById('stop')
const tempo = document.getElementById('tempo')

let timer = 0
let clock 
tempo.innerHTML = timer


starttime.addEventListener('click', function(){
    console.log('start timer')

    clock= setInterval(function(){
        timer = parseInt(timer, 10) + 1;
        tempo.innerHTML = timer;
    }, 1000)
})

stoptime.addEventListener('click', function(){
    clock = clearInterval(clock)
    console.log('stop timer')
})




/* let tempoTrascorso; 

start.addEventListener('click', function(){
    let clock = setInterval(function(
        tempoTrascorso += 1
        console.log(tempoTrascorso)
    ) 1000);
})

stop.addEventListener('click',function(){
    clock = clearInterval(clock)
})


function addSecondInDecimali(conteggioTempo){
    conteggioTempo += 1;
    console.log(conteggioTempo)
    /* conteggioTempo.innerHTML = parseInt(conteggioTempo, 10) + 1 */