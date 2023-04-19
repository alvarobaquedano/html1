function mostrarCoordenadas(event){
    let x,y;

    x = event.clientX;
    y = event.clientY;

    document.getElementById("coordenadas").innerHTML="Las coordenadas: " + x + " " + y;
}

function borrar(){
    document.getElementById("coordenadas").innerHTML="";
}