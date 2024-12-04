"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5237],{3998:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"cli/generate","title":"Generate","description":"Scaffold ExpressoTS resources using the CLI.","source":"@site/versioned_docs/version-2.16.2/cli/generate.mdx","sourceDirName":"cli","slug":"/cli/generate","permalink":"/docs/2.16.2/cli/generate","draft":false,"unlisted":false,"tags":[],"version":"2.16.2","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Generate","description":"Scaffold ExpressoTS resources using the CLI."},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/docs/2.16.2/cli/overview"},"next":{"title":"GUIDES","permalink":"/docs/2.16.2/category/guides"}}');var n=s(4848),a=s(8453),o=s(1470),l=s(9365);const i={sidebar_position:1,title:"Generate",description:"Scaffold ExpressoTS resources using the CLI."},c="Generate",d={},u=[{value:"Command syntax",id:"command-syntax",level:2},{value:"Command structure",id:"command-structure",level:2},{value:"Using single name",id:"using-single-name",level:4},{value:"Using the shorthand operation",id:"using-the-shorthand-operation",level:4},{value:"Using the folder/subfolder/resource structure",id:"using-the-foldersubfolderresource-structure",level:4},{value:"Resource types",id:"resource-types",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"generate",children:"Generate"})}),"\n",(0,n.jsx)(r.p,{children:"In order to provide a better developer experience, the ExpressoTS CLI provides a set of commands to help you scaffold the application resources such as use cases, controllers, DTO's, providers and services."}),"\n",(0,n.jsx)(r.p,{children:"This command allows developers to stay ahead of the curve by generating the boilerplate code for the application, so they can focus on the business logic."}),"\n",(0,n.jsx)(r.h2,{id:"command-syntax",children:"Command syntax"}),"\n",(0,n.jsxs)(r.p,{children:["One big advantage of the ExpressoTS CLI is the ability to scaffold resources using two different structures: the ",(0,n.jsx)("span",{class:"span-table",children:"shorthand"})," and\nthe ",(0,n.jsx)("span",{class:"span-table",children:"folder/subfolder/resource"}),". The shorthand operation is a more concise way to scaffold resources (recommended to be used in the opinionated template), while\nthe folder/subfolder/resource structure is more flexible and can be used in both templates."]}),"\n",(0,n.jsx)(r.p,{children:"The generate command can be executed as follows:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"expressots generate <resource> <structure> [options]\n"})}),"\n",(0,n.jsx)(r.p,{children:"Or in its short form:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"expressots g <resource-alias> <structure> [options]\n"})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsxs)(l.A,{label:"Non Opinionated",value:"non-opinionated",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Full form"',children:"expressots generate service user/create\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Short form"',children:"expressots g s user/create\n"})})]}),(0,n.jsxs)(l.A,{label:"Opinionated",value:"opinionated",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Full form"',children:"expressots generate service user-create\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Short form"',children:"expressots g s user-create\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Passing http parameter as option"',children:"expressots g s user-create -m post\n"})})]})]}),"\n",(0,n.jsx)(r.h2,{id:"command-structure",children:"Command structure"}),"\n",(0,n.jsxs)(r.p,{children:["We provide two different structures to scaffold the resources, the ",(0,n.jsx)(r.strong,{children:"shorthand"})," and the ",(0,n.jsx)(r.strong,{children:"folder/subfolder/resource"}),".\nThese scaffold strategies work differently based on the project template used. The ",(0,n.jsx)(r.code,{children:"opinionated"})," template provides a more structured project, while the ",(0,n.jsx)(r.code,{children:"non-opinionated"})," template provides a more flexible project structure."]}),"\n",(0,n.jsx)(r.h4,{id:"using-single-name",children:"Using single name"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"expressots g c user\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Output"',children:"src\n\u2514\u2500\u2500 user.controller.ts\n"})}),"\n",(0,n.jsx)(r.h4,{id:"using-the-shorthand-operation",children:"Using the shorthand operation"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"expressots g c user-create\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Output"',children:"src\n\u2514\u2500\u2500 user\n    \u2514\u2500\u2500 create\n        \u2514\u2500\u2500 user-create.controller.ts\n"})}),"\n",(0,n.jsx)(r.h4,{id:"using-the-foldersubfolderresource-structure",children:"Using the folder/subfolder/resource structure"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"expressots g c user/create\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Output"',children:"src\n\u2514\u2500\u2500 user\n    \u2514\u2500\u2500 create.controller.ts\n"})}),"\n",(0,n.jsxs)(r.p,{children:["If you add ",(0,n.jsx)(r.code,{children:"/"})," at the end of the structure, the CLI will create the resource inside of the folder. Example: ",(0,n.jsx)(r.code,{children:"expressots g c user/create/"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Output"',children:"src\n\u2514\u2500\u2500 user\n    \u2514\u2500\u2500 create\n        \u2514\u2500\u2500 create.controller.ts\n"})}),"\n",(0,n.jsxs)(r.admonition,{type:"info",children:[(0,n.jsx)(r.p,{children:"Opinionated templates come with predefined folder structures for each resource type, ensuring that resources are always created in the following designated folders:"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"useCases"}),"\n",(0,n.jsx)(r.li,{children:"entities"}),"\n",(0,n.jsx)(r.li,{children:"providers"}),"\n"]})]}),"\n",(0,n.jsxs)(r.p,{children:["The root folder for all resources is the ",(0,n.jsx)(r.code,{children:"src"})," folder. This can be changed in the ",(0,n.jsx)(r.code,{children:"expressots.config.ts"})," file."]}),"\n",(0,n.jsx)(r.h2,{id:"resource-types",children:"Resource types"}),"\n",(0,n.jsx)(r.p,{children:"Resources available to be scaffolded are:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Long form"}),(0,n.jsx)(r.th,{children:"short"}),(0,n.jsx)(r.th,{children:"Command"}),(0,n.jsx)(r.th,{children:"Expected result"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"usecase"}),(0,n.jsx)(r.td,{children:"u"}),(0,n.jsx)(r.td,{children:"expressots g u user/find"}),(0,n.jsxs)(r.td,{children:["Use case to be created in the folder ",(0,n.jsx)(r.code,{children:"useCases"})," with this folder structure: user/find"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"controller"}),(0,n.jsx)(r.td,{children:"c"}),(0,n.jsx)(r.td,{children:"expressots g c user/find"}),(0,n.jsxs)(r.td,{children:["Controller to be created in the folder ",(0,n.jsx)(r.code,{children:"useCases"})," inside of user/find"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"dto"}),(0,n.jsx)(r.td,{children:"d"}),(0,n.jsx)(r.td,{children:"expressots g d user/find"}),(0,n.jsxs)(r.td,{children:["DTO to be created in the folder ",(0,n.jsx)(r.code,{children:"useCases"})," inside of user/find"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"p"}),(0,n.jsx)(r.td,{children:"expressots g p email/email"}),(0,n.jsxs)(r.td,{children:["Provider to be created in the folder ",(0,n.jsx)(r.code,{children:"providers"})," inside of user/find"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"service"}),(0,n.jsx)(r.td,{children:"s"}),(0,n.jsx)(r.td,{children:"expressots g s user/find"}),(0,n.jsx)(r.td,{children:"Service creates usecase, controller and DTO and add them in the desired folder user/find"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"entity"}),(0,n.jsx)(r.td,{children:"e"}),(0,n.jsx)(r.td,{children:"expressots g e user"}),(0,n.jsxs)(r.td,{children:["Entity to be created in the folder ",(0,n.jsx)(r.code,{children:"entities"})," with this folder structure: user"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"middleware"}),(0,n.jsx)(r.td,{children:"mi"}),(0,n.jsx)(r.td,{children:"expressots g mi auth"}),(0,n.jsxs)(r.td,{children:["Middleware to be created in the folder ",(0,n.jsx)(r.code,{children:"middlewares"})," with this folder structure: auth"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"module"}),(0,n.jsx)(r.td,{children:"mo"}),(0,n.jsx)(r.td,{children:"expressots g mo user"}),(0,n.jsxs)(r.td,{children:["Module to be created in the folder where ",(0,n.jsx)(r.code,{children:"controllers"})," and ",(0,n.jsx)(r.code,{children:"usecases"})," are located"]})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"For services, you can take advantage of creating the use case, controller and DTO at once."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"expressots g s user-create\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Output for the non opinionated template"',children:"src\n\u2514\u2500\u2500 user\n    \u2514\u2500\u2500 create\n        \u251c\u2500\u2500 user-create.controller.ts\n        \u251c\u2500\u2500 user-create.dto.ts\n        \u251c\u2500\u2500 user-create.usecase.ts\n        \u2514\u2500\u2500 user-create.usecase.ts\n"})}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"expressots.config.ts"})," file, located in the project root folder, defines where all resources will be created and specifies the naming conventions for each type of resource."]})}),"\n",(0,n.jsxs)(r.p,{children:["Read more about the ",(0,n.jsx)(r.a,{href:"/docs/2.16.2/features/expressots-config",children:"ExpressoTS Config File"}),"."]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,n.jsxs)(r.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"/docs/2.16.2/support-us",children:"support guide"})}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,r,s)=>{s.d(r,{A:()=>o});s(6540);var t=s(4164);const n={tabItem:"tabItem_Ymn6"};var a=s(4848);function o(e){let{children:r,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,o),hidden:s,children:r})}},1470:(e,r,s)=>{s.d(r,{A:()=>w});var t=s(6540),n=s(4164),a=s(3104),o=s(6347),l=s(205),i=s(7485),c=s(1682),d=s(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}}))}(s);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:s}=e;const n=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function f(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,a=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[c,u]=x({queryString:s,groupId:n}),[f,m]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,d.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),j=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=s(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function b(e){let{className:r,block:s,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,s=i.indexOf(r),n=l[s].value;n!==t&&(c(r),o(n))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;r=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;r=i[s]??i[i.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:l.map((e=>{let{value:r,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,n.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function v(e){let{lazy:r,children:s,selectedValue:a}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=f(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(v,{...r,...e})]})}function w(e){const r=(0,m.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(r))}},8453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>l});var t=s(6540);const n={},a=t.createContext(n);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);