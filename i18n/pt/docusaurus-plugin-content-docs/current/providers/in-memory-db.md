---
sidebar_position: 2
---

# BD em Memória

O BD em Memória é um provedor que usa um banco de dados simples em memória para armazenar dados. É uma classe injetada no sistema de injeção de dependência do ExpressoTS como um singleton.

Essa classe gerencia tabelas, representadas por pares chave-valor, onde a chave é o nome da tabela e o valor é um array de entidades.

A classe InMemoryDB fornece uma forma simples e eficiente de simular um banco de dados totalmente em memória, o que pode ser particularmente útil para testes e desenvolvimento rápido onde um banco de dados completo pode ser excessivo.

## Inspetor de BD

Outra característica interessante adicionada à classe InMemoryDB é a capacidade de imprimir tabelas no console usando console.table. Esta característica é particularmente útil para fins de depuração e teste. Também pode ser usada para inspecionar rapidamente o conteúdo de uma tabela.

O conteúdo da tabela será impresso no console sempre que o repositório for utilizado por qualquer endpoint que tenha operações de leitura ou gravação no banco de dados.

Aqui está uma imagem mostrando a saída no console do InMemoryDB quando criamos um novo usuário:

![Application Overview](../overview/img/inMemoryDB.png)

:::info
O Inspetor de BD está ativado por padrão. Assim que você criar uma nova entidade e estender a classe BaseRepository, o InMemoryDB imprimirá a tabela no console.
:::

## Definição da Classe

Explicação detalhada da definição da classe InMemoryDB.

```typescript
@provideSingleton(InMemoryDB)
class InMemoryDB {
  private tables: Record<string, IEntity[]> = {};
  // Definições de métodos ...
}
```

Este decorador indica que a classe InMemoryDB é um Singleton dentro do sistema de injeção de dependência.

```typescript
@provideSingleton(InMemoryDB)
```

Propriedades da classe tables é uma propriedade privada que mantém as tabelas em memória. Cada tabela é um par chave-valor onde a chave é o nome da tabela, e o valor é um array de entidades (IEntity[]).

```typescript
private tables: Record<string, IEntity[]> = {};
```

## Métodos da Classe

A classe InMemoryDB fornece os seguintes métodos:

### Método Get Table

```typescript
getTable(tableName: string): IEntity[]
```

Parâmetros

- tableName (string): O nome da tabela a ser recuperada.
- Retorna: IEntity[]: Um array de entidades armazenadas na tabela especificada.
- Descrição: Recupera uma tabela pelo nome do banco de dados em memória. Se a tabela não existir, inicializa uma tabela vazia.

### Método Show Tables

```typescript
showTables(): void
```

Descrição: Imprime uma lista de todas as tabelas existentes no banco de dados em memória na saída padrão. Se não existirem tabelas, ele exibe "Nenhuma tabela existe".

### Método Print Table

```typescript
printTable(tableName: string): void
```

Parâmetros

- tableName (string): O nome da tabela cujos registros devem ser impressos.
- Descrição: Imprime todos os registros em uma tabela específica no console usando console.table. Se a tabela não existir ou estiver vazia, notifica o usuário pela saída padrão.

:::info
No modelo opinativo, o InMemoryDB já está implementado na classe BaseRepository. Você não precisa usá-lo diretamente.
:::

## Como Estender BaseRepository

Aqui está um trecho de código que mostra como estender a classe BaseRepository para implementar um repositório personalizado.

```typescript
@provide(UserRepository)
class UserRepository extends BaseRepository<User> {
  constructor() {
    super("users");
  }
}
```

A classe UserRepository é um repositório especializado voltado para o gerenciamento de entidades de usuário. Ela estende a classe genérica BaseRepository e define seu nome de tabela como "users" durante a construção. Esta classe faz parte do sistema de injeção de dependência e é marcada pelo decorador @provide.

Qualquer método personalizado pode ser adicionado à classe UserRepository. Por exemplo, o seguinte trecho de código mostra como implementar um método findByEmail que procura um usuário por e-mail.

```typescript
@provide(UserRepository)
class UserRepository extends BaseRepository<User> {
  constructor() {
    super("users");
  }

  // Método personalizado implementado apenas para o UserRepository
  findByEmail(email: string): User | null {
    const user = this.table.find((item) => item.email === email);
    return user || null;
  }
}
```

:::caution SPOILER ALERT
No futuro, planejamos estender o padrão de repositório para suportar vários bancos de dados, todos facilmente montáveis através do nosso CLI
:::

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas
