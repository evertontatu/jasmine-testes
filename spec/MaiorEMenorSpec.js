describe("Maior e Menor", function(){

	it("deve entender numeros em ordem nao sequencial", function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,15,7,9]);

		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

	it("Deve entender numeros em ordem crescente", function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([8,7,6,5]);

		expect(algoritmo.pegaMaior()).toEqual(8);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

});
