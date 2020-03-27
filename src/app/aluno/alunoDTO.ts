export class AlunoDTO {

  public nome: string;
  public cpf: string;
  public telefone: string;
  public endereco: string;
  public  dataNascimento: Date;


  constructor(nome: string, cpf: string, telefone: string, endereco: string, dataNascimento: Date) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = endereco;
    this.dataNascimento = dataNascimento;
  }
}
