describe("Consulta", function(){

    var everton;
    beforeEach(function(){
        everton = new PacienteBuilder().constroi();
    });

    describe("consultas do tipo retorno",function(){
        it("nao deve cobrar nada se for um retorno", function(){
            var consulta = new Consulta(everton,[], true, true);

            expect(consulta.preco()).toEqual(0);
        });
    });


    describe("consultas com procedimento",function(){
        it("deve cobrar 25 por cada procedimento comum", function(){
            var consulta = new Consulta(everton, ["proc1", "proc2", "proc3"], false, false);

            expect(consulta.preco()).toEqual(75);
        });

        it("deve cobrar preco especifico dependendo do procedimento", function(){
            var consulta = new Consulta(everton, ["proc1", "raio-x", "proc2", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });


        it("deve calcular o imc", function(){
            expect(everton.imc()).toEqual(72/(1.80*1.80));
        });

        it("deve calcular os batimentos", function(){
            expect(everton.batimentos()).toEqual(28 * 365 * 24 * 60 * 80);
        });
    });

});
