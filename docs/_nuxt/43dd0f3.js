(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{539:function(t,e,n){var content=n(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("01c05656",content,!0,{sourceMap:!1})},540:function(t,e,n){"use strict";n(539)},541:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},542:function(t,e,n){"use strict";n(159),n(545),n(50),n(51),n(204),n(160);var o=n(11),r={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},destroyed:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:o.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=e.indexOf(t);if(-1!==n){var o=Math.max(n-50,0),r=Math.min(n+t.length+50,e.length),c="..."+e.substring(o,r)+"...";c=c.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var h in l){var d=l[h],m=this.tr(d,"summary",this.currentLocale).toLowerCase(),f=this.tr(d,"description",this.currentLocale).toLowerCase(),y=null,v=m.indexOf(t);if(-1!==v){var x=f.substring(0,100)+"...";y={path:d.path,title:m.replace(t,"<b>"+t+"</b>"),description:x+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}if(-1!==(v=f.indexOf(t))){var w=Math.max(v-50,0),k=Math.min(v+t.length+50,f.length),O="..."+f.substring(w,k)+"...";O=O.replace(t,"<b>"+t+"</b>"),y?y.description=O:y={path:d.path,title:m,description:O,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}y&&this.list.push(y)}}}}}},c=(n(540),n(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(n){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:n.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(n.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(n.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},588:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(21),n(159),n(204),n(338),n(337),n(339),n(543),n(544),n(17),n(6)),c=n(5),l=n(4),h=n(7),d=n(542),m={name:"AppDocs",layout:function(t){var e;return"apidocs-layout-".concat(null!==(e=t.route.params.file)&&void 0!==e?e:t.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:r.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:h.a,SearchBlock:d.a},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$nuxt.context;try{t.currentLocale=null!==(o=n.route.params.locale)&&void 0!==o?o:n.route.meta[0].locale,t.type=null!==(r=n.route.params.type)&&void 0!==r?r:n.route.meta[0].type,t.path=null!==(c=n.route.params.path)&&void 0!==c?c:n.route.meta[0].path}catch(t){console.error(t),console.error(n.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Providing example in nested refs",version:"1.0"},paths:{"nested-refs-with-example":{get:{summary:"List Bank Accounts",responses:{200:{description:"OK",content:{"application/json":{schema:{title:"schemas",type:"object",properties:{bank_accounts:{type:"array",items:{title:"schemas",type:"object",allOf:[{properties:{name:{type:"string"},type:{type:"string"}},title:"schemas"},{properties:{url:{type:"string",readOnly:!0},current_balance:{type:"number",readOnly:!0}},title:"schemas"}],example:{name:"account-name",type:"StandardBankAccount",url:"https://api.freeagent.com/v2/bank_accounts/4093",current_balance:28742}}}}}}}}},path:"/nested-refs-with-example",tags:["other"]}}},components:{schemas:{EditableBankAccountParams:{properties:{name:{type:"string"},type:{type:"string"}}},ReadOnlyBankAccountParams:{properties:{url:{type:"string",readOnly:!0},current_balance:{type:"number",readOnly:!0}}},BankAccount:{title:"BankAccount",type:"object",allOf:[{properties:{name:{type:"string"},type:{type:"string"}},title:"schemas"},{properties:{url:{type:"string",readOnly:!0},current_balance:{type:"number",readOnly:!0}},title:"schemas"}],example:{name:"account-name",type:"StandardBankAccount",url:"https://api.freeagent.com/v2/bank_accounts/4093",current_balance:28742}},ListBankAccountsResponse:{title:"schemas",type:"object",properties:{bank_accounts:{type:"array",items:{title:"schemas",type:"object",allOf:[{properties:{name:{type:"string"},type:{type:"string"}},title:"schemas"},{properties:{url:{type:"string",readOnly:!0},current_balance:{type:"number",readOnly:!0}},title:"schemas"}],example:{name:"account-name",type:"StandardBankAccount",url:"https://api.freeagent.com/v2/bank_accounts/4093",current_balance:28742}}}}}}},tags:[{name:"Person",description:"Person Datatype"}]},locales:{en:"English"},pathsByTags:{other:{description:"",isOpen:!0,items:[{name:"/nested-refs-with-example",path:"nested-refs-with-example",type:"get",description:null}]}},fileName:"example-with-nested-refs"},path_doc:"docs",file:"example-with-nested-refs",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path},deep:!0}},methods:{downloadYaml:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},simples:function(){return[{in:"queryString",name:"apikey",value:"1111"}]},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(e=this.options.doc.paths[this.path].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},f=n(1),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.path,path_doc:t.path_doc,file:t.file,simples:t.simples,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);