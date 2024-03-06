---
sidebar_position: 15
---

# Gerenciamento de Error

Quando se trata de tratamento de erros nas APIs TypeScript do Node.js, existem várias práticas recomendadas e abordagens que você pode seguir. O ExpressoTS fornece uma maneira simples e fácil de lidar com erros.

-   Usamos códigos de status HTTP apropriadamente: HTTP **[códigos de status](./status-code.md)** são usados para indicar o status de uma resposta. É importante utilizá-los adequadamente em sua API para indicar o sucesso ou falha de uma operação.

-   Usamos um formato de erro consistente: defina um formato de erro consistente em sua API para que os consumidores possam entender e lidar facilmente com os erros.

-   Lidamos com erros em middleware: as funções de middleware são uma ótima maneira de lidar com erros em um local centralizado.

-   Usamos blocos try-catch: Use blocos try-catch para lidar com erros síncronos em seu código. Se ocorrer um erro no bloco try, o bloco catch pode lidar com isso. Certifique-se de lançar o erro para que ele possa ser tratado por nosso middleware de tratamento de erros.

-   Usamos tratamento de erro async/await: ao usar async/await, você pode usar blocos try-catch para lidar com erros síncronos em seu código. No entanto, você também precisa lidar com quaisquer erros assíncronos que possam ocorrer.

-   Registramos erros: o registro de erros é importante para depuração e monitoramento.

## Nossa Abordagem

Desenvolvemos uma classe de relatório de erro padronizada chamada Report que oferece um local centralizado para lançar e tratar erros, o que pode simplificar o tratamento de erros em toda a aplicação.

Ao definir um formato de resposta de erro padrão, ajuda a garantir consistência nas mensagens de erro retornadas aos clientes.

Esta abordagem é melhor usada em aplicações com um grande código-base ou lógica de negócios complexa, onde erros podem ocorrer com frequência e precisam ser tratados de forma consistente em diferentes partes da aplicação.

### Report Error

A classe Report é uma classe de utilitário para gerenciar e lançar erros específicos do aplicativo.

```typescript
class Report {
    /**
     * O método Error pega uma instância de Error e a lança.
     * @param error - Uma instância de Error ou uma string que representa a mensagem de erro.
     * @param statusCode - O código de status HTTP do erro.
     * @param service - O serviço onde ocorreu o erro.
     */
    public static Error(error: Error | string, statusCode?: number, service?: string): void {}
}
```

Depois de relatar um erro conhecido por meio do método `Report.Error()`, o erro será tratado pelo middleware `defaultErrorHandler()` e será retornado ao cliente no formato json analisado.

### Middleware

Essa função de middleware é usada para manipular erros que ocorrem durante o processamento da solicitação.

```typescript
/**
 * errorHandler é uma função de middleware de tratamento de erros personalizada do Express.
 * Ela registra o erro, define o código de status e envia uma resposta JSON contendo o código de status e a mensagem de erro.
 * @param error - Uma instância de AppError contendo detalhes do erro.
 * @param req - O objeto de solicitação do Express.
 * @param res - O objeto de resposta do Express.
 * @param next - A função next do Express para passar o controle para a próxima função de middleware.
 */
function defaultErrorHandler(error: Error, req: Request, res: Response, next: NextFunction): void {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({ statusCode: error.statusCode, error: error.message });
    } else {
        res.status(StatusCode.InternalServerError).json({
            statusCode: StatusCode.InternalServerError,
            error: "Ocorreu um erro inesperado.",
        });
    }
}

export default defaultErrorHandler;
```

:::info
A função `defaultErrorHandler()` é uma função de middleware de tratamento de erros personalizada do Express.
Ela registra o erro, define o código de status e envia uma resposta JSON contendo o código de status e a mensagem de erro.
:::

## Exemplo de uso

```typescript
class FooClass {
    constructor(private report: Report) {}

    execute() {
        try {
            // fazer algo
        } catch (error: any) {
            this.report.Error(error, StatusCode.BadRequest, "seu-servico");
        }
    }
}
```

Use case example:

```typescript
@provide(CreateUserUseCase)
class CreateUserUseCase {
    constructor(private userRepository: UserRepository, private report: Report) {}

    execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO | null {
        try {
            const { name, email } = data;

            const userAlreadyExists = await this.userRepository.findByEmail(email);

            if (userAlreadyExists) {
                this.report.Error(
                    "User already exists",
                    StatusCode.BadRequest,
                    "create-user-usecase"
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

| Objeto        | Descrição                                                            |
| ------------- | -------------------------------------------------------------------- |
| Report.Error  | Método estático para reportar erros conhecidos.                      |
| AppError      | Classe de erro do aplicativo que define o formato do objeto de erro. |
| StatusCode    | Código de status HTTP.                                               |
| Error Message | Detalhes da mensagem de erro que o desenvolvedor deseja registrar.   |
| Error Service | Serviço que originou o erro, a ser utilizado no sistema de log.      |

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
