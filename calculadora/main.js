var resultado = document.getElementById("resultado");
var error = 0;

const reg = /[-+*\/ ]{0,1}[ ]{0,1}[0-9]{1,2}[-+*\/ ]{0,1}/g;

var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var zero = document.getElementById("zero");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");

uno.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "1";
    }else{
        resultado.textContent = "1";
        error = 0;
    }
    
}
dos.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "2";
    }else{
        resultado.textContent = "2";
        error = 0;
    }
}
tres.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "3";
    }else{
        resultado.textContent = "3";
        error = 0;
    }
}
cuatro.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "4";
    }else{
        resultado.textContent = "4";
        error = 0;
    }
}
cinco.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "5";
    }else{
        resultado.textContent = "5";
        error = 0;
    }
}
seis.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "6";
    }else{
        resultado.textContent = "6";
        error = 0;
    }
}
siete.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "7";
    }else{
        resultado.textContent = "7";
        error = 0;
    }
}
ocho.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "8";
    }else{
        resultado.textContent = "8";
        error = 0;
    }
}
nueve.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "9";
    }else{
        resultado.textContent = "9";
        error = 0;
    }
}
zero.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "0";
    }else{
        resultado.textContent = "0";
        error = 0;
    }
}
division.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "/";
    }
}
suma.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "+";
    }
}
multiplicacion.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "*";
    }
}
resta.onclick = function(e){
    if(error == 0){
        resultado.textContent = resultado.textContent + "-";
    }
}

punto.onclick = function(e){
    resultado.textContent = "";
}

igual.onclick = function(e){
    if(reg.test(resultado.textContent)){
        resultado.textContent = eval(resultado.textContent);
    }
    else{
        resultado.textContent = "Error";
        error = 1;
    }
}


