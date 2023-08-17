---
sidebar_position: 3
---

# App Container

The ExpressoTS uses **[InversifyJS](https://inversify.io/)** as its ioC (Inversion of Control) container. It is a powerful tool for managing dependency injection. It is a type-aware container that can be used to manage the instantiation and resolution of objects, as well as the management of their life cycles.

The container provides a central location for managing dependencies and creating objects that depend on other objects. When a class is registered with the container, it becomes immediately available for injection into other classes. This allows for the creation of complex object graphs with minimal boilerplate code.

Taking advantage of InversifyJS we created a wrapper to reduce complexity on how controllers, use cases, providers get injected within the application container. The wrapper is called `AppContainer` and it is responsible for registering all the application modules within the container.

## Creating the container

Upon creating the application container it is possible to define the default scope of the container as well as to set to skip base class check. The default scope is `RequestScope` which means that all the dependencies will be created once per request. This is the common scope for most web applications used in other frameworks such as Spring Boot or .NET Core as well.

Here is the interface options definition:

```typescript
interface ContainerOptions {
  /**
   * The default scope for bindings in the container.
   * It can be set to Request (default), Singleton, or Transient.
   */
  defaultScope?: interfaces.BindingScope;

  /**
   * Allows skipping of base class checks when working with derived classes.
   */
  skipBaseClassChecks?: boolean;
}
```

Here is an example on how to create a container:

```typescript
// Adding options to the container
const appContainer = new AppContainer({
    defaultScope: BindingScopeEnum.Singleton,
    skipBaseClassChecks: true,
});

// Creating a container without options
const appContainer = new AppContainer();

// Creating a container module manager
const container = appContainer.create([
    // Add your modules here
    AppModule,
]);

export { container };
```

## Defining the container scope

As mentioned above, if the `defaultScope` is not provided, the default is set to RequestScope. However, it is possible to change the default scope by passing the `defaultScope` as a an option in the container constructor. The BindingScopeEnum is an enum that contains the following values:

- `BindingScopeEnum.Singleton` - The dependency will be created once and will be shared across all requests.
- `BindingScopeEnum.Request` - The dependency will be created once per request.
- `BindingScopeEnum.Transient` - The dependency will be created every time it is requested.

```typescript
const appContainer = new AppContainer();

const container = appContainer.create(
    [
        // Add your modules here
    ]
);
```

:::tip
If you don't pass the `defaultScope` the default scope is set to `RequestScope`.
:::

## Registering modules

The `AppContainer` class has a `create` method that receives an array of modules and returns the container with all the modules registered. The container here created is the same container that is used by the `Application` class to initialize the server.

Once the container is created developers can register **[modules](./module.md)** within the container:

```typescript
// Create a new container
const appContainer = new AppContainer();

const container = appContainer.create([
    // Register all the modules
    UserModule,
    PaymentModule,
    ProductModule
]);

export default container;
```

The reason why we created the `AppContainer` class is to reduce the complexity of how the container is constructed using Inversify directly, also was to provide a way to register modules without too much extra configuration.

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues