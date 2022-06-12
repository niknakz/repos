"use strict";(self.webpackChunkrepos=self.webpackChunkrepos||[]).push([[984],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(r),u=o,g=l["".concat(c,".").concat(u)]||l[u]||d[u]||a;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1669:function(e,t,r){r.r(t),r.d(t,{ListItem:function(){return u},assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(4996),s=["components"],c={sidebar_position:4},p="Roadmap",m={unversionedId:"roadmap/index",id:"roadmap/index",title:"Roadmap",description:"here's some things that are tentatively planned in terms of improvements, make anything cool or fix a bug? Open a PR",source:"@site/docs/roadmap/index.mdx",sourceDirName:"roadmap",slug:"/roadmap/",permalink:"/repos/docs/roadmap/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/roadmap/index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"GitHub Provider",permalink:"/repos/docs/api/providers/github"},next:{title:"Tech Stack",permalink:"/repos/docs/tech-stack/"}},d={},l=[],u=function(e){var t=e.children,r=e.name,n=e.src;return(0,a.kt)("span",{style:{display:"flex",alignContent:"center",padding:"1rem"}},(0,a.kt)("img",{src:(0,i.Z)(n),style:{width:"6rem",padding:"1rem"}}),(0,a.kt)("span",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"}},(0,a.kt)("h3",null,r),(0,a.kt)("p",null,t)))},g={toc:l,ListItem:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roadmap"},"Roadmap"),(0,a.kt)("p",null,"here's some things that are ",(0,a.kt)("em",{parentName:"p"},"tentatively")," planned in terms of improvements, make anything cool or fix a bug? Open a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/niknakz/repos/pulls"},"PR")),(0,a.kt)(u,{name:"major refactor",src:"/img/roadmap/under-construction.jpeg",mdxType:"ListItem"},"need to refactor and clean code pretty much everywhere this is currently a rough POC"),(0,a.kt)(u,{name:"docs",src:"/img/logo.svg",mdxType:"ListItem"},"docs need to be improved"),(0,a.kt)(u,{name:"TypeScript",src:"/img/tech-stack/typescript.svg",mdxType:"ListItem"},"typescript is both used and misused in this project"),(0,a.kt)(u,{name:"testing",src:"/img/roadmap/testing-library.png",mdxType:"ListItem"},"need to test /app"),(0,a.kt)(u,{name:"testing",src:"/img/roadmap/jest.png",mdxType:"ListItem"},"need to test /providers"),(0,a.kt)(u,{name:"Docker",src:"/img/roadmap/docker.svg",mdxType:"ListItem"},"ship with docker image for easier consumption"),(0,a.kt)(u,{name:"styling",src:"/img/tech-stack/css3.svg",mdxType:"ListItem"},'only "styled" for desktop sized screens \ud83d\ude05'),(0,a.kt)(u,{name:"GitLab",src:"/img/providers/gitlab.svg",mdxType:"ListItem"},"need to document and test gitlab provider"),(0,a.kt)(u,{name:"GitHub",src:"/img/providers/github.svg",mdxType:"ListItem"},"ship with default github provider"),(0,a.kt)(u,{name:"AWS CodeCommit",src:"/img/providers/aws-codecommit.svg",mdxType:"ListItem"},"ship with default code commit provider (this one is a hard maybe)"),(0,a.kt)(u,{name:"Webpack",src:"/img/roadmap/webpack.png",mdxType:"ListItem"},"ideally an alias can be created for the config and fallback to demo when it cant be resolved, here's what I tried"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n    async function (context, options) {\n      return {\n        name: 'repos-config-plugin',\n        configureWebpack(config, isServer, utils, content) {\n          return {\n            resolve: {\n                alias: {\n                  '@config': [path.resolve(__dirname, 'repos.config'), path.resolve(__dirname, 'demo/demo.config')],\n                  '@app': path.resolve(__dirname, 'app/')\n                }\n            },\n        };\n        },\n      };\n    },\n  ],\n")),(0,a.kt)(u,{name:"accessability / ada",src:"/img/roadmap/accessibility.webp",mdxType:"ListItem"},"current build is a hack"),(0,a.kt)(u,{name:"miscellaneous",src:"/img/providers/question-mark.svg",mdxType:"ListItem"},"setup docusaurus versioning",(0,a.kt)("br",null),"stages component needs to be more well defined",(0,a.kt)("br",null),"github pages (host)",(0,a.kt)("br",null),"debounce toggles",(0,a.kt)("br",null),"semantic release",(0,a.kt)("br",null),"search",(0,a.kt)("br",null),"live jsx for components demos in docs",(0,a.kt)("br",null),"should consider"," ",(0,a.kt)("a",{href:"https://docusaurus.io/docs/installation#monorepos/"},"monorepo")," to better seperate app from docs",(0,a.kt)("br",null),"maybe make config generator in docs",(0,a.kt)("br",null),"maybe one day generic 'board' page"))}f.isMDXComponent=!0}}]);