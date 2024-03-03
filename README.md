# Bem vindo ao Projeto Open_Food
Esta API fornece uma maneira simples de obter dados do site OpenFood usando Puppeteer. O website [OpenFood](https://br.openfoodfacts.org/) é um website abrangente de produtos alimentícios, fornecendo informações detalhadas sobre ingredientes, valores nutricionais e muito mais.

## Contexto
O __Open_Food__ é uma ferramenta que acessa a bases de dados, é permite aos usuários:
- Obter informações sobre produtos, sendo possível filtrar as informações pelos parâmetros.
- Buscar informações dos produtos pelo seu id.

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [Node.js](https://nodejs.org/docs/latest/api/) | ODM Object-documente-Mapper para MongoDB
- [NestJS](https://docs.nestjs.com/) | Framework para a construção de aplicativos Node.js.
- [Nestjs/Swagger](https://docs.nestjs.com/openapi/introduction) | Ferramenta para criação de interface de documentação.
- [Puppeteer](https://pptr.dev/) | O Puppeteer é uma biblioteca Node.js que permite controlar o Chrome ou o Chromium

Node.js é uma plataforma poderosa e versátil que permite aos desenvolvedores construir rapidamente aplicativos escaláveis e eficientes, tanto no lado do servidor quanto no cliente, utilizando JavaScript como linguagem principal. Nest é um framework para Node.js que é usado principalmente para a criação de aplicativos backend escaláveis e eficientes. Ele é construído com base no TypeScript e utiliza os conceitos de injeção de dependência, modularidade e padrão de arquitetura em camadas. O Nest.js com o Swagger simplifica o processo de documentação de APIs. O Swagger permite descrever, gerenciar e visualizar APIs de forma eficiente, enquanto o Nest.js fornece uma estrutura organizacional e uma abordagem baseada em decorators que facilita a integração com o Swagger. O Puppeteer é uma biblioteca Node.js desenvolvida pelo Google que fornece uma interface de alto nível para controlar o Chrome ou o Chromium por meio do protocolo DevTools. Com o Puppeteer, os desenvolvedores podem automatizar tarefas comuns realizadas no navegador, como navegar em páginas da web, interagir com elementos da página, capturar screenshots e gerar arquivos PDF. Essa biblioteca é frequentemente usada para testes automatizados, scraping da web.

## Instalação

```bash
cd dirname/

$ npm install
```

## Executando a aplicação

```bash
cd dirname/

$ npm run start

# watch mode
$ npm run start:dev

```
## Comportamento

- O endpoint __GET__ espera receber dois parâmetros para fazer a filtragem dos dados. Caso não tenham sido fornecidos os parâmetros, ou estejam faltando parâmetros, o endpoint trará os 20 primeiros produtos da tela inicial do website OpenFood.
- O endpoint __GET:id__ espera receber um parâmetro para a busca dos produtos, o qual precisa ser os id dos primeiros 20 produtos do website Openfood.

## Parâmetros
- O endpoint __GET__ espera receber, no primeiro parâmetro de busca, uma letra podendo variar entre A, B, C, D ou E.
- O endpoint __GET__ espera receber como segundo parâmetro de busca, um número que pode variar de 1 a 5.
- O O endpoint __GET:id__ espera receber um ID vinculado aos primeiros 20 produtos na página inicial.

## Desafios
- A raspagem de dados no website OpenFood tornou-se bastante desafiadora para mim. A falta de uniformidade na estrutura, layout e práticas de codificação desses sites complicou muito o processo de extração de dados. Uma das dificuldades que enfrentei é lidar com a estrutura variável dos sites de cada produto, já que as páginas têm diferentes estruturas HTML. 

- Percebi que o Puppeteer estava levando bastante tempo para o processo de raspagem. Seja pela falta de experiência usando a biblioteca ou pela limitação dela, o tempo levado pelo processo de raspagem me fez limitar a fonte de dados para ter uma experiência mais rápida. A aplicação foi desenvolvida para raspar os 100 primeiros produtos da tela inicial através do método GET.
