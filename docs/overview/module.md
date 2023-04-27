---
sidebar_position: 4
---

# Modules

Before explaining what a single module is, let's first talk about what a container module is.
A container module is a collection of services, in our case more specifically `Controllers` and their dependencies that can be registered and resolved by the InversifyJS container.

A container module is a class that exports an inversify Module object, which is essentially a configuration object that defines the bindings between services (on Expresso TS, services are Controllers) and their dependencies. The Module object has a bind method that allows you to define bindings between services and their dependencies.

With ExpressoTS you don't have to worry about doing bindings manually, we created a helper function called `CreateModule` that receives an array of controllers and returns a module with all the controllers registered and their dependencies injected.

:::caution SPOILER ALERT
We are creating a mechanic for you to determine the binding types of your classes, so you can have more control over the bindings, deciding when to use `Singleton`, `Transient` or `Request` scope.
:::

## Container Module

A container module is typically used to group related controllers and their dependencies together, making it easier to register and manage them in the container. For example, you could create a container module that defines the bindings for a set of data access controllers, or a set of business logic services.

Once a container module has been defined, it can be loaded into the `AppContainer` using the `appContainer.create()` method, which takes the container module class as an argument. This will register all of the services and dependencies defined in the module with the container, making them available for injection in other parts of your application.

Container modules can be a powerful tool for managing large applications with complex dependency graphs, as they allow you to organize your code into smaller, more manageable pieces, and make it easier to reason about the relationships between different parts of the application.

A container module or as we call simply a Expresso TS module is defined in the example below:

```typescript
const AppModule = CreateModule([
    AppController,
]);

export { AppModule };
```

---

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on GitHub (work in progress)
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our [Discord](https://discord.com/invite/PyPJfGK)
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
