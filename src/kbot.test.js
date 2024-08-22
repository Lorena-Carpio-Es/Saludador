describe("Saludador", () => {
    it("Saludar a Andres en idioma español por la mañana", () => {
        let kbot = new Kbot();
        let saludo = kbot.saludar("Andres", 8);
        expect(saludo).toEqual("Buenos dias Andres");
    });

    it ("Saludar a Andres en idioma español por la tarde", () => {
        let kbot = new Kbot ();
        let saludo = kbot.saludar("Andres",14);
        expect (saludo).toEqual("Buenas tardes Andres");
    })

    it ("Saludar a Andres en idioma español por la noche", () => {
        let kbot = new Kbot ();
        let saludo = kbot.saludar("Andres",14);
        expect (saludo).toEqual("Buenas noches Andres");
    })

});


