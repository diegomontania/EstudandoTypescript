class NegociacaoController{

    // HTMLInputElement : tipo especifico de objeto para pegar os valores do doom
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;

    // propriedade da classe responsável pelas negociacoes
    private _negociacoes = new Negociacoes();

    // view
    private _negociacoesView = new NegociacoesView('#negociacoesView');

    constructor(){
        // recebe os valores vindos do html, pegando o elemento do DOM pelo 'id' 
        // e fazendo a conversao (casting) explícito de um tipo para outro usando <>
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');

        // atualiza view
        this._negociacoesView.update();
    }

    adiciona(event: Event){
        // evita que a página seja recarregada ao pressionar o botão
        event.preventDefault();

        // instancia classe que vai tratar as informações e passa os valores que estão digitados para a mesma fazendo a conversao de tipos
        const negociacao = new Negociacao(
            this._inputData.valueAsDate,
            this._inputQuantidade.valueAsNumber,
            this._inputValor.valueAsNumber,
        );
        
        // adiciona uma nova negociacao
        this._negociacoes.adiciona(negociacao);
        
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