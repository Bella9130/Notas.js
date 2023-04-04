/*La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al 
iniciar la aplicación. Esto permite que la página web sea más rápida, porque descarga menos recursos. */
const buton = document.querySelector('#boton');

buton.addEventListener('click', async function() {
    const module = await import('./module.mjs ')
    console.log(module);
    module.aviso();
})
//carga pequeños pedasos de codig
//esto se puede realizar por medio se async y await
//dynamic import. Es usar el async, await para llamar el modulo unicamente cuando sea requerido.