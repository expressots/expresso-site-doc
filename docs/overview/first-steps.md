---
sidebar_position: 1
---

# First Steps

In this section, you will delve into the core concepts of ExpressoTS. To familiarize yourself with the framework and its building blocks, we'll guide you through the process of building a simple non-opinionated project from scratch. This will help you understand some of the initial framework concepts and get started with ExpressoTS.

## Expresso TS Technology

We believe in the power of strongly typed languages, and **TypeScript** is essential when it comes to structuring or building large-scale applications in **NodeJS**. In the example that we will demonstrate, we will mostly use TypeScript, and here are the reasons why TypeScript is beneficial for your project:

Improved code quality: Strong typing helps to catch errors and bugs at compile time, rather than at runtime, which helps to improve the overall quality of the code. This can lead to fewer crashes and issues with the code in production.

Better scalability: Strong typing can help make code more scalable by allowing for easier refactoring and maintenance. This is because strong typing ensures that changes to the code are consistent and predictable, making it easier to add new features or modify existing ones.

Increased productivity: Strong typing can increase developer productivity by providing better tooling and editor support, such as code completion, type inference, and automatic refactoring. This can help developers write code faster and with fewer errors.

Improved collaboration: Strong typing can make it easier for developers to collaborate by providing a shared understanding of the types and interfaces used in the codebase. This can help reduce misunderstandings and inconsistencies and make it easier for developers to work together on the same codebase.

Better documentation: Strong typing can help make code more self-documenting by providing a clear and concise description of the types and interfaces used in the code. This can help reduce the need for extensive comments and documentation, making the code easier to understand and maintain.

## Pre-requisites

Please make sure that [Node.js](https://nodejs.org) **version >=18.10.0** is installed on your operating system.

## Setup

Setting up a new ExpressoTS project is quite simple with **[ExpressoTS CLI](../cli/overview.md)**. With `NPM` you can scaffold a new project by running the following command:

Install Expresso TS CLI Globally

```bash
npm i -g @expressots/cli
```

Create a new project

```bash
expressots new <project-name>
```

:::tip
Expresso TS offers two projects template options:

- **opinionated**: Opinionated template is made for more complex projects, as it provides a more layered architecture.
- **non-opinionated**: Want to have the liberty to build and structure your project as you wish? Non opinionated template offers a very small footprint, with only the necessary files to get you started.
:::

After creating your project, with the desired **project-name**, and depending on the project type you selected, your project will have a different folder and file structure. Here are the specific folder and file structures for each project type:

### Non-opinionated starter project

```tree
project-name/
├── src/
│   ├── app-container.ts
│   ├── app-controller.ts
│   ├── app-module.ts
│   ├── app-usecase.ts
│   ├── main.ts
├── test/
│   ├── app.usecase.spec.ts
```

Description

| File Name             | Description                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `app-container.ts`    | The Inversify Server container is responsible for organizing all the modules of the application into a cohesive unit.|
| `app.controller.ts`   | A basic controller with a single route.                                                                              |
| `app.module.ts`       | Application root module.                                                                                             |
| `app.usecase.ts`      | A basic use case with a single method.                                                                               |
| `main.ts`             | The main entry point of an **ExpressoTS** application.                                                               |
| `app.usecase.spec.ts` | A basic unit test for the **app.usecase**.                                                                           |

### Opinionated starter project

```tree
project-name/
├── src/
│   ├── entities/
│   │   └── base.entity.ts
│   │   └── user.entity.ts
│   ├── providers/
│   │   └── application/
│   │       └── application.provider.ts
│   │   └── bindingType/
│   │       └── singleton.provider.ts
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
│   │   └── ping/
│   │       └── ping.controller.ts
│   │       └── ping.dto.ts
│   │       └── ping.module.ts
│   │       └── ping.usecase.ts
│   │   └── user/
│   │       └── create/
│   │           └── create-user.controller.ts
│   │           └── create-user.dto.ts
│   │           └── create-user.usecase.ts
│   │       └── findall/
│   │           └── findall-user.controller.ts
│   │           └── findall-user.dto.ts
│   │           └── findall-user.usecase.ts
│   │       └── user.module.ts
│   ├── app-container.ts
│   ├── env.ts
│   ├── main.ts
├── test/
│   ├── ping.usecase.spec.ts
```

Description

| File Name             | Description                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `entities/`           | This folder contains class definitions, or models with their attributes, properties and methods.                     |
| `providers/`          | This folder contains the layer responsible to provide externals resources to the application, also known as adapters.|
| `repositories/`       | Additional folder containing an example of repository pattern implementation, database layer communication.          |
| `useCases/`           | The use case folder contains the use cases implementation of operations that can be performed in the application.    |
| `app-container.ts`    | The Inversify Server container is responsible for organizing all the modules of the application into a cohesive unit.|
| `env.ts`              | This is an utility resource that maps .env variables.                                                                |
| `main.ts`             | The main entry point of an **ExpressoTS** application.                                                               |
| `ping.usecase.spec.ts`| A basic unit test for the **ping.usecase**.                                                                          |

Extra information about **Providers**, **Use Cases** and the **Main** examples supplied in the **Opinionated** template project. Please see below:

#### Providers

Contain 3 providers:

- **application**: This provider allows you to extend from the Application class from @expressots/core that provides the application **[Life Cycle Hooks](application.md#lifecycle-hooks)**.

- **bindingType/singleton**: This provider allows you to bind a class as a singleton. We use this provider to bind the `InMemoryDB` class as a singleton, so we can use the same instance of the `InMemoryDB` class in all the application.

- **db-in-memory**: This is a simple in-memory database provider that allows you to store data in memory. We use this provider in the user use cases to store and retrieve user data.

:::info
**bindingType and InMemoryDB** provider are examples supplied to help you get started. You can remove them if you wish.
:::

#### Use Cases

Contain 4 use cases:

- **app**: returns `Hello from Expresso TS App`

- **ping**: returns a json structure with `{start, end, ttl, message: 'pong'}`

- **user/create**: creates a new user in the in-memory database

- **user/findall**: returns all users from the in-memory database

#### Main

The  `main.ts` includes an async function that will bootstrap the ExpressoTS application.

##### Opinionated

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
        },
    );
}

bootstrap();
```

##### Non Opinionated

```typescript
// Using the non-opinionated starter project where AppInstance is an instance of the Application class from @expressots/core
async function bootstrap() {
  const app = AppInstance.create(container);
  app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

### Creating an ExpressoTS Application

To create an ExpressoTS application, there are two ways: using the AppInstance from the Application class, or extending the Application class. By extending the Application class, you can take advantage of its built-in mechanisms for controlling the **[application life cycle](application.md#lifecycle-hooks)**, such as injecting and executing services before, after, and during application shutdown.

#### The Container

In ExpressoTS, creating an application server to listen to inbound HTTP requests is not enough. The framework requires the creation of a container that organizes all application modules into a cohesive unit. Typically, this container is created in the app-container.ts file.

#### Application uses the Container

After the container is created, the application can be created by passing the container as a parameter to the `AppInstance.create()` method or by extending the Application class.

#### Injecting Modules in the Container

Once the container is created, modules can be injected into the application. These modules are the building blocks of an ExpressoTS application and are responsible for organizing the application's business logic into layers, including controllers and use cases.

#### Injecting Controllers in the Modules

The controller layer handles incoming requests and returns appropriate responses, while the use case layer implements the business logic of the application.

#### Fully Hooked-Up Application Flow

After creating a module, controllers can be injected into it, resulting in a fully hooked-up application flow.

##### Application creation

```typescript
const app = AppInstance.create(container);
```

##### Module Injection

```typescript
const appContainer = new AppContainer();

const container = appContainer.create([
    // Add your modules here
    AppModule,
]);
```

##### Controller Injection

```typescript
const appModule = CreateModule([
    // Add your controllers here
    AppController,
])
```

:::info
It is worth noting that a project created with the ExpressoTS CLI comes with an initial project structure that promotes adherence to a specific convention set by the framework. This ensures that each module has its own dedicated directory, helping developers maintain consistency throughout their codebase.
:::

## Running the Application

Once the installation process is complete, you can start listening to HTTP requests based on the defined controller endpoint that will invoke the corresponding use case to generate the response. To do this, simply run the following command in your OS terminal:

### Running in Development Mode

```bash
npm run dev
```

### Building the Production Bundle

```bash
npm run build
```

### Running the Production Bundle

```bash
npm run prod
```

Once the application is up and running, you can access it by navigating to `http://localhost:3000/` in the non-opinionated starter project

## Resume

ExpressoTS is a versatile framework that is not bound to any specific platform or technology. Leveraging popular Node.js libraries like InversifyJS and ExpressJS, it is designed to be lightweight, modular, customizable, and easy to use. Developers can expand the framework's capabilities by creating new providers that can be incorporated into their applications.

We are currently working on building the project RoadMap and plan to add support for other popular Node.js HTTP frameworks, like Fastify and Koa, to the platform. Additionally, as we move towards the future, we intend to eliminate some of the dependencies that are currently part of the framework's core, such as IoC and decorators.

---

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
