---
sidebar_position: 6
---

# Utilitários ExpressoTS

## Códigos de Status

É um enum que contém todos os códigos de status HTTP.

```typescript
StatusCode.OK;
```

## Relatando Erros

Para mais informações sobre Tratamento de Erros, veja [Tratamento de Erros](../overview/error-handling.md).

Aqui estão os parâmetros do método `error`:

- error: Uma instância de Error ou uma string que descreve o erro.
- statusCode: O código de status HTTP associado ao erro (padrão é 500).
- service: O nome do serviço associado ao erro.
- @throws: Um objeto do tipo personalizado AppError, que inclui detalhes sobre o erro.

```typescript
@provide(YourUseCase)
export class YourUseUseCase {
  constructor(private report: Report) {}

  execute() {
    this.report.error("Something went wrong!");
    return "Hello ExpressoTS!";
  }
}
```

## Registro

Logger é uma classe que fornece um conjunto de métodos para registrar mensagens usando módulos nativos do node para melhor desempenho.

Logger recebe dois parâmetros:

- message: A mensagem a ser registrada.
- module: O nome do serviço associado ao log.

```typescript
export class YourUseUseCase {
  constructor(private log: Logger) {}

  execute() {
    this.log.info("Testing log message", "YourUseUseCase");
    return "Hello ExpressoTS!";
  }
}
```

Existem 4 métodos disponíveis:

- **info**: Registra uma mensagem informativa.
- **warn**: Registra uma mensagem de aviso.
- **error**: Registra uma mensagem de erro.
- **msg**: Registra uma mensagem de log.

## Definindo o Prefixo Global de Rotas

Você pode definir um prefixo global para todas as rotas na sua aplicação. Isso é útil quando você quer versionar suas APIs.

### Template Não Opinativo

Você pode definir o prefixo global no método `bootstrap` da sua aplicação.

```typescript
async function bootstrap() {
  const app = await AppFactory.create(container, []);

  app.setGlobalRoutePrefix("/api");

  await app.listen(3000, ServerEnvironment.Development);
}
```

### Template Opinativo

Você pode definir o prefixo global no método `configureServices` da sua aplicação.


```typescript
@provide(App)
class App extends AppExpress {
  private middleware: IMiddleware;
  private provider: IProvider;

  constructor() {
    super();
    this.middleware = container.get<IMiddleware>(Middleware);
    this.provider = container.get<IProvider>(Provider);
  }

  protected configureServices(): void {
    this.setGlobalRoutePrefix("/v1");

    this.middleware.addBodyParser();
    this.middleware.setErrorHandler();
  }

  protected postServerInitialization(): void {
    if (this.isDevelopment()) {
      this.provider.envValidator.checkAll();
    }
  }

  protected serverShutdown(): void {}
}
```

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas