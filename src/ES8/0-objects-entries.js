//este de un objeto nos lo va ampasar a arrays
const data = {GU: 'CUATEMALA', PRIM1: 'JEFRIBRR', PRIM2: 'MAYEBURR', PRIM3: 'KIM'}; //solo es un objeto
//RECORDATORIOSD IMPORTANTES: Object va con mayuscula
console.log(Object.entries(data));
//Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento osea cambiea el objeto a array de elementos  
//entries() El método entries() devuelve un nuevo objeto de tipo Iterator que contiene un array de tuplas [value, value] por cada elemento en el Set original,
//manteniendo el orden de inserción. En los objetos de tipo Set no existe una clave key como ocurre en los objetos de tipo Map .
//Object. entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.

//esto nos va a servir para tranformar u objeto en un array y para acceder mas facil a un elemto 