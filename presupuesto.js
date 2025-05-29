const resumenContainer = document.getElementById("resumen-container");

const presupuesto = JSON.parse(localStorage.getItem("cartMaquinas")) || [];

let total = 0;

if (presupuesto.length === 0) {
resumenContainer.innerHTML = "<p>No hay maquinarias agregadas al presupuesto.</p>";
} else {
presupuesto.forEach(maquina => {
    const subtotal = maquina.precioporhoraus * maquina.cantidadhoras;
    total += subtotal;

    const card = document.createElement("div");
    card.innerHTML = `
        <h3>${maquina.nombre}</h3>
        <p>Horas: ${maquina.cantidadhoras}</p>
        <p>Precio por hora: $${maquina.precioporhoraus}</p>
        <p><strong>Subtotal: $${subtotal}</strong></p>
        <hr>`;
    resumenContainer.appendChild(card);
    });

const totalElement = document.createElement("h2");
totalElement.textContent = `Total estimado: ${total}USD $`;
resumenContainer.appendChild(totalElement);
}

document.addEventListener("DOMContentLoaded", () => {
Toastify({
    text: "Por favor, corroborá tu presupuesto.",
    duration: 6000,
    close: true,
    gravity: "top", 
    position: "right", 
    backgroundColor: "#f39c90", 
    stopOnFocus: true
}).showToast();
});