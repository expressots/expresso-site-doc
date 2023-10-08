---
sidebar_position: 2
---

# Modules

Modules are responsible for registering controllers. See [Modules](../overview/module.md) for more information.

## Creating a Module

The `CreateModule` decorator takes two parameters:

- `controllers` is an array of controllers. (Mandatory)
- `scope` is the binding scope. Use `BindingScopeEnum` to set the scope (Request, Singleton, Transient). (Optional)

:::info
The default scope is `BindingScopeEnum.Request` inherited from `AppContainer`.
:::

```typescript
export const UserModule = CreateModule([], BindingScopeEnum.Request);
```

Example of a module with controllers:

```typescript
export const UserModule = CreateModule([
  UserCreateController,
  UserDeleteController,
  UserUpdateController,
  UserFindController,
  UserFindallController,
]);
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
