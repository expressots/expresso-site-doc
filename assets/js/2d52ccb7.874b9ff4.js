"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9675],{247:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"core/first-steps","title":"First steps","description":"Begin your journey with ExpressoTS!","source":"@site/versioned_docs/version-3.0.0/core/first-steps.mdx","sourceDirName":"core","slug":"/core/first-steps","permalink":"/docs/core/first-steps","draft":false,"unlisted":false,"tags":[],"version":"3.0.0","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"title":"First steps","description":"Begin your journey with ExpressoTS!"},"sidebar":"tutorialSidebar","previous":{"title":"CORE","permalink":"/docs/category/core"},"next":{"title":"App","permalink":"/docs/core/app-provider"}}');var r=s(4848),i=s(8453),a=s(1470),l=s(9365);const o={sidebar_position:0,title:"First steps",description:"Begin your journey with ExpressoTS!"},c="First steps",p={},d=[{value:"Philosophy",id:"philosophy",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Project templates",id:"project-templates",level:2},{value:"Non-opinionated project structure",id:"non-opinionated-project-structure",level:4},{value:"Opinionated project structure",id:"opinionated-project-structure",level:4},{value:"Micro API project structure",id:"micro-api-project-structure",level:4},{value:"Main entry point",id:"main-entry-point",level:2},{value:"Running the application",id:"running-the-application",level:2},{value:"Linter and formatter",id:"linter-and-formatter",level:2},{value:"Testing",id:"testing",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"first-steps",children:"First steps"})}),"\n",(0,r.jsx)(n.p,{children:"Begin your journey with ExpressoTS! These guides will help you learn and get familiarized with the essential building blocks of ExpressoTS."}),"\n",(0,r.jsx)(n.h2,{id:"philosophy",children:"Philosophy"}),"\n",(0,r.jsx)(n.p,{children:"ExpressoTS streamlines server-side development by emphasizing clear and structured code. Ideal\nfor both simple APIs and complex systems, ExpressoTS accelerates development and ensures timely, high-quality delivery."}),"\n",(0,r.jsxs)(n.p,{children:["ExpressoTS is a ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," framework fully integrated with the ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en",children:"Node.js"})," and ",(0,r.jsx)(n.a,{href:"https://expressjs.com/",children:"Expressjs"})," ecosystem. While TypeScript is the primary language,\nExpressoTS is fully compatible with JavaScript."]}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, we\u2019ll use TypeScript for most examples, but feel free to switch to vanilla JavaScript if that suits you better."}),"\n",(0,r.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(n.p,{children:"ExpressoTS architecture centers on the IoC container, which manages dependency injection in class constructors or in properties.\nThis setup ensures that all necessary modules, including routes (controllers), are loaded.\nRouters then handle incoming requests using use-cases and providers as required."}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s an overview of an ExpressoTS application:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Application Overview",src:s(9690).A+"",width:"1155",height:"580"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DTO IN/OUT"}),": Defines the structure for incoming and outgoing data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Controller"}),": Manages request processing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),": Executes specific logic for handling requests."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Provider"}),": Supplies external functionalities like database access."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Repository"}),": Handles direct communication with the database."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsxs)(n.p,{children:["Please make sure that ",(0,r.jsx)(n.a,{href:"https://nodejs.org",children:"Node.js"})," ",(0,r.jsx)(n.code,{children:"version >= 20.18.0"})," is installed on your operating system."]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/cli/overview",children:"ExpressoTS CLI"})})," globally using NPM to get started with your project setup:"]}),"\n",(0,r.jsxs)(n.p,{children:["Setting up a new ExpressoTS project is quite simple with ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/cli/overview",children:"ExpressoTS CLI"})}),". First install the CLI globally with ",(0,r.jsx)(n.code,{children:"NPM"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i -g @expressots/cli\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a new project by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"expressots new project-name\n"})}),"\n",(0,r.jsx)(n.h2,{id:"project-templates",children:"Project templates"}),"\n",(0,r.jsx)(n.p,{children:"ExpressoTS provides two project templates to cater to different development needs:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Non-opinionated"}),": Provides flexibility in project structure and resource scaffolding, with minimal setup."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Opinionated"}),": Pre-configured for complex projects, enforcing a specific structure and scaffolding pattern."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"MicroAPI"}),": A minimalistic template for building micro api's."]}),"\n"]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(l.A,{label:"Non Opinionated",value:"non-opinionated",children:[(0,r.jsx)(n.h4,{id:"non-opinionated-project-structure",children:"Non-opinionated project structure"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tree",children:"project-name/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 app.controller.ts\n\u2502   \u251c\u2500\u2500 app.ts\n\u2502   \u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 test/\n\u2502   \u251c\u2500\u2500 app.controller.spec.ts\n"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"File Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" app.controller.ts"})}),(0,r.jsx)(n.td,{children:"A basic controller with a single route."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" app.ts"})}),(0,r.jsx)(n.td,{children:"Application global configuration file."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" main.ts"})}),(0,r.jsx)(n.td,{children:"The main entry point of an ExpressoTS application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" app.controller.spec.ts"})}),(0,r.jsx)(n.td,{children:"Unit test for the app.controller."})]})]})]})]}),(0,r.jsxs)(l.A,{label:"Opinionated",value:"opinionated",children:[(0,r.jsx)(n.h4,{id:"opinionated-project-structure",children:"Opinionated project structure"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tree",children:"project-name/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 useCases/\n\u2502   \u2502   \u2514\u2500\u2500 app/\n\u2502   \u2502       \u2514\u2500\u2500 app.controller.ts\n\u2502   \u2502       \u2514\u2500\u2500 app.module.ts\n\u2502   \u2502       \u2514\u2500\u2500 app.usecase.ts\n\u2502   \u251c\u2500\u2500 app.ts\n\u2502   \u251c\u2500\u2500 env.ts\n\u2502   \u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 test/\n\u2502   \u251c\u2500\u2500 app.controller.spec.ts\n"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"File Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" useCases/*"})}),(0,r.jsx)(n.td,{children:"The use case folder holds the implementation of operations for the application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" app.ts"})}),(0,r.jsx)(n.td,{children:"Application global configuration file."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" env.ts"})}),(0,r.jsx)(n.td,{children:"This is an utility resource that maps .env variables."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" main.ts"})}),(0,r.jsx)(n.td,{children:"The main entry point of an ExpressoTS application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" app.controller.spec.ts"})}),(0,r.jsxs)(n.td,{children:["A basic unit test using ",(0,r.jsx)(n.code,{children:"supertest"})," for the app.controller."]})]})]})]})]}),(0,r.jsxs)(l.A,{label:"Micro API",value:"micro",children:[(0,r.jsx)(n.h4,{id:"micro-api-project-structure",children:"Micro API project structure"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tree",children:"project-name/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 api.ts\n\u251c\u2500\u2500 test/\n\u2502   \u251c\u2500\u2500 api.spec.ts\n"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"File Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" api.ts"})}),(0,r.jsx)(n.td,{children:"The main entry point of an ExpressoTS application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{class:"span-table",children:" api.spec.ts"})}),(0,r.jsx)(n.td,{children:"A basic unit test for the app controller."})]})]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Opinionated projects have a different scaffold pattern in addition to the non-opinionated projects. They are pre-configured for complex projects, enforcing\na specific structure and name convention."})}),"\n",(0,r.jsx)(n.h2,{id:"main-entry-point",children:"Main entry point"}),"\n",(0,r.jsxs)(n.p,{children:["The main entry point ",(0,r.jsx)(n.code,{children:"main.ts"})," or ",(0,r.jsx)(n.code,{children:"api.ts"})," of an ExpressoTS application is where the application is initialized. This file is responsible for bootstrapping\nthe application and starting the server."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{label:"Non Opinionated",value:"non-opinionated",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"AppFactory.create(App).then((app) => app.listen(3000));\n"})})}),(0,r.jsx)(l.A,{label:"Opinionated",value:"opinionated",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"AppFactory.create(App).then((app) =>\n    app.listen(env.App.Port, {\n        appName: env.App.appName,\n        appVersion: env.App.appVersion,\n    })\n);\n"})})}),(0,r.jsx)(l.A,{label:"Micro API",value:"micro",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'\nconst microAPI = createMicroAPI();\nmicroAPI.setGlobalRoutePrefix("/v1");\n\nconst app = microAPI.build();\napp.Middleware.addBodyParser();\n\napp.Route.get("/", (req: Request, res: Response) => {\nres.send("Hello from ExpressoTS!");\n});\n\napp.listen(3001);\n\nbootstrap();\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AppFactory"})," class is responsible for creating the application instance. The ",(0,r.jsx)(n.code,{children:"AppFactory"})," was designed to support multiple web servers like Express.js, Fastify, and more. Currently, it only supports Express.js."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"create"})," method accepts the application class as parameters (",(0,r.jsx)(n.code,{children:"app.ts"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"listen"})," method starts the server on the specified port with default environment settings. You can also pass an object specifying the app's name and version."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"App"})," class is the application root module, which is responsible for initializing the application and its dependencies.\nAll application configuration and setup are handled in the ",(0,r.jsx)(n.a,{href:"/docs/core/app-provider",children:"App class"})," - (",(0,r.jsx)(n.code,{children:"app.ts"}),") file."]}),"\n",(0,r.jsxs)(n.p,{children:["The application environment is defined by a method called ",(0,r.jsx)(n.code,{children:'initEnvironment("development")'}),". You can also specify the .env file path as a parameter for each environment."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'initEnvironment("development", {\n    env: {\n        development: ".env.development",\n        production: ".env.production",\n    },\n});\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["MicroAPI project have the entire application setup in the ",(0,r.jsx)(n.code,{children:"api.ts"})," file. The ",(0,r.jsx)(n.code,{children:"createMicroAPI"})," function is responsible for creating the application instance."]})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-application",children:"Running the application"}),"\n",(0,r.jsx)(n.p,{children:"With your application set up, you can start your development server, build your application, or run it in production mode."}),"\n",(0,r.jsx)(n.p,{children:"Development mode"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u2714\ufe0f npm run dev\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build the application"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u2714\ufe0f npm run build\n"})}),"\n",(0,r.jsx)(n.p,{children:"Production mode"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u2714\ufe0f npm run prod\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once the application is up and running, you can access it by navigating to ",(0,r.jsx)("span",{class:"span-table",children:(0,r.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You should see ",(0,r.jsx)("span",{class:"span-table",children:"Hello from ExpressoTS!"})," displayed on the screen."]}),"\n",(0,r.jsx)(n.h2,{id:"linter-and-formatter",children:"Linter and formatter"}),"\n",(0,r.jsxs)(n.p,{children:["ExpressoTS uses ",(0,r.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"})," and ",(0,r.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"})," to enforce code quality and consistency. You can run the following commands to lint and format your code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u2714\ufe0f npm run lint\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u2714\ufe0f npm run format\n"})}),"\n",(0,r.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(n.p,{children:["ExpressoTS uses ",(0,r.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"})," as the testing framework. You can run the following command to execute your tests:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u2714\ufe0f npm run test\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,r.jsxs)(n.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/support-us",children:"support guide"})}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var t=s(4164);const r={tabItem:"tabItem_Ymn6"};var i=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(6540),r=s(4164),i=s(3104),a=s(6347),l=s(205),o=s(7485),c=s(1682),p=s(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=x({queryString:s,groupId:r}),[j,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,p.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=c??j;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=s(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function b(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),p=e=>{const n=e.currentTarget,s=o.indexOf(n),r=l[s].value;r!==t&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:p,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},9690:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/app-overview-031ad5704d8036c8ce611d660820a781.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);