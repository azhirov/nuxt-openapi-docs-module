(window.webpackJsonp=window.webpackJsonp||[]).push([[49,8,15,17,23,24,31],{463:function(e,t,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("09cf48f4",content,!0,{sourceMap:!1})},464:function(e,t,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("d41c8358",content,!0,{sourceMap:!1})},465:function(e,t,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("7b1266a0",content,!0,{sourceMap:!1})},466:function(e,t,n){"use strict";n(463)},467:function(e,t,n){var r=n(3)((function(i){return i[1]}));r.push([e.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),r.locals={},e.exports=r},468:function(e,t,n){"use strict";n.r(t);n(41),n(54),n(6);var r=n(116),o={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=(n(466),n(1)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[t("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[e._v("\n    "+e._s(e.tr(e.securityScheme,"name",e.currentLocale))+"\n  ")]),e._v(" "),"http"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Scheme:")]),e._v(" "+e._s(e.securityScheme.scheme))]),e._v(" "),e.securityScheme.bearerFormat?t("p",[t("strong",[e._v("Bearer format:")]),e._v(" "+e._s(e.securityScheme.bearerFormat)+"\n    ")]):e._e(),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"apiKey"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.securityScheme.name))]),e._v(" "),t("p",[t("strong",[e._v("In:")]),e._v(" "+e._s(e.securityScheme.in))]),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"oauth2"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),e.securityScheme.flows?t("p",[t("strong",[e._v("Flows:")])]):e._e(),e._v(" "),t("ul",e._l(e.securityScheme.flows,(function(n,r){return t("li",{key:r},[t("p",[t("strong",[e._v(e._s(r)+":")])]),e._v(" "),t("ul",[n.authorizationUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Authorization URL"))+":")]),e._v(" "+e._s(n.authorizationUrl)+"\n          ")]):e._e(),e._v(" "),n.tokenUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Token URL"))+":")]),e._v(" "+e._s(n.tokenUrl)+"\n          ")]):e._e(),e._v(" "),n.refreshUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Refresh URL"))+":")]),e._v(" "+e._s(n.refreshUrl)+"\n          ")]):e._e(),e._v(" "),n.scopes?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Scopes"))+":")]),e._v(" "),t("ul",e._l(n.scopes,(function(n,r){return t("li",{key:r},[t("strong",[e._v(e._s(r)+":")]),e._v(" "+e._s(n)+"\n              ")])})),0)]):e._e()])])})),0),e._v(" "),e.securityScheme.description?t("div",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Description"))+":")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.tr(e.securityScheme,"description",e.currentLocale))}})]):e._e()]):e._e()])}),[],!1,null,null,null);t.default=component.exports},469:function(e,t,n){"use strict";n(464)},470:function(e,t,n){var r=n(3)((function(i){return i[1]}));r.push([e.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.text-lg2{font-size:1.25rem}.font-medium{font-weight:500}",""]),r.locals={},e.exports=r},471:function(e,t,n){"use strict";n.r(t);var r=n(116),o={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=(n(469),n(1)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg2 font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Request Bodies"))+": ")]),e._v(" "),e._l(e.requestBodies,(function(n,r){return t("div",{key:r,staticClass:"mt-4"},[t("h4",{staticClass:"text-base font-bold"},[e._v(e._s(r))]),e._v(" "),t("OpenApiRequestBody",{attrs:{requestBody:n,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiRequestBody:n(483).default})},472:function(e,t,n){"use strict";n.r(t);var r=n(116),o={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=n(1),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Security Schemes"))+": ")]),e._v(" "),e._l(e.securitySchemes,(function(n,r){return t("div",{key:r},[t("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:r}},[e._v(" - "+e._s(r))]),e._v(" "),t("OpenApiSecurityScheme",{attrs:{securityScheme:n,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityScheme:n(468).default})},473:function(e,t,n){"use strict";n(465)},474:function(e,t,n){var r=n(3)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},475:function(e,t,n){"use strict";n.r(t);n(41),n(54),n(5),n(7);var r=n(116),o={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c,getUrl:function(e){var t=e.url,n=e.variables;for(var r in n){var o=n[r].default;if(o){var l="{".concat(r,"}");t=t.replace(l,o)}}return t}}},l=n(1),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"text-2xl font-bold"},[e._v(e._s(e.tr(e.info,"title",e.currentLocale)))]),e._v(" "),t("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:e._s(e.tr(e.info,"description",e.currentLocale))}}),e._v(" "),e.servers?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Servers")]),e._v(" "),t("ul",{staticClass:"list-disc list-inside"},e._l(e.servers,(function(n){return t("li",{key:n.url},[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.getUrl(n)}},[e._v(e._s(e.getUrl(n)))]),e._v(" - "),n.description?t("span",[e._v(e._s(n.description))]):e._e()])})),0)]):e._e(),e._v(" "),e.info.externalDocs?t("h3",{staticClass:"text-lg font-bold"},[e._v("External documentation")]):e._e(),e._v(" "),e.info.externalDocs?t("ul",{staticClass:"list-disc list-inside"},[t("li",[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.info.externalDocs.url}},[e._v(e._s(e.tr(e.info.externalDocs,"description",e.currentLocale)))])])]):e._e(),e._v(" "),e.info.version?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("version: "+e._s(e.info.version))])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},476:function(e,t,n){"use strict";n.r(t);var r={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[e.components.schemas?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Schemas")]),e._v(" "),e._l(e.components.schemas,(function(n,r){return t("div",[t("h4",{staticClass:"text-base font-bold",domProps:{textContent:e._s(r)}}),e._v(" "),t("OpenApiSchema",{attrs:{components:e.components,schema:n,"current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.schema?t("div",[t("OpenApiSchema",{attrs:{components:e.components,schema:e.components.schema,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.examples?t("div",[t("OpenApiExamples",{attrs:{examples:e.components.examples,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.requestBodies?t("div",[t("OpenApiRequestBodies",{attrs:{requestBodies:e.components.requestBodies,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.responses?t("div",[t("OpenApiResponses",{attrs:{responses:e.components.responses,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.parameters?t("div",[t("OpenApiParameters",{attrs:{parameters:e.components.parameters,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.securitySchemes?t("div",[t("OpenApiSecuritySchemes",{attrs:{securitySchemes:e.components.securitySchemes,"current-locale":e.currentLocale}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSchema:n(479).default,OpenApiExamples:n(480).default,OpenApiRequestBodies:n(471).default,OpenApiResponses:n(481).default,OpenApiParameters:n(482).default,OpenApiSecuritySchemes:n(472).default})},477:function(e,t,n){"use strict";n.r(t);var r={name:"NotFound"},o=n(1),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[t("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[e._v("404")]),e._v(" "),t("p",{staticClass:"text-lg text-gray-700 text-center"},[e._v("Not found")])])}],!1,null,null,null);t.default=component.exports},478:function(e,t,n){"use strict";n.r(t);n(5),n(138),n(41),n(54),n(7),n(68);var r=n(116),o={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=t.indexOf(e);if(-1!==n){var r=Math.max(n-50,0),o=Math.min(n+e.length+50,t.length),l="..."+t.substring(r,o)+"...";l=l.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:l,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var c=this.doc.paths[path];for(var d in c){var h=c[d],m=this.tr(h,"summary",this.currentLocale).toLowerCase(),y=this.tr(h,"description",this.currentLocale).toLowerCase(),f=null,v=m.indexOf(e);if(-1!==v){var j=y.substring(0,100)+"...";f={path:h.path,title:m.replace(e,"<b>"+e+"</b>"),description:j+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}if(-1!==(v=y.indexOf(e))){var _=Math.max(v-50,0),x=Math.min(v+e.length+50,y.length),L="..."+y.substring(_,x)+"...";L=L.replace(e,"<b>"+e+"</b>"),f?f.description=L:f={path:h.path,title:m,description:L,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}f&&this.list.push(f)}}}}}},l=(n(473),n(1)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(n){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:n.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(n.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(n.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(n.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},554:function(e,t,n){"use strict";n.r(t);var r=n(2),o=(n(8),n(41),n(54),n(32),n(47),n(48),n(484),n(262),n(6),{name:"AppDocs",layout:"apidocs-layout-dynamic-query-params",transition:{name:"fade"},head:function(){var e,t,n,r;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:""};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:""};var title=null!==(e=null!==(t=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==t?t:this.activeRoute.summary)&&void 0!==e?e:"",o=null!==(n=null!==(r=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==r?r:this.activeRoute.description)&&void 0!==n?n:"";return{title:"["+this.file+"] - "+title,description:o}},setup:function(){},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$nuxt.context;try{e.currentLocale=null!==(r=n.route.params.locale)&&void 0!==r?r:n.route.meta[0].locale,e.type=null!==(o=n.route.params.type)&&void 0!==o?o:n.route.meta[0].type,e.path=null!==(l=n.route.params.path)&&void 0!==l?l:n.route.meta[0].path,e.url=null!==(c=n.route.params.url)&&void 0!==c?c:n.route.meta[0].url}catch(e){console.error(e),console.error(n.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-dynamic-query-params",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"/dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:'<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>\n<ul>\n<li>you may pass predefined query params</li>\n<li>you may create dynamic query params by defining a query-param as an object,\nin that case each key of the object will be treated as a seperate param</li>\n<li>Array serialization depends on <code>style</code> and <code>explode</code> property</li>\n</ul>\n<pre><code class="hljs language-yaml"> <span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>\n  <span class="hljs-attr">info:</span>\n    <span class="hljs-attr">title:</span>  <span class="hljs-string">Dynamic</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>\n    <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>\n  <span class="hljs-attr">paths:</span>\n    <span class="hljs-string">/dynamic-query-params:</span>\n      <span class="hljs-attr">get:</span>\n        <span class="hljs-attr">tags:</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>\n        <span class="hljs-attr">summary:</span>  <span class="hljs-string">Various</span> <span class="hljs-string">ways</span> <span class="hljs-string">to</span> <span class="hljs-string">pass</span> <span class="hljs-string">query</span> <span class="hljs-string">params</span>\n        <span class="hljs-attr">parameters:</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">limit</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">integer</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">fruits</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>\n              <span class="hljs-attr">items:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">colors</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>\n              <span class="hljs-attr">items:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params1</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params2</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params3</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">pipeDelimited</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params4</span>\n            <span class="hljs-attr">content:</span>\n              <span class="hljs-attr">&quot;application/json&quot;:</span>\n                <span class="hljs-attr">schema:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n                  <span class="hljs-attr">properties:</span>\n                    <span class="hljs-attr">someProperty:</span>\n                      <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">additionalProperties:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params5</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">required:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">properties:</span>\n                <span class="hljs-attr">propertyOne:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">enum:</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-1</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-2</span>\n                  <span class="hljs-attr">default:</span> <span class="hljs-string">VALUE-2</span>\n                <span class="hljs-attr">propertyTwo:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">enum:</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-1</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-2</span>\n                  <span class="hljs-attr">default:</span> <span class="hljs-string">FLAG-1</span>\n        <span class="hljs-attr">responses:</span>\n          <span class="hljs-attr">&#x27;200&#x27;:</span>\n            <span class="hljs-attr">description:</span> <span class="hljs-string">successful</span> <span class="hljs-string">operation</span>\n</code></pre>\n',parameters:[{name:"limit",in:"query",example:10,description:"primitive non-dynamic parameter can coexist with dynamic parameters &lt;br /&gt; `limit=10`\n",schema:{type:"integer"}},{name:"fruits",in:"query",example:["apple","banana","grape"],description:"not-exploded array, should be serialized as &lt;br /&gt; `fruits=apple,banana,grape`\n",schema:{type:"array",items:{type:"string"}}},{name:"colors",in:"query",example:["red","black","white"],description:"exploded array, should be serialized as &lt;br /&gt; `colors=red&colors=black&colors=white`\n",schema:{type:"array",items:{type:"string"}}},{in:"query",name:"dynamic-query-params1",description:"Arrays are exploded, should be serialized as  &lt;br /&gt; `a=1&b=2&colors=red&colors=black&e=3`\n",schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;a&quot;:1,\n  &quot;b&quot;:2,\n  &quot;colors&quot;:[\n    &quot;red&quot;,\n    &quot;black&quot;\n  ],\n  &quot;d&quot;:{ &quot;d1&quot;:1, &quot;d2&quot;:2 },\n  &quot;e&quot;:3\n}\n"},{in:"query",name:"dynamic-query-params2",description:"Arrays are not-exploded, therefore comma sperated &lt;br /&gt; `f=1&g=2&hobbies=music,dance`\n",style:"form",explode:!1,schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;f&quot;:1,\n  &quot;g&quot;:2,\n  &quot;hobbies&quot;:[\n    &quot;music&quot;,\n    &quot;dance&quot;\n  ]\n}\n"},{in:"query",name:"dynamic-query-params3",description:"Arrays are not exploded, and pipe separated &lt;br /&gt; `i=1&j=2&keys=public&#x7C;private`\n",style:"pipeDelimited",explode:!1,schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;i&quot;:1,\n  &quot;j&quot;:2,\n  &quot;keys&quot;:[&quot;public&quot;, &quot;private&quot;]\n}\n"},{in:"query",name:"dynamic-query-params4",description:"Parameters with JSON encoding are JSON encoded and escaped: &lt;br /&gt; `dynamic-query-params4=%7B%22someProperty%22%3A%22foo%22%2C%22bar%22%3A%22baz%22%7D`\n",content:{"application/json":{example:"{\n  &quot;someProperty&quot;: &quot;foo&quot;,\n  &quot;bar&quot;: &quot;baz&quot;\n}\n",schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}}}}}},isNuxt3:!1,isNuxt2:!0,locales:{en:"English"},pathsByTags:{"Query Params":{name:"Query Params",description:"",isOpen:!0,items:[{name:"/dynamic-query-params",path:"dynamic-query-params",type:"get",description:"Following OpenAPI spec demonstrate various ways to pass query params.\n  - you may pass predefined query params\n  - you may create dynamic query params by defining a query-param as an object,\n    in that case each key of the object will be treated as a seperate param\n  - Array serialization depends on `style` and `explode` property\n\n```yaml\n openapi: 3.0.0\n  info:\n    title:  Dynamic Query Params\n    version: 1.0.0\n  paths:\n    /dynamic-query-params:\n      get:\n        tags:\n          - Query Params\n        summary:  Various ways to pass query params\n        parameters:\n          - name: limit\n            in: query\n            schema:\n              type: integer\n          - name: fruits\n            in: query\n            style: form\n            explode: false\n            schema:\n              type: array\n              items:\n                type: string\n          - name: colors\n            in: query\n            schema:\n              type: array\n              items:\n                type: string\n          - in: query\n            name: dynamic-query-params1\n            schema:\n              type: object\n              additionalProperties: {}\n          - in: query\n            name: dynamic-query-params2\n            style: form\n            explode: false\n            schema:\n              type: object\n              additionalProperties: {}\n          - in: query\n            name: dynamic-query-params3\n            style: pipeDelimited\n            explode: false\n            schema:\n              type: object\n              additionalProperties: {}\n          - in: query\n            name: dynamic-query-params4\n            content:\n              \"application/json\":\n                schema:\n                  type: object\n                  properties:\n                    someProperty:\n                      type: string\n                  additionalProperties:\n                  type: string\n          - in: query\n            name: dynamic-query-params5\n            explode: false\n            required: false\n            schema:\n              type: object\n              properties:\n                propertyOne:\n                  type: string\n                  enum:\n                    - VALUE-1\n                    - VALUE-2\n                  default: VALUE-2\n                propertyTwo:\n                  type: string\n                  enum:\n                    - FLAG-1\n                    - FLAG-2\n                  default: FLAG-1\n        responses:\n          '200':\n            description: successful operation\n  ```\n"}]}},fileName:"dynamic-query-params",layoutName:"apidocs-layout-dynamic-query-params",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"dynamic-query-params"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path,this.url=e.url},deep:!0}},methods:{downloadJson:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(e=this.options.doc.paths[this.url][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(e=this.options.doc.paths[this.url].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&this.options.doc.paths[this.url].servers&&this.options.doc.paths[this.url].servers[0]?null!==(t=this.options.doc.paths[this.url].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$openapidocBus.$on("downloadJsonDoc",this.downloadJson)},unmounted:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)},destroyed:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)}}),l=n(1),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.url,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiInfo:n(475).default,OpenApiComponents:n(476).default,OpenApiRoute:n(485).default,NotFound:n(477).default,SearchBlock:n(478).default})}}]);