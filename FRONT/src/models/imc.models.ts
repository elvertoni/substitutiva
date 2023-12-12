import { Aluno } from "./aluno.model";

export interface Imc {
    imcId?: number;
    altura: number;
    peso: number;
    valorIMC?: number;
    classificacao?: string;
    dataCriacao?: string;
    alunoId: number;
    aluno?: Aluno;
}