---
sidebar_position: 4
---

# Módulos

Módulos, ou módulos de contêiner no ExpressoTS, são agregações de serviços — principalmente Controladores e suas dependências — que são gerenciados pelo contêiner do framework. Esses módulos facilitam a organização, registro e resolução de vários componentes da aplicação dentro do ecossistema ExpressoTS.

## Entendendo os módulos

Um módulo exporta um objeto de Módulo Inversify, servindo como uma entidade de configuração para as vinculações de controladores e suas dependências. Ele utiliza um método bind para estabelecer relações entre serviços e suas dependências. Para entender o registro de classes como casos de uso, entidades, provedores, repositórios e mais, mergulhe na [seção de Injeção de Dependência](./di.md)**, que elabora sobre decoradores influenciando o escopo padrão do contêiner.

## Simplificando vinculações com `CreateModule`

O ExpressoTS simplifica o processo de vinculação por meio da função `CreateModule`. Esta utilidade registra automaticamente controladores, injetando suas dependências sem necessidade de vinculação manual:

```typescript
export const AppModule: ContainerModule = CreateModule([AppController]);
```
## Definindo o escopo do módulo

Muito semelhante ao `Container`, os desenvolvedores podem definir o escopo de um módulo usando o mesmo enum `BindingScopeEnum`. Aqui estão os valores do enum:

-   `BindingScopeEnum.Singleton` - A dependência será criada uma vez e será compartilhada por todas as solicitações.
-   `BindingScopeEnum.Request` - A dependência será criada uma vez por solicitação.
-   `BindingScopeEnum.Transient` - A dependência será criada toda vez que for solicitada.

Ao criar um módulo, você pode passar o escopo como um segundo argumento para a função `CreateModule`. É opcional e, se não fornecido, o escopo padrão é adquirido do `AppContainer`, que é `RequestScope`.

```typescript
export const AppModule: ContainerModule = CreateModule([AppController], BindingScopeEnum.Singleton);
```
Essa flexibilidade permite estratégias de gerenciamento de dependências sob medida, como combinar módulos de escopo Singleton para serviços compartilhados com módulos de escopo de Request para serviços específicos da solicitação.

## Precedência de escopo

A hierarquia de precedência de escopo é `AppContainer` > `Module` > `Controller`, garantindo uma abordagem versátil e hierárquica para o gerenciamento de escopo de dependência. Esta estrutura em camadas permite controle preciso sobre a instanciação e o ciclo de vida do serviço em toda a aplicação.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas
