"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7046],{7302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"core/controller","title":"Controllers","description":"Controllers the mediator between the client and server.","source":"@site/docs/core/controller.mdx","sourceDirName":"core","slug":"/core/controller","permalink":"/docs/next/core/controller","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Controllers","description":"Controllers the mediator between the client and server."},"sidebar":"tutorialSidebar","previous":{"title":"Modules","permalink":"/docs/next/core/module"},"next":{"title":"Use cases","permalink":"/docs/next/core/usecase"}}');var s=r(4848),o=r(8453),a=r(1470),l=r(9365);const i={sidebar_position:4,title:"Controllers",description:"Controllers the mediator between the client and server."},c="Controllers",d={},h=[{value:"Create a controller",id:"create-a-controller",level:2},{value:"Patterns",id:"patterns",level:2},{value:"Routing",id:"routing",level:2},{value:"Route string patterns",id:"route-string-patterns",level:2},{value:"Scope",id:"scope",level:2},{value:"Request object",id:"request-object",level:2},{value:"Controller decorators",id:"controller-decorators",level:2},{value:"Status code",id:"status-code",level:2},{value:"HTTP decorator",id:"http-decorator",level:2},{value:"Payloads",id:"payloads",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"controllers",children:"Controllers"})}),"\n",(0,s.jsx)(t.p,{children:"Controllers act as the primary interface between the client and server.\nThey handle incoming requests, validate payloads against an input DTO, and emit responses in the DTO pattern.\nIn essence, controllers bridge the communication between clients and service layers, also known as use-cases."}),"\n",(0,s.jsx)(t.h2,{id:"create-a-controller",children:"Create a controller"}),"\n",(0,s.jsx)(t.p,{children:"In order to create a controller use the CLI tool with the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"expressots g c controller-name\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example of a generated controller:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"expressots g c product\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="ProductController.ts"',children:'import { controller } from "@expressots/adapter-express";\n\n@controller("/")\nexport class ProductController {}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"patterns",children:"Patterns"}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned before, controllers can be created in two different patterns: ",(0,s.jsx)(t.strong,{children:"SOLID"})," and ",(0,s.jsx)(t.strong,{children:"MVC"}),".\nThe choice between these patterns depends on the project's requirements and the developer's preference."]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{label:"SOLID",value:"solid",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="One controller, one execution method, and one use case"',children:'    @controller("/product/create")\n    export class ProductCreateController {\n        @Post("")\n        exeute() {\n            return "Product created!";\n        }\n    }\n'})})}),(0,s.jsx)(l.A,{label:"MVC",value:"mvc",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="Several routes in a single controller"',children:'@controller("/product")\nexport class ProductController {\n    @Post("/")\n    createProduct() {\n        return "Product created!";\n    }\n    @Get("/")\n    readProduct() {\n        return "Product read!";\n    }\n    @Patch("/:id")\n    updateProduct() {\n        return "Product updated!";\n    }\n    @Delete("/:id")\n    deleteProduct() {\n        return "Product deleted!";\n    }\n}\n'})})})]}),"\n",(0,s.jsx)(t.h2,{id:"routing",children:"Routing"}),"\n",(0,s.jsxs)(t.p,{children:["Routing in ExpressoTS is handled with decorators. The ",(0,s.jsx)(t.code,{children:"@controller()"})," decorator sets the base route,\nwhile HTTP method decorators like ",(0,s.jsx)(t.code,{children:"@Get()"})," and ",(0,s.jsx)(t.code,{children:"@Post()"})," define specific routes."]}),"\n",(0,s.jsx)(t.p,{children:"You can also apply middleware at the controller level which affects all methods, while applying it to a method affects only that specific route.\nThis approach ensures a clean and structured way to manage routing and middleware in your application."}),"\n",(0,s.jsx)(t.p,{children:"Example of controller routing concatenation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="BASE_URL/product/create"',children:'@controller("/product")\nexport class ProductController {\n    @Post("/create")\n    createProduct() {\n        return "Product created!";\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Example of middleware usage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Middleware usage in a controller and in a specific route"',children:'@controller("/product", authMiddleware)\nexport class ProductController {\n    @Post("/create", bodyParsingMiddleware)\n    createProduct() {\n        return "Product created!";\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"route-string-patterns",children:"Route string patterns"}),"\n",(0,s.jsx)(t.p,{children:"Routes based on string patterns can be defined as well. This feature is useful when you need to define a route with a dynamic parameter."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Route with a dynamic parameter"',children:'@controller("/ab?cd")\nexport class AppController {\n    @Get("")\n    stringPattern(): string {\n        return "Routes to be used in the following paths: /acd or /abcd";\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Read more about route string patterns and all the possibilities ",(0,s.jsx)(t.a,{href:"https://expressjs.com/en/guide/routing.html#route-paths",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"scope",children:"Scope"}),"\n",(0,s.jsxs)(t.p,{children:["The default scope of a controller is ",(0,s.jsx)(t.code,{children:"Request"}),", as it is inherited from the ",(0,s.jsx)(t.code,{children:"AppContainer"})," and default ",(0,s.jsx)(t.code,{children:"Module"})," class scope.\nHowever, you can override the scope of a controller by using the ",(0,s.jsx)(t.code,{children:"@scope()"})," decorator. This decorator accepts the same BindingScopeEnum values."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["If you define the module scope you can not override it in a specific controller by using the ",(0,s.jsx)(t.code,{children:"@scope"})," decorator.\nThe ",(0,s.jsx)(t.code,{children:"@scope"})," decorator can only be used in specific controllers if the module scope is not defined."]})}),"\n",(0,s.jsx)(t.p,{children:"Here is an example of usage:"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"BindingScopeEnum.Singleton"}),' or simply a string "Singleton".']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'@scope("Singleton")\n@controller("/")\nclass ProductController {}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The controller above will be scoped as ",(0,s.jsx)(t.code,{children:"Singleton"})," and will be shared across all requests."]}),"\n",(0,s.jsx)(t.h2,{id:"request-object",children:"Request object"}),"\n",(0,s.jsxs)(t.p,{children:["In order to access the request object, you can use the ",(0,s.jsx)(t.code,{children:"@request()"})," decorator."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Request object example"',children:'import { controller, Get, request } from "@expressots/adapter-express";\nimport { Request } from "express";\n\n@controller("/product")\nexport class ProductController {\n    @Get("/")\n    getAllProducts(@request() req: Request) {\n        return "Return all products";\n    }\n}\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can take advantage of the express types to access the request object as they are already imported in the ",(0,s.jsx)(t.code,{children:"@expressots/adapter-express"})," package."]})}),"\n",(0,s.jsx)(t.p,{children:"The request object is just one of the decorators available in ExpressoTS. See more in the below section."}),"\n",(0,s.jsx)(t.h2,{id:"controller-decorators",children:"Controller decorators"}),"\n",(0,s.jsx)(t.p,{children:"HTTP methods and parameters decorators are a set of annotations used in ExpressoTS applications to define the routing\nand request handling for HTTP requests. Using the decorators listed below can simplify the routing and handling of HTTP requests\nin ExpressoTS applications, and make the code more readable and maintainable."}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(l.A,{label:"Parameter Decorators",value:"parameter-decorators",children:[(0,s.jsx)(t.p,{children:"Here's a list of all available parameter decorators in ExpressoTS, along with their description and usage:"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Decorator"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Usage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@request()"}),(0,s.jsx)(t.td,{children:"Injects the Express Request object."}),(0,s.jsx)(t.td,{children:"execute(@request() req: Request)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@response()"}),(0,s.jsx)(t.td,{children:"Injects the Express Response object."}),(0,s.jsx)(t.td,{children:"execute(@response() res: Response)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@param(paramName?: string)"}),(0,s.jsx)(t.td,{children:"Injects a parameter from the request URL path."}),(0,s.jsx)(t.td,{children:"execute(@param('id') id: string)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@query(paramName?: string)"}),(0,s.jsx)(t.td,{children:"Injects a parameter from the request URL query string."}),(0,s.jsx)(t.td,{children:"execute(@query('searchTerm') searchTerm: string)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@body()"}),(0,s.jsx)(t.td,{children:"Injects the request body payload."}),(0,s.jsx)(t.td,{children:"execute(@body() body: MyDTO)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@headers(headerName?: string)"}),(0,s.jsx)(t.td,{children:"Injects a header from the request headers."}),(0,s.jsx)(t.td,{children:"execute(@headers('authorization') auth: string)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@cookies(cookieName?: string)"}),(0,s.jsx)(t.td,{children:"Injects a cookie from the request cookies."}),(0,s.jsx)(t.td,{children:"execute(@cookies('session') session: string)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@next()"}),(0,s.jsx)(t.td,{children:"Injects the Express NextFunction object."}),(0,s.jsx)(t.td,{children:"execute(@next() next: NextFunction)"})]})]})]})]}),(0,s.jsxs)(l.A,{label:"Method Decorators",value:"method-decorators",children:[(0,s.jsxs)(t.p,{children:["Here's a list of all available ",(0,s.jsx)(t.code,{children:"@httpMethods()"})," decorators in ExpressoTS, along with their description and usage:"]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Decorator"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Usage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@Get"}),(0,s.jsx)(t.td,{children:"Binds a controller method to a GET HTTP verb."}),(0,s.jsx)(t.td,{children:'@Get("/path")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@Post"}),(0,s.jsx)(t.td,{children:"Binds a controller method to a POST HTTP verb."}),(0,s.jsx)(t.td,{children:'@Post("/path")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@Put"}),(0,s.jsx)(t.td,{children:"Binds a controller method to a PUT HTTP verb."}),(0,s.jsx)(t.td,{children:'@Put("/path")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@Patch"}),(0,s.jsx)(t.td,{children:"Binds a controller method to a PATCH HTTP verb."}),(0,s.jsx)(t.td,{children:'@Patch("/path")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@Head"}),(0,s.jsx)(t.td,{children:"Binds a controller method to a HEAD HTTP verb."}),(0,s.jsx)(t.td,{children:'@Head("/path")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@Delete"}),(0,s.jsx)(t.td,{children:"Binds a controller method to a DELETE HTTP verb."}),(0,s.jsx)(t.td,{children:'@Delete("/path")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"@Method"}),(0,s.jsx)(t.td,{children:"Binds a controller method to a specified HTTP verb."}),(0,s.jsx)(t.td,{children:'@Method("verb", "/path")'})]})]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["For a full list of available decorators, please refer to the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/docs/next/features/decorators",children:"Decorators"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"status-code",children:"Status code"}),"\n",(0,s.jsx)(t.p,{children:"Status Code is an enum that provides a list of HTTP status codes that can be used in the application."}),"\n",(0,s.jsx)(t.p,{children:"The default status code based on the HTTP method:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"GET"}),": 200"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"POST"}),": 201"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"PUT - PATCH - DELETE"}),": 204"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["You can import ",(0,s.jsx)("span",{class:"span-table",children:"StatusCode"})," from ",(0,s.jsx)(t.code,{children:"@expressots/core"})," to use the default status codes."]})}),"\n",(0,s.jsxs)(t.p,{children:["Read more about status codes in the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/docs/next/features/status-code",children:"Status Code"})})," section."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Using the StatusCode to improve the code readability"',children:'import { StatusCode } from "@expressots/core";\n\n@Http(StatusCode.NoContent)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"http-decorator",children:"HTTP decorator"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@Http()"})," decorator is used to define the status code of the response. This decorator is useful when you need to return a specific status code for a request."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Using the @Http() decorator"',children:'import { controller, Get, Http } from "@expressots/adapter-express";\n\n@controller("/")\nexport class AppController {\n    @Get("")\n    @Http(200)\n    execute() {\n        return "App is running!";\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"payloads",children:"Payloads"}),"\n",(0,s.jsx)(t.p,{children:"In a request, payloads refer to the data sent between the client and server, typically in the body of the request. This data is crucial for operations like creating, updating, or querying resources."}),"\n",(0,s.jsx)(t.p,{children:"The DTO pattern standardizes these payloads for communication between different application layers. By providing clear and consistent data structures for input and output, DTOs separate business logic from data exchange, reducing complexity, improving performance, and enhancing scalability."}),"\n",(0,s.jsx)(t.p,{children:"For example, imagine a user registration scenario where name, email, and password are collected, and ID is auto-generated. The user object DTO for Input and Response could have possible formats, as shown below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="user-create.dto.ts"',children:"interface UserCreateRequestDTO {\n    name: string;\n    email: string;\n    password: string;\n}\n\ninterface UserCreateResponseDTO {\n    id: string;\n    name: string;\n    message: string;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Having two different DTO formats is essential in this case because while registering a user, we don't want to return the password\nto the client due to security concerns. Therefore, we created a different DTO for the response, adding a complementary field called message,\nwhere a message is typically sent to the client, indicating that the user was created successfully."}),"\n",(0,s.jsx)(t.p,{children:"As a result, DTOs help to segregate and filter the data being sent to the client, reducing the amount of data processed by the application."}),"\n",(0,s.jsxs)(t.p,{children:["Using DTOs in ExpressoTS is straightforward. You can use the ",(0,s.jsx)(t.code,{children:"@body()"})," decorator to inject the request body payload into the controller method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Using the @body() decorator"',children:'@controller("/user")\nexport class UserController {\n    @Post("")\n    register(@body() payload: UserCreateRequestDTO): UserCreateResponseDTO {\n        return {\n            id: "1",\n            name: payload.name,\n            message: "User created successfully",\n        };\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"error-handling",children:"Error handling"}),"\n",(0,s.jsxs)(t.p,{children:["For error handling, ExpressoTS provides a built-in error handler middleware that can be used to catch errors thrown in the application.\nThis middleware is automatically added to the application when it is initialized in the ",(0,s.jsx)(t.code,{children:"app.ts"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["Read more about error handling in ExpressoTS in the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/docs/next/features/error-handling",children:"Error Handling"})})," section."]}),"\n",(0,s.jsx)(t.admonition,{title:"Initializing the Application without a controller",type:"warning",children:(0,s.jsxs)(t.p,{children:["ExpressoTS will prevent you from initializing the Application without a controller since there are no listeners to handle incoming requests. You will see the following message in the console:\n",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"No controllers have been found! Please ensure that you have register at least one Controller."})})]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,s.jsxs)(t.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/docs/next/support-us",children:"support guide"})}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>a});r(6540);var n=r(4164);const s={tabItem:"tabItem_Ymn6"};var o=r(4848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(6540),s=r(4164),o=r(3104),a=r(6347),l=r(205),i=r(7485),c=r(1682),d=r(679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,o=u(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,h]=x({queryString:r,groupId:s}),[j,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),g=(()=>{const e=c??j;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),m(e)}),[h,m,o]),tabValues:o}}var m=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),s=l[r].value;s!==n&&(c(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:h,onClick:d,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function T(e){const t=(0,m.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);