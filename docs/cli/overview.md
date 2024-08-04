---
sidebar_position: 1
---

# Overview

ExpressoTS CLI is a command-line interface tool that helps you to `create` ExpressoTS projects and `scaffold` ExpressoTS resources.

:::info
We use the `npm` package manager in this tutorial for simplicity. However, you can use `yarn` or `pnpm` as well.
:::

## Installation

First install the CLI globally using the command below:

```bash
npm install -g @expressots/cli
```

## Commands Available

| Name        | Alias  | Description                                           |
| ----------- | ------ | ----------------------------------------------------- |
| new project | new    | Generate a new project                                |
| info        | i      | Provides project information                          |
| resources   | r      | Displays CLI commands and resources                   |
| help        | h      | Show command help                                     |
| service     | g s    | Generate a service [controller, usecase, dto, module] |
| controller  | g c    | Generate a controller                                 |
| usecase     | g u    | Generate a usecase                                    |
| dto         | g d    | Generate a DTO                                        |
| entity      | g e    | Generate an entity                                    |
| provider    | g p    | Generate internal provider                            |
| provider    | add    | Add external provider to the project                  |
| provider    | create | Create external provider                              |
| module      | g mo   | Generate a module                                     |
| middleware  | g mi   | Generate a middleware                                 |

## Usage Examples

The CLI has the following syntax:

```bash
expressots <command> [options]
```

### Help

Verify the available commands and options:

```bash
expressots help
```

### Info

Providers information about your Operational System, Project and CLI version:

```bash
expressots info
```

### Resources list

List all available resources to scaffold:

```bash
expressots resources (Alias: r)
```

### Create a Project

There are two options to create a new project, interactively or silently (passing the options as arguments).
Here is the complete command syntax:

```bash
expressots new <project-name> -p <package-manager> -t <template> -d <directory>
```

#### Interactively

```bash
expressots new <project-name>
```

#### Silently

```bash
expressots new <project-name> -p <package-manager> -t <template> -d <directory>
```

-   **package-manager**: `npm`, `yarn` or `pnpm`
-   **template**: `opinionated` or `non-opinionated`
-   **directory**: `./my-project`

The flag `-d` is optional and is used to specify the directory where the project will be created. If not specified, the project will be created in the current directory.

### Add a Provider

Add an external provider to the project:

```bash
expressots add <provider-name>
```

### Create a Provider

Create a new ExpressoTS provider. For more information about providers, check the [Providers](/docs/overview/providers.md#creating-and-registering-an-external-provider) section.

```bash
expressots create <provider-name>
```

## Scaffold Resources

The CLI provides commands to scaffold resources like `controller`, `usecase`, `dto`, `entity`, `module` and `middleware`.

```bash
expressots generate <resource> <name> [options]
```

Resources are created in the `src` directory by default. They also can be scaffolded in 2 different ways: `passing the path` or using the `shorthand operation`.

:::caution
The resource scaffolding operations produce different results based on the project template used. The `opinionated` template provides a more structured project, while the `non-opinionated` template provides a more flexible project structure.
:::

### Non Opinionated Scaffold

#### Passing the Path

```bash
expressots g c services/user
```

The command above will create a controller named `user` inside the `services` directory.

```bash
src
└── services
    └── user.controller.ts
```

#### Shorthand Operation

```bash
expressots g c services-user
```

The command above will create a controller named `services-user` inside the `services/user` directory.

```bash
src
└── services
    └── user
        └── services-user.controller.ts
```

### Opinionated Scaffold

In the `opinionated` template, the scaffolded resources are created following a predefined structure.

-   [@providers](/docs/overview/providers.md)
-   [@entities](/docs/overview/entities.md)
-   [@useCases](/docs/overview/usecase.md)
-   [@repositories](/docs/overview/repositories.md)

#### Passing the Path

```bash
expressots g c services/user
```

The command above will create a controller named `user` inside the `useCases/services` directory.

```bash
src
└── useCases
    └── services
        └── user.controller.ts
```

:::info
dto, usecase, controller, modules will be created in the `useCases` directory.
:::

#### Shorthand Operation

```bash
expressots g c services-user
```

The command above will create a controller named `services-user` inside the `useCases/services/user` directory.

```bash
src
└── useCases
    └── services
        └── user
            └── services-user.controller.ts
```

:::info
Using the shorthand operation in the opinionated template offers significant benefits. It creates a well-structured project that's easier to navigate and understand. When you scaffold with the shorthand, the CLI automatically places resources in the correct directories, adds controllers to their modules, and integrates the module into the container.
:::

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues

```

```

```

```

```

```
