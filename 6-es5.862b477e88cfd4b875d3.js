!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=i(e);if(t){var r=i(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+XFV":function(e,t,n){"use strict";n.r(t),t.default="source: LocalDataSource; // add a property to the component\n\nconstructor() {\n  this.source = new LocalDataSource(this.data); // create the source\n}"},JpPN:function(e,t,n){"use strict";n.r(t),t.default='// ...\n\n@Component({ \n  template: `\n    <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">\n    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>\n  `\n})\n// ...'},PJTM:function(e,t,n){"use strict";n.r(t),t.default='// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>\n  `\n})\n// ...'},cd1G:function(e,t,n){"use strict";n.r(t),t.default="@NgModule({\n  imports: [\n    // ...\n  ],\n  entryComponents: [CustomEditorComponent, CustomRenderComponent],\n  declarations: [\n    // ...\n    CustomEditorComponent,\n    CustomRenderComponent,\n  ],\n})"},cfa9:function(e,t,n){"use strict";n.r(t),t.default="onSearch(query: string = '') {\n  this.source.setFilter([\n    // fields we want to include in the search\n    {\n      field: 'id',\n      search: query\n    },\n    {\n      field: 'name',\n      search: query\n    },\n    {\n      field: 'username',\n      search: query\n    },\n    {\n      field: 'email',\n      search: query\n    }\n  ], false); \n  // second parameter specifying whether to perform 'AND' or 'OR' search \n  // (meaning all columns should contain search query or at least one)\n  // 'AND' by default, so changing to 'OR' by setting false here\n}\n"},gQwm:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-example-source',\n  styles: [],\n  template: `\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\nexport class BasicExampleSourceComponent {\n\n  settings = {\n    columns: {\n      id: {\n        title: 'ID',\n        filter: false\n      },\n      name: {\n        title: 'Full Name',\n        filter: false\n      },\n      username: {\n        title: 'User Name',\n        filter: false\n      },\n      email: {\n        title: 'Email',\n        filter: false\n      }\n    }\n  };\n  \n  data = [\n    // ... our data here\n  ];\n  \n  source: LocalDataSource;\n  \n  constructor() {\n    this.source = new LocalDataSource(this.data);\n  }\n\n  onSearch(query: string = '') {\n    this.source.setFilter([\n      // fields we want to include in the search\n      {\n        field: 'id',\n        search: query\n      },\n      {\n        field: 'name',\n        search: query\n      },\n      {\n        field: 'username',\n        search: query\n      },\n      {\n        field: 'email',\n        search: query\n      }\n    ], false);\n    // second parameter specifying whether to perform 'AND' or 'OR' search \n    // (meaning all columns should contain search query or at least one)\n    // 'AND' by default, so changing to 'OR' by setting false here\n  }\n}\n"},qS9M:function(t,a,i){"use strict";i.r(a),i.d(a,"ExamplesModule",(function(){return le}));var o,c,l,m,u,d,b,p,h,f,g,v,y,w,N,M,C,x,k,S,D,_=i("sEIs"),E=i("2kYt"),P=i("nIj0"),O=i("vobO"),J=i("u5VG"),L=i("PCNd"),F=i("EM62"),q=i("aZ8m"),A=((o=function e(){s(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=F.Cb({type:o,selectors:[["examples"]],decls:20,vars:0,consts:[["tagline","Examples"],[1,"main-content","with-sidebar"],[1,"fixed-sidebar"],[1,"examples-menu"],["routerLink","./using-filters","routerLinkActive","active"],["routerLink","./populate-from-server","routerLinkActive","active"],["routerLink","./custom-editors-viewers","routerLinkActive","active"],["routerLink","./various","routerLinkActive","active"],[1,"main-content-body"]],template:function(e,t){1&e&&(F.Jb(0,"header-component",0),F.Nb(1,"div",1),F.Nb(2,"nav",2),F.Nb(3,"h4"),F.mc(4,"Examples"),F.Mb(),F.Nb(5,"ul",3),F.Nb(6,"li"),F.Nb(7,"a",4),F.mc(8,"Standalone & Advanced filters"),F.Mb(),F.Mb(),F.Nb(9,"li"),F.Nb(10,"a",5),F.mc(11,"Loading data from server"),F.Mb(),F.Mb(),F.Nb(12,"li"),F.Nb(13,"a",6),F.mc(14,"Custom editors and viewers"),F.Mb(),F.Mb(),F.Nb(15,"li"),F.Nb(16,"a",7),F.mc(17,"Various"),F.Mb(),F.Mb(),F.Mb(),F.Mb(),F.Nb(18,"div",8),F.Jb(19,"router-outlet"),F.Mb(),F.Mb())},directives:[q.a,_.b,_.a,_.d],styles:[".with-sidebar[_ngcontent-%COMP%]{position:relative}.with-sidebar[_ngcontent-%COMP%]   .main-content-body[_ngcontent-%COMP%]{padding-left:16rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]{display:block;margin-top:2rem;position:fixed;top:0;padding:290px 1rem 0;width:16rem;font-size:.875rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   .back-top[_ngcontent-%COMP%]{display:none;margin-bottom:1rem;font-weight:700}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1rem;list-style:none;margin-bottom:.875rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar.scrolled[_ngcontent-%COMP%]{position:fixed;top:0}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar.scrolled[_ngcontent-%COMP%]   .back-top[_ngcontent-%COMP%]{display:block}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   .examples-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{font-weight:700}@media screen and (max-width:64em){.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]{display:none}}@media screen and (min-width:42em) and (max-width:64em){.with-sidebar[_ngcontent-%COMP%]{padding:2rem 4rem}}@media screen and (max-width:42em){.with-sidebar[_ngcontent-%COMP%]{padding:2rem 1rem}}"]}),o),R=i("FT7q"),B=i("/RtY"),j=((h=function(){function e(){s(this,e),this.settings={columns:{id:{title:"ID",filter:!1},name:{title:"Full Name",filter:!1},username:{title:"User Name",filter:!1},email:{title:"Email",filter:!1}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz"}],this.source=new J.c(this.data)}return r(e,[{key:"onSearch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.source.setFilter([{field:"id",search:e},{field:"name",search:e},{field:"username",search:e},{field:"email",search:e}],!1)}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=F.Cb({type:h,selectors:[["basic-example-source"]],decls:3,vars:2,consts:[["type","text","placeholder","Search...",1,"search",3,"keydown.enter"],["search",""],[3,"settings","source"]],template:function(e,t){if(1&e){var n=F.Ob();F.Nb(0,"input",0,1),F.Ub("keydown.enter",(function(){F.ec(n);var e=F.dc(1);return t.onSearch(e.value)})),F.Mb(),F.Jb(2,"ng2-smart-table",2)}2&e&&(F.xb(2),F.Xb("settings",t.settings)("source",t.source))},directives:[B.a],encapsulation:2}),h),V=((p=function e(){s(this,e),this.data=[{id:4,name:"Patricia Lebsack",email:"Julianne.OConner@kory.org",passed:"Yes"},{id:5,name:"Chelsey Dietrich",email:"Lucio_Hettinger@annie.ca",passed:"No"},{id:6,name:"Mrs. Dennis Schulist",email:"Karley_Dach@jasper.info",passed:"Yes"},{id:7,name:"Kurtis Weissnat",email:"Telly.Hoeger@billy.biz",passed:"No"},{id:8,name:"Nicholas Runolfsdottir V",email:"Sherwood@rosamond.me",passed:"Yes"},{id:9,name:"Glenna Reichert",email:"Chaim_McDermott@dana.io",passed:"No"},{id:10,name:"Clementina DuBuque",email:"Rey.Padberg@karina.biz",passed:"No"},{id:11,name:"Nicholas DuBuque",email:"Rey.Padberg@rosamond.biz",passed:"Yes"}],this.settings={columns:{id:{title:"ID"},name:{title:"Full Name",filter:{type:"list",config:{selectText:"Select...",list:[{value:"Glenna Reichert",title:"Glenna Reichert"},{value:"Kurtis Weissnat",title:"Kurtis Weissnat"},{value:"Chelsey Dietrich",title:"Chelsey Dietrich"}]}}},email:{title:"Email",filter:{type:"completer",config:{completer:{data:this.data,searchFields:"email",titleField:"email"}}}},passed:{title:"Passed",filter:{type:"checkbox",config:{true:"Yes",false:"No",resetText:"clear"}}}}}}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=F.Cb({type:p,selectors:[["advanced-example-filters"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&F.Jb(0,"ng2-smart-table",0),2&e&&F.Xb("settings",t.settings)("source",t.data)},directives:[B.a],encapsulation:2}),p),T=((b=function e(){s(this,e),this.snippets={sourceRequire:i("v80l").default,createSource:i("+XFV").default,sourceTemplate:i("PJTM").default,search:i("JpPN").default,searchTable:i("cfa9").default,sourceFull:i("gQwm").default,hideFilters:i("x5t9").default}}).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=F.Cb({type:b,selectors:[["filter-examples"]],decls:101,vars:7,consts:[["id","separate-filter","href","#separate-filter","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","data-source","href","#data-source","aria-hidden","true",1,"anchor"],["highlight","",1,"typescript"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/basic-example-source.component.ts","target","_blank",1,"source"],["id","filters","href","#filters","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/advanced-example-filters.component.ts","target","_blank",1,"source"]],template:function(e,t){1&e&&(F.Nb(0,"h2"),F.mc(1,"Customized filters examples"),F.Mb(),F.Nb(2,"h3"),F.Nb(3,"a",0),F.Jb(4,"span",1),F.Mb(),F.mc(5,"Standalone Filter Example"),F.Mb(),F.Nb(6,"p"),F.mc(7," Say you don't need to have a filter field in the each table column or the requirements says that search field should be placed outside of the table?"),F.Jb(8,"br"),F.mc(9," Fortunately this is super easy to achieve, to do this we need to slightly modify our basic component example.\n"),F.Mb(),F.Nb(10,"h4"),F.Nb(11,"a",2),F.Jb(12,"span",1),F.Mb(),F.mc(13,"Data Source"),F.Mb(),F.Nb(14,"p"),F.mc(15," First thing you need to know is that all the data operations against the table "),F.Nb(16,"i"),F.mc(17,"must"),F.Mb(),F.mc(18," be done using the "),F.Nb(19,"strong"),F.mc(20,"DataSource"),F.Mb(),F.mc(21," table property. DataSource is an abstraction around your data which allows you easily modify the table data or subscribe to events to modify the table behaviour.\n"),F.Mb(),F.Nb(22,"p"),F.mc(23," To access the DataSource we either can take it from the table or pass it instead of our "),F.Nb(24,"i"),F.mc(25,"data array"),F.Mb(),F.mc(26,". Let's do the second option as it requires less code and is more demonstrative. Let's import the DataSource class by modifying the import statement:\n"),F.Mb(),F.Nb(27,"pre"),F.mc(28,"  "),F.Nb(29,"code",3),F.mc(30),F.Mb(),F.mc(31,"\n"),F.Mb(),F.Nb(32,"p"),F.mc(33," Note that the import now contains a "),F.Nb(34,"strong"),F.mc(35,"LocalDataSource"),F.Mb(),F.mc(36," class (the word "),F.Nb(37,"i"),F.mc(38,"Local"),F.Mb(),F.mc(39," here means that the data is processed locally in a browser, not on the server side)."),F.Jb(40,"br"),F.mc(41," Then let's create a DataSource instance and pass our data array into it as a constructor parameter:\n"),F.Mb(),F.Nb(42,"pre"),F.mc(43,"  "),F.Nb(44,"code",3),F.mc(45),F.Mb(),F.mc(46,"\n"),F.Mb(),F.Nb(47,"p"),F.mc(48," Now let's pass the source to the table instead of the data array:\n"),F.Mb(),F.Nb(49,"pre"),F.mc(50,"  "),F.Nb(51,"code",3),F.mc(52),F.Mb(),F.mc(53,"\n"),F.Mb(),F.Nb(54,"p"),F.mc(55," At this point if you look at the result there will be no difference comparing to the first example. Basically if you pass an array to the table component first thing it will do is wrap LocalDataSource object around your array as we did here manually."),F.Jb(56,"br"),F.mc(57," Now, having the DataSource we basically could change the table data in any way we need to - filter it, sort, paginate to some page, create/delete/modify the rows. In our example we need to be able to filter the data outside of the table, firstly let's add a search filed to the template with a listener:\n"),F.Mb(),F.Nb(58,"pre"),F.mc(59,"  "),F.Nb(60,"code",3),F.mc(61),F.Mb(),F.mc(62,"\n"),F.Mb(),F.Nb(63,"p"),F.mc(64," And the listener code which asks the DataSource to filter the data:\n"),F.Mb(),F.Nb(65,"pre"),F.mc(66,"  "),F.Nb(67,"code",3),F.mc(68),F.Mb(),F.mc(69,"\n"),F.Mb(),F.Nb(70,"p"),F.mc(71," Last thing, let's hide the default table filters to not conflict with our standalone one:\n"),F.Mb(),F.Nb(72,"pre"),F.mc(73,"  "),F.Nb(74,"code",3),F.mc(75),F.Mb(),F.mc(76,"\n"),F.Mb(),F.Nb(77,"p"),F.mc(78," And done! Now the table has a standalone search field:\n"),F.Mb(),F.Nb(79,"div"),F.Jb(80,"basic-example-source"),F.Mb(),F.Nb(81,"p"),F.mc(82," Same way you can modify the data of the table, for example by adding a row from a third party form or listening to some external event. Here's a full component code:\n"),F.Mb(),F.Nb(83,"pre",4),F.mc(84,"  "),F.Nb(85,"a",5),F.mc(86,"Demo Source"),F.Mb(),F.mc(87,"\n  "),F.Nb(88,"code",3),F.mc(89),F.Mb(),F.mc(90,"\n"),F.Mb(),F.Nb(91,"h3"),F.Nb(92,"a",6),F.Jb(93,"span",1),F.Mb(),F.mc(94,"Checkbox, Select and Completer filter types"),F.Mb(),F.Nb(95,"p"),F.mc(96," An example on how to use the built-in column filter types:\n"),F.Mb(),F.Nb(97,"div",4),F.Nb(98,"a",7),F.mc(99,"Demo Source"),F.Mb(),F.Jb(100,"advanced-example-filters"),F.Mb()),2&e&&(F.xb(30),F.nc(t.snippets.sourceRequire),F.xb(15),F.nc(t.snippets.createSource),F.xb(7),F.nc(t.snippets.sourceTemplate),F.xb(9),F.nc(t.snippets.search),F.xb(7),F.nc(t.snippets.searchTable),F.xb(7),F.nc(t.snippets.hideFilters),F.xb(14),F.nc(t.snippets.sourceFull))},directives:[R.a,j,V],encapsulation:2}),b),I=((d=function(){function e(){s(this,e)}return r(e,[{key:"getData",value:function(){var e=this;return new Promise((function(t,n){setTimeout((function(){t(e.generateData())}),2e3)}))}},{key:"getNewExampleObj",value:function(e){return{id:e=void 0!==e?e:1e3*Math.random(),name:"Jack London "+e,username:"jack_london_"+e,email:"jack_london_".concat(e,"@example.com")}}},{key:"generateData",value:function(){for(var t=[],n=0;n<e.DATA_SIZE;n++)t.push(this.getNewExampleObj(n));return t}}]),e}()).DATA_SIZE=500,d.\u0275fac=function(e){return new(e||d)},d.\u0275prov=F.Eb({token:d,factory:d.\u0275fac}),d),H=((u=function e(t){var n=this;s(this,e),this.service=t,this.settings={columns:{id:{title:"ID",editable:!1,addable:!1},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}},this.source=new J.c,this.service.getData().then((function(e){n.source.load(e)}))}).\u0275fac=function(e){return new(e||u)(F.Ib(I))},u.\u0275cmp=F.Cb({type:u,selectors:[["basic-example-load"]],features:[F.wb([I])],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&F.Jb(0,"ng2-smart-table",0),2&e&&F.Xb("settings",t.settings)("source",t.source)},directives:[B.a],encapsulation:2}),u),K=((m=function e(t){s(this,e),this.settings={columns:{id:{title:"ID"},albumId:{title:"Album"},title:{title:"Title"},url:{title:"Url"}}},this.source=new J.e(t,{endPoint:"https://jsonplaceholder.typicode.com/photos"})}).\u0275fac=function(e){return new(e||m)(F.Ib(O.a))},m.\u0275cmp=F.Cb({type:m,selectors:[["advanced-example-server"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&F.Jb(0,"ng2-smart-table",0),2&e&&F.Xb("settings",t.settings)("source",t.source)},directives:[B.a],encapsulation:2}),m),U=((l=function e(){s(this,e)}).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=F.Cb({type:l,selectors:[["server-examples"]],decls:22,vars:0,consts:[["id","from-server","href","#from-server","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/server/basic-example-load.component.ts","target","_blank",1,"source"],["id","server","href","#server","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/server/advanced-example-server.component.ts","target","_blank",1,"source"]],template:function(e,t){1&e&&(F.Nb(0,"h2"),F.mc(1,"Get data from external source example"),F.Mb(),F.Nb(2,"h3"),F.Nb(3,"a",0),F.Jb(4,"span",1),F.Mb(),F.mc(5,"Loading From Server Example"),F.Mb(),F.Nb(6,"p"),F.mc(7," This example shows how to pass the data loaded from some API to the table DataSource.\n"),F.Mb(),F.Nb(8,"div",2),F.Nb(9,"a",3),F.mc(10,"Demo Source"),F.Mb(),F.Jb(11,"basic-example-load"),F.Mb(),F.Nb(12,"h3"),F.Nb(13,"a",4),F.Jb(14,"span",1),F.Mb(),F.mc(15,"Server Data Source Example"),F.Mb(),F.Nb(16,"p"),F.mc(17," An example on how to load data user Server DataSource:\n"),F.Mb(),F.Nb(18,"div",2),F.Nb(19,"a",5),F.mc(20,"Demo Source"),F.Mb(),F.Jb(21,"advanced-example-server"),F.Mb())},directives:[H,K],encapsulation:2}),l),z=((c=function e(){s(this,e),this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",comments:"Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.",passed:"Yes"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",comments:"Vix iudico graecis in? Malis eirmod consectetuer duo ut?\n                Mel an aeterno vivendum accusata, qui ne amet stet definitiones.",passed:"Yes"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",comments:"Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.",passed:"No"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",comments:"Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?",passed:"Yes"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",comments:"Quo viris appellantur an, pro id eirmod oblique iuvaret,\n                timeam omittam comprehensam ad eam? Eos id dico gubergren,\n                cum dicant qualisque ea, id vim ferri moderatius?",passed:"No"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",comments:"Audire appareat sententiae qui no. Sed no rebum vitae quidam.",passed:"No"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",comments:"Mel dicat sanctus accusata ut! Eu sit choro vituperata,\n                qui cu quod gubergren elaboraret, mollis vulputate ex cum!",passed:"Yes"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",comments:"Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.",passed:"No"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",comments:"In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.",passed:"No"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",comments:"Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.\n                 Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?",passed:"Yes"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz",comments:"Lorem ipsum dolor sit amet, mea dolorum detraxit ea?",passed:"No"}],this.settings={columns:{id:{title:"ID"},name:{title:"Full Name",editor:{type:"completer",config:{completer:{data:this.data,searchFields:"name",titleField:"name",descriptionField:"email"}}}},username:{title:"User Name",type:"html",editor:{type:"list",config:{list:[{value:"Antonette",title:"Antonette"},{value:"Bret",title:"Bret"},{value:"<b>Samantha</b>",title:"Samantha"}]}}},email:{title:"Email",type:"string"},comments:{title:"Comments",editor:{type:"textarea"}},passed:{title:"Passed",editor:{type:"checkbox",config:{true:"Yes",false:"No"}}}}}}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=F.Cb({type:c,selectors:[["advanced-example-types"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&F.Jb(0,"ng2-smart-table",0),2&e&&F.Xb("settings",t.settings)("source",t.data)},directives:[B.a],encapsulation:2}),c),G=["name"],X=["url"],Y=["htmlValue"],W=((g=function(t){e(i,t);var a=n(i);function i(){return s(this,i),a.call(this)}return r(i,[{key:"ngAfterViewInit",value:function(){""!==this.cell.newValue&&(this.name.nativeElement.value=this.getUrlName(),this.url.nativeElement.value=this.getUrlHref())}},{key:"updateValue",value:function(){this.cell.newValue="<a href='".concat(this.url.nativeElement.value,"'>").concat(this.name.nativeElement.value,"</a>")}},{key:"getUrlName",value:function(){return this.htmlValue.nativeElement.innerText}},{key:"getUrlHref",value:function(){return this.htmlValue.nativeElement.querySelector("a").getAttribute("href")}}]),i}(J.a)).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=F.Cb({type:g,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&(F.sc(G,!0),F.sc(X,!0),F.sc(Y,!0)),2&e&&(F.cc(n=F.Vb())&&(t.name=n.first),F.cc(n=F.Vb())&&(t.url=n.first),F.cc(n=F.Vb())&&(t.htmlValue=n.first))},features:[F.ub],decls:9,vars:10,consts:[[1,"form-control","short-input",3,"ngClass","name","disabled","placeholder","click","keyup","keydown.enter","keydown.esc"],["name",""],["url",""],[3,"hidden","innerHTML"],["htmlValue",""]],template:function(e,t){1&e&&(F.mc(0," Name: "),F.Nb(1,"input",0,1),F.Ub("click",(function(e){return t.onClick.emit(e)}))("keyup",(function(){return t.updateValue()}))("keydown.enter",(function(e){return t.onEdited.emit(e)}))("keydown.esc",(function(){return t.onStopEditing.emit()})),F.Mb(),F.Jb(3,"br"),F.mc(4," Url: "),F.Nb(5,"input",0,2),F.Ub("click",(function(e){return t.onClick.emit(e)}))("keyup",(function(){return t.updateValue()}))("keydown.enter",(function(e){return t.onEdited.emit(e)}))("keydown.esc",(function(){return t.onStopEditing.emit()})),F.Mb(),F.Jb(7,"div",3,4)),2&e&&(F.xb(1),F.Xb("ngClass",t.inputClass)("name",t.cell.getId())("disabled",!t.cell.isEditable())("placeholder",t.cell.getTitle()),F.xb(4),F.Xb("ngClass",t.inputClass)("name",t.cell.getId())("disabled",!t.cell.isEditable())("placeholder",t.cell.getTitle()),F.xb(2),F.Xb("hidden",!0)("innerHTML",t.cell.getValue(),F.fc))},directives:[E.h],encapsulation:2}),g),Q=((f=function(){function e(){s(this,e)}return r(e,[{key:"ngOnInit",value:function(){this.renderValue=this.value.toString().toUpperCase()}}]),e}()).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=F.Cb({type:f,selectors:[["ng-component"]],inputs:{value:"value",rowData:"rowData"},decls:1,vars:1,template:function(e,t){1&e&&F.mc(0),2&e&&F.oc(" ",t.renderValue," ")},encapsulation:2}),f),Z=i("Ohay"),$=i("mWib"),ee=((k=function(t){e(i,t);var a=n(i);function i(){var e;return s(this,i),(e=a.call(this)).inputControl=new P.c,e}return r(i,[{key:"ngOnInit",value:function(){var e=this;this.inputControl.valueChanges.pipe(Object(Z.a)(),Object($.a)(this.delay)).subscribe((function(t){e.query=null!==t?e.inputControl.value.toString():"",e.setFilter()}))}},{key:"ngOnChanges",value:function(e){e.query&&(this.query=e.query.currentValue,this.inputControl.setValue(this.query))}}]),i}(J.b)).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=F.Cb({type:k,selectors:[["ng-component"]],features:[F.ub,F.vb],decls:2,vars:3,consts:[["type","number",1,"form-control",3,"ngClass","formControl","placeholder"],["number",""]],template:function(e,t){1&e&&F.Jb(0,"input",0,1),2&e&&F.Xb("ngClass",t.inputClass)("formControl",t.inputControl)("placeholder",t.column.title)},directives:[P.l,P.b,E.h,P.i,P.d],encapsulation:2}),k),te=((x=function e(){s(this,e),this.data=[{id:1,name:"Leanne Graham",username:"Bret",link:'<a href="http://www.google.com">Google</a>'},{id:2,name:"Ervin Howell",username:"Antonette",link:'<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>'},{id:3,name:"Clementine Bauch",username:"Samantha",link:'<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>'},{id:4,name:"Patricia Lebsack",username:"Karianne",link:'<a href="https://github.com/akveo/blur-admin">Blur Admin</a>'}],this.settings={columns:{id:{title:"ID",filter:{type:"custom",component:ee}},name:{title:"Full Name",type:"custom",renderComponent:Q},username:{title:"User Name"},link:{title:"Link",type:"html",editor:{type:"custom",component:W}}}}}).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=F.Cb({type:x,selectors:[["advanced-example-custom-editor"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&F.Jb(0,"ng2-smart-table",0),2&e&&F.Xb("settings",t.settings)("source",t.data)},directives:[B.a],encapsulation:2}),x),ne=((C=function(){function e(){s(this,e),this.save=new F.n}return r(e,[{key:"ngOnInit",value:function(){this.renderValue=this.value.toString().toUpperCase()}},{key:"onClick",value:function(){this.save.emit(this.rowData)}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=F.Cb({type:C,selectors:[["button-view"]],inputs:{value:"value",rowData:"rowData"},outputs:{save:"save"},decls:2,vars:1,consts:[[3,"click"]],template:function(e,t){1&e&&(F.Nb(0,"button",0),F.Ub("click",(function(){return t.onClick()})),F.mc(1),F.Mb()),2&e&&(F.xb(1),F.nc(t.renderValue))},encapsulation:2}),C),ae=((M=function(){function e(){s(this,e),this.settings={columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"},button:{title:"Button",type:"custom",renderComponent:ne,onComponentInitFunction:function(e){e.save.subscribe((function(e){alert(e.name+" saved!")}))}}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",button:"Button #1"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",button:"Button #2"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",button:"Button #3"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",button:"Button #4"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",button:"Button #5"}]}return r(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=F.Cb({type:M,selectors:[["basic-example-button-view"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&F.Jb(0,"ng2-smart-table",0),2&e&&F.Xb("settings",t.settings)("source",t.data)},directives:[B.a],encapsulation:2}),M),ie=((N=function(){function e(){s(this,e),this.settings={actions:{custom:[{name:"view",title:"View "},{name:"edit",title:"Edit "},{name:"delete",title:"Delete "},{name:"duplicate",title:"Duplicate "}]},columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"}]}return r(e,[{key:"onCustom",value:function(e){alert("Custom event '".concat(e.action,"' fired on row \u2116: ").concat(e.data.id))}}]),e}()).\u0275fac=function(e){return new(e||N)},N.\u0275cmp=F.Cb({type:N,selectors:[["basic-example-custom-actions"]],decls:1,vars:2,consts:[[3,"settings","source","custom"]],template:function(e,t){1&e&&(F.Nb(0,"ng2-smart-table",0),F.Ub("custom",(function(e){return t.onCustom(e)})),F.Mb()),2&e&&F.Xb("settings",t.settings)("source",t.data)},directives:[B.a],encapsulation:2}),N),oe=((w=function e(){s(this,e),this.snippets={customEditorModule:i("cd1G").default}}).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=F.Cb({type:w,selectors:[["custom-edit-view-examples"]],decls:74,vars:1,consts:[["id","types","href","#types","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts","target","_blank",1,"source"],["id","custom-editor-renderer","href","#custom-editor-renderer","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts","target","_blank",1,"source"],["highlight","",1,"typescript"],["id","buttonview","href","#buttonview","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts","target","_blank",1,"source"],["id","multiselect","href","#customactions","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts","target","_blank",1,"source"]],template:function(e,t){1&e&&(F.Nb(0,"h2"),F.mc(1,"Customized edit and view cells examples"),F.Mb(),F.Nb(2,"h3"),F.Nb(3,"a",0),F.Jb(4,"span",1),F.Mb(),F.mc(5,"Select, Completer and Textarea column types"),F.Mb(),F.Nb(6,"p"),F.mc(7," An example on how to use select, completer, textarea column types:\n"),F.Mb(),F.Nb(8,"div",2),F.Nb(9,"a",3),F.mc(10,"Demo Source"),F.Mb(),F.Jb(11,"advanced-example-types"),F.Mb(),F.Nb(12,"h3"),F.Nb(13,"a",4),F.Jb(14,"span",1),F.Mb(),F.mc(15,"Custom editor/renderer column type"),F.Mb(),F.Nb(16,"p"),F.mc(17,"An example on how to use a custom cell editor and/or custom cell renderer:"),F.Mb(),F.Nb(18,"div",2),F.Nb(19,"a",5),F.mc(20,"Demo Source"),F.Mb(),F.Jb(21,"advanced-example-custom-editor"),F.Mb(),F.Nb(22,"p"),F.mc(23,"When implementing a custom editor or renderer remember to add it to the "),F.Nb(24,"code"),F.mc(25,"entryComponents"),F.Mb(),F.mc(26," and to the "),F.Nb(27,"code"),F.mc(28,"declarations"),F.Mb(),F.mc(29," part of your module"),F.Mb(),F.Nb(30,"pre"),F.mc(31,"  "),F.Nb(32,"code",6),F.mc(33),F.Mb(),F.mc(34,"\n"),F.Mb(),F.Nb(35,"p"),F.Nb(36,"b"),F.mc(37,"For the custom cell editor:"),F.Mb(),F.Jb(38,"br"),F.mc(39," To inherit the methods needed to interact with the table you can either extend the component with the "),F.Nb(40,"code"),F.mc(41,"DefaultEditor"),F.Mb(),F.mc(42," class or implement the "),F.Nb(43,"code"),F.mc(44,"Editor"),F.Mb(),F.mc(45," interface and reproduce the same methods on your component."),F.Jb(46,"br"),F.Nb(47,"b"),F.mc(48,"For the custom cell renderer:"),F.Mb(),F.Jb(49,"br"),F.mc(50," In this example the custom component is applying a "),F.Nb(51,"code"),F.mc(52,".toUpperCase()"),F.Mb(),F.mc(53," to one of the columns. You can implement the ViewCell interface to make sure you are setting up your component correctly.\n"),F.Mb(),F.Nb(54,"h3"),F.Nb(55,"a",7),F.Jb(56,"span",1),F.Mb(),F.mc(57,"Button View\n"),F.Mb(),F.Nb(58,"p"),F.mc(59,"An example on how to use custom button view:"),F.Mb(),F.Nb(60,"div",2),F.Nb(61,"a",8),F.mc(62,"Demo Source"),F.Mb(),F.Jb(63,"basic-example-button-view"),F.Mb(),F.Nb(64,"h3"),F.Nb(65,"a",9),F.Jb(66,"span",1),F.Mb(),F.mc(67,"Custom actions"),F.Mb(),F.Nb(68,"p"),F.mc(69,"An example on how to use custom actions:"),F.Mb(),F.Nb(70,"div",2),F.Nb(71,"a",10),F.mc(72,"Demo Source"),F.Mb(),F.Jb(73,"basic-example-custom-actions"),F.Mb()),2&e&&(F.xb(33),F.nc(t.snippets.customEditorModule))},directives:[z,te,R.a,ae,ie],encapsulation:2}),w),re=((y=function(){function e(){s(this,e),this.settings={delete:{confirmDelete:!0},add:{confirmCreate:!0},edit:{confirmSave:!0},columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",notShownField:!0},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",notShownField:!0},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",notShownField:!1},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",notShownField:!1},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",notShownField:!1},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",notShownField:!1},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",notShownField:!1},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",notShownField:!0},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",notShownField:!1},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",notShownField:!1},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz",notShownField:!0}],this.source=new J.c(this.data)}return r(e,[{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}},{key:"onSaveConfirm",value:function(e){window.confirm("Are you sure you want to save?")?(e.newData.name+=" + added in code",e.confirm.resolve(e.newData)):e.confirm.reject()}},{key:"onCreateConfirm",value:function(e){window.confirm("Are you sure you want to create?")?(e.newData.name+=" + added in code",e.confirm.resolve(e.newData)):e.confirm.reject()}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=F.Cb({type:y,selectors:[["advance-example-comfirm"]],decls:1,vars:2,consts:[[3,"settings","source","deleteConfirm","editConfirm","createConfirm"]],template:function(e,t){1&e&&(F.Nb(0,"ng2-smart-table",0),F.Ub("deleteConfirm",(function(e){return t.onDeleteConfirm(e)}))("editConfirm",(function(e){return t.onSaveConfirm(e)}))("createConfirm",(function(e){return t.onCreateConfirm(e)})),F.Mb()),2&e&&F.Xb("settings",t.settings)("source",t.source)},directives:[B.a],encapsulation:2}),y),se=((v=function e(){s(this,e),this.settings={selectMode:"multi",columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz"}]}).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=F.Cb({type:v,selectors:[["basic-example-multi-select"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&F.Jb(0,"ng2-smart-table",0),2&e&&F.Xb("settings",t.settings)("source",t.data)},directives:[B.a],encapsulation:2}),v),ce=[{path:"",component:A,children:[{path:"",redirectTo:"using-filters"},{path:"using-filters",component:T},{path:"populate-from-server",component:U},{path:"custom-editors-viewers",component:oe},{path:"various",component:(S=function e(){s(this,e)},S.\u0275fac=function(e){return new(e||S)},S.\u0275cmp=F.Cb({type:S,selectors:[["various-examples"]],decls:22,vars:0,consts:[["id","confirm","href","#confirm","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/various/advanced-example-confirm.component.ts","target","_blank",1,"source"],["id","multiselect","href","#multiselect","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/various/basic-example-multi-select.component.ts","target","_blank",1,"source"]],template:function(e,t){1&e&&(F.Nb(0,"h2"),F.mc(1,"Various examples"),F.Mb(),F.Nb(2,"h3"),F.Nb(3,"a",0),F.Jb(4,"span",1),F.Mb(),F.mc(5,"Confirm Action Example"),F.Mb(),F.Nb(6,"p"),F.mc(7," An example on how to confirm an action before it's applied to the table:\n"),F.Mb(),F.Nb(8,"div",2),F.Nb(9,"a",3),F.mc(10,"Demo Source"),F.Mb(),F.Jb(11,"advance-example-comfirm"),F.Mb(),F.Nb(12,"h3"),F.Nb(13,"a",4),F.Jb(14,"span",1),F.Mb(),F.mc(15,"Multi select"),F.Mb(),F.Nb(16,"p"),F.mc(17,"An example on how to use multi select mode:"),F.Mb(),F.Nb(18,"div",2),F.Nb(19,"a",5),F.mc(20,"Demo Source"),F.Mb(),F.Jb(21,"basic-example-multi-select"),F.Mb())},directives:[re,se],encapsulation:2}),S)}]}],le=((D=function e(){s(this,e)}).\u0275mod=F.Gb({type:D}),D.\u0275inj=F.Fb({factory:function(e){return new(e||D)},imports:[[E.b,O.b,P.e,P.m,_.c.forChild(ce),J.d,L.a]]}),D)},v80l:function(e,t,n){"use strict";n.r(t),t.default="import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';"},x5t9:function(e,t,n){"use strict";n.r(t),t.default="settings = {\n  columns: {\n    id: {\n      title: 'ID',\n      filter: false\n    },\n    name: {\n      title: 'Full Name',\n      filter: false\n    },\n    username: {\n      title: 'User Name',\n      filter: false\n    },\n    email: {\n      title: 'Email',\n      filter: false\n    }\n  }\n};"}}])}();