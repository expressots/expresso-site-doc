---
sidebar_position: 0
---

# Introduction

ExpressoTS is a TypeScript lightweight framework for building scalable, readable and maintainable server-side applications.
The framework provides a level of abstraction on top of common HTTP server framework **[Expressjs](https://expressjs.com/)** exposing their API's directly to the developer. This provides freedom and brings to the developer a tool that is well known and easy to use.

## Philosophy

ExpressoTS is a developer-friendly framework designed to streamline the process of building server-side applications. With a focus on readability, maintainability, and scalability, ExpressoTS aims to simplify the development process by providing a clear and concise structure.

Gone are the days of tedious setup tasks such as configuring logging systems, handling authentication, and connecting to databases. With ExpressoTS, developers can focus on what really matters - writing code. The framework takes care of the repetitive and time-consuming aspects of development, allowing developers to work more efficiently.

One of the key features of ExpressoTS is its flexible and extensible architecture. The framework provides a robust and powerful **[Dependency Injection](di.md)** system that enables developers to quickly and easily extend its functionality by creating and adding providers with their specific binding scope such as `Transient, Scoped, Singleton`. This allows developers to seamlessly integrate new features throughout the entire application without having to worry about the complexities of integration and coupling.

Whether you're building a simple API or a complex enterprise application, ExpressoTS can help you deliver your project on time and on budget. With a comprehensive set of tools and features, ExpressoTS makes it easy to build high-quality, scalable, and maintainable server-side applications.

## Installing the CLI

Before creating a project make sure you have ExpressoTS CLI installed globally on your machine.

```bash
npm i -g @expressots/cli
```

## Creating a new project

To create a project using the CLI, simply run the following commands. The CLI will prompt you with a few questions and then create a new project directory with the name you provide, along with the @expressots/core package and a starter project structure.

```bash
expressots new <project-name>
```

Or you can create projects without going through the CLI questions by passing the template name (opinionated or non-opinionated) and the package manager (npm, yarn or pnpm) as arguments.

```bash
expressots new <project-name> -t <template-name> -p <package-manager>
```

:::tip
ExpressoTS offers two starter project options: opinionated and non-opinionated.

- Use the non-opinionated starter project when you need flexibility on your project structure.
- Choose the opinionated starter project for more complex projects with a complete starting point.
:::

### Accessing your project

After creating your project you can access it by running the following command:

```bash
cd <your-project-option>
```

### Executing in development mode

```bash
npm run dev
```

### Generating production build

```bash
npm run build
```

### Executing in production mode

```bash
npm run prod
```

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
