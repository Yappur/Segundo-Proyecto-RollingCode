const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

const inputUsuario = document.getElementById("idInputUsuario");
const inputContrasenia = document.getElementById("idInputContrasenia");

const inputCheck = document.getElementById("idCheck");
const botonIniciarSesion = document.getElementById("idBotonIniciarSesion");

const divErrorUsuario = document.getElementById("idErrorInputUsuario");
const divErrorContrasenia = document.getElementById("idErrorInputContrasenia");

divErrorUsuario.classList.add("d-none");
divErrorContrasenia.classList.add("d-none");

const iniciarSesionUsuario = (evento) => {
  evento.preventDefault();
  if (!inputUsuario.value) {
    divErrorUsuario.classList.remove("d-none");
    inputUsuario.classList.add("is-invalid");
  }

  if (!inputContrasenia.value) {
    divErrorContrasenia.classList.remove("d-none");
    inputContrasenia.classList.add("is-invalid");
  }

  const usuarioExiste = usuariosLocalStorage.find(
    (usuario) => usuario.nombreDeUsuario === inputUsuario.value
  );

  if (!usuarioExiste) {
    alert("Usuario o Contraseña INCORRECTO.");
  }

  if (usuarioExiste.contraseniaDeUsuario === inputContrasenia.value) {
    const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
      (usuario) => usuario.id === usuarioExiste.id
    );
    usuariosLocalStorage[posicionDelUsuarioEnElArray].login = true;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    if (usuarioExiste.role === "admin") {
      location.href = "../pages/home-admin.html";
    } else if (usuarioExiste.role === "usuario") {
      location.href = "../pages/home-usuario.html";
    } else {
      alert("rol no existente");
    }
  } else {
    alert("Usuario o Contraseña INCORRECTO.");
  }
};
botonIniciarSesion.addEventListener("click", iniciarSesionUsuario);
