function saludar(nombre, genero, edad, idioma = "es") {
  let saludo = "";

  if (idioma === "es") {
    saludo = "Hola";
  } else if (idioma === "en") {
    saludo = "Hello";
  }

  if (nombre) {
    saludo += idioma === "es" ? `, ${nombre}` : `, ${nombre}`;
  }

  if (genero) {
    if (genero === "hombre") {
      saludo += idioma === "es" ? " señor" : " Mr.";
    } else if (genero === "mujer") {
      saludo += idioma === "es" ? " señora" : " Ms.";
    } else {
      saludo += "";
    }
  }

  if (edad) {
    if (edad < 18) {
      saludo += idioma === "es" ? " joven!" : " young one!";
    } else if (edad >= 18 && edad < 65) {
      saludo += idioma === "es" ? " adulto!" : " adult!";
    } else {
      saludo += idioma === "es" ? " mayor!" : " elder!";
    }
  } else {
    saludo += idioma === "es" ? "!" : "!";
  }

  return saludo;
}

export default saludar;
