interface MarcaVeiculo {
    codigo: number;
    nome: string;
}

interface ModeloVeiculo {
    codigo: number;
    nome: string;
}

interface AnoVeiculo {
    codigo: number;
    nome: string;
}

interface DadosVeiculo {
    TipoVeiculo: number;
    Valor: number;
    Marca: MarcaVeiculo;
    Modelo: ModeloVeiculo;
    AnoModelo: AnoVeiculo;
    Combustivel: string;
    CodigoFipe: string;
    MesReferencia: string;
    SiglaCombustivel: string;
}

interface RespostaModelos {
    modelos: ModeloVeiculo[];
    anos: AnoVeiculo[];
}