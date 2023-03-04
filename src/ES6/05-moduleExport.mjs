
//MODULE (Nos permite trabajar nativamente) mjs Indica que trabajaremos con modulos
//Es una nueva caracteristica que nos permite separar archivo que se va a representar como modulos para luego importarlos en otro y hacer referencia a la logica que se encuentre alli
//IMPORT: Es una palabra reservada que usa las funciones o varialbles clases tambien de otros archivos este debera estar hasta arriba del archivo y utilizando el nombre del archivo original
//EXPORT: Es una palabra reservada que exporta funciones o variables para utilizarlas en otros archivos 
const hellow = () => {
    console.log('Hello');
}

export default hellow;

const laVar = () => {
     console.log('laVar');
}

export  {laVar};
// export Myfunction NomlaVar; 






    

//     default export
// Es una práctica común en JavaScript crear módulos que exporten un único valor. En estos casos tenemos una sintaxis distinta para indicar el recurso a exportar mediante las palabras claves 'default export'.

// Veamos un ejemplo donde almacenamos en un módulo la clase Dado y la exportamos por defecto:

// dado.js

export default class Dado {
    constructor() {
        this.tirar();
    }
  
    get valor() {
        return this._valor;
    }
  
    tirar() {
        this._valor=Math.trunc(Math.random()*6)+1;
    }
}
