---
sidebar_position: 8
---

# Repositórios

No Expresso TS, uma classe de repositório geralmente inclui métodos como create, update, find, findOne e delete, que correspondem a operações comuns de CRUD (Create, Read, Update, Delete) no armazenamento de dados. Esses métodos podem ser implementados usando uma biblioteca de banco de dados ou uma ferramenta de ORM (Object-Relational Mapping) como o **[TypeORM](https://typeorm.io/), [Prisma](https://www.prisma.io/), [Sequelize](https://sequelize.org/),** etc.

## O padrão de repositório

O padrão repository é um padrão de design comumente usado no desenvolvimento de software que fornece uma maneira de abstrair a camada de persistência de dados de uma aplicação. Em TypeScript, esse padrão pode ser implementado usando classes que representam repositórios, que são responsáveis por recuperar, armazenar, atualizar e excluir dados de uma fonte de dados, como um banco de dados.

Nós oferecemos um exemplo de como implementar o padrão de repositório no modelo de projeto do Expresso TS. Você pode encontrá-lo diretamente no [templates](https://github.com/expressots/expressots/tree/main/templates), pasta template do ExpressoTS.

## Objetivo do padrão de repositório

O objetivo principal do padrão repository é separar a lógica de negócio da lógica de acesso aos dados, permitindo que os desenvolvedores escrevam código mais focado nos requisitos de negócio da aplicação, em vez dos detalhes técnicos de como os dados são armazenados e acessados.

## Benefícios de usar o padrão de repositório

Ao usar um repositório, a aplicação pode se beneficiar de várias vantagens, tais como:

- Centralização da lógica de acesso a dados: toda a lógica de acesso a dados é contida dentro do repositório, tornando mais fácil manter e alterar a implementação do armazenamento de dados sem afetar o resto da aplicação.

- Abstração dos detalhes do armazenamento de dados: o repositório fornece uma camada de abstração que oculta os detalhes de como os dados são armazenados e acessados, permitindo que a aplicação trabalhe com dados de uma forma mais abstrata e consistente.

- Separação de preocupações: o repositório separa a lógica de negócios da lógica de acesso a dados, tornando o código mais fácil de ler, testar e manter.

- Melhoria na testabilidade: o repositório pode ser facilmente simulado ou substituído em testes de unidade, permitindo testar com mais profundidade a lógica de negócios sem precisar se conectar a um armazenamento de dados real.

- Em geral, o padrão repository é uma ferramenta poderosa que pode ajudar os desenvolvedores a construir aplicativos TypeScript escaláveis e fáceis de manter que estão mais focados nos requisitos de negócios e menos nos detalhes de implementação técnica.

Ao usar o padrão repository, podemos facilmente trocar o mecanismo de armazenamento de dados subjacente sem afetar o restante do código da aplicação. Por exemplo, podemos mudar de um banco de dados relacional para um banco de dados NoSQL, ou até mesmo para um mecanismo de armazenamento completamente diferente, como uma API da web, com alterações mínimas no restante do código da aplicação. Além disso, o padrão repository pode tornar mais fácil testar a aplicação, já que podemos usar repositórios simulados para simular o armazenamento de dados para fins de teste.

## Exemplo

Oferecemos um exemplo de implementação do padrão Repository no template opinativo do Expresso TS.

:::info
No Expresso TS, implementamos o padrão repository em uma pasta específica chamada "repositories", que é separada da pasta "provider" intencionalmente, embora possa ser considerada como um tipo de provider. Fizemos isso para dar mais ênfase ao padrão repository e deixar claro para os desenvolvedores que ele é um desacoplamento importante que o desenvolvimento da aplicação pode se beneficiar.
:::

### Interface do base repositório

```typescript
interface IEntity {
  Id: string;
}

interface IBaseRepository<T> {
  create(item: T): T | null;
  update(item: T): T | null;
  delete(id: string): boolean;
  find(id: string): T | null;
  findAll(): T[];
}
```

### Classe base repositório

```typescript
@provide(BaseRepository)
class BaseRepository<T extends IEntity> implements IBaseRepository<T> {
  private readonly USERDB: T[] = [];

  create(item: T): T | null {
    this.DB.push(item);
    return item;
  }

  update(item: T) {
    this.DB.push(item);
    return item;
  }

  delete(id: string): boolean {
    const index: number = this.DB.findIndex((item) => item.Id === id);

    if (index != -1) {
      this.DB.splice(index, 1);
      return true;
    }
    return false;
  }

  find(id: string): T | null {
    const user = this.DB.find((item) => item.Id === id);
    return user || null;
  }

  findAll(): T[] {
    return this.DB;
  }
}
```

---

## Apoie o projeto

Expresso TS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas