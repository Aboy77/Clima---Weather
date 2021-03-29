// verifica la disponibilidad de geolocation

export class Map {
    constructor() {
        this.apiKey = "fff4cd3fff368c0698b6fd1a23882bd5"
    }
    obtenerClima() {
        navigator.geolocation.getCurrentPosition(posicion => {
            const latitud = posicion.coords.latitude
            const longitud = posicion.coords.longitude
            console.log(latitud)
        })

    }
}