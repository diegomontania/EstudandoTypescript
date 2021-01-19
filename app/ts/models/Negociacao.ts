import { Imprimivel } from "../helpers/index";

export class Negociacao extends Imprimivel{

    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        // super é necessario quando você herda de outra classe, chamando o construtor da classe pai
        super();    
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get Data(){
        return this._data;
    }

    get Quantidade(){
        return this._quantidade;
    }

    get Valor(){
        return this._valor;
    }

    // quantidade de negociações
    get Volume(){
        return this._quantidade * this._valor;
    }

    paraTexto(): void {
        console.log(
            `Data: ${this.Data}
            Quantidade: ${this.Quantidade}, 
            Valor: ${this.Valor}, 
            Volume: ${this.Volume}`
        )
    }
}