---
sidebar_position: 3
---

# Controladores

Os controladores são responsáveis por manipular solicitações recebidas e retornar respostas ao cliente.

-   Para informações sobre `BaseController`, veja [BaseController](../overview/controller.md#classe-basecontroller).
-   Para informações sobre decoradores HTTP e de parâmetros, veja [Decoradores HTTP e de Parâmetros](../overview/decorators.md).
-   Os controladores utilizam DTOs para validar o corpo da solicitação, parâmetros de consulta e parâmetros de rota. Veja [DTOs](../overview/controller#padrão-dto) para mais informações.

```typescript
@controller("/")
export class UserGetController extends BaseController {
    constructor() {
        super();
    }

    @Get("/")
    execute() {
        return "Getting a user...";
    }
}
```

Para criar um controlador, você precisa criar uma classe e decorá-la com o decorador `@controller`. O decorador `@controller` recebe dois parâmetros:

-   `path` é o caminho do controlador. (Obrigatório)
-   `middlewares` é um array de middlewares. (Opcional)

```typescript
@controller("/", express.json(), express.urlencoded({ extended: true }))
```

:::info
Definir middlewares no controlador será aplicado a todas as rotas do controlador.
:::

## Exemplo de um Controlador com Múltiplas Rotas

```typescript
@controller("/user")
export class UserController extends BaseController {
    constructor() {
        super();
    }

    @Get("/")
    get() {
        return "Getting a user...";
    }

    @Post("/create")
    create() {
        return "Creating a user...";
    }
}
```

## Exemplo de Rota com Múltiplos Middlewares

```typescript
@Get("app", express.json(), express.urlencoded({ extended: true }))
```

:::info
Definir middlewares na rota será aplicado apenas à rota específica.
:::

:::info
O caminho da rota do controlador será concatenado com o caminho da rota individual.

```typescript
@controller("/user")
  @Post("/create")
```

A rota final é /user/create.
:::

## Injetando Dependências no Construtor do Controlador

Você pode injetar dependências no construtor do controlador da seguinte forma:

```typescript
@controller("/")
class AppController extends BaseController {
    constructor(private yourProvider: YourProvider) {
        super();
    }

    @Get("/")
    get() {
        this.yourProvider.doSomething();
        return "Hello ExpressoTS!";
    }
}
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
