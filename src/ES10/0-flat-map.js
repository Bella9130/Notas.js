//Matrices
//flat-map: Nos devuelve una matriz de cualquier submartiz para aplanarla
const arrays = [1,2,3,4,[1,2,3,4,[1,2,3]]] //recordar separar por comas los arrays
console.log(arrays.flat(3));
//flat: Es para aplanar la matriz esta palabra reservada consta de niveles de profundidad y 
//como aqui 3 arreglos(array) metidos se pone 3 poque hay 3


//flatmap
const arra2 = [1,2,3,4,5,6]
console.log(arra2.flatMap(u => [u, u * 3]));//a
//mapee los resultados u(poniendoNomAloDeAdentro) que sea [u, u * 3]
//El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. 
//Es idéntico a un map seguido de un flatten de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos 
//en un método es ligeramente más eficiente.


//FLAT: El método flat() crea una nueva matriz con todos los 
//elementos de sub-array concatenados recursivamente hasta la profundidad especificada







//Las matrices son arrays anidados dentro de arrays
const array = [1,2,3,4,[1,2,3,4,[1,2,3]]]
console.log(array);