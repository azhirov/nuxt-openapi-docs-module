(window.webpackJsonp=window.webpackJsonp||[]).push([[82,8,15,17,23,24,31],{463:function(e,t,r){var content=r(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("09cf48f4",content,!0,{sourceMap:!1})},464:function(e,t,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("4462feb0",content,!0,{sourceMap:!1})},465:function(e,t,r){var content=r(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("7b1266a0",content,!0,{sourceMap:!1})},466:function(e,t,r){"use strict";r(463)},467:function(e,t,r){var n=r(3)((function(i){return i[1]}));n.push([e.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),n.locals={},e.exports=n},468:function(e,t,r){"use strict";r.r(t);r(41),r(54),r(6);var n=r(116),o={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:n.c}},c=(r(466),r(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[t("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[e._v("\n    "+e._s(e.tr(e.securityScheme,"name",e.currentLocale))+"\n  ")]),e._v(" "),"http"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Scheme:")]),e._v(" "+e._s(e.securityScheme.scheme))]),e._v(" "),e.securityScheme.bearerFormat?t("p",[t("strong",[e._v("Bearer format:")]),e._v(" "+e._s(e.securityScheme.bearerFormat)+"\n    ")]):e._e(),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"apiKey"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.securityScheme.name))]),e._v(" "),t("p",[t("strong",[e._v("In:")]),e._v(" "+e._s(e.securityScheme.in))]),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"oauth2"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),e.securityScheme.flows?t("p",[t("strong",[e._v("Flows:")])]):e._e(),e._v(" "),t("ul",e._l(e.securityScheme.flows,(function(r,n){return t("li",{key:n},[t("p",[t("strong",[e._v(e._s(n)+":")])]),e._v(" "),t("ul",[r.authorizationUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Authorization URL"))+":")]),e._v(" "+e._s(r.authorizationUrl)+"\n          ")]):e._e(),e._v(" "),r.tokenUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Token URL"))+":")]),e._v(" "+e._s(r.tokenUrl)+"\n          ")]):e._e(),e._v(" "),r.refreshUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Refresh URL"))+":")]),e._v(" "+e._s(r.refreshUrl)+"\n          ")]):e._e(),e._v(" "),r.scopes?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Scopes"))+":")]),e._v(" "),t("ul",e._l(r.scopes,(function(r,n){return t("li",{key:n},[t("strong",[e._v(e._s(n)+":")]),e._v(" "+e._s(r)+"\n              ")])})),0)]):e._e()])])})),0),e._v(" "),e.securityScheme.description?t("div",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Description"))+":")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.tr(e.securityScheme,"description",e.currentLocale))}})]):e._e()]):e._e()])}),[],!1,null,null,null);t.default=component.exports},469:function(e,t,r){"use strict";r(464)},470:function(e,t,r){var n=r(3)((function(i){return i[1]}));n.push([e.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.font-medium{font-weight:500}",""]),n.locals={},e.exports=n},471:function(e,t,r){"use strict";r.r(t);var n=r(116),o={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:n.c}},c=(r(469),r(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Request Bodies"))+": ")]),e._v(" "),e._l(e.requestBodies,(function(r,n){return t("div",{key:n,staticClass:"mt-4"},[t("h3",{staticClass:"text-lg font-medium"},[e._v(e._s(n))]),e._v(" "),t("OpenApiRequestBody",{attrs:{requestBody:r,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiRequestBody:r(483).default})},472:function(e,t,r){"use strict";r.r(t);var n=r(116),o={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:n.c}},c=r(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Security Schemes"))+": ")]),e._v(" "),e._l(e.securitySchemes,(function(r,n){return t("div",{key:n},[t("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:n}},[e._v(" - "+e._s(n))]),e._v(" "),t("OpenApiSecurityScheme",{attrs:{securityScheme:r,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityScheme:r(468).default})},473:function(e,t,r){"use strict";r(465)},474:function(e,t,r){var n=r(3)((function(i){return i[1]}));n.push([e.i,"",""]),n.locals={},e.exports=n},475:function(e,t,r){"use strict";r.r(t);r(41),r(54),r(5),r(7);var n=r(116),o={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:n.c,getUrl:function(e){var t=e.url,r=e.variables;for(var n in r){var o=r[n].default;if(o){var c="{".concat(n,"}");t=t.replace(c,o)}}return t}}},c=r(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"text-2xl font-bold"},[e._v(e._s(e.tr(e.info,"title",e.currentLocale)))]),e._v(" "),t("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:e._s(e.tr(e.info,"description",e.currentLocale))}}),e._v(" "),e.servers?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Servers")]),e._v(" "),t("ul",{staticClass:"list-disc list-inside"},e._l(e.servers,(function(r){return t("li",{key:r.url},[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.getUrl(r)}},[e._v(e._s(e.getUrl(r)))]),e._v(" - "),r.description?t("span",[e._v(e._s(r.description))]):e._e()])})),0)]):e._e(),e._v(" "),e.info.externalDocs?t("h3",{staticClass:"text-lg font-bold"},[e._v("External documentation")]):e._e(),e._v(" "),e.info.externalDocs?t("ul",{staticClass:"list-disc list-inside"},[t("li",[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.info.externalDocs.url}},[e._v(e._s(e.tr(e.info.externalDocs,"description",e.currentLocale)))])])]):e._e(),e._v(" "),e.info.version?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("version: "+e._s(e.info.version))])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},476:function(e,t,r){"use strict";r.r(t);var n={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},o=r(1),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e.components.schemas?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Schemas")]),e._v(" "),e._l(e.components.schemas,(function(r,n){return t("div",[t("h4",{staticClass:"text-base font-bold",domProps:{textContent:e._s(n)}}),e._v(" "),t("OpenApiSchema",{attrs:{components:e.components,schema:r,"current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.schema?t("div",[t("OpenApiSchema",{attrs:{components:e.components,schema:e.components.schema,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.examples?t("div",[t("OpenApiExamples",{attrs:{examples:e.components.examples,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.requestBodies?t("div",[t("OpenApiRequestBodies",{attrs:{requestBodies:e.components.requestBodies,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.responses?t("div",[t("OpenApiResponses",{attrs:{responses:e.components.responses,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.parameters?t("div",[t("OpenApiParameters",{attrs:{parameters:e.components.parameters,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.securitySchemes?t("div",[t("OpenApiSecuritySchemes",{attrs:{securitySchemes:e.components.securitySchemes,"current-locale":e.currentLocale}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSchema:r(479).default,OpenApiExamples:r(480).default,OpenApiRequestBodies:r(471).default,OpenApiResponses:r(481).default,OpenApiParameters:r(482).default,OpenApiSecuritySchemes:r(472).default})},477:function(e,t,r){"use strict";r.r(t);var n={name:"NotFound"},o=r(1),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[t("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[e._v("404")]),e._v(" "),t("p",{staticClass:"text-lg text-gray-700 text-center"},[e._v("Not found")])])}],!1,null,null,null);t.default=component.exports},478:function(e,t,r){"use strict";r.r(t);r(5),r(138),r(41),r(54),r(7),r(68);var n=r(116),o={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:n.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),r=t.indexOf(e);if(-1!==r){var n=Math.max(r-50,0),o=Math.min(r+e.length+50,t.length),c="..."+t.substring(n,o)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var d in l){var m=l[d],h=this.tr(m,"summary",this.currentLocale).toLowerCase(),f=this.tr(m,"description",this.currentLocale).toLowerCase(),v=null,y=h.indexOf(e);if(-1!==y){var x=f.substring(0,100)+"...";v={path:m.path,title:h.replace(e,"<b>"+e+"</b>"),description:x+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}if(-1!==(y=f.indexOf(e))){var _=Math.max(y-50,0),S=Math.min(y+e.length+50,f.length),C="..."+f.substring(_,S)+"...";C=C.replace(e,"<b>"+e+"</b>"),v?v.description=C:v={path:m.path,title:h,description:C,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}v&&this.list.push(v)}}}}}},c=(r(473),r(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(r){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:r.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(r.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(r.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(r.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},584:function(e,t,r){"use strict";r.r(t);var n=r(2),o=(r(8),r(41),r(54),r(32),r(47),r(48),r(484),r(262),r(6),{name:"AppDocs",layout:"apidocs-layout-request-body-multiple",transition:{name:"fade"},head:function(){var e,t,r,n;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:""};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:""};var title=null!==(e=null!==(t=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==t?t:this.activeRoute.summary)&&void 0!==e?e:"",o=null!==(r=null!==(n=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==n?n:this.activeRoute.description)&&void 0!==r?r:"";return{title:"["+this.file+"] - "+title,description:o}},setup:function(){},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.$nuxt.context;try{e.currentLocale=null!==(n=r.route.params.locale)&&void 0!==n?n:r.route.meta[0].locale,e.type=null!==(o=r.route.params.type)&&void 0!==o?o:r.route.meta[0].type,e.path=null!==(c=r.route.params.path)&&void 0!==c?c:r.route.meta[0].path}catch(e){console.error(e),console.error(r.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-request-body-multiple",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Request Body",description:"Request Body",version:"1.0.0"},paths:{"item-price":{post:{summary:"Multiple Request body",description:"Request body with multiple `media types`",requestBody:{description:"Even though you can define multiple request bodies, but only one can be submitted",content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"},examples:{USD:{description:"Cost in `US Dollars`",value:"{\n  amount: 10,\n  currency: USD,\n  converstion: &#x27;use-avg&#x27;,\n  taxes: [&#x27;federal&#x27;, &#x27;state&#x27;]\n}\n"},INR:{description:"Cost in `Indian Price`",value:"{\n  amount: 700,\n  currency: INR,\n  converstion: &#x27;use-min&#x27;\n  taxes: [&#x27;exchange&#x27;]\n}\n"}}},"application/xml":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}},"application/text":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"},examples:{"price-in-indian-rupee":{value:"amount: 700,\ncurrency: INR,\nconverstion: &#x27;use-avg&#x27;\n"},"price-in-us-dollars":{value:"amount: 10,\ncurrency: USD,\nconverstion: &#x27;use-avg&#x27;\n"}}},"multipart/form-data":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}},"application/x-www-form-urlencoded":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}},"application/octet-stream":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}}}},responses:{200:{description:"Updated with provided values",content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}},"text/html":{schema:{description:"Updated",type:"string",example:"Successfully updated"}}}},400:{description:"Internal server error occurred.",content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}}}}},path:"/item-price",tags:["other"]}}},components:{schemas:{Price:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}}}},isNuxt3:!1,isNuxt2:!0,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/item-price",path:"item-price",type:"post",description:"Request body with multiple `media types`"}]}},fileName:"request-body-multiple",layoutName:"apidocs-layout-request-body-multiple",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"request-body-multiple"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),link=document.createElement("a");link.href=r,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(r)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(t=this.options.doc.paths[this.path].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted:function(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}}),c=r(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.path,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiInfo:r(475).default,OpenApiComponents:r(476).default,OpenApiRoute:r(485).default,NotFound:r(477).default,SearchBlock:r(478).default})}}]);