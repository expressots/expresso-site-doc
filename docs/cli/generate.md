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

- **[entity-action]**: `expressots generate service user-create`
  This will create this folder structure: `/user/create` and the file: `user-create.[resource].ts`

- **[folder/subfolder/resource]**: `expressots generate service user/create`
  This will create this folder structure: `/user/create` and the file: `create.[resource].ts`

  If you add `/` at the end of the structure, the CLI will create the resource inside of the folder. Example: `expressots generate service user/create/`
  Structure: `user/create/` and the file: `create.[resource].ts`

### Resource Root Folder

- The root folder for all resources is the `src` folder. This can be changed in the `expressots.config.ts` file.
- In the opinionated mode, the root folder is the `src` folder and the resources scaffolded with `service, usecase, dto, controller` are created inside of the `useCases` folder.
- Entities are created inside of the `entities` folder, and providers inside of the `providers` folder.

## Resource Types

Current available resources:

| Long form  | short |
| ---------- | ----- |
| usecase    | u     |
| controller | c     |
| dto        | d     |
| provider   | p     |
| service    | s     |

## Usage Example

| Command                    | Expected result                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| expressots g u user/find   | Use case to be created in the folder `useCases` with this folder structure: user/find     |
| expressots g c user/find   | Controller to be created in the folder `useCases` inside of user/find                     |
| expressots g d user/find   | DTO to be created in the folder `useCases` inside of user/find                            |
| expressots g p email/email | Provider to be created in the folder `providers` inside of user/find                      |
| expressots g s user/find   | Service creates usecase, controller and DTO and add them in the desired folder user/find |

All resources can be created using the structure `folder/subfolder/resource`.

For services, you can take advantage of creating the use case, controller and DTO at once using the structure `entity_action` or `entity-action`. Example: `expressots g s user-create`.

:::caution
The `expressots.config.ts` configuration file, located in the project root folder, determines where all resources will be created.
:::

:::info
All usecases, controllers and DTOs are being inside of the `useCases` folder. However, this may change in the future.
:::

## ExpressoTS Config File

The configuration file is located in the root folder of the project and it's called `expressots.config.ts`. This file is used to configure the CLI and the project.

Here is the current configuration file with all the available options:

```typescript
import { ExpressoConfig, Pattern } from "@expressots/core";

const config: ExpressoConfig = {
    sourceRoot: "src",
    scaffoldPattern: Pattern.KEBAB_CASE,
    opinionated: false,
};

export default config;
```

- **sourceRoot**: the root folder that will be used by the CLI to create the resources. Default: `src`
- **scaffoldPattern**: the pattern that will be used to create the resources. Default: `Pattern.KEBAB_CASE`. Example: `user-create`
- **opinionated**: if true, the CLI will create the resources using the opinionated folder structure

## Recommendations

Try to use as many different forms of creating resources as possible. This will help you to understand how the CLI works and how to use it in your favor. It also helps us improve the CLI to make it more robust.

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
