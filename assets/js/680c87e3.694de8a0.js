(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{1048:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),O=r,d=m["".concat(c,".").concat(O)]||m[O]||s[O]||b;return a?n.a.createElement(d,o(o({ref:t},p),{},{components:a})):n.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},458:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(8),b=(a(0),a(1048)),c={id:"core.mikroorm",title:"Class: MikroORM<D>",sidebar_label:"MikroORM",hide_title:!0},o={unversionedId:"api/classes/core.mikroorm",id:"version-4.4/api/classes/core.mikroorm",isDocsHomePage:!1,title:"Class: MikroORM<D>",description:"Class: MikroORM",source:"@site/versioned_docs/version-4.4/api/classes/core.mikroorm.md",slug:"/api/classes/core.mikroorm",permalink:"/docs/api/classes/core.mikroorm",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.mikroorm.md",version:"4.4",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1613053435,sidebar_label:"MikroORM",sidebar:"version-4.4/API",previous:{title:"Class: MetadataValidator",permalink:"/docs/api/classes/core.metadatavalidator"},next:{title:"Class: MongoNamingStrategy",permalink:"/docs/api/classes/core.mongonamingstrategy"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"em",id:"em",children:[]},{value:"logger",id:"logger",children:[]},{value:"metadata",id:"metadata",children:[]}]},{value:"Methods",id:"methods",children:[{value:"close",id:"close",children:[]},{value:"connect",id:"connect",children:[]},{value:"getEntityGenerator",id:"getentitygenerator",children:[]},{value:"getMetadata",id:"getmetadata",children:[]},{value:"getMigrator",id:"getmigrator",children:[]},{value:"getSchemaGenerator",id:"getschemagenerator",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"init",id:"init",children:[]}]}],p={toc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-mikroormd"},"Class: MikroORM<D",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".MikroORM"),Object(b.b)("p",null,"Helper class for bootstrapping the MikroORM."),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"D")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver"))),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"MikroORM"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new MikroORM"),"<D",">","(",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.mikroorm"},Object(b.b)("em",{parentName:"a"},"MikroORM")),"<D",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"D")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),", D",">"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),"\\",">")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.mikroorm"},Object(b.b)("em",{parentName:"a"},"MikroORM")),"<D",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L47"},"packages/core/src/MikroORM.ts:47")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L16"},"packages/core/src/MikroORM.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": D"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L18"},"packages/core/src/MikroORM.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"em"},"em"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"em"),": D[",Object(b.b)("em",{parentName:"p"},"typeof")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitymanagertype"},Object(b.b)("em",{parentName:"a"},"EntityManagerType")),"] & ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L15"},"packages/core/src/MikroORM.ts:15")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"logger"},"logger"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"logger"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.logger"},Object(b.b)("em",{parentName:"a"},"Logger"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L19"},"packages/core/src/MikroORM.ts:19")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"metadata"},"metadata"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"metadata"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L17"},"packages/core/src/MikroORM.ts:17")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"close"},"close"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"close"),"(",Object(b.b)("inlineCode",{parentName:"p"},"force?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Closes the database connection."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"force")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"false")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L94"},"packages/core/src/MikroORM.ts:94")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"connect"},"connect"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"connect"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<D",">"),Object(b.b)("p",null,"Connects to the database."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<D",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L69"},"packages/core/src/MikroORM.ts:69")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getentitygenerator"},"getEntityGenerator"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getEntityGenerator"),"<T",">","(): T"),Object(b.b)("p",null,"Gets the EntityGenerator."),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},"IEntityGenerator"),Object(b.b)("td",{parentName:"tr",align:null},"IEntityGenerator")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L115"},"packages/core/src/MikroORM.ts:115")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmetadata"},"getMetadata"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMetadata"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage"))),Object(b.b)("p",null,"Gets the MetadataStorage."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L101"},"packages/core/src/MikroORM.ts:101")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmigrator"},"getMigrator"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMigrator"),"<T",">","(): T"),Object(b.b)("p",null,"Gets the Migrator."),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},"IMigrator"),Object(b.b)("td",{parentName:"tr",align:null},"IMigrator")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L124"},"packages/core/src/MikroORM.ts:124")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getschemagenerator"},"getSchemaGenerator"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getSchemaGenerator"),"<T",">","(): T"),Object(b.b)("p",null,"Gets the SchemaGenerator."),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},"ISchemaGenerator"),Object(b.b)("td",{parentName:"tr",align:null},"ISchemaGenerator")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L108"},"packages/core/src/MikroORM.ts:108")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isconnected"},"isConnected"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isConnected"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"boolean"),">"),Object(b.b)("p",null,"Checks whether the database connection is active."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"boolean"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L87"},"packages/core/src/MikroORM.ts:87")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"init"),"<D",">","(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"connect?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.mikroorm"},Object(b.b)("em",{parentName:"a"},"MikroORM")),"<D",">",">"),Object(b.b)("p",null,"Initialize the ORM, load entity metadata, create EntityManager and connect to the database.\nIf you omit the ",Object(b.b)("inlineCode",{parentName:"p"},"options")," parameter, your CLI config will be used."),Object(b.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"D")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),", D",">"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),"\\",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#options"},Object(b.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"connect")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.mikroorm"},Object(b.b)("em",{parentName:"a"},"MikroORM")),"<D",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L25"},"packages/core/src/MikroORM.ts:25")))}l.isMDXComponent=!0}}]);