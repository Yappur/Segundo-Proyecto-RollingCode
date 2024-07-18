const params = new URLSearchParams(location.search);
const idProducto = Number(params.get("id"));
const productos = JSON.parse(localStorage.getItem("productos")) || [];

const divDetalleProducto = document.getElementById("idDetalleProducto");
const productosLocalStorage =
  JSON.parse(localStorage.getItem("productos")) || [];

const productoFiltrado = productosLocalStorage.find(
  (producto) => producto.id === idProducto
);

divDetalleProducto.innerHTML = `
  <div>
    <div class='w-25 justify-content-end'>
      <img src="${productoFiltrado.imagen}" alt="" class='w-100'/>
    </div>
    <p>$${productoFiltrado.precio}</p>
    <p>${productoFiltrado.descripcion}</p>
  </div>
  <div>
    <button class="btn btn-warning" id='idBotonFavoritos'>Añadir a Favoritos</button>
    <button class="btn btn-success" id='idBotonCarrito'>Añadir al Carrito</button>
  </div>
`;
