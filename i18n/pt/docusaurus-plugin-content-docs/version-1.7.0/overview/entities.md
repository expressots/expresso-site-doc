---
sidebar_position: 9
---

# Entidades

As entidades são os componentes principais de uma aplicação ExpressoTS. Elas são os objetos que são usados para representar os dados que serão manipulados pela aplicação.

Se uma entidade mudar, provavelmente os casos de uso e controladores também mudarão. Isso ocorre porque os casos de uso e controladores são responsáveis por manipular os dados representados pelas entidades.

## Exemplo de entidade

Um exemplo simples de uma entidade User e suas propriedades:

```typescript
@provide(User)
class User {
  private id: string;
  public name: string;
  public email: string;

  constructor() {
    this.id = uuidv4();
  }

  get Id(): string {
    return this.id;
  }
}
```

:::tip
Lembre-se que você deve ter um arquivo por entidade
:::

## Entidades e encapsulamento

Esta seção é dedicada a promover uma reflexão quando se pensa em entidades. Por anos, nos foi dito que as propriedades das entidades ou classes devem ser encapsuladas, seus métodos devem abstrair a implementação interna e expor apenas as informações necessárias para o mundo externo. Esta é uma boa prática ao pensar no Paradigma de Programação Orientada a Objetos, no entanto, nem sempre é a melhor abordagem.

Se você pensar sobre isso, classes ou entidades, qualquer que seja o nome que você dê a elas, são apenas uma maneira de representar dados. Elas são apenas uma maneira de agrupar dados juntos. Com isso em mente, as classes ou entidades se tornam muito mais simples de manter e entender, pois não contêm nenhuma lógica.

Esta forma de pensar é chamada de **[Modelo de Domínio Anêmico](https://martinfowler.com/bliki/AnemicDomainModel.html)** e é um tópico muito controverso. Não é o objetivo desta documentação discutir este tópico, mas é importante mencioná-lo, já que é um conceito muito importante quando se pensa em ExpressoTS.

**Diga adeus as classes God, seja bemvindo simples entidades, seja bemvindo o dado.**

## Injeção de entidade

Se sua entidade tiver dependências, você pode injetá-las usando o decorador `@inject`.

```typescript
@provide(User)
class User {
    
  constructor(@inject("logger") private logger: Logger) {}
}
```

## Evite isso

Evite marcar construtores com parâmetros primitivos como injetáveis. Isso ocorre porque pode ser difícil para o contêiner de DI inferir quais valores fornecer para esses parâmetros. Aqui está um exemplo do que você deve evitar:

```typescript
@provide(User)
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

:::caution
Em muitos sistemas de injeção de dependência (DI), incluindo InversifyJS, o contêiner de DI é responsável por construir objetos e injetar dependências. Quando um construtor de classe contém parâmetros primitivos, pode ser difícil para o contêiner de DI inferir quais valores fornecer para esses parâmetros. Isso ocorre porque os valores primitivos (como strings, números e booleanos) não carregam nenhum significado semântico inerente que o contêiner possa entender.
:::

### Razões para evitar parâmetro primitivo em classes injetáveis

Aqui estão algumas das razões pelas quais construtores com parâmetros primitivos podem ser problemáticos em DI:

- Ambigüidade: Se uma classe tiver um construtor que requer tipos primitivos, o contêiner DI não saberá quais valores injetar. Por exemplo, se uma classe requer um número em seu construtor, o container DI não sabe o que esse número representa e qual valor ele deve ter.

- Inflexibilidade: Um valor primitivo no construtor implica que o valor é uma parte fixa da classe. No entanto, a DI é frequentemente usada para gerenciar partes intercambiáveis de um aplicativo (por exemplo, diferentes implementações de uma interface).

- Não descritivo: valores primitivos geralmente não são descritivos e podem levar a códigos confusos. Por exemplo, um construtor que usa dois parâmetros de string pode levantar questões como: O que essas strings representam? Existem formatos ou restrições específicas nessas strings?

## Injeção adequada de entidade

Se você deseja injetar uma entidade em outra classe, deve repensar seu design. Se você realmente precisa de parâmetros primitivos em seu construtor, use fábricas para criar suas entidades ou o padrão Repository.

Aqui está um exemplo de uma fábrica:

```typescript
@provide(User)
class User implements IEntity {
  public id: string;
  public name!: string;
  public email!: string;

  constructor() {
    this.id = randomUUID();
  }
}

interface IUserFactory {
  create(name: string, email: string): User;
}

@provide(UserFactory)
class UserFactory implements IUserFactory {
  create(name: string, email: string): User {
    const user = new User();
    user.name = name;
    user.email = email;
    return user;
  }
}

export { User, UserFactory };

```

Agora `UserFactory` pode ser facilmente injetado em outras classes.

Como mencionado acima, existem várias outras abordagens, desde que você permaneça forte 😁 de não usar construtores com parâmetros primitivos nas classes que planeja injetar.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas
