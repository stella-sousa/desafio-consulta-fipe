import { Component, OnInit } from '@angular/core';
import { FipeService } from '../../services/fipe-service';
import { Resultado } from "../resultado/resultado";
import { LoadingWave } from "../ui/loading-wave/loading-wave";

@Component({
  selector: 'app-consulta-veiculo',
  imports: [Resultado, LoadingWave],
  templateUrl: './consulta-veiculo.html',
  styleUrl: './consulta-veiculo.scss'
})
export class ConsultaVeiculo implements OnInit {
  constructor (private fipeService: FipeService) {}

  marcas: MarcaVeiculo[] = [];
  modelos: ModeloVeiculo[] = [];
  anos: AnoVeiculo[] = [];

  codigoMarcaSelecionada: string | null = null;
  codigoModeloSelecionado: string | null = null;
  codigoAnoSelecionado: string | null = null;

  veiculoEncontrado: DadosVeiculo | null = null;

  isLoading = false;
  hasError = false;
  noResultFound = false;
  welcomeMessage = true;

  ngOnInit(): void {
    this.isLoading = true;
  
    this.fipeService.getMarcasVeiculo().subscribe({
      next: (marcas) => {
      this.marcas = marcas;
      this.isLoading = false;
      },
    
      error: (error) => {
        console.error("Erro ao receber marcas: " + error);
        this.isLoading = false;
        this.hasError = true;
      }
    })
    }
    
  onMarcaChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.codigoMarcaSelecionada = target.value;

    this.modelos = [];
    this.codigoModeloSelecionado = null;
      
    this.anos = [];
    this.codigoAnoSelecionado = null;

    this.welcomeMessage = true;

    this.veiculoEncontrado = null;

    if(this.codigoMarcaSelecionada) {
      this.isLoading = true;
      this.hasError = false;

      this.fipeService.getModelosVeiculo(this.codigoMarcaSelecionada).subscribe({
        next: (modelos) => {
          this.modelos = modelos;
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Erro ao receber modelos: " + error);
          this.isLoading = false;
          this.hasError = true;
        }
      });
    }
  }

  onModeloChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.codigoModeloSelecionado = target.value;

    this.anos = [];
    this.codigoAnoSelecionado = null;

    this.welcomeMessage = true;

    this.veiculoEncontrado = null;

    if(this.codigoMarcaSelecionada && this.codigoModeloSelecionado) {
      this.isLoading = true;
      this.hasError = false;

      this.fipeService.getAnos(this.codigoMarcaSelecionada, this.codigoModeloSelecionado).subscribe({
        next: (anos) => {
          this.anos = anos;
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Erro ao receber anos: " + error);
          this.isLoading = false;
          this.hasError = true;
        }
      })
    }
  }
  
  onAnoChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.codigoAnoSelecionado = target.value;

    this.welcomeMessage = true;

    this.veiculoEncontrado = null;
  }

  buscarVeiculo() {
    if(this.codigoMarcaSelecionada && this.codigoModeloSelecionado && this.codigoAnoSelecionado) {
      this.isLoading = true;
      this.hasError = false;
      this.noResultFound = false;
      this.welcomeMessage = false;

      this.fipeService.getDadosVeiculo(this.codigoMarcaSelecionada, this.codigoModeloSelecionado, this.codigoAnoSelecionado).subscribe({
        next: (veiculo) => {
          if(veiculo && veiculo.CodigoFipe) {
            this.veiculoEncontrado = veiculo;
          } else {
            this.veiculoEncontrado = null;
            this.noResultFound = true;
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Erro ao receber dados do veículo: " + error);
          this.isLoading = false;
          this.hasError = true;
        }
      })
    }
  }
}
