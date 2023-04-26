---
sidebar_position: 9
---

# Entities

Entities are the core components of an Expresso TS application. They are the objects that are used to represent the data that is going to be manipulated by the application and when is necessary to be persisted in the database.

If an entity changes, most likely use cases and controllers will also change. This is because the use cases and controllers are responsible for manipulating the data and the data us represented by the entities.

Here a simple example of an entity User and it's Address being injected in the constructor:

```typescript
@provide(User)
@injectable()
class User {
  private id: string;
  public name: string;
  public email: string;

  constructor(name: string, email: string, @inject(Address) public address: Address) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
  }

  get Id(): string {
    return this.id;
  }
}

@provide(Address)
@injectable()
class Address {
    private id: string;
    public street:string;

    constructor(street: string) {
        this.id = uuidv4();
        this.street = street;
    }
}

```

:::tip
Remember that you should have one file per entity
:::

In the class above we have three new decorators: `@provide`, `@injectable` and `@inject`. The first one is used to tell the container that this class is going to be injected in other class. The second one is used to tell the container that this class is going to be instantiated by the container. The last one is used to tell the container that this class is going to be injected in the constructor of another class.

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on GitHub (work in progress)
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our [Discord](https://discord.com/invite/PyPJfGK)
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
