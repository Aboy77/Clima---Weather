import { UI } from "./UI.js"

const resultado = document.getElementById("resultado");

// inicia el Api de climas
// start the climates API

export class API {
    constructor() {
        this.apiKey = "9b52b830b50f66b7502064db667db513";
    }
    mostrarApi(ciudad, pais) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${this.apiKey}`
        Spinner()
        fetch(url)
            .then(resultado => resultado.json())
            .then(data => {
                limpiarHTML()
                if (data.cod === "404") {
                    const ui = new UI;
                    ui.mostrarMensaje("Ciudad no encontrar", "error")
                }

                this.mostrarClima(data)
            })
    }

    // se forma el HTML segun los datos obtenidos del Api
    // The HTML is formed according to the data obtained from the Api

    mostrarClima(data) {
        const { name, main: { temp, temp_max, temp_min } } = data;

        const centigrados = kelvinACentigrados(temp);
        const max = kelvinACentigrados(temp_max);
        const min = kelvinACentigrados(temp_min);

        const actual = document.createElement("p");
        actual.innerHTML = `${centigrados} &#8451;`
        actual.classList.add("font-bold", "text-6xl");

        const temperaturaMax = document.createElement("p");
        temperaturaMax.innerHTML = `Max: ${max} &#8451;`
        temperaturaMax.classList.add("text-xl")

        const temperaturaMin = document.createElement("p");
        temperaturaMin.innerHTML = `Min: ${min} &#8451;`
        temperaturaMin.classList.add("text-xl")

        const ubicacion = document.createElement("p");
        ubicacion.textContent = name;
        ubicacion.classList.add("font-bold", "text2xl");

        const resultadoDiv = document.createElement("div");
        resultadoDiv.classList.add("text-center", "text-white")
        resultadoDiv.appendChild(ubicacion)
        resultadoDiv.appendChild(actual)
        resultadoDiv.appendChild(temperaturaMax)
        resultadoDiv.appendChild(temperaturaMin)

        resultado.appendChild(resultadoDiv)
    }
}

// limpia resultados anteriores
// delete before results

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

// transforma los grados kelvin a grados celcios
// transform from kelvin grades to centigrade grade

const kelvinACentigrados = (grados) => parseInt(grados - 273.15)

// inicia el spinner de carga
// start spinner load

function Spinner() {
    limpiarHTML()

    const div = document.createElement("div");
    div.classList = "sk-fading-circle";
    div.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
    `;
    resultado.appendChild(div);
}