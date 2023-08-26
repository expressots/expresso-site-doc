---
sidebar_position: 2
---

# Cookies

Cookies are small pieces of data that a website sends to a user's web browser while the user is browsing that website. Every time the user loads the website, the browser sends the cookie back to the server to notify the website of the user's previous activity.

Cookies serve several primary purposes:

1. Session Management:
Cookies are often used to handle user sessions. For example, when you log into a website, a cookie is set to remember your login state. So, as you navigate the site, you remain logged in.

2. Personalization:
Cookies can store user preferences to personalize the user's experience on the site. For example, cookies might store information about the user's preferred language, theme, or other settings.

3. Tracking:
Some cookies track user behavior on the site over time. These are often used by third-party analytics tools to understand user behavior and optimize the site accordingly. Advertisers also use tracking cookies to display targeted ads based on user activity.

4. Security:
Cookies can be used to support secure website functions. For example, a cookie can be used to remember that a user has authenticated to a site so that the server knows the user has already provided valid login credentials.

It's also important to note that there are different types of cookies - session cookies, which expire when the browser session ends, and persistent cookies, which remain on the user's device for a set period of time or until they are explicitly deleted.

:::caution USING COOKIE FOR TRACKING
Have in mind that the use of cookies, especially for tracking and personalization, has raised privacy concerns, leading to regulations such as GDPR in Europe and CCPA in California that require sites to disclose their cookie usage and obtain user consent.
:::

## Cookie-parser package

- Ease of Use: cookie-parser makes it very easy to read cookie values, which are often used for tracking user sessions, personalization, and managing stateful applications. Without this library, you would have to manually parse the Cookie header and handle the nuances of cookie formatting.

- Signed Cookies: The package also supports signed cookies, which are a way to verify the integrity of cookies (i.e., whether they have been tampered with). This is an important feature for securing sensitive information stored in cookies.

## What to consider when using cookie-parser

- Overhead: While it's not a heavy library, using cookie-parser does add a bit of overhead to each request, as it parses all cookies regardless of whether they are used in the route handler.

- Stateful: Cookies inherently make an application stateful. When scaling an application, state can be problematic. Therefore, alternative stateless authentication methods, like tokens, can be preferable in a microservices architecture.

## When to use

Deciding when to use cookie-parser largely depends on your application's needs. If your web application requires state management and you've chosen to do that via cookies, cookie-parser can make your life easier and your application more secure with signed cookies.

However, if your website has heavy traffic, the overhead might become a concern. If your architecture is based around stateless services (common in microservices architectures), you might want to avoid cookies and opt for other methods of maintaining state, like JWTs (JSON Web Tokens).

:::info
In case you're dealing with a high traffic website, consider alternatives like sessions stored in a database, JWTs, or tokens stored in HTTP headers. Also, using a load balancer to distribute traffic and session store modules to maintain session data across multiple servers can help to manage high traffic and stateful data.
:::

Just like before, the best approach often involves combining multiple techniques, tailored to your application's specific needs. Testing and monitoring your application under realistic conditions can help guide your decision-making process.

## Use with ExpressoTS

Install the npm cookie-parser middleware and type definition.

```bash
npm i cookie-parser
npm i -D @types/cookie-parser
```

After the installation you can add the middleware to your ExpressoTS app.

```typescript
import cookieParser from "cookie-parser";

// Add in the application create method in the middleware array
AppInstance.create(container, [cookieParser()]);
```

Here is an example of how to use cookie-parser:

Set a cookie with a random UUID as value, that expires in 1 hour and is only accessible via HTTP:

```typescript
@httpGet("set-cookie")
setCookie(@response() res: Response) {
    res.cookie("authToken", randomUUID(), {
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: true,
    });
    return res.send("Cookie set!");
}
```

Get a cookie:

```typescript
@httpGet("get-cookie")
getCookie(@cookies() cookieInfo: string, @response() res: Response) {
    return res.send(`Your token: ${cookieInfo["authToken"]}`);
}
```

:::tip
Note that we are using `@cookies()` decorator to get the cookie information. This decorator is provided by inversify-express-utils.
:::

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues