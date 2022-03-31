"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8488],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>u});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),u=function(e){return function(n){var r=s(n.components);return a.createElement(e,o({},n,{components:r}))}},s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=t,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(g,i(i({ref:n},p),{},{components:r})):a.createElement(g,i({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},74637:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var a=r(83117),t=r(80102),o=(r(67294),r(3905)),l=["components"],i={},c=void 0,p={type:"mdx",permalink:"/docs/plugins/fresco/setup",source:"@site/src/embedded-pages/docs/plugins/fresco/setup.mdx"},u=[{value:"Fresco and Android",id:"fresco-and-android",children:[{value:"Leak Tracking",id:"leak-tracking",children:[],level:3},{value:"Attribution",id:"attribution",children:[],level:3}],level:2}],s={toc:u};function d(e){var n=e.components,r=(0,t.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Currently, the images plugin only supports ",(0,o.mdx)("a",{parentName:"p",href:"https://frescolib.org/"},"Fresco")," for Android as backend, but just like the network plugin, support for other image loading libraries\ncould easily be added. Send us a PR!"),(0,o.mdx)("h2",{id:"fresco-and-android"},"Fresco and Android"),(0,o.mdx)("p",null,"The Fresco images plugin is shipped as a separate Maven artifact:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-fresco-plugin:0.30.1'\n}\n")),(0,o.mdx)("p",null,"After including the plugin in your dependencies, you can add it to the\nclient:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin;\n\nclient.addPlugin(new FrescoFlipperPlugin());\n")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"FrescoFlipperPlugin")," constructor offers a whole lot of configuration options which\ncan be useful if you have an advanced setup of Fresco in your application:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"FrescoFlipperPlugin(\n      DebugImageTracker imageTracker,\n      PlatformBitmapFactory bitmapFactory,\n      @Nullable FlipperObjectHelper flipperObjectHelper,\n      DebugMemoryManager memoryManager,\n      FlipperPerfLogger perfLogger,\n      @Nullable FrescoFlipperDebugPrefHelper debugPrefHelper,\n      @Nullable CloseableReferenceLeakTracker closeableReferenceLeakTracker) { ... }\n")),(0,o.mdx)("h3",{id:"leak-tracking"},"Leak Tracking"),(0,o.mdx)("p",null,"The Flipper plugin can help you track down ",(0,o.mdx)("inlineCode",{parentName:"p"},"CloseableReferences")," who have not had\n",(0,o.mdx)("inlineCode",{parentName:"p"},"close()")," called on them. This can have a negative impact on the performance of\nyour application."),(0,o.mdx)("p",null,"To enable this functionality, you need to create a ",(0,o.mdx)("inlineCode",{parentName:"p"},"CloseableReferenceLeakTracker"),"\nand set it in both your ",(0,o.mdx)("inlineCode",{parentName:"p"},"ImagePipelineConfig")," for Fresco and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"FrescoPluginPlugin"),"\non creation."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.imagepipeline.debug.FlipperCloseableReferenceLeakTracker;\n\n// ...\n\nFlipperCloseableReferenceLeakTracker leakTracker = new FlipperCloseableReferenceLeakTracker();\n\nnew ImagePipelineConfig.Builder()\n    // ...\n    .setCloseableReferenceLeakTracker(leakTracker)\n    .build();\n\n\nclient.addPlugin(new FrescoFlipperPlugin(\n    new FlipperImageTracker(),\n    Fresco.getImagePipelineFactory().getPlatformBitmapFactory(),\n    null,\n    new NoOpDebugMemoryManager(),\n    new NoOpFlipperPerfLogger(),\n    null,\n    leakTracker));\n")),(0,o.mdx)("h3",{id:"attribution"},"Attribution"),(0,o.mdx)("p",null,"In order to annotate images with the context they are used in, you have to set a\ncaller context when loading the image. This can be any object, so for the simplest\ncase, a String will suffice."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'String callerContext = "my_feature";\n\n// For DraweeViews:\ndraweeView.setImageURI(uri, callerContext);\n\n// For prefetching:\nImagePipeline imagePipeline = Fresco.getImagePipeline();\nimagePipeline.prefetchToDiskCache(imageRequest, callerContext);\n\n// For manually fetching an image:\nDataSource<CloseableReference<CloseableImage>>\n    dataSource = imagePipeline.fetchDecodedImage(imageRequest, callerContext);\n')),(0,o.mdx)("p",null,"If a caller context is supplied, the image will be properly attributed in the\nFlipper image plugin."))}d.isMDXComponent=!0}}]);