import { leer_comando, leer_dimension, leer_pos_inicial, leer_instrucciones} from "./auto.js";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dimension = leer_dimension(comando.value);
  const pos_inicial = leer_pos_inicial(comando.value)
  const instrucciones = leer_instrucciones(comando.value)
  if(leer_comando(comando.value)){
    div.innerHTML = 
    "<p>Dimension: " + dimension + "</p>" +
    "<p>Posicion Inicial: " + pos_inicial + "</p>" +
    "<p>Instrucciones: " + instrucciones + "</p>";
  }
  else{
    div.innerHTML = "<p>Comando inválido<p>"
  }
});
