const fruis = () => {
    if(true) {
        var fruit1 = 'aple'
        let frsd = ' frua'
        const sd = 'Fruta2'
    }
    console.log(fruit1);
    console.log(frsd);
    console.log(sd);
}

fruis()







//Arrow Function

function circulo (num)  {
    return num * num;
}

const circulo = num => num * num;

let hellow = 'Hellosw';
let todos = 'todos';

let hw = hellow + ' ' + todos + '!!!s'; 
console.log(hw);

// Template literals 
let epic = `${hellow} ${todos}!`;
console.log(epic);

let lorem = 'hola \n' + 'esto tambien';
console.log(lorem); 






    //   Parametro por defecto

function newUser(name, apellido, country) {
    var name = name || 'Bella Estefani';
    var apellido = apellido || 'Salguero Cano';
    var country = country || 'GU';
    console.log(name, apellido, country);
}

newUser();
newUser('Linda', 'Cano ', 'AM!' );

    //segundo MANERA PARAMETRO 

    function newUsuario (name = 'Bella Estefani', apellido = 'Salguero Cano', country = 'GU') {
        console.log(name, apellido, country);
    }

    newUsuario();
    newUsuario('Linda', 'Salguero', 'AM' );







    //Rest-Spread 

    //array destructuring 
    let frutas = ['apple', 'orange']
    let [a, b ] = frutas;
    console.log(a, frutas[1]);

    //objest destructuring 
    let userName = {
        user:'Consolo',
        password:'*************' ,
        age: 15
    }; 

    let {user, age} = userName;
     console.log(userName.user, userName.age );








     //Spread Operator 
     let person = {name:' Bella Salguero', age: 15 };
     let country = 'GU'

     let data = { ...person, country};
     console.log(data);

     //Rest

     function sum(num, ...values) {
        console.log(values);
        console.log(num + values[0]);
        return num + values[0];
     }
    
        sum(1, 6, 23, 3.23, 2.3  );



        function solution (
            json1 = { 
                name:'Mr. Michi', 
                food:'Pescado'
        }, 
            json2 = { 
                age: 12, 
                color: 'Blanco',
            } 
        ){

            return { ...json1, ...json2 };
        }
        
   
            
        

       

           