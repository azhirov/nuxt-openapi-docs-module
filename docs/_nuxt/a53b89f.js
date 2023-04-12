(window.webpackJsonp=window.webpackJsonp||[]).push([[41,8,15,17,23,24,31],{463:function(e,t,o){var content=o(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("09cf48f4",content,!0,{sourceMap:!1})},464:function(e,t,o){var content=o(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("4462feb0",content,!0,{sourceMap:!1})},465:function(e,t,o){var content=o(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("7b1266a0",content,!0,{sourceMap:!1})},466:function(e,t,o){"use strict";o(463)},467:function(e,t,o){var r=o(3)((function(i){return i[1]}));r.push([e.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),r.locals={},e.exports=r},468:function(e,t,o){"use strict";o.r(t);o(41),o(54),o(6);var r=o(116),n={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},c=(o(466),o(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[t("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[e._v("\n    "+e._s(e.tr(e.securityScheme,"name",e.currentLocale))+"\n  ")]),e._v(" "),"http"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Scheme:")]),e._v(" "+e._s(e.securityScheme.scheme))]),e._v(" "),e.securityScheme.bearerFormat?t("p",[t("strong",[e._v("Bearer format:")]),e._v(" "+e._s(e.securityScheme.bearerFormat)+"\n    ")]):e._e(),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"apiKey"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.securityScheme.name))]),e._v(" "),t("p",[t("strong",[e._v("In:")]),e._v(" "+e._s(e.securityScheme.in))]),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"oauth2"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),e.securityScheme.flows?t("p",[t("strong",[e._v("Flows:")])]):e._e(),e._v(" "),t("ul",e._l(e.securityScheme.flows,(function(o,r){return t("li",{key:r},[t("p",[t("strong",[e._v(e._s(r)+":")])]),e._v(" "),t("ul",[o.authorizationUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Authorization URL"))+":")]),e._v(" "+e._s(o.authorizationUrl)+"\n          ")]):e._e(),e._v(" "),o.tokenUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Token URL"))+":")]),e._v(" "+e._s(o.tokenUrl)+"\n          ")]):e._e(),e._v(" "),o.refreshUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Refresh URL"))+":")]),e._v(" "+e._s(o.refreshUrl)+"\n          ")]):e._e(),e._v(" "),o.scopes?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Scopes"))+":")]),e._v(" "),t("ul",e._l(o.scopes,(function(o,r){return t("li",{key:r},[t("strong",[e._v(e._s(r)+":")]),e._v(" "+e._s(o)+"\n              ")])})),0)]):e._e()])])})),0),e._v(" "),e.securityScheme.description?t("div",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Description"))+":")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.tr(e.securityScheme,"description",e.currentLocale))}})]):e._e()]):e._e()])}),[],!1,null,null,null);t.default=component.exports},469:function(e,t,o){"use strict";o(464)},470:function(e,t,o){var r=o(3)((function(i){return i[1]}));r.push([e.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.font-medium{font-weight:500}",""]),r.locals={},e.exports=r},471:function(e,t,o){"use strict";o.r(t);var r=o(116),n={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},c=(o(469),o(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Request Bodies"))+": ")]),e._v(" "),e._l(e.requestBodies,(function(o,r){return t("div",{key:r,staticClass:"mt-4"},[t("h3",{staticClass:"text-lg font-medium"},[e._v(e._s(r))]),e._v(" "),t("OpenApiRequestBody",{attrs:{requestBody:o,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiRequestBody:o(483).default})},472:function(e,t,o){"use strict";o.r(t);var r=o(116),n={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},c=o(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Security Schemes"))+": ")]),e._v(" "),e._l(e.securitySchemes,(function(o,r){return t("div",{key:r},[t("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:r}},[e._v(" - "+e._s(r))]),e._v(" "),t("OpenApiSecurityScheme",{attrs:{securityScheme:o,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityScheme:o(468).default})},473:function(e,t,o){"use strict";o(465)},474:function(e,t,o){var r=o(3)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},475:function(e,t,o){"use strict";o.r(t);o(41),o(54),o(5),o(7);var r=o(116),n={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c,getUrl:function(e){var t=e.url,o=e.variables;for(var r in o){var n=o[r].default;if(n){var c="{".concat(r,"}");t=t.replace(c,n)}}return t}}},c=o(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"text-2xl font-bold"},[e._v(e._s(e.tr(e.info,"title",e.currentLocale)))]),e._v(" "),t("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:e._s(e.tr(e.info,"description",e.currentLocale))}}),e._v(" "),e.servers?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Servers")]),e._v(" "),t("ul",{staticClass:"list-disc list-inside"},e._l(e.servers,(function(o){return t("li",{key:o.url},[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.getUrl(o)}},[e._v(e._s(e.getUrl(o)))]),e._v(" - "),o.description?t("span",[e._v(e._s(o.description))]):e._e()])})),0)]):e._e(),e._v(" "),e.info.externalDocs?t("h3",{staticClass:"text-lg font-bold"},[e._v("External documentation")]):e._e(),e._v(" "),e.info.externalDocs?t("ul",{staticClass:"list-disc list-inside"},[t("li",[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.info.externalDocs.url}},[e._v(e._s(e.tr(e.info.externalDocs,"description",e.currentLocale)))])])]):e._e(),e._v(" "),e.info.version?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("version: "+e._s(e.info.version))])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},476:function(e,t,o){"use strict";o.r(t);var r={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},n=o(1),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",[e.components.schemas?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Schemas")]),e._v(" "),e._l(e.components.schemas,(function(o,r){return t("div",[t("h4",{staticClass:"text-base font-bold",domProps:{textContent:e._s(r)}}),e._v(" "),t("OpenApiSchema",{attrs:{components:e.components,schema:o,"current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.schema?t("div",[t("OpenApiSchema",{attrs:{components:e.components,schema:e.components.schema,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.examples?t("div",[t("OpenApiExamples",{attrs:{examples:e.components.examples,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.requestBodies?t("div",[t("OpenApiRequestBodies",{attrs:{requestBodies:e.components.requestBodies,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.responses?t("div",[t("OpenApiResponses",{attrs:{responses:e.components.responses,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.parameters?t("div",[t("OpenApiParameters",{attrs:{parameters:e.components.parameters,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.securitySchemes?t("div",[t("OpenApiSecuritySchemes",{attrs:{securitySchemes:e.components.securitySchemes,"current-locale":e.currentLocale}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSchema:o(479).default,OpenApiExamples:o(480).default,OpenApiRequestBodies:o(471).default,OpenApiResponses:o(481).default,OpenApiParameters:o(482).default,OpenApiSecuritySchemes:o(472).default})},477:function(e,t,o){"use strict";o.r(t);var r={name:"NotFound"},n=o(1),component=Object(n.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[t("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[e._v("404")]),e._v(" "),t("p",{staticClass:"text-lg text-gray-700 text-center"},[e._v("Not found")])])}],!1,null,null,null);t.default=component.exports},478:function(e,t,o){"use strict";o.r(t);o(5),o(138),o(41),o(54),o(7),o(68);var r=o(116),n={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),o=t.indexOf(e);if(-1!==o){var r=Math.max(o-50,0),n=Math.min(o+e.length+50,t.length),c="..."+t.substring(r,n)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var d in l){var h=l[d],m=this.tr(h,"summary",this.currentLocale).toLowerCase(),f=this.tr(h,"description",this.currentLocale).toLowerCase(),v=null,y=m.indexOf(e);if(-1!==y){var _=f.substring(0,100)+"...";v={path:h.path,title:m.replace(e,"<b>"+e+"</b>"),description:_+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}if(-1!==(y=f.indexOf(e))){var x=Math.max(y-50,0),w=Math.min(y+e.length+50,f.length),k="..."+f.substring(x,w)+"...";k=k.replace(e,"<b>"+e+"</b>"),v?v.description=k:v={path:h.path,title:m,description:k,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}v&&this.list.push(v)}}}}}},c=(o(473),o(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(o){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:o.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(o.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(o.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(o.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},546:function(e,t,o){"use strict";o.r(t);var r=o(2),n=(o(8),o(41),o(54),o(32),o(47),o(48),o(484),o(262),o(6),{name:"AppDocs",layout:"apidocs-layout-auth",transition:{name:"fade"},head:function(){var e,t,o,r;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:""};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:""};var title=null!==(e=null!==(t=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==t?t:this.activeRoute.summary)&&void 0!==e?e:"",n=null!==(o=null!==(r=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==r?r:this.activeRoute.description)&&void 0!==o?o:"";return{title:"["+this.file+"] - "+title,description:n}},setup:function(){},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.$nuxt.context;try{e.currentLocale=null!==(r=o.route.params.locale)&&void 0!==r?r:o.route.meta[0].locale,e.type=null!==(n=o.route.params.type)&&void 0!==n?n:o.route.meta[0].type,e.path=null!==(c=o.route.params.path)&&void 0!==c?c:o.route.meta[0].path}catch(e){console.error(e),console.error(o.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-auth",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.1",info:{title:"Authentication Demo",description:"Demonstrate various authentication methods supported by RapiDoc"},servers:[{url:"https://reqres.in/api/"},{url:"https://graph.microsoft.com/V1.0",description:"Uses OAuth Flows"}],paths:{users__userId_:{get:{description:"One User from reqres.in (No Security)",parameters:[{in:"path",name:"userId",schema:{type:"integer",example:3},required:!0,description:"Numeric ID of the user to get"}],path:"/users/{userId}",tags:["other"]}},users:{get:{description:"Users from MS-Active (OAuth Security)",security:[{"ms-oauth":null}],path:"/users",tags:["other"]}},"fake-api-that-need-multiple-security-1":{get:{description:"API that needs 2 API Keys",security:[{api_key1:[],api_key2:[]}],path:"/fake-api-that-need-multiple-security-1",tags:["other"]}},"fake-api-that-need-one-security-out-of-two":{get:{description:"API that any one API Key from the list of 2",security:[{api_key1:[]},{api_key2:[]}],path:"/fake-api-that-need-one-security-out-of-two",tags:["other"]}},"fake-api-that-need-basic-and-apikey":{get:{description:"API that need API Key and HTTP Basic",security:[{"http-basic":[]},{"http-bearer":[]}],path:"/fake-api-that-need-basic-and-apikey",tags:["other"]}},"fake-api-that-with-complex-security":{get:{description:"API with a complex security requirements",security:[{"ms-oauth":["User.ReadBasic.All","Directory.Read.All"]},{"http-basic":["h-scope1","h-scope2"]},{api_key_cookie:[]},{api_key1:["a-scope1","a-scope2"],api_key2:[]}],path:"/fake-api-that-with-complex-security",tags:["other"]}}},components:{securitySchemes:{"http-basic":{type:"http",scheme:"basic"},"http-bearer":{type:"http",scheme:"bearer"},api_key1:{type:"apiKey",name:"Authorization",in:"header"},api_key2:{type:"apiKey",name:"specialKey",in:"header"},api_key_cookie:{description:"API Key that should be sent in cookie authorization filters.",type:"apiKey",name:"api_key_cookie",in:"cookie"},"ms-oauth":{type:"oauth2",description:'<h3 id="important-">IMPORTANT !!!</h3>\n<p>Works only when client (<code>this html</code>) is served from <code>http://localhost:8080/...</code> because the registered client has a redirect url pointing to <code>http://localhost:8080/examples/oauth-receiver.html</code></p>\n<p>In order to experiment with OAuth system you can do the floowing</p>\n<ol>\n<li>Signup with <a href="https://portal.azure.com/">https://portal.azure.com/</a> if you havent already </li>\n<li>Register an app with Microsoft Azure (Instructions: <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app">https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app</a>)<ul>\n<li>Registering an App will generate a <code>client-id</code> and <code>client-secret</code>.  Anyone who has this can make calls to the API</li>\n</ul>\n</li>\n<li>Create some users in MS Active Directory</li>\n<li>Provide permissions to your APP to access MS Graph API which allow you to query the users from MS Active Directory</li>\n</ol>\n<h2 id="oauth-flows---there-are-4-different-oauth-flows-checkout-how-various-oauth-flows-utilizes-client-id-and-client-secret---authorization-code----requires-client-id-and-client-secret---client-credentials---requires-client-id-and-client-secret---implicit---requires-only-client-id---password---requires-username-and-password-deprecated-in-oauth-20"><strong>OAUTH FLOWS</strong> - There are 4 different OAuth flows. checkout how various oauth flows utilizes <code>client-id</code> and <code>client-secret</code>\n- <strong>Authorization Code</strong>  - Requires <code>client-id</code> and <code>client-secret</code>\n- <strong>Client Credentials</strong> - Requires <code>client-id</code> and <code>client-secret</code>\n- <strong>Implicit</strong> - Requires only <code>client-id</code>\n- <strong>Password</strong> - Requires <code>username</code> and <code>password</code> <em>deprecated in oauth 2.0</em></h2>\n',"x-client-id":"0801ecad-97a5-4bed-bd5e-0528afecc1d6",flows:{authorizationCode:{authorizationUrl:"https://login.microsoftonline.com/546ffd36-88d5-494c-b126-57cc823bb5ea/oauth2/v2.0/authorize",tokenUrl:"https://login.microsoftonline.com/546ffd36-88d5-494c-b126-57cc823bb5ea/oauth2/v2.0/token",scopes:{"https://graph.microsoft.com/User.ReadBasic.All":"Read logged users basic info","https://graph.microsoft.com/User.Read.All":"Read logged users data","https://graph.microsoft.com/Directory.Read.All":"Read User list from directory"}},clientCredentials:{tokenUrl:"https://login.microsoftonline.com/546ffd36-88d5-494c-b126-57cc823bb5ea/oauth2/v2.0/token",scopes:{"https://graph.microsoft.com/User.ReadBasic.All":"Read logged users basic info","https://graph.microsoft.com/User.Read.All":"Read logged users data"}},implicit:{authorizationUrl:"https://login.microsoftonline.com/546ffd36-88d5-494c-b126-57cc823bb5ea/oauth2/v2.0/authorize",scopes:{"https://graph.microsoft.com/User.ReadBasic.All":"Read logged users basic info","https://graph.microsoft.com/User.Read.All":"Read logged users data"}},password:{okenUrl:"https://login.microsoftonline.com/546ffd36-88d5-494c-b126-57cc823bb5ea/oauth2/v2.0/token",scopes:{"https://graph.microsoft.com/User.ReadBasic.All":"Read logged users basic info","https://graph.microsoft.com/User.Read.All":"Read logged users data"}}}}}}},isNuxt3:!1,isNuxt2:!0,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/users/{userId}",path:"users__userId_",type:"get",description:"One User from reqres.in (No Security)"},{name:"/users",path:"users",type:"get",description:"Users from MS-Active (OAuth Security)"},{name:"/fake-api-that-need-multiple-security-1",path:"fake-api-that-need-multiple-security-1",type:"get",description:"API that needs 2 API Keys"},{name:"/fake-api-that-need-one-security-out-of-two",path:"fake-api-that-need-one-security-out-of-two",type:"get",description:"API that any one API Key from the list of 2"},{name:"/fake-api-that-need-basic-and-apikey",path:"fake-api-that-need-basic-and-apikey",type:"get",description:"API that need API Key and HTTP Basic"},{name:"/fake-api-that-with-complex-security",path:"fake-api-that-with-complex-security",type:"get",description:"API with a complex security requirements"}]}},fileName:"auth",layoutName:"apidocs-layout-auth",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"auth"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(t),link=document.createElement("a");link.href=o,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(o)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(t=this.options.doc.paths[this.path].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted:function(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}}),c=o(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.path,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiInfo:o(475).default,OpenApiComponents:o(476).default,OpenApiRoute:o(485).default,NotFound:o(477).default,SearchBlock:o(478).default})}}]);