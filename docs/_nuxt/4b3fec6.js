(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{543:function(t,e,n){var content=n(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},544:function(t,e,n){"use strict";n(543)},545:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},546:function(t,e,n){"use strict";n(17),n(549),n(57),n(58),n(19),n(161);var o=n(11),r={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:o.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=e.indexOf(t);if(-1!==n){var o=Math.max(n-50,0),r=Math.min(n+t.length+50,e.length),l="..."+e.substring(o,r)+"...";l=l.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:l,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var c=this.doc.paths[path];for(var h in c){var d=c[h],m=this.tr(d,"summary",this.currentLocale).toLowerCase(),f=this.tr(d,"description",this.currentLocale).toLowerCase(),y=null,v=m.indexOf(t);if(-1!==v){var j=f.substring(0,100)+"...";y={path:d.path,title:m.replace(t,"<b>"+t+"</b>"),description:j+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}if(-1!==(v=f.indexOf(t))){var x=Math.max(v-50,0),w=Math.min(v+t.length+50,f.length),k="..."+f.substring(x,w)+"...";k=k.replace(t,"<b>"+t+"</b>"),y?y.description=k:y={path:d.path,title:m,description:k,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}y&&this.list.push(y)}}}}}},l=(n(544),n(1)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(n){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:n.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(n.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(n.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},595:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(23),n(17),n(19),n(342),n(341),n(343),n(547),n(548),n(18),n(6)),l=n(5),c=n(4),h=n(7),d=n(546),m=n(11),f={name:"AppDocs",layout:function(t){var e;return"apidocs-layout-".concat(null!==(e=t.route.params.file)&&void 0!==e?e:t.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:r.a,OpenApiComponents:l.a,OpenApiRoute:c.a,NotFound:h.a,SearchBlock:d.a},head:function(){return this.isInfo?{title:"[".concat(this.file,"] - Info Docs"),description:""}:this.isComponents?{title:"[".concat(this.file,"] - Components Docs"),description:""}:{title:"["+this.file+"] - "+Object(m.c)(this.activeRoute,"summary",this.currentLocale),description:Object(m.c)(this.activeRoute,"description",this.currentLocale)}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$nuxt.context;try{t.currentLocale=null!==(o=n.route.params.locale)&&void 0!==o?o:n.route.meta[0].locale,t.type=null!==(r=n.route.params.type)&&void 0!==r?r:n.route.meta[0].type,t.path=null!==(l=n.route.params.path)&&void 0!==l?l:n.route.meta[0].path}catch(t){console.error(t),console.error(n.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Various ways to upload files (binary content)",version:"1.0.0"},paths:{"upload-single-file":{post:{tags:["File Upload"],summary:"Uploads single file using form-data",description:'<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-single-file:</span>\n  <span class="hljs-attr">post:</span>\n    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">single</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">form-data</span>\n    <span class="hljs-attr">requestBody:</span>\n      <span class="hljs-attr">content:</span>\n        <span class="hljs-attr">multipart/form-data:</span>\n          <span class="hljs-attr">schema:</span>\n            <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n            <span class="hljs-attr">properties:</span>\n              <span class="hljs-attr">filename:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>      \n</code></pre>\n',requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{name:{type:"string"},photo:{type:"string",format:"binary"}}}}}},responses:{200:{summary:"OK"}},path:"/upload-single-file"}},"upload-multiple-file":{post:{tags:["File Upload"],summary:"Uploads multiple file using form-data and type as &#x27;array&#x27;",description:'<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-multiple-file:</span>\n  <span class="hljs-attr">post:</span>\n    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">multiple</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">form-data</span> <span class="hljs-string">and</span> <span class="hljs-string">type</span> <span class="hljs-string">as</span> <span class="hljs-string">&#x27;array&#x27;</span>\n    <span class="hljs-attr">requestBody:</span>\n      <span class="hljs-attr">content:</span>\n        <span class="hljs-attr">multipart/form-data:</span>\n          <span class="hljs-attr">schema:</span>\n            <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n            <span class="hljs-attr">properties:</span>\n              <span class="hljs-attr">filename:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>\n                <span class="hljs-attr">items:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>      \n</code></pre>\n',requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{name:{type:"string"},picture:{type:"array",items:{type:"string",format:"binary"}}}}}}},responses:{200:{description:"OK"}},path:"/upload-multiple-file"}},"upload-using-request-body":{post:{tags:["File Upload"],summary:"Uploads single file using request-body content-type as application/octet-stream",description:'<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-using-request-body:</span>\n  <span class="hljs-attr">post:</span>\n    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">single</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">request-body</span> <span class="hljs-string">content-type</span> <span class="hljs-string">as</span> <span class="hljs-string">application/octet-stream</span>\n    <span class="hljs-attr">requestBody:</span>\n      <span class="hljs-attr">content:</span>\n        <span class="hljs-attr">application/octet-stream:</span>\n          <span class="hljs-attr">schema:</span>\n            <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n            <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>\n</code></pre>\n',requestBody:{content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"successful operation"}},path:"/upload-using-request-body"}}}},locales:{en:"English"},pathsByTags:{"File Upload":{name:"File Upload",description:"",isOpen:!0,items:[{name:"/upload-single-file",path:"upload-single-file",type:"post",description:"```yaml\n/upload-single-file:\n  post:\n    summary: Uploads single file using form-data\n    requestBody:\n      content:\n        multipart/form-data:\n          schema:\n            type: object\n            properties:\n              filename:\n                type: string\n                format: binary      \n```\n"},{name:"/upload-multiple-file",path:"upload-multiple-file",type:"post",description:"```yaml\n/upload-multiple-file:\n  post:\n    summary: Uploads multiple file using form-data and type as 'array'\n    requestBody:\n      content:\n        multipart/form-data:\n          schema:\n            type: object\n            properties:\n              filename:\n                type: array\n                items:\n                  type: string\n                  format: binary      \n```\n"},{name:"/upload-using-request-body",path:"upload-using-request-body",type:"post",description:"```yaml\n/upload-using-request-body:\n  post:\n    summary: Uploads single file using request-body content-type as application/octet-stream\n    requestBody:\n      content:\n        application/octet-stream:\n          schema:\n            type: string\n            format: binary\n```\n"}]}},fileName:"file-upload",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"file-upload",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path},deep:!0}},methods:{downloadYaml:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(e=this.options.doc.paths[this.path].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},y=n(1),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.path,path_doc:t.path_doc,file:t.file,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);