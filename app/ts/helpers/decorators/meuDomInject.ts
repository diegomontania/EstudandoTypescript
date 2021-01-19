export function meuDomInject(selectorCss: string) {

    return function(target: any, key: string){

        // recebe elemento jQuery
        let elemento: JQuery;

        // busca o elemento dom
        const getter = function(){
            // existe este elemento no dom?
            if(!elemento){
                console.log(`buscando ${selectorCss} para injetar em ${key}`)
                elemento = $(selectorCss);
            }

            // se existir, retorne-o
            return elemento;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}