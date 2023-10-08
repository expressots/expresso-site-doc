---
sidebar_position: 4
---

# Use Cases

Uses cases are the implementation of the business logic of your application. For more information about use cases, see [Use Cases](../overview/usecase.md).

```typescript
@provide(YourUseCase)
export class YourUseUseCase {
  execute() {
    return "Hello ExpressoTS!";
  }
}
```

## Injecting Dependencies into Use Cases Constructor

```typescript
@provide(YourUseCase)
export class YourUseUseCase {
  constructor(private yourProvider: YourProvider) {}

  execute() {
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
