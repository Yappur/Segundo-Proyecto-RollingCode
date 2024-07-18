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
  <div d-flex>
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

const botonFavoritos = document.querySelector("#idBotonFavoritos");
const botonCarrito = document.querySelector("#idBotonCarrito");

const agregarProductoAFavoritos = () => {
  const producto = productos.find((prod) => prod.id === idProducto);
  const usuarioSesionStorage =
    JSON.parse(sessionStorage.getItem("usuario")) || "";
  const usuariosLocalStorage =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  if (!usuarioSesionStorage) {
    alert("Debes iniciar sesión.");
    setTimeout(() => {
      location.href = "../pages/iniciar-sesion.html";
    }, 1000);
    return;
  }

  if (usuarioSesionStorage.favoritos.length) {
    const productoFiltrado = usuarioSesionStorage.favoritos.find(
      (prod) => prod.id === producto.id
    );
    if (productoFiltrado) {
      return alert("Producto ya existe en favoritos");
    }
  }

  usuarioSesionStorage.favoritos.push(producto);

  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === usuarioSesionStorage.id
  );

  usuariosLocalStorage[posicionDelUsuarioEnElArray] = usuarioSesionStorage;

  localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
  sessionStorage.setItem("usuario", JSON.stringify(usuarioSesionStorage));
  alert("Producto cargado en favoritos");
};

const agregarProductoACarrito = () => {
  const producto = productos.find((prod) => prod.id === idProducto);
  const usuarioSesionStorage =
    JSON.parse(sessionStorage.getItem("usuario")) || "";
  const usuariosLocalStorage =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  if (!usuarioSesionStorage) {
    alert("Debes iniciar sesión.");
    setTimeout(() => {
      location.href = "../pages/iniciar-sesion.html";
    }, 1000);
    return;
  }

  if (usuarioSesionStorage.carrito.length) {
    const productoFiltrado = usuarioSesionStorage.carrito.find(
      (prod) => prod.id === producto.id
    );
    if (productoFiltrado) {
      return alert("Producto ya existe en el carrito");
    }
  }

  usuarioSesionStorage.carrito.push(producto);

  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === usuarioSesionStorage.id
  );

  usuariosLocalStorage[posicionDelUsuarioEnElArray] = usuarioSesionStorage;

  localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
  sessionStorage.setItem("usuario", JSON.stringify(usuarioSesionStorage));
  alert("Producto cargado en el carrito");
};

// Asignar el evento click a los botones
botonFavoritos.addEventListener("click", agregarProductoAFavoritos);
botonCarrito.addEventListener("click", agregarProductoACarrito);
