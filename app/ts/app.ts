const controller = new NegociacaoController();

// quando usuario clicar no botao chama o metodo de 'controller'
// .bind(controller) : mantem a associação com a classe
document
    .querySelector(".form")
    .addEventListener('submit', controller.adiciona.bind(controller));