function calcular() {
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var operacion = document.getElementById("operadores").value;
    var resultado;
     if (operacion == "+"){
        resultado = num1 + num2;
    } else if (operacion == "-"){
        resultado = num1 - num2;
    } else if (operacion == "*"){
        resultado = num1 * num2;
    } else if (operacion == "/"){
        resultado = num1 / num2;
    }
    document.getElementById("resultado").innerHTML=resultado;
}