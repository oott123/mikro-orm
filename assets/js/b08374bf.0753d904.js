(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{1048:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),o=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=o(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=o(t),u=r,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||i;return t?a.a.createElement(m,b(b({ref:n},l),{},{components:t})):a.a.createElement(m,b({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var b={};for(var p in n)hasOwnProperty.call(n,p)&&(b[p]=n[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<i;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},735:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return o}));var r=t(3),a=t(8),i=(t(0),t(1048)),c={id:"knex.knex.seederconfig",title:"Interface: SeederConfig<V>",sidebar_label:"SeederConfig",hide_title:!0},b={unversionedId:"api/interfaces/knex.knex.seederconfig",id:"version-4.4/api/interfaces/knex.knex.seederconfig",isDocsHomePage:!1,title:"Interface: SeederConfig<V>",description:"Interface: SeederConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.seederconfig.md",slug:"/api/interfaces/knex.knex.seederconfig",permalink:"/docs/api/interfaces/knex.knex.seederconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.seederconfig.md",version:"4.4",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1613053435,sidebar_label:"SeederConfig",sidebar:"version-4.4/API",previous:{title:"Interface: SchemaBuilder",permalink:"/docs/api/interfaces/knex.knex.schemabuilder"},next:{title:"Interface: Select<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.select"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"directory",id:"directory",children:[]},{value:"extension",id:"extension",children:[]},{value:"loadExtensions",id:"loadextensions",children:[]},{value:"recursive",id:"recursive",children:[]},{value:"sortDirsSeparately",id:"sortdirsseparately",children:[]},{value:"specific",id:"specific",children:[]},{value:"stub",id:"stub",children:[]},{value:"timestampFilenamePrefix",id:"timestampfilenameprefix",children:[]},{value:"variables",id:"variables",children:[]}]}],l={toc:p};function o(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-seederconfigv"},"Interface: SeederConfig<V",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".SeederConfig"),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"V")),Object(i.b)("td",{parentName:"tr",align:null},"{}"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"any"))))),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SeederConfig"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"directory"},"directory"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"directory"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2142"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"extension"},"extension"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"extension"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2141"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"loadextensions"},"loadExtensions"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"loadExtensions"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2143"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"recursive"},"recursive"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"recursive"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2146"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sortdirsseparately"},"sortDirsSeparately"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"sortDirsSeparately"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2147"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"specific"},"specific"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"specific"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2144"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stub"},"stub"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stub"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2148"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"timestampfilenameprefix"},"timestampFilenamePrefix"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"timestampFilenamePrefix"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2145"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"variables"},"variables"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"variables"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," V"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2149"))}o.isMDXComponent=!0}}]);