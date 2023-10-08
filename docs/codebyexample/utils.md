---
sidebar_position: 6
---

# ExpressoTS Utilities

## Status Codes

It is an enum that contains all HTTP status codes.

```typescript
StatusCode.OK;
```

## Reporting Errors

For more information about Error Handling, see [Error Handling](../overview/error-handling.md).

Here are the parameters of the `error` method:

- error: An instance of Error or a string that describes the error.
- statusCode: The HTTP status code associated with the error (default is 500).
- service: The service name associated with the error.
- @throws: An object of the custom type AppError, which includes details about the error.

```typescript
@provide(YourUseCase)
export class YourUseUseCase {
  constructor(private report: Report) {}

  execute() {
    this.report.error("Something went wrong!");
    return "Hello ExpressoTS!";
  }
}
```

## Logging

Logger is a class that provides a set of methods to log messages using native node modules for better performance.

Logger take two parameters:

- message: The message to be logged.
- module: The service name associated with the log.

```typescript
export class YourUseUseCase {
  constructor(private log: Logger) {}

  execute() {
    this.log.info("Testing log message", "YourUseUseCase");
    return "Hello ExpressoTS!";
  }
}
```

There are 4 methods available:

- info: Logs an informational message.
- warn: Logs a warning message.
- error: Logs an error message.
- msg: Logs a message.

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
