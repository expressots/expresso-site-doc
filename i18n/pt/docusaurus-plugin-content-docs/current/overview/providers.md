---
sidebar_position: 8
---

# Provedores

Do ponto de vista da arquitetura limpa, os `Providers` são responsáveis por fornecer dados e/ou mecanismos para componentes de nível superior no sistema, como casos de uso ou apresentadores, e podem abstrair os detalhes de como os dados/mecanismos são realmente recuperados, armazenados ou executados. Essa abstração permite que o sistema mude facilmente entre diferentes fontes/provedores de dados sem afetar os componentes de nível superior.

Os provedores podem ser implementados como classes ou funções, e normalmente fazem uso de componentes de infraestrutura, como bancos de dados, serviços da web ou sistemas de arquivos para realmente recuperar ou armazenar dados e executar outras tarefas. O objetivo de um provedor é encapsular todos os detalhes desses componentes de nível inferior e apresentar uma interface simples e de alto nível para o resto do sistema.

## Objetivo do provedor

O objetivo de um Provedor é encapsular todos os detalhes dos componentes "substituíveis" e apresentar uma interface simples e de alto nível para o resto do sistema.

No contexto da injeção de dependência, os provedores são usados para desacoplar a criação e configuração de objetos de seu uso, o que permite testes mais fáceis, manutenção e escalabilidade do código. Ao usar provedores para gerenciar dependências, os desenvolvedores podem evitar o acoplamento estreito de componentes e, em vez disso, focar no design de alto nível do sistema.

Em geral, os provedores são um aspecto importante do código limpo porque ajudam a promover o desacoplamento, a manutenibilidade e a flexibilidade em sistemas de software.

:::info
O ExpressoTS utiliza providers para estender a capacidade da aplicação fornecendo funcionalidades adicionais.
:::

## Exemplo

Vamos pegar o exemplo fornecido na seção **[Use Case](usecase.md#example)**.

Neste cenário, o usuário está tentando fazer login no sistema, e de acordo com a especificação, o usuário pode tentar inserir suas credenciais três vezes antes que o sistema bloqueie sua conta. Se a conta do usuário estiver bloqueada, o sistema envia um e-mail para notificar o usuário.

A funcionalidade de e-mail é fornecida por um provider, que é usado pelo use case para enviar o e-mail para o usuário. Esse provider é injetado no construtor do use case, permitindo que o desenvolvedor aproveite as interfaces públicas do provider.

Um dos benefícios imediatos do uso de providers é que eles facilitam testes mais fáceis, pois o código está desacoplado dos casos de uso, e um componente pode ser facilmente substituído por outro componente que implemente a mesma interface.

### Implementação do Provedor

Aqui está um exemplo de implementação de um provedor em ExpressoTS para envio de e-mails:

Nós estamos usando **[Mailtrap](https://mailtrap.io/)** como nosso provedor de email e a lib nodemailer para enviar emails.

```typescript
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const enum EmailType {
    Welcome = 0,
    CreateUser,
    ChangePassword,
    Login,
    RecoveryPassword,
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
                pass: Env.Mailtrap.PASSWORD,
            },
        });
    }

    private mailSender(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        });
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
                        email: Env.Mailtrap.INBOX_ALIAS,
                    },
                    from: {
                        name: "ExpressoTS",
                        email: "noreply@expresso-ts.com",
                    },
                    subject: "Successfully logged in!",
                    body: "<h1>Welcome to the system!</h1>",
                });
                break;
        }
    }
}

export { MailTrapProvider, EmailType };
```

Nessa implementação, há uma função auxiliar privada e uma única interface pública chamada `sendEmail()` que será usada no caso de uso. O provedor é injetado no construtor para ser usado pelo caso de uso.

### Consumindo o provedor no caso de uso

Aqui está a implementação do caso de uso fazendo uso do provedor:

```typescript
@provide(LoginUserUseCase)
class LoginUserUseCase {
    constructor(private mailTrapProvider?: MailTrapProvider) {}

    execute(payload: ILoginUserRequestDTO): boolean {
        const { email, password } = payload;

        if (isAuthenticated(email, password)) {
            return true;
        }

        // Implementação da lógica do caso de uso
        mailTrapProvider?.sendEmail(EmailType.Login);

        return false;
    }
}

export { LoginUserUseCase };
```

No caso de uso acima, injetamos o `MailTrapProvider` no construtor fazendo uso do container ioC. No método `execute()` do caso de uso, estamos chamando o método `sendEmail()` do provedor para enviar um e-mail para o usuário em caso de login sem sucesso.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
