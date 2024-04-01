---
sidebar_position: 2
---

# Módulos

Os módulos são responsáveis por registrar controladores. Veja Módulos para mais informações.

## Criando um Módulo

O decorador `CreateModule` recebe dois parâmetros:

- `controllers` é um array de controladores. (Obrigatório)
- `scope` é o escopo de vinculação. Use `BindingScopeEnum` para definir o escopo (Request, Singleton, Transient). (Opcional)

:::info
O escopo padrão é `BindingScopeEnum.Request` herdado do `AppContainer`.
:::

```typescript
export const UserModule = CreateModule([], BindingScopeEnum.Request);
```

Exemplo de um módulo com controladores:

```typescript
export const UserModule = CreateModule([
  UserCreateController,
  UserDeleteController,
  UserUpdateController,
  UserFindController,
  UserFindallController,
]);
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