
const calcular = (cadena)=>{

    const partes = cadena.split(/([-+/*])/);//expresion regular vista en clase el día 1 de marzo de 2023 en la practica 17 de la unidad 1,esto lo que hace es que en los [] son los caracteres validos ,el metodo .split de la cadena es
    
    let resultado = parseFloat(partes[0]); //primer num a float
    for (let i = 1; i < partes.length; i += 2) {
      const operador = partes[i];
      const numero = parseFloat(partes[i + 1]);
    
      switch (operador) {
        case "+":
          resultado += numero;
          break;
        case "-":
          resultado -= numero;
          break;
        case "*":
          resultado *= numero;
          break;
        case "/":
          resultado /= numero;
          break;
      }
    }
    
    return resultado; 
    
}
