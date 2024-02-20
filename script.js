/*Un punto fijo en una matriz es un elemento cuyo valor es igual a su índice. Dada una matriz ordenada de elementos distintos, devuelve un punto fijo, si existe. En caso contrario, devuelve False.
Por ejemplo, dado [-6, 0, 2, 40], debe devolver 2. Dado [1, 5, 7, 8], debe devolver False.*/


function evaluarFixed(matriz){
  
    for ( let i=0; i < matriz.length; i++){
    
    if (i == matriz[i]){
          return matriz[i];
        } else {
        result = false;
      }
     
   }
   return result;
  }
  let matriz = [-6, 0, 2, 40];
  evaluarFixed(matriz);

  //This problem was asked by Netflix.

/*Given an array of integers, determine whether it contains a Pythagorean triplet. Recall that a Pythogorean triplet (a, b, c) is defined by the equation a^2+ b^2= c^2.*/

function containsPythagoreanTriplet(data) {

    let a = data[0];
    let b = data[1];
    let c = data[2];
    
    if(a**2+b**2 === c**2) return true;
    
    return false;
  }

  //--
/*
  function containsPythagoreanTriplet([a,b,c]) {
    // Validación del array recibido por parámetro
  
    if(a**2+b**2 === c**2) return true;
    
    return false;
  }
  
  let values = [3,4,5,6,5,67,7,8,4,5,7,7,54,"ekejfdkgj"] // a,b,c
  containsPythagoreanTriplet(values)
  */

  //-- CON DESESTRUCTURACIÓN : 

  /*function containsPythagoreanTriplet([a,b,c]) {

    // Validación del array recibido por parámetro
  
    if(a**2+b**2 === c**2) return true;
    
    return false;
  }
  let values = [3,4,5] // a,b,c
  containsPythagoreanTriplet(values)
*/


