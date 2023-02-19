const input0 = document.querySelector("#input-body-0");
const input1 = document.querySelector("#input-body-1");
const btn = document.querySelector("#btn-de_calculo");
const pResultado = document.querySelector("#resultado");
const formInput = document.querySelector("#form-input");

formInput.addEventListener("submit", SumarInputs)

function SumarInputs(event) {
    console.log({event});
    event.preventDefault();
     const sumaDeInput = console.log(Number(input0.value) + parseInt(input1.value));
    pResultado.innerText =  "Resultado: " + sumaDeInput;
};

