// ao importar um modulo em uma classe onde o arquivo barril (index.ts) esteja na mesma pasta (diretório),
// o systemjs acusa um erro : 'class extends value undefined is not a construtor or null'.
// para evitar este erro, deve-se fazer a importação diretamente pelo diretório do arquivo
import { Negociacao } from './Negociacao';
import { Imprimivel } from '../helpers/index';

export class Negociacoes extends Imprimivel {
    
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

    paraTexto(): void {
        console.log('impressão');
        console.log(JSON.stringify(this._negociacoes));
    }
}