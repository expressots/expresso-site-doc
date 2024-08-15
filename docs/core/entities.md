---
sidebar_position: 10
---

# Entities

Entities are the core components of an ExpressoTS application. They are the objects that are used to represent the data that is going to be manipulated by the application.

If an entity changes, most likely use cases and controllers will also change. This is because the use cases and controllers are responsible for manipulating the data represented by the entities.

## Entity Example

Here a simple example of an entity User and it's properties:

```typescript
@provide(User)
class User {
    private id: string;
    public name: string;
    public email: string;

    constructor() {
        this.id = uuidv4();
    }

    get Id(): string {
        return this.id;
    }
}
```

:::tip
Remember that you should have one entity per file.
:::

## Entities and Encapsulation

This section is dedicated to promote a reflection when you think about entities. For years we have been told that entities or classes properties should be encapsulated, its methods should abstract the internal implementation and expose only the necessary information to the outside world. This is a good practice when thinking about Object Oriented Programming Paradigm, however this is not always the best approach.

If you think about it, classes, or entities, whatever you call it, are just a way to represent data. They are just a way to group data together.
With this in mind, classes or entities became much more simple to maintain and understand, as they don't contain any logic.

This way of thinking is called **[Anemic Domain Model](https://martinfowler.com/bliki/AnemicDomainModel.html)** and it's a very controversial topic. It's not the purpose of this documentation to discuss this topic, but it's important to mention it, as it's a very important concept when thinking about ExpressoTS entities.

**Say good bye to God classes, and say hello to simple entities, say hello to data.**

## Entity injection

If your entity has dependencies, you can inject them using the `@inject` decorator.

```typescript
@provide(User)
class User {
    constructor(@inject("logger") private logger: Logger) {}
}
```

## Avoid this

Avoid marking constructors with primitive parameters as injectable. This is because it can be difficult for the DI container to infer what values to provide for these parameters. Here is an example of what you should avoid:

```typescript
@provide(User)
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
```

:::caution
In many dependency injection (DI) systems, including InversifyJS, the DI container is responsible for constructing objects and injecting dependencies. When a class constructor contains primitive parameters, it can be difficult for the DI container to infer what values to provide for these parameters. This is because primitive values (like strings, numbers, and booleans) do not carry any inherent semantic meaning that the container can understand.
:::

### Reasons to avoid primitive parameter in injectable classes

Here are some of the reasons why constructors with primitive parameters can be problematic in DI:

-   Ambiguity: If a class has a constructor that requires primitive types, the DI container won't know what values to inject. For example, if a class requires a number in its constructor, the DI container doesn't know what this number represents and what value it should have.

-   Inflexibility: A primitive value in the constructor implies that the value is a fixed part of the class. However, DI is often used to manage interchangeable parts of an application (e.g., different implementations of an interface).

-   Non-descriptive: Primitive values are often non-descriptive and can lead to confusing code. For example, a constructor that takes two string parameters might raise questions like: What do these strings represent? Are there any specific formats or constraints on these strings?

## Entity proper injection

If you want to inject an entity into another class you must rethink your design. If you really need primitive parameters on your constructor use factories to create your entities or the Repository pattern.

Here is an example of a factory:

```typescript
@provide(User)
class User implements IEntity {
    public id: string;
    public name!: string;
    public email!: string;

    constructor() {
        this.id = randomUUID();
    }
}

interface IUserFactory {
    create(name: string, email: string): User;
}

@provide(UserFactory)
class UserFactory implements IUserFactory {
    create(name: string, email: string): User {
        const user = new User();
        user.name = name;
        user.email = email;
        return user;
    }
}

export { User, UserFactory };
```

Now `UserFactory` can be easily injected into other classes.

As mentioned above, there are several other approaches, as long as you remain strong 😁 of not using constructors with primitives parameters in classes that you are planning to inject.

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
