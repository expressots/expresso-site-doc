---
sidebar_position: 5
---

# Entities

Entities are the core of your application. They are the representation of your business objects. For more information about entities, see [Entities](../overview/entities.md).

```typescript
@provide(User)
export class User {
  id: string;
  name: string;
  email: string;

  constructor() {
    this.id = randomUUID();
  }
}
```

:::caution
Don't pass primitive types as parameters to the constructor of your entities. The Dependency Injection Container will not be able to resolve them.

```typescript
constructor(name: string) {
    this.name = name;
}
```

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
