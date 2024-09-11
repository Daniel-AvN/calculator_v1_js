// Leonardo Daniel Aviña Neri 4PRAM

const txtResult = document.getElementById('txtResult');

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

const btnClear = document.getElementById('btnClear');
const btnResta = document.getElementById('btnResta');
const btnSuma = document.getElementById('btnSuma');
const btnDiv= document.getElementById('btnDiv');
const btnMulti = document.getElementById('btnMulti');
const btnResult = document.getElementById('btnResult');

let operadores = ['+', '-', '/', '*','=']
let c='edm'



const evaluar = (cadena,n)=>{
    let signo = operadores.includes(n)
    if( (cadena.endsWith('+') || cadena.endsWith('-') || cadena.endsWith('*')  || cadena.endsWith('/') || cadena.endsWith('=') ) && signo  ){
        cadena = cadena
    }else if( cadena=="" && signo ){
        cadena = cadena
    }
    else{
        cadena += n;
    }
    return cadena;
}



const calcular = (cadena)=>{

    let i = 0,resultado = 0;
    let operacion = "+";
    let numero = "";

  while (i < cadena.length) { //while porq no sabemos cuantos nums son
    const ca = cadena.charAt(i);

    if ("0123456789.".indexOf(ca) !== -1) { 
        numero += ca; //0123456789. para buscar el índice del carácter actual en esa cadena. Si el índice es diferente de -1, significa que el carácter es un número o un punto decimal,  lo agregamos a numero
    } else if ("+-/*".indexOf(ca) !== -1) {
        const vNum = Number(numero);
        numero = ""; //esto hace q

        if (operacion === "+") {
        resultado += vNum;
        } else if (operacion === "-") {
        resultado -= vNum;
        } else if (operacion === "*") {
        resultado *= vNum;
        } else if (operacion === "/") {
        resultado /= vNum;
        }
        operacion = ca;
    }
    i++;
  }

    // calcular el ultimo numero
    const vNum = Number(numero);
    if (operacion === "+") {
    resultado += vNum;
    } else if (operacion === "-") {
    resultado -= vNum;
    } else if (operacion === "*") {
    resultado *= vNum;
    } else if (operacion === "/") {
    resultado /= vNum;
    }
    return resultado; 
}

btnClear.addEventListener('click', () => {
    txtResult.textContent = ""  ;
})

btn0.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, 0)
})

btn1.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "1")

})

btn2.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "2")
})


btn3.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "3")
})

btn4.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "4")
})

btn5.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "5")
})

btn6.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "6")
})

btn7.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "7")
})


btn8.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "8")
})

btn9.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "9")
})

btnResta.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "-")
})

btnSuma.addEventListener('click', () => {

    txtResult.textContent= evaluar(txtResult.textContent, "+")
})

btnMulti.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "*")
})

btnDiv.addEventListener('click', () => {
    txtResult.textContent= evaluar(txtResult.textContent, "/")
})


btnResult.addEventListener('click', () => {
    
    txtResult.textContent= evaluar(txtResult.textContent, "=")
    txtResult.textContent = calcular(txtResult.textContent)
})


