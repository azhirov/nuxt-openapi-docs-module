(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{539:function(e,t,r){var content=r(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(9).default)("01c05656",content,!0,{sourceMap:!1})},540:function(e,t,r){"use strict";r(539)},541:function(e,t,r){var n=r(8)((function(i){return i[1]}));n.push([e.i,"",""]),n.locals={},e.exports=n},542:function(e,t,r){"use strict";r(159),r(545),r(50),r(51),r(204),r(160);var n=r(11),o={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},destroyed:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:n.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),r=t.indexOf(e);if(-1!==r){var n=Math.max(r-50,0),o=Math.min(r+e.length+50,t.length),c="..."+t.substring(n,o)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var m in l){var d=l[m],h=this.tr(d,"summary",this.currentLocale).toLowerCase(),y=this.tr(d,"description",this.currentLocale).toLowerCase(),f=null,v=h.indexOf(e);if(-1!==v){var w=y.substring(0,100)+"...";f={path:d.path,title:h.replace(e,"<b>"+e+"</b>"),description:w+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(m,"/").concat(path)}}if(-1!==(v=y.indexOf(e))){var x=Math.max(v-50,0),j=Math.min(v+e.length+50,y.length),C="..."+y.substring(x,j)+"...";C=C.replace(e,"<b>"+e+"</b>"),f?f.description=C:f={path:d.path,title:h,description:C,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(m,"/").concat(path)}}f&&this.list.push(f)}}}}}},c=(r(540),r(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(r){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:r.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(r.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(r.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(r.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.a=component.exports},584:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(21),r(159),r(204),r(338),r(337),r(339),r(543),r(544),r(17),r(6)),c=r(5),l=r(4),m=r(7),d=r(542),h={name:"AppDocs",layout:function(e){var t;return"apidocs-layout-".concat(null!==(t=e.route.params.file)&&void 0!==t?t:e.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:o.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:m.a,SearchBlock:d.a},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.$nuxt.context;try{e.currentLocale=null!==(n=r.route.params.locale)&&void 0!==n?n:r.route.meta[0].locale,e.type=null!==(o=r.route.params.type)&&void 0!==o?o:r.route.meta[0].type,e.path=null!==(c=r.route.params.path)&&void 0!==c?c:r.route.meta[0].path}catch(e){console.error(e),console.error(r.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{description:"Contains all data types",version:"1.0.0",title:"Testing different data-types"},paths:{"nested-object-in-request-body":{post:{tags:["Test with various data types"],summary:"Request Body accepting a JSON",requestBody:{content:{"application/json":{schema:{type:"object",required:["name","photoUrls"],properties:{primaryEmail:{type:"string",format:"email"},dob:{description:"Date of Birth",type:"string",format:"date"},id:{title:"Unique ID",description:"SSN",allOf:[{type:"string",format:"uuid",title:"schemas"}]},category:{title:"Person Category",description:"Categories this person belongs to",allOf:[{type:"object",properties:{catId:{description:"Category ID",allOf:[{type:"string",format:"uuid",title:"schemas"}]},name:{description:"Category name",type:"string",deprecated:!0}},title:"schemas"}]},country:{type:"object",deprecated:!0,properties:{countryCode:{type:"string"},countryName:{type:"string"}}},dependentIds:{type:"array",deprecated:!0,description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"string",minLength:4,examples:{empty:{value:null,summary:"No Name"},"male-name":{value:"James",summary:"Male name"},"female-name":{value:"Ria",summary:"Female Name"},"gender-nutral-name":{value:"Charlie",summary:"Gender Neutral Name"}}},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{title:"TAGS",description:"Tags attached to the person",type:"array",minItems:1,items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"string",format:"uuid",title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}},maritalStatus:{type:"string",description:"Marital status in case of adult",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}},title:"schemas"}}}},path:"/nested-object-in-request-body"}},"nested-object":{get:{tags:["Test with various data types"],summary:"Nested object",description:'<p>Response schema is made up of multiple nested object, For simple schema check out <a href="#get-/simple-object">simple object</a></p>\n',responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",description:"<p>Description of <strong>Person</strong> object (Person must be bold)</p>\n",properties:{age:{description:"<p>Person&#39;s <strong>Age</strong> (age must be bold)</p>\n",type:"integer"},fullName:{description:"Person&#x27;s Full name",type:"object",properties:{firstName:{description:"_First name_ (First name should be italics)",type:"string"},lastName:{description:"`Last name` (last name must be monospaced)\n",type:"string"}}},dependentIds:{type:"array",description:"IDs of Dependents .",items:{type:"integer"}},dependentNames:{type:"array",description:"<p>Full Name of <strong>Dependents</strong> (Dependents must be bold).</p>\n",items:{type:"object",properties:{firstNameParts:{description:"<p>Parts of <strong>First Name</strong> (First Name must be bold)</p>\n",type:"object",properties:{firstName:{description:"This is a very very long description to test how will it show up on a API spec renderer tool such as RapiDoc. This lable must be big enough to wrap into next line",type:"string"},aLongFieldForTestingHowItShowsUpInSchemaModelWhenItEncountersLongField:{description:"Dependent Last Name",type:"string"}}},dependentLastName:{description:"Dependent Last Name",type:"string"}}}},hobbies:{type:"array",description:"array of objects",items:{type:"object"}}}}}}}},path:"/nested-object"}},"simple-object":{get:{tags:["Test with various data types"],summary:"Simple object",description:'<p>Response schema is a simple object, which contains only primitive properties. For complex schema check out <a href="#get-/nested-object">nested object</a></p>\n',responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{name:{description:"Person Name",type:"string"},age:{description:"Person Age",type:"integer",minimum:1,maximum:100}}}}}}},path:"/simple-object"}},person:{post:{tags:["Test with various data types"],summary:"Data Types with constraints",description:"Request-Parameters and Response-Schema contains various data types and constrains. Check out how is it desplayed below",parameters:[{name:"height",in:"query",description:"height (in inches)",required:!0,example:70,schema:{type:"integer",format:"int32",minimum:12,maximum:120}},{name:"full-name",in:"query",description:"Name of a person",required:!0,schema:{type:"string",minimum:3},examples:{empty:{value:null,summary:"No Name"},"male-name":{value:"James",summary:"Male name",description:"<p><code>Lorem ipsum dolor sit amet</code> consectetur adipisicing elit.</p>\n<ol>\n<li>Animi alias iste</li>\n<li>minus iure</li>\n<li>assumenda quisquam</li>\n<li>qui cum id ab nesciunt</li>\n</ol>\n<p><em>Impedit voluptatum asperiores obcaecati blanditiis</em> perferendis error repudiandae odit, veniam ab culpa exercitationem eaque,</p>\n<blockquote>\n<p>repellat <strong>laboriosam sequi dolor doloribus</strong> voluptas</p>\n</blockquote>\n<p> natus hic fugiat incidunt.</p>\n<ul>\n<li>laborum odio dolore</li>\n<li>corrupti tenetur</li>\n<li>nostrum aut sunt,</li>\n</ul>\n<p>quis vel neque. Vitae maxime aut assumenda ipsum.</p>\n"},"female-name":{value:"Ria",summary:"Female Name"},"gender-nutral-name":{value:"Charlie",summary:"Gender Neutral Name"}}},{name:"social-connection",in:"query",description:"facebook, linkedin, github, instagram, twitter etc",schema:{type:"string",format:"url"}},{name:"email",in:"query",required:!0,schema:{type:"string",format:"email"}},{name:"email-password",in:"query",required:!0,schema:{type:"string",format:"password"}},{name:"date-of-birth",in:"query",required:!0,schema:{type:"string",format:"date"}},{name:"phone-deprecated",in:"query","x-fill-example":"no",example:12345,deprecated:!0,schema:{type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/"}},{name:"marital-status",in:"query",required:!0,example:"married",schema:{type:"string",enum:["married","unmarried","widowed","unknown"],default:"unknown"}},{name:"interests",in:"query",required:!0,description:"__Exploded Array__ will send separate querystring parameter for each items eg - `interests=computers&interests=movies`",schema:{type:"array",example:["computers","reading",["music","movies"]],minItems:1,maxItems:3,items:{type:"string",enum:["computers","hiking","swiming","movies","music","dancing","reading","painting"],default:"hiking"}}},{name:"tags",in:"query",description:"__Not Exploded Array__ will send a single querystring parameter with comma separated string eg - `tags=tall,dark,handsome`",style:"form",explode:!1,schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["name","photoUrls"],properties:{primaryEmail:{type:"string",format:"email"},dob:{description:"Date of Birth",type:"string",format:"date"},id:{title:"Unique ID",description:"SSN",allOf:[{type:"string",format:"uuid",title:"schemas"}]},category:{title:"Person Category",description:"Categories this person belongs to",allOf:[{type:"object",properties:{catId:{description:"Category ID",allOf:[{type:"string",format:"uuid",title:"schemas"}]},name:{description:"Category name",type:"string",deprecated:!0}},title:"schemas"}]},country:{type:"object",deprecated:!0,properties:{countryCode:{type:"string"},countryName:{type:"string"}}},dependentIds:{type:"array",deprecated:!0,description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"string",minLength:4,examples:{empty:{value:null,summary:"No Name"},"male-name":{value:"James",summary:"Male name"},"female-name":{value:"Ria",summary:"Female Name"},"gender-nutral-name":{value:"Charlie",summary:"Gender Neutral Name"}}},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{title:"TAGS",description:"Tags attached to the person",type:"array",minItems:1,items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"string",format:"uuid",title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}},maritalStatus:{type:"string",description:"Marital status in case of adult",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}},title:"schemas"}}}}}},path:"/person"}}},components:{schemas:{category:{type:"object",properties:{catId:{description:"Category ID",allOf:[{type:"string",format:"uuid",title:"schemas"}]},name:{description:"Category name",type:"string",deprecated:!0}}},id:{type:"string",format:"uuid",title:"schemas"},person:{type:"object",required:["name","photoUrls"],properties:{primaryEmail:{type:"string",format:"email"},dob:{description:"Date of Birth",type:"string",format:"date"},id:{title:"Unique ID",description:"SSN",allOf:[{type:"string",format:"uuid",title:"schemas"}]},category:{title:"Person Category",description:"Categories this person belongs to",allOf:[{type:"object",properties:{catId:{description:"Category ID",allOf:[{type:"string",format:"uuid",title:"schemas"}]},name:{description:"Category name",type:"string",deprecated:!0}},title:"schemas"}]},country:{type:"object",deprecated:!0,properties:{countryCode:{type:"string"},countryName:{type:"string"}}},dependentIds:{type:"array",deprecated:!0,description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"string",minLength:4,examples:{empty:{value:null,summary:"No Name"},"male-name":{value:"James",summary:"Male name"},"female-name":{value:"Ria",summary:"Female Name"},"gender-nutral-name":{value:"Charlie",summary:"Gender Neutral Name"}}},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{title:"TAGS",description:"Tags attached to the person",type:"array",minItems:1,items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"string",format:"uuid",title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}},maritalStatus:{type:"string",description:"Marital status in case of adult",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}},title:"schemas"},tag:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"string",format:"uuid",title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}}}},locales:{en:"English"},pathsByTags:{"Test with various data types":{description:"",isOpen:!0,items:[{name:"/nested-object-in-request-body",path:"nested-object-in-request-body",type:"post",description:null},{name:"/nested-object",path:"nested-object",type:"get",description:"Response schema is made up of multiple nested object, For simple schema check out [simple object](#get-/simple-object)"},{name:"/simple-object",path:"simple-object",type:"get",description:"Response schema is a simple object, which contains only primitive properties. For complex schema check out [nested object](#get-/nested-object)"},{name:"/person",path:"person",type:"post",description:"Request-Parameters and Response-Schema contains various data types and constrains. Check out how is it desplayed below"}]}},fileName:"data-types"},path_doc:"docs",file:"data-types",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),link=document.createElement("a");link.href=r,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(r)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},simples:function(){return[{in:"queryString",name:"apikey",value:"1111"}]},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(t=this.options.doc.paths[this.path].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},y=r(1),component=Object(y.a)(h,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.path,path_doc:e.path_doc,file:e.file,simples:e.simples,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);