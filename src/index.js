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
    imagen:"./imagenes/Mi familia y Yo (1).png"
});
productList.push({
    name:"book-nomar",
    price:"200",
    imagen:'https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/329157751_3297921150524200_5942539807855017470_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Xr9yzhZGdREAX-eB1M8&_nc_ht=scontent.fgua3-3.fna&oh=00_AfC8qSit5k1goiYv65IYZoHPTatA0roUht0BaC0GGM-U9Q&oe=63F78289'
});
productList.push({
    name:"book nose",
    price:"200",
    imagen:"https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/325334296_664836478770159_6939989713696567138_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=wQ6wN89sfeEAX_dy97_&_nc_ht=scontent.fgua3-3.fna&oh=00_AfBMTgX0zgF3x2xgG_KcnBci1SNQzmIxlA7phwUKKQecqA&oe=63F71882"
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

