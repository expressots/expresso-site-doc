---
sidebar_position: 3
---

# App Container

O ExpressoTS usa **[InversifyJS](https://inversify.io/)** como seu ioC (Inversão de Controle) container, pois é uma ferramenta poderosa para gerenciar injeção de dependência. O Inversify é um container com suporte a tipos que pode ser utilizado para gerenciar a instância e resolução de objetos, bem como o gerenciamento do ciclo de vida deles.

O contêiner fornece um local central para gerenciar dependências e criar objetos que dependem de outros objetos. Quando uma classe é registrada no contêiner, suas dependências são automaticamente resolvidas e injetadas em seu construtor quando ela é instanciada. Isso permite a criação de gráficos de objetos complexos com um mínimo de código boilerplate.

Aproveitando o InversifyJS, criamos um wrapper para reduzir a complexidade sobre como os controladores, casos de uso e provedores são injetados no contêiner de aplicativos. O wrapper é chamado de `AppContainer` e é responsável por registrar todos os módulos da aplicação no contêiner.

## Creating the container

Ao criar o container da aplicação é possível definir o escopo padrão do container. O escopo padrão é `RequestScope`, o que significa que todas as dependências serão criadas uma vez por solicitação. Esse é o escopo comum para a maioria dos aplicativos da Web usados em outras estruturas, como Spring Boot ou .NET Core.

Aqui está um exemplo de como criar um container:

```typescript
const appContainer = new AppContainer();

const container = appContainer.create([
    // Registrar todos os módulos
]);
```

## Defining the container scope

Conforme mencionado acima, se o `defaultScope` não for fornecido, o padrão será definido como RequestScope. No entanto, é possível alterar o escopo padrão passando o `defaultScope` como um segundo argumento para a injeção do módulo. O BindingScopeEnum é uma enumeração que contém os seguintes valores:

- `BindingScopeEnum.Singleton` - A dependência será criada uma vez e será compartilhada entre todas as solicitações.
- `BindingScopeEnum.Request` - A dependência será criada uma vez por solicitação.
- `BindingScopeEnum.Transient` - A dependência será criada toda vez que for solicitada.

```typescript
const appContainer = new AppContainer();

const container = appContainer.create(
    [
        // Registrar todos os módulos
    ],
    BindingScopeEnum.Singleton,
);
```

:::tip
Se você não passar o `defaultScope` como um segundo argumento, o escopo padrão será definido como `RequestScope`.
:::

## Registering modules

A classe `AppContainer` tem um método `create` que recebe um array de módulos e retorna o contêiner com todos os módulos registrados. O contêiner aqui criado é o mesmo contêiner usado pela classe `Application` para inicializar o servidor.

Depois que o contêiner é criado, os desenvolvedores podem registrar **[modules](./module.md)** no contêiner:

```typescript
// Cria novo container
const appContainer = new AppContainer();

const container = appContainer.create([
    // Registrar todos os módulos
    UserModule,
    PaymentModule,
    ProductModule
]);

export default container;
```

A razão pela qual criamos a classe `AppContainer` é reduzir a complexidade de como o container é criado e fornecer uma maneira de registrar módulos sem muita configuração extra.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas