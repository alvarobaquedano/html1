function adivina(numero) {
        var aleatorio = Math.floor(Math.random() * 4) + 1;
        if (numero == aleatorio) {
          document.getElementById('resultado').innerHTML = '¡Enhorabuena, has acertado!';
        } else {
          document.getElementById('resultado').innerHTML = 'La bola estaba en el número ' + aleatorio;
        }
            const myButton = document.getElementById('boton');
            myButton.disabled = true;
            const myButton2 = document.getElementById('boton2');
            myButton2.disabled = true;
            const myButton3 = document.getElementById('boton3');
            myButton3.disabled = true;
            const myButton4 = document.getElementById('boton4');
            myButton4.disabled = true;
      }
      function reiniciar(){
        const myButton = document.getElementById('boton');
        myButton.disabled = false;
        const myButton2 = document.getElementById('boton2');
        myButton2.disabled = false;
        const myButton3 = document.getElementById('boton3');
        myButton3.disabled = false;
        const myButton4 = document.getElementById('boton4');
        myButton4.disabled = false;
        document.getElementById('resultado').innerHTML = "";
        
      }