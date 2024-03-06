---
sidebar_position: 5
---

# Middleware

Middleware é uma função que tem acesso ao objeto de requisição (req), ao objeto de resposta (res) e à próxima função de middleware no ciclo de requisição-resposta da aplicação. A próxima função de middleware é comumente indicada por uma variável chamada next.

Middleware pode:

-   Executar código.
-   Modificar os objetos de requisição e resposta.
-   Concluir o processo de requisição-resposta.
-   Prosseguir para o próximo middleware na sequência.
-   Assegurar a invocação de next() se o middleware não finalizar o ciclo de requisição-resposta para evitar que a requisição fique parada.

:::info
ExpressoTS oferece suporte total ao middleware do [Express](https://expressjs.com/).
:::

## Adicionando Middleware

A aplicação ExpressoTS suporta a adição de middleware de forma global à aplicação, bem como por rota. Ela oferece todo o [middleware suportado pela Equipe do Express](https://expressjs.com/en/resources/middleware.html) através do uso da propriedade `this.middleware`.

```typescript
@provide(App)
export class App extends AppExpress {
    private middleware: IMiddleware;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
    }

    protected configureServices(): void {
        this.middleware.addBodyParser();
        this.middleware.addCors();
        this.middleware.addHelmet();
    }
}
```

:::caution
Se você adicionar um middleware que não está instalado como dependência, a aplicação emitirá uma mensagem de aviso e continuará a funcionar.
:::

### Middleware Global

Middlewares podem ser adicionados globalmente usando a classe `App` através da propriedade `this.middleware`, utilizando a lista de middleware disponibilizada pela Equipe do Express:

```typescript
protected configureServices(): void {
        this.middleware.addBodyParser();
        this.middleware.addCors();
        this.middleware.addHelmet();
    }
```

Para qualquer outro middleware, ou um middleware personalizado, você pode adicioná-lo usando o método `this.middleware.addMiddleware()`. Com o método `addMiddleware`, você pode adicionar qualquer middleware do Registro NPM, middleware personalizado do Expressjs ou um middleware personalizado do ExpressoTS.

Middleware do Registro NPM:

```typescript
this.middleware.addMiddleware(cors());
```

Middleware personalizado do Expressjs:

```typescript
function myMiddleware(req: Request, res: Response, next: NextFunction) {
    // Do something
    next();
}
```

```typescript
this.middleware.addMiddleware(myMiddleware);
```

Middleware personalizado do ExpressoTS:

```typescript
class CustomMiddleware extends ExpressoMiddleware {
    use(req: Request, res: Response, next: NextFunction): void | Promise<void> {
        // Do something
        next();
    }
}
```

```typescript
this.middleware.addMiddleware(new CustomMiddleware());
```

## Middleware por Rota

Middlewares podem ser adicionados por rota na classe `App` através do método `this.middleware.addMiddleware()`. Você pode adicionar qualquer middleware do Registro NPM, middleware personalizado do Expressjs ou um middleware personalizado do ExpressoTS.

```typescript
this.middleware.addMiddleware({ path: "/api", middlewares: [] });
```

:::info
Cada rota pode ter múltiplos middlewares.
:::

Ou você pode adicionar um middleware a uma rota específica na classe `Controller` através dos decoradores `@controller()` e/ou `http Method`.

```typescript
@controller("/")
export class AppController {
    @Post("", express.json())
    execute() {
        return "Hello World";
    }
}
```

Se você quiser aplicar um middleware a todas as rotas sob um controlador específico, você pode adicioná-lo ao decorador `@controller()`.

```typescript
@controller("/app", express.json())
export class AppController {
    @Post("/create")
    createApp() {
        return "Create App";
    }

    @Patch("/update")
    updateApp() {
        return "Update App";
    }
}
```

## Criando Middleware Personalizado do ExpressoTS

Para criar um middleware personalizado, você precisa estender a classe `ExpressoMiddleware` e implementar o método `use`.

```typescript
class CustomMiddleware extends ExpressoMiddleware {
    private isOn: boolean;

    constructor(isOn: boolean) {
        super();
        this.isOn = isOn;
    }

    use(req: Request, res: Response, next: NextFunction): void | Promise<void> {
        // Do something
        if (this.isOn) {
            next();
        } else {
            res.status(403).send("Forbidden");
        }
    }
}
```

Middleware personalizado permite que você passe parâmetros para o construtor e os use como opções no método use do seu middleware.

:::tip
Use o CLI do ExpressoTS para criar um scaffold de um middleware personalizado.
:::

Comando CLI para criar um scaffold de um middleware personalizado:

```bash
expressots g m <<middleware-name>>
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
