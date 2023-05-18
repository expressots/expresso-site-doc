---
sidebar_position: 15
---

# Test

Unit testing and integration testing are both important in any application development process because they serve different purposes.

- **Unit tests**:  focus on testing individual units of code, such as a single function or method, in isolation from the rest of the application. They typically involve mocking dependencies and external services to ensure that the unit being tested behaves as expected in a controlled environment. Unit tests are important because they allow developers to catch bugs and errors early in the development process, when they are easier and cheaper to fix. They also help to ensure that individual units of code are functioning correctly, which can make debugging and troubleshooting easier later on.

- **Integration tests**: on the other hand, test the interactions between different components or modules of the application, including how they interact with external dependencies and services. Unlike unit tests, integration tests involve testing the application as a whole, rather than individual units in isolation. Integration tests are important because they help to ensure that the application is functioning correctly as a whole, and that different components are working together as expected.

:::tip
Combining unit tests and integration tests can be beneficial because it allows developers to test both individual units of code and the application as a whole.
:::

## Our Example use Jest as a the test runner

Below we are testing the PingUseCase endpoint return. We are using the **[Jest](https://jestjs.io/)** as the test runner and **[ts-jest](https://www.npmjs.com/package/ts-jest)** as the TypeScript preprocessor.

```typescript
describe("PingUseCase", () => {
    let pingUseCase: PingUseCase;

    beforeEach(() => {
        pingUseCase = new PingUseCase();
    });

    it("should return a valid PingResponseDTO", () => {
        const start: Date = new Date();
        const response = pingUseCase.execute(start);
        const end: Date = new Date(response.end);
        const ttl = parseFloat(response.ttl.split(" ")[0]);

        expect(response).toHaveProperty("start");
        expect(response).toHaveProperty("end");
        expect(response).toHaveProperty("ttl");
        expect(response).toHaveProperty("message");
        expect(response.message).toBe("Pong!");
        expect(start <= end).toBe(true);
        expect(ttl >= 0).toBe(true);
    });
});
```

---

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues