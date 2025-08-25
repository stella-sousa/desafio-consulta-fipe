import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaVeiculo } from "./components/consulta-veiculo/consulta-veiculo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConsultaVeiculo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('consulta-fipe');
}
