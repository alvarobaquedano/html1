let matriz = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
const minimo=0;
const maximo=4;


function numeroAleatorios(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function hayBomba(x,y){
    if(Matriz[x,y]=='B')
        return true;
    else
        return false;
}

function rellenarVecinos(){
    //Casilla arriba
    if((y-1>minimo)&&(!hayBomba(x,y-1)))
        matriz[x,y-1]++;
    //Casilla abajo
    if((y+1<maximo)&&(!hayBomba(x,y+1)))
        matriz[x,y+1]++;
    //Casilla izquierda
    if((x-1>minimo)&&(!hayBomba(x-1,y)))
        matriz[x-1,y]++;
    //Casilla derecha
    if((x+1<maximo)&&(!hayBomba(x+1,y)))
        matriz[x+1,y]++;
    //Casillas diagonales
    //Casilla diagonal arriba izquierda
    if((x-1>minimo)&&(y-1>minimo)&&(!hayBomba(x-1,y-1)))
        matriz[x-1,y-1]++;
    //Casilla diagonal arriba derecha 
    if((x+1<maximo)&&(y+1>minimo)&&(!hayBomba(x+1,y-1)))
        matriz[x+1,y-1]++;
    //Casilla diagonal abajo izquierda
    if((x-1>minimo)&&(y-1>maximo)&&(!hayBomba(x-1,y+1)))
        matriz[x-1,y+1]++;
    //Casilla diagonal abajo derecha
    if((x+1<maximo)&&(y+1<maximo)&&(!hayBomba(x+1,y+1)))
        matriz[x+1,y+1]++;
}

function generarBomba(){
    let x,y;
    x=numeroAleatorios(0,4);
    y=numeroAleatorios(0,4);
    matriz[x,y]="B";
}
