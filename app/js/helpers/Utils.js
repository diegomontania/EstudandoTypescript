System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function imprimeNoConsole(...objetos) {
        objetos.forEach(objeto => objeto.paraTexto());
    }
    exports_1("imprimeNoConsole", imprimeNoConsole);
    return {
        setters: [],
        execute: function () {
        }
    };
});
