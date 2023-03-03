//hay 2 estandares del lado del servidor y del lado del cliete 



//Es el llamado de ese elemento
//NEXESARIO PONER LA EXTENSIÓN
import hellow from "./05-moduleExport.mjs"; //hay que tener cuidado porque nos podemos mover entre cartpetas incluso me puede ir mas para atras con ../
//nom de la var uqe se quiere, palaba.reserv from par idicar de donde y la ruta
//palabra reservada nomDeFVC from(dedonde de:) ruta

hellow(); //se manada a llamar pero
    //tenemos que poner en el package json moduloso y cualquiera de esas cosas con
    //  "type": "module"  para que no nos de incovenientes 

import laVar from "./05-moduleExport.mjs";
//Import quien Nomlavar de donde del from la ruta
laVar();

//RECORDAROTIO IMPORTANTE MUY IMPORTANTE:= PONER EN JS O EN PAKAGE.JSON "type": "module" VA A AYUDAR A QUE LO MODULOS FUNCIONEN
//ESTAO ABAJO DE LICENSE DONDE SE PONE EL NOMBRE HASTA DE ULTIMO (SI HASTA DE ULTIMO DE PENDE DE DONDE ESTE ARRIBA DE LICESE)
//PARA DECIRLE QUE EL TIPO DE ELEMTOS QUE VA A TENER SON LOS MODULOS 



    //RECORDATORIO: Para llamar a funciones y cosas asi y llamarlas bien en con NOM() nombre y parentesis SI NO NO SE LLAMAM BIEN Y UN GRAN PROBLEMA 
    //Recordatorio para eso es con node.js descargado 


// NO TAN IMPORTATNTE POR AHORA
    // Si un módulo tiene varios recursos definidos con la palabra clave export luego los podemos importar a todos juntos utilizando la siguiente sintaxis:

    <script type="module">
    
        import * as operacion from './modulo1.js';


        alert(operacion.sumar(3,8));
        alert(operacion.restar(10,3));
    
    </script>  
    // Importamos el módulo1.js que tiene dos funciones export y definimos luego de la palabra clave as el nombre de un objeto que tendrá como propiedades los recursos exportados por dicho módulo.
    
    


