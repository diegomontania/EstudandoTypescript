import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

// quando usuario clicar no botao chama o metodo de 'controller'
// .bind(controller) : mantem a associação com a classe
$('.form').on("submit", controller.adiciona.bind(controller));

// pegando o botao pelo id
$('#botao-importa-api').on("click", controller.importaDados.bind(controller));