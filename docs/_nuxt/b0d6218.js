(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{543:function(t,e,o){var content=o(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},544:function(t,e,o){"use strict";o(543)},545:function(t,e,o){var r=o(8)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},546:function(t,e,o){"use strict";o(17),o(549),o(57),o(58),o(19),o(161);var r=o(11),n={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),o=e.indexOf(t);if(-1!==o){var r=Math.max(o-50,0),n=Math.min(o+t.length+50,e.length),c="..."+e.substring(r,n)+"...";c=c.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var d in l){var h=l[d],m=this.tr(h,"summary",this.currentLocale).toLowerCase(),f=this.tr(h,"description",this.currentLocale).toLowerCase(),y=null,v=m.indexOf(t);if(-1!==v){var x=f.substring(0,100)+"...";y={path:h.path,title:m.replace(t,"<b>"+t+"</b>"),description:x+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}if(-1!==(v=f.indexOf(t))){var w=Math.max(v-50,0),L=Math.min(v+t.length+50,f.length),k="..."+f.substring(w,L)+"...";k=k.replace(t,"<b>"+t+"</b>"),y?y.description=k:y={path:h.path,title:m,description:k,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}y&&this.list.push(y)}}}}}},c=(o(544),o(1)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(o){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:o.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(o.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(o.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(o.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},578:function(t,e,o){"use strict";o.r(e);var r=o(3),n=(o(23),o(17),o(19),o(342),o(341),o(343),o(547),o(548),o(18),o(6)),c=o(5),l=o(4),d=o(7),h=o(546),m=o(11),f={name:"AppDocs",layout:function(t){var e;return"apidocs-layout-".concat(null!==(e=t.route.params.file)&&void 0!==e?e:t.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:n.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:d.a,SearchBlock:h.a},head:function(){return this.isInfo?{title:"[".concat(this.file,"] - Info Docs"),description:""}:this.isComponents?{title:"[".concat(this.file,"] - Components Docs"),description:""}:{title:"["+this.file+"] - "+Object(m.c)(this.activeRoute,"summary",this.currentLocale),description:Object(m.c)(this.activeRoute,"description",this.currentLocale)}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$nuxt.context;try{t.currentLocale=null!==(r=o.route.params.locale)&&void 0!==r?r:o.route.meta[0].locale,t.type=null!==(n=o.route.params.type)&&void 0!==n?n:o.route.meta[0].type,t.path=null!==(c=o.route.params.path)&&void 0!==c?c:o.route.meta[0].path}catch(t){console.error(t),console.error(o.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"all-of Models",description:"Model composition using all-of",version:"1.0.0"},paths:{"all-of_employee":{get:{summary:"List of employees",responses:{200:{description:"Checkout the model tab to view object schemas defined using all-of",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Employee Details",allOf:[{properties:{Id:{type:"string",description:"Employee ID"}}},{type:"object",additionalProperties:!1,properties:{firstName:{type:"string",description:"First name"},lastName:{type:"string",description:"Last Name"}},title:"schemas"},{type:"object",additionalProperties:!1,properties:{jobTitle:{type:"string",description:"Job title"},department:{type:"string",description:"Department name"}},title:"schemas"}],title:"schemas"}}}}},path:"/all-of/employee",tags:["other"]}}},components:{schemas:{emp1:{type:"object",additionalProperties:!1,description:"Employee Details",allOf:[{properties:{Id:{type:"string",description:"Employee ID"}}},{type:"object",additionalProperties:!1,properties:{firstName:{type:"string",description:"First name"},lastName:{type:"string",description:"Last Name"}},title:"schemas"},{type:"object",additionalProperties:!1,properties:{jobTitle:{type:"string",description:"Job title"},department:{type:"string",description:"Department name"}},title:"schemas"}],title:"schemas"},emp2:{type:"object",additionalProperties:!1,properties:{Employee:{description:"Employee Details",allOf:[{properties:{Id:{type:"string",description:"Employee ID"}}},{type:"object",additionalProperties:!1,properties:{firstName:{type:"string",description:"First name"},lastName:{type:"string",description:"Last Name"}},title:"schemas"},{type:"object",additionalProperties:!1,properties:{jobTitle:{type:"string",description:"Job title"},department:{type:"string",description:"Department name"}},title:"schemas"}]}}},name:{type:"object",additionalProperties:!1,properties:{firstName:{type:"string",description:"First name"},lastName:{type:"string",description:"Last Name"}},title:"schemas"},job:{type:"object",additionalProperties:!1,properties:{jobTitle:{type:"string",description:"Job title"},department:{type:"string",description:"Department name"}},title:"schemas"}}}},locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/all-of/employee",path:"all-of_employee",type:"get",description:null}]}},fileName:"allof",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"allof",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path},deep:!0}},methods:{downloadYaml:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(e),link=document.createElement("a");link.href=o,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(o)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(e=this.options.doc.paths[this.path].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},y=o(1),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.path,path_doc:t.path_doc,file:t.file,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);