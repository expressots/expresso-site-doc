---
sidebar_position: 2
---

# Environment Validator

The environment validator provider is a provider that ExpressoTS offers out-of-the-box. It is used to validate the existence of the `.env` file and its content.
It helps the developer to avoid runtime errors caused by missing environment variables.

:::tip
It is only included in the opinionated template or when you create a class that extends the `Application` class.
:::

You can find it in the `src/providers/application` folder in the opinionated template.

The `application.provider` is the main provider of the application that is responsible to control the **[Application Lifecycle](../overview/application.md#application-lifecycle-hooks)**.

Inside of the Application class you can find three methods that are called in the following order:

- `configureServices()` : Configure services that should be initialized before the server starts.
- `postServerInitialization()` : Configure services that should be executed after the server starts.
- `serverShutdown()` : Perform actions or cleanup after the server is shutdown.

Environment validator provider is called in the `configureServices()` method preventing the application from starting if the `.env` file is missing or if it has missing environment variables.

```typescript
protected configureServices(): void {
    Environments.checkAll();
}
```

The environment validator provider also has a method called `get()` that returns the value of an environment variable. It is used to get a specific environment variable value passing its name as a parameter.

```typescript
Environments.get("PORT");
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
