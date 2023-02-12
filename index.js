let respuesta; 

while (respuesta == "4") {
let Pregunta = prompt ("Cuanto es la raiz")
respuesta = Pregunta;
};

const nom = ["primero", "elemten", "jeje"];

function imprimir (nom) {
    
    console.log (nom[0])
};

function imprimirElemto (nom) {
    for (let i = 0; i < nom.length; i++) {
        console.log(nom[i])
    }
}

Object.values(nom)


const tiposDeSuscripciones = {
    free: "solo uno",
    basic: "solo dos",
    expert: "solo por una anño", 
    expertduo: 'igual pero con dos'
}

function suscripciones (suscripciones) {
    if (suscripciones[tiposDeSuscripciones]) {
        console.log(suscripciones[tiposDeSuscripciones])
        return;
    }
    console.warn("no esxiste")
}
 