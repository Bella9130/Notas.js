import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fnfunc(urlAPI) {
    const response = await fetch(urlAPI)
    const data = await response.json()
    return data;
}

const fetchData = async(urlAPI) => {
    try {
        const products = await fnfunc(`${urlAPI}/products`)
        // yield console.log(products);
        
        const product = await fnfunc(`${urlAPI}/products/${products[0].id}`)
        yield console.log(product.title);

        const category = await fnfunc(`${urlAPI}/category/${products.category.id}`)
        yield console.log(category.name);

    }catch(error){
        console.error('Ocurio un error intentalo otra vez');
    }
} 

const it = fetchData(API)
it.next()
it.next()
it.next()