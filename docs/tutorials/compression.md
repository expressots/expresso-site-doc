---
sidebar_position: 1
---

# Compression

The npm compression package is a middleware that can compress response bodies for requests that traverse through it. This helps reduce the size of data that's sent over the network, leading to quicker response times and lower bandwidth usage. It uses the zlib library to perform gzip or deflate compression, both of which are widely supported by modern web browsers.

## How to Use Compression in ExpressoTS

Install the npm compression middleware.

```bash
npm i compression
npm i -D @types/compression
```

### Add Middleware Globally

**Non-opinionated template**: add the compression middleware in the `AppFactory` create method.

```typescript
import compression from "compression";

async function bootstrap() {
    const app = await AppFactory.create(container, [compression()]);
    await app.listen(3001, ServerEnvironment.Development);
}

bootstrap();
```

**Opinionated template**: configure the compression middleware in the `App` provider class. In the opinionated template common `expressjs` middlewares are offered out-of-the-box. Explore the options in `this.middleware` property.

```typescript
@provide(App)
export class App extends AppExpress {
    private middleware: IMiddleware;
    private provider: IProvider;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
        this.provider = container.get<IProvider>(Provider);
    }

    protected configureServices(): void {
        this.middleware.addCompression();
    }

    protected postServerInitialization(): void {
        if (this.isDevelopment()) {
            this.provider.envValidator.checkAll();
        }
    }

    protected serverShutdown(): void {}
}
```

Using compress with filters, filtering requests that contain payload bodies larger than 100 \* 1024 bytes:

```typescript
async function bootstrap() {
    const app = await AppFactory.create(container, [
        compression({
            level: 6,
            threshold: 100 * 1024,
            filter: (req, res) => {
                if (req.headers["x-no-compression"]) {
                    return false;
                }
                return compression.filter(req, res);
            },
        }),
    ]);
    await app.listen(3001, ServerEnvironment.Development);
}

bootstrap();
```

### Add Middleware to a Route

This is valid for both templates. You can add the compression middleware to a specific route.

```typescript
@Get("/", compression())
execute(){};
```

:::tip
For more information about the npm compression package, please visit the **[npm compression package](https://www.npmjs.com/package/compression)**.
:::

## Compression Package

-   Performance: It can significantly reduce the size of the response body, thereby decreasing the time it takes for a client to download the response and render the content.

-   Efficiency: It helps in reducing bandwidth consumption which is especially useful if your server is sending large amounts of data or if you have limited bandwidth.

-   Overhead: While compression reduces the size of the response body, it does add some computational overhead on the server-side as the server must compress the response body before sending it.

:::caution COMPRESSION OVERHEAD
This might not be ideal for high traffic websites where server resources are at a premium.

Not all content benefits from compression. Binary files like images and videos are already compressed and trying to compress them further can sometimes increase their size.
:::

## When to Use

Deciding on when to use compression depends on the use case. If your website serves a lot of textual data (HTML, CSS, JS, JSON, XML etc.), then using the npm compression package can result in significant bandwidth savings and performance benefits. However, if your website is extremely high traffic, the additional computational overhead of compression might start to become a bottleneck.

In high traffic scenarios, it might be more beneficial to use a reverse proxy or a CDN (Content Delivery Network) which can serve static assets and perform caching. This can offload some of the traffic from your main servers and also serve content from locations geographically closer to users, resulting in faster response times. These services usually handle compression themselves, meaning you wouldn't need to use the npm compression package.

Modern approaches could involve a combination of techniques - serving static assets from a CDN, caching responses where appropriate, utilizing HTTP/2 for multiplexing, and splitting up your application into microservices to distribute the load.

Remember, these approaches aren't mutually exclusive. Often the best approach is to use a combination of these techniques based on the specific requirements of your application. Testing and monitoring your application under realistic workloads can help you make the best decision.

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
