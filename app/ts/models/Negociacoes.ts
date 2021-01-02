class Negociacoes {

    // array do tipo negociacao
    // ou private _negociacoes: Negociacao[] = []; 'açucar sintatico'
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {

        // insere nova negociacao no array
        this._negociacoes.push(negociacao);
    }

    acessaArray(): Negociacao[] {
        return this._negociacoes;
    }

}