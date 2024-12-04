"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2408],{7514:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"cli/overview","title":"Overview","description":"ExpressoTS CLI overview.","source":"@site/versioned_docs/version-3.0.0/cli/overview.mdx","sourceDirName":"cli","slug":"/cli/overview","permalink":"/docs/cli/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0.0","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"title":"Overview","description":"ExpressoTS CLI overview."},"sidebar":"tutorialSidebar","previous":{"title":"CLI","permalink":"/docs/category/cli"},"next":{"title":"Generate","permalink":"/docs/cli/generate"}}');var t=s(4848),i=s(8453),a=s(1470),l=s(9365);const o={sidebar_position:0,title:"Overview",description:"ExpressoTS CLI overview."},d="Overview",c={},h=[{value:"Installation",id:"installation",level:2},{value:"Commands available",id:"commands-available",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"Help command",id:"help-command",level:2},{value:"Info command",id:"info-command",level:2},{value:"Resources list",id:"resources-list",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Interactively",id:"interactively",level:4},{value:"Silently",id:"silently",level:4},{value:"Add a provider",id:"add-a-provider",level:2},{value:"Create a provider",id:"create-a-provider",level:2},{value:"Scaffold resources",id:"scaffold-resources",level:2},{value:"Passing the path",id:"passing-the-path",level:4},{value:"Shorthand operation",id:"shorthand-operation",level:4},{value:"Passing the path",id:"passing-the-path-1",level:4},{value:"Shorthand operation",id:"shorthand-operation-1",level:4},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"overview",children:"Overview"})}),"\n",(0,t.jsx)(r.p,{children:"The CLI (command-line interface) tool helps you to create ExpressoTS projects and scaffold ExpressoTS resources."}),"\n",(0,t.jsxs)(r.p,{children:["We use the ",(0,t.jsx)(r.code,{children:"npm"})," in this tutorial for simplicity. However, you can use your preferred package manager (",(0,t.jsx)(r.code,{children:"yarn"})," or ",(0,t.jsx)(r.code,{children:"pnpm"}),") by replacing ",(0,t.jsx)(r.code,{children:"npm"})," with the appropriate command."]}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.p,{children:"First install the CLI globally using the command below:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install -g @expressots/cli\n"})}),"\n",(0,t.jsx)(r.h2,{id:"commands-available",children:"Commands available"}),"\n",(0,t.jsx)(r.p,{children:"The CLI provides the following commands:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"new project"}),(0,t.jsx)(r.td,{children:"new"}),(0,t.jsx)(r.td,{children:"Generate a new project"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"info"}),(0,t.jsx)(r.td,{children:"i"}),(0,t.jsx)(r.td,{children:"Provides project information"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resources"}),(0,t.jsx)(r.td,{children:"r"}),(0,t.jsx)(r.td,{children:"Displays CLI commands and resources"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"scripts"}),(0,t.jsx)(r.td,{children:"scripts"}),(0,t.jsx)(r.td,{children:"Run scripts list or a specific script"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"help"}),(0,t.jsx)(r.td,{children:"help"}),(0,t.jsx)(r.td,{children:"Show command help"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"service"}),(0,t.jsx)(r.td,{children:"g s"}),(0,t.jsx)(r.td,{children:"Generate a service [controller, usecase, dto, module]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"controller"}),(0,t.jsx)(r.td,{children:"g c"}),(0,t.jsx)(r.td,{children:"Generate a controller"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"usecase"}),(0,t.jsx)(r.td,{children:"g u"}),(0,t.jsx)(r.td,{children:"Generate a usecase"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dto"}),(0,t.jsx)(r.td,{children:"g d"}),(0,t.jsx)(r.td,{children:"Generate a DTO"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"entity"}),(0,t.jsx)(r.td,{children:"g e"}),(0,t.jsx)(r.td,{children:"Generate an entity"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"provider"}),(0,t.jsx)(r.td,{children:"g p"}),(0,t.jsx)(r.td,{children:"Generate internal provider"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"provider"}),(0,t.jsx)(r.td,{children:"add"}),(0,t.jsx)(r.td,{children:"Add external provider to the project"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"provider"}),(0,t.jsx)(r.td,{children:"remove"}),(0,t.jsx)(r.td,{children:"remove external provider"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"provider"}),(0,t.jsx)(r.td,{children:"create"}),(0,t.jsx)(r.td,{children:"Create external provider"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"module"}),(0,t.jsx)(r.td,{children:"g mo"}),(0,t.jsx)(r.td,{children:"Generate a module"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"middleware"}),(0,t.jsx)(r.td,{children:"g mi"}),(0,t.jsx)(r.td,{children:"Generate a middleware"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"usage-examples",children:"Usage examples"}),"\n",(0,t.jsx)(r.p,{children:"You can use the CLI either with:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"expressots"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"ex"})," as an alias."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Command example:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots <command> [options]\n\n// Or\n\nex <command> [options]\n"})}),"\n",(0,t.jsx)(r.h2,{id:"help-command",children:"Help command"}),"\n",(0,t.jsx)(r.p,{children:"Verify the available commands and options:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots help\n"})}),"\n",(0,t.jsx)(r.h2,{id:"info-command",children:"Info command"}),"\n",(0,t.jsx)(r.p,{children:"Providers information about your Operational System, Project and CLI version:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots info\n"})}),"\n",(0,t.jsx)(r.h2,{id:"resources-list",children:"Resources list"}),"\n",(0,t.jsx)(r.p,{children:"List all available resources to scaffold:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots resources (Alias: r)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,t.jsx)(r.p,{children:"There are two options to create a new project, interactively or silently (passing the options as arguments).\nHere is the complete command syntax:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Create project command options"',children:"expressots new <project-name> -p <package-manager> -t <template> -d <directory>\n"})}),"\n",(0,t.jsx)(r.h4,{id:"interactively",children:"Interactively"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots new <project-name>\n"})}),"\n",(0,t.jsx)(r.h4,{id:"silently",children:"Silently"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots new <project-name> -p <package-manager> -t <template> -d <directory>\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"package-manager"}),": ",(0,t.jsx)(r.code,{children:"npm"}),", ",(0,t.jsx)(r.code,{children:"yarn"})," or ",(0,t.jsx)(r.code,{children:"pnpm"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"template"}),": ",(0,t.jsx)(r.code,{children:"opinionated"})," or ",(0,t.jsx)(r.code,{children:"non-opinionated"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"directory"}),": ",(0,t.jsx)(r.code,{children:"./my-project"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The flag ",(0,t.jsx)(r.code,{children:"-d"})," is optional and is used to specify the directory where the project will be created. If not specified, the project will be created in the current directory."]}),"\n",(0,t.jsx)(r.h2,{id:"add-a-provider",children:"Add a provider"}),"\n",(0,t.jsx)(r.p,{children:"Add an external provider to the project:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots add <provider-name>\n"})}),"\n",(0,t.jsx)(r.p,{children:"Although you can add npm registry packages, the primary use case for this command is to add providers that were built specifically for ExpressoTS."}),"\n",(0,t.jsx)(r.admonition,{title:"Watch for updates of our Providers App Store.",type:"info"}),"\n",(0,t.jsx)(r.h2,{id:"create-a-provider",children:"Create a provider"}),"\n",(0,t.jsxs)(r.p,{children:["Create a new ExpressoTS provider. For more information about providers, check the ",(0,t.jsx)(r.a,{href:"/docs/core/providers#create-external-provider",children:"Providers"})," section."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots create <provider-name>\n"})}),"\n",(0,t.jsx)(r.h2,{id:"scaffold-resources",children:"Scaffold resources"}),"\n",(0,t.jsxs)(r.p,{children:["The CLI provides commands to scaffold resources like ",(0,t.jsx)(r.code,{children:"controller"}),", ",(0,t.jsx)(r.code,{children:"usecase"}),", ",(0,t.jsx)(r.code,{children:"dto"}),", ",(0,t.jsx)(r.code,{children:"entity"}),", ",(0,t.jsx)(r.code,{children:"module"})," and ",(0,t.jsx)(r.code,{children:"middleware"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"expressots generate <resource> <name> [options]\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Resources are created in the ",(0,t.jsx)(r.code,{children:"src"})," directory by default. They also can be scaffolded in 2 different ways: ",(0,t.jsx)(r.code,{children:"passing the path"})," or using the ",(0,t.jsx)(r.code,{children:"shorthand operation"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["The resource scaffolding operations produce different results based on the project template used. The ",(0,t.jsx)(r.code,{children:"opinionated"})," template provides a more structured project, while the ",(0,t.jsx)(r.code,{children:"non-opinionated"})," template provides a more flexible project structure."]})}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsxs)(l.A,{value:"non-opinionated",label:"Non Opinionated",children:[(0,t.jsx)(r.h4,{id:"passing-the-path",children:"Passing the path"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Create a controller named user inside the services directory"',children:"expressots g c services/user\n"})}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Output"',children:"src\n\u2514\u2500\u2500 services\n    \u2514\u2500\u2500 user.controller.ts\n"})}),(0,t.jsx)(r.h4,{id:"shorthand-operation",children:"Shorthand operation"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Create a controller named services-user inside the services/user directory"',children:"expressots g c services-user\n"})}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Output"',children:"src\n\u2514\u2500\u2500 services\n    \u2514\u2500\u2500 user\n        \u2514\u2500\u2500 services-user.controller.ts\n"})})]}),(0,t.jsxs)(l.A,{value:"opinionated",label:"Opinionated",children:[(0,t.jsxs)(r.p,{children:["In the ",(0,t.jsx)(r.code,{children:"opinionated"})," template, the scaffolded resources are created following a predefined structure."]}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/core/providers",children:"@providers"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/core/entities",children:"@entities"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/core/usecase",children:"@useCases"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/guides/repositories",children:"@repositories"})}),"\n"]}),(0,t.jsx)(r.h4,{id:"passing-the-path-1",children:"Passing the path"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Create a controller named user inside the useCases/services directory"',children:"expressots g c services/user\n"})}),(0,t.jsxs)(r.p,{children:["The command above will create a controller named ",(0,t.jsx)(r.code,{children:"user"})," inside the ",(0,t.jsx)(r.code,{children:"useCases/services"})," directory."]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Output"',children:"src\n\u2514\u2500\u2500 useCases\n    \u2514\u2500\u2500 services\n        \u2514\u2500\u2500 user.controller.ts\n"})}),(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.mdxAdmonitionTitle,{children:["dto, usecase, controller, modules will be created in the ",(0,t.jsx)(r.code,{children:"useCases"})," directory."]})}),(0,t.jsx)(r.h4,{id:"shorthand-operation-1",children:"Shorthand operation"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Create a controller named services-user inside the useCases/services/user directory"',children:"expressots g c services-user\n"})}),(0,t.jsxs)(r.p,{children:["The command above will create a controller named ",(0,t.jsx)(r.code,{children:"services-user"})," inside the ",(0,t.jsx)(r.code,{children:"useCases/services/user"})," directory."]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Output"',children:"src\n\u2514\u2500\u2500 useCases\n    \u2514\u2500\u2500 services\n        \u2514\u2500\u2500 user\n            \u2514\u2500\u2500 services-user.controller.ts\n"})}),(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsx)(r.p,{children:"Using the shorthand operation in the opinionated template offers significant benefits. It creates a well-structured project that's easier to navigate and understand. When you scaffold with the shorthand, the CLI automatically places resources in the correct directories, adds controllers to their modules, and integrates the module into the container."})})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,t.jsxs)(r.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/docs/support-us",children:"support guide"})}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,r,s)=>{s.d(r,{A:()=>a});s(6540);var n=s(4164);const t={tabItem:"tabItem_Ymn6"};var i=s(4848);function a(e){let{children:r,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,a),hidden:s,children:r})}},1470:(e,r,s)=>{s.d(r,{A:()=>w});var n=s(6540),t=s(4164),i=s(3104),a=s(6347),l=s(205),o=s(7485),d=s(1682),c=s(679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:s}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:s,attributes:n,default:t}}=e;return{value:r,label:s,attributes:n,default:t}}))}(s);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:s}=e;const t=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})}),[i,t])]}function j(e){const{defaultValue:r,queryString:s=!1,groupId:t}=e,i=u(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[d,h]=x({queryString:s,groupId:t}),[j,m]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,i]=(0,c.Dv)(s);return[t,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),v=(()=>{const e=d??j;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=s(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function f(e){let{className:r,block:s,selectedValue:n,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const r=e.currentTarget,s=o.indexOf(r),t=l[s].value;t!==n&&(d(r),a(t))},h=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;r=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;r=o[s]??o[o.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},r),children:l.map((e=>{let{value:r,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:h,onClick:c,...i,className:(0,t.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":n===r}),children:s??r},r)}))})}function b(e){let{lazy:r,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function y(e){const r=j(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...r,...e}),(0,g.jsx)(b,{...r,...e})]})}function w(e){const r=(0,m.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(r))}},8453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>l});var n=s(6540);const t={},i=n.createContext(t);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);