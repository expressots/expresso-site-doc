---
sidebar_position: 14
---

# Gerenciamento de Error

Quando se trata de tratamento de erros nas APIs TypeScript do Node.js, existem várias práticas recomendadas e abordagens que você pode seguir. O ExpressoTS fornece uma maneira simples e fácil de lidar com erros.

- Usamos códigos de status HTTP apropriadamente: HTTP **[códigos de status](./status-code.md)** são usados para indicar o status de uma resposta. É importante utilizá-los adequadamente em sua API para indicar o sucesso ou falha de uma operação.

- Usamos um formato de erro consistente: defina um formato de erro consistente em sua API para que os consumidores possam entender e lidar facilmente com os erros.

- Lidamos com erros em middleware: as funções de middleware são uma ótima maneira de lidar com erros em um local centralizado.

- Usamos blocos try-catch: Use blocos try-catch para lidar com erros síncronos em seu código. Se ocorrer um erro no bloco try, o bloco catch pode lidar com isso. Certifique-se de lançar o erro para que ele possa ser tratado por nosso middleware de tratamento de erros.

- Usamos tratamento de erro async/await: ao usar async/await, você pode usar blocos try-catch para lidar com erros síncronos em seu código. No entanto, você também precisa lidar com quaisquer erros assíncronos que possam ocorrer.

- Registramos erros: o registro de erros é importante para depuração e monitoramento.

## Nossa solução

Desenvolvemos uma classe de relatório de erros padronizada chamada `Report` que fornece um local centralizado para lançamento e tratamento de erros, o que pode simplificar o tratamento de erros em todo o aplicativo.

A função errorHandler fornece um local centralizado para manipulação de erros que ocorrem durante o processamento da solicitação. Ao definir um formato de resposta de erro padrão, ele ajuda a garantir a consistência nas mensagens de erro que são retornadas aos clientes.

Essa abordagem é melhor usada em aplicativos com uma grande base de código ou lógica de negócios complexa, onde os erros podem ocorrer com frequência e precisam ser tratados de forma consistente em diferentes partes do aplicativo.

### Report error

A classe de relatório é uma classe de utilitário para gerenciar e lançar erros específicos do aplicativo.

```typescript
class Report {

    /**
     * O método Error pega uma instância de Error e a lança.
     * @param error - Uma instância de Error ou uma string que representa a mensagem de erro.
     * @param statusCode - O código de status HTTP do erro.
     * @param service - O serviço onde ocorreu o erro.
     */
    public static Error(error: Error | string, statusCode?: number, service?: string): void { }
}
```

Depois de relatar um erro conhecido por meio do método `Report.Error()`, o erro será tratado pelo middleware `errorHandler()` e será retornado ao cliente no formato json analisado.

### Middleware

Essa função de middleware é usada para manipular erros que ocorrem durante o processamento da solicitação.

```typescript
function errorHandler(error: IAppError, req: Request, res: Response, next: NextFunction): void {
    res.status(error.statusCode || StatusCode.InternalServerError).json({statusCode: error.statusCode, error: error.message});
}

export default errorHandler;
```

:::info
A função `errorHandler()` é uma função de middleware de tratamento de erros Express personalizada.
Ele registra o erro, define o código de status e envia uma resposta JSON contendo o código de status e a mensagem de erro.
:::

## Exemplo de uso

```typescript
Report.Error(error, StatusCode.BadRequest, "your-service");
// Ou
Report.Error("your-error", StatusCode.BadRequest, "your-service");
```

Use case example:

```typescript
@provide(CreateUserUseCase)
class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO | null {
        try {
            const { name, email } = data;

            const userAlreadyExists = await this.userRepository.findByEmail(email);

            if (userAlreadyExists) {
                Report.Error("User already exists", StatusCode.BadRequest, "create-user-usecase");
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

| Objeto          | Descrição                                                    |
| --------------- | -------------------------------------------------------------- |
| Report.Error    | Método estático para reportar erros conhecidos.                |
| IAppError        | Interface de erro do aplicativo que define o formato do objeto de erro.   |
| StatusCode      | Código de status HTTP.                                          |
| Error Message   | Detalhes da mensagem de erro que o desenvolvedor deseja registrar.                                               |
| Error Service   | Serviço que originou o erro, a ser utilizado no sistema de log. |

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas