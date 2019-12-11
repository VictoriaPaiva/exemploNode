export class Produto {
    private codigo: number;
    private nome: string;
    private detalhes: string;
    private preco: number;
    private estoque: number;
    private linkFoto: string;
    public constructor(_codigo: number, _nome: string, _detalhes: string, _preco: number, _estoque: number, _linkFoto: string) {
        this.codigo = _codigo;
        this.nome = _nome;
        this.detalhes = _detalhes;
        this.preco = _preco;
        this.estoque = _estoque;
        this.linkFoto = _linkFoto;

    }
    public getCodigo(): number {
        return this.codigo;
    }
    public setCodigo(_codigo: number): void {
        this.codigo = _codigo;
    }
    public getNome(): string {
        return this.nome;
    }
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    public getDetalhes(): string {
        return this.detalhes;
    }
    public setDetalhes(_detalhes: string): void {
        this.detalhes = _detalhes;
    } public getPreco(): number {
        return this.preco;
    }
    public setPreco(_preco: number): void {
        this.codigo = _preco;
    } public getEstoque(): number {
        return this.estoque;
    }
    public setEstoque(_estoque: number): void {
        this.codigo = _estoque;
    } public getLinkFoto(): string {
        return this.linkFoto;
    }
    public setLinkFoto(_linkFoto: string): void {
        this.linkFoto = _linkFoto;
    }
    public getInfo():string{
        let info = (`Codigo: ${this.codigo}\nNome: ${this.nome}\nDetalhes: ${this.detalhes}\nPreco: ${this.preco}\nEstoque: ${this.estoque}\nLinkDaFoto: ${this.linkFoto}`);
        return info;

    }
}
