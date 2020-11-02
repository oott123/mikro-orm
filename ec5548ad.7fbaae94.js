(window.webpackJsonp=window.webpackJsonp||[]).push([[678],{737:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var o=t(1),i=t(6),r=(t(0),t(807)),a={title:"Modeling Entity Relationships",sidebar_label:"Modeling Entity Relationships"},s={unversionedId:"relationships",id:"relationships",isDocsHomePage:!1,title:"Modeling Entity Relationships",description:"There are 4 types of entity relationships in MikroORM:",source:"@site/docs/relationships.md",slug:"/relationships",permalink:"/docs/next/relationships",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/relationships.md",version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1604284031,sidebar_label:"Modeling Entity Relationships",sidebar:"docs",previous:{title:"Defining Entities",permalink:"/docs/next/defining-entities"},next:{title:"Working with Entity Manager",permalink:"/docs/next/entity-manager"}},c=[{value:"ManyToOne",id:"manytoone",children:[]},{value:"OneToMany",id:"onetomany",children:[]},{value:"OneToOne",id:"onetoone",children:[{value:"Owning Side",id:"owning-side",children:[]},{value:"Inverse Side",id:"inverse-side",children:[]}]},{value:"ManyToMany",id:"manytomany",children:[{value:"Owning Side",id:"owning-side-1",children:[]},{value:"Inverse Side",id:"inverse-side-1",children:[]}]}],l={rightToc:c};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are 4 types of entity relationships in MikroORM: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ManyToOne"),Object(r.b)("li",{parentName:"ul"},"OneToMany"),Object(r.b)("li",{parentName:"ul"},"OneToOne"),Object(r.b)("li",{parentName:"ul"},"ManyToMany")),Object(r.b)("p",null,"Relations can be unidirectional and bidirectional. Unidirectional are defined only on one\nside (the owning side). Bidirectional are defined on both sides, while one is owning side\n(where references are store), marked by ",Object(r.b)("inlineCode",{parentName:"p"},"inversedBy")," attribute pointing to the inverse side.\nOn the inversed side we define it with ",Object(r.b)("inlineCode",{parentName:"p"},"mappedBy")," attribute pointing back to the owner:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When modeling bidirectional relationship, you can also omit the ",Object(r.b)("inlineCode",{parentName:"p"},"inversedBy")," attribute,\ndefining ",Object(r.b)("inlineCode",{parentName:"p"},"mappedBy")," on the inverse side is enough as it will be auto-wired. ")),Object(r.b)("h2",{id:"manytoone"},"ManyToOne"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Many instances of the current Entity refer to One instance of the referred Entity.")),Object(r.b)("p",null,"There are multiple ways how to define the relationship, all of following is equivalent:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @ManyToOne() // plain decorator is enough, type will be sniffer via reflection!\n  author1!: Author;\n\n  @ManyToOne(() => Author) // you can specify type manually as a callback\n  author2!: Author;\n\n  @ManyToOne('Author') // or as a string\n  author3!: Author;\n\n  @ManyToOne({ entity: () => Author }) // or use options object\n  author4!: Author;\n\n}\n")),Object(r.b)("p",null,"You can also specify how operations on given entity should ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/cascading"}),"cascade"),"\nto the referred entity."),Object(r.b)("h2",{id:"onetomany"},"OneToMany"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"One instance of the current Entity has Many instances (references) to the referred Entity.")),Object(r.b)("p",null,"Again, all of following is equivalent:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Author {\n\n  @OneToMany(() => Book, book => book.author)\n  books1 = new Collection<Book>(this);\n\n  @OneToMany('Book', 'author')\n  books2 = new Collection<Book>(this);\n\n  @OneToMany({ mappedBy: book => book.author }) // referenced entity type can be sniffer too\n  books3 = new Collection<Book>(this);\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author', orphanRemoval: true })\n  books4 = new Collection<Book>(this);\n\n}\n")),Object(r.b)("p",null,"As you can see, OneToMany is the inverse side of ManyToOne (which is the owning side).\nMore about how collections work can be found on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/collections"}),"collections page"),". "),Object(r.b)("p",null,"You can also specify how operations on given entity should ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/cascading"}),"cascade")," to the referred\nentities. There is also more aggressive remove mode called ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/cascading#orphan-removal"}),"Orphan Removal"),"\n(",Object(r.b)("inlineCode",{parentName:"p"},"books4")," example)."),Object(r.b)("h2",{id:"onetoone"},"OneToOne"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"One instance of the current Entity refers to One instance of the referred Entity.")),Object(r.b)("p",null,"This is a variant of ManyToOne, where there is always just one entity on both sides. This means\nthat the foreign key column is also unique."),Object(r.b)("h3",{id:"owning-side"},"Owning Side"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class User {\n\n  // when none of `owner/inverseBy/mappedBy` is provided, it will be considered owning side\n  @OneToOne()\n  bestFriend1!: User;\n\n  // side with `inversedBy` is the owning one, to define inverse side use `mappedBy`\n  @OneToOne({ inversedBy: 'bestFriend1', orphanRemoval: true })\n  bestFriend2!: User;\n\n  // when defining it like this, you need to specifically mark the owning side with `owner: true`\n  @OneToOne(() => User, user => user.bestFriend2, { owner: true, orphanRemoval: true })\n  bestFriend3!: User;\n\n}\n")),Object(r.b)("h3",{id:"inverse-side"},"Inverse Side"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class User {\n\n  @OneToOne({ mappedBy: 'bestFriend1' })\n  bestFriend1!: User;\n\n  @OneToOne(() => User, user => user.bestFriend2)\n  bestFriend2!: User;\n\n}\n")),Object(r.b)("p",null,"As you can see, relationships can be also self-referencing (all of them. OneToOne also supports\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/cascading#orphan-removal"}),"Orphan Removal"),". "),Object(r.b)("h2",{id:"manytomany"},"ManyToMany"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Many instances of the current Entity refers to Many instances of the referred Entity.")),Object(r.b)("p",null,"Here are examples of how you can define ManyToMany relationship:"),Object(r.b)("h3",{id:"owning-side-1"},"Owning Side"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  // when none of `owner/inverseBy/mappedBy` is provided, it will be considered owning side\n  @ManyToMany()\n  tags1 = new Collection<BookTag>(this);\n\n  @ManyToMany(() => BookTag, 'books', { owner: true })\n  tags2 = new Collection<BookTag>(this);\n\n  @ManyToMany(() => BookTag, 'books', { owner: true })\n  tags3 = new Collection<BookTag>(this);\n\n  @ManyToMany(() => BookTag, 'books', { owner: true })\n  tags4 = new Collection<BookTag>(this);\n\n  // to define uni-directional many to many, simply provide only \n  @ManyToMany(() => Author)\n  friends: Collection<Author> = new Collection<Author>(this);\n\n}\n")),Object(r.b)("h3",{id:"inverse-side-1"},"Inverse Side"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class BookTag {\n\n  // inverse side has to point to the owning side via `mappedBy` attribute/parameter\n  @ManyToMany(() => Book, book => book.tags)\n  books = new Collection<Book>(this);\n\n}\n")),Object(r.b)("p",null,"Again, more information about how collections work can be found on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/collections"}),"collections page"),". "))}b.isMDXComponent=!0},807:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return y}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(t),u=o,y=p["".concat(a,".").concat(u)]||p[u]||d[u]||r;return t?i.a.createElement(y,s(s({ref:n},l),{},{components:t})):i.a.createElement(y,s({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);