---
sidebar_position: 3
---

# App Container

The Expresso TS uses [InversifyJS](https://inversify.io/) container as it is a powerful tool for managing dependencies in a TypeScript application. Also it is a type-aware container that can be used to manage the instantiation and resolution of objects, as well as the management of their life cycles.

The container provides a central location for managing dependencies and creating objects that depend on other objects. When a class is registered with the container, its dependencies are automatically resolved and injected into its constructor when it is instantiated. This allows for the creation of complex object graphs with minimal boilerplate code.

Taking advantage of InversifyJS we created a wrapper to reduce complexity on how controllers, use cases, providers get injected within the application container. The wrapper is called `AppContainer` and it is responsible for registering all the application modules within the container.

Here is an example of how to register modules within the container:

```typescript
// Create a new container
const appContainer = new AppContainer();

const container = appContainer.create([
    // Register all the modules
    UserModule,
    PaymentModule,
    ProductModule
]);

export default container;
```

The `AppContainer` class has a `create` method that receives an array of modules and returns the container with all the modules registered. The container here created is the same container that is used by the `Application` class to initialize the server.

:::note
InversifyJS contains a helper function called `buildProviderModule()` that can be used to create a module that automatically registers all providers and controllers in a given directory.

The function takes a string argument that represents the path to the directory containing the provider and controller classes, and returns a module that can be registered with the InversifyJS container. The module will automatically register all provider and controller classes in the directory and its subdirectories.

This is a useful feature when building large applications with many providers and controllers, as it allows you to easily register them all without having to manually register each one.

Note that buildProviderModule() only works with providers and controllers that are decorated with the @injectable() decorator.
:::

The reason why we created the `AppContainer` class is to reduce the complexity of how the container is created and to provide a way to register modules without too much extra configuration.

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- [Become a sponsor on GitHub]("")
- Follow the organization on GitHub and Star the project
- Subscribe to the Twitch channel: [Richard Zampieri](https://www.twitch.tv/richardzampieri)
- Contribute submitting issues and pull requests
- Share the project with your friends and colleagues