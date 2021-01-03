class NegociacaoController{

    // JQuery : utlizando essa lib para pegar os valores do doom em dispositivos atuais e legados
    private _inputData : JQuery;
    private _inputQuantidade : JQuery;
    private _inputValor : JQuery;

    private _negociacoes = new Negociacoes(); // propriedade da classe responsável pelas negociacoes
    private _negociacoesView = new NegociacoesView('#negociacoesView'); // tabela view
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        // recebe os valores vindos do html, pegando o elemento do DOM pelo 'id' utilizando jquery
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        // atualiza view
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event){
        // evita que a página seja recarregada após clicar o botão
        event.preventDefault();

        // instancia classe que vai tratar as informações e passa os valores que estão digitados para a mesma fazendo a conversao de tipos
        const negociacao = new Negociacao(
            new Date(this._inputData.val().toString().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val().toString()),
            parseFloat(this._inputValor.val().toString()),
        );
        
        // ações que ocorrem após adicionar uma nova negociacao: atualiza e exibe mensagem
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionadas com sucesso!');

        // #region Loop pelas negociacoes
        // faz um for para cada negociacao dentro desse objeto
        // this._negociacoes.acessaArray().forEach(negociacao =>{
        //     console.log(negociacao.Data);
        //     console.log(negociacao.Quantidade);
        //     console.log(negociacao.Valor);
        // });
        //#endregion
    }
}