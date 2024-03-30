---
sidebar_position: 1
---

# First steps

Begin your journey with ExpressoTS, a TypeScript framework for building scalable and maintainable Node.js applications. This section guides you through the foundational concepts, setup, and architecture of ExpressoTS.

## Why TypeScript?

**[TypeScript](https://www.typescriptlang.org/)** is a key element in developing robust server-side applications due to its strong typing, which significantly enhances code quality, scalability, productivity, and collaboration. Strong typing not only helps in catching errors early but also improves code documentation and maintainability, making TypeScript an excellent choice for large-scale applications.

## Pre-requisites

Please make sure that [Node.js](https://nodejs.org) `version >=18.10.0` is installed on your operating system.

## Setup

Install the **[ExpressoTS CLI](../cli/overview.md)** globally using NPM to get started with your project setup:

Setting up a new ExpressoTS project is quite simple with **[ExpressoTS CLI](../cli/overview.md)**. First install the CLI globally with `NPM`:

```bash
npm i -g @expressots/cli
```

Create a new project by running:

```bash
expressots new <project-name>
```

For a specific project structure and package manager, specify the template and package manager directly:

```bash
expressots new <project-name>  -p <package-manager> -t <template-name>
```

## Project templates

ExpressoTS provides two project templates to cater to different development needs:

-   Non-opinionated: Offers flexibility in project structuring with minimal setup.
-   Opinionated: Comes pre-configured for complex projects, reinforcing a specific project structure and scaffolding pattern.

### Non-opinionated project structure

```tree
project-name/
├── src/
│   ├── app.container.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.provider.ts
│   ├── main.ts
├── test/
│   ├── app.controller.spec.ts
```

| File Name                | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `app.container.ts`       | Dependency injection container. Organizes the application modules. |
| `app.controller.ts`      | A basic controller with a single route.                            |
| `app.module.ts`          | Application root module.                                           |
| `app.provider.ts`        | Application lifecycle manager.                                     |
| `main.ts`                | The main entry point of an ExpressoTS application.                 |
| `app.controller.spec.ts` | Unit test for the app.controller.                                  |

### Opinionated project structure

```tree
project-name/
├── src/
│   ├── providers/
│   │   └── app/
│   │       └── app.provider.ts
│   ├── useCases/
│   │   └── app/
│   │       └── app.controller.ts
│   │       └── app.module.ts
│   │       └── app.usecase.ts
│   ├── app.container.ts
│   ├── env.ts
│   ├── main.ts
├── test/
│   ├── app.usecase.spec.ts
```

| File Name             | Description                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `providers/`          | This folder contains the layer responsible to provide externals resources to the application, also known as adapters. |
| `app/app.provider.ts` | Application lifecycle manager.                                                                                        |
| `useCases/`           | The use case folder contains the use cases implementation of operations that can be performed in the application.     |
| `app.container.ts`    | Dependency injection container. Organizes the application modules.                                                    |
| `env.ts`              | This is an utility resource that maps .env variables.                                                                 |
| `main.ts`             | The main entry point of an ExpressoTS application.                                                                    |
| `app.usecase.spec.ts` | A basic unit test for the app.usecase.                                                                                |

This structure provides a robust framework for developing API endpoints, showcasing the layering and organization capabilities of ExpressoTS.

## Application initialization and Configuration

Initialize your application with the `AppFactory.create()` method, passing in the container and an App class for lifecycle management. This step is crucial for configuring your application's dependency injection and middleware setup.

```typescript
async function bootstrap() {
    const app = await AppFactory.create(container, App);
    await app.listen(3000, ServerEnvironment.Development);
}
```

## Running your application

With your application set up, start your development server or build your application with the following commands:

-   Development Mode: `npm run dev`
-   Production Build: `npm run build`
-   Production Mode: `npm run prod`

:::info
Once the application is up and running, you can access it by navigating to `http://localhost:3000/`.
:::

## Framework flexibility

ExpressoTS is a versatile framework that is not bound to any specific platform or technology. Leveraging popular Node.js libraries like InversifyJS and Express.js, it is designed to be lightweight, modular, customizable, and easy to use. Developers can expand the framework's capabilities by creating new providers that can be incorporated into their applications.

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
