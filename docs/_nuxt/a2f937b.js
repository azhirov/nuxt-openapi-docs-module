(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{539:function(t,e,o){var content=o(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("01c05656",content,!0,{sourceMap:!1})},540:function(t,e,o){"use strict";o(539)},541:function(t,e,o){var r=o(8)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},542:function(t,e,o){"use strict";o(159),o(545),o(50),o(51),o(204),o(160);var r=o(11),n={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},destroyed:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),o=e.indexOf(t);if(-1!==o){var r=Math.max(o-50,0),n=Math.min(o+t.length+50,e.length),c="..."+e.substring(r,n)+"...";c=c.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var h in l){var d=l[h],f=this.tr(d,"summary",this.currentLocale).toLowerCase(),m=this.tr(d,"description",this.currentLocale).toLowerCase(),v=null,y=f.indexOf(t);if(-1!==y){var w=m.substring(0,100)+"...";v={path:d.path,title:f.replace(t,"<b>"+t+"</b>"),description:w+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}if(-1!==(y=m.indexOf(t))){var x=Math.max(y-50,0),_=Math.min(y+t.length+50,m.length),C="..."+m.substring(x,_)+"...";C=C.replace(t,"<b>"+t+"</b>"),v?v.description=C:v={path:d.path,title:f,description:C,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}v&&this.list.push(v)}}}}}},c=(o(540),o(1)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(o){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:o.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(o.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(o.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(o.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},577:function(t,e,o){"use strict";o.r(e);var r=o(3),n=(o(21),o(159),o(204),o(338),o(337),o(339),o(543),o(544),o(17),o(6)),c=o(5),l=o(4),h=o(7),d=o(542),f={name:"AppDocs",layout:function(t){var e;return"apidocs-layout-".concat(null!==(e=t.route.params.file)&&void 0!==e?e:t.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:n.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:h.a,SearchBlock:d.a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$nuxt.context;try{t.currentLocale=null!==(r=o.route.params.locale)&&void 0!==r?r:o.route.meta[0].locale,t.type=null!==(n=o.route.params.type)&&void 0!==n?n:o.route.meta[0].type,t.path=null!==(c=o.route.params.path)&&void 0!==c?c:o.route.meta[0].path}catch(t){console.error(t),console.error(o.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.1",info:{title:"Authentication Test Case",description:"Demonstrate various authentication methods supported by RapiDoc"},servers:[{url:"https://reqres.in/api/"}],paths:{users__userId_:{get:{description:"Uses HTTP Basic Auth",parameters:[{in:"path",name:"userId",schema:{type:"integer",example:3},required:!0,description:"Numeric ID of the user to get"}],security:[{"http-basic":[]},{petstore_auth:["write:pets","read:pets"]}],path:"/users/{userId}",tags:["other"]}},users:{get:{description:"Uses API Key Auth",security:[{api_key1:[]}],path:"/users",tags:["other"]}}},components:{securitySchemes:{"http-basic":{type:"http",scheme:"basic"},api_key1:{type:"apiKey",name:"Authorization",in:"header"},petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}}}}},locales:{en:"English"},pathsByTags:{other:{description:"",isOpen:!0,items:[{name:"/users/{userId}",path:"users__userId_",type:"get",description:"Uses HTTP Basic Auth"},{name:"/users",path:"users",type:"get",description:"Uses API Key Auth"}]}},fileName:"auth-test1"},path_doc:"docs",file:"auth-test1",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path},deep:!0}},methods:{downloadYaml:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(e),link=document.createElement("a");link.href=o,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(o)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},simples:function(){return[{in:"queryString",name:"apikey",value:"1111"}]},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(e=this.options.doc.paths[this.path].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},m=o(1),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.path,path_doc:t.path_doc,file:t.file,simples:t.simples,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);