export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
    
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.classList.add("input-container--valid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    customError: "El nombre no debe superar los 50 caracteres",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "El asunto no puede estar vacío",
    customError: "El asunto no debe superar los 50 caracteres",
  },
  mensaje: {
    valueMissing: "El mensaje no puede estar vacío",
    customError: "El mensaje no debe superar los 300 caracteres",
  },
};

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
  nombre: (input) => validarNombre(input),
  asunto: (input) => validarAsunto(input),
  mensaje: (input) => validarMensaje(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      /*console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);*/
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
  }
  input.setCustomValidity(mensaje);
}

function validarAsunto(input) {
  const consMensaje = new String(input.value);
 
  let mensaje = "";
  if (consMensaje.length > 50) {
    mensaje = "El asunto no debe superar los 50 caracteres";
  }
  input.setCustomValidity(mensaje);
}

function validarNombre(input) {
  const consMensaje = new String(input.value);
  
  let mensaje = "";
  if (consMensaje.length > 50) {
    mensaje = "El Nombre no debe superar los 50 caracteres";
  }
  input.setCustomValidity(mensaje);
}

function validarMensaje(input) {
  const consMensaje = new String(input.value);
  let mensaje = "";
  if (consMensaje.length > 300) {
    mensaje = "El mensaje no debe superar los 300 caracteres";
  }
  input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}


   