let numeroAleatorio;
let reloj;
let imagen="img";
let tiempo = 10;

function aleatorio(min,max){
    return Math.floor((Math.random()*(max-min+1))+min)
}
function DescubrirPelota(posicion){
    document.getElementById(posicion).src="pelota.jpeg";
}
function CubrirPelota(){
    document.getElementById('img1').src="vaso.jpg";
    document.getElementById('img2').src="vaso.jpg";
    document.getElementById('img3').src="vaso.jpg";
    document.getElementById('img4').src="vaso.jpg";
}
function EstaAqui(numPos){
    if(numPos==numeroAleatorio){
        DescubrirPelota(imagen+numeroAleatorio);
        alert("Has ganado");
    }else 
    alert("Has perdido");
}
function CuentaAtras(){
    if(tiempo>=0){
        document.getElementById("reloj").innerHTML=tiempo;
        tiempo--;
    }else  
        document.getElementById("reloj").innerHTML="SE TE HA AGOTADO EL TIEMPO";
}
window.onload = function Carga(){
    numeroAleatorio=aleatorio(1,4);
    reloj=document.getElementById("reloj");
    DescubrirPelota(imagen+numeroAleatorio);
    setTimeout(CubrirPelota,1000);
    numeroAleatorio = aleatorio(1,4);
    setInterval(CuentaAtras,1000);
}
