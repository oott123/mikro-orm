(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{1048:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||c;return t?a.a.createElement(b,i(i({ref:n},p),{},{components:t})):a.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},803:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),c=(t(0),t(1048)),o={title:"Result cache"},i={unversionedId:"caching",id:"caching",isDocsHomePage:!1,title:"Result cache",description:"MikroORM has simple result caching mechanism. It works with those methods of",source:"@site/docs/caching.md",slug:"/caching",permalink:"/docs/next/caching",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/caching.md",version:"current",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1613053435,sidebar:"docs",previous:{title:"Using Query Builder",permalink:"/docs/next/query-builder"},next:{title:"Logging",permalink:"/docs/next/debugging"}},l=[],p={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"MikroORM has simple result caching mechanism. It works with those methods of\n",Object(c.b)("inlineCode",{parentName:"p"},"EntityManager"),": ",Object(c.b)("inlineCode",{parentName:"p"},"find()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"findOne()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"findAndCount()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"findOneOrFail()"),",\n",Object(c.b)("inlineCode",{parentName:"p"},"count()"),", as well as with ",Object(c.b)("inlineCode",{parentName:"p"},"QueryBuilder")," result methods (including ",Object(c.b)("inlineCode",{parentName:"p"},"execute"),")."),Object(c.b)("p",null,"By default, in memory cache is used, that is shared for the whole ",Object(c.b)("inlineCode",{parentName:"p"},"MikroORM"),"\ninstance. Default expiration is 1 second."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"const res = await em.find(Book, { author: { name: 'Jon Snow' } }, {\n  populate: ['author', 'tags'],\n  cache: 50, // set expiration to 50ms\n  // cache: ['cache-id', 50], // set custom cache id and expiration\n  // cache: true, // use default cache id and expiration\n});\n")),Object(c.b)("p",null,"Or with query builder:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"const res = await em.createQueryBuilder(Book)\n  .where({ author: { name: 'Jon Snow' } })\n  .cache()\n  .getResultList();\n")),Object(c.b)("p",null,"We can change the default expiration as well as provide custom cache adapter in\nthe ORM configuration:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"const orm = await MikroORM.init({\n  resultCache: {\n    adapter: MemoryCacheAdapter,\n    expiration: 1000, // 1s\n    options: {},\n  },\n  // ...\n});\n")),Object(c.b)("p",null,"Custom cache adapters need to implement ",Object(c.b)("inlineCode",{parentName:"p"},"CacheAdapter")," interface."))}s.isMDXComponent=!0}}]);