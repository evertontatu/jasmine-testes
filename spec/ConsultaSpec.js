describe("Consulta", function(){

    it("nao deve cobrar nada se for um retorno", function(){
        var everton = new Paciente("Everton", 28, 72, 1.80);
        var consulta = new Consulta(everton,[], true, true);

        expect(consulta.preco()).toEqual(0);
    });

    it("deve cobrar 25 por cada procedimento comum", function(){
        var everton = new Paciente("Everton", 28, 72, 1.80);
        var consulta = new Consulta(everton, ["proc1", "proc2", "proc3"], false, false);

        expect(consulta.preco()).toEqual(75);
    });

    it("deve cobrar preco especifico dependendo do procedimento", function(){
        var everton = new Paciente("Everton", 28, 72, 1.80);
        var consulta = new Consulta(everton, ["proc1", "raio-x", "proc2", "gesso"], false, false);

        expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });

    it("deve calcular o imc", function(){
        var everton = new Paciente("Everton", 28, 72, 1.80);

        expect(everton.imc()).toEqual(72/(1.80*1.80));
    });
});
