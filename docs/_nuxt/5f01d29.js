(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{543:function(e,t,r){var content=r(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},544:function(e,t,r){"use strict";r(543)},545:function(e,t,r){var o=r(8)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},546:function(e,t,r){"use strict";r(17),r(549),r(57),r(58),r(19),r(161);var o=r(11),n={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:o.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),r=t.indexOf(e);if(-1!==r){var o=Math.max(r-50,0),n=Math.min(r+e.length+50,t.length),l="..."+t.substring(o,n)+"...";l=l.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:l,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var c=this.doc.paths[path];for(var m in c){var h=c[m],d=this.tr(h,"summary",this.currentLocale).toLowerCase(),y=this.tr(h,"description",this.currentLocale).toLowerCase(),f=null,x=d.indexOf(e);if(-1!==x){var v=y.substring(0,100)+"...";f={path:h.path,title:d.replace(e,"<b>"+e+"</b>"),description:v+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(m,"/").concat(path)}}if(-1!==(x=y.indexOf(e))){var w=Math.max(x-50,0),j=Math.min(x+e.length+50,y.length),O="..."+y.substring(w,j)+"...";O=O.replace(e,"<b>"+e+"</b>"),f?f.description=O:f={path:h.path,title:d,description:O,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(m,"/").concat(path)}}f&&this.list.push(f)}}}}}},l=(r(544),r(1)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(r){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:r.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(r.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(r.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(r.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.a=component.exports},594:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(23),r(17),r(19),r(342),r(341),r(343),r(547),r(548),r(18),r(6)),l=r(5),c=r(4),m=r(7),h=r(546),d=r(11),y={name:"AppDocs",layout:function(e){var t;return"apidocs-layout-".concat(null!==(t=e.route.params.file)&&void 0!==t?t:e.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:n.a,OpenApiComponents:l.a,OpenApiRoute:c.a,NotFound:m.a,SearchBlock:h.a},head:function(){return this.isInfo?{title:"[".concat(this.file,"] - Info Docs"),description:""}:this.isComponents?{title:"[".concat(this.file,"] - Components Docs"),description:""}:{title:"["+this.file+"] - "+Object(d.c)(this.activeRoute,"summary",this.currentLocale),description:Object(d.c)(this.activeRoute,"description",this.currentLocale)}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.$nuxt.context;try{e.currentLocale=null!==(o=r.route.params.locale)&&void 0!==o?o:r.route.meta[0].locale,e.type=null!==(n=r.route.params.type)&&void 0!==n?n:r.route.meta[0].type,e.path=null!==(l=r.route.params.path)&&void 0!==l?l:r.route.meta[0].path}catch(e){console.error(e),console.error(r.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Providing Examples",description:"Providing Examples",version:"1.0.0"},paths:{"multiple-examples-in-request-parameters__path-param-1___path-param-2_":{get:{tags:["Providing Examples"],parameters:[{name:"path-param-1",in:"path",schema:{type:"string",default:"p1-opt-2"},examples:{example1:{value:"p1-opt-1"},example2:{value:"p1-opt-2"}}},{name:"path-param-2",in:"path",schema:{type:"string"},examples:{example1:{value:"p2-opt-1"},example2:{value:"p2-opt-2"}}},{name:"age",description:"Single Example",in:"query",schema:{type:"number"},example:24},{name:"country-code",description:"Multiple examples _(Notice `us` do not have a summary)_",in:"query",schema:{type:"string",default:" "},examples:{example1:{value:"uk",summary:"United Kingdom"},example2:{value:"us"},example3:{value:"ch",summary:"China"}}},{name:"marital-status",in:"query",schema:{type:"string",default:"unmarried"},examples:{example1:{value:"married"},example2:{value:"unmarried"},example3:{value:"widowed"}}},{name:"luckyNumbers",in:"query",schema:{type:"array",items:{type:"number"},minItems:4,maxItems:4,examples:["","   ",[10],[10,20,30,40]]}}],path:"/multiple-examples-in-request-parameters/{path-param-1}/{path-param-2}"}},"multiple-examples-by-response-type":{get:{description:"Multiple Examples provide for each media-type (`application/json` or `application/json`)",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer"},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string"},lastName:{description:"Last name",type:"string"}}}}},examples:{"valid-json":{summary:"Example with Valid JSON String",description:"If valid JSON is provided in the example, It will be displayed in JSON tree form. Allowing copy/expand/collapse functionality",value:"{\n  &quot;person&quot;: {\n    &quot;fullName&quot;: {\n      &quot;firstName&quot;: &quot;Mickey&quot;,\n      &quot;lastName&quot;: &quot;Mouse&quot;\n    },\n    &quot;age&quot;: &quot;9&quot;\n  }\n}\n"},"invalid-json":{summary:"Example with Invalid JSON String",description:"Invalid JSON is displayed in text-area as is",value:"{\n  person: {\n    fullName: {\n      firstName: Donald,\n      lastName: Duck\n    },\n    age: 10\n  }\n}\n"},"as-object":{summary:"Example specified as object",value:{fullName:{firstName:"Donald",lastName:"Duck"},age:10}}}},"application/xml":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer"},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string"},lastName:{description:"Last name",type:"string"}}}}},examples:{"example-1":{description:"Exmple 1 Description",value:"&lt;root&gt;\n  &lt;person&gt;\n    &lt;fullName&gt;\n      &lt;firstName&gt; Mickey &lt;/firstName&gt;\n      &lt;lastName&gt; Mouse &lt;/lastName&gt;\n    &lt;/fullName&gt;\n    &lt;age&gt; 9 &lt;/age&gt;\n  &lt;/person&gt;\n&lt;/root&gt;\n"}}}}}},path:"/multiple-examples-by-response-type"}},"single-example-by-response-type":{get:{summary:"Single Example at schema Level",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer"},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string"},lastName:{description:"Last name",type:"string"}}}}},example:"{\n  age: 10,\n  fullName: {\n    firstName: Donald,\n    lastName: Duck\n  }\n}\n"}}}},path:"/single-example-by-response-type"}},"example-with-array-1":{get:{summary:"Single Example at schema Level",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"array",items:{type:"integer",format:"int64"},example:[1,2,3,4],title:"schemas"}}}}},path:"/example-with-array-1"}},"example-with-array-2":{get:{summary:"Single Example at schema Level",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"array",items:{type:"integer",format:"int64",example:1},title:"schemas"}}}}},path:"/example-with-array-2"}},"object-example-for-a-schema":{get:{summary:"Single example having invalid JSON, under a Schema",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer"},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string"},lastName:{description:"Last name",type:"string"}}}},example:"{\n  person: {\n    fullName: {\n      firstName: Donald,\n      lastName: Duck\n    },\n    age: 10\n  }\n}\n"}}}}},path:"/object-example-for-a-schema"}},"array-example-for-a-schema":{get:{summary:"Single Example of Type Array Under a Schema",tags:["Providing Examples"],responses:{200:{description:"An array of currency codes",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{currencyCode:{type:"string"},evaluationDate:{type:"string",format:"date-time"}}},example:[{currencyCode:"USD",evaluationDate:"2017-07-21T17:32:28Z"},{currencyCode:"INR",evaluationDate:"2017-07-21T17:32:28Z"}],title:"schemas"}}}}},path:"/array-example-for-a-schema"}},"example-with-simple-object":{get:{summary:"Single Example of Type Array Under a Schema",tags:["Providing Examples"],responses:{200:{description:"An array of currency codes",content:{"application/json":{schema:{type:"object",properties:{name:{type:"string"},age:{type:"integer"}},example:{name:"name-1",age:1},title:"schemas"}}}}},path:"/example-with-simple-object"}},"per-field-example-with-root-as-object":{get:{summary:"Root node of the example is an object. and the object is constituted using field level example",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer",example:8},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string",example:"Daisy"},lastName:{description:"Last name",type:"string",example:"Duck"}}},dependents:{type:"array",items:{type:"object",properties:{dependentName:{type:"string"},relation:{type:"string"},age:{type:"number"}}}}}}}}}},path:"/per-field-example-with-root-as-object"}},"per-field-example-with-root-as-array":{get:{summary:"Root node of the example is an array. and the object is constituted using field level example",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{dependentName:{type:"string"},relation:{type:"string"},age:{type:"number"}},example:{dependentName:"Natasha",relation:"wife",age:28}}}}}}},path:"/per-field-example-with-root-as-array"}},"example-with-refs":{get:{description:"When a Schema definition is `provided` as a ref  \n(provide the example at schema-level)\n",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{amount:{type:"integer",description:"Amount"},currency:{description:"Currency Code",type:"string"}},title:"schemas"}},examples:{USD:{description:"Cost in `US Dollars`",value:"{\n  amount: 10,\n  currency: USD\n}\n"},INR:{description:"Cost in `Indian Rupees`",value:"{\n  amount: 700,\n  currency: INR\n}\n"}}}}}},path:"/example-with-refs"}},"multiple-example-in-request-body":{post:{summary:"Request body with multiple examples",tags:["Providing Examples"],requestBody:{description:"<p>Request body containing <strong>multiple</strong> examples</p>\n",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{amount:{type:"integer",description:"Amount"},currency:{description:"Currency Code",type:"string"}},title:"schemas"}},examples:{USD:{description:"Cost in `US Dollars`",value:"{\n  amount: 10,\n  currency: USD\n}\n"},INR:{description:"Cost in `Indian Rupees`",value:"{\n  amount: 700,\n  currency: INR\n}\n"}}}}},path:"/multiple-example-in-request-body"}},"object-containg-array-property-with-example":{get:{summary:"Object schema with array type property containing example",tags:["Providing Examples"],responses:{200:{description:"Object with array type property containing example",content:{"application/json":{schema:{type:"object",properties:{numberProp:{type:"number",example:1e3},stringProp:{type:"string",enum:["value0","value1"]},arrayProp:{type:"array",items:{type:"number"},example:[0,1,2]}},title:"schemas"}}}}},path:"/object-containg-array-property-with-example"}},"examples-anyOf":{get:{tags:["Providing Examples"],summary:"AnyOf schemas with examples as part of the subschema",responses:{200:{description:"AnyOf schemas with examples as part of the subschema",content:{"application/problem+json":{schema:{anyOf:[{title:"AnyOf example 1",description:"First example",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}},example:{foo:"foo",bar:42}},{title:"Second anyOf",description:"Another example",type:"array",items:{type:"object",properties:{foo:{type:"string"},quux:{type:"array",items:{type:"number"}}}},example:{foo:"foo",quux:[42,24]}},{title:"No example defined",type:"array",items:{type:"object",properties:{foo:{type:"string"},quux:{type:"array",items:{type:"number"}}}}}]}}}}},path:"/examples-anyOf"}},"examples-anyOf-with-general-properties":{get:{tags:["Providing Examples"],summary:"AnyOf schemas with general properties",responses:{200:{description:"AnyOf schemas with general properties",content:{"application/problem+json":{schema:{title:"A composed object",type:"object",properties:{common:{type:"string"},other:{type:"number"}},anyOf:[{title:"Schema 1",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}},example:{foo:"foo",bar:42}},{title:"Second schema",type:"object",properties:{baz:{type:"string",format:"url"}}}]}}}}},path:"/examples-anyOf-with-general-properties"}},"examples-oneOf":{get:{tags:["Providing Examples"],summary:"OneOf schema with examples as part of the subschema",responses:{200:{description:"OneOf schema with examples as part of the subschema",content:{"application/problem+json":{schema:{oneOf:[{title:"Schema 1",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}},example:{foo:"foo",bar:42}},{title:"Second schema",type:"object",properties:{baz:{type:"string",format:"url"}}}]}}}}},path:"/examples-oneOf"}},"examples-allOf":{get:{tags:["Providing Examples"],summary:"AllOf schemas with examples as part of the subschema",responses:{200:{description:"AllOf schemas with examples as part of the subschema",content:{"application/problem+json":{schema:{allOf:[{title:"Schema 1",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}}},{title:"Second schema",type:"object",properties:{baz:{type:"string",format:"url"}}}]}}}}},path:"/examples-allOf"}},"examples-allOf-anyOf":{get:{tags:["Providing Examples"],summary:"Combination of allOf & nested anyOf schemas",responses:{200:{description:"Combination of allOf & nested anyOf schemas",content:{"application/problem+json":{schema:{allOf:[{title:"Schema 1",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}}},{title:"Second schema",anyOf:[{type:"object",properties:{baz:{type:"string",format:"url"}}},{type:"object",properties:{foobar:{type:"string"}}}]}]}}}}},path:"/examples-allOf-anyOf"}}},components:{schemas:{cost:{type:"object",properties:{amount:{type:"integer",description:"Amount"},currency:{description:"Currency Code",type:"string"}},title:"schemas"},currencies:{type:"array",items:{type:"object",properties:{currencyCode:{type:"string"},evaluationDate:{type:"string",format:"date-time"}}},example:[{currencyCode:"USD",evaluationDate:"2017-07-21T17:32:28Z"},{currencyCode:"INR",evaluationDate:"2017-07-21T17:32:28Z"}],title:"schemas"},"ArrayOfInt-1":{type:"array",items:{type:"integer",format:"int64"},example:[1,2,3,4],title:"schemas"},"ArrayOfInt-2":{type:"array",items:{type:"integer",format:"int64",example:1},title:"schemas"},PersonObject:{type:"object",properties:{name:{type:"string"},age:{type:"integer"}},example:{name:"name-1",age:1},title:"schemas"},ObjectWithArrayPropExample:{type:"object",properties:{numberProp:{type:"number",example:1e3},stringProp:{type:"string",enum:["value0","value1"]},arrayProp:{type:"array",items:{type:"number"},example:[0,1,2]}},title:"schemas"}}}},locales:{en:"English"},pathsByTags:{"Providing Examples":{name:"Providing Examples",description:"",isOpen:!0,items:[{name:"/multiple-examples-in-request-parameters/{path-param-1}/{path-param-2}",path:"multiple-examples-in-request-parameters__path-param-1___path-param-2_",type:"get",description:null},{name:"/multiple-examples-by-response-type",path:"multiple-examples-by-response-type",type:"get",description:"Multiple Examples provide for each media-type (`application/json` or `application/json`)"},{name:"/single-example-by-response-type",path:"single-example-by-response-type",type:"get",description:null},{name:"/example-with-array-1",path:"example-with-array-1",type:"get",description:null},{name:"/example-with-array-2",path:"example-with-array-2",type:"get",description:null},{name:"/object-example-for-a-schema",path:"object-example-for-a-schema",type:"get",description:null},{name:"/array-example-for-a-schema",path:"array-example-for-a-schema",type:"get",description:null},{name:"/example-with-simple-object",path:"example-with-simple-object",type:"get",description:null},{name:"/per-field-example-with-root-as-object",path:"per-field-example-with-root-as-object",type:"get",description:null},{name:"/per-field-example-with-root-as-array",path:"per-field-example-with-root-as-array",type:"get",description:null},{name:"/example-with-refs",path:"example-with-refs",type:"get",description:"When a Schema definition is `provided` as a ref  \n(provide the example at schema-level)\n"},{name:"/multiple-example-in-request-body",path:"multiple-example-in-request-body",type:"post",description:null},{name:"/object-containg-array-property-with-example",path:"object-containg-array-property-with-example",type:"get",description:null},{name:"/examples-anyOf",path:"examples-anyOf",type:"get",description:null},{name:"/examples-anyOf-with-general-properties",path:"examples-anyOf-with-general-properties",type:"get",description:null},{name:"/examples-oneOf",path:"examples-oneOf",type:"get",description:null},{name:"/examples-allOf",path:"examples-allOf",type:"get",description:null},{name:"/examples-allOf-anyOf",path:"examples-allOf-anyOf",type:"get",description:null}]}},fileName:"examples",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"examples",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),link=document.createElement("a");link.href=r,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(r)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(t=this.options.doc.paths[this.path].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},f=r(1),component=Object(f.a)(y,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.path,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);