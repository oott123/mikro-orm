(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},690:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),i=(n(0),n(1048)),a={title:"Identity Map and Request Context"},s={unversionedId:"identity-map",id:"version-3.6/identity-map",isDocsHomePage:!1,title:"Identity Map and Request Context",description:"MikroORM uses identity map in background so you will always get the same instance of",source:"@site/versioned_docs/version-3.6/identity-map.md",slug:"/identity-map",permalink:"/docs/3.6/identity-map",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/identity-map.md",version:"3.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1613212766,sidebar:"version-3.6/docs",previous:{title:"Using EntityRepository instead of EntityManager",permalink:"/docs/3.6/repositories"},next:{title:"Entity References",permalink:"/docs/3.6/entity-references"}},l=[{value:"Forking Entity Manager",id:"forking-entity-manager",children:[]},{value:'<a name="request-context"></a> RequestContext helper for DI containers',id:"requestcontext-helper-for-di-containers",children:[]},{value:"Why is Request Context needed?",id:"why-is-request-context-needed",children:[{value:"Problem 1 - growing memory footprint",id:"problem-1---growing-memory-footprint",children:[]},{value:"Problem 2 - unstable response of API endpoints",id:"problem-2---unstable-response-of-api-endpoints",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MikroORM")," uses identity map in background so you will always get the same instance of\none entity."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne({ name: 'Jon Snow' }, ['books']);\nconst authors = await authorRepository.findAll(['books']);\n\n// identity map in action\nconsole.log(jon === authors[0]); // true\n")),Object(i.b)("p",null,"If you want to clear this identity map cache, you can do so via ",Object(i.b)("inlineCode",{parentName:"p"},"em.clear()")," method:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"orm.em.clear();\n")),Object(i.b)("p",null,"You should always keep unique identity map per each request. This basically means that you need\nto clone entity manager and use the clone in request context. There are two ways to achieve this:"),Object(i.b)("h2",{id:"forking-entity-manager"},"Forking Entity Manager"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"fork()")," method you can simply get clean entity manager with its own context and identity map:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const em = orm.em.fork();\n")),Object(i.b)("h2",{id:"requestcontext-helper-for-di-containers"},Object(i.b)("a",{name:"request-context"})," RequestContext helper for DI containers"),Object(i.b)("p",null,"If you use dependency injection container like ",Object(i.b)("inlineCode",{parentName:"p"},"inversify")," or the one in ",Object(i.b)("inlineCode",{parentName:"p"},"nestjs")," framework, it\ncan be hard to achieve this, because you usually want to access your repositories via DI container,\nbut it will always provide you with the same instance, rather than new one for each request. "),Object(i.b)("p",null,"To solve this, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"RequestContext")," helper, that will use ",Object(i.b)("inlineCode",{parentName:"p"},"node"),"'s Domain API in the\nbackground to isolate the request context. MikroORM will always use request specific (forked)\nentity manager if available, so all you need to do is to create new request context preferably\nas a middleware:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"app.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(i.b)("p",null,"You should register this middleware as the last one just before request handlers and before\nany of your custom middleware that is using the ORM. There might be issues when you register\nit before request processing middleware like ",Object(i.b)("inlineCode",{parentName:"p"},"queryParser")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely\nregister the context after them. "),Object(i.b)("h2",{id:"why-is-request-context-needed"},"Why is Request Context needed?"),Object(i.b)("p",null,"Imagine you will use single Identity Map throughout your application. It will be shared across\nall request handlers, that can possibly run in parallel. "),Object(i.b)("h3",{id:"problem-1---growing-memory-footprint"},"Problem 1 - growing memory footprint"),Object(i.b)("p",null,"As there would be only one shared Identity Map, you can't just clear it after your request ends.\nThere can be another request working with it so clearing the Identity Map from one request could\nbreak other requests running in parallel. This will result in growing memory footprint, as every\nentity that became managed at some point in time would be kept in the Identity Map. "),Object(i.b)("h3",{id:"problem-2---unstable-response-of-api-endpoints"},"Problem 2 - unstable response of API endpoints"),Object(i.b)("p",null,"Every entity has ",Object(i.b)("inlineCode",{parentName:"p"},"toJSON()")," method, that automatically converts it to serialized form. If you\nhave only one shared Identity Map, following situation may occur:"),Object(i.b)("p",null,"Let's say there are 2 endpoints"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"GET /book/:id")," that returns just the book, without populating anything"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"GET /book-with-author/:id")," that returns the book and its author populated")),Object(i.b)("p",null,"Now when someone requests same book via both of those endpoints, you could end up with both\nreturning the same output:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",Object(i.b)("inlineCode",{parentName:"li"},"Book")," without populating its property ",Object(i.b)("inlineCode",{parentName:"li"},"author")," property"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"GET /book-with-author/1")," returns ",Object(i.b)("inlineCode",{parentName:"li"},"Book"),", this time with ",Object(i.b)("inlineCode",{parentName:"li"},"author")," populated"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",Object(i.b)("inlineCode",{parentName:"li"},"Book"),", but this time also with ",Object(i.b)("inlineCode",{parentName:"li"},"author")," populated")),Object(i.b)("p",null,"This happens because the information about entity association being populated is stored in\nthe Identity Map. "))}p.isMDXComponent=!0}}]);