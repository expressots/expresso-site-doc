---
sidebar_position: 16
---

# Render

**[Express.js](https://expressjs.com/en/5x/api.html#res.render)** offers a `render` method to render a view and send the rendered HTML string to the client.

In ExpressoTS as we do support Express.js, we also support the `render` capability offered by the HTTP response object.

ExpressoTS implements a basic support for render engines in the `Application` class. At the moment the number of renders supported is limited to Handlebars.

We created the `RenderTemplateOptions` interface to provide a structure for the configuration options of future render engines.
Currently we just support a very limited number of options for Handlebars, but we will expand this in the future, not just the options but also the number of supported render engines.

## IHandlebars interface example

```typescript
interface IHandlebars {
    /**
     * Specifies the extension name for the Handlebars templates.
     */
    extName: string;

    /**
     * Specifies the path to the directory containing the Handlebars templates.
     */
    viewPath: string;

    /**
     * Specifies the function for rendering Handlebars templates.
     */
    engine: Engine;
}

type RenderTemplateOptions = IHandlebars;
```

## How to use

```typescript
import { AppInstance, IHandlebars, ServerEnvironment } from "@expressots/core";

async function bootstrap() {
    AppInstance.create(container);
    
    // Setting handlebars as the view engine.
    AppInstance.setEngine<IHandlebars>({
        extName: "hbs",
        viewPath: path.join(__dirname, "..", "views"),
        engine: engine({ defaultLayout: "layout", extname: "hbs" }),
    });

    AppInstance.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

:::tip
For the code above to work, you need to install the **[express-handlebars](https://www.npmjs.com/package/express-handlebars)** package as well as having a folder structure similar to the one below.
:::

## Folder structure

```tree
src
|--views
|   |--layouts
|   |   |--layout.hbs
|   |--index.hbs
```

## Installing express-handlebars

```bash
npm i express-handlebars
```

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues