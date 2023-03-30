function Mostrar(){
   let parrafos = document.getElementsByTagName("p");
//    for (let i=0; i<parrafos.length;i++){
//     alert(parrafos[i].innerHTML);
//    }
let nodo6 = document.getElementById("nodo6").innerHTML;
/* document.write(nodo6);
console.log(nodo6); */
let elemento = document.createElement("h1");
let texto = document.createTextNode("Hola soy nodo6");
elemento.appendChild(texto); 
document.body.appendChild(elemento);
document.getElementById("remplazar").innerHTML="prueba";
let nodoEliminar = document.getElementById("eliminar");
nodoEliminar.parentNode.removeChild(nodoEliminar);
}