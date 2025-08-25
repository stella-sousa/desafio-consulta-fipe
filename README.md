# Desafio Consulta FIPE

Esta é uma pequena aplicação desenvolvida em Angular como parte de um desafio técnico. O objetivo é permitir a consulta de veículos na tabela FIPE de forma encadeada.

## Como Rodar

Para executar este projeto localmente, siga os passos abaixo:

1.  **Instalar as dependências:**
    ```bash
    npm install
    ```

2.  **Iniciar o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

Após iniciar, acesse `http://localhost:4200/` no seu navegador.

## Endpoints Utilizados

A aplicação consome a API pública da FIPE através dos seguintes endpoints:

* **Listar Marcas:** `https://parallelum.com.br/fipe/api/v1/carros/marcas`
* **Listar Modelos:** `https://parallelum.com.br/fipe/api/v1/carros/marcas/{codigoMarca}/modelos`
* **Listar Anos:** `https://parallelum.com.br/fipe/api/v1/carros/marcas/{codigoMarca}/modelos/{codigoModelo}/anos`
* **Detalhes do Veículo:** `https://parallelum.com.br/fipe/api/v1/carros/marcas/{codigoMarca}/modelos/{codigoModelo}/anos/{codigoAno}`
