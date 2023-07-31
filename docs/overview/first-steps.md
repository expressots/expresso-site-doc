---
sidebar_position: 1
---

# First Steps

In this section, you will delve into the core concepts of ExpressoTS. To familiarize yourself with the framework and its building blocks, we'll guide you through the process of building a simple non-opinionated project from scratch. This will help you understand some of the initial framework concepts and get started with ExpressoTS.

## The technology

We believe in the power of strongly typed languages, and **[TypeScript](https://www.typescriptlang.org/)** is essential when it comes to structuring or building large-scale applications in **[NodeJS](https://nodejs.org/)**. In the following example we will mostly use TypeScript, and here are the reasons why we use TypeScript:

- Improved code quality: Strong typing helps to catch errors and bugs at compile time, rather than at runtime, which helps to improve the overall quality of the code. This can lead to fewer crashes and issues with the code in production.

- Better scalability: Strong typing can help make code more scalable by allowing for easier refactoring and maintenance. This is because strong typing ensures that changes to the code are consistent and predictable, making it easier to add new features or modify existing ones.

- Increased productivity: Strong typing can increase developer productivity by providing better tooling and editor support, such as code completion, type inference, and automatic refactoring. This can help developers write code faster and with fewer errors.

- Improved collaboration: Strong typing can make it easier for developers to collaborate by providing a shared understanding of the types and interfaces used in the codebase. This can help reduce misunderstandings and inconsistencies and make it easier for developers to work together on the same codebase.

- Better documentation: Strong typing can help make code more self-documenting by providing a clear and concise description of the types and interfaces used in the code. This can help reduce the need for extensive comments and documentation, making the code easier to understand and maintain.

## Pre-requisites

Please make sure that [Node.js](https://nodejs.org) `version >=18.10.0` is installed on your operating system.

## Setup

Setting up a new ExpressoTS project is quite simple with **[ExpressoTS CLI](../cli/overview.md)**. First install the CLI globally with `NPM`:

```bash
npm i -g @expressots/cli
```

With `expressots` CLI you can create a new project by running the following command:

```bash
expressots new <project-name>
```

Or adding template name and package manager as arguments:

```bash
expressots new <project-name> -t <template-name> -p <package-manager>
```

:::tip
ExpressoTS offers two options for project templates:

- Non-opinionated: Want to have the liberty to build and structure your project as you wish? Non opinionated template offers a very small footprint, with only the necessary files to get you started.
- Opinionated: Opinionated template is made for more complex projects, as it provides a more layered architecture.
:::

After creating your project, with the desired `<project-name>`, and depending on the project template you have selected, your project will have a different folder and file structure. Here are the specific folder and file structures for each project template:

### Non-opinionated project template

```tree
project-name/
├── src/
│   ├── app.container.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.usecase.ts
│   ├── main.ts
├── test/
│   ├── app.usecase.spec.ts
```

| File Name             | Description                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `app.container.ts`    | The Inversify Server container is responsible for organizing all the modules of the application into a cohesive unit. |
| `app.controller.ts`   | A basic controller with a single route.                                                                               |
| `app.module.ts`       | Application root module.                                                                                              |
| `app.usecase.ts`      | A basic use case with a single method, called `execute()`.                                                                                |
| `main.ts`             | The main entry point of an ExpressoTS application.                                                                    |
| `app.usecase.spec.ts` | A basic unit test for the app.usecase.                                                                                |

### Opinionated project template

In the opininated project template we provide a full CRUD example for a user entity, with all the necessary layers and files to get you started.

```tree
project-name/
├── src/
│   ├── entities/
│   │   └── base.entity.ts
│   │   └── user.entity.ts
│   ├── providers/
│   │   └── application/
│   │       └── application.provider.ts
│   │   └── db-in-memory/
│   │       └── db-in-memory.provider.ts
│   ├── repositories/
│   │   └── user/
│   │       └── user-repository.ts
│   │   └── base-repository.interface.ts
│   │   └── base-repository.ts
│   ├── useCases/
│   │   └── app/
│   │       └── app.controller.ts
│   │       └── app.module.ts
│   │       └── app.usecase.ts
│   │   └── user/
│   │       └── create/
│   │           └── user-create.controller.ts
│   │           └── user-create.dto.ts
│   │           └── user-create.usecase.ts
|   │       └── delete/
│   │           └── user-delete.controller.ts
│   │           └── user-delete.dto.ts
│   │           └── user-delete.usecase.ts
│   │       └── find/
│   │           └── user-find.controller.ts
│   │           └── user-find.dto.ts
│   │           └── user-find.usecase.ts
│   │       └── findall/
│   │           └── user-findall.controller.ts
│   │           └── user-findall.dto.ts
│   │           └── user-findall.usecase.ts
│   │       └── user.module.ts
│   ├── app.container.ts
│   ├── env.ts
│   ├── main.ts
├── test/
│   ├── ping.usecase.spec.ts
```

| File Name              | Description                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `entities/`            | This folder contains class definitions, or models with their attributes, properties and methods.                      |
| `providers/`           | This folder contains the layer responsible to provide externals resources to the application, also known as adapters. |
| `repositories/`        | Additional folder containing an example of repository pattern implementation, database layer communication.           |
| `useCases/`            | The use case folder contains the use cases implementation of operations that can be performed in the application.     |
| `app.container.ts`     | The Inversify Server container is responsible for organizing all the modules of the application into a cohesive unit. |
| `env.ts`               | This is an utility resource that maps .env variables.                                                                 |
| `main.ts`              | The main entry point of an ExpressoTS application.                                                                    |
| `ping.usecase.spec.ts` | A basic unit test for the ping.usecase.                                                                               |

Below you can find some extra information about **[Providers](./providers.md)**, **[Use Cases](./usecase.md)** and the **[Main](./application.md)** entry point of an ExpressoTS application used in the Opinionated template.

#### Providers

Contain 3 providers:

- application: This provider is a class that extend from the Application class from @expressots/core that provides the application **[Life Cycle Hooks](application.md#lifecycle-hooks)**.

- bindingType/singleton: This provider lets you bind a class as a singleton. We use this provider to bind the InMemoryDB class as a singleton so that we can use the same instance of the InMemoryDB class throughout the application.

- db-in-memory: This is a simple in-memory database provider that allows you to store data in memory. We use this provider in the User use cases to store and retrieve user data.

:::info
bindingType and InMemoryDB provider is an example supplied to help you get started with a simple CRUD operation. You can remove this provider if you wish.
:::

#### Use cases

The use cases in the Opinionated template are organized in 3 modules:

- AppModule, PingModule and UserModule, providing some examples of usage of the ExpressoTS resources. For more information about modules, please check the **[Modules Section](./module.md)**.

Here are the endpoints in each module:

- [AppModule]/app.controller: returns `Hello from ExpressoTS App`
- [UserModule]/user-create.controller: creates a new user in the in-memory database
- [UserModule]/user-delete.controller: delete a user by `id` in the in-memory database
- [UserModule]/user-find.controller: return one user from the in-memory database
- [UserModule]/user-findall.controller: returns all users from the in-memory database
- [UserModule]/user-update.controller: update a user info from the in-memory database

#### Main

The `main.ts` includes an async function that will bootstrap the ExpressoTS application.

##### Opinionated in its simple form

```typescript
// Using opinionated start project where App extends @expressots/core Application class
async function bootstrap() {
  const app = App.create(container);
  app.listen(3000, ServerEnvironment.Production);
}
```

##### Opinionated using .env

```typescript
// Using the opinionated starter project where App extends Application class from @expressots/core
async function bootstrap() {
  const app = App.create(container);
  app.listen(3000, ServerEnvironment.Production, {
    appName: ENV.Application.APP_NAME,
    appVersion: ENV.Application.APP_VERSION,
  });
}

// Or from .env
async function bootstrap() {
  const app = App.create(container);
  app.listen(
    ENV.Application.PORT,
    ServerEnvironment[ENV.Application.ENVIRONMENT],
    {
      appName: ENV.Application.APP_NAME,
      appVersion: ENV.Application.APP_VERSION,
    }
  );
}

bootstrap();
```

##### Non opinionated

```typescript
// Using the non-opinionated starter project where AppInstance is an instance of the Application class from @expressots/core
async function bootstrap() {
  const app = AppInstance.create(container);
  app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

## Application or AppInstance

To bootstrap an ExpressoTS application, there are two ways:

- Using the AppInstance: which is an instance of the Application class that provides the `create()` and `listen()` methods.
- Extending the Application class. By extending the Application class, you can take advantage of its built-in mechanisms for controlling the **[application life cycle hooks](application.md#application-lifecycle-hooks)**, such as injecting and executing services before, after, and during application shutdown.

Application Instance

```typescript
import { AppInstance, ServerEnvironment } from "@expressots/core";
import { container } from "./app-container";

export async function bootstrap() {
  const app = AppInstance.create(container);
  app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

Extending the Application class. Inside of the provider folder, create a folder called `application` and create a new file called `application.provider.ts` and add the following code:

```typescript
import { Application, Environments, LogLevel, log } from "@expressots/core";
import { provide } from "inversify-binding-decorators";

@provide(App)
class App extends Application {
  protected configureServices(): void {
    Environments.checkAll();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected postServerInitialization(): void {}

  protected serverShutdown(): void {
    log(LogLevel.Info, "Server is shutting down", "logger-provider");
    super.serverShutdown();
  }
}

const appInstance = new App();

export { appInstance as App };
```

Application Bootstrap ignited by the extended Application class

```typescript
import { App } from "@providers/application/application.provider";
import { container } from "app-container";
import { ServerEnvironment } from "@expressots/core";

async function bootstrap() {
  const app = App.create(container);
  app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

## The container

In ExpressoTS, creating an application server to listen to inbound HTTP requests is not enough. The framework requires the creation of a container that organizes all application modules into a cohesive unit. Typically, this container is created in the app-container.ts file. The container is responsible for managing the application's dependencies. Read more about the `app-container` in the **[App Container](app-container.md)** section.

### Application uses the container

After the container is created in the `app-container` file, the application can be created by passing the container as a parameter to the `AppInstance.create(container)` method or by extending the Application class.

### Injecting modules in the container

Once the container is created, modules can be injected into the application. These modules are the building blocks of an ExpressoTS application and are responsible for organizing the application's business logic into layers, as a module is a group of functionalities or endpoints also called `controllers`.
Read more about the modules in the **[Modules](module.md)** section.

### Injecting controllers in the modules

The controller layer handles incoming requests and returns appropriate responses, they are the entry point of the application for each endpoint. Read more about the controllers in the **[Controllers](controller.md)** section. In order to make a controller functional, it must be injected into a module. This can be done by passing the controller as a parameter to the `CreateModule` method.

### Fully hooked-up application flow

After creating a module, the module can be added in the container, and after creating controllers, controllers can be injected into the module, resulting in a fully hooked-up application flow. The following code snippet demonstrates this process:

#### Application creation

```typescript
const app = AppInstance.create(container);
```

#### Module injection

```typescript
const appContainer = new AppContainer();

const container = appContainer.create([
  // Add your modules here
  AppModule,
]);
```

#### Controller injection

```typescript
const appModule = CreateModule([
  // Add your controllers here
  AppController,
]);
```

:::info
It is worth noting that a project created with the ExpressoTS CLI comes with an initial project structure that promotes adherence to a specific convention set by the framework. This ensures that each module has its own dedicated directory, helping developers maintain consistency throughout their codebase.
:::

## Running the application

Once the installation process is complete, you can start listening to HTTP requests based on the defined controller endpoint that will invoke the corresponding use case to generate the response. To do this, simply run the following command in your OS terminal:

### Running in development mode

```bash
npm run dev
```

### Building the production bundle

```bash
npm run build
```

### Running the production bundle

```bash
npm run prod
```

:::tip
Once the application is up and running, you can access it by navigating to `http://localhost:3000/`.
:::

## Note

ExpressoTS is a versatile framework that is not bound to any specific platform or technology. Leveraging popular Node.js libraries like InversifyJS and ExpressJS, it is designed to be lightweight, modular, customizable, and easy to use. Developers can expand the framework's capabilities by creating new providers that can be incorporated into their applications.

We are currently working on building the project RoadMap and plan to add support for other popular Node.js HTTP frameworks, like Fastify and Koa, to the platform. Additionally, as we move towards the future, we intend to eliminate some of the dependencies that are currently part of the framework's core, and replacing them with our own custom implementations to make the framework more secure, reliable and efficient.

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
