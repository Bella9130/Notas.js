const emailMenu = document.querySelector(".li-2");
const menuDesktop = document.querySelector(".desktop-menu");
const menuMobile  = document.querySelector(".menu-mobile");
const imagen = document.querySelector(".imagen-1");
const logoShowProduct = document.querySelector(".logo");
const asideAproduct = document.querySelector(".conten-aside-2");
const cardsContainer = document.querySelector (".cards-container");
const asideContainerProduct = document.querySelector(".conteiner-aside-2");
const laSalidaX = document.querySelector(".imagen-aside-1");
const productAddCar = document.querySelector('.img-car')


emailMenu.addEventListener("click", toggleMenu);
imagen.addEventListener("click", toggleMenuMobile);
logoShowProduct.addEventListener("click", toggleAsideMenu);
cardsContainer.addEventListener("click", toggleProductAside);
laSalidaX.addEventListener("click", closeSalida)
productAddCar.addEventListener('click', addProduct)


// DesktopMenu
function toggleMenu() {
    menuDesktop.classList.toggle("inactive");
    asideAproduct.classList.add("inactive");
    asideContainerProduct.classList.add("inactive");
}

// menuMobile
function toggleMenuMobile() {
    menuMobile.classList.toggle("inactive");
    asideAproduct.classList.add("inactive");
    asideContainerProduct.classList.add("inactive")
}

// aside menu
function toggleAsideMenu (){
    asideAproduct.classList.toggle("inactive");
    menuMobile.classList.add("inactive");
    menuDesktop.classList.add("inactive");
    asideContainerProduct.classList.add("inactive");
}

//info Products
function toggleProductAside() {
    asideContainerProduct.classList.remove("inactive");
    menuDesktop.classList.add("inactive");
    asideAproduct.classList.add("inactive");
    menuMobile.classList.add("inactive")
}

// close menu
function closeSalida() {
    asideContainerProduct.classList.toggle("inactive");
    menuDesktop.classList.add("inactive");
    asideAproduct.classList.add("inactive");
}

//buycar
function openMenuAside() {
    asideAproduct.classList.toggle("inactive");
}

//carAdd
function addProduct() {
    addProduct.classList.add('background-styles');
}


const productList = [];
productList.push({
    name:"book-familia",
    price:"200",
    imagen:"https://sbuhn.org/wp-content/uploads/2020/07/33-2.jpg"
});
productList.push({
    name:"book-nomar",
    price:"200",
    imagen: 'https://d3j0t7vrtr92dk.cloudfront.net/hccp/1423061224_1403215762_holy_bible_text_11021.png'
});
productList.push({
    name:"book nose",
    price:"200",
    imagen:'https://tubiblia.com.co/wp-content/uploads/2019/03/41uPJHV860L-300x466.jpg'
});

function diferentProducts(arr) {

    for (product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
     
        const imgMini = document.createElement("img");
        imgMini.setAttribute("src",  product.imagen);
     
        
        const productinfo = document.createElement("div");
        productinfo.classList.add("product-info");

        const productSinNom = document.createElement("div")

        
        const productPrice = document.createElement("p");
        productPrice.innerText =  "Q" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
     
        productSinNom.appendChild(productPrice);
        productSinNom.appendChild(productName);
     
        const ProductFigureMain = document.createElement("Figure");
        const imgLittle = document.createElement("img");
        imgLittle.setAttribute("src", "https://img.icons8.com/carbon-copy/512/add-shopping-cart.png");
     
        ProductFigureMain.appendChild(imgLittle);
     
        productinfo.appendChild(productSinNom);
        productinfo.appendChild(ProductFigureMain);
     
        productCard.appendChild(imgMini);
        productCard.appendChild(productinfo);
     
        cardsContainer.appendChild(productCard);
     
     }
}

diferentProducts(productList);


/* <div class="container-back">
<div class="div-container-close">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png" alt="" class="imagen-aside-1">
    <img src="imagenes/Mi familia y Yo (1).png" alt="">
</div>
<div class="main-container-aside">
    <p>20$</p>
    <p>Book</p>
    <p>producto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque quia fugiat, quidem magni autem. Ea ipsum mollitia vel, possimus pariatur numquam. Cumque aliquam repellendus tenetur tempore excepturi porro molestias!</p>

    <button class="boton-aside-1 boton-aside-1-s2">
        <img src="imagenes/creative-light-bulb-ideas-icon.jpg" alt="" class="imagen-aside-2">
        <a href="/E-MAIL.html" class="a-1">add to cart</a>
    </button>
</div>
</div> */

const differetnProductAside = [];
differetnProductAside.push ({
    nameDetailProduct:'Book-familia', 
    price:'200',
    imagen:'https://sbuhn.org/wp-content/uploads/2020/07/33-2.jpg',
    description:'producto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque quia fugiat, quidem magni autem. Ea ipsum mollitia vel, possimus pariatur numquam. Cumque aliquam repellendus tenetur tempore excepturi porro molestias!' 

});
differetnProductAside.push ({
    nameDetailProduct:'Book-familia', 
    price:'200',
    imagen:'https://d3j0t7vrtr92dk.cloudfront.net/hccp/1423061224_1403215762_holy_bible_text_11021.png',
    description: 'producto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque quia fugiat, quidem magni autem. Ea ipsum mollitia vel, possimus pariatur numquam. Cumque aliquam repellendus tenetur tempore excepturi porro molestias!'
});
differetnProductAside.push({
    nameDetailProduct:'book nose',
    price:'200',
    imagen: 'https://tubiblia.com.co/wp-content/uploads/2019/03/41uPJHV860L-300x466.jpg',
    description: 'producto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque quia fugiat, quidem magni autem. Ea ipsum mollitia vel, possimus pariatur numquam. Cumque aliquam repellendus tenetur tempore excepturi porro molestias!'
}) 

function detailProductsAsideShow (arr) {
    for(Aside of Asides) {
        
    }
}
 