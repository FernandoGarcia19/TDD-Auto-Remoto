import { leer_comando } from "./auto";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const output = leer_comando(comando.value);
  div.innerHTML = "<p>" + output + "</p>";
});
