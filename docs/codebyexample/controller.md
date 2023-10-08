---
sidebar_position: 3
---

# Controllers

Controllers are responsible for handling incoming requests and returning responses to the client.

- For information about `BaseController`, see [BaseController](../overview/controller.md#basecontroller-class).
- For information about HTTP and parameters decorators, see [HTTP and Parameter Decorators](../overview/decorators.md).
- Controllers make use of DTOs to validate the request body, query parameters, and route parameters. See [DTOs](../overview/controller#dto-pattern) for more information.

```typescript
@controller("/")
export class UserGetController extends BaseController {
  constructor() {
    super();
  }

  @Get("/")
  execute() {
    return "Getting a user...";
  }
}
```

To create a controller, you need to create a class and decorate it with `@controller` decorator. The `@controller` decorator takes two parameters:

- `path` is the path of the controller. (Mandatory)
- `middlewares` is an array of middlewares. (Optional)

```typescript
@controller("/", express.json(), express.urlencoded({ extended: true }))
```

:::info
Defining middlewares in the controller will apply to all routes of the controller.
:::

## Example of a Controller with Multiple Routes

```typescript
@controller("/user")
export class UserController extends BaseController {
  constructor() {
    super();
  }

  @Get("/")
  get() {
    return "Getting a user...";
  }

  @Post("/create")
  create() {
    return "Creating a user...";
  }
}
```

## Example of Route with Multiple Middlewares

```typescript
@Get("app", express.json(), express.urlencoded({ extended: true }))
```

:::info
Defining middlewares in the route will apply only to the specific route.
:::

:::info
The controller route path will be concatenated with the individual route path.

```typescript
@controller("/user")
  @Post("/create")
```

Final route is `/user/create`.
:::

## Injecting Dependencies into Controllers Constructor

You can inject dependencies into controllers constructor as follows:

```typescript
@controller("/")
class AppController extends BaseController {
  constructor(private yourProvider: YourProvider) {
    super();
  }

  @Get("/")
  get() {
    this.yourProvider.doSomething();
    return "Hello ExpressoTS!";
  }
}
```

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
