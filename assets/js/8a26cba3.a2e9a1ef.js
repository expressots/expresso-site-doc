"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1053],{8162:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"prologue/upgrade_guide","title":"Upgrade guide","description":"Upgrade guide for ExpressoTS.","source":"@site/versioned_docs/version-3.0.0/prologue/upgrade_guide.mdx","sourceDirName":"prologue","slug":"/prologue/upgrade_guide","permalink":"/docs/prologue/upgrade_guide","draft":false,"unlisted":false,"tags":[],"version":"3.0.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Upgrade guide","description":"Upgrade guide for ExpressoTS."},"sidebar":"tutorialSidebar","previous":{"title":"Release notes","permalink":"/docs/prologue/release"},"next":{"title":"CORE","permalink":"/docs/category/core"}}');var t=r(4848),o=r(8453),i=r(1470),a=r(9365);const l={sidebar_position:2,title:"Upgrade guide",description:"Upgrade guide for ExpressoTS."},p="Upgrade guide",d={},c=[{value:"Upgrade from 2.x to 3.x",id:"upgrade-from-2x-to-3x",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Update the CLI",id:"update-the-cli",level:2},{value:"Update project dependencies",id:"update-project-dependencies",level:2},{value:"Update project structure",id:"update-project-structure",level:2},{value:"File <code>expressots.config.ts</code>",id:"file-expressotsconfigts",level:3},{value:"File <code>main.ts</code>",id:"file-maints",level:3},{value:"File <code>env.ts</code>",id:"file-envts",level:3},{value:"Replace <code>app.provider.ts</code> with <code>app.ts</code>",id:"replace-appproviderts-with-appts",level:3},{value:"Remove <code>app.container.ts</code>",id:"remove-appcontainerts",level:3},{value:"Modules registration",id:"modules-registration",level:3},{value:"Environment configuration",id:"environment-configuration",level:3},{value:"Update controllers",id:"update-controllers",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"upgrade-guide",children:"Upgrade guide"})}),"\n","\n",(0,t.jsx)(n.h2,{id:"upgrade-from-2x-to-3x",children:"Upgrade from 2.x to 3.x"}),"\n",(0,t.jsxs)(n.p,{children:["This guide will walk you through upgrading your ExpressoTS ",(0,t.jsx)(n.code,{children:"2.x"})," project to version ",(0,t.jsx)(n.code,{children:"3.x"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The latest version introduces several new features, improvements, and breaking changes, so follow the steps carefully to ensure a smooth transition."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before starting the upgrade process, ensure you meet the following prerequisites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Node.js"})," version ",(0,t.jsx)(n.strong,{children:"20"})," or higher."]}),"\n",(0,t.jsxs)(n.li,{children:["An existing project built with ",(0,t.jsx)(n.strong,{children:"ExpressoTS 2.x"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"update-the-cli",children:"Update the CLI"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Uninstall the old CLI globally:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm uninstall @expressots/cli -g\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install the new CLI globally:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i @expressots/cli@3.0.0 -g\n"})}),"\n",(0,t.jsx)(n.h2,{id:"update-project-dependencies",children:"Update project dependencies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Remove the old ExpressoTS dependencies:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm uninstall @expressots/adapter-express @expressots/core @expressots/cli\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install the new ExpressoTS dependencies:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i @expressots/core@3.0.0 @expressots/adapter-express@3.0.0 @expressots/shared@3.0.0\n&& npm i @expressots/cli@3.0.0 -D\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Complete list of dependencies to install:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'"dependencies": {\n        "@expressots/adapter-express": "3.0.0",\n        "@expressots/core": "3.0.0",\n        "@expressots/shared": "3.0.0"\n    },\n"devDependencies": {\n    "@expressots/cli": "3.0.0",\n    "@types/express": "5.0.0",\n    "@types/jest": "29.5.14",\n    "@types/node": "20.12.7",\n    "@typescript-eslint/eslint-plugin": "8.0.0",\n    "@typescript-eslint/parser": "8.0.0",\n    "eslint": "8.57.0",\n    "eslint-config-prettier": "9.0.0",\n    "eslint-plugin-prettier": "5.0.0",\n    "jest": "29.7.0",\n    "prettier": "3.2.5",\n    "supertest": "^7.0.0",\n    "ts-jest": "29.1.2",\n    "tsconfig-paths": "4.2.0",\n    "tsx": "4.19.2",\n    "typescript": "5.1.3"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"update-project-structure",children:"Update project structure"}),"\n",(0,t.jsxs)(n.h3,{id:"file-expressotsconfigts",children:["File ",(0,t.jsx)(n.code,{children:"expressots.config.ts"})]}),"\n",(0,t.jsxs)(n.p,{children:["The expressots.config.ts file has been updated in version 3.x. Specifically, the imports for ExpressoConfig and Pattern have moved from @expressots/core to @expressots/shared.\nAdditionally, the ",(0,t.jsx)(n.code,{children:"entryPoint"})," property was introduced. For non-opinionated projects, remember to set the opinionated option to false to reflect this configuration."]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"expressots.config.ts [ 2.x ]",value:"old-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { ExpressoConfig, Pattern } from "@expressots/core";\n\nconst config: ExpressoConfig = {\n    sourceRoot: "src",\n    scaffoldPattern: Pattern.KEBAB_CASE,\n    opinionated: true,\n};\n\nexport default config;\n'})})}),(0,t.jsx)(a.A,{label:"expressots.config.ts [ 3.x ]",value:"new-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { ExpressoConfig, Pattern } from "@expressots/shared";\n\nconst config: ExpressoConfig = {\n    entryPoint: "main",\n    sourceRoot: "src",\n    scaffoldPattern: Pattern.KEBAB_CASE,\n    opinionated: true,\n};\n\nexport default config;\n'})})})]}),"\n",(0,t.jsxs)(n.h3,{id:"file-maints",children:["File ",(0,t.jsx)(n.code,{children:"main.ts"})]}),"\n",(0,t.jsxs)(n.p,{children:["The main entry point has been streamlined in version 3.x. You no longer need to pass the container manually, and configuration is now centralized in the ",(0,t.jsx)(n.code,{children:"app.ts"})," file."]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"Opinionated",value:"opinionated",children:(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"main.ts [ 2.x ]",value:"old-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppFactory, ServerEnvironment } from "@expressots/core";\nimport { App } from "@providers/app/app.provider";\nimport { container } from "./app.container";\n\nasync function bootstrap() {\n    const app = await AppFactory.create(container, App);\n    await app.listen(3000, ServerEnvironment.Development);\n}\n\nbootstrap();\n'})})}),(0,t.jsx)(a.A,{label:"main.ts [ 3.x ]",value:"new-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppFactory } from "@expressots/core";\nimport { App } from "app";\nimport { env } from "env";\n\nAppFactory.create(App).then((app) =>\n    app.listen(env.App.Port, {\n        appName: env.App.appName,\n        appVersion: env.App.appVersion,\n    })\n);\n'})})})]})}),(0,t.jsx)(a.A,{label:"Non-Opinionated",value:"non-opinionated",children:(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"main.ts [ 2.x ]",value:"non-old-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppFactory, ServerEnvironment } from "@expressots/core";\nimport { container } from "./app.container";\nimport { App } from "./app.provider";\n\nasync function bootstrap() {\n    const app = await AppFactory.create(container, App);\n    await app.listen(3000, ServerEnvironment.Development);\n}\n\nbootstrap();\n'})})}),(0,t.jsx)(a.A,{label:"main.ts [ 3.x ]",value:"non-new-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppFactory } from "@expressots/core";\nimport { App } from "./app";\n\nAppFactory.create(App).then((app) => app.listen(3000));\n'})})})]})})]}),"\n",(0,t.jsxs)(n.h3,{id:"file-envts",children:["File ",(0,t.jsx)(n.code,{children:"env.ts"})]}),"\n",(0,t.jsx)(n.p,{children:"Environment management has been simplified and made more dynamic in version 3.x."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"env.ts [ 2.x ]",value:"old-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import pkg from "../package.json";\n\nconst ENV = {\n    Application: {\n        APP_NAME: pkg.name,\n        APP_VERSION: pkg.version,\n        ENVIRONMENT: process.env.ENVIRONMENT as string,\n        PORT: Number(process.env.PORT),\n    },\n};\n\nexport default ENV;\n'})})}),(0,t.jsx)(a.A,{label:"env.ts [ 3.x ]",value:"new-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import pkg from "../package.json";\n\nexport const env = {\n    App: {\n        appName: pkg.name,\n        appVersion: pkg.version,\n        get Port() {\n            return process.env.PORT || 3000;\n        },\n    },\n};\n'})})})]}),"\n",(0,t.jsxs)(n.h3,{id:"replace-appproviderts-with-appts",children:["Replace ",(0,t.jsx)(n.code,{children:"app.provider.ts"})," with ",(0,t.jsx)(n.code,{children:"app.ts"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"app.provider.ts"})," file has been replaced by a simplified ",(0,t.jsx)(n.code,{children:"app.ts"})," file in version 3.x. This file now directly integrates modules and middleware setup."]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"Opinionated",value:"opinionated",children:(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"app.provider.ts [ 2.x ]",value:"old-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppExpress } from "@expressots/adapter-express";\nimport { Env, IMiddleware, Middleware, provide, ProviderManager } from "@expressots/core";\nimport { container } from "../../app.container";\n\n@provide(App)\nexport class App extends AppExpress {\n    private middleware: IMiddleware;\n    private provider: ProviderManager;\n\n    constructor() {\n        super();\n        this.middleware = container.get<IMiddleware>(Middleware);\n        this.provider = container.get(ProviderManager);\n    }\n\n    protected configureServices(): void {\n        this.provider.register(Env);\n\n        this.middleware.addBodyParser();\n        this.middleware.setErrorHandler({ showStackTrace: true });\n    }\n\n    protected postServerInitialization(): void {\n        if (this.isDevelopment()) {\n            this.provider.get(Env).checkAll();\n        }\n    }\n\n    protected serverShutdown(): void {}\n}\n'})})}),(0,t.jsx)(a.A,{label:"app.ts [ 3.x ]",value:"new-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppExpress } from "@expressots/adapter-express";\nimport { AppContainer, Env } from "@expressots/core";\nimport { AppModule } from "@useCases/app/app.module";\n\nexport class App extends AppExpress {\n    private config: AppContainer = this.configContainer([AppModule]);\n\n    async globalConfiguration(): Promise<void> {\n        this.setGlobalRoutePrefix("/v1");\n\n        this.initEnvironment("development", {\n            env: {\n                development: ".env.development",\n                production: ".env.production",\n            },\n        });\n    }\n\n    async configureServices(): Promise<void> {\n        this.Provider.register(Env);\n\n        this.Middleware.addBodyParser();\n        this.Middleware.setErrorHandler({ showStackTrace: true });\n    }\n\n    async postServerInitialization(): Promise<void> {\n        if (await this.isDevelopment()) {\n            this.Provider.get(Env).checkFile(".env.development");\n        }\n    }\n\n    async serverShutdown(): Promise<void> {}\n}\n'})})})]})}),(0,t.jsx)(a.A,{label:"Non-Opinionated",value:"non-opinionated",children:(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"app.provider.ts [ 2.x ]",value:"old-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppExpress } from "@expressots/adapter-express";\nimport {\n    Env,\n    IMiddleware,\n    Middleware,\n    ProviderManager,\n} from "@expressots/core";\nimport { container } from "./app.container";\n\nexport class App extends AppExpress {\n    private middleware: IMiddleware;\n    private provider: ProviderManager;\n\n    constructor() {\n        super();\n        this.middleware = container.get<IMiddleware>(Middleware);\n        this.provider = container.get(ProviderManager);\n    }\n\n    protected configureServices(): void | Promise<void> {\n        this.provider.register(Env);\n\n        this.middleware.addBodyParser();\n        this.middleware.setErrorHandler({ showStackTrace: true });\n    }\n\n    protected postServerInitialization(): void | Promise<void> {\n        if (this.isDevelopment()) {\n            this.provider.get(Env).checkAll();\n        }\n    }\n\n    protected serverShutdown(): void | Promise<void> {}\n}\n\n'})})}),(0,t.jsx)(a.A,{label:"app.ts [ 3.x ]",value:"new-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppExpress } from "@expressots/adapter-express";\nimport { AppContainer } from "@expressots/core";\nimport { AppModule } from "./app.module";\n\nexport class App extends AppExpress {\n    private config: AppContainer = this.configContainer([AppModule]);\n\n    async globalConfiguration(): Promise<void> {}\n\n    async configureServices(): Promise<void> {\n        this.Middleware.addBodyParser();\n        this.Middleware.setErrorHandler({ showStackTrace: true });\n    }\n\n    async postServerInitialization(): Promise<void> {}\n\n    async serverShutdown(): Promise<void> {}\n}\n'})})})]})})]}),"\n",(0,t.jsxs)(n.h3,{id:"remove-appcontainerts",children:["Remove ",(0,t.jsx)(n.code,{children:"app.container.ts"})]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"ExpressoTS 3.x"}),", the ",(0,t.jsx)(n.code,{children:"app.container.ts"})," file has been deprecated and is no longer needed. Module registration and dependency injection have been streamlined to be defined directly in the ",(0,t.jsx)(n.code,{children:"src\\app.ts"})," file. This simplifies the project structure and centralizes application configuration."]}),"\n",(0,t.jsx)(n.p,{children:"This recommendation applies to both opinionated and non-opinionated projects, ensuring consistency and reducing complexity regardless of the project type."}),"\n",(0,t.jsxs)(n.p,{children:["Below is the old implementation using ",(0,t.jsx)(n.code,{children:"app.container.ts"})," for context and the new way to handle modules and environment configuration in src\\app.ts."]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"Opinionated",value:"opinionated",children:(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(a.A,{label:"app.container.ts [ 2.x ]",value:"old-version",children:[(0,t.jsxs)(n.p,{children:["The previous approach required a separate ",(0,t.jsx)(n.code,{children:"app.container.ts"})," file for setting up the application container and registering modules:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { Container } from "inversify";\nimport { AppContainer } from "@expressots/core";\nimport { AppModule } from "@useCases/app/app.module";\n\nexport const appContainer: AppContainer = new AppContainer({\n    autoBindInjectable: false,\n});\n\nexport const container: Container = appContainer.create([\n    // Add your modules here\n    AppModule,\n]);\n'})})]}),(0,t.jsxs)(a.A,{label:"app.ts [ 3.x ]",value:"new-version",children:[(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"ExpressoTS 3.x"}),", modules are now directly registered in the ",(0,t.jsx)(n.code,{children:"configContainer"})," method of the App class. This method accepts an array of modules as its parameter, eliminating the need for a separate container file."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { AppExpress } from "@expressots/adapter-express";\nimport { AppContainer, Env } from "@expressots/core";\nimport { AppModule } from "@useCases/app/app.module";\n\nexport class App extends AppExpress {\n    // Register application modules\n    private config: AppContainer = this.configContainer([AppModule]);\n\n    // Global configurations such as routes and environment\n    async globalConfiguration(): Promise<void> {\n        this.setGlobalRoutePrefix("/v1");\n\n        this.initEnvironment("development", {\n            env: {\n                development: ".env.development", // Path to the development environment file\n                production: ".env.production", // Path to the production environment file\n            },\n        });\n    }\n\n    // Service-level configurations\n    async configureServices(): Promise<void> {\n        // Register environment-related dependencies\n        this.Provider.register(Env);\n\n        // Add global middleware configurations\n        this.Middleware.addBodyParser(); // Parses incoming request bodies\n        this.Middleware.setErrorHandler({ showStackTrace: true }); // Error handling middleware\n    }\n\n    // Post-server startup tasks\n    async postServerInitialization(): Promise<void> {\n        if (await this.isDevelopment()) {\n            // Ensure environment variables are loaded correctly in development\n            this.Provider.get(Env).checkFile(".env.development");\n        }\n    }\n\n    // Graceful shutdown logic\n    async serverShutdown(): Promise<void> {\n        // Add any necessary shutdown procedures here\n    }\n}\n'})})]})]})}),(0,t.jsx)(a.A,{label:"Non-Opinionated",value:"non-opinionated",children:(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(a.A,{label:"app.container.ts [ 2.x ]",value:"old-version",children:[(0,t.jsxs)(n.p,{children:["The previous approach required a separate ",(0,t.jsx)(n.code,{children:"app.container.ts"})," file for setting up the application container and registering modules:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { AppContainer } from "@expressots/core";\nimport { AppModule } from "./app.module";\n\nexport const appContainer: AppContainer = new AppContainer({\n    autoBindInjectable: false,\n});\n\nexport const container = appContainer.create([\n    // Add your modules here\n    AppModule,\n]);\n\n'})})]}),(0,t.jsxs)(a.A,{label:"app.ts [ 3.x ]",value:"new-version",children:[(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"ExpressoTS 3.x"}),", modules are now directly registered in the ",(0,t.jsx)(n.code,{children:"configContainer"})," method of the App class. This method accepts an array of modules as its parameter, eliminating the need for a separate container file."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { AppExpress } from "@expressots/adapter-express";\nimport { AppContainer } from "@expressots/core";\nimport { AppModule } from "./app.module";\n\nexport class App extends AppExpress {\n    // Register application modules\n    private config: AppContainer = this.configContainer([AppModule]);\n\n    // Global configurations such as routes and environment\n    async globalConfiguration(): Promise<void> {}\n\n    // Service-level configurations\n    async configureServices(): Promise<void> {\n        this.Middleware.addBodyParser(); // Parses incoming request bodies\n        this.Middleware.setErrorHandler({ showStackTrace: true }); // Error handling middleware\n    }\n\n    // Post-server startup tasks\n    async postServerInitialization(): Promise<void> {}\n\n    // Graceful shutdown logic\n    async serverShutdown(): Promise<void> {}\n}\n'})})]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"modules-registration",children:"Modules registration"}),"\n",(0,t.jsxs)(n.p,{children:["Modules are registered using the configContainer method directly in the App class.\nAdd modules to the array in the ",(0,t.jsx)(n.code,{children:"configContainer"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"private config: AppContainer = this.configContainer([AppModule, AnotherModule]);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Replace AnotherModule with any additional modules you wish to register in your application."}),"\n",(0,t.jsx)(n.h3,{id:"environment-configuration",children:"Environment configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"initEnvironment"})," method is used to initialize environment-specific configurations. Specify the paths to .env files for different environments (e.g., development and production)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'this.initEnvironment("development", {\n    env: {\n        development: ".env.development",\n        production: ".env.production",\n    },\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"Env"})," provider to access environment variables defined in your ",(0,t.jsx)(n.code,{children:".env"})," files. These can be dynamically checked and validated during application initialization."]}),"\n",(0,t.jsx)(n.h2,{id:"update-controllers",children:"Update controllers"}),"\n",(0,t.jsx)(n.p,{children:"In version 3.x, dependency injection now requires the @inject decorator explicitly."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{label:"app.controller.ts [ 2.x ]",value:"old-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { controller, Get } from "@expressots/adapter-express";\nimport { AppUseCase } from "./app.usecase";\n\n@controller("/")\nexport class AppController {\n    constructor(private appUseCase: AppUseCase) {} // Old change\n\n    @Get("/")\n    execute() {\n        return this.appUseCase.execute();\n    }\n}\n'})})}),(0,t.jsx)(a.A,{label:"app.controller.ts [ 3.x ]",value:"new-version",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { controller, Get } from "@expressots/adapter-express";\nimport { inject } from "@expressots/core"; // New import\nimport { AppUseCase } from "./app.usecase";\n\n@controller("/")\nexport class AppController {\n    @inject(AppUseCase) private appUseCase: AppUseCase; // New change\n\n    @Get("/")\n    execute() {\n        return this.appUseCase.execute();\n    }\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var s=r(4164);const t={tabItem:"tabItem_Ymn6"};var o=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(6540),t=r(4164),o=r(3104),i=r(6347),a=r(205),l=r(7485),p=r(1682),d=r(679);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,p.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=u(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[p,c]=m({queryString:r,groupId:t}),[x,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),g=(()=>{const e=p??x;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var v=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function j(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=a[r].value;t!==s&&(p(n),i(t))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:c,onClick:d,...o,className:(0,t.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function A(e){let{lazy:n,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function b(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(A,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,f.jsx)(b,{...e,children:c(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(6540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);