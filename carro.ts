export class Carro {
    private placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    private ligado: boolean;
    public constructor(_placa: string, _cor: string, _modelo: string, _ano: number) {
        this.placa=_placa;
        this.cor =_cor;
        this.modelo=_modelo;
        this.ano=_ano;
        this.ligado=false;

    }
    //para pegar informações sobre a placa do carro
    public getPlaca(): string {
        return this.placa;
    }
    //para dar um valor para a placa do carro
    public setPlaca(_placa: string): void {
        if (_placa.length < 7) {
            console.log("Placa invalida")
        }
        this.placa = _placa;
    }
    //para pegar informações sobre a cor do carro
    public getCor(): string {
        return this.cor;
    }
    //para dar uam cor para o carro
    public setCor(_cor: string): void {
        this.cor = _cor;
    }
    //para pegar informações sobre modelo do carro
    public getModelo(): string {
        return this.modelo;
    }
    //para dar um modelo para o carro
    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }
    //para pegar informações sobre o ano do carro
    public getAno(): number {
        return this.ano;
    }
    //para dar um valor para o ano do carro
    public setAno(_ano: number): void {
        if (_ano > 2100 || _ano < 1900) {
            console.log("Valor do ano do carro invalido!");
        }
        else {
            this.ano = _ano;
        }
    }

    public getLigado(): boolean {
        return this.ligado;
    }
    public andar(): void {
        if (this.ligado == true) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " esta andando...");
        }
        else {
            console.log("Você precisa ligar o carro!")
        }
    }
    public parar(): void {
        if (this.ligado) {
            console.log(`O carro ${this.modelo} ( ${this.placa} ) do ano ${this.ano} acabou de parar`);

        }
        else {
            console.log("Você precisa ligar o carro para ele parar")

        }
    }
    public desligar(): void {
        this.ligado = false;
        console.log(`Carro ${this.modelo} esta desligado`);
    }
    public ligar(): void {
        this.ligado = true;
        console.log(`Carro ${this.modelo} acabou de ser ligado`);
    }
    public pegaInfo(): string {
        var info: string
        info = `CARRO: ${this.modelo}/${this.ano}/${this.placa}/${this.cor}/${this.ligado}`;
        return info;
    }

}
