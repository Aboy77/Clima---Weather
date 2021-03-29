import { API } from "./api.js"
import { UI } from "./UI.js"
import { obtenerClima } from "./helpers.js"

const ciudad = document.getElementById("ciudad");
const pais = document.getElementById("pais");
const formulario = document.getElementById("formulario");
const spinner = document.getElementById("spinner");

window.addEventListener("load", () => {
    formulario.addEventListener("submit", enviarFormulario)
})

function enviarFormulario(e) {
    e.preventDefault();
    const ui = new UI;
    if (ciudad.value === "" || pais.value === "") {
        ui.mostrarMensaje("Debes llenar el formulario", "error")
    } else {
        const api = new API()
        api.mostrarApi(ciudad.value, pais.value);
    }
}

if ("geolocation" in navigator) {

} else {
    console.log("no disponible")
}