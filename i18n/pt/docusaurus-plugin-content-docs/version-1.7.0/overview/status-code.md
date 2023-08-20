---
sidebar_position: 13
---

# Código de Status

O código de status é uma forma de representar o resultado de uma requisição. Essas respostas HTTP indicam se uma solicitação HTTP específica foi concluída com êxito. As respostas são agrupadas em cinco classes:

- Respostas informativas (100-199)
- Respostas bem-sucedidas (200-299)
- Mensagens de redirecionamento (300-399)
- Respostas de erro do cliente (400-499)
- Respostas de erro do servidor (500-599)

Você encontra aqui mais detalhes sobre os códigos de status **[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)**.

:::tip
Os códigos de status aqui mostrados estão definidos na [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes)
:::

## ExpressoTS código de status

Em ExpressoTS, temos uma lista de todos os códigos de status listados na MDN que você pode usar em sua aplicação. Aqui está um exemplo de uso:

### Em uma controladora

```typescript
import { StatusCode } from "@expressots/core";

@controller("/user/create")
class CreateUserController extends BaseController {
    constructor(private createUserUseCase: CreateUserUseCase) {
        super("create-user-controller");
    }

    @httpPost("/")
    execute(
        @requestBody() data: ICreateUserRequestDTO,
        @response() res: any,
    ): ICreateUserResponseDTO {
        return this.callUseCase(
            this.createUserUseCase.execute(data),
            res,
            StatusCode.Created, // Status code
        );
    }
}
```

### Em um caso de uso

```typescript
import { StatusCode } from "@expressots/core";

@provide(CreateUserUseCase)
class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO | null {
        try {
            const { name, email } = data;

            const user: User | null = this.userRepository.create(
                new User(name, email),
            );

            if (!user) {
                Report.Error(
                    new AppError(
                        StatusCode.BadRequest, // Status code
                        "User already exists",
                        "create-user-usecase",
                    ),
                );
            }

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

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas