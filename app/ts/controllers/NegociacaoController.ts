class NegociacaoController{

    // HTMLInputElement : tipo especifico de objeto para pegar os valores do doom
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;

    constructor(){
        // recebe os valores vindos do html, pegando o elemento do DOOM pelo 'id' 
        // e fazendo a conversao (casting) explícito de um tipo para outro usando <>
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');
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

        console.log(negociacao);
    }
}