export class UI {
    mostrarMensaje(mensaje, clases) {
        const container = document.querySelector(".container");
        const alerta = document.querySelector(".bg-red-100");

        if (!alerta) {
            const div = document.createElement("div");
            if (clases === "error") {
                div.classList = "bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto mt-6 text-center";
            }
            div.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
            `;
            container.appendChild(div)

            setTimeout(() => {
                div.remove()
            }, 5000)
        }

    }
}