"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro(_placa, _cor, _modelo, _ano) {
        this.placa = _placa;
        this.cor = _cor;
        this.modelo = _modelo;
        this.ano = _ano;
        this.ligado = false;
    }
    //para pegar informações sobre a placa do carro
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    //para dar um valor para a placa do carro
    Carro.prototype.setPlaca = function (_placa) {
        if (_placa.length < 7) {
            console.log("Placa invalida");
        }
        this.placa = _placa;
    };
    //para pegar informações sobre a cor do carro
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    //para dar uam cor para o carro
    Carro.prototype.setCor = function (_cor) {
        this.cor = _cor;
    };
    //para pegar informações sobre modelo do carro
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    //para dar um modelo para o carro
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
    };
    //para pegar informações sobre o ano do carro
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    //para dar um valor para o ano do carro
    Carro.prototype.setAno = function (_ano) {
        if (_ano > 2100 || _ano < 1900) {
            console.log("Valor do ano do carro invalido!");
        }
        else {
            this.ano = _ano;
        }
    };
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro.prototype.andar = function () {
        if (this.ligado == true) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " esta andando...");
        }
        else {
            console.log("Você precisa ligar o carro!");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado) {
            console.log("O carro " + this.modelo + " ( " + this.placa + " ) do ano " + this.ano + " acabou de parar");
        }
        else {
            console.log("Você precisa ligar o carro para ele parar");
        }
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
        console.log("Carro " + this.modelo + " esta desligado");
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log("Carro " + this.modelo + " acabou de ser ligado");
    };
    Carro.prototype.pegaInfo = function () {
        var info;
        info = "CARRO: " + this.modelo + "/" + this.ano + "/" + this.placa + "/" + this.cor + "/" + this.ligado;
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
