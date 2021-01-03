import { View } from './View';

// passa para a classe pai o tipo 'string'
export class MensagemView extends View<string>{

    // #region recebe construtor e update da classe pai : View
    // constructor(selectorCss: string){
    //     this._elemento = document.querySelector(selectorCss);
    // }

    // update(model: string): void {
    //     this._elemento.innerHTML = this.template(model);
    // }
    // #endregion

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`
    }
}