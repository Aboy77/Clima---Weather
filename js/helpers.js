import { API } from "./api.js"
import { UI } from "./UI.js"

const api = new API()
const ui = new UI();

// verifica la disponibilidad de geolocation

export class Map {
    async obtenerClima() {
        navigator.geolocation.getCurrentPosition(posicion => {
            const latitud = posicion.coords.latitude
            const longitud = posicion.coords.longitude

            // Uilizar el Api de Geocoding para tener una ubicacion mediante latitud y longitud
            // Use the Geocoding Api to have a location using latitude and longitude

            const apiKey = "d096cc2b3f974db7b015a402f3356751"
            const url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitud},${longitud}&pretty=1&no_annotations=1`;
            try {
                fetch(url)
                    .then(resultado => resultado.json())
                    .then(data => {
                        // se verifica que no haya error en la implementacion en el api
                        // it is verified that there is no error in the implementation of the api

                        if (data.status.code === 200) {
                            const ciudad = data.results[0].components.city;
                            const pais = data.results[0].components.country;
                            api.mostrarApi(ciudad, pais)
                        } else {
                            ui.mostrarMensaje("Error al obtener el clima de forma automatica", "error")
                        }
                    })
            } catch (error) {
                ui.mostrarMensaje("Error al obtener el clima de forma automatica", "error")
            }
        })

    }
}