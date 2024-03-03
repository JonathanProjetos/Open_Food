# Bem vindo ao Projeto Open_Food
Esta API fornece uma maneira simples de obter dados do site OpenFood usando Puppeteer. O website [OpenFoodFacts](https://br.openfoodfacts.org/) é um website abrangente de produtos alimentícios, fornecendo informações detalhadas sobre ingredientes, valores nutricionais e muito mais.
<datails>

## Sumário
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Executando a aplicação](#executando-a-aplicação)
- [Comportamento](#comportamento)
- [Parâmetros](#parâmetros)
- [Documentação](#documentação)
- [Desafios](#desafios)
- [Conclusão](#conclusão)
- [Referências](#referências)


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

## Tempo de resposta
- Para o endpoint __GET__, o tempo médio de resposta foi de aproximadamente 54 segundos para coletar os 20 primeiros registros. Esse tempo inclui o processo de coleta dos links e a interação com cada um deles para coletar os dados.
- Para o endpoint __GET:id__, o tempo médio de resposta foi de aproximadamente 10,7 segundos. Esse tempo engloba o processo de coleta dos 20 primeiros links da página, a filtragem dos links com base no ID fornecido e a busca dos dados associados ao ID do produto.
## Desafios
- A raspagem de dados no website OpenFood tornou-se uma tarefa desafiadora para mim. A falta de uniformidade na estrutura, layout e práticas de codificação desses sites complicou significativamente o processo de extração de dados. Uma das dificuldades que enfrento é lidar com a estrutura variável das páginas de cada produto, uma vez que estas apresentam diferentes formatos de HTML.

- A coleta de dados das informações da tabela nutricional foi desafiadora, pois cada produto tem sua composição específica. Por exemplo, pode haver dois produtos de chocolate, sendo que um contém açúcar e o outro não. Essa variação gerou uma instabilidade nas informações. Para contornar esse problema, foi necessário coletar todos os dados da tabela, garantindo abrangência e consistência.

- Em relação ao uso do Puppeteer, notei que o processo de raspagem estava levando considerável tempo. Isso pode ter sido devido à minha inexperiência com a biblioteca ou às suas próprias limitações. Diante do tempo necessário para a raspagem, decidi restringir a fonte de dados para garantir uma experiência mais rápida. Portanto, a aplicação foi projetada para raspar apenas os 100 primeiros produtos da tela inicial, utilizando o método GET.

- Ao comparar o conteúdo visualizado manualmente com o apresentado pelo navegador Puppeteer, notei que as informações frequentemente apresentavam divergências. No entanto, observei que ao acessar o site pelo navegador em modo anônimo, obtive resultados semelhantes aos obtidos pelo Puppeteer. Entretanto, este aspecto ainda está em fase de análise para uma correção mais precisa.

## Documentação
- A aplicação inclui a utilização de documentação interna através do Swagger. Essa ferramenta proporcionou uma compreensão intuitiva das funcionalidades da aplicação. O acesso à documentação está disponível no endpoint 'http://localhost:3001/api'.
<img src='https://drive.google.com/uc?id=1z-aA6fxmELCIWby7CM48QnsmCAMG32zJ' alt='imagem_swagger'/>

## Conclusão
A aplicação atendeu às funcionalidades propostas no README do teste técnico, proporcionando uma experiência emocionante e desafiadora no uso das tecnologias envolvidas. O contato com algumas delas pela primeira vez ampliou meu conhecimento e habilidades. Durante o desenvolvimento, o pensamento analítico foi essencial para estruturar os dados considerando possíveis contextos futuros.

Embora a aplicação ainda não esteja perfeita, decidi entregá-la neste ponto de evolução devido ao tempo já consumido. Comprometo-me a continuar aperfeiçoando-a no futuro, incorporando tratamentos de erro para situações como a ausência de dados na página de coleta. Essas melhorias serão essenciais para garantir a robustez e confiabilidade da aplicação.

## Referências
- Swagger: https://docs.nestjs.com/openapi/introduction
- Puppeteer: https://pptr.dev/
- Paulo Salvatore: https://www.youtube.com/watch?v=fshX_252HbU
- Bruno Castro: https://www.youtube.com/watch?v=SkvTMxP5WUQ
- Get_it Done!: https://www.youtube.com/watch?v=A2aHLWNpF18&t=23s
- OpenAPI: https://chat.openai.com/
- Gemini: https://gemini.google.com/app

