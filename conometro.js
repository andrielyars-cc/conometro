
const tempo=document.querySelector("#tempo");
const iniciar=document.querySelector("#iniciar");
const pausar=document.querySelector("#pausar");
const resetar=document.querySelector("#resetar");

let contador=0;
let intervalo;

function atualizarTempo(){

    contador++;

    tempo.textContent=contador;
}

iniciar.addEventListener("click",function(){

    clearInterval(intervalo);

    intervalo=setInterval(
        atualizarTempo,
        1000
        );
    }
);

pausar.addEventListener("click",function(){

    clearInterval(intervalo);

    }
);

resetar.addEventListener("click",function(){

    clearInterval(intervalo);

    contador=0;

    tempo.textContent=contador;

    }
);