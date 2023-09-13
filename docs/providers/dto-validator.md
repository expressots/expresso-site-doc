---
sidebar_position: 1
---

# DTO Validator

The DTO Validator provider is a provider that ExpressoTS offers out-of-the-box. It is used to validate the incoming data from the client. It helps the developer to avoid runtime errors caused by missing or invalid data.

When you scaffold a new project, the DTO Validator provider is already included as a middleware that can be used in any endpoint. The middleware is called `validateDTO`.

## Pre Requisites

The DTO validator is based on the [class-validator](https://www.npmjs.com/package/class-validator) and [class-transformer](https://www.npmjs.com/package/class-transformer) packages. It uses decorators to validate the DTOs.

:::tip
If you don't have class-validator and class-transformer installed and try to use the DTO validator, you will get an warning message in the console mentioning that you need to install the packages.
:::

Another important thing to mention is that the DTO validator works only with classes, as interfaces doesn't exist in runtime. So, if you want to use the DTO validator, you need to create a class that represents your DTO rather than the current interface provided by ExpressoTS.

## How To Use

You can use the DTO validator in any endpoint by adding the `validateDTO` middleware in the endpoint route.

Endpoint that creates a new user:

```typescript
@httpPost("/", ValidateDTO(CreateUserDTO))
execute(@requestBody() payload: CreateUserDTO, @response() res: Response) {
  return res.status(StatusCode.Created).json(this.createUserUseCase.execute(payload));
}
```

Here it is the `CreateUserDTO` class:

```typescript
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

class CreateUserDTO {
  @IsNotEmpty()
  @MinLength(10)
  name: string;
  @IsNotEmpty()
  @IsEmail({}, { message: "Invalid email" })
  email: string;
}

export { CreateUserDTO };
```

:::info
For more information about the decorators, please check the [class-validator](https://www.npmjs.com/package/class-validator) package.
:::

## DTO Validator Error Messages

If you submit a payload that doesn't match the DTO `CreateUserDTO` above, the DTO validator will return an error message with the following format:

**Payload:**

```json
{
  "name": "",
  "email": ""
}
```

**Response:**

```json
{
  "errorCode": 400,
  "errorMessage": "Bad Request",
  "DTO": [
    {
      "property": "name",
      "messages": [
        "name must be longer than or equal to 10 characters",
        "name should not be empty"
      ]
    },
    {
      "property": "email",
      "messages": ["invalid email", "email should not be empty"]
    }
  ]
}
```

Messages are split by property, so you can easily identify which property has an error and what is the error message. This is useful when you have a DTO with a lot of properties, as you can easily identify which property has an error. It also helps the frontend application on getting the error messages more easily.

:::caution SPOILER ALERT
The ValidateDTO is part of the functionalities that ExpressoTS offers out-of-the-box to help you to build your application faster. In the next versions of ExpressoTS for every functionality that ExpressoTS offers out-of-the-box, we will provide a way for you to customize it or use your own implementation based on your favorite package or library.
:::

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
