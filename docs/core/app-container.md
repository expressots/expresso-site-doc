---
sidebar_position: 2
title: App container
description: The AppContainer simplifies module registration.
---

# App container

ExpressoTS uses **[InversifyJS](https://inversify.io/)** for dependency injection, making it easy to manage object creation, resolution, and lifecycle.
The use of `appContainer` abstracts away the intricacies of InversifyJS direct usage, providing a straightforward path to integrating and managing modules within ExpressoTS applications.

## Setup

The application container can be customized to enhance flexibility in dependency management through the following options:

-   defaultScope:
    -   RequestScope: Creates a new instance of a dependency for each request.
    -   SingletonScope: Creates a single instance shared across all requests.
    -   TransientScope: Creates a new instance every time the dependency is requested.
-   skipBaseClassChecks: When enabled, the container skips base class checks for derived classes, providing more flexibility.
-   autoBindInjectable: When enabled, the container automatically injects classes that are not explicitly bound.

Here is the interface options definition:

```typescript
interface ContainerOptions {
    defaultScope?: interfaces.BindingScope;
    skipBaseClassChecks?: boolean;
    autoBindInjectable: false;
}
```

## Creating the container

```typescript title="app.container.ts"
export const appContainer: AppContainer = new AppContainer({
    defaultScope: BindingScopeEnum.Singleton,
    skipBaseClassChecks: true,
    autoBindInjectable: false,
});

const container = appContainer.create([
    // Add your modules here
    AppModule,
]);

export { container };
```

## Modules registration

The `appContainer` facilitates module registration via its `create([])` method, which accepts an array of modules.

Here an example of PaymentModule creation:

```typescript title="payment.module.ts"
export const PaymentModule: ContainerModule = CreateModule([CreatePaymentController]);
```

```typescript title="Module registration"
// Create a new container
const appContainer: AppContainer = new AppContainer();

const container: Container = appContainer.create([UserModule, PaymentModule]);
```

:::tip
When scaffolding a new module using the Opinionated template, the module is automatically registered in the container.
:::

## Container options

After creating the container, you have the following options available:

-   <span class="span-table">Container Object</span>: Access the container and manage its bindings.
-   <span class="span-table">View Container Bindings</span>: Check the injected classes and their scopes. The container can be used to view all the bindings that have been registered. This can be useful for debugging purposes or to understand the dependencies that have been registered.
-   <span class="span-table">View Container Options</span>: Review the container's defined options

See below image for a visual representation of the container bindings.

```typescript title="app.container.ts"
appContainer.viewContainerBindings();
```

![Container Bindings View](./img/container-bindings.png)

## Support us ❤️

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.
If you'd like to help, please read our **[support guide](../support-us.mdx)**.