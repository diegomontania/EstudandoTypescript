class NegociacoesView{

    private _elemento: Element;

     // faz a classe receber o elemento dom
    constructor(selectorCss: string){
        this._elemento = document.querySelector(selectorCss);
    }

    // renderiza a tabela
    update():void{
        this._elemento.innerHTML = this.template();
    };

    template(): string {
        
        // utilizando uma 'template string'
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            </tbody>

            <tfoot>
            </tfoot>
        </table>     
        `;
    }

}