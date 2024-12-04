"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9445],{7575:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"core/app-provider","title":"App","description":"The App class is the core of an ExpressoTS application.","source":"@site/versioned_docs/version-3.0.0/core/app-provider.mdx","sourceDirName":"core","slug":"/core/app-provider","permalink":"/docs/core/app-provider","draft":false,"unlisted":false,"tags":[],"version":"3.0.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"App","description":"The App class is the core of an ExpressoTS application."},"sidebar":"tutorialSidebar","previous":{"title":"First steps","permalink":"/docs/core/first-steps"},"next":{"title":"Container","permalink":"/docs/core/app-container"}}');var s=i(4848),r=i(8453);const o=i.p+"assets/images/app-life-cycle-7d4c8885b0e3c21d46860a805f451622.png",l={sidebar_position:1,title:"App",description:"The App class is the core of an ExpressoTS application."},d="Application",a={},p=[{value:"App express",id:"app-express",level:2},{value:"Lifecycle hooks",id:"lifecycle-hooks",level:2},{value:"Hooks execution order",id:"hooks-execution-order",level:2},{value:"Method configContainer",id:"method-configcontainer",level:2},{value:"Middleware property",id:"middleware-property",level:2},{value:"Provider property",id:"provider-property",level:2},{value:"Method initEnvironment",id:"method-initenvironment",level:2},{value:"Method isDevelopment",id:"method-isdevelopment",level:2},{value:"Method set global route prefix",id:"method-set-global-route-prefix",level:2},{value:"Method get http server",id:"method-get-http-server",level:2},{value:"Method to set the engine",id:"method-to-set-the-engine",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"application",children:"Application"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"App"})," class is the core of an ExpressoTS application, handling server creation and configuration.\nIt allows you to set up middleware and providers during the bootstrapping process and offers lifecycle hooks\nto run code before, after, and during server shutdown."]}),"\n",(0,s.jsx)(n.h2,{id:"app-express",children:"App express"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AppExpress"})," is the ",(0,s.jsx)(n.a,{href:"https://expressjs.com/",children:"Express.js"})," platform implementation specifically designed for ExpressoTS.\nIt integrates seamlessly with the Express.js ecosystem, providing a robust foundation for building\nand configuring applications within ExpressoTS."]}),"\n",(0,s.jsxs)(n.p,{children:["With full support for Express.js middleware, ",(0,s.jsx)(n.code,{children:"AppExpress"})," enables developers to efficiently manage application setup, execution, and shutdown processes,\nall while leveraging the familiar Express.js environment."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is the ",(0,s.jsx)(n.code,{children:"App"})," class extending the ",(0,s.jsx)(n.code,{children:"AppExpress"})," adapter from the Opinionated template:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'export class App extends AppExpress {\n    private config: AppContainer = this.configContainer([AppModule]);\n\n    protected globalConfiguration(): void | Promise<void> {\n        this.setGlobalRoutePrefix("/v1");\n\n        this.initEnvironment("development", {\n            env: {\n                development: ".env.development",\n                production: ".env.production",\n            },\n        });\n    }\n\n    protected configureServices(): void {\n        this.Provider.register(Env);\n\n        this.Middleware.addBodyParser();\n        this.Middleware.setErrorHandler({ showStackTrace: true });\n    }\n\n    protected async postServerInitialization(): Promise<void> {\n        if (this.isDevelopment()) {\n            this.Provider.get(Env).checkFile(".env.development");\n        }\n    }\n\n    protected serverShutdown(): void {}\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"this.Provider"}),": an object containing a register method that allows developers to register internal\nor external ExpressoTS-compatible providers. This method registers classes in the ExpressoTS container\nto be part of the dependency injection system, enabling the use of different scopes such as Transient, Scoped, and Singleton."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"this.Middleware"}),": offers a set of out-of-the-box middlewares that can be used to configure your application.\nSee the complete list in the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/features/middleware",children:"Middleware section"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Be sure to explore other functionalities available in the class through ",(0,s.jsx)(n.code,{children:"this"}),", like setGlobalRoutePrefix(), setEngine(), and more."]})}),"\n",(0,s.jsx)(n.h2,{id:"lifecycle-hooks",children:"Lifecycle hooks"}),"\n",(0,s.jsx)(n.p,{children:"An ExpressoTS application and its components follow a lifecycle managed by the framework.\nExpressoTS offers lifecycle hooks that let developers track important events and run specific\ncode within modules, providers, or controllers as these events happen."}),"\n",(0,s.jsx)(n.p,{children:"The diagram below shows the sequence of key lifecycle events, from application startup to when the Node.js process exits."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="Use this method to configure global settings that apply to the entire server application"',children:"async globalConfiguration(): Promise<void> { }\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="Add any service to initialize before the server starts."',children:"async configureServices(): Promise<void> { }\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="Add any service to run after the server starts."',children:"async postServerInitialization(): Promise<void> { }\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="Add any service to run after the server shuts down."',children:"async serverShutdown(): Promise<void> { }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hooks-execution-order",children:"Hooks execution order"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:o,width:"700px",height:"700px",alt:"Lifecycle events"})}),"\n",(0,s.jsx)(n.h2,{id:"method-configcontainer",children:"Method configContainer"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"configContainer"})," method is used to configure the application container with the modules that will be used in the application."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Example of configuring the application container."',children:"private config: AppContainer = this.configContainer([AppModule]);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"middleware-property",children:"Middleware property"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Middleware"})," property is an instance of the ",(0,s.jsx)(n.code,{children:"MiddlewareManager"})," class, which provides a set of methods to add middleware to the application."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Example of adding a middleware to the application."',children:"this.Middleware.addBodyParser();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"provider-property",children:"Provider property"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Provider"})," property is an instance of the ",(0,s.jsx)(n.code,{children:"ProviderManager"})," class, which provides a set of methods to register and get providers in the application."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Example of registering a provider in the application."',children:"this.Provider.register(Env);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"method-initenvironment",children:"Method initEnvironment"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"initEnvironment"})," method is used to set the environment variables for the application."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Example of setting environment variables for the application."',children:'this.initEnvironment("development", {\n    env: {\n        development: ".env.development",\n        production: ".env.production",\n    },\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"method-isdevelopment",children:"Method isDevelopment"}),"\n",(0,s.jsx)(n.p,{children:"It is a helper method that returns a boolean value indicating whether the application is running in development mode.\nThis method is useful for running specific code only in development environments."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Check if the application is running in development mode."',children:"this.isDevelopment(): boolean\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Currently this method is being used in the ",(0,s.jsx)(n.code,{children:"postServerInitialization"})," method to check if the application is running in development mode.\nIf it is, the ",(0,s.jsx)(n.code,{children:"Env"})," provider is used to check all environment variables."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Check all environment variables in development mode."',children:'protected postServerInitialization(): void {\n    if (this.isDevelopment()) {\n        this.Provider.get(Env).checkFile(".env.development");\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"method-set-global-route-prefix",children:"Method set global route prefix"}),"\n",(0,s.jsx)(n.p,{children:"You can set a global prefix for all routes in your application. This is useful when you want to version your APIs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'this.setGlobalRoutePrefix("/v1");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"method-get-http-server",children:"Method get http server"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"getHttpServer"})," method is used to get the HTTP server instance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Example of getting the HTTP server instance."',children:"this.getHttpServer(): http.Server\n"})}),"\n",(0,s.jsx)(n.h2,{id:"method-to-set-the-engine",children:"Method to set the engine"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"setEngine"})," method is used to set the engine for the application."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Example of setting the engine for the application."',children:"this.setEngine(RenderEngine.Engine.EJS);\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,s.jsxs)(n.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/support-us",children:"support guide"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);