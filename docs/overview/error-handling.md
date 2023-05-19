---
sidebar_position: 14
---

# Error Handling

When it comes to error handling in Node.js TypeScript APIs, there are several best practices and approaches you can follow. ExpressoTS providers a simple and easy way to handle errors.

- We use HTTP status codes appropriately: HTTP **[status codes](./status-code.md)** are used to indicate the status of a response. It is important to use them appropriately in your API to indicate the success or failure of an operation.

- We use a consistent error format: Define a consistent error format across your API so that consumers can easily understand and handle errors.

- We handle errors in middleware: Middleware functions are a great way to handle errors in a centralized location.

- We use try-catch blocks: Use try-catch blocks to handle synchronous errors in your code. If an error occurs in the try block, the catch block can handle it. Be sure to throw the error so that it can be handled by our error handling middleware.

- We use async/await error handling: When using async/await, you can use try-catch blocks to handle synchronous errors in your code. However, you also need to handle any asynchronous errors that may occur.

- We log errors: Logging errors is important for debugging and monitoring.

## Our approach

We developed a standardized error class called `AppError` that can help to provide more detailed and informative error messages that can be easily interpreted and acted upon by developers.

In addition, the `Report` class provides a centralized location for throwing and handling errors, which can simplify error handling throughout the application.

The errorHandler function provides a centralized location for handling errors that occur during request processing. By defining a standard error response format, it helps to ensure consistency in error messages that are returned to clients.

This approach is best used in applications with a large codebase or complex business logic, where errors may occur frequently and need to be handled consistently across different parts of the application.

### AppError class

The `AppError` class extends the built-in Error class, adding a status code and service property.
It is designed for handling application-specific errors with more detailed information.

```typescript
class AppError extends Error {

    public statusCode: number;
    public service: string;

    /**
     * Constructs a new AppError instance.
     * @param statusCode - The status code associated with the error.
     * @param message - The error message.
     * @param service - An optional service name related to the error.
     */
    constructor(statusCode: number, message: string, service?: string) {
        super(message);

        this.statusCode = statusCode;
        this.service = service;
    }
}
```

### Report error

Report class is a utility class to manage and throw application-specific errors.

```typescript
class Report {

    /**
     * Error method takes an instance of AppError and throws it.
     * @param error - An instance of AppError containing error details.
     */
    public static Error(error: AppError) {
    
        throw error;
    }
}
```

### Middleware

```typescript
function errorHandler(error: AppError, req: Request, res: Response, next: NextFunction): void {
    
    log(LogLevel.Error, error, error.service || "service-undefined");
    res.status(error.statusCode || StatusCode.InternalServerError).json({statusCode: error.statusCode, error: error.message});
}

export default errorHandler;
```

:::info
function `errorHandler()` is a custom Express error-handling middleware function.
It logs the error, sets the status code, and sends a JSON response containing the status code and error message.
:::

## Example of use

```typescript
 Report.Error(new AppError(StatusCode.BadRequest, "User already exists", "create-user-usecase"));
```

```typescript
@provide(CreateUserUseCase)
class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO | null {
        try {
            const { name, email } = data;

            const userAlreadyExists = await this.userRepository.findByEmail(email);

            if (userAlreadyExists) {
                Report.Error(
                    new AppError(
                        StatusCode.BadRequest,
                        "User already exists",
                        "create-user-usecase",
                    ),
                );
            }

            const user: User | null = this.userRepository.create(new User(name, email));

            let response: ICreateUserResponseDTO;

            if (user !== null) {
                response = {
                    id: user.Id,
                    name: user.name,
                    email: user.email,
                    status: "success",
                };
                return response;
            }

            return null;
        } catch (error: any) {
            throw error;
        }
    }
}
```

## Error components description

| Object          | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| Report.Error    | Static method to report known errors                                    |
| AppError        | App Error object that carries error stack, message and code             |
| StatusCode      | Http responses code and message                                         |
| Error Message   | Error message detail that the developer wants to log                    |
| Error Service   | To be used in the log system to indicate where the error was generated  |

---

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues