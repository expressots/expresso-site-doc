---
sidebar_position: 18
---

# ExpressoTS Config File

The ExpressoTS configuration file is located in the root folder of the project and it's called `expressots.config.ts`. This file is used to configure the CLI and the project.

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

-   **scaffoldSchematics**: the folder convention names for each resource. Default: `useCases`, `entities`, `providers`, `middlewares`, `controllers`, `dtos`. With scaffold schematics you can customize the folder and resource names.

:::caution
Scaffold schematics are only designed for the non-opinionated template. The opinionated template has a predefined structure.
:::

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

```

```
