---
sidebar_position: 0
---

# Bootstrap Method

The `bootstrap` method is the entry point of your application. It is responsible for loading the application configuration, registering middlewares, and starting the application.

- `AppFactory.create()` method is responsible for creating the application instance. It takes two parameters:
  - `container` is the dependency injection container. See [App Container](../overview/app-container.md) for more information.
  - `middlewares` or `App`
- `Return:` `IApplicationExpress` instance that gives you access to two methods:
  - `app.listen()` starts the application.
  - `app.setEngine()` sets the application render view engine.

:::info
**`middlewares`** is an array of middlewares that will be registered in the application. (Non-opinionated template)

**`App`** is the application class responsible for all application configuration. (Opinionated template)
:::

## Bootstrap with array of middlewares

Use this method if you are using the non-opinionated template. You have the freedom create your own application class and register your middlewares in your own way.

```typescript
async function bootstrap() {
  const app = await AppFactory.create(container, [cors(), helmet()]);
  await app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

:::tip
**`AppFactory.create(container, [])`** returns an instance of `ApplicationExpress` that gives you direct access to the `ExpressApp` instance.
:::

## Bootstrap with the Application Class

Use this method if you are using the opinionated template. Your application class will be responsible for all application configuration.

```typescript
async function bootstrap() {
  const app = await AppFactory.create(container, App);
  await app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

:::tip
**`AppFactory.create(container, App)`** returns an instance of `IApplicationExpress` that gives you access to `listen()` and `setEngine()` methods.
:::

## Method Listen

The `listen` method is responsible for starting the application. It takes two mandatory parameters and one optional parameter:

- `port` is the port number where the application will be listening. (Mandatory)
- `environment` is the environment where the application will be running. It can be `development` or `production`. Use the enum called `ServerEnvironment`. (Mandatory)
- `consoleMessage` is the message object that will be displayed in the console when the application starts. (Optional)

```typescript
await app.listen(3000, ServerEnvironment.Development, {
  appName: "Expressots",
  appVersion: "1.0.0",
});
```

:::tip
The ServerEnvironment enum defines the NODE_ENV environment variable automatically. It can be `development` or `production`.
:::

## Method Set Engine

The `setEngine` method is responsible for setting the application render view engine. For now ExpressoTS only supports Handlebars.

```typescript
app.setEngine<IHandlebars>({
  extName: "hbs",
  viewPath: path.join(__dirname, "..", "views"),
  engine: engine({ defaultLayout: "layout", extname: "hbs" }),
});
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
