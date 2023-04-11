# Automacao cypress 12

<p>Projeto criado para automação de casos de teste do portal web do curso PAPITO - 2022.</p>
  

## Ferramentas utilizadas

- Node.js
- Cypress 12
- Allure Report

## Preparação do ambiente
Para rodar o projeto, utlize a IDE que você mais se identifique **(no meu caso, utilizei o Visual Studio Code)**, em
seguida, utilize os comandos abaixo para rodar os testes:

`npx cypress open`: para rodar os testes no modo visual, abrindo a telinha do Cypress;<br>
`npx cypress run --env allure=true`: para rodar os testes no navegador padrão do Cypress (Electron);<br>
`allure generate allure-results --clean -o allure-report`: para gerar a pasta allure-report e results;<br>
`npx allure open`: para abrir o navegador expondo os resultados no allure;<br>
`npx cypress run -b edge`: para rodar os testes no navegador Edge, da Microsoft; <br>
`npx cypress run -b firefox`: para rodar os testes no navegador Firefox, da Mozilla;<br>
`npx cypress run -b chrome`: para rodar os testes no navegador Chrome, do Google; <br>


**Observação:**

Caso deseje rodar os testes com qualquer navegador que não seja o Electron, deve,
primeiramente, instalar os navegadores em questão. Outro ponto importante é a necessidade de rodar o comando `npm install` 
para instalar as dependências e módulos do projeto.

**Arquivos e diretórios:**

- /cypress/e2e/
  Diretório que contém a execução dos cenários de testes;
  
- /cypress/factories
   Diretório que contém arquivo json com dados para serem exportados;
   
- /cypress/fixtures/images
    Diretório que possui imagem a ser utilizada para upload;

- /cypress/fixtures/
    Diretório um arquivo json para massa de dados;

- /cypress/pages
    Diretório que contém as funções e métodos;
    
    

## Links e documentações úteis.

- [Documentação oficial do Cypress](https://www.cypress.io/)

Desenvolvido por Mateus Neres - 2023