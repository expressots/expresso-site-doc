---
sidebar_position: 1
---
# Contêiner da Aplicação

O contêiner da aplicação é um contêiner de injeção de dependências. Veja Contêiner da Aplicação para mais informações.

```typescript
const appContainer = new AppContainer();

export const container: Container = appContainer.create([
    // Adicione seus módulos aqui
    AppModule,
]);
```

## Criando AppContainer

A classe `AppContainer` aceita um parâmetro opcional:

-   `defaultScope` é o escopo de vinculação padrão. Use `BindingScopeEnum` para definir o escopo padrão (Request, Singleton, Transient).
-   `skipBaseClassChecks` é um valor booleano que indica se o contêiner deve pular as verificações de classe base. Isso é útil quando você está usando classes abstratas como identificadores de vinculação ou está estendendo classes de bibliotecas de terceiros. Defina este valor como `true` para pular as verificações de classe base.
-   `autoBindInjectable` é um valor booleano que indica se o contêiner deve vincular automaticamente classes injetáveis. Defina este valor como `true` para vincular automaticamente classes injetáveis.

:::info
O escopo padrão é BindingScopeEnum.Request e skipBaseClassChecks é false.
:::

```typescript
const appContainer = new AppContainer({
    defaultScope: BindingScopeEnum.Request,
    skipBaseClassChecks: true,
    autoBindInjectable: false,
});
```
O `AppContainer` retorna uma instância de `AppContainer` que te dá acesso aos seguintes métodos:

-   `create()` cria o contêiner da aplicação.
-   Container é a instância do contêiner de injeção de dependências.
-   `getBindingDictionary()` retorna o mapa do dicionário de vinculação de classes injetadas no sistema de injeção de dependências.
-   `getContainerOptions()` retorna as opções do contêiner.

### Método Create

O método `create` recebe um parâmetro obrigatório (array de módulos);

```typescript
export const container: Container = appContainer.create([
    // Adicione seus módulos aqui
    AppModule,
    UserModule,
    ProductModule,
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