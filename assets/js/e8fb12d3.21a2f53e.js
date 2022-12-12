"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[656,5008],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>l,withMDXComponents:()=>c});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){return function(t){var r=l(t.components);return n.createElement(e,i({},t,{components:r}))}},l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,m=c["".concat(a,".").concat(d)]||c[d]||g[d]||i;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78610:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=r(44996),u=["components"],p={},s=void 0,c={type:"mdx",permalink:"/docs/plugins/ui-debugger/overview",source:"@site/src/embedded-pages/docs/plugins/ui-debugger/overview.mdx",description:"The UIDebugger is a replacement for the Layout inspector. It streams the full hierarchy of the running app to flipper desktop in near real time. We display a 2D visualization with all of your view and component bounds overlayed on top.",frontMatter:{}},l=[],d={toc:l};function g(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The UIDebugger is a replacement for the Layout inspector. It streams the full hierarchy of the running app to flipper desktop in near real time. We display a 2D visualization with all of your view and component bounds overlayed on top.\nYou can focus on a particular view or component from the context menu. Additionally, you can pause incoming updates to focus on a particular frame."),(0,i.mdx)("p",null,"You can inspect what views the hierarchy is made up of as well as what properties each view has; this is useful when debugging issues with your product."),(0,i.mdx)("p",null,"We currently support Native android and ",(0,i.mdx)("a",{parentName:"p",href:"https://fblitho.com"},"Litho")," components, it integrates with these frameworks to present components in the hierarchy just as if they were native views, exposing all the layout properties, props, and state of the components."),(0,i.mdx)("img",{alt:"UIDebugger",src:(0,a.default)("img/uidebugger.png")}))}g.isMDXComponent=!0},47253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=r(78610),u=["components"],p={id:"ui-debugger",title:"UI Debugger (beta) Plugin",sidebar_label:"UI Debugger (beta)",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/ui-debugger/docs/overview.mdx"},s=void 0,c={unversionedId:"features/plugins/ui-debugger",id:"features/plugins/ui-debugger",title:"UI Debugger (beta) Plugin",description:"",source:"@site/../docs/features/plugins/ui-debugger.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/ui-debugger",permalink:"/docs/features/plugins/ui-debugger",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/ui-debugger/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"ui-debugger",title:"UI Debugger (beta) Plugin",sidebar_label:"UI Debugger (beta)",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/ui-debugger/docs/overview.mdx"},sidebar:"main",previous:{title:"Sandbox",permalink:"/docs/features/plugins/sandbox"},next:{title:"Desktop App",permalink:"/docs/getting-started/"}},l={},d=[],g={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.mdx)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(a.default,{mdxType:"Article"}))}m.isMDXComponent=!0}}]);