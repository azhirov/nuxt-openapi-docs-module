(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{543:function(e,t,n){var content=n(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},544:function(e,t,n){"use strict";n(543)},545:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},546:function(e,t,n){"use strict";n(17),n(549),n(57),n(58),n(19),n(161);var r=n(11),o={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=t.indexOf(e);if(-1!==n){var r=Math.max(n-50,0),o=Math.min(n+e.length+50,t.length),c="..."+t.substring(r,o)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var d in l){var m=l[d],h=this.tr(m,"summary",this.currentLocale).toLowerCase(),f=this.tr(m,"description",this.currentLocale).toLowerCase(),y=null,x=h.indexOf(e);if(-1!==x){var v=f.substring(0,100)+"...";y={path:m.path,title:h.replace(e,"<b>"+e+"</b>"),description:v+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}if(-1!==(x=f.indexOf(e))){var w=Math.max(x-50,0),C=Math.min(x+e.length+50,f.length),S="..."+f.substring(w,C)+"...";S=S.replace(e,"<b>"+e+"</b>"),y?y.description=S:y={path:m.path,title:h,description:S,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}y&&this.list.push(y)}}}}}},c=(n(544),n(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(n){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:n.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(n.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(n.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(n.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.a=component.exports},621:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(23),n(17),n(19),n(342),n(341),n(343),n(547),n(548),n(18),n(6)),c=n(5),l=n(4),d=n(7),m=n(546),h=n(11),f={name:"AppDocs",layout:function(e){var t;return"apidocs-layout-".concat(null!==(t=e.route.params.file)&&void 0!==t?t:e.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:o.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:d.a,SearchBlock:m.a},head:function(){return this.isInfo?{title:"[".concat(this.file,"] - Info Docs"),description:""}:this.isComponents?{title:"[".concat(this.file,"] - Components Docs"),description:""}:{title:"["+this.file+"] - "+Object(h.c)(this.activeRoute,"summary",this.currentLocale),description:Object(h.c)(this.activeRoute,"description",this.currentLocale)}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$nuxt.context;try{e.currentLocale=null!==(r=n.route.params.locale)&&void 0!==r?r:n.route.meta[0].locale,e.type=null!==(o=n.route.params.type)&&void 0!==o?o:n.route.meta[0].type,e.path=null!==(c=n.route.params.path)&&void 0!==c?c:n.route.meta[0].path}catch(e){console.error(e),console.error(n.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Request Body",description:"Request Body",version:"1.0.0"},paths:{"item-price":{post:{summary:"Multiple Request body",description:"Request body with multiple `media types`",requestBody:{description:"Even though you can define multiple request bodies, but only one can be submitted",content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"},examples:{USD:{description:"Cost in `US Dollars`",value:"{\n  amount: 10,\n  currency: USD,\n  converstion: &#x27;use-avg&#x27;,\n  taxes: [&#x27;federal&#x27;, &#x27;state&#x27;]\n}\n"},INR:{description:"Cost in `Indian Price`",value:"{\n  amount: 700,\n  currency: INR,\n  converstion: &#x27;use-min&#x27;\n  taxes: [&#x27;exchange&#x27;]\n}\n"}}},"application/xml":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}},"application/text":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"},examples:{"price-in-indian-rupee":{value:"amount: 700,\ncurrency: INR,\nconverstion: &#x27;use-avg&#x27;\n"},"price-in-us-dollars":{value:"amount: 10,\ncurrency: USD,\nconverstion: &#x27;use-avg&#x27;\n"}}},"multipart/form-data":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}},"application/x-www-form-urlencoded":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}},"application/octet-stream":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}}}},responses:{200:{description:"Updated with provided values",content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}},"text/html":{schema:{description:"Updated",type:"string",example:"Successfully updated"}}}},400:{description:"Internal server error occurred.",content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}}}}},path:"/item-price",tags:["other"]}}},components:{schemas:{Price:{type:"object",properties:{amount:{type:"integer",required:!0,description:"Amount rounded to nearest integer",example:10,default:20,minimum:5,maximum:100,format:"int32"},currency:{type:"string",description:"Currency code",examples:["USD","INR"]},converstion:{type:"string",enum:["use-min","use-max","use-avg"],default:"use-avg",examples:["use-avg","use-min"]},taxes:{type:"array",items:{type:"string"},examples:["exchange",["state","federal"],["exchange","federal"],"federal"]}},title:"schemas"}}}},locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/item-price",path:"item-price",type:"post",description:"Request body with multiple `media types`"}]}},fileName:"request-body-multiple",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"request-body-multiple",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(t=this.options.doc.paths[this.path].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},y=n(1),component=Object(y.a)(f,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.path,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);