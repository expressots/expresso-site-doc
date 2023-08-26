---
sidebar_position: 4
---

# Modules

A module or container module is a collection of services, in our case more specifically `Controllers` and their dependencies that can be registered and resolved by ExpressoTS custom InversifyJS container wrapper.

A container module is a class that exports an Inversify Module object, which is essentially a configuration object that defines the bindings for the controllers. The Module object has a bind method that allows you to define bindings between services and their dependencies.

In order to fully understand how you can register your classes, such as usecases, entities, providers, repositories, helpers, etc, please read the **[Dependency Injection](di.md)** section. Essentially we have a group of decorators that overrides the default Container scope.

## Module or container module

With ExpressoTS you don't have to worry about doing bindings manually, we created a helper function called `CreateModule` that receives an array of controllers and returns a module with all the controllers registered and their dependencies injected.

## Module Container

A container module is typically used to group related controllers and their dependencies together, making it easier to register and manage them in the container. For example, you could create a container module that defines the bindings for a set of data access controllers, or a set of business logic services.

Once a container module has been defined, it can be loaded into the `AppContainer` using the `appContainer.create()` method, which takes the container module class as an argument. Refer to the **[App container](app-container.md)** section for more information. This will register all services and dependencies defined in the module automatically, making them available for injection in other parts of your application.

Container modules can be a powerful tool for managing large applications with complex dependency graphs, as they allow you to organize your code into smaller, more manageable pieces, and make it easier to reason about the relationships between different parts of the application.

A container module or as we call simply module is defined in the example below:

```typescript
const AppModule = CreateModule([
    AppController,
]);

export { AppModule };
```

## Module scope

Very similar to the `Container`, developers can set the scope of a module using the same `BindingScopeEnum` enum. Here are the enum values:

- `BindingScopeEnum.Singleton` - The dependency will be created once and will be shared across all requests.
- `BindingScopeEnum.Request` - The dependency will be created once per request.
- `BindingScopeEnum.Transient` - The dependency will be created every time it is requested.

When creating a module, you can pass the scope as a second argument to the `CreateModule` function. It is optional and if not provided, the default scope is acquired from the `AppContainer` which is `RequestScope`.

```typescript
const AppModule = CreateModule(
    [
        AppController,
    ],
    BindingScopeEnum.Singleton,
);
```

This is a very handy feature as allows developers to create modules with different scopes. For example, you can create a module with the `Singleton` scope and another module with the `Request` scope. This is very useful when you have a module that contains services that needs to be shared across all requests and another module that contains services that needs to be created once per request.

Scope precedence is defined as follows: `AppContainer` scope > `Module` scope > `Controller` scope.

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
