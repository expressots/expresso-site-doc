"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3125],{2985:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"guides/cookies","title":"Cookies","description":"How to use cookies in ExpressoTS.","source":"@site/docs/guides/cookies.mdx","sourceDirName":"guides","slug":"/guides/cookies","permalink":"/docs/next/guides/cookies","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Cookies","description":"How to use cookies in ExpressoTS."},"sidebar":"tutorialSidebar","previous":{"title":"Compression","permalink":"/docs/next/guides/compression"},"next":{"title":"Repositories","permalink":"/docs/next/guides/repositories"}}');var n=o(4848),t=o(8453);const r={sidebar_position:1,title:"Cookies",description:"How to use cookies in ExpressoTS."},a="Cookies",c={},d=[{value:"Benefits",id:"benefits",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage example",id:"usage-example",level:2},{value:"Using cookies decorator",id:"using-cookies-decorator",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"cookies",children:"Cookies"})}),"\n",(0,n.jsx)(s.p,{children:"Cookies are small pieces of data that a website sends to a user's web browser while the user is browsing that website. Every time the user loads the website, the browser sends the cookie back to the server to notify the website of the user's previous activity."}),"\n",(0,n.jsx)(s.h2,{id:"benefits",children:"Benefits"}),"\n",(0,n.jsx)(s.p,{children:"Cookies serve several primary purposes:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Session Management:\nCookies are often used to handle user sessions. For example, when you log into a website, a cookie is set to remember your login state. So, as you navigate the site, you remain logged in."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Personalization:\nCookies can store user preferences to personalize the user's experience on the site. For example, cookies might store information about the user's preferred language, theme, or other settings."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Tracking:\nSome cookies track user behavior on the site over time. These are often used by third-party analytics tools to understand user behavior and optimize the site accordingly. Advertisers also use tracking cookies to display targeted ads based on user activity."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Security:\nCookies can be used to support secure website functions. For example, a cookie can be used to remember that a user has authenticated to a site so that the server knows the user has already provided valid login credentials."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"It's also important to note that there are different types of cookies - session cookies, which expire when the browser session ends, and persistent cookies, which remain on the user's device for a set period of time or until they are explicitly deleted."}),"\n",(0,n.jsx)(s.admonition,{title:"USING COOKIES FOR TRACKING",type:"caution",children:(0,n.jsx)(s.p,{children:"Keep in mind that the use of cookies, especially for tracking and personalization, has raised privacy concerns, leading to regulations such as GDPR in Europe and CCPA in California that require sites to disclose their cookie usage and obtain user consent."})}),"\n",(0,n.jsx)(s.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,n.jsx)(s.p,{children:"Deciding when to use cookie-parser largely depends on your application's needs. If your web application requires state management and you've chosen to do that via cookies, cookie-parser can make your life easier and your application more secure with signed cookies."}),"\n",(0,n.jsx)(s.p,{children:"However, if your website has heavy traffic, the overhead might become a concern. If your architecture is based around stateless services (common in microservices architectures), you might want to avoid cookies and opt for other methods of maintaining state, like JWTs (JSON Web Tokens)."}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"In case you're dealing with a high traffic website, consider alternatives like sessions stored in a database, JWTs, or tokens stored in HTTP headers. Also, using a load balancer to distribute traffic and session store modules to maintain session data across multiple servers can help to manage high traffic and stateful data."})}),"\n",(0,n.jsx)(s.p,{children:"The best approach often involves combining multiple techniques, tailored to your application's specific needs. Testing and monitoring your application under realistic conditions can help guide your decision-making process."}),"\n",(0,n.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,n.jsx)(s.p,{children:"Install the npm cookie-parser middleware and type definition."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm i cookie-parser\nnpm i -D @types/cookie-parser\n"})}),"\n",(0,n.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(s.p,{children:"Add the cookie-parser middleware to your application using the out-of-the-box ExpressoTS middleware system."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"@provide(App)\nexport class App extends AppExpress {\n    protected configureServices(): void {\n        this.Middleware.addCookieParser();\n    }\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,n.jsx)(s.p,{children:"Once the middleware is added to the application, it will parse cookies from the request and make them available in the request object. The middleware can be configured with various options to control the behavior of cookie parsing."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'@Get("get-cookie", cookieParser())\ngetCookie(){};\n'})}),"\n",(0,n.jsx)(s.p,{children:"Let's create a route that set's a cookie with a random UUID as value, that expires in 1 hour and is only accessible via HTTP:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'@Get("set-cookie")\nsetCookie(@response() res: Response) {\n    res.cookie("authToken", randomUUID(), {\n        maxAge: 60 * 60 * 1000, // 1 hour\n        httpOnly: true,\n    });\n    return res.send("Cookie set!");\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"using-cookies-decorator",children:"Using cookies decorator"}),"\n",(0,n.jsxs)(s.p,{children:["Using the ",(0,n.jsx)(s.code,{children:"@cookies()"})," decorator, you can get all cookies from the request and use them in your route:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:'title="Create a route that gets the cookie and returns the value"',children:'@Get("get-cookie")\ngetCookie(@cookies() cookieInfo: string, @response() res: Response) {\n    return res.send(`Your token: ${cookieInfo["authToken"]}`);\n}\n'})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"@cookies()"})," decorator it is a helper to get all cookies from the request. You can also use ",(0,n.jsx)(s.code,{children:"@cookies('cookieName')"})," to get a specific cookie."]})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,n.jsxs)(s.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"/docs/next/support-us",children:"support guide"})}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>a});var i=o(6540);const n={},t=i.createContext(n);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);