---
sidebar_position: 0
---

# Introduction

ExpressoTS offers a refined layer over **[Express.js](https://expressjs.com/)**, enhancing server-side TypeScript application development. It blends the robustness of Express.js with advanced TypeScript features, streamlining the creation of scalable, maintainable, and readable applications.

## Philosophy

Designed for efficiency, ExpressoTS simplifies server-side development. It reduces boilerplate, focusing on code clarity and structure. The framework's flexibility, through a comprehensive **[Dependency Injection system](./di.md)**, supports seamless integration of custom features with predefined scopes (Transient, Scoped, Singleton), fostering modular and decoupled design.
Whether for a straightforward API or an intricate enterprise system, ExpressoTS accelerates development, ensuring timely, within-budget delivery of high-quality applications.

## Setup

### Installation

Install the ExpressoTS CLI Globally:

```bash
npm i -g @expressots/cli
```

### Project Initialization

Create a new project using the CLI:

```bash
expressots new <project-name>
```

For a quick setup, specify the project template and package manager directly:

```bash
expressots new <project-name> -p <package-manager> -t <template-name>
```

## Project Templates

ExpressoTS offers two starter project templates: `opinionated` and `non-opinionated`.

-   `non-opinionated`: Offers structural flexibility.
-   `opinionated`: Provides a comprehensive project structure with predefined scaffold schematics.

## Development Workflow

### Access your project

```bash
cd <your-project-name>
```

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Production Mode

```bash
npm run prod
```

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a sponsor on **[Sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
