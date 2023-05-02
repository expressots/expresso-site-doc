---
sidebar_position: 13
---

# Gerenciamento de Error

Quando se trata de tratamento de erros em APIs TypeScript do Node.js, existem várias práticas recomendadas e abordagens que você pode seguir. O Expresso TS fornece uma maneira simples e fácil de lidar com erros.

- Nós usamos os códigos de status HTTP: HTTP **[status codes](./status-code.md)** são usados para indicar o estado de uma resposta. É importante usá-los de forma apropriada em sua API para indicar o sucesso ou falha de uma operação.

- Utilizamos um formato de erro consistente: defina um formato de erro consistente em toda a sua API para que os consumidores possam entender e lidar facilmente com os erros.

- Tratamos erros em middleware: funções middleware são uma ótima maneira de lidar com erros em um local centralizado.

- Utilizamos blocos try-catch: utilize blocos try-catch para lidar com erros síncronos em seu código. Se um erro ocorrer no bloco try, o bloco catch pode lidar com ele. Certifique-se de lançar o erro para que ele possa ser tratado pelo nosso middleware de tratamento de erro.

- Utilizamos tratamento de erros async/await: ao usar async/await, você pode usar blocos try-catch para lidar com erros síncronos em seu código. No entanto, você também precisa lidar com quaisquer erros assíncronos que possam ocorrer.

- Registramos erros: registrar erros é importante para depuração e monitoramento.

## Nossa solução

Nós desenvolvemos uma classe de erro padronizada chamada AppError que pode ajudar a fornecer mensagens de erro mais detalhadas e informativas que podem ser facilmente interpretadas e atuadas pelos desenvolvedores.

Além disso, a classe Report fornece um local centralizado para lançar e lidar com erros, o que pode simplificar o tratamento de erros em toda a aplicação.

A função errorHandler fornece um local centralizado para lidar com erros que ocorrem durante o processamento de solicitações. Ao definir um formato padrão de resposta de erro, ajuda a garantir consistência nas mensagens de erro que são retornadas aos clientes.

Essa abordagem é melhor usada em aplicativos com um grande código base ou lógica de negócios complexa, onde os erros podem ocorrer com frequência e precisam ser tratados de forma consistente em diferentes partes da aplicação.

### Classe AppError

A classe AppError estende a classe nativa Error, adicionando um código de status e uma propriedade de serviço.
Ela é projetada para lidar com erros específicos da aplicação com informações mais detalhadas.

```typescript
class AppError extends Error {

    public statusCode: number;
    public service: string;

    /**
     * Construtor da classe AppError.
     * @param statusCode - código de status HTTP.
     * @param message - Mensagem de erro.
     * @param service - Nome do serviço reportando o erro.
     */
    constructor(statusCode: number, message: string, service?: string) {
        super(message);

        this.statusCode = statusCode;
        this.service = service;
    }
}
```

### Método Report.Error

Report class is a utility class to manage and throw application-specific errors.
Report é uma classe utilitária para gerenciar e lançar erros específicos da aplicação.

```typescript
class Report {

    /**
     * O método Error é usado para lançar erros específicos da aplicação.
     * @param error - Instância da classe AppError
     */
    public static Error(error: AppError) {
    
        throw error;
    }
}
```

### Middleware

```typescript
function errorHandler(error: AppError, req: Request, res: Response, next: NextFunction): void {
    
    log(LogLevel.Error, error, error.service || "service-undefined");
    res.status(error.statusCode || StatusCode.InternalServerError).json({statusCode: error.statusCode, error: error.message});
}

export default errorHandler;
```

:::info
A função errorHandler() é uma função middleware de tratamento de erro personalizada do Express.
Ela registra o erro, define o código de status e envia uma resposta JSON contendo o código de status e a mensagem de erro.
:::

## Exemplo de uso

```typescript
 Report.Error(new AppError(StatusCode.BadRequest, "User already exists", "create-user-usecase"));
```

```typescript
@provide(CreateUserUseCase)
class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO | null {
        try {
            const { name, email } = data;

            const userAlreadyExists = await this.userRepository.findByEmail(email);

            if (userAlreadyExists) {
                Report.Error(
                    new AppError(
                        StatusCode.BadRequest,
                        "User already exists",
                        "create-user-usecase",
                    ),
                );
            }

            const user: User | null = this.userRepository.create(new User(name, email));

            let response: ICreateUserResponseDTO;

            if (user !== null) {
                response = {
                    id: user.Id,
                    name: user.name,
                    email: user.email,
                    status: "success",
                };
                return response;
            }

            return null;
        } catch (error: any) {
            throw error;
        }
    }
}
```

## Descrição dos componentes de tratamento de erro

| Object          | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| Report.Error    | Método estático para reportar erros conhecidos.                |
| AppError        | Classe que carrega o error stack, mensagem e código de erro.   |
| StatusCode      | Código de status HTTP                                          |
| Error Message   | Mensagem de erro                                               |
| Error Service   | Serviço que originou o erro, a ser utilizado no sistema de log |

---

## Apoie o projeto

Expresso TS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas