const emailMenu = document.querySelector(".li-2");
const menuDesktop = document.querySelector(".desktop-menu");
const menuMobile  = document.querySelector(".menu-mobile");
const imagen = document.querySelector(".imagen-1");
const logoShowProduct = document.querySelector(".logo");
const asideAproduct = document.querySelector(".conten-aside-2")
const cardsContainer = document.querySelector (".cards-container")
const asideContainerProduct = document.querySelector(".conteiner-aside-2")
const laSalidaX = document.querySelector(".imagen-aside-1")


emailMenu.addEventListener("click", toggleMenu);
imagen.addEventListener("click", toggleMenuMobile);
logoShowProduct.addEventListener("click", toggleAsideMenu);
cardsContainer.addEventListener("click", toggleProductAside);
laSalidaX.addEventListener("click", closeSalida)



function toggleMenu() {
    menuDesktop.classList.toggle("inactive");
    asideAproduct.classList.add("inactive");
    asideContainerProduct.classList.add("inactive");
}

function toggleMenuMobile() {
    menuMobile.classList.toggle("inactive");
    asideAproduct.classList.add("inactive");
    asideContainerProduct.classList.add("inactive")
}

function toggleAsideMenu (){
    asideAproduct.classList.toggle("inactive");
    menuMobile.classList.add("inactive");
    menuDesktop.classList.add("inactive");
    asideContainerProduct.classList.add("inactive");
}

function toggleProductAside() {
    asideContainerProduct.classList.remove("inactive");
    menuDesktop.classList.add("inactive");
    asideAproduct.classList.add("inactive");
    menuMobile.classList.add("inactive")
}

function closeSalida() {
    asideContainerProduct.classList.toggle("inactive");
    menuDesktop.classList.add("inactive");
    asideAproduct.classList.add("inactive");
}


const productList = [];
productList.push({
    name:"book-familia",
    price:"200",
    imagen:"./imagenes/Mi familia y Yo (1).png"
});
productList.push({
    name:"book-nomar",
    price:"200",
    imagen:"./imagenes/Mi familia y Yo (1).png"
});
productList.push({
    name:"book nose",
    price:"200",
    imagen:"./imagenes/Mi familia y Yo (1).png"
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

diferentProducts(productList)