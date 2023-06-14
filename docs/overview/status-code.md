---
sidebar_position: 13
---

# Status Code

Status code is a way to represent the result of a request. These HTTP responses indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

- Informational responses (100-199)
- Successful responses (200-299)
- Redirection messages (300-399)
- Client error responses (400-499)
- Server error responses (500-599)

You can find more details about the status code in the **[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)**.

:::tip
The status codes listed below are defined by [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes)
:::

## ExpressoTS status code

In ExpressoTS, we have a list of all status codes listed in the MDN that you can use in your application. Here is an example of use:

### In a Controller

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

### In a Use Case

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
                Report.Error("User already exists", StatusCode.BadRequest,"create-user-usecase");
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

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues