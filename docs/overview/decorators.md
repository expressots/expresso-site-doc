---
sidebar_position: 10
---

# Decorators

Here is a complete list of all the decorators that are available in ExpressoTS as wel as a brief description of what they do.

## Class decorators

Decorators available for your classes.

| Decorator          | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| @provide           | Binds a class to a dependency injection container as RequestScope.             |
| @provideSingleton  | Binds a class to a dependency injection container as Singleton.                |
| @provideTransient  | Binds a class to a dependency injection container as Transient.                |
| @injectable        | Marks a class as available to be injected.                                     |
| @inject            | Marks a class as available to be injected in the constructor of another class. |

## Controller decorators

Decorators available for your controllers.

| Decorator   | Description                    | Usage example
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| @controller | Marks a class as a controller. | @controller("/path", middleware[])                           |
| @scope      | Binds a controller to a scope. | @scope(BindingScopeEnum.Singleton, or Request, or Transient) |

### HTTP method decorators

Decorators available for your controller methods.

| Decorator   | Description                                                        | Usage                          |
| ----------- | ------------------------------------------------------------------ | ---------------------------- |
| @httpGet    | Binds a controller method to a GET HTTP verb.                      | @httpGet("/path")            |
| @httpPost   | Binds a controller method to a POST HTTP verb.                     | @httpPost("/path")           |
| @httpPut    | Binds a controller method to a PUT HTTP verb.                      | @httpPut("/path")            |
| @httpPatch  | Binds a controller method to a PATCH HTTP verb.                    | @httpPatch("/path")          |
| @httpHead   | Binds a controller method to a HEAD HTTP verb.                     | @httpHead("/path")           |
| @httpDelete | Binds a controller method to a DELETE HTTP verb.                   | @httpDelete("/path")         |
| @httpMethod | Binds a controller method to a specified HTTP verb.                | @httpMethod("verb", "/path") |

### Parameter decorators

Here is a list of all parameter decorators available in ExpressoTS, along with their description and usage:

| Decorator	                           | Description	                                        | Usage
| ------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------- |
| @request()	                         | Injects the Express Request object.	                    | execute(@request() req: Request)
| @response()	                         | Injects the Express Response object.	                | execute(@response() res: Response)
| @requestParam(paramName?: string)	   | Injects a parameter from the request URL path.	        | execute(@requestParam('id') id: string)
| @queryParam(paramName?: string)	     | Injects a parameter from the request URL query string. | execute(@queryParam('searchTerm') searchTerm: string)
| @requestBody()	                     | Injects the request body payload.	                    | execute(@requestBody() body: MyDTO)
| @requestHeaders(headerName?: string) | Injects a header from the request headers.            | execute(@requestHeaders('authorization') auth: string)
| @cookies(cookieName?: string)	       | Injects a cookie from the request cookies.   | execute(@cookies('session') session: string)
| @next()	                           | Injects the Express NextFunction object.	            | execute(@next() next: NextFunction)

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star тнР the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues