(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,u=l["".concat(p,".").concat(d)]||l[d]||m[d]||a;return n?i.a.createElement(u,o(o({ref:t},b),{},{components:n})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var b=2;b<a;b++)p[b]=n[b];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(1048)),p={id:"knex.joinoptions",title:"Interface: JoinOptions",sidebar_label:"JoinOptions",hide_title:!0},o={unversionedId:"api/interfaces/knex.joinoptions",id:"version-4.4/api/interfaces/knex.joinoptions",isDocsHomePage:!1,title:"Interface: JoinOptions",description:"Interface: JoinOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.joinoptions.md",slug:"/api/interfaces/knex.joinoptions",permalink:"/docs/api/interfaces/knex.joinoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.joinoptions.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1613212766,sidebar_label:"JoinOptions",sidebar:"version-4.4/API",previous:{title:"Interface: IsSame",permalink:"/docs/api/interfaces/knex.issame"},next:{title:"Interface: Knex<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-2"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"alias",id:"alias",children:[]},{value:"cond",id:"cond",children:[]},{value:"inverseAlias",id:"inversealias",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"ownerAlias",id:"owneralias",children:[]},{value:"path",id:"path",children:[]},{value:"primaryKeys",id:"primarykeys",children:[]},{value:"prop",id:"prop",children:[]},{value:"table",id:"table",children:[]},{value:"type",id:"type",children:[]}]}],b={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-joinoptions"},"Interface: JoinOptions"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".JoinOptions"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"JoinOptions"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"alias"},"alias"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"alias"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L19"},"packages/knex/src/typings.ts:19")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"cond"},"cond"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"cond"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(a.b)("em",{parentName:"a"},"Dictionary")),"<",Object(a.b)("em",{parentName:"p"},"any"),">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L27"},"packages/knex/src/typings.ts:27")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inversealias"},"inverseAlias"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"inverseAlias"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L21"},"packages/knex/src/typings.ts:21")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L23"},"packages/knex/src/typings.ts:23")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"joincolumns"},"joinColumns"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L22"},"packages/knex/src/typings.ts:22")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"owneralias"},"ownerAlias"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"ownerAlias"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L20"},"packages/knex/src/typings.ts:20")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"path"},"path"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"path"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L25"},"packages/knex/src/typings.ts:25")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"primarykeys"},"primaryKeys"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"primaryKeys"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L24"},"packages/knex/src/typings.ts:24")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"prop"},"prop"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"prop"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(a.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(a.b)("em",{parentName:"p"},"any"),">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L26"},"packages/knex/src/typings.ts:26")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"table"},"table"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"table"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L17"},"packages/knex/src/typings.ts:17")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"type"),": ",Object(a.b)("em",{parentName:"p"},"leftJoin")," ","|"," ",Object(a.b)("em",{parentName:"p"},"innerJoin")," ","|"," ",Object(a.b)("em",{parentName:"p"},"pivotJoin")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L18"},"packages/knex/src/typings.ts:18")))}s.isMDXComponent=!0}}]);