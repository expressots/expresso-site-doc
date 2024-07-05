---
sidebar_position: 0
---

# Método Bootstrap

O método `bootstrap` é o ponto de entrada da sua aplicação. É responsável por carregar a configuração da aplicação, registrar middlewares e iniciar a aplicação.

-   O método `AppFactory.create()` é responsável por criar a instância da aplicação. Ele recebe dois parâmetros:
-   `container` é o contêiner de injeção de dependências. Veja Contêiner da Aplicação para mais informações.
-   `middlewares` ou `App`
-   Retorna um instância de `IApplicationExpress` que te dá acesso a dois métodos:
-   `app.listen()` inicia a aplicação.
-   `app.setEngine()` define o motor de renderização de visualização da aplicação.`

:::info
**`middlewares`** é um array de middlewares que serão registrados na aplicação. (Template não opinativo)

**`App`** é a classe da aplicação responsável por toda a configuração da aplicação. (Template opinativo)
:::

## Bootstrap com array de middlewares

Use este método se você está usando o template não opinativo. Você tem a liberdade de criar sua própria classe de aplicação e registrar seus middlewares da sua própria maneira.

```typescript
async function bootstrap() {
    const app = await AppFactory.create(container, [cors(), helmet()]);
    await app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

:::tip
**`AppFactory.create(container, [])`** retorna uma instância de `ApplicationExpress` que te dá acesso direto à instância do `ExpressApp`.
:::

## Bootstrap com a classe de aplicação

Use este método se você está usando o template opinativo. Sua classe de aplicação será responsável por toda a configuração da aplicação.

```typescript
async function bootstrap() {
    const app = await AppFactory.create(container, App);
    await app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

:::tip
**`AppFactory.create(container, App)`** retorna uma instância de `IApplicationExpress` que te dá acesso aos métodos `listen()` e `setEngine()`.
:::

## Método Listen

O método `listen` é responsável por iniciar a aplicação. Ele recebe dois parâmetros obrigatórios e um parâmetro opcional:

-   `port` é o número da porta onde a aplicação estará ouvindo. (Obrigatório)
-   `environment` é o ambiente onde a aplicação estará rodando. Pode ser development ou production. Use o enum chamado `ServerEnvironment`. (Obrigatório)
-   `consoleMessage` é o objeto de mensagem que será exibido no console quando a aplicação iniciar. (Opcional)

```typescript
await app.listen(3000, ServerEnvironment.Development, {
    appName: "Expressots",
    appVersion: "1.0.0",
});
```

:::tip
O enum ServerEnvironment define automaticamente a variável de ambiente NODE_ENV. Pode ser `development` ou `production`.
:::

## Método Set Engine

O método `setEngine` é responsável por definir o motor de renderização de visualização da aplicação. Por enquanto, o ExpressoTS suporta apenas Handlebars.

```typescript
app.setEngine<IHandlebars>({
    extName: "hbs",
    viewPath: path.join(__dirname, "..", "views"),
    engine: engine({ defaultLayout: "layout", extname: "hbs" }),
});
```

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
