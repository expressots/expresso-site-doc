"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1204],{2930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"core/entities","title":"Entities","description":"Entities are objects that represent data.","source":"@site/versioned_docs/version-2.16.2/core/entities.mdx","sourceDirName":"core","slug":"/core/entities","permalink":"/docs/2.16.2/core/entities","draft":false,"unlisted":false,"tags":[],"version":"2.16.2","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Entities","description":"Entities are objects that represent data."},"sidebar":"tutorialSidebar","previous":{"title":"Providers","permalink":"/docs/2.16.2/core/providers"},"next":{"title":"Injection","permalink":"/docs/2.16.2/core/di"}}');var i=n(4848),s=n(8453),a=n(1470),o=n(9365);const c={sidebar_position:7,title:"Entities",description:"Entities are objects that represent data."},l="Entities",u={},d=[{value:"Create an entity",id:"create-an-entity",level:2},{value:"Entity injection",id:"entity-injection",level:2},{value:"Injecting primitive parameters",id:"injecting-primitive-parameters",level:2},{value:"Primitive injection alternative",id:"primitive-injection-alternative",level:2},{value:"Entities are just data \ud83d\udca1",id:"entities-are-just-data-",level:2},{value:"Support us \u2764\ufe0f",id:"support-us-\ufe0f",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"entities",children:"Entities"})}),"\n",(0,i.jsx)(t.p,{children:"Entities are the core components of an ExpressoTS application, representing the data that the application manipulates.\nWhen an entity changes, it's likely that use cases and controllers will need to be updated as well, since they\nare responsible for handling and processing the data represented by these entities."}),"\n",(0,i.jsx)(t.h2,{id:"create-an-entity",children:"Create an entity"}),"\n",(0,i.jsx)(t.p,{children:"To create an entity, you can use the CLI with the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"expressots g e user\n"})}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(o.A,{value:"non-opinionated",label:"Non Opinionated",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'import { provide } from "@expressots/core";\n\n@provide(UserEntity)\nexport class UserEntity {}\n'})})}),(0,i.jsx)(o.A,{value:"opinionated",label:"Opinionated",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { provide } from "@expressots/core";\nimport { randomUUID } from "node:crypto";\n\n@provide(UserEntity)\nexport class UserEntity {\n    id: string;\n\n    constructor() {\n        this.id = randomUUID();\n    }\n}\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"entity-injection",children:"Entity injection"}),"\n",(0,i.jsxs)(t.p,{children:["If your entity has dependencies, you can inject them using the ",(0,i.jsx)(t.code,{children:"@inject()"})," decorator."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"@provide(UserEntity)\nclass UserEntity {\n    constructor(@inject(Logger) private logger: Logger) {}\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"injecting-primitive-parameters",children:"Injecting primitive parameters"}),"\n",(0,i.jsx)(t.p,{children:"Avoid marking constructors with primitive parameters as injectable. This is because it can be difficult for the DI container\nto infer what values to provide for these parameters. Here is an example of what you should avoid:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"@provide(UserEntity)\nclass UserEntity {\n    name: string;\n    constructor(name: string) {\n        this.name = name;\n    }\n}\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["In many dependency injection (DI) systems, including ",(0,i.jsx)(t.code,{children:"InversifyJS"}),", the DI container is responsible for constructing\nobjects and injecting dependencies. When a class constructor contains primitive parameters, it can be difficult\nfor the DI container to infer what values to provide for these parameters. This is because primitive values\n(like strings, numbers, and booleans) do not carry any inherent semantic meaning that the container can understand."]})}),"\n",(0,i.jsx)(t.p,{children:"Here are some of the reasons why constructors with primitive parameters can be problematic in DI:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Ambiguity: If a class has a constructor that requires primitive types, the DI container won't know what values to inject. For example, if a class requires a number in its constructor, the DI container doesn't know what this number represents and what value it should have."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Inflexibility: A primitive value in the constructor implies that the value is a fixed part of the class. However, DI is often used to manage interchangeable parts of an application (e.g., different implementations of an interface)."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Non-descriptive: Primitive values are often non-descriptive and can lead to confusing code. For example, a constructor that takes two string parameters might raise questions like: What do these strings represent? Are there any specific formats or constraints on these strings?"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"primitive-injection-alternative",children:"Primitive injection alternative"}),"\n",(0,i.jsx)(t.p,{children:"If you need to inject a primitive into your class, it's worth reconsidering your design. If primitive parameters are essential\nin your constructor, consider using factories to create your entities or applying the Repository pattern."}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of a factory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="user.entity.ts"',children:"@provide(UserEntity)\nclass UserEntity {\n    public id: string;\n    public name: string;\n    public email: string;\n\n    constructor() {\n        this.id = randomUUID();\n    }\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="user.factory.interface.ts"',children:"interface IUserEntityFactory {\n    create(name: string, email: string): User;\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="user.factory.ts"',children:"@provide(UserEntityFactory)\nclass UserEntityFactory implements IUserEntityFactory {\n    create(name: string, email: string): User {\n        const user = new User();\n        user.name = name;\n        user.email = email;\n        return user;\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now ",(0,i.jsx)(t.code,{children:"UserEntityFactory"})," can be easily injected into other classes."]}),"\n",(0,i.jsx)(t.p,{children:"As mentioned above, there are several other approaches, as long as you remain strong \ud83d\ude01 of not using constructors with primitives parameters in classes that you are planning to inject."}),"\n",(0,i.jsx)(t.h2,{id:"entities-are-just-data-",children:"Entities are just data \ud83d\udca1"}),"\n",(0,i.jsx)(t.p,{children:"For years we have been told that entities or classes properties should be encapsulated, its methods should abstract the internal implementation and expose only the necessary information to the outside world. This is a good practice when thinking about Object Oriented Programming Paradigm, however this is not always the best approach."}),"\n",(0,i.jsx)(t.p,{children:"If you think about it, classes, or entities, whatever you call it, are just a way to represent data. They are just a way to group data together.\nWith this in mind, classes or entities became much more simple to maintain and understand, as they don't contain any logic."}),"\n",(0,i.jsxs)(t.p,{children:["This way of thinking is called ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://martinfowler.com/bliki/AnemicDomainModel.html",children:"Anemic Domain Model"})})," and it's a very controversial topic. It's not the purpose of this documentation to discuss this topic, but it's important to mention it, as it's a very important concept when thinking about ExpressoTS entities."]}),"\n",(0,i.jsx)("span",{class:"span-table",children:(0,i.jsx)(t.p,{children:"Say good bye to God classes, and say hello to simple entities, say hello to data."})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"support-us-\ufe0f",children:"Support us \u2764\ufe0f"}),"\n",(0,i.jsxs)(t.p,{children:["ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support.\nIf you'd like to help, please read our ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/docs/2.16.2/support-us",children:"support guide"})}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const i={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),i=n(4164),s=n(3104),a=n(6347),o=n(205),c=n(7485),l=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=p(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,d]=m({queryString:n,groupId:i}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),g=(()=>{const e=l??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&c(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),i=o[n].value;i!==r&&(l(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,y.jsx)(b,{...t,...e}),(0,y.jsx)(j,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);