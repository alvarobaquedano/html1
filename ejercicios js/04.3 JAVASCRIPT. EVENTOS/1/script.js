function comprobarNumero() {
    let numero = document.getElementById("numero").value;
    let Par = numero % 2 === 0;
    let mensaje = Par ? "El número es par." : "El número es impar.";
    document.getElementById("resultado").innerHTML=mensaje;
  }
  