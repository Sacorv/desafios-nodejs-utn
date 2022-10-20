// Desafío 20/10/2022

// Ejercicio 1)
const saludar = (userName) => "Hola "+ userName

console.log(saludar("Scarlet"));



//Ejercicio 2)
const miContador = (contador) => (contador>10) ? contador = 0 : contador+=1

console.log(miContador(12));



//Ejercicio 3)

const sumarPares = (array) => {
  let sumatoria = 0;

  for(i=0; i<array.length; i++){
    if(array[i]%2 == 0){
      sumatoria+=array[i];
    }
  }
  return sumatoria;
}


console.log(sumarPares([1,4,2,3,5]));
