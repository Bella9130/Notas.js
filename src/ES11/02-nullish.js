//El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.
const number = 1;
const validate = number ?? 5;
console.log(validate);
//Loq que hace simplemetne es ver el valor y depende cual sea y si es null o undifined pone el 5 si no esta alli
//es como hacer un if si esta alli no hacer nada si No esta alli poner el valor asignado que es este caso es 5 