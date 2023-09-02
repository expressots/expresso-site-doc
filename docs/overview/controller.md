---
sidebar_position: 5
---

# Controllers

Controllers act as the primary interface between the client and server in ExpressoTS applications. They handle incoming requests, validate payloads against an input DTO, and emit responses in the DTO pattern. In essence, controllers bridge the communication between clients and service layers, also known as use-cases.

## DTO Pattern

Data Transfer Object (DTO) is a commonly used design pattern that standardizes data formats for communication between different application layers, including client-server or server modules. DTO serves as an interface for data exchange, ensuring clear and standardized structures for input and output data. By separating business logic from communication logic, it helps to reduce application complexity and decouple different layers.

Using DTOs can improve application performance and scalability by reducing the data transfer between the client and server and providing more efficient ways to process and handle data within the application.

### DTO Example

For example, imagine a user registration scenario where name, email, and password are collected, and ID is auto-generated. The user object DTO for Input and Response could have possible formats, as shown below:

```typescript
// UserCreateInputDTO
interface UserCreateInputDTO {
  name: string;
  email: string;
  password: string;
}

// UserCreateResponseDTO
interface UserCreateResponseDTO {
  id: string;
  name: string;
  status: string;
}

// Payload json format
{
  "name": string,
  "email": string,
  "password": string
}
```

Having two different DTO formats is essential in this case because while registering a user, we don't want to return the password to the client due to security concerns. Therefore, we created a different DTO for the response, adding a complementary field called status, where a message is typically sent to the client, indicating that the user was created successfully.

As a result, DTOs help to segregate and filter the data being sent to the client, reducing the amount of data processed by the application.

## Controller Class

The controller class in ExpressoTS represents the endpoint that you want to create for your application. You can define the route and HTTP method for the controller by using the `@controller()` decorator from the [Inversify Express Utils package](https://github.com/inversify/inversify-express-utils).

Each controller class contains a single method called `execute()` that handles the request and sends the response. This method is annotated with the **[@httpMethods()](./decorators.md)** decorators. Additionally, you can also annotate the parameters of the `execute()` method.

Here is an example of a simple ExpressoTS controller class:

```typescript
@controller("/")
class AppController {
  
  @httpGet("/")
  execute(@response() res: any) {
    return res.send("Hello from ExpressoTS!");
  }
}
```

:::info
In the AppController class above we are using res as any (`res:any`), but the `res:Response` type from the `express` package is also available for use. This allows you to make use of all the methods that the **[Response](https://expressjs.com/en/4x/api.html#res)** type offers.
:::

## BaseController Class

We also power a controller class with the `BaseController` class that offers in the constructor a parameter that the developer can indicate what service or domain he is currently building. This helps the log system throw errors with more information about the context of the error and where the error occurred.

Another advantage of using the `BaseController` class is that it offers a method in two different versions async and sync, which is the `callUseCase() or callUseCaseAsync()`.

These methods reinforce the idea of one use case per controller, and they are responsible for calling the use case that will implement the business logic of the controller.

:::tip
The callUseCase methods, available in both synchronous and asynchronous versions, are well-suited for returning status and JSON responses to clients, as the users just need to pass the useCase return, res:Response, and statusCode.
:::

The signature of the `callUseCase` method:

```typescript
callUseCase(useCase: any, res: any, successStatusCode: number);
```

- `useCase`: The use case that will be called. This use case is injected in the controller constructor.
- `res`: The response object from the express request.
- `successStatusCode`: The status code that will be sent to the client if the use case is executed successfully. Please see the **[Http Status Code](./status-code.md)** type for more information.

The default response:

```typescript
return res.status(successStatusCode).json(dataReturn);
```

A more complete example of a controller class inheriting from the **BaseController** class is shown below:

```typescript
@controller("/")
class AppController extends BaseController {
  constructor(private appUseCase: AppUseCase) {
    super("app-controller");
  }

  @httpGet("/")
  execute(@response() res: any): IAppResponseDTO {
    return this.callUseCase(this.appUseCase.execute(),
      res,
      StatusCode.OK
    );
  }
}
```

## Controller Scope

The default scope of a controller is `Request`, as it is inherited from the `AppContainer` and default `Module` class scope. However, you can override the scope of a controller by using the `@scope()` decorator. This decorator accepts the same BindingScopeEnum enum values.

:::info
If you define the module scope you can not override it in a specific controller by using the `@scope` decorator.
The `@scope` decorator can only be used in specific controllers if the module scope is not defined.
:::

Here is an example of usage:

```typescript
@scope(BindingScopeEnum.Singleton)
@controller("/")
class CreateUserController extends BaseController { }
```

The controller above will be scoped as `Singleton` and will be shared across all requests.

## Controller Decorators

HTTP methods and parameters decorators are a set of annotations used in ExpressoTS applications to define the routing and request handling for HTTP requests. Using the decorators listed below can simplify the routing and handling of HTTP requests in ExpressoTS applications, and make the code more readable and maintainable.

### HTTP Methods Decorators

Here's a list of all available `@httpMethods()` decorators in ExpressoTS, along with their description and usage:

| Decorator   | Description                                        | Usage                        |
| ----------- | -------------------------------------------------- | ---------------------------- |
| @httpGet    | Binds a controller method to a GET HTTP verb.      | @httpGet("/path")            |
| @httpPost   | Binds a controller method to a POST HTTP verb.     | @httpPost("/path")           |
| @httpPut    | Binds a controller method to a PUT HTTP verb.      | @httpPut("/path")            |
| @httpPatch  | Binds a controller method to a PATCH HTTP verb.    | @httpPatch("/path")          |
| @httpHead   | Binds a controller method to a HEAD HTTP verb.     | @httpHead("/path")           |
| @httpDelete | Binds a controller method to a DELETE HTTP verb.   | @httpDelete("/path")         |
| @httpMethod | Binds a controller method to a specified HTTP verb.| @httpMethod("verb", "/path") |

### Parameter Decorators

Here's a list of all available parameter decorators in ExpressoTS, along with their description and usage:

| Decorator                            | Description                                            | Usage
| ------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------- |
| @request()                           | Injects the Express Request object.                     | execute(@request() req: Request)
| @response()                          | Injects the Express Response object.                    | execute(@response() res: Response)
| @requestParam(paramName?: string)    | Injects a parameter from the request URL path.          | execute(@requestParam('id') id: string)
| @queryParam(paramName?: string)      | Injects a parameter from the request URL query string.  | execute(@queryParam('searchTerm') searchTerm: string)
| @requestBody()                       | Injects the request body payload.                       | execute(@requestBody() body: MyDTO)
| @requestHeaders(headerName?: string) | Injects a header from the request headers.              | execute(@requestHeaders('authorization') auth: string)
| @cookies(cookieName?: string)        | Injects a cookie from the request cookies.              | execute(@cookies('session') session: string)
| @next()                              | Injects the Express NextFunction object.                | execute(@next() next: NextFunction)

## An MVC Approach

Despite the fact that the opinionated template recommends one controller and one use case per route, you can use the MVC approach or any other pattern you want. For this we recommend the use of a `non-opinionated` template, in which the developer has the freedom to customize their application.

Here is an example of use MVC approach, which contains a single controller class that handles the request for a product resource:

```typescript
@controller("/product")
class ProductController {
  @httpPost("/")
  create(@response() res: any) {
    return res.status(201).json({ message: "Product created" });
  }

  @httpGet("/")
  list(@response() res: any) {
    return res.status(200).json({ message: "Product listed" });
  }

  @httpGet("/:id")
  get(@response() res: any) {
    return res.status(200).json({ message: "Product get" });
  }

  @httpPatch("/:id")
  update(@response() res: any) {
    return res.status(200).json({ message: "Product updated" });
  }

  @httpDelete("/:id")
  delete(@response() res: any) {
    return res.status(200).json({ message: "Product deleted" });
  }
}
```

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues