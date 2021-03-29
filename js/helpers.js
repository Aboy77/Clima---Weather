// verifica la disponibilidad de geolocation

if ("geolocation" in navigator) {
    obtenerClima()
} else {
    throw "Clima automatico no disponible"
}

export function obtenerClima() {
    navigator.geolocation.getCurrentPosition(posicion => {
        const latitud = posicion.coords.latitude
        const longitud = posicion.coords.longitude

        $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitud + "," + longitud + "&sensor=false", function(data) {
            console.log(data);
        })
    })

}