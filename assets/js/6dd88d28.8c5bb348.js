"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8871],{4169:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"features/render","title":"Render engine","description":"How to render views in ExpressoTS.","source":"@site/docs/features/render.mdx","sourceDirName":"features","slug":"/features/render","permalink":"/docs/next/features/render","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Render engine","description":"How to render views in ExpressoTS."},"sidebar":"tutorialSidebar","previous":{"title":"Testing","permalink":"/docs/next/features/test"},"next":{"title":"ExpressoTS config","permalink":"/docs/next/features/expressots-config"}}');var i=r(4848),s=r(8453),a=r(1470),o=r(9365);const l={sidebar_position:5,title:"Render engine",description:"How to render views in ExpressoTS."},d="Render engine",c={},u=[{value:"Supported engines",id:"supported-engines",level:2},{value:"Engine options",id:"engine-options",level:2},{value:"Configuration options",id:"configuration-options",level:4},{value:"Default configuration values",id:"default-configuration-values",level:4},{value:"Default folder structure",id:"default-folder-structure",level:4},{value:".hbs file example",id:"hbs-file-example",level:4},{value:"Configuration options",id:"configuration-options-1",level:4},{value:"Default configuration values",id:"default-configuration-values-1",level:4},{value:"Configuration options",id:"configuration-options-2",level:4},{value:"Default configuration values",id:"default-configuration-values-2",level:4},{value:"Setup a render engine",id:"setup-a-render-engine",level:2},{value:"Render views",id:"render-views",level:2},{value:"Render decorator",id:"render-decorator",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"render-engine",children:"Render engine"})}),"\n",(0,i.jsx)(n.p,{children:"ExpressoTS enhances the web server capabilities of Express.js by providing a streamlined experience for rendering views. ExpressoTS supports\n3 render engines out-of-the-box."}),"\n",(0,i.jsx)(n.p,{children:"This makes it easy for developers to start rendering views without needing additional configuration, as default settings are provided for each supported engine."}),"\n",(0,i.jsx)(n.h2,{id:"supported-engines",children:"Supported engines"}),"\n",(0,i.jsx)(n.p,{children:"ExpressoTS supports the following render engines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"EJS"}),"\n",(0,i.jsx)(n.li,{children:"PUG"}),"\n",(0,i.jsx)(n.li,{children:"HBS (Handlebars)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"engine-options",children:"Engine options"}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsxs)(o.A,{value:"handlebars",label:"Handlebars",children:[(0,i.jsx)(n.h4,{id:"configuration-options",children:"Configuration options"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export type HandlebarsOptions = {\n    viewEngine?: string; // The view engine to be used\n    viewsDir?: string; // The path to the views folder\n    partialsDir?: string; // The path to the partials folder\n};\n"})}),(0,i.jsx)(n.h4,{id:"default-configuration-values",children:"Default configuration values"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'{\n    viewEngine: "hbs",\n    viewsDir: <root>/views,\n    partialsDir: <root>/views/partials,\n}\n'})}),(0,i.jsx)(n.h4,{id:"default-folder-structure",children:"Default folder structure"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tree",children:"src\nviews\n|--partials\n|   |--partial.hbs\n|--index.hbs\n"})}),(0,i.jsx)(n.h4,{id:"hbs-file-example",children:".hbs file example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html lang="en">\n    <head>\n        <meta charset="UTF-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <title>HBS Example</title>\n    </head>\n    <body>\n        <h1>Hello from HBS</h1>\n        <p>Render partial: {{> partial}}</p>\n    </body>\n</html>\n'})})]}),(0,i.jsxs)(o.A,{value:"pug",label:"Pug",children:[(0,i.jsx)(n.h4,{id:"configuration-options-1",children:"Configuration options"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export type PugOptions = {\n    viewEngine?: string;\n    viewsDir?: string;\n};\n"})}),(0,i.jsx)(n.h4,{id:"default-configuration-values-1",children:"Default configuration values"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'{\n    viewEngine: "pug",\n    viewsDir: <root>/views,\n}\n'})})]}),(0,i.jsxs)(o.A,{value:"ejs",label:"EJS",children:[(0,i.jsx)(n.h4,{id:"configuration-options-2",children:"Configuration options"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export type EjsOptions = {\n    viewsDir?: string;\n    viewEngine?: string;\n    serverOptions?: EjsOptionsServer;\n};\n"})}),(0,i.jsx)(n.h4,{id:"default-configuration-values-2",children:"Default configuration values"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'{\n    viewEngine: "ejs",\n    viewsDir: <root>/views,\n    serverOptions: {\n        cache: true,\n        compileDebug: false,\n        debug: false,\n        delimiter: "%",\n        strict: false,\n    },\n}\n'})})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["All engines follow the same structure, with the exception of the ",(0,i.jsx)(n.code,{children:"partials"})," folder, which is specific to Handlebars."]})}),"\n",(0,i.jsx)(n.h2,{id:"setup-a-render-engine",children:"Setup a render engine"}),"\n",(0,i.jsx)(n.p,{children:"Here's how you can set up a render engine like HBS (handlebars) in your application:"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"app.provider"})," configuration provider, you can set the render engine:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export class App extends AppExpress {\n    protected configureServices(): void {\n        // Set the render engine to HBS\n        this.setEngine(RenderEngine.Engine.HBS,);\n\n        this.middleware.setErrorHandler();\n    }\n\n    protected async postServerInitialization(): Promise<void> {}\n\n    protected serverShutdown(): void {}\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to pass custom options to the render engine, you can do so by passing an object with the desired options to the ",(0,i.jsx)(n.code,{children:"setEngine"})," method. For example, to set the views directory to a custom path, you can do the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="Custom render engine configuration"',children:"this.setEngine(RenderEngine.Engine.HBS, { viewsDir: <<custom-option>> });\n"})}),"\n",(0,i.jsx)(n.h2,{id:"render-views",children:"Render views"}),"\n",(0,i.jsxs)(n.p,{children:["To render a view in ExpressoTS, you can use the ",(0,i.jsx)(n.code,{children:"render"})," method provided by the ",(0,i.jsx)(n.code,{children:"Response"})," object. Here's an example of how you can render a view in ExpressoTS:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'@Get("/")\nroot(@response() res: Response) {\n    res.render("index", { date: new Date(), name: "Random information" });\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, the ",(0,i.jsx)(n.code,{children:"render"})," method is called on the ",(0,i.jsx)(n.code,{children:"Response"})," object, passing the name of the view to be rendered and an object with data to be passed to the view. The view engine will render the view with the provided data and return the rendered HTML to the client."]}),"\n",(0,i.jsx)(n.h2,{id:"render-decorator",children:"Render decorator"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@Render"})," decorator can be used on controller methods to render views using the specified view engine. It's a syntactic sugar that simplifies the process of rendering views in ExpressoTS."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example of how you can use the ",(0,i.jsx)(n.code,{children:"@Render"})," decorator to render a view in ExpressoTS:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="Rendering passing the view and default data in the decorator"',children:'@Get("/")\n@Render("index", { date: new Date(), name: "Random information" })\nroot() {}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="Rendering passing only the view in the decorator"',children:'@Get("/")\n@Render("index")\nroot() {\n    return { date: new Date(), name: "Random information" };\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,i.jsxs)(n.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/docs/next/support-us",children:"support guide"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const i={tabItem:"tabItem_Ymn6"};var s=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),i=r(4164),s=r(3104),a=r(6347),o=r(205),l=r(7485),d=r(1682),c=r(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,s=p(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[d,u]=g({queryString:r,groupId:i}),[f,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,c.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),x=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(4848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),i=o[r].value;i!==t&&(d(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=f(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(j,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,m.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);