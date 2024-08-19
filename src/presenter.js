import saludar from "./sumador.js";

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim();

  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
