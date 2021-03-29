import { API } from "./api.js"
import { UI } from "./UI.js"
import { Map } from "./helpers.js"

const ciudad = document.getElementById("ciudad");
const pais = document.getElementById("pais");
const formulario = document.getElementById("formulario");
const spinner = document.getElementById("spinner");
const clima = document.getElementById("clima");

window.addEventListener("load", () => {
    formulario.addEventListener("submit", enviarFormulario)

    // verificar la disponobilidad del geolocation en el navegador

    if ("geolocation" in navigator) {
        clima.addEventListener("click", climaAutomatico)
    } else {
        throw "Clima automatico no disponible"
    }
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

function climaAutomatico() {
    const map = new Map()
    map.obtenerClima()
}