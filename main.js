const maquinarias=[
    {
        id: 1,
        nombre: "Retroexcavadora",
        precioporhoraus: 5000,
        cantidadhoras:0,
    },
    {
        id: 2,
        nombre: "Palacargadora",
        precioporhoraus: 2000,
        cantidadhoras:0,    
    },
    {
        id: 3,
        nombre: "Topadora",
        precioporhoraus: 8000,
        cantidadhoras:0,    
    },
    {
        id: 4,
        nombre:"Retroexcavadora",
        precioporhoraus: 2500,
        cantidadhoras:0,
    },
    {
        id: 5,
        nombre: "Rodillo",
        precioporhoraus: 6000,
        cantidadhoras:0,
    },
    {
        id: 6,
        nombre: "Camion",
        precioporhoraus: 1500,
        cantidadhoras:0,
    }
];


let cartMaquinas = [];
let maquinasContainer = document.getElementById("maquinaria-container");

function renderMaquinas(maquinasArray) {
maquinasContainer.innerHTML = "";
maquinasArray.forEach(maquina => {
    const card = document.createElement("div");
    card.innerHTML = `
        <h3>${maquina.nombre}</h3>
        <p>Precio por hora: $${maquina.precioporhoraus}</p>
        <input type="number" min="0" placeholder="Horas" id="horas-${maquina.id}">
        <button class="maquinaAgregar" id="${maquina.id}">Agregar</button>`;
    maquinasContainer.appendChild(card);
});
addToCartButton();
}

renderMaquinas(maquinarias);

function addToCartButton() {
    const addButton = document.querySelectorAll(".maquinaAgregar");
    addButton.forEach(button => {
    button.onclick = (e) => {
        const maquinaId = e.currentTarget.id;
        const selectedMaquina = maquinarias.find(m => m.id == maquinaId);
        const inputHoras = document.getElementById(`horas-${maquinaId}`);
        const horas = Number(inputHoras.value);

    if (horas > 0) {
        const maquinaParaCarrito = { ...selectedMaquina, cantidadhoras: horas };
        cartMaquinas.push(maquinaParaCarrito);
        localStorage.setItem("cartMaquinas", JSON.stringify(cartMaquinas));


        inputHoras.disabled = true;
        e.currentTarget.disabled = true;
        e.currentTarget.textContent = "Agregado";

    } else {
        alert("Por favor, ingresá una cantidad válida de horas.");
    }
    };
});
}