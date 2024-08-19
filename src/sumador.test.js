import saludar from "./sumador.js";

describe("Saludar en varios idiomas", () => {
  it("debería saludar en español", () => {
    expect(saludar("Juan", "hombre", 25, "es")).toEqual("Hola, Juan señor adulto!");
  });

  it("debería saludar en inglés", () => {
    expect(saludar("John", "hombre", 25, "en")).toEqual("Hello, John Mr. adult!");
  });

  // Otras pruebas existentes
});
