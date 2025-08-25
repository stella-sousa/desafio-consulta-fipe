import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  imports: [],
  templateUrl: './resultado.html',
  styleUrl: './resultado.scss'
})
export class Resultado {
  veiculo = input<DadosVeiculo | null>(null);
}
