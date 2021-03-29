// verifica la disponibilidad de geolocation

export function obtenerClima() {
    navigator.geolocation.getCurrentPosition(posicion => {
        const latitud = posicion.coords.latitude
        const longitud = posicion.coords.longitude

    })

}