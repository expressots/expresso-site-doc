"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3520],{5578:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"core/di","title":"Injection","description":"Dependency Injection in ExpressoTS.","source":"@site/versioned_docs/version-2.16.2/core/di.mdx","sourceDirName":"core","slug":"/core/di","permalink":"/docs/2.16.2/core/di","draft":false,"unlisted":false,"tags":[],"version":"2.16.2","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"Injection","description":"Dependency Injection in ExpressoTS."},"sidebar":"tutorialSidebar","previous":{"title":"Entities","permalink":"/docs/2.16.2/core/entities"},"next":{"title":"FEATURES","permalink":"/docs/2.16.2/category/features"}}');var t=i(4848),o=i(8453);const r=i.p+"assets/images/di-01b2ae7c2d72444c2788bdfbd45cd026.png",c={sidebar_position:8,title:"Injection",description:"Dependency Injection in ExpressoTS."},d="Dependency Injection",l={},a=[{value:"Benefits",id:"benefits",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Components",id:"components",level:2},{value:"Decorators",id:"decorators",level:2},{value:"Request",id:"request",level:4},{value:"Singleton",id:"singleton",level:4},{value:"Transient",id:"transient",level:4},{value:"Controller scope",id:"controller-scope",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"dependency-injection",children:"Dependency Injection"})}),"\n",(0,t.jsxs)(n.p,{children:["Dependency Injection (DI) is a design pattern used in software development that involves providing an object with the instances of the classes it needs to perform its tasks, rather than having it construct these instances itself. This process of ",(0,t.jsx)(n.code,{children:"providing"})," instances is called ",(0,t.jsx)(n.code,{children:"injecting"})," them, hence the term Dependency Injection."]}),"\n",(0,t.jsx)(n.h2,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsx)(n.p,{children:"Here are some of the key benefits of using Dependency Injection:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Decoupling: DI helps to decouple the components of your application. Instead of components creating the objects they depend upon, these objects are passed in (injected) by a DI framework or container. This means components don't need to know about the inner workings of their dependencies, and dependencies can be swapped out without the component knowing or caring."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Testability: DI makes unit testing easier. Because dependencies are injected, you can easily provide mock objects during testing. This allows each unit of code to be tested in isolation, with full control over its dependencies."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reusable Code: With DI, your classes are typically designed to work with interfaces rather than concrete classes. This means you can reuse the same class in different contexts, with different injected dependencies."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Easier Maintenance and Increased Efficiency: By centralizing the creation of objects, and by reducing the amount of hard-coded class instantiation, maintenance becomes easier. When a class changes, you typically only need to update code in one place."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configurability: You can configure your application structure externally, typically through XML or similar files. This means you can modify the structure and dependencies of your components without having to modify the code itself."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Lifecycles and Scoping: manage the lifecycle of injected objects, and control their scoping (e.g., singleton scope, request scope)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Concurrency Management: containers can automatically handle service lifetimes in a concurrent environment, which can be a complex task to handle correctly without such a tool."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In conclusion, DI is a technique that facilitates loose coupling, increased testability, and more maintainable and flexible code."}),"\n",(0,t.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"In the image below, we ensure that each controller is responsible for a single task, which is why\nyou see multiple controllers within a module. This architecture showcases the flexibility of the container\nsystem, enabling developers to define scopes at various levels, including the container, module, and controller.\nEven services like use cases and providers can have their own distinct scopes within the container."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:r,alt:"Container"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Container have its default scope that can be override by the module. The default scope is ",(0,t.jsx)(n.code,{children:"Request"})," scope."]}),"\n",(0,t.jsx)(n.li,{children:"Defining a scope for a module forces all controllers under that module to have the same scope."}),"\n",(0,t.jsxs)(n.li,{children:["Not defining a scope for a module allow controllers to have their own scope using ",(0,t.jsx)(n.code,{children:"@scope()"})," decorator."]}),"\n",(0,t.jsx)(n.li,{children:"All other registered classes such as providers, entities, helpers can have their specific scope based on the decorator used."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,t.jsx)(n.p,{children:"The DI system in ExpressoTS is composed of the following components:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Components"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Container"}),(0,t.jsx)(n.td,{children:"The DI container of the ExpressoTS application."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Module"}),(0,t.jsx)(n.td,{children:"A container module is typically used to group related controllers and their dependencies together."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Controller"}),(0,t.jsx)(n.td,{children:"Primary interface between the client and server. Responsible to handle incoming requests."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Classes"}),(0,t.jsx)(n.td,{children:"Any other class part of the ExpressoTS ecosystem, for example, providers, entities, helpers, etc."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"decorators",children:"Decorators"}),"\n",(0,t.jsx)(n.p,{children:"Injection is done through decorators. The following decorators are used to define the scope of a class:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Decorator"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"@provide()"}),(0,t.jsx)(n.td,{children:"Binds a class to a dependency injection container as RequestScope."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"@provideSingleton()"}),(0,t.jsx)(n.td,{children:"Binds a class to a dependency injection container as Singleton."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"@provideTransient()"}),(0,t.jsx)(n.td,{children:"Binds a class to a dependency injection container as Transient."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Example of usage:"}),"\n",(0,t.jsx)(n.h4,{id:"request",children:"Request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@provide(MyRequest)\nclass MyRequest {}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"singleton",children:"Singleton"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@provideSingleton(MySingleton)\nclass MySingleton {}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"transient",children:"Transient"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@provideTransient(MyTransient)\nclass MyTransient {}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"controller-scope",children:"Controller scope"}),"\n",(0,t.jsxs)(n.p,{children:["Controllers can have their own scope using the ",(0,t.jsx)(n.code,{children:"@scope()"})," decorator. This decorator can be used to define the scope of a controller."]}),"\n",(0,t.jsx)(n.p,{children:"Example of usage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'@scope("Singleton")\n@controller()\nclass MyController {}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"You can't define a scope for a controller if the module has a scope defined."})}),"\n",(0,t.jsx)(n.h2,{id:"circular-dependencies",children:"Circular dependencies"}),"\n",(0,t.jsx)(n.p,{children:"Circular dependencies occur when two or more modules depend on each other, leading to a potentially infinite loop or other issues during dependency injection."}),"\n",(0,t.jsx)(n.p,{children:"ExpressoTS circular dependencies can be resolved using the following methods:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"span-table",children:"Lazy Injection: "})," (@inject with LazyServiceIdentifier)"]}),"\n",(0,t.jsx)(n.p,{children:"One common approach to handle circular dependencies in ExpressoTS is to use lazy injection. This allows the IoC container to inject a proxy or a function\nthat retrieves the dependency only when it's actually needed. This postpones the resolution of the dependency,\navoiding the immediate circular reference issue."}),"\n",(0,t.jsxs)(n.p,{children:["To implement this, you can use the ",(0,t.jsx)(n.code,{children:"LazyServiceIdentifier"})," utility provided by the framework."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="Lazy Injection"',children:'import { inject, LazyServiceIdentifier } from "inversify";\n\n@provide(ServiceA)\nclass ServiceA {\n    constructor(\n        @inject(new LazyServiceIdentifier(() => ServiceB))\n        private serviceB: ServiceB\n    ) {}\n}\n\n@provide(ServiceB)\nclass ServiceB {\n    constructor(@inject(ServiceA) private serviceA: ServiceA) {}\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, ServiceA and ServiceB depend on each other. By using ",(0,t.jsx)(n.code,{children:"LazyServiceIdentifier"}),", ServiceB\nis injected into ServiceA in a lazy manner, breaking the circular dependency loop."]}),"\n",(0,t.jsx)(n.admonition,{title:"Factory Injection is under development.",type:"caution"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"span-table",children:"Factory Injection: "})," Use factory functions to create instances on demand,\nthus avoiding circular dependencies at construction time."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"span-table",children:"Proxies: "})," Employ proxies to delay the resolution of dependencies, giving\nmore control over when and how the dependency is resolved."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,t.jsxs)(n.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs/2.16.2/support-us",children:"support guide"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);