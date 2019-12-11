"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var c1; //Aqui apenas declarei uma "referencia" a um carro , preciso criar o objeto
var c2;
c1 = new carro_1.Carro("abssd", "preto", "fuscao", 1986); //Agora sim, aloquei (reservei) memória para armazenar as coisas
c2 = new carro_1.Carro("rtyui", "preto", "asdfg", 2019);
//Vamos preencher os dados
/*c1.setAno(1986);
c1.setModelo("fuscao");
c1.setPlaca("abssd");
c1.setCor("preto");

c2.setAno(2019);
c2.setModelo("asdfg");
c2.setPlaca("rtyui");
c2.setCor("preto");*/
//Vamos manipular o carro com suas operações
console.log("");
console.log("Inicio da execucao...");
console.log("");
console.log(c1.pegaInfo());
console.log(c2.pegaInfo());
console.log("");
c1.andar();
c1.parar();
console.log("");
c2.ligar();
c2.andar();
c2.parar();
c2.desligar();
console.log("");
console.log(c1.pegaInfo());
console.log(c2.pegaInfo());
console.log("");
console.log("Fim da execucao...");
