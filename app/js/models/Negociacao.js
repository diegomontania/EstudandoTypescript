System.register(["../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            Negociacao = class Negociacao extends index_1.Imprimivel {
                constructor(data, quantidade, valor) {
                    super();
                    this._data = data;
                    this._quantidade = quantidade;
                    this._valor = valor;
                }
                get Data() {
                    return this._data;
                }
                get Quantidade() {
                    return this._quantidade;
                }
                get Valor() {
                    return this._valor;
                }
                get Volume() {
                    return this._quantidade * this._valor;
                }
                paraTexto() {
                    console.log(`Data: ${this.Data}
            Quantidade: ${this.Quantidade}, 
            Valor: ${this.Valor}, 
            Volume: ${this.Volume}`);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
