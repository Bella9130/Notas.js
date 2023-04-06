/*Queremos que es traer todos los prductos llmar a un producto y luego llamar a la categoria y mostrar la info al finalizar las solicitudes que se estan haciendo al servidor que se encarga de mostrar  */
/*se llama a la Api que vaya a la peticion de product al llamarlo ya tenemos la lista completa  */
ExplicfetchData(`${ExAPI}/products`, function (error1, data1){
    if(error1) return console.error(error1);
    //Si detecta un error que de esto para detener logica

//va a volver a llamar a fetchdata con otro objetivo de poner otra logica consecuente de obener info osea que si la info es correcta y tengo datos ahora dispongo de la info de data1 por lo cual yo puedo pasarla a frchtdata y volvinedola a llamar y pasar otro callback con el valor de error asi como los datos de error o consecuentes(consecuencias)
    ExplicfetchData(`${ExAPI}/products/${data1[0].id}`, function(error2, data2) /*Para validar error2 */ {
        //data1 es el objeto que esta entregando
    /*Se pone la API de products y data de datos especificos pero lo que quiero que en el primer elelmento y que pase su id con esto se hace una 2peticion pero al primer elemto del array que trajo la primer peticion   */
        if(error2) return console.error(error2);
        /*Se anida otro llamado de fetchdata esperando a obtener info de data2 y poderla utilizar */
            ExplicfetchData(`${ExAPI}/categories/${data2?.category?.id}`, function(error3, data3){ //?OptionalChaining si lo encuentra algo parecido bien especifi en ES6
                 //vamos a entrar a categories y luego que en data busque categories . i
                 if(error3) return console.error(error3);
                 console.log(data1[0]);
                 console.log(data2.title);
                 console.log(data3.name);
            })
    });
});