import { DB } from "./db.js";

function TraerDatos(Datos) {
    let Contenedor = document.querySelector(".contenedor")
    Contenedor.innerHTML = ""
    Datos.forEach(i => {
        let nuevoDiv = document.createElement("div")
        nuevoDiv.className = "Tarjetas"
        nuevoDiv.innerHTML =
            `
            <h1>${i.Nombre}</h1>
            <h2>$${i.Precio}</h2>
            <h3>${i.Stock}</h3>
            <!--${i.Stock <= 3 ? '<p style="color:red">Stock Bajo</p>' : '<p style="color: blue">Stock Alto</p>'}-->
            <p>${i.Descipción}</p>
            <img src="${i.Imagen}" alt="Producto">
            <button onclick="agregarFavoritos()" class="btnfav">❤️</button>
        `
        Contenedor.appendChild(nuevoDiv)
    });
}

TraerDatos(DB)
/*
function Filtrado(Dato) {
    const filtro = Dato.filter(i.Nombre.toLowerCase().includes(text.value.trim().toLowerCase()))
    TraerDatos(filtro)
}*/


let text = document.getElementById("filtro")
let Contenedor = document.querySelector(".contenedor")
let buscar = document.querySelector("#Buscar")


text.addEventListener('keyup', function () {

    let filtrar = DB.filter(i => i.Nombre.toLowerCase().includes(text.value.toLowerCase()))
    if (filtrar.length > 0) {
        TraerDatos(filtrar)
    } else {
        Contenedor.innerHTML = "<p style='color: red;font-size: 35px;'>Error, no hay productos...</p>"
    }
})

/*
function Favoritos(parametros) {
    let Fav = document.querySelector(".Favorito")

    text.addEventListener('click', function (e) {
        e.preventDefault()
        let filtrar = DB.filter(i => i.Nombre.toLowerCase().includes(text.value.toLowerCase()))
        

    })
}*/

let contador = 0;

window.agregarFavoritos = function() {
    contador++;
    document.getElementById("fav").innerText=contador;

}