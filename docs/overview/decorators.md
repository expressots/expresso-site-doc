---
sidebar_position: 10
---

# Decorators

Here is a complete list of all the decorators that are available in Expresso TS as wel as a brief description of what they do.

## Class decorators

| Decorator | Description |
| --------- | ----------- |
| @provide  | Binds a class to a dependency injection container. |
| @injectable | Marks a class as available to be injected. |
| @inject | Marks a class as available to be injected in the constructor of another class. |

## Controller decorators

| Decorator | Description |
| --------- | ----------- |
| @controller | Marks a class as a controller. |

### HTTP method decorators

| Decorator | Description |
| --------- | ----------- |
@httpGet | Binds a controller method to a GET HTTP verb.|
@httpPost |	Binds a controller method to a POST HTTP verb.|
@httpPut | Binds a controller method to a PUT HTTP verb.|
@httpPatch | Binds a controller method to a PATCH HTTP verb.|
@httpHead |	Binds a controller method to a HEAD HTTP verb.|
@httpDelete | Binds a controller method to a DELETE HTTP verb.|
|@httpMethod | Binds a controller method to a specified HTTP verb.|

### Parameter decorators

 Decorator | Description |
| --------- | ----------- |
| @request() | Injects the Express Request object.|
| @response() | Injects the Express Response object.|
| @requestParam(paramName?: string) | Injects a parameter from the request URL path.|
| @queryParam(paramName?: string) | Injects a parameter from the request URL query string.|
| @requestBody() | Injects the request body payload.|
| @requestHeaders(headerName?: string) | Injects a header from the request headers.|	
| @cookies(cookieName?: string) | Injects a cookie from the request cookies. |
| @next() | Injects the Express NextFunction object.|

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on GitHub (work in progress)
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our [Discord](https://discord.com/invite/PyPJfGK)
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues