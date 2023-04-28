---
sidebar_position: 9
---

# Entities

Entities are the core components of an Expresso TS application. They are the objects that are used to represent the data that is going to be manipulated by the application.

If an entity changes, most likely use cases and controllers will also change. This is because the use cases and controllers are responsible for manipulating the data represented by the entities.

## Entity Example

Here a simple example of an entity User and it's properties:

```typescript
@provide(User)
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
```

:::tip
Remember that you should have one file per entity
:::

## Entities and Encapsulation

This section is dedicated to promote a reflection when you think about entities. For years we have been told that entities or classes properties should be encapsulated, its methods should abstract the internal implementation and expose only the necessary information to the outside world. This is a good practice when thinking about Object Oriented Programming Paradigm, however this is not always the best approach.

If you think about it, classes, or entities, whatever you call it, are just a way to represent data. They are just a way to group data together.
With this in mind, classes or entities became much more simple to maintain and understand, as they don't contain any logic.

This way of thinking is called **[Anemic Domain Model](https://martinfowler.com/bliki/AnemicDomainModel.html)** and it's a very controversial topic. It's not the purpose of this documentation to discuss this topic, but it's important to mention it, as it's a very important concept when thinking about Expresso TS.

**Say good bye to God classes, and say hello to simple entities, say hello to data.**

___

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on GitHub (work in progress)
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our [Discord](https://discord.com/invite/PyPJfGK)
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
