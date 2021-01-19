System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function atrasoExecucao(millisegundos = 500) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (event) {
                    event.preventDefault();
                }
                clearInterval(timer);
                timer = setTimeout(() => metodoOriginal.apply(this, args), millisegundos);
            };
        };
    }
    exports_1("atrasoExecucao", atrasoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
