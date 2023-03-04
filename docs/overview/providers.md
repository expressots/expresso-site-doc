---
sidebar_position: 7
---

# Providers

From the perspective of clean code, providers are classes or objects that are responsible for creating and managing instances of other objects. Providers act as factories that instantiate and configure objects with their dependencies, which helps to keep the code modular and flexible.

In the context of dependency injection, providers are used to decouple the creation and configuration of objects from their use, which allows for easier testing, maintainability, and scalability of the codebase. By using providers to manage dependencies, developers can avoid tightly coupling components together and instead focus on the high-level design of the system.

Overall, providers are an important aspect of clean code because they help to promote loose coupling, maintainability, and flexibility in software systems.

:::info
Expresso TS uses providers to extend the application capability by providing additional functionalities.
:::

Let's take the example provided in the Use Case section.

In this scenario, the user is attempting to log in to the system, and as per the specification, the user can attempt to input their credentials three times before the system locks their account. If the user's account is locked, the system dispatches an email to notify the user.

The email functionality is provided by a provider, which is used by the use case to send the email to the user. This provider is injected into the use case constructor, allowing the developer to leverage the provider's public interfaces.

One of the immediate benefits of using providers is that they facilitate easier testing, as the code is decoupled from the use cases, and a component can easily be replaced with another component that implements the same interface.

Here is an example of provider implementation in Expresso TS for sending emails:

We are using [Mailtrap](https://mailtrap.io/) as our email provider and the nodemailer library to send emails.


```typescript
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";


enum EmailType {
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
                        name: "Expresso TS",
                        email: "noreply@expressots.dev"
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

In this implementation there is an auxiliary private function and the single public interface that is going to be used in the use case.
The provider is injected in the constructor to be used by the use case.

Here is the use case implementation making use of the provider:

```typescript
@provide(LoginUseCase)
class LoginUseCase {

    constructor(private mailTrapProvider?: MailTrapProvider) { }

    execute(data: ILoginRequestDTO): ILoginResponseDTO {
        // Implementation of the use case logic
        mailTrapProvider?.sendEmail(EmailType.Login);
    }
```