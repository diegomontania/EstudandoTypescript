// antes de importar aqui, deve importar a classe no 'index.ts' (barril) de cada pasta (models, views, decorators...)
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index'
import { NegociacoesView, MensagemView } from '../views/index';
import { meuDomInject, atrasoExecucao } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprimeNoConsole } from '../helpers/index';

// timer para evitar multiplas requisições no back-end
let timer = 0;

export class NegociacaoController{

    // JQuery : utlizando essa lib para pegar os valores do doom em dispositivos atuais e legados

    // recebe os valores vindos do html, pegando o elemento do DOM pelo 'id' utilizando jquery
    // fazendo lazy loading (utilizando um decorator) para apenas buscar os objetos do dom quando for requisitado
    // e não diretamente no construtor da classe
    @meuDomInject('#data')
    private _inputData : JQuery;

    @meuDomInject('#quantidade')
    private _inputQuantidade : JQuery;

    @meuDomInject('#valor')
    private _inputValor : JQuery;

    private _negociacoes = new Negociacoes(); // propriedade da classe responsável pelas negociacoes
    private _negociacoesView = new NegociacoesView('#negociacoesView', true); // tabela view
    private _mensagemView = new MensagemView('#mensagemView');
    private _negociacaoService = new NegociacaoService();   // propriedade responsável pela requisição da api

    constructor(){
        // atualiza view
        this._negociacoesView.update(this._negociacoes);
    }

    @atrasoExecucao(1000)
    adiciona(event: Event){
        let data = new Date(this._inputData.val().toString().replace(/-/g, ','));

        // se for final de semana lance uma mensagem
        if(data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo){
            this._mensagemView.update('Somente negociacoes em dias uteis serão permitidas!');
            return;
        }

        // instancia classe que vai tratar as informações e passa os valores que estão digitados para a mesma fazendo a conversao de tipos
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val().toString()),
            parseFloat(this._inputValor.val().toString()),
        );
        
        // ações que ocorrem após adicionar uma nova negociacao: atualiza e exibe mensagem
        imprimeNoConsole(negociacao, this._negociacoes);
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

    @atrasoExecucao(1000)
    importaDados(){

        // testa se resposta da api foi bem sucedida
        function respostaOK(resposta: Response){
            if(resposta.ok){
                return resposta;
            } else {
                throw new Error(resposta.statusText);
            }
        }

        // recebe da api e a cada negociacao vinda da api vai diretamente para o objeto '_negociacoes'
        this._negociacaoService
            .obterNegociacoes(respostaOK)
            .then(negociacoesDaAPI => {
                negociacoesDaAPI.forEach(negociacao => this._negociacoes.adiciona(negociacao))
                this._negociacoesView.update(this._negociacoes); // atualiza view
            });
    }
}

// dias da semana em enum que serão comparados 
// de acordo com o seu enum : 0, 1, 2...
enum DiaDaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}