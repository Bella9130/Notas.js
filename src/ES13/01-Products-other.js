//aqui se llamara a una API
//await nos va a ayudara que epere la info del servior y luego transformalos a un objeto e imprimeros por conlog
import fecth from "node-fecth" 
const response = await fecth('link de la API que se descarga')
const products = await response.json();

export{products};
//¿por que ya no se usa await? 