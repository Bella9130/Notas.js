//Accede al objeto global y todo lo uqe hay alli pero habia incopatibilidad porque cada uno tenia palabas diferentes
//
console.log(window);//contiene varias cosas pero no va a funcionar aqui solo en chrome
console.log(global);//Esto funciona del lado de node
console.log(selft);//webworker
console.log(globalThis); //este es flexible a todos las app es estandar para cualquier app