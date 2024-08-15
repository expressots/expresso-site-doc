---
sidebar_position: 4
---

# Modules

Modules, or container modules in ExpressoTS, are aggregations of services—primarily Controllers and their dependencies—that are managed by the framework's container. These modules facilitate the organization, registration, and resolution of various application components within the ExpressoTS ecosystem.

## Understanding modules

A module exports an Inversify Module object, serving as a configuration entity for controller bindings and their dependencies. It utilizes a bind method to establish relationships between services and their dependencies. To grasp the registration of classes such as use cases, entities, providers, repositories, and more, delve into the **[Dependency Injection section](./di.md)**, which elaborates on decorators influencing the default container scope.

## Simplifying bindings with `CreateModule`

ExpressoTS simplifies the binding process through the `CreateModule` function. This utility auto-registers controllers, injecting their dependencies without manual binding:

```typescript
export const AppModule: ContainerModule = CreateModule([AppController]);
```

## Defining module scope

Very similar to the `Container`, developers can set the scope of a module using the same `BindingScopeEnum` enum. Here are the enum values:

-   `BindingScopeEnum.Singleton` - The dependency will be created once and will be shared across all requests.
-   `BindingScopeEnum.Request` - The dependency will be created once per request.
-   `BindingScopeEnum.Transient` - The dependency will be created every time it is requested.

When creating a module, you can pass the scope as a second argument to the `CreateModule` function. It is optional and if not provided, the default scope is acquired from the `AppContainer` which is `RequestScope`.

```typescript
export const AppModule: ContainerModule = CreateModule([AppController], BindingScopeEnum.Singleton);
```

This flexibility allows for tailored dependency management strategies, such as combining Singleton scope modules for shared services with Request scope modules for request-specific services.

## Scope precedence

The hierarchy of scope precedence is `AppContainer` > `Module` > `Controller`, ensuring a versatile and hierarchical approach to dependency scope management. This layered structure permits precise control over service instantiation and lifecycle across the entire application.

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
