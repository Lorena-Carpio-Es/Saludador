import saludar from "./sumador.js";

describe("Saludar en español", () => {
  it("debería saludar en español", () => {
    expect(saludar("Juan", "hombre", 25, "es")).toEqual("Hola, Juan señor adulto!");
  });

  // Otras pruebas existentes
});
