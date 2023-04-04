//(...): Admite el uso de rest y pread con objetos copia lo que esta en las claves en nuestros objetos 
const user = {username: 'Bella', age: 34, country: 'GU'}
const {username, ...ElnomIdentificador} = user
//Nos va a ayudar a que se propague todos los valores osea que los ponga alli sin ponerlos manualmente 
console.log(username);
console.log(ElnomIdentificador);
//aqui lo separamos username del resto ya que lo estamos asignando a otro tanto en la contante como en el cosole.loqg()
//lo estamos separando con el ...