import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService{

    // retorno um array do tipo Negociacao
    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

        // utilizando 'fetch api' para consumir api
        return <Promise<Negociacao[]>> fetch('http://localhost:8080/dados')
        .then(resposta => handler(resposta))
        .then(resposta => resposta.json())
        // Chama uma interface 'NegociacaoParcial' para definir os campos retornados pela API
        .then((dados: NegociacaoParcial[]) => 
            dados
                // criando uma nova instancia de Negociacao, passando os dados da api
                .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
        .catch(erro => console.log(erro.message));
    }
}

// cria interface que faz com que esta classe receba uma função de um tipo especifico (Response). 
// e que esta mesma função tenha como retorno o mesmo tipo recebido anteriormente.
// ou seja, protegendo a classe, evitando que outras funções que não sejam do tipo esperado, sejam passadas erroneamente
export interface HandlerFunction {
    (res: Response) : Response;
}