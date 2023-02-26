---
sidebar_position: 2
---

# Application

The Application Overview provides a comprehensive demonstration of the main components of an Expresso TS application. At the heart of an Expresso TS application lies the Application class, which serves as the foundation for creating and configuring the server. Additionally, the Application class makes use of the application container from Inversify that loads all the modules, including their respective routes [controllers]. This ensures a streamlined and efficient process for handling incoming requests and delivering the appropriate responses.

![Application Overiview](./img/app-overview.png)

Expresso TS is a web application framework that provides a simple wrapper around popular HTTP servers like [Express](https://expressjs.com), [Fastify](https://www.fastify.io/), or [Koa](https://koajs.com/). Currently, Expresso TS only supports Express.

The architecture of an Expresso TS application is based on [Inversify's](https://inversify.io/) IoC container, which is used to identify and inject dependencies into class constructors. This approach allows the IoC container to load all the necessary modules, including their respective routes (controllers). By using use-cases and providers as needed, routers can handle incoming requests.

By leveraging the power of Inversify, Expresso TS provides a scalable and modular architecture that helps to decouple components and improve maintainability. This allows developers to focus on writing clean and maintainable code, rather than worrying about dependency management.

## Application Components Breakdown

| Component             | Description                                                                                                                                                                                                                                                                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DTO IN / OUT          | Data transfer object that defines the format of the incoming and outgoing payload of the application.                                                                                                                                                                                                                                                           |
| Controller            | Component responsible for processing requests and responses based on the URL and HTTP method. It also validates the conformity of the incoming data.                                                                                                                                                                                                           |
| Use Case              | Component responsible for implementing the logic required to handle requests received from the controller. When the controller receives an HTTP request and validates the incoming data, it triggers the relevant use case, passing along the validated data for processing. The use case performs the necessary operations based on the request and returns the appropriate response to the controller, which then sends the response back to the client. |



## Workflow

If you look at the diagram above, you can see that the workflow of an Expresso TS application is quite simple. After the application initialized with all the components hooked such as the container, modules and controllers, the server starts listening for incoming requests. When a request is received, the server will look for the appropriate route and execute the corresponding controller, in which we usually call endpoints. The controller then calls the appropriate use-case, which in turn calls the appropriate provider when required. Providers are the external components and they exist to provide extra functionality to the application. 