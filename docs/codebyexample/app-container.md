---
sidebar_position: 1
---

# Application Container

The application container is a dependency injection container. See [Application Container](../overview/app-container.md) for more information.

```typescript
const appContainer = new AppContainer();

export const container: Container = appContainer.create([
    // Add your modules here
    AppModule,
]);
```

## Creating AppContainer

The `AppContainer` class takes one optional parameter:

-   `defaultScope` is the default binding scope. Use `BindingScopeEnum` to set the default scope (Request, Singleton, Transient).
-   `skipBaseClassChecks` is a boolean value that indicates if the container should skip the base class checks. This is useful when you are using abstract classes as binding identifiers or you are extending classes from third-party libraries. Set this value to `true` to skip the base class checks.
-   `autoBindInjectable` is a boolean value that indicates if the container should automatically bind injectable classes. Set this value to `true` to automatically bind injectable classes.

:::info
The default scope is `BindingScopeEnum.Request` and `skipBaseClassChecks` is `false`.
:::

```typescript
const appContainer = new AppContainer({
    defaultScope: BindingScopeEnum.Request,
    skipBaseClassChecks: true,
    autoBindInjectable: false,
});
```

The `AppContainer` instance returns an instance of `AppContainer` that gives you access to the following methods:

-   `create()` creates the application container.
-   `Container` is the dependency injection container instance.
-   `getBindingDictionary()` returns the binding dictionary map of classes injected in the dependency injection system.
-   `getContainerOptions()` returns the container options.

### Method Create

The `create` method takes one mandatory parameter (array of modules);

```typescript
export const container: Container = appContainer.create([
    // Add your modules here
    AppModule,
    UserModule,
    ProductModule,
]);
```

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
