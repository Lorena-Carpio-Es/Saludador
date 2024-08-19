import saludar from "./saludador.js";

describe("Saludar", () => {
  it("debería saludar con 'Hola!'", () => {
    expect(saludar()).toEqual("Hola!");
  });

  it("debería saludar por nombre", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan!");
  });
});
