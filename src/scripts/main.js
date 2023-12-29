AOS.init();

const dataDoEvento = new Date("Mar 30, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const tempoHtml = document.getElementById("contador");

const contador = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const mesesAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24 * 30));
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs / horasEmMs))
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs)

    
    tempoHtml.innerHTML = `${mesesAteOEvento} meses ${diasAteOEvento} dias ${horasAteOEvento} horas ${minutosAteOEvento} minutos`

    if(distanciaAteOEvento < 0){
        clearInterval(contador)
        tempoHtml.innerHTML = 'Evento expirado'
    }

}, 1000)