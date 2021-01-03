import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

// passa para a classe pai o tipo 'Negociacoes'
export class NegociacoesView extends View<Negociacoes>{

    // #region recebe construtor e update da classe pai : View
    // constructor(selectorCss: string){
    //     this._elemento = document.querySelector(selectorCss);
    // }
    // update(model: Negociacoes): void{
    //     this._elemento.innerHTML = this.template(model);
    // };
    // #endregion 

    // recebe o modelo de negociacoes
    template(model: Negociacoes): string {
        
        // utilizando uma 'template string'
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                <!-- pega o array e converte para map --!>
                ${model.acessaArray().map(negociacao => {
                    return `
                        <tr>
                            <td>${negociacao.Data.getDate()}/${negociacao.Data.getMonth() + 1}/${negociacao.Data.getFullYear()}</td>
                            <td>${negociacao.Quantidade}</td>
                            <td>${negociacao.Valor}</td>
                            <td>${negociacao.Volume}</td>
                        <tr>
                     `
                }).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>     
        `;
    }
}



