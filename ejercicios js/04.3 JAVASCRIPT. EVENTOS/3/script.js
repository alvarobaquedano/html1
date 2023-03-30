function convertirMoneda() {
    var cantidad = document.getElementById("cantidad").value;
    var moneda = document.getElementById("moneda").value;

    var resultado = 0;
    switch (moneda) {
        case "dolares":
            resultado = cantidad * 1.18; 
            break;
        case "yenes":
            resultado = cantidad * 129.18;
            break;
        case "rublos":
            resultado = cantidad * 89.72;
            break;
    }

    document.getElementById("resultado").innerHTML = resultado.toFixed(2) + " " + moneda.toUpperCase();
}