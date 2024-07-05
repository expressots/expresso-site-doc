---
sidebar_position: 3
---

# Banco de Dados na Memória

O Banco de Dados na Memória (In Memory DB) é um provedor que utiliza um banco de dados simples em memória para armazenar dados. É uma classe que pode ser registrada no sistema de injeção de dependência do ExpressoTS como um singleton.

```typescript
this.provider.register(InMemoryDB, "Singleton");
```

A classe InMemoryDB oferece uma maneira simples e eficiente de simular um banco de dados inteiramente na memória, o que pode ser particularmente útil para testes e desenvolvimento rápido, onde um banco de dados completo pode ser excessivo.

## Inspetor de BD

Outra funcionalidade interessante adicionada à classe InMemoryDB é a capacidade de imprimir tabelas no console usando console.table. Esta funcionalidade é especialmente útil para fins de depuração e teste. Também pode ser usada para inspecionar rapidamente o conteúdo de uma tabela.

O conteúdo da tabela será impresso no console toda vez que o repositório for usado por qualquer endpoint que tenha operações de leitura ou escrita no banco de dados.

Aqui está uma imagem mostrando a saída no console do InMemoryDB quando criamos um novo usuário:

![Application Overview](../overview/img/inMemoryDB.png)

:::info
O Inspetor de BD está ativado por padrão. Assim que você criar uma nova entidade e estender a classe BaseRepository, o InMemoryDB imprimirá a tabela no console.
:::

## Como Usar o InMemoryDB

Para usar a classe InMemoryDB, você precisa importá-la do pacote expressots e registrá-la como um singleton no sistema de injeção de dependência. Aqui está um exemplo de como fazer isso em uma classe de serviço:

### Registrar InMemoryDB

```typescript
export class App extends AppExpress {
    private middleware: IMiddleware;
    private provider: ProviderManager;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
        this.provider = container.get(ProviderManager);
    }

    protected configureServices(): void {
        this.provider.register(InMemoryDB, "Singleton");
    }

    protected postServerInitialization(): void {}

    protected serverShutdown(): void {}
}
```

Ao registrar a classe `InMemoryDB`, você pode especificar o escopo como string ou usando o `BindingScopeEnum`.

### Defina sua Entidade

```typescript
@provide(UserEntity)
export class UserEntity {
    id: string;
    name: string;
    email: string;

    constructor() {
        this.id = randomUUID();
    }
}
```

### Crie o Padrao de Repositorio

O repositório é uma classe que estende a classe BaseRepository e é usada para gerenciar entidades de um tipo específico. A classe do repositório faz parte do sistema de injeção de dependência e é marcada pelo decorador @provide.

```typescript
@provide(UserRepository)
export class UserRepository extends BaseRepository<UserEntity> {
    constructor() {
        super("users");
    }
}
```

Na classe acima, estamos criando um repositório para a classe UserEntity. O repositório é inicializado com o nome da tabela users no construtor.

Você também pode definir métodos personalizados para o repositório de usuários.

```typescript
@provide(UserRepository)
class UserRepository extends BaseRepository<UserEntity> {
    constructor() {
        super("users");
    }

    // Custom method implemented for the UserRepository only
    findByEmail(email: string): User | null {
        const user = this.table.find((item) => item.email === email);
        return user || null;
    }
}
```

### Usando o Repositório

Você pode injetar o repositório no construtor ou via injeção de propriedade.

Injeção de Propriedade:

```typescript
@provide(UserCreateUseCase)
export class UserCreateUseCase {
    @inject(UserRepository)
    private userRepo: UserRepository;

    @inject(UserEntity)
    private userEntity: UserEntity;

    execute(payload: IUserCreateRequestDTO): IUserCreateResponseDTO {
        this.userEntity.name = payload.name;
        this.userEntity.email = payload.email;

        this.userRepo.create(this.userEntity);

        return {
            id: this.userEntity.id,
            name: this.userEntity.name,
            email: this.userEntity.email,
        };
    }
}
```

Injeção no Construtor:

```typescript
@provide(UserCreateUseCase)
export class UserCreateUseCase {
    constructor(private userEntity: UserEntity, private userRepo: UserRepository) {}

    execute(payload: IUserCreateRequestDTO): IUserCreateResponseDTO {
        this.userEntity.name = payload.name;
        this.userEntity.email = payload.email;

        this.userRepo.create(this.userEntity);

        return {
            id: this.userEntity.id,
            name: this.userEntity.name,
            email: this.userEntity.email,
        };
    }
}
```

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
