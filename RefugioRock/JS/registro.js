const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

const inputUsuario = document.getElementById("idInputUsuario");
const inputEmail = document.getElementById("idInputEmail");
const inputContrasenia = document.getElementById("idInputContrasenia");
const inputRepetirContrasenia = document.getElementById(
  "idInputRepetirContrasenia"
);
const inputCheck = document.getElementById("idCheck");
const botonRegistro = document.getElementById("idBotonRegistro");

const divErrorUsuario = document.getElementById("idErrorInputUsuario");
const divErrorEmail = document.getElementById("idErrorInputEmail");
const divErrorContrasenia = document.getElementById("idErrorInputContrasenia");
const divErrorRepetirContrasenia = document.getElementById(
  "idErrorInputRepetirContrasenia"
);
const divErrorCheck = document.getElementById("idErrorInputCheck");

divErrorUsuario.classList.add("d-none");
divErrorEmail.classList.add("d-none");
divErrorContrasenia.classList.add("d-none");
divErrorRepetirContrasenia.classList.add("d-none");
divErrorCheck.classList.add("d-none");

const registrarUsuario = (evento) => {
  evento.preventDefault();
  if (!inputUsuario.value) {
    divErrorUsuario.classList.remove("d-none");
    inputUsuario.classList.add("is-invalid");
  }

  if (!inputEmail.value) {
    divErrorEmail.classList.remove("d-none");
    inputEmail.classList.add("is-invalid");
  }

  if (!inputContrasenia.value) {
    divErrorContrasenia.classList.remove("d-none");
    inputContrasenia.classList.add("is-invalid");
  }

  if (!inputRepetirContrasenia.value) {
    divErrorRepetirContrasenia.classList.remove("d-none");
    inputRepetirContrasenia.classList.add("is-invalid");
  }

  if (!inputCheck.checked) {
    divErrorCheck.classList.remove("d-none");
  }

  if (
    inputUsuario.value &&
    inputEmail.value &&
    inputContrasenia.value &&
    inputRepetirContrasenia.value &&
    inputCheck.checked
  ) {
    const usuarioExiste = usuariosLocalStorage.find(
      (usuario) => usuario.nombreDeUsuario === inputUsuario.value
    );

    if (usuarioExiste) {
      return alert("Usuario no disponible");
    }

    const emailExiste = usuariosLocalStorage.find(
      (usuario) => usuario.emailDelUsuario === inputEmail.value
    );

    if (emailExiste) {
      return alert("Email no disponible");
    }

    if (inputContrasenia.value === inputRepetirContrasenia.value) {
      const nuevoUsuario = {
        id: usuariosLocalStorage[usuariosLocalStorage.length - 1]?.id + 1 || 1,
        nombreDeUsuario: inputUsuario.value,
        emailDelUsuario: inputEmail.value,
        contraseniaDeUsuario: inputContrasenia.value,
        login: false,
        role: "admin",
        bloqueado: false,
        carrito: [],
        favoritos: [],
      };

      usuariosLocalStorage.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
      alert("Registrado con exito");
    } else {
      alert("Las contraseñas no son iguales");
    }
  }
};

botonRegistro.addEventListener("click", registrarUsuario);
