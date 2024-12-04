"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[481],{1529:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"core/providers","title":"Providers","description":"Providers are modular components.","source":"@site/docs/core/providers.mdx","sourceDirName":"core","slug":"/core/providers","permalink":"/docs/next/core/providers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Providers","description":"Providers are modular components."},"sidebar":"tutorialSidebar","previous":{"title":"Use cases","permalink":"/docs/next/core/usecase"},"next":{"title":"Entities","permalink":"/docs/next/core/entities"}}');var s=r(4848),t=r(8453);const o=r.p+"assets/images/plugin-pattern-0f77852a6ffd71f4d5bf34435190977b.png",a={sidebar_position:6,title:"Providers",description:"Providers are modular components."},l="Providers",d={},c=[{value:"Key advantages",id:"key-advantages",level:3},{value:"Create a provider",id:"create-a-provider",level:2},{value:"Setting up the provider",id:"setting-up-the-provider",level:4},{value:"Implementing the provider",id:"implementing-the-provider",level:4},{value:"Using the provider",id:"using-the-provider",level:2},{value:"Decorators for provider",id:"decorators-for-provider",level:2},{value:"External providers",id:"external-providers",level:2},{value:"Plugin pattern",id:"plugin-pattern",level:2},{value:"Create external provider",id:"create-external-provider",level:2},{value:"Using external providers",id:"using-external-providers",level:2},{value:"External provider best practices",id:"external-provider-best-practices",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"providers",children:"Providers"})}),"\n",(0,s.jsx)(n.p,{children:"In ExpressoTS, providers act as modular components that encapsulate specific functionalities, such as email services, authentication, or database connections.\nThis approach supports a loosely coupled architecture, allowing you to update or swap out these functionalities without impacting the rest of the system."}),"\n",(0,s.jsx)(n.h3,{id:"key-advantages",children:"Key advantages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Promote loose coupling between application layers."}),"\n",(0,s.jsx)(n.li,{children:"Simplify the testing process by decoupling logic from specific implementations."}),"\n",(0,s.jsx)(n.li,{children:"Enhance code maintainability and flexibility, supporting easy swaps of underlying services."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"ExpressoTS harnesses providers to augment application capabilities, facilitating functionalities like email dispatching, data storage, and more, without tying the application logic to specific implementations."})}),"\n",(0,s.jsx)(n.h2,{id:"create-a-provider",children:"Create a provider"}),"\n",(0,s.jsx)(n.p,{children:"Consider an application needing to send emails under various circumstances, such as user registration or password recovery.\nBy implementing an email provider, ExpressoTS can send emails without directly interacting with the mailing service in the business logic."}),"\n",(0,s.jsxs)(n.p,{children:["In this example we will create a ",(0,s.jsx)(n.code,{children:"MailSenderProvider"})," to send emails using the ",(0,s.jsx)(n.code,{children:"nodemailer"})," library."]}),"\n",(0,s.jsxs)(n.p,{children:["Let's use the CLI to scaffold a new provider named ",(0,s.jsx)(n.code,{children:"MailSenderProvider"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"expressots g p mailSender\n"})}),"\n",(0,s.jsx)(n.h4,{id:"setting-up-the-provider",children:"Setting up the provider"}),"\n",(0,s.jsxs)(n.p,{children:["The CLI will add the suffix ",(0,s.jsx)(n.code,{children:"Provider"})," to the provider name, creating a new file in the ",(0,s.jsx)(n.code,{children:"providers"})," directory. This file will contain the provider class, which you can then customize to suit your application's needs."]}),"\n",(0,s.jsx)(n.p,{children:"Here is the default provider file generated by the CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { provide } from "@expressots/core";\n\n@provide(MailSenderProvider)\nclass MailSenderProvider {}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"implementing-the-provider",children:"Implementing the provider"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import nodemailer from "nodemailer";\nimport Mail from "nodemailer/lib/mailer";\n\nexport const enum EmailType {\n    Welcome = 0,\n    CreateUser,\n    ChangePassword,\n    Login,\n    RecoveryPassword,\n}\n\n@provide(MailSenderProvider)\nexport class MailSenderProvider {\n    private transporter: Mail;\n\n    constructor() {\n        this.transporter = nodemailer.createTransport({\n            host: Env.Mailtrap.HOST,\n            port: Env.Mailtrap.PORT,\n            auth: {\n                user: Env.Mailtrap.USERNAME,\n                pass: Env.Mailtrap.PASSWORD,\n            },\n        });\n    }\n\n    private mailSender(message: IMessage): Promise<void> {\n        await this.transporter.sendMail({\n            to: {\n                name: message.to.name,\n                address: message.to.email,\n            },\n            from: {\n                name: message.from.name,\n                address: message.from.email,\n            },\n            subject: message.subject,\n            html: message.body,\n        });\n    }\n\n    sendEmail(emailType: EmailType): Promise<void> {\n        switch (emailType) {\n            case EmailType.Login:\n                break;\n            case EmailType.Welcome:\n                break;\n            case EmailType.RecoveryPassword:\n                break;\n            case EmailType.ChangePassword:\n                break;\n            case EmailType.CreateUser:\n                this.MailSender({\n                    to: {\n                        name: "User",\n                        email: Env.Mailtrap.INBOX_ALIAS,\n                    },\n                    from: {\n                        name: "ExpressoTS",\n                        email: "noreply@expresso-ts.com",\n                    },\n                    subject: "Successfully logged in!",\n                    body: "<h1>Welcome to the system!</h1>",\n                });\n                break;\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"MailSenderProvider"})," abstracts the complexity of configuring and using nodemailer for email operations,\nproviding a straightforward method sendEmail to send different types of emails."]}),"\n",(0,s.jsx)(n.h2,{id:"using-the-provider",children:"Using the provider"}),"\n",(0,s.jsxs)(n.p,{children:["Here is the use case implementation making use of the ",(0,s.jsx)(n.code,{children:"MailSenderProvider"})," provider:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title=" User sending email if login fails"',children:"@provide(LoginUserUseCase)\nexport class LoginUserUseCase {\n    constructor(@inject(MailSenderProvider) private mailSender: MailSenderProvider) {}\n\n    execute(payload: ILoginUserRequestDTO): boolean {\n        const { email, password } = payload;\n\n        if (isAuthenticated(email, password)) {\n            return true;\n        }\n\n        mailSender.sendEmail(EmailType.Login);\n\n        return false;\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this use case, the ",(0,s.jsx)(n.code,{children:"MailSenderProvider"})," is injected through the constructor, leveraging ExpressoTS's dependency injection.\nThis decouples the email sending process from the authentication logic, illustrating the provider's role in maintaining clean and maintainable code."]}),"\n",(0,s.jsx)(n.h2,{id:"decorators-for-provider",children:"Decorators for provider"}),"\n",(0,s.jsx)(n.p,{children:"ExpressoTS facilitates the registration of providers in its dependency injection system through the use of fluent decorators:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@provide (default scope is request)"}),"\n",(0,s.jsx)(n.li,{children:"@provideSingleton (singleton scope)"}),"\n",(0,s.jsx)(n.li,{children:"@provideTransient (transient scope)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These decorators ensure that providers are automatically registered and resolved within the application's dependency injection system."}),"\n",(0,s.jsx)(n.h2,{id:"external-providers",children:"External providers"}),"\n",(0,s.jsx)(n.p,{children:"ExpressoTS promotes extensibility through the use of external providers. Developers can create reusable packages using the plugin design pattern to add new functionalities to an ExpressoTS application. This approach is ideal for sharing features across multiple projects or integrating third-party services."}),"\n",(0,s.jsx)(n.p,{children:"The goal is to keep the core framework lean while enabling developers to extend their applications' capabilities with external providers."}),"\n",(0,s.jsx)(n.h2,{id:"plugin-pattern",children:"Plugin pattern"}),"\n",(0,s.jsx)(n.p,{children:"The diagram illustrates the ExpressoTS plugin design pattern, demonstrating how external providers are seamlessly integrated into the client application\nthrough the Provider Manager."}),"\n",(0,s.jsx)(n.p,{children:"It showcases the process of registering new providers and their respective lifecycle scopes, which can be singleton, request, or scoped."}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:o,alt:"Plugin pattern"})}),"\n",(0,s.jsx)(n.h2,{id:"create-external-provider",children:"Create external provider"}),"\n",(0,s.jsx)(n.p,{children:"The CLI can be used to scaffold a new external provider ( plugin ). Here's the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"expressots create provider-name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command generates a new directory with the provider's name and all the necessary files to start developing an external provider.\nThe generated ",(0,s.jsx)(n.code,{children:"package.json"})," file includes scripts for building, testing, and publishing the package."]}),"\n",(0,s.jsx)(n.p,{children:"An external provider should be a CommonJS package that meets the following requirements:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Implement the ",(0,s.jsx)(n.code,{children:"IProvider"})," interface in your provider class."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="IProvider interface"',children:"export interface IProvider {\n    name: string;\n    version: string;\n    author: string;\n    repo: string;\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Annotate your provider class with the ",(0,s.jsx)(n.code,{children:"@injectable()"})," decorator for dependency injection."]}),"\n",(0,s.jsxs)(n.li,{children:["Export your provider class in the ",(0,s.jsx)(n.code,{children:"index.ts"})," file."]}),"\n",(0,s.jsx)(n.li,{children:"Publish your package to the npm registry."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Example of a Logger provider"',children:'import { IProvider } from "expressots";\n\n@injectable()\nclass Logger implements IProvider {\n    log(message: string): void {\n        console.log(message);\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Once the package is developed and published to the npm registry, it can be easily integrated into any ExpressoTS application."}),"\n",(0,s.jsx)(n.h2,{id:"using-external-providers",children:"Using external providers"}),"\n",(0,s.jsxs)(n.p,{children:["Providers are registered in the ",(0,s.jsx)(n.code,{children:"App"})," class of an ExpressoTS application using the ",(0,s.jsx)(n.code,{children:"ProviderManager"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Registering external Logger provider in the App class"',children:"this.Provider.register(Logger);\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["By default provider registration binds the provider as request-scoped. To change the scope, use the ",(0,s.jsx)(n.code,{children:"BindingScopeEnum"})," or string representation of the scope."]})}),"\n",(0,s.jsx)(n.p,{children:"Example of registering a provider as a singleton:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'this.Provider.register(Logger, "Singleton");\n'})}),"\n",(0,s.jsx)(n.p,{children:"Adding external providers to an ExpressoTS application is a straightforward process that enhances the application's capabilities without bloating the core framework."}),"\n",(0,s.jsx)(n.h2,{id:"external-provider-best-practices",children:"External provider best practices"}),"\n",(0,s.jsx)(n.p,{children:"When developing external providers for ExpressoTS, consider the following best practices:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Interface Implementation"}),": Ensure that external providers conform to the IProvider interface for consistency."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Lifecycle Management"}),": Choose the appropriate scope for the provider based on its intended usage pattern."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testing"}),": Thoroughly test providers in isolation before integrating them into the main application."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Documentation"}),": Provide detailed usage instructions and configuration options for the external provider."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Versioning"}),": Follow semantic versioning practices to manage changes and updates to the provider."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error Handling"}),": Implement robust error handling and logging mechanisms to ensure the provider's reliability."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security"}),": Follow security best practices to protect sensitive data and prevent vulnerabilities in the provider, especially in the provider dependencies."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By adhering to these practices, developers can ensure that their external providers are robust, maintainable, and easily integrated into any ExpressoTS application."}),"\n",(0,s.jsx)(n.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,s.jsxs)(n.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/next/support-us",children:"support guide"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(6540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);