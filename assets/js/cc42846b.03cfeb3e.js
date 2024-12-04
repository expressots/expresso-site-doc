"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8487],{9039:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"guides/compression","title":"Compression","description":"How to use the npm compression package in ExpressoTS.","source":"@site/docs/guides/compression.mdx","sourceDirName":"guides","slug":"/guides/compression","permalink":"/docs/next/guides/compression","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"title":"Compression","description":"How to use the npm compression package in ExpressoTS."},"sidebar":"tutorialSidebar","previous":{"title":"GUIDES","permalink":"/docs/next/category/guides"},"next":{"title":"Cookies","permalink":"/docs/next/guides/cookies"}}');var o=n(4848),r=n(8453);const t={sidebar_position:0,title:"Compression",description:"How to use the npm compression package in ExpressoTS."},a="Compression",d={},c=[{value:"Benefits",id:"benefits",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage example",id:"usage-example",level:2},{value:"Add to a specific route",id:"add-to-a-specific-route",level:2},{value:"Add in the controller",id:"add-in-the-controller",level:2},{value:"Add in the method",id:"add-in-the-method",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"compression",children:"Compression"})}),"\n",(0,o.jsx)(s.p,{children:"The npm compression package is a middleware that can compress response bodies for requests that traverse through it. This helps reduce the size of data that's sent over the network, leading to quicker response times and lower bandwidth usage. It uses the zlib library to perform gzip or deflate compression, both of which are widely supported by modern web browsers."}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["For more information about the npm compression package, please visit the ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/compression",children:"npm compression package"})}),"."]})}),"\n",(0,o.jsx)(s.h2,{id:"benefits",children:"Benefits"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Performance: It can significantly reduce the size of the response body, thereby decreasing the time it takes for a client to download the response and render the content."}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Efficiency: It helps in reducing bandwidth consumption which is especially useful if your server is sending large amounts of data or if you have limited bandwidth."}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Overhead: While compression reduces the size of the response body, it does add some computational overhead on the server-side as the server must compress the response body before sending it."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.admonition,{title:"COMPRESSION OVERHEAD",type:"caution",children:[(0,o.jsx)(s.p,{children:"This might not be ideal for high traffic websites where server resources are at a premium."}),(0,o.jsx)(s.p,{children:"Not all content benefits from compression. Binary files like images and videos are already compressed and trying to compress them further can sometimes increase their size."})]}),"\n",(0,o.jsx)(s.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,o.jsx)(s.p,{children:"Deciding on when to use compression depends on the use case. If your website serves a lot of textual data (HTML, CSS, JS, JSON, XML etc.), then using the npm compression package can result in significant bandwidth savings and performance benefits. However, if your website is extremely high traffic, the additional computational overhead of compression might start to become a bottleneck."}),"\n",(0,o.jsx)(s.p,{children:"In high traffic scenarios, it might be more beneficial to use a reverse proxy or a CDN (Content Delivery Network) which can serve static assets and perform caching. This can offload some of the traffic from your main servers and also serve content from locations geographically closer to users, resulting in faster response times. These services usually handle compression themselves, meaning you wouldn't need to use the npm compression package."}),"\n",(0,o.jsx)(s.p,{children:"Modern approaches could involve a combination of techniques - serving static assets from a CDN, caching responses where appropriate, utilizing HTTP/2 for multiplexing, and splitting up your application into microservices to distribute the load."}),"\n",(0,o.jsx)(s.p,{children:"Remember, these approaches aren't mutually exclusive. Often the best approach is to use a combination of these techniques based on the specific requirements of your application. Testing and monitoring your application under realistic workloads can help you make the best decision."}),"\n",(0,o.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,o.jsx)(s.p,{children:"Install the npm compression middleware."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npm i compression && npm i -D @types/compression\n"})}),"\n",(0,o.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(s.p,{children:"Add the compression middleware to your application using the out-of-the-box ExpressoTS middleware system."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-typescript",children:"@provide(App)\nexport class App extends AppExpress {\n    protected configureServices(): void {\n        this.Middleware.addCompression();\n    }\n}\n"})}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsx)(s.p,{children:"If middleware is not added to the application, ExpressoTS will emit a warning message."})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"WARN  [resolver] Middleware [compression] not installed. Please install it using your package manager.\n"})}),"\n",(0,o.jsx)(s.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,o.jsx)(s.p,{children:"Once the middleware is added to the application, it will compress all responses that pass through it. The middleware can be configured with various options to control the behavior of compression."}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"Also you can add the compression middleware globally or to a specific route."})}),"\n",(0,o.jsx)(s.p,{children:"Using compress with filters, filtering requests that contain payload bodies larger than 100 * 1024 bytes:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-typescript",children:'export class App extends AppExpress {\n    protected configureServices(): void | Promise<void> {\n        this.Middleware.addCompression({\n            level: 6,\n            threshold: 100 * 1024,\n            filter: (req, res) => {\n                if (req.headers["x-no-compression"]) {\n                    return false;\n                }\n                return compression.filter(req, res);\n            },\n        });\n    }\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"add-to-a-specific-route",children:"Add to a specific route"}),"\n",(0,o.jsx)(s.p,{children:"Adding the compression middleware to a specific route is also possible via the ExpressoTS middleware system."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:'export class App extends AppExpress {\n    protected configureServices(): void | Promise<void> {\n        this.Middleware.addMiddleware({\n            path: "/api",\n            middlewares: [\n                compression({\n                    level: 6,\n                    threshold: 100 * 1024,\n                    filter: (req, res) => {\n                        if (req.headers["x-no-compression"]) {\n                            return false;\n                        }\n                        return compression.filter(req, res);\n                    },\n                }),\n            ],\n        });\n    }\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"add-in-the-controller",children:"Add in the controller"}),"\n",(0,o.jsx)(s.p,{children:"Adding the middleware in the controller applies the compression middleware to all routes in the controller."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-typescript",children:'@controller("/", compression())\nexport class AppController {\n    @Get("/")\n    execute(): string {\n        return "Hello from Expressots!";\n    }\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"add-in-the-method",children:"Add in the method"}),"\n",(0,o.jsx)(s.p,{children:"Adding the compression middleware in the method applies the compression middleware to the specific route."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-typescript",children:'@Get("/", compression())\nexecute(){};\n'})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,o.jsxs)(s.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.a,{href:"/docs/next/support-us",children:"support guide"})}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);