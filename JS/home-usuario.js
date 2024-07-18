// const divMensajeBienvenida = document.getElementById("bienvenidaUsuario");
// const usuarioSessionStorage =
//   JSON.parse(sessionStorage.getItem("usuario")) || "";

// setTimout(() => {
//   divMensajeBienvenida.innerHTML = `<h3>Bienvenido ${usuarioSessionStorage.nombreDeUsuario}</h3>`;
// }, 1000);

const productosLocalStorage =
  JSON.parse(localStorage.getItem("productos")) || [];
const divCards = document.getElementById("idDivcards");

divCards.innerHTML = productosLocalStorage.map(
  (producto) => `
  <div class="col-12 col-md-6 col-lg-4">
                  <div class="card colorCard">
                    <img
                      src="${producto.imagen}"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body ">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">
                        $${producto.precio}
                      </p><p class="card-text">
                        ${producto.descripcion}
                      </p>
                      <a href="./pages/detallesProductos.html?id=${producto.id}" class="btn btn-primary">Ver Mas</a>
                    </div>
                  </div>
                </div>
`
);
