# Projeto: Lista de Funcionários

Este projeto exibe uma lista de funcionários em formato de cards utilizando HTML, CSS e JavaScript modular com importação de dados via JSON.

## Funcionalidades

- Exibição dinâmica de funcionários
- Criação automática de cards via JavaScript
- Importação de dados de um arquivo JSON
- Layout responsivo com Flexbox
- Estrutura simples e reutilizável

## Como funciona

1. O arquivo funcionarios.json contém os dados dos funcionários (nome, cargo e imagem)
2. O app.js importa esses dados
3. Para cada funcionário, um card é criado dinamicamente
4. Os cards são inseridos dentro da div com id container

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Como executar

1. Clone o repositório

    git clone https://github.com/seu-usuario/seu-repositorio.git

2. Abra o projeto em um servidor local

Exemplo com VS Code:
- Instale a extensão Live Server
- Clique com o botão direito no index.html
- Clique em Open with Live Server

## Observações importantes

O projeto utiliza importação de JSON com JavaScript:

    import funcionarios from "./funcionarios.json" with { type: "json" }

Esse recurso não funciona abrindo o arquivo diretamente no navegador (file://), sendo necessário um servidor local.

## Layout

Cada card contém:
- Imagem do funcionário
- Nome
- Cargo

Estilo aplicado:
- Fundo branco
- Bordas arredondadas
- Sombra leve
- Conteúdo centralizado

## Possíveis melhorias

- Adicionar campo de busca
- Criar filtro por cargo
- Integrar com uma API
- Adicionar animações
- Melhorar responsividade

## Autor

Julio Augusto

## Licença

Projeto livre para uso e estudo