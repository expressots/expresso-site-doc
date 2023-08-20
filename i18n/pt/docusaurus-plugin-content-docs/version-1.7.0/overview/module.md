---
sidebar_position: 4
---

# Módulos

Um módulo de contêiner é uma coleção de serviços, no nosso caso mais especificamente `Controllers` e suas dependências que podem ser registrados e resolvidos pelo contêiner InversifyJS.

Um módulo de contêiner é uma classe que exporta um objeto Module do inversify, que é essencialmente um objeto de configuração que define as ligações entre serviços (no ExpressoTS, serviços são Controllers) e suas dependências. O objeto Module possui um método de ligação que permite definir ligações entre serviços e suas dependências.

Para entender completamente como você pode registrar suas classes, como casos de uso, entidades, provedores, repositórios, auxiliares, etc., leia a seção **[Injeção de dependência](di.md)**. Essencialmente, temos um grupo de decoradores que substitui o escopo padrão do Container.

## Module or container module

Com o ExpressoTS, você não precisa se preocupar em fazer ligações manualmente, criamos uma função auxiliar chamada `CreateModule` que recebe um array de controladores e retorna um módulo com todos os controladores registrados e suas dependências injetadas.

## Container do módulo

Um módulo de contêiner é tipicamente usado para agrupar controladores relacionados e suas dependências, tornando mais fácil registrá-los e gerenciá-los no contêiner. Por exemplo, você pode criar um módulo de contêiner que define os bindings para um conjunto de controladores de acesso a dados, ou um conjunto de serviços de lógica de negócios.

Uma vez que um módulo de contêiner tenha sido definido, ele pode ser carregado no `AppContainer` usando o método `appContainer.create()`, que recebe a classe do módulo de contêiner como argumento. Consulte a seção **[Contêiner do aplicativo](app-container.md)** para obter mais informações. Isso registrará todos os serviços e dependências definidos no módulo no contêiner, tornando-os disponíveis para injeção em outras partes da sua aplicação.

Módulos de contêiner podem ser uma ferramenta poderosa para gerenciar grandes aplicações com gráficos de dependência complexos, pois permitem que você organize seu código em partes menores e mais gerenciáveis e tornem mais fácil o entendimento das relações entre diferentes partes da aplicação.

Um módulo de contêiner, ou simplesmente um módulo ExpressoTS, é definido no exemplo abaixo:

```typescript
const AppModule = CreateModule([
    AppController,
]);

export { AppModule };
```

## Escopo do módulo

Muito semelhante ao `Container`, os desenvolvedores podem definir o escopo de um módulo usando a mesma enumeração `BindingScopeEnum`. Aqui estão os valores de enumeração:

- `BindingScopeEnum.Singleton` - A dependência será criada uma vez e será compartilhada entre todas as solicitações.
- `BindingScopeEnum.Request` - A dependência será criada uma vez por solicitação.
- `BindingScopeEnum.Transient` - A dependência será criada toda vez que for solicitada.

Ao criar um módulo, você pode passar o escopo como um segundo argumento para a função `CreateModule`. É opcional e, se não for fornecido, o escopo padrão é obtido do `AppContainer`, que é `RequestScope`.

```typescript
const AppModule = CreateModule(
    [
        AppController,
    ],
    BindingScopeEnum.Singleton,
);
```

Este é um recurso muito útil, pois permite que os desenvolvedores criem módulos com diferentes escopos. Por exemplo, você pode criar um módulo com o escopo `Singleton` e outro módulo com o escopo `Request`. Isso é muito útil quando você tem um módulo que contém serviços que precisam ser compartilhados entre todas as solicitações e outro módulo que contém serviços que precisam ser criados uma vez por solicitação.

A precedência do escopo é definida da seguinte forma: escopo `AppContainer` > escopo `Module` > escopo `Controller`.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas
