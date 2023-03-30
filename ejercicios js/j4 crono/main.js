let minutos = 0;
let segundos = 0;
let id;

function reloj(){
    document.getElementById("reloj").innerHTML=minutos+":"+segundos;
    if (segundos<59){
        segundos++;
    }
    else {
        minutos++;
        segundos=0;
    }
}
function reanudar(){
    id=setInterval(reloj, 1000);
}
function parar(){
    clearInterval(id);
}
function resetear(){
    minutos=0;
    segundos=0;
}
window.onload = function Carga(){
    reanudar();
}
