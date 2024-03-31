---
sidebar_position: 2
---

# Generate

In order to provide a better developer experience, the ExpressoTS CLI provides a set of commands to help you scaffold the application resources such as use cases, controllers, DTO's, providers and services.

This command allows developers to stay ahead of the curve by generating the boilerplate code for the application, so they can focus on the business logic.

## Command Syntax

The generate command can be executed as follows:

```bash
expressots generate <resource> <structure>
```

Or in its short form:

```bash
expressots g <resource> <structure>
```

### Command Structure

We provide two different structures to scaffold the resources:

-   **[entity-action]**: `expressots generate service user-create`
    This will create this folder structure: `/user/create` and the file: `user-create.[resource].ts`

-   **[folder/subfolder/resource]**: `expressots generate service user/create`
    This will create this folder structure: `/user/create` and the file: `create.[resource].ts`

    If you add `/` at the end of the structure, the CLI will create the resource inside of the folder. Example: `expressots generate service user/create/`
    Structure: `user/create/` and the file: `create.[resource].ts`

### Resource Root Folder

-   The root folder for all resources is the `src` folder. This can be changed in the `expressots.config.ts` file.
-   In the opinionated mode, the root folder is the `src` folder and the resources scaffolded with `service, usecase, dto, controller` are created inside of the `useCases` folder.
-   Entities are created inside of the `entities` folder, and providers inside of the `providers` folder.

## Resource Types

Current available resources:

| Long form  | short | Command                    | Expected result                                                                          |
| ---------- | ----- | -------------------------- | ---------------------------------------------------------------------------------------- |
| usecase    | u     | expressots g u user/find   | Use case to be created in the folder `useCases` with this folder structure: user/find    |
| controller | c     | expressots g c user/find   | Controller to be created in the folder `useCases` inside of user/find                    |
| dto        | d     | expressots g d user/find   | DTO to be created in the folder `useCases` inside of user/find                           |
| provider   | p     | expressots g p email/email | Provider to be created in the folder `providers` inside of user/find                     |
| service    | s     | expressots g s user/find   | Service creates usecase, controller and DTO and add them in the desired folder user/find |
| entity     | e     | expressots g e user        | Entity to be created in the folder `entities` with this folder structure: user           |
| middleware | mi    | expressots g mi auth       | Middleware to be created in the folder `middlewares` with this folder structure: auth    |
| module     | mo    | expressots g mo user       | Module to be created in the folder where `controllers` and `usecases` are located        |

All resources can be created using the structure `folder/subfolder/resource`.

## Scaffolding using hyphenated names

For services, you can take advantage of creating the use case, controller and DTO at once using the structure `entity_action` or `entity-action`. Example: `expressots g s user-create`.

:::info
The `expressots.config.ts` configuration file, located in the project root folder, determines where all resources will be created.
:::

## ExpressoTS Config File

The configuration file is located in the root folder of the project and it's called `expressots.config.ts`. This file is used to configure the CLI and the project.

Here is the current configuration file with all the available options:

```typescript
import { ExpressoConfig, Pattern } from "@expressots/core";

const config: ExpressoConfig = {
    sourceRoot: "src",
    scaffoldPattern: Pattern.KEBAB_CASE,
    opinionated: true,
    scaffoldSchematics: {
        entity: "entity",
        provider: "provider",
        module: "module",
        controller: "controller",
        dto: "dto",
        middleware: "middleware",
        usecase: "useCases",
    },
};

export default config;
```

-   **sourceRoot**: the root folder that will be used by the CLI to create the resources. Default: `src`
-   **scaffoldPattern**: the pattern that will be used to create the resources. Default: `Pattern.KEBAB_CASE`. Example: `user-create`
-   **opinionated**: if true, the CLI will create the resources using the opinionated folder structure
-   **scaffoldSchematics**: the folder convention names for each resource. Default: `useCases`, `entities`, `providers`, `middlewares`, `controllers`, `dtos`

## Recommendations

Try to use as many different forms of creating resources as possible. This will help you to understand how the CLI works and how to use it in your favor. It also helps us improve the CLI to make it more robust.

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
