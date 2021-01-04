import { Negociacao } from './Negociacao';

export class Negociacoes {
    // array do tipo negociacao
    // ou private _negociacoes: Negociacao[] = []; 'açucar sintatico'
    private _negociacoes: Array<Negociacao> = [];

    // metodo que não retorna nada
    adiciona(negociacao: Negociacao): void {
        // insere nova negociacao no array
        this._negociacoes.push(negociacao);
    }
    
    // metodo que retorna um tipo
    acessaArray(): Negociacao[] {
        // retorna um novo array com a copia das informações
        // evitando que ele seja alterado, pois a regra de negocio diz, 
        // que as negociações após criadas não podem ser apagadas
        return [].concat(this._negociacoes);
    }
}