// Classe abstrata : 
// As classes que herdarem essa classe, deverão passar o tipo na qual será 
// necessário para que cada metodo (update e template) funcione conforme sua propria regra.
// E por sua vez, as classes filho, terão que implementar os metodos correspondentes
// da classe pai, sobreescrevendo(os) com suas próprias regras.

// utilizando um 'tsd' (typescript definition file) para dar suporte ao jquery no typescript
// npm install @types/jquery --save-dev 
// (versao 3.5.5)

import { logarTempoDeExecucao } from '../helpers/decorators/index';

// export : para exportar classe para o namespace 'Views'
// classe que recebe tipo generico '<T>'
export abstract class View <T> {

    // propriedade protected : pode ser acessada pela propria classe e quem herda-la
    protected _elemento: JQuery;
    private _escapar : boolean;

    // faz a classe receber o elemento dom
    // ? : parametro opcional (os parametros opcionais devem vir por ultimo no construtor)
    constructor(selectorCss: string, escapar?: boolean){
        this._elemento = $(selectorCss);
        this._escapar = escapar;
    }

    // utilizando decorator de metodo
    // um decorator pode adicionar comportamentos, funcionalidades ou estado extra em um objeto em tempo de execução que não estão na classe
    // um decorator de metodo pode executar um codigo antes e depois de um metodo
    // sobre decorator : https://pt.wikipedia.org/wiki/Decorator
    @logarTempoDeExecucao()
    update(model: T): void {
        
        let template = this.template(model);

        // removendo tag 'script' do template
        // https://cursos.alura.com.br/forum/topico-remover-script-de-template-126913
        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
            this._elemento.html(template);
    }

    // metodo abstrato que irá retornar erro em tempo de compilação,
    // caso não seja implementado
    abstract template(model: T): string;
}
