(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1048:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,j=m["".concat(c,".").concat(d)]||m[d]||O[d]||b;return a?n.a.createElement(j,p(p({ref:t},o),{},{components:a})):n.a.createElement(j,p({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},364:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(3),n=a(8),b=(a(0),a(1048)),c={id:"core.arraycollection",title:"Class: ArrayCollection<T, O>",sidebar_label:"ArrayCollection",hide_title:!0},p={unversionedId:"api/classes/core.arraycollection",id:"version-4.4/api/classes/core.arraycollection",isDocsHomePage:!1,title:"Class: ArrayCollection<T, O>",description:"Class: ArrayCollection",source:"@site/versioned_docs/version-4.4/api/classes/core.arraycollection.md",slug:"/api/classes/core.arraycollection",permalink:"/docs/api/classes/core.arraycollection",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.arraycollection.md",version:"4.4",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1613053435,sidebar_label:"ArrayCollection",sidebar:"version-4.4/API",previous:{title:"Class: AbstractNamingStrategy",permalink:"/docs/api/classes/core.abstractnamingstrategy"},next:{title:"Class: ArrayType<T>",permalink:"/docs/api/classes/core.arraytype"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Indexable",id:"indexable",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_count",id:"_count",children:[]},{value:"_property",id:"_property",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"items",id:"items",children:[]},{value:"owner",id:"owner",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"length",id:"length",children:[]},{value:"property",id:"property",children:[]}]},{value:"Methods",id:"methods",children:[{value:"Symbol.iterator",id:"symboliterator",children:[]},{value:"add",id:"add",children:[]},{value:"contains",id:"contains",children:[]},{value:"count",id:"count",children:[]},{value:"getIdentifiers",id:"getidentifiers",children:[]},{value:"getItems",id:"getitems",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"incrementCount",id:"incrementcount",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"loadCount",id:"loadcount",children:[]},{value:"propagate",id:"propagate",children:[]},{value:"propagateToInverseSide",id:"propagatetoinverseside",children:[]},{value:"propagateToOwningSide",id:"propagatetoowningside",children:[]},{value:"remove",id:"remove",children:[]},{value:"removeAll",id:"removeall",children:[]},{value:"set",id:"set",children:[]},{value:"shouldPropagateToCollection",id:"shouldpropagatetocollection",children:[]},{value:"toArray",id:"toarray",children:[]},{value:"toJSON",id:"tojson",children:[]}]}],o={toc:l};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-arraycollectiont-o"},"Class: ArrayCollection<T, O",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ArrayCollection"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"O"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"ArrayCollection")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.collection"},Object(b.b)("em",{parentName:"a"},"Collection"))))),Object(b.b)("h2",{id:"indexable"},"Indexable"),Object(b.b)("p",null,"\u25aa ","[k: ",Object(b.b)("em",{parentName:"p"},"number"),"]",": T"),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new ArrayCollection"),"<T, O",">","(",Object(b.b)("inlineCode",{parentName:"p"},"owner"),": O & ",Object(b.b)("em",{parentName:"p"},"Partial"),"<O",">"," & { ",Object(b.b)("inlineCode",{parentName:"p"},"__@EntityRepositoryType@41631?"),": ",Object(b.b)("em",{parentName:"p"},"unknown")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"__@PrimaryKeyType@41543?"),": ",Object(b.b)("em",{parentName:"p"},"unknown")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"__helper?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"IWrappedEntityInternal"),"<O, keyof O, keyof O",">"," ; ",Object(b.b)("inlineCode",{parentName:"p"},"__meta?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<O",">"," ; ",Object(b.b)("inlineCode",{parentName:"p"},"__platform?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"  }, ",Object(b.b)("inlineCode",{parentName:"p"},"items?"),": T[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.arraycollection"},Object(b.b)("em",{parentName:"a"},"ArrayCollection")),"<T, O",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"O"))))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"owner")),Object(b.b)("td",{parentName:"tr",align:null},"O & ",Object(b.b)("em",{parentName:"td"},"Partial"),"<O",">"," & { ",Object(b.b)("inlineCode",{parentName:"td"},"__@EntityRepositoryType@41631?"),": ",Object(b.b)("em",{parentName:"td"},"unknown")," ; ",Object(b.b)("inlineCode",{parentName:"td"},"__@PrimaryKeyType@41543?"),": ",Object(b.b)("em",{parentName:"td"},"unknown")," ; ",Object(b.b)("inlineCode",{parentName:"td"},"__helper?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"IWrappedEntityInternal"),"<O, keyof O, keyof O",">"," ; ",Object(b.b)("inlineCode",{parentName:"td"},"__meta?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<O",">"," ; ",Object(b.b)("inlineCode",{parentName:"td"},"__platform?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"  }")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"items?")),Object(b.b)("td",{parentName:"tr",align:null},"T[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.arraycollection"},Object(b.b)("em",{parentName:"a"},"ArrayCollection")),"<T, O",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L14"},"packages/core/src/entity/ArrayCollection.ts:14")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"_count"},"_","count"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"_","count"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L13"},"packages/core/src/entity/ArrayCollection.ts:13")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"_property"},"_","property"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"_","property"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L14"},"packages/core/src/entity/ArrayCollection.ts:14")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initialized"},"initialized"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("strong",{parentName:"p"},"initialized"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"= true"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L12"},"packages/core/src/entity/ArrayCollection.ts:12")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"items"},"items"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"items"),": ",Object(b.b)("em",{parentName:"p"},"Set"),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L11"},"packages/core/src/entity/ArrayCollection.ts:11")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"owner"},"owner"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"owner"),": O & ",Object(b.b)("em",{parentName:"p"},"Partial"),"<O",">"," & { ",Object(b.b)("inlineCode",{parentName:"p"},"__@EntityRepositoryType@41631?"),": ",Object(b.b)("em",{parentName:"p"},"unknown")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"__@PrimaryKeyType@41543?"),": ",Object(b.b)("em",{parentName:"p"},"unknown")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"__helper?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"IWrappedEntityInternal"),"<O, keyof O, keyof O",">"," ; ",Object(b.b)("inlineCode",{parentName:"p"},"__meta?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<O",">"," ; ",Object(b.b)("inlineCode",{parentName:"p"},"__platform?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"  }"),Object(b.b)("h2",{id:"accessors"},"Accessors"),Object(b.b)("h3",{id:"length"},"length"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"length"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L134"},"packages/core/src/entity/ArrayCollection.ts:134")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"property"},"property"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"property"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<T",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L147"},"packages/core/src/entity/ArrayCollection.ts:147")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"symboliterator"},"[Symbol.iterator]"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"[Symbol.iterator]"),"(): ",Object(b.b)("em",{parentName:"p"},"IterableIterator"),"<T",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"IterableIterator"),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L138"},"packages/core/src/entity/ArrayCollection.ts:138")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"add"},"add"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"add"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">",")[]): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"...items")),Object(b.b)("td",{parentName:"tr",align:null},"(T ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L71"},"packages/core/src/entity/ArrayCollection.ts:71")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"contains"},"contains"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"contains"),"(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"check?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",{parentName:"tr",align:null},"T ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"check?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L117"},"packages/core/src/entity/ArrayCollection.ts:117")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"count"},"count"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"count"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L122"},"packages/core/src/entity/ArrayCollection.ts:122")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getidentifiers"},"getIdentifiers"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getIdentifiers"),"<U",">","(",Object(b.b)("inlineCode",{parentName:"p"},"field?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): U[]"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"U")),Object(b.b)("td",{parentName:"tr",align:null},"IPrimaryKeyValue"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#primary"},Object(b.b)("em",{parentName:"a"},"Primary")),"<T","\\","> & ",Object(b.b)("em",{parentName:"td"},"string")," ","\\")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"field?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," U[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L53"},"packages/core/src/entity/ArrayCollection.ts:53")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getitems"},"getItems"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getItems"),"(): T[]"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L34"},"packages/core/src/entity/ArrayCollection.ts:34")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hydrate"},"hydrate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hydrate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"items"),": T[]): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"items")),Object(b.b)("td",{parentName:"tr",align:null},"T[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L92"},"packages/core/src/entity/ArrayCollection.ts:92")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"incrementcount"},"incrementCount"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"incrementCount"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"number"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"number"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L197"},"packages/core/src/entity/ArrayCollection.ts:197")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(",Object(b.b)("inlineCode",{parentName:"p"},"fully?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"fully")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"false")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L126"},"packages/core/src/entity/ArrayCollection.ts:126")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loadcount"},"loadCount"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loadCount"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"number"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"number"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L30"},"packages/core/src/entity/ArrayCollection.ts:30")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propagate"},"propagate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"propagate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("em",{parentName:"p"},"add")," ","|"," ",Object(b.b)("em",{parentName:"p"},"remove"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",{parentName:"tr",align:null},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"add")," ","|"," ",Object(b.b)("em",{parentName:"td"},"remove"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L157"},"packages/core/src/entity/ArrayCollection.ts:157")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propagatetoinverseside"},"propagateToInverseSide"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"propagateToInverseSide"),"(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("em",{parentName:"p"},"add")," ","|"," ",Object(b.b)("em",{parentName:"p"},"remove"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",{parentName:"tr",align:null},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"add")," ","|"," ",Object(b.b)("em",{parentName:"td"},"remove"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L165"},"packages/core/src/entity/ArrayCollection.ts:165")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propagatetoowningside"},"propagateToOwningSide"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"propagateToOwningSide"),"(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("em",{parentName:"p"},"add")," ","|"," ",Object(b.b)("em",{parentName:"p"},"remove"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",{parentName:"tr",align:null},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"add")," ","|"," ",Object(b.b)("em",{parentName:"td"},"remove"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L173"},"packages/core/src/entity/ArrayCollection.ts:173")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"remove"},"remove"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"remove"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">",")[]): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"...items")),Object(b.b)("td",{parentName:"tr",align:null},"(T ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L102"},"packages/core/src/entity/ArrayCollection.ts:102")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"removeall"},"removeAll"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"removeAll"),"(): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L113"},"packages/core/src/entity/ArrayCollection.ts:113")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"set"},"set"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"set"),"(",Object(b.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">",")[]): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-11"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"items")),Object(b.b)("td",{parentName:"tr",align:null},"(T ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.reference"},Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L84"},"packages/core/src/entity/ArrayCollection.ts:84")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"shouldpropagatetocollection"},"shouldPropagateToCollection"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"shouldPropagateToCollection"),"(",Object(b.b)("inlineCode",{parentName:"p"},"collection"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.arraycollection"},Object(b.b)("em",{parentName:"a"},"ArrayCollection")),"<O, T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("em",{parentName:"p"},"add")," ","|"," ",Object(b.b)("em",{parentName:"p"},"remove"),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-12"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"collection")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.arraycollection"},Object(b.b)("em",{parentName:"a"},"ArrayCollection")),"<O, T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"add")," ","|"," ",Object(b.b)("em",{parentName:"td"},"remove"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L184"},"packages/core/src/entity/ArrayCollection.ts:184")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toarray"},"toArray"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toArray"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">","[]"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">","[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L38"},"packages/core/src/entity/ArrayCollection.ts:38")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">","[]"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">","[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/ArrayCollection.ts#L49"},"packages/core/src/entity/ArrayCollection.ts:49")))}i.isMDXComponent=!0}}]);