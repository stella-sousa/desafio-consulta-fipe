import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FipeService {
  http = inject(HttpClient);
  
  getMarcasVeiculo(): Observable<MarcaVeiculo[]> {
    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;
    return this.http.get<MarcaVeiculo[]>(url);
  }

  getModelosVeiculo(codigoMarca: string): Observable<ModeloVeiculo[]> {
    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos`
    return this.http.get<RespostaModelos>(url).pipe(
      map(response => {
        return response.modelos;
      })
    );
  }

  getAnos(codigoMarca: string, codigoModelo: string): Observable<AnoVeiculo[]> {
    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`
    return this.http.get<AnoVeiculo[]>(url);
  }

  getDadosVeiculo(codigoMarca: string, codigoModelo: string, codigoAno: string): Observable<DadosVeiculo> {
    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${codigoAno}`
    return this.http.get<DadosVeiculo>(url);
  }
}
