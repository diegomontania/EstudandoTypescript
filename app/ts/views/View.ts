// Classe abstrata : 
// As classes que herdarem essa classe, deverão passar o tipo na qual será 
// necessário para que cada metodo (update e template) funcione conforme sua propria regra.
// E por sua vez, as classes filho, terão que implementar os metodos correspondentes
// da classe pai, sobreescrevendo(os) com suas próprias regras.

// utilizando um 'tsd' (typescript definition file) para dar suporte ao jquery no typescript
// npm install @types/jquery --save-dev 
// (versao 3.5.5)

// classe que recebe tipo generico '<T>'
abstract class View <T> {

    // propriedade protected : pode ser acessada pela propria classe e quem herda-la
    protected _elemento: JQuery;

    // faz a classe receber o elemento dom
    constructor(selectorCss: string){
        this._elemento = $(selectorCss);
    }

    update(model: T): void {
        this._elemento.html(this.template(model));
    }

    // metodo abstrato que irá retornar erro em tempo de compilação,
    // caso não seja implementado
    abstract template(model: T): string;
}