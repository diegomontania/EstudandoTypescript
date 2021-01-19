//Evita que uma funcao sem retorna seja chamada consecutivamente varias vezes
export function atrasoExecucao(millisegundos: number = 500) {

    // decorator nesse caso deve retornar outra funcao
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        
        // armazena a lógica do metodo original
        const metodoOriginal = descriptor.value;

        let timer = 0;

        // sobreescreve o metodo original com uma nova funcao
        descriptor.value = function(...args: any[]){

            if(event){
                // evita que a página seja recarregada após clicar o botão
                event.preventDefault();
            }

            // se houver multiplas requisições seguidas, dê reset no timer
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), millisegundos);
        }
    }
}