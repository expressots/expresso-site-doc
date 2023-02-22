---
sidebar_position: 1
---

# Introduction

ExpressoTS is a TypeScript lightweight framework for building scalable, readable and maintainable server-side applications.
The framework provides a level of abstraction on top of common HTTP server framework [Express](https://expressjs.com/) exposing their API's directly to the developer. This provides freedom and brings to the developer a tool that is well known and easy to use.

## Philosophy

Expresso TS is a developer-friendly framework designed to streamline the process of building server-side applications. With a focus on readability, maintainability, and scalability, Expresso TS aims to simplify the development process by providing a clear and concise structure.

Gone are the days of tedious setup tasks such as configuring logging systems, handling authentication, and connecting to databases. With Expresso TS, developers can focus on what really matters - writing code. The framework takes care of the repetitive and time-consuming aspects of development, allowing developers to work more efficiently.

One of the key features of Expresso TS is its flexible and extensible architecture. The framework provides a simple but powerful dependency injection system that enables developers to quickly and easily extend its functionality by creating and adding providers. This allows developers to seamlessly integrate new features throughout the entire application without having to worry about the complexities of integration.

Whether you're building a simple API or a complex enterprise application, Expresso TS can help you deliver your project on time and on budget. With a comprehensive set of tools and features, Expresso TS makes it easy to build high-quality, scalable, and maintainable server-side applications.

## Installation

To start a new ExpressoTS project, you have two options: scaffold a new project using the [ExpressoTS CLI]("") or clone the starter project from GitHub. Although both methods produce the same outcome, we recommend using the Expresso CLI to create a new project, as it offers a more streamlined experience.

### Using the CLI

To scaffold a project using the ExpressoTS CLI, simply run the following commands. The CLI will prompt you with a few questions and then create a new project directory with the name you provide, along with the @expressots/core package and a starter project structure.

```bash
npm i -g @expressots/cli
expressots new project-name
```

:::tip
ExpressoTS offers two starter project options: opinionated and non-opinionated. Use the non-opinionated starter project for simple projects with only the minimum requirements. Choose the opinionated starter project for more complex projects with a complete starting point.
:::

### Cloning the starter project

Alternatively, to install the TypeScript starter project with **Git**, run the following commands:

```bash
# non-opinionated starter project
git clone --sparse https://github.com/expressots/expressots.git templates/01_non_opinionated --filter=blob:none 
```

```bash
# opinionated starter project
git clone --sparse https://github.com/expressots/expressots.git templates/02_opinionated --filter=blob:none 
```

```bash
# cd 01_non_opinionated or cd 02_opinionated
cd <your-project-option> 

npm install

npm run start
```

:::note
Note that the `--sparse` flag requires a Git version of 2.25 or higher to be installed in order to work properly.
:::