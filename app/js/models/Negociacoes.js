System.register(["../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            Negociacoes = class Negociacoes extends index_1.Imprimivel {
                constructor() {
                    super(...arguments);
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                acessaArray() {
                    return [].concat(this._negociacoes);
                }
                paraTexto() {
                    console.log('impressão');
                    console.log(JSON.stringify(this._negociacoes));
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
