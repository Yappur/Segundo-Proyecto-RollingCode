const divCards = document.getElementById("idDivCards");

const productos = [
  {
    id: 1,
    nombre: "Guitarra Eléctrica Fender Stratocaster",
    precio: 1200,
    descripcion:
      "Una de las guitarras eléctricas más icónicas, conocida por su versatilidad y sonido claro.",
    imagen: "./imagenes/1.png",
  },
  {
    id: 2,
    nombre: "Amplificador Marshall DSL40CR",
    precio: 750,
    descripcion:
      "Amplificador de guitarra con 40 watts de potencia, ideal para conciertos y ensayos.",
    imagen: "./imagenes/2.png",
  },
  {
    id: 3,
    nombre: "Micrófono Shure SM58",
    precio: 100,
    descripcion:
      "Micrófono dinámico vocal con patrón cardioide, perfecto para presentaciones en vivo.",
    imagen: "./imagenes/Diseño sin título.png",
  },
  {
    id: 4,
    nombre: "Batería Electrónica Roland TD-1KV",
    precio: 600,
    descripcion:
      "Batería electrónica compacta con pads de malla y sonidos realistas.",
    imagen: "https://example.com/images/roland-td-1kv.jpg",
  },
  {
    id: 5,
    nombre: "Teclado Yamaha PSR-E373",
    precio: 200,
    descripcion:
      "Teclado portátil con 61 teclas sensibles al tacto y una gran variedad de sonidos.",
    imagen: "https://example.com/images/yamaha-psr-e373.jpg",
  },
  {
    id: 6,
    nombre: "Guitarra Acústica Taylor 214ce",
    precio: 1400,
    descripcion:
      "Guitarra acústica con cuerpo de madera de koa y una gran proyección de sonido.",
    imagen: "https://example.com/images/taylor-214ce.jpg",
  },
  {
    id: 7,
    nombre: "Bajo Eléctrico Fender Precision Bass",
    precio: 800,
    descripcion:
      "Bajo eléctrico de 4 cuerdas con un tono profundo y potente, ideal para rock y jazz.",
    imagen: "https://example.com/images/fender-precision-bass.jpg",
  },
  {
    id: 8,
    nombre: "Pedal de Efectos Boss DS-1 Distortion",
    precio: 50,
    descripcion:
      "Pedal de distorsión clásico, utilizado por guitarristas de todos los géneros.",
    imagen: "https://example.com/images/boss-ds-1.jpg",
  },
  {
    id: 9,
    nombre: "Saxofón Alto Yamaha YAS-280",
    precio: 1000,
    descripcion:
      "Saxofón alto con una excelente entonación y un sonido cálido, perfecto para estudiantes avanzados.",
    imagen: "https://example.com/images/yamaha-yas-280.jpg",
  },
  {
    id: 10,
    nombre: "Guitarra Clásica Alhambra 4P",
    precio: 500,
    descripcion:
      "Guitarra clásica hecha a mano con madera de cedro y palosanto, ideal para música clásica y flamenco.",
    imagen: "https://example.com/images/alhambra-4p.jpg",
  },
];

divCards.innerHTML = productos
  .map(
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
                      <a href="./pages/detallesProductos.html" class="btn btn-primary">Ver Mas</a>
                    </div>
                  </div>
                </div>`
  )
  .join("");
