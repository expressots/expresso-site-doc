---
sidebar_position: 1
---

# Overview

The Expresso TS CLI is a command-line interface tool that helps you to **create** `ExpressoTS` projects and **scaffold** the application resources such as use cases, controllers, dto's, providers and services.

:::info
We use in this tutorial the `npm` package manager, but you can use your favorite package manager such as `yarn` or `pnpm`.
:::

## Installation 💻

First install the CLI globally using the command below:

```bash
npm install -g @expressots/cli
```

## Basic usage

```bash
expressots <command> [options]
```

### Help

Verify the available commands and options:

```bash
expressots --help
```

### Version

Verify the CLI version:

```bash
expressots --version
```

## Create an Expresso TS Project

There are two options to create a new project, interactively or silently (passing the options as arguments)

### New project interactively

```bash
expressots new <project-name>
```

### New project silently

```bash
expressots new <project-name> -p <package-manager> -t <template>
```

- **package-manager**: `npm`, `yarn` or `pnpm`
- **template**: `opinionated` or `non-opinionated`

---

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on GitHub (work in progress)
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our [Discord](https://discord.com/invite/PyPJfGK)
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues