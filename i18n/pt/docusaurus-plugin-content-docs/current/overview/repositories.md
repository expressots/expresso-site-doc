---
sidebar_position: 9
---

# Repositórios


O padrão de repositório no ExpressoTS fornece uma camada de abstração para o acesso a dados, encapsulando operações CRUD (Criar, Ler, Atualizar, Deletar) dentro de classes de repositório. Esses repositórios atuam como intermediários entre a lógica de negócios e as camadas de mapeamento de dados, utilizando ORMs como **[TypeORM](https://typeorm.io/), [Prisma](https://www.prisma.io/) ou [Sequelize](https://sequelize.org/),** para interagir com o banco de dados.

## Entendendo o padrão de repositório

Um padrão de repositório é uma estratégia de design que abstrai a persistência de dados, permitindo que a lógica de negócios seja agnóstica em relação à tecnologia ou ao esquema do banco de dados subjacente. O ExpressoTS utiliza esse padrão para facilitar a manutenibilidade e escalabilidade.

## Objetivos e benefícios

O principal objetivo do padrão de repositório é separar a lógica de negócios da lógica de acesso a dados. Isso permite que os desenvolvedores escrevam código mais focado nos requisitos de negócios da aplicação, em vez dos detalhes técnicos de como os dados são armazenados e acessados.

-   **Separação de Preocupações**: Desacopla a lógica de negócios da lógica de acesso a dados, permitindo que os desenvolvedores se concentrem nas regras de negócio sem se preocupar com operações de banco de dados.
-   **Manutenibilidade**: Centraliza a lógica de acesso a dados dentro dos repositórios, simplificando a manutenção e atualizações das implementações de armazenamento de dados.
-   **Abstração**: Esconde as complexidades da camada de dados do resto da aplicação, fornecendo uma interface simplificada e consistente para operações de dados.
-   **Testabilidade**: Facilita os testes ao permitir o uso de repositórios falsos ou bancos de dados em memória para simular a persistência de dados.

## Exemplo de implementação do padrão de repositório

No seguinte exemplo, criaremos uma implementação simples do padrão de repositório usando TypeScript. Definiremos uma interface de repositório base e uma classe, bem como uma classe de repositório concreta para uma entidade User.

### Interface do base repositório

```typescript
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
class BaseRepository<T> implements IBaseRepository<T> {
    // Implemente os métodos de interface aqui
}
```

### Classe de repositório específica

```typescript
@provide(UserRepository)
class UserRepository extends BaseRepository<User> {}
```
O exemplo acima demonstra a simplicidade de criar um repositório base que pode ser estendido para entidades específicas como `User`.

## Repositórios vs provedores

Enquanto os repositórios focam na interação com dados, os provedores no ExpressoTS tipicamente oferecem funcionalidades como validação de ambiente ou logging. Manter repositórios e provedores distintos garante uma separação clara e adere ao princípio da responsabilidade única.

:::info
No ExpressoTS, os repositórios são armazenados dentro de uma pasta dedicada "repositories", distinguindo-os da pasta "providers". Essa escolha estrutural enfatiza seus papéis distintos e facilita uma base de código modular.
:::

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
