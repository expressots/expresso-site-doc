---
sidebar_position: 5
---

# Controllers

Controllers act as the primary interface between the client and server in Node.js applications. They handle incoming requests, validate payloads against Input DTO, and emit responses in the DTO format output. In essence, controllers bridge the communication between clients and service layers, also known as use-cases.

Data Transfer Object (DTO) is a commonly used design pattern in Node.js applications that standardizes data formats for communication between different application layers, including client-server or server modules. DTO serves as an interface for data exchange, ensuring clear and standardized structures for input and output data. By separating business logic from communication logic, it helps to reduce application complexity and decouple different layers.

Using DTOs can improve application performance and scalability by reducing the data transfer between the client and server and providing more efficient ways to process and handle data within the application.

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

The controller class in Expresso TS represents the endpoint that you want to create for your application. You can define the route and HTTP method for the controller by using the `@controller()` decorator from the [Inversify Express Utils package](https://github.com/inversify/inversify-express-utils).

Each controller class contains a single method called `execute()` that handles the request and sends the response. This method is annotated with the `@httpMethods()` decorator from the same package. Additionally, you can also annotate the parameters of the `execute()` method.

Here is an example of a simple Expresso TS controller class:

```typescript
@controller("/")
class AppController {
  
  @httpGet("/")
  execute(@response() res: any) {
    return res.send("Hello from Expresso TS!");
  }
}
```

## Base Controller Class

We also power a controller class with the `BaseController` class that offers in the constructor a parameter that the developer can indicate what service or domain he is currently building. This helps the log system throw errors with more information about the context of the error and where the error occurred.
Another advantage of using the `BaseController` class is that it offers a method in two different versions async and sync, which is the `callUseCase() or async callUseCaseAsync()`.

These methods reinforce the idea of one use case per controller, and they are responsible for calling the use case that will implement the business logic of the controller.

The signature of this function is the following:

```typescript
callUseCaseAsync(useCase: Promise<any>, res: any, successStatusCode: number);
```

- `useCase`: The use case that will be called. This use case is injected in the controller constructor.
- `res`: The response object from the express request.
- `successStatusCode`: The status code that will be sent to the client if the use case is executed successfully. Please see the StatusCode type for more information. 

A more complete example of a controller class inheriting from the `BaseController` class is shown below:

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

## HTTP Methods and Parameters Decorators

HTTP methods and parameters decorators are a set of annotations used in Expresso TS applications to define the routing and request handling for HTTP requests.

The HTTP methods decorators include @httpGet(), @httpPost(), @httpPut(), @httpPatch(), @httpHead(), @httpDelete(), and @httpMethod(). These decorators are used to define the HTTP method and the path of a specific route in the application.

The parameters decorators include @queryParam(), @requestParam(), @requestBody(), @requestHeaders(), @cookies(), @next(), and @request(). These decorators are used to retrieve data from HTTP requests, such as query parameters, request headers, and request body.

Using these decorators can simplify the routing and handling of HTTP requests in Node.js applications, and make the code more readable and maintainable.

### HTTP Methods Decorators

Here's a list of all available `@httpMethods()` decorators in Expresso TS, along with their description and usage:

| Decorator	  | Description                                        | Usage                        |
| ----------- | -------------------------------------------------- | ---------------------------- | 
| @httpGet	  | Binds a controller method to a GET HTTP verb.      | @httpGet("/path")            |
| @httpPost	  | Binds a controller method to a POST HTTP verb.     | @httpPost("/path")           |
| @httpPut	  | Binds a controller method to a PUT HTTP verb.      | @httpPut("/path")            |
| @httpPatch  | Binds a controller method to a PATCH HTTP verb.    | @httpPatch("/path")          |
| @httpHead	  | Binds a controller method to a HEAD HTTP verb.	   | @httpHead("/path")           |
| @httpDelete |	Binds a controller method to a DELETE HTTP verb.   | @httpDelete("/path")         |
| @httpMethod |	Binds a controller method to a specified HTTP verb.| @httpMethod("verb", "/path") |

### Parameter Decorators

Here's a list of all available parameter decorators in Expresso TS, along with their description and usage:

| Decorator	                           | Description	                                        | Usage
| ------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------- |
| @request()	                       | Injects the Express Request object	                    | execute(@request() req: Request)
| @response()	                       | Injects the Express Response object	                | execute(@response() res: Response)
| @requestParam(paramName?: string)	   | Injects a parameter from the request URL path	        | execute(@requestParam('id') id: string)
| @queryParam(paramName?: string)	   | Injects a parameter from the request URL query string	| execute(@queryParam('searchTerm') searchTerm: string)
| @requestBody()	                   | Injects the request body payload	                    | execute(@requestBody() body: MyDTO)
| @requestHeaders(headerName?: string) | Injects a header from the request headers	            | execute(@requestHeaders('authorization') auth: string)
| @cookies(cookieName?: string)	       | Injects a cookie from the request cookies	            | execute(@cookies('session') session: string)
| @next()	                           | Injects the Express NextFunction object	            | execute(@next() next: NextFunction)

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- [Become a sponsor on GitHub]("")
- Follow the organization on GitHub and Star the project
- Subscribe to the Twitch channel: [Richard Zampieri](https://www.twitch.tv/richardzampieri)
- Contribute submitting issues and pull requests
- Share the project with your friends and colleagues