---
sidebar_position: 4
---

# Casos de Uso

Casos de uso são a implementação da lógica de negócios da sua aplicação. Para mais informações sobre casos de uso, veja [Casos de Uso](../overview/usecase.md).

```typescript
@provide(YourUseCase)
export class YourUseUseCase {
  execute() {
    return "Hello ExpressoTS!";
  }
}
```

## Injetando Dependências no Construtor de Casos de Uso

```typescript
@provide(YourUseCase)
export class YourUseUseCase {
  constructor(private yourProvider: YourProvider) {}

  execute() {
    this.yourProvider.doSomething();
    return "Hello ExpressoTS!";
  }
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