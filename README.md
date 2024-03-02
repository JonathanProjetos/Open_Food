# Bem vindo ao Projeto Open_Food
Esta API fornece uma maneira simples de obter dados do site OpenFood usando Puppeteer. O OpenFood é um website abrangente de produtos alimentícios, fornecendo informações detalhadas sobre ingredientes, valores nutricionais e muito mais.

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

Node.js é uma plataforma poderosa e versátil que permite aos desenvolvedores construir rapidamente aplicativos escaláveis e eficientes, tanto no lado do servidor quanto no cliente, utilizando JavaScript como linguagem principal. Nest é um framework para Node.js que é usado principalmente para a criação de aplicativos backend escaláveis e eficientes. Ele é construído com base no TypeScript e utiliza os conceitos de injeção de dependência, modularidade e padrão de arquitetura em camadas. O Nest.js com o Swagger simplifica o processo de documentação de APIs. O Swagger permite descrever, gerenciar e visualizar APIs de forma eficiente, enquanto o Nest.js fornece uma estrutura organizacional e uma abordagem baseada em decorators que facilita a integração com o Swagger.O Puppeteer é uma biblioteca Node.js desenvolvida pelo Google que fornece uma interface de alto nível para controlar o Chrome ou o Chromium por meio do protocolo DevTools. Com o Puppeteer, os desenvolvedores podem automatizar tarefas comuns realizadas no navegador, como navegar em páginas da web, interagir com elementos da página, capturar screenshots e gerar arquivos PDF. Essa biblioteca é frequentemente usada para testes automatizados, scraping da web.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
