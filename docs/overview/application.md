---
sidebar_position: 2
---

# Application

At the heart of an ExpressoTS application lies the `App` class. It serves as the foundation for creating and configuring the server. Additionally, the App class allows middleware and providers to be configured in the server bootstrapping process. The App class also provides lifecycle hooks that allow developers to execute code before, after, and on server shutdown. This section provides an overview of the ExpressoTS application architecture, its components, and the workflow of an ExpressoTS application.

![Application Overview](./img/app-overview.png)

## Application architecture

The architecture of an ExpressoTS application is built around the **[Inversify](https://inversify.io/)** IoC container, which is used to identify and inject dependencies into class constructors. This approach allows the IoC container to load all the necessary modules, including their respective routes (controllers). By using use-cases and providers as needed, routers can handle incoming requests.

## Core components and their roles

The ExpressoTS application architecture is predicated on several pivotal components:

-   **DTO IN/OUT**: Defines the structure for incoming and outgoing data, ensuring type safety and consistency across the application.
-   **Controller**: Manages request processing, routing based on URL and HTTP method, and data validation.
-   **Use Case**: Executes specific logic for handling requests, acting upon validated data from controllers to perform operations and return responses.
-   **Provider**: Supplies external functionalities like database access, email services, or authentication mechanisms.
-   **Repository**: Facilitates direct communication with the database for CRUD operations, abstracting the data layer.

:::info
Providers and Repositories are optional components. You can use them if you need to provide extra functionality to your application such as database integration, logging system, authentication, email etc.
:::

## Application workflow

The workflow begins with the server initialization, including setting up the container, modules, and controllers. Upon receiving requests, the server invokes the relevant controller, which then triggers the corresponding use case. If needed, use cases interact with providers to access external resources or services.

:::warning Initializing the Application without a controller
ExpressoTS will prevent you from initializing the Application without a controller since there are no listeners to handle incoming requests. You will see the following message in the console:
**_No controllers have been found! Please ensure that you have register at least one Controller._**
:::

## AppExpress class

The AppExpress class offers a way to create and configure the server, passing **[Express.js middlewares](https://expressjs.com/en/guide/writing-middleware.html)**, register external providers, and set up the server environment. The AppExpress class provides three lifecycle hooks that allow developers to execute code before, after, and on server shutdown. The following is the AppExpress class structure:

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
        this.provider.register(Env);

        this.middleware.addBodyParser();
        this.middleware.setErrorHandler();
    }

    protected postServerInitialization(): void {
        if (this.isDevelopment()) {
            this.provider.get(Env).checkAll();
        }
    }

    protected serverShutdown(): void {}
}
```

:::info
The `App` class offers a set of out-of-the-box middlewares and providers that can be used to configure your application. See the complete list in the **[Middleware section](./middleware.md)**
:::

## Application bootstrapping

The application bootstrapping process involves creating the server, passing the container, the App class, and starting the server. The AppFactory class provides the create and listen method that allows developers to create the server and listen for incoming requests. The following is the Bootstrap function that creates the server:

```typescript
async function bootstrap() {
    const app = await AppFactory.create(container, App);
    await app.listen(3000, ServerEnvironment.Development);
}
```

:::info
The framework currently supports Express as its primary adapter, with Fastify and other possible in house server under development.
:::

### Environment management

The server environment is defined through the `ServerEnvironment` enum, with support for `development` and `production` modes, defaulting to development if `NODE_ENV` is unset.

-   ServerEnvironment.Development;
-   ServerEnvironment.Production;

## Application lifecycle hooks

Another important aspect of the Application class is lifecycle hooks. These hooks allow developers to execute code before, after and on server shutdown.

```typescript
    /* Add any service that you want to be initialized before the server starts */
    protected configureServices(): void { }

    /* Add any service that you want to execute after the server starts */
    protected postServerInitialization(): void { }

    /* Add any service that you want to execute after server is shutdown */
    protected serverShutdown(): void { }
```

### Hooks Execution Order

![Application Lifecycle Hooks](./img/app-life-cycle.png)

## Application Scripts

Scripts for building, running, and testing the application are provided, accommodating different development stages and operational needs, from development to production.

| Script           | Description                                     | Command            |
| ---------------- | ----------------------------------------------- | ------------------ |
| expressots build | Build the production bundle in a ./dist folder. | npm run build      |
| expressots dev   | Runs in development watch mode.                 | npm run dev        |
| expressots prod  | Runs in production mode based on built bundle.  | npm run prod       |
| test             | Run your tests located in the test folder.      | npm run test       |
| test:watch       | Run your tests in watch and interactive mode.   | npm run test:watch |
| test:cov         | Produces test coverage report.                  | npm run test:cov   |
| format           | Format the code using prettier.                 | npm run format     |
| lint             | Lint code using eslint.                         | npm run lint       |

## Starting the application

```bash
npm run dev
```

This will start the application with console output indicating the version, running port, and environment, providing clear feedback on the application's running state.

`expressots-demo version 1.0.0 is running on port 3000 - Environment: development`

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
