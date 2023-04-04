//string padding
//va a tener un pad un espacio y si esta vacio o rellena y si no lo deja alli de los elemetnos 
const string = 'hola';
console.log(string.padStart(4, 'hi_'));
//Osea que va haber espacios conforme al string 'hola' son 4 letras = 4 espacios
//y lo que va a hacer padstart rellenar depende del numero y el mensaje osea
//si tenes 4 valores ej'hola los valores se va a quedar quietos si pones 4 y 'mensaje' en el pad No va a pasar nada
//porque son 4 espacios ocupados y 4 se puso ej porque 4 sobre osea si lo pones enciam son 4 
// pero si pones 5 se va a ver un poco la palabra porque de 4 espacios estas ocupando 5 y se va a er un poco del mesaje R\\ mhola

const string2 = 'hola';
console.log(string2.padStart(5, 'hi_'));//nos estrega un string de 5 elemetos rellenandolo con 
//Se va poniendo un caracteer la a vez ya que esta ocuapando 5 es como 5 sobre 4


//PADEND 
//Este es lo mismo que que padstar pero en end es obvio pero es lo mismo hasta al final
const stringEnd = 'hola';
console.log(stringEnd.padEnd(5, 'hi_'));//obvio lo va a poner hasta el final  despues de 5 ya va a poner la cosa.










//Ejercicico1
//concatena o une dos stings sin usar teplate literal ni suma de string la palabra es hola a todos
const Nombrepad = 'hola';
console.log(Nombrepad.padEnd(12, ' a todos'));
//Ejercicio2
//pon  el numero de la edad despues que el nombre de la persona
const nombreejer2 = 'Bella';
console.log(nombreejer2.padEnd(21, ' 15 años de edad'));
