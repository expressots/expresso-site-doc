---
sidebar_position: 17
---

# Render Engine

**[ExpressoTS](https://expresso-ts.com/)** enhances the web server capabilities of Express.js by providing a streamlined experience for rendering views. ExpressoTS supports various render engines out-of-the-box, including EJS, PUG, and Handlebars (HBS). This makes it easy for developers to start rendering views without needing additional configuration, as default settings are provided for each supported engine.

## Supported Render Engines

ExpressoTS supports the following render engines:

-   EJS
-   PUG
-   HBS (Handlebars)

### Handlebars Configuration Options

```typescript
export type HandlebarsOptions = {
    viewEngine?: string; // The view engine to be used
    viewsDir?: string; // The path to the views folder
    partialsDir?: string; // The path to the partials folder
};
```

#### Default Handlebars configuration options

```typescript
{
    viewEngine: "hbs",
    viewsDir: <root>/views,
    partialsDir: <root>/views/partials,
}
```

### Default Folder structure

Default folder structure for Handlebars:

```tree
src
views
|--partials
|   |--partial.hbs
|--index.hbs
```

All other engines follow the same structure, with the exception of the `partials` folder, which is specific to Handlebars.

### Handlebars File Example

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HBS Example</title>
    </head>
    <body>
        <h1>Hello from HBS</h1>
        <p>Render partial: {{> partial}}</p>
    </body>
</html>
```

## Other Engine Configuration Options

### Pug Configuration Options

```typescript
export type PugOptions = {
    viewEngine?: string;
    viewsDir?: string;
};
```

#### Default Pug configuration options

```typescript
{
    viewEngine: "pug",
    viewsDir: <root>/views,
}
```

### EJS Configuration Options

```typescript
export type EjsOptions = {
    viewsDir?: string;
    viewEngine?: string;
    serverOptions?: EjsOptionsServer;
};
```

#### Default EJS configuration options

```typescript
{
    viewEngine: "ejs",
    viewsDir: <root>/views,
    serverOptions: {
        cache: true,
        compileDebug: false,
        debug: false,
        delimiter: "%",
        strict: false,
    },
}
```

## How to use

Here's how you can set up ExpressoTS to use a render engine like HBS (handlebars) in your application:

In the `app.provider` configuration provider, you can set the render engine:

```typescript
export class App extends AppExpress {
    private middleware: IMiddleware;
    private provider: ProviderManager;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
        this.provider = container.get(ProviderManager);
    }

    protected configureServices(): void {
        // Set the render engine to HBS
        this.setEngine(Engine.HBS);

        this.middleware.setErrorHandler();
    }

    protected async postServerInitialization(): Promise<void> {
        if (this.isDevelopment()) {
            this.provider.get(Env).checkAll();
        }
    }

    protected serverShutdown(): void {}
}
```

:::note
If you want to pass custom options to the render engine, you can do so by passing an object with the desired options to the `setEngine` method. For example, to set the views directory to a custom path, you can do the following:

```typescript
this.setEngine<HBS>(Engine.HBS, { viewsDir: <<custom-path>> });
```

:::

### How To Render Views in ExpressoTS

To render a view in ExpressoTS, you can use the `render` method provided by the `Response` object. Here's an example of how you can render a view in ExpressoTS:

```typescript
@Get("/")
root(@response() res: Response) {
    res.render("index", { date: new Date(), name: "Random information" });
}
```

In the example above, the `render` method is called on the `Response` object, passing the name of the view to be rendered and an object with data to be passed to the view. The view engine will render the view with the provided data and return the rendered HTML to the client.

### Render Decorator

The `@Render` decorator can be used on controller methods to render views using the specified view engine. Here's an example of how you can use the `@Render` decorator to render a view in ExpressoTS:

#### Rendering passing the view and default data in the decorator

```typescript
@Get("/")
@Render("index", { date: new Date(), name: "Random information" })
root() {}
```

#### Rendering passing only the view in the decorator

```typescript
@Get("/")
@Render("index")
root() {
    return { date: new Date(), name: "Random information" };
}
```

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
