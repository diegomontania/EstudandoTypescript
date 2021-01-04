// O nome do arquivo não precisa ser igual o nome da funcao!
export function logarTempoDeExecucao() {

    // decorator nesse caso deve retornar outra funcao
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        
        // armazena a lógica do metodo original
        const metodoOriginal = descriptor.value;

        // sobreescreve o metodo original com uma nova funcao
        descriptor.value = function(...args: any[]){

            console.log('------------------');
            console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
            
            const t1 = performance.now(); // tempo1 de performance

            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();

            console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);

            // calculo de performance
            console.log(`O método ${propertyKey} demorou ${(t2 - t1)} ms`);

            return retorno;
        }

        return descriptor;
    }
}