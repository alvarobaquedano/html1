function mensaje(){
    alert("Hola");
}
function cargar(){
    alert ("patata");
}
function mostrarAsig(){
    let elemento = document.getElementById("asignatura").value;
    document.getElementById("materia").innerHTML="La aignatura es "+ elemento;
}
function cambiarImagen(){
    document.getElementById("foto").setAttribute("src","Switches.png");
}
function cambiarImagen2(){
    document.getElementById("foto").setAttribute("src","xd.png");
}
function escribir(x){
    document.getElementById("cuadro").innerHTML=x.value;
}