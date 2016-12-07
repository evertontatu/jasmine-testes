describe("Paciente", function(){
    it("deve calcular o imc", function(){

        var everton = new Paciente("Everton", 28, 72, 1.82);

        var imc = everton.imc();
        expect(imc).toEqual(72 / (1.82 * 1.82));

    });
});
