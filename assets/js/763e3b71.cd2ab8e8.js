"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4383],{7668:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"guides/repositories","title":"Repositories","description":"Learn how to use repositories in ExpressoTS.","source":"@site/docs/guides/repositories.mdx","sourceDirName":"guides","slug":"/guides/repositories","permalink":"/docs/next/guides/repositories","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Repositories","description":"Learn how to use repositories in ExpressoTS."},"sidebar":"tutorialSidebar","previous":{"title":"Cookies","permalink":"/docs/next/guides/cookies"},"next":{"title":"File Upload","permalink":"/docs/next/guides/file-upload"}}');var o=i(4848),r=i(8453);const n={sidebar_position:2,title:"Repositories",description:"Learn how to use repositories in ExpressoTS."},a="Repositories",l={},p=[{value:"Goals and benefits",id:"goals-and-benefits",level:2},{value:"Implementation example",id:"implementation-example",level:2},{value:"Base repository interface",id:"base-repository-interface",level:2},{value:"Base repository class",id:"base-repository-class",level:2},{value:"Specific repository class",id:"specific-repository-class",level:2},{value:"Repositories vs providers",id:"repositories-vs-providers",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"repositories",children:"Repositories"})}),"\n",(0,o.jsxs)(s.p,{children:["The repository pattern provides an abstraction layer for data access, encapsulating CRUD (Create, Read, Update, Delete) operations within repository classes. These repositories act as intermediaries between the business logic and data mapping layers, using ORMs like ",(0,o.jsxs)(s.strong,{children:[(0,o.jsx)(s.a,{href:"https://typeorm.io/",children:"TypeORM"}),", ",(0,o.jsx)(s.a,{href:"https://www.prisma.io/",children:"Prisma"})," or ",(0,o.jsx)(s.a,{href:"https://sequelize.org/",children:"Sequelize"})]})," to interact with the database."]}),"\n",(0,o.jsx)(s.h2,{id:"goals-and-benefits",children:"Goals and benefits"}),"\n",(0,o.jsx)(s.p,{children:"The main goal of the repository pattern is to separate business logic from data access logic. This allows developers to write code that is more focused on the business requirements of the application, rather than the technical details of how data is stored and accessed."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Separation of Concerns"}),": It decouples business logic from data access logic, enabling developers to focus on business rules without worrying about database operations."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Maintainability"}),": Centralizes data access logic within repositories, simplifying maintenance and updates to data storage implementations."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Abstraction"}),": Hides the complexities of the data layer from the rest of the application, providing a simplified and consistent interface for data operations."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Testability"}),": Makes testing easier by allowing the use of mock repositories or in-memory databases to simulate data persistence."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"implementation-example",children:"Implementation example"}),"\n",(0,o.jsxs)(s.p,{children:["In the following example, we will create a simple repository pattern implementation using TypeScript. We will define a base repository interface and class, as well as a concrete repository class for a ",(0,o.jsx)(s.code,{children:"User"})," entity."]}),"\n",(0,o.jsx)(s.h2,{id:"base-repository-interface",children:"Base repository interface"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-typescript",children:"interface IBaseRepository<T> {\n    create(item: T): T | null;\n    update(item: T): T | null;\n    delete(id: string): boolean;\n    find(id: string): T | null;\n    findAll(): T[];\n}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"base-repository-class",children:"Base repository class"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-typescript",children:"@provide(BaseRepository)\nclass BaseRepository<T> implements IBaseRepository<T> {\n    // Implement the interface methods here\n}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"specific-repository-class",children:"Specific repository class"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-typescript",children:"@provide(UserRepository)\nclass UserRepository extends BaseRepository<User> {}\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The above example demonstrates the simplicity of creating a base repository that can be extended for specific entities like ",(0,o.jsx)(s.code,{children:"User"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"repositories-vs-providers",children:"Repositories vs providers"}),"\n",(0,o.jsx)(s.p,{children:"While repositories focus on data interaction, providers in ExpressoTS typically offer functionalities such as environment validation or logging. Keeping repositories and providers distinct ensures clean separation and adheres to the single responsibility principle."}),"\n",(0,o.jsx)(s.p,{children:'In ExpressoTS, repositories are housed within a dedicated "repositories" folder, distinguishing them from the "providers" folder. This structural choice emphasizes their distinct roles and facilitates a modular codebase.'}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsx)(s.p,{children:"This separation happens only in the opinionated template. For the non opinionated template, you can structure your codebase as you see fit."})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,o.jsxs)(s.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.a,{href:"/docs/next/support-us",children:"support guide"})}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>n,x:()=>a});var t=i(6540);const o={},r=t.createContext(o);function n(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);