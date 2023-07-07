import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

textareas.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

document.getElementById("mensaje").addEventListener("keyup", validarInput);
document.getElementById("asunto").addEventListener("keyup", validarInput);
document.getElementById("nombre").addEventListener("keyup", validarInput);
document.getElementById("email").addEventListener("keyup", validarInput);

function validarInput() {
  if (!document.getElementById("asunto").value.length){
    document.getElementById("btnEnviarMensaje").disabled = true;
    document.getElementById("btnEnviarMensaje").classList.remove("formcontato__botao");
    document.getElementById("btnEnviarMensaje").classList.add("formcontato__botao__disable");
  } else if (!document.getElementById("nombre").value.length){
    document.getElementById("btnEnviarMensaje").disabled = true;
    document.getElementById("btnEnviarMensaje").classList.remove("formcontato__botao");
    document.getElementById("btnEnviarMensaje").classList.add("formcontato__botao__disable");
  } else if (!document.getElementById("email").value.length){
    document.getElementById("btnEnviarMensaje").disabled = true;
    document.getElementById("btnEnviarMensaje").classList.remove("formcontato__botao");
    document.getElementById("btnEnviarMensaje").classList.add("formcontato__botao__disable");
  } else if (!document.getElementById("mensaje").value.length){
    document.getElementById("btnEnviarMensaje").disabled = true;
    document.getElementById("btnEnviarMensaje").classList.remove("formcontato__botao");
    document.getElementById("btnEnviarMensaje").classList.add("formcontato__botao__disable");
  } else {
    document.getElementById("btnEnviarMensaje").disabled = false;
    document.getElementById("btnEnviarMensaje").classList.remove("formcontato__botao__disable");
    document.getElementById("btnEnviarMensaje").classList.add("formcontato__botao");   
  }
} 