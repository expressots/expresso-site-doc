---
sidebar_position: 7
---

# Providers

From the perspective of the ExpressoTS Architecture, `Providers` are responsible for supplying data and/or mechanics to the application, abstracting the details of how the data/mechanic is actually implemented. This abstraction aligned with the Dependency Injection Container enables the developer to easily switch between different data sources/providers without affecting the other parts of the application as they are decoupled.

Providers can be implemented as classes or functions, and typically make use of infrastructure components such as databases, web services, or file systems to actually retrieve or store data and perform other tasks. A provider's goal is to encapsulate all the details of these low-level components and present a simple, high-level interface to the rest of the system.

## Provider goal

The goal of a Provider is to encapsulate all the details of the "replaceable" components and present a simple, high-level interface to the rest of the system.

In the context of dependency injection, providers are used to decouple the creation and configuration of objects from their use, which allows for easier testing, maintainability, and scalability of the codebase. By using providers to manage dependencies, developers can avoid tightly coupling components together and instead focus on the high-level design of the system.

Overall, providers are an important aspect of clean code because they help to promote loose coupling, maintainability, and flexibility in software systems.

:::info
ExpressoTS uses providers to extend the application capability by providing additional functionalities.
:::

## Example

Let's take the example provided in the **[Use Case](usecase.md#example)** section.

In this scenario, the user is attempting to log in to the system, and as per the specification, the user can attempt to input their credentials three times before the system locks their account. If the user's account is locked, the system dispatches an email to notify the user.

The email functionality is provided by a provider, which is used by the use case to send the email to the user. This provider is injected into the use case constructor, allowing the developer to leverage the provider's public interfaces.

One of the immediate benefits of using providers is that they facilitate easier testing, as the code is decoupled from the use cases, and a component can easily be replaced with another component that implements the same interface.

### Provider implementation

Here is an example of provider implementation in ExpressoTS for sending emails:

We are using **[Mailtrap](https://mailtrap.io/)** as our email provider and the nodemailer library to send emails.

```typescript
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const enum EmailType {
    Welcome = 0,
    CreateUser,
    ChangePassword,
    Login,
    RecoveryPassword
}

@provide(MailTrapProvider)
class MailTrapProvider {

    private transporter: Mail;

    constructor() {

        this.transporter = nodemailer.createTransport({
            host: Env.Mailtrap.HOST,
            port: Env.Mailtrap.PORT,
            auth: {
                user: Env.Mailtrap.USERNAME,
                pass: Env.Mailtrap.PASSWORD
            }
        });
    }

    private mailSender(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }

    sendEmail(emailType: EmailType): Promise<void> {
        switch (emailType) {
            case EmailType.Login:
                break;
            case EmailType.Welcome:
                break;
            case EmailType.RecoveryPassword:
                break;
            case EmailType.ChangePassword:
                break;
            case EmailType.CreateUser:
                this.MailSender({
                    to: {
                        name: "User",
                        email: Env.Mailtrap.INBOX_ALIAS
                    },
                    from: {
                        name: "ExpressoTS",
                        email: "noreply@expresso-ts.com"
                    },
                    subject: "Successfully logged in!",
                    body: "<h1>Welcome to the system!</h1>"
                });
                break;
        }
    }
}

export { MailTrapProvider, EmailType };
```

In this implementation there is an auxiliary private function and the single public interface called `sendEmail()` that is going to be used in the use case.
The provider is injected in the constructor to be used by the use case.

### Use case consuming the provider

Here is the use case implementation making use of the provider:

```typescript
@provide(LoginUserUseCase)
class LoginUserUseCase {

  constructor(private mailTrapProvider?: MailTrapProvider) { }
  
  execute(payload: ILoginUserRequestDTO): boolean {
    const { email, password } = payload;
    
    if (isAuthenticated(email, password)) {
        return true;
    }

     // Implementation of the use case logic
     mailTrapProvider?.sendEmail(EmailType.Login);
    
    return false;
  }
}

export { LoginUserUseCase };
```

In the Use Case above we injected MailTrapProvider in the constructor making use of the ExpressoTS container. In the execute() method of the Use Case we are calling the `sendEmail()` method of the provider to send an email to the user in case of a non successful login.

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues