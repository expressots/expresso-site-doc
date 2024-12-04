"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[941],{7499:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"features/status-code","title":"Status code","description":"Status code is a way to represent the result of a request.","source":"@site/docs/features/status-code.mdx","sourceDirName":"features","slug":"/features/status-code","permalink":"/docs/next/features/status-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Status code","description":"Status code is a way to represent the result of a request."},"sidebar":"tutorialSidebar","previous":{"title":"Decorators","permalink":"/docs/next/features/decorators"},"next":{"title":"Error handling","permalink":"/docs/next/features/error-handling"}}');var n=t(4848),o=t(8453);const a={sidebar_position:2,title:"Status code",description:"Status code is a way to represent the result of a request."},i="Status code",c={},l=[{value:"List of status codes",id:"list-of-status-codes",level:2},{value:"Usage example",id:"usage-example",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"status-code",children:"Status code"})}),"\n",(0,n.jsx)(s.p,{children:"Status code is a way to represent the result of a request. These HTTP responses indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Informational responses (100-199)"}),"\n",(0,n.jsx)(s.li,{children:"Successful responses (200-299)"}),"\n",(0,n.jsx)(s.li,{children:"Redirection messages (300-399)"}),"\n",(0,n.jsx)(s.li,{children:"Client error responses (400-499)"}),"\n",(0,n.jsx)(s.li,{children:"Server error responses (500-599)"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["You can find more details about the status code in the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",children:"MDN Web Docs"})}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["The status codes listed below are defined by ",(0,n.jsx)(s.a,{href:"https://httpwg.org/specs/rfc9110.html#overview.of.status.codes",children:"RFC 9110"})]})}),"\n",(0,n.jsx)(s.h2,{id:"list-of-status-codes",children:"List of status codes"}),"\n",(0,n.jsxs)(s.p,{children:["ExpressoTS provides a list of status codes that you can use in your application represented by the ",(0,n.jsx)(s.code,{children:"StatusCode"})," enum."]}),"\n",(0,n.jsx)(s.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,n.jsxs)(s.p,{children:["Example of how to use the status code in a controller, use case, using ",(0,n.jsx)(s.code,{children:"res"})," object, ",(0,n.jsx)(s.code,{children:"@http"})," decorator etc."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:'title="Controller example"',children:'import { StatusCode } from "@expressots/core";\n\n@controller("/user/create")\nclass CreateUserController {\n    constructor(@inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase) {}\n\n    @Post("/")\n    execute(\n        @body() data: ICreateUserRequestDTO,\n        @response() res: Response\n    ) {\n        return this.createUserUseCase.execute(data);\n    }\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:'title="Using res object"',children:'import { StatusCode } from "@expressots/core";\n\n@controller("/")\nclass ExampleController {\n    @Get("/")\n    execute(@response() res: Response) {\n        res.status(StatusCode.OK).send("Hello World!");\n    }\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:'title="Using @http decorator"',children:'import { StatusCode } from "@expressots/core";\n\n@controller("/")\nclass ExampleController {\n    @Get("/")\n    @Http(StatusCode.OK)\n    execute() {\n        return "Hello World!";\n    }\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:'title="Use case example"',children:'import { StatusCode } from "@expressots/core";\n\n@provide(CreateUserUseCase)\nclass CreateUserUseCase {\n    constructor(private userRepository: UserRepository) {}\n\n    execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO | null {\n        try {\n            const { name, email } = data;\n\n            const user: User | null = this.userRepository.create(new User(name, email));\n\n            if (!user) {\n                Report.Error("User already exists", StatusCode.BadRequest, "create-user-usecase");\n            }\n\n            let response: ICreateUserResponseDTO;\n\n            if (user !== null) {\n                response = {\n                    id: user.Id,\n                    name: user.name,\n                    email: user.email,\n                    status: "success",\n                };\n                return response;\n            }\n\n            return null;\n        } catch (error: any) {\n            throw error;\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,n.jsxs)(s.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"/docs/next/support-us",children:"support guide"})}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var r=t(6540);const n={},o=r.createContext(n);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);