---
sidebar_position: 9
---

# Entidades

As entidades são os componentes principais de uma aplicação Expresso TS. Elas são os objetos que são usados para representar os dados que serão manipulados pela aplicação.

Se uma entidade mudar, provavelmente os casos de uso e controladores também mudarão. Isso ocorre porque os casos de uso e controladores são responsáveis por manipular os dados representados pelas entidades.

## Exemplo de entidade

Um exemplo simples de uma entidade User e suas propriedades:

```typescript
@provide(User)
class User {
  private id: string;
  public name: string;
  public email: string;

  constructor(name: string, email: string, @inject(Address) public address: Address) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
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

---

## Apoie o projeto

Expresso TS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas
