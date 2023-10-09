---
sidebar_position: 0
---

# Introduction

ExpressoTS is a lightweight framework for building scalable, readable and maintainable server-side applications in TypeScript.
The framework provides a level of abstraction on top of a common HTTP server framework **[Express.js](https://expressjs.com/)**, exposing their API's directly to the developer. This provides freedom and brings to the developer a tool that is well known and easy to use.

## Philosophy

ExpressoTS is a developer-friendly framework designed to streamline the process of building server-side applications. It aims to simplify the development process by providing a clear and concise structure.

With ExpressoTS, developers can focus on what really matters - writing code. The framework takes care of the repetitive and time-consuming aspects of development, allowing developers to work more efficiently.

One of the key features of ExpressoTS is its flexible and extensible architecture. The framework provides a robust **[Dependency Injection](di.md)** system that enables developers to extend its functionality by creating and adding providers with their specific binding scope such as `Transient, Scoped, Singleton`. This allows developers to integrate new features throughout the application without having to worry about the complexities of integration and coupling.

Whether you're building a simple API or a complex enterprise application, ExpressoTS can help you deliver your project on time and on budget. With a comprehensive set of tools and features, ExpressoTS makes it easy to build high-quality, scalable, and maintainable server-side applications.

## Installing the CLI

Before creating a project make sure you have ExpressoTS CLI installed globally on your machine.

```bash
npm i -g @expressots/cli
```

## Creating a New Project

To create a project using the CLI, run the following commands.

```bash
expressots new <project-name>
```

The CLI will prompt you with a few questions and then create a new project directory with the name you provide, along with the @expressots/core package and a starter project structure. Or you can create projects without the CLI questions by passing the template name (`opinionated` or `non-opinionated`) and the package manager (`npm`, `yarn` or `pnpm`) as arguments.

```bash
expressots new <project-name> -t <template-name> -p <package-manager>
```

## Project Types or Templates

ExpressoTS offers two starter project templates: `opinionated` and `non-opinionated`.

- Use the `non-opinionated` starter project template when you need flexibility on your project structure.
- Choose the `opinionated` starter project template for more complex projects with a complete starting point.

### Accessing Your Project

After creating your project you can access it by running the following command:

```bash
cd <your-project-name>
```

### Running in Development Mode

```bash
npm run dev
```

### Generating a Production Build

```bash
npm run build
```

### Running in Production Mode

```bash
npm run prod
```

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
