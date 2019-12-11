"use strict";
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(_codigo, _nome, _detalhes, _preco, _estoque, _linkFoto) {
        this.codigo = _codigo;
        this.nome = _nome;
        this.detalhes = _detalhes;
        this.preco = _preco;
        this.estoque = _estoque;
        this.linkFoto = _linkFoto;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (_codigo) {
        this.codigo = _codigo;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (_nome) {
        this.nome = _nome;
    };
    Produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produto.prototype.setDetalhes = function (_detalhes) {
        this.detalhes = _detalhes;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (_preco) {
        this.codigo = _preco;
    };
    Produto.prototype.getEstoque = function () {
        return this.estoque;
    };
    Produto.prototype.setEstoque = function (_estoque) {
        this.codigo = _estoque;
    };
    Produto.prototype.getLinkFoto = function () {
        return this.linkFoto;
    };
    Produto.prototype.setLinkFoto = function (_linkFoto) {
        this.linkFoto = _linkFoto;
    };
    Produto.prototype.getInfo = function () {
        var info = ("Codigo: " + this.codigo + "\nNome: " + this.nome + "\nDetalhes: " + this.detalhes + "\nPreco: " + this.preco + "\nEstoque: " + this.estoque + "\nLinkDaFoto: " + this.linkFoto);
        return info;
    };
    return Produto;
}());
exports.Produto = Produto;
