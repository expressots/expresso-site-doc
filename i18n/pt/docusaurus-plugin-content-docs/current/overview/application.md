---
sidebar_position: 2
---

# Aplicação

No coração de uma aplicação ExpressoTS está a classe App. Ela serve como a fundação para criar e configurar o servidor. Adicionalmente, a classe App permite que middlewares e provedores sejam configurados no processo de inicialização do servidor. A classe App também oferece hooks (ganchos) de ciclo de vida que permitem aos desenvolvedores executar código antes, depois e durante o desligamento do servidor. Esta seção fornece uma visão geral da arquitetura da aplicação ExpressoTS, seus componentes e o fluxo de trabalho de uma aplicação ExpressoTS.

![Visão Geral da Aplicação](./img/app-overview.png)

## Arquitetura da aplicação

A arquitetura de uma aplicação ExpressoTS é construída em torno do **[Inversify](https://inversify.io/)**, um contêiner IoC (Inversão de Controle), que é usado para identificar e injetar dependências nos construtores das classes. Essa abordagem permite que o contêiner IoC carregue todos os módulos necessários, incluindo suas respectivas rotas (controllers). Utilizando casos de uso e provedores (providers) conforme necessário, as rotas podem lidar com as solicitações recebidas.

## Componentes principais e suas funções

A arquitetura de uma aplicação ExpressoTS é baseada em vários componentes fundamentais:

-   **DTO IN/OUT**: Define a estrutura para dados de entrada e saída, garantindo segurança de tipo e consistência em toda a aplicação.
-   **Controller**: Gerencia o processamento de solicitações, roteamento baseado na URL e no método HTTP, e validação de dados.
-   **Use Case**: Executa lógica específica para o tratamento de solicitações, atuando sobre dados validados pelos controladores para realizar operações e retornar respostas.
-   **Provider**: Fornece funcionalidades externas como acesso a banco de dados, serviços de email ou mecanismos de autenticação.
-   **Repository**: Facilita a comunicação direta com o banco de dados para operações CRUD, abstraindo a camada de dados.

:::info
Provedores e Repositórios são componentes opcionais. Você pode usá-los se precisar fornecer funcionalidades extras para sua aplicação, como integração com banco de dados, sistema de log, autenticação, email, etc.
:::

## Fluxo de trabalho da aplicação

O fluxo de trabalho começa com a inicialização do servidor, incluindo a configuração do contêiner, módulos e controladores. Ao receber solicitações, o servidor invoca o controlador relevante, que então aciona o caso de uso correspondente. Se necessário, os casos de uso interagem com provedores para acessar recursos ou serviços externos.

:::warning Inicializando a Aplicação sem um controlador
O ExpressoTS impedirá que você inicialize a Aplicação sem um controlador, já que não há ouvintes para lidar com as solicitações recebidas. Você verá a seguinte mensagem no console:
**_No controllers have been found! Please ensure that you have register at least one Controller._**
:::

## Classe AppExpress

A classe AppExpress oferece uma maneira de criar e configurar o servidor, passando **[middlewares do Express.js](https://expressjs.com/en/guide/writing-middleware.html)**, registrando provedores externos e configurando o ambiente do servidor. A classe AppExpress fornece três hooks de ciclo de vida que permitem aos desenvolvedores executar código antes, depois e durante o desligamento do servidor. A seguir, está a estrutura da classe AppExpress:


```typescript
export class App extends AppExpress {
    private middleware: IMiddleware;
    private provider: ProviderManager;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
        this.provider = container.get(ProviderManager);
    }

    protected configureServices(): void {
        this.provider.register(Env);

        this.middleware.addBodyParser();
        this.middleware.setErrorHandler();
    }

    protected postServerInitialization(): void {
        if (this.isDevelopment()) {
            this.provider.get(Env).checkAll();
        }
    }

    protected serverShutdown(): void {}
}
```

:::info
A classe `App` oferece um conjunto de middlewares e provedores prontos para uso que podem ser utilizados para configurar sua aplicação. Veja a lista completa na **[seção de Middlewares](./middleware.md)**
:::

## Inicialização da aplicação

O processo de inicialização da aplicação envolve a criação do servidor, passando o contêiner, a classe App e iniciando o servidor. A classe AppFactory fornece o método create e listen que permite aos desenvolvedores criar o servidor e ouvir solicitações de entrada. A seguir, está a função Bootstrap que cria o servidor:

```typescript
async function bootstrap() {
    const app = await AppFactory.create(container, App);
    await app.listen(3000, ServerEnvironment.Development);
}
```
:::info
O framework atualmente suporta o Express como seu adaptador principal, com Fastify e outros possíveis servidores internos em desenvolvimento.
:::

### Gerenciamento de ambiente

O ambiente do servidor é definido através do enum `ServerEnvironment`, com suporte para os modos `development` (desenvolvimento) e `production` (produção), padrão para desenvolvimento se `NODE_ENV` não estiver configurado.

-   ServerEnvironment.Development;
-   ServerEnvironment.Production;

## Hooks de ciclo de vida da aplicação

Um outro aspecto importante da classe Application são os hooks de ciclo de vida. Esses hooks permitem que os desenvolvedores executem código antes, depois e durante o desligamento do servidor.

```typescript
    /* Add any service that you want to be initialized before the server starts */
    protected configureServices(): void { }

    /* Add any service that you want to execute after the server starts */
    protected postServerInitialization(): void { }

    /* Add any service that you want to execute after server is shutdown */
    protected serverShutdown(): void { }
```

### Ordem de execução dos hooks

![Hooks de ciclo de vida da aplicação](./img/app-life-cycle.png)

## Scripts da aplicação

Scripts para construir, executar e testar a aplicação são fornecidos, acomodando diferentes estágios de desenvolvimento e necessidades operacionais, desde o desenvolvimento até a produção.

| Script               | Descrição                                             | Comando            |
| -------------------- | ----------------------------------------------------- | ------------------ |
| expressots run build | Constrói o pacote de produção na pasta ./dist.        | npm run build      |
| expressots run dev   | Executa em modo de desenvolvimento com observação.    | npm run dev        |
| expressots run prod  | Executa em modo de produção com base no pacote built. | npm run prod       |
| test                 | Executa os testes localizados na pasta test.          | npm run test       |
| test:watch           | Executa os testes em modo de observação e interativo. | npm run test:watch |
| test:cov             | Gera relatorio de cobertura de testes.                | npm run test:cov   |
| format               | Formatar código usando prettier.                      | npm run format     |
| lint                 | Lint código usando eslint.                            | npm run lint       |

## Executando a aplicação

```bash
npm run dev
```

Isso iniciará a aplicação com saída no console indicando a versão, porta em execução e ambiente, fornecendo um feedback claro sobre o estado de execução da aplicação.

`expressots-demo version 1.0.0 is running on port 3000 - Environment: development`

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
