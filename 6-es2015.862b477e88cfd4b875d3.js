(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+XFV":function(e,t,n){"use strict";n.r(t),t.default="source: LocalDataSource; // add a property to the component\n\nconstructor() {\n  this.source = new LocalDataSource(this.data); // create the source\n}"},JpPN:function(e,t,n){"use strict";n.r(t),t.default='// ...\n\n@Component({ \n  template: `\n    <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">\n    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>\n  `\n})\n// ...'},PJTM:function(e,t,n){"use strict";n.r(t),t.default='// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>\n  `\n})\n// ...'},cd1G:function(e,t,n){"use strict";n.r(t),t.default="@NgModule({\n  imports: [\n    // ...\n  ],\n  entryComponents: [CustomEditorComponent, CustomRenderComponent],\n  declarations: [\n    // ...\n    CustomEditorComponent,\n    CustomRenderComponent,\n  ],\n})"},cfa9:function(e,t,n){"use strict";n.r(t),t.default="onSearch(query: string = '') {\n  this.source.setFilter([\n    // fields we want to include in the search\n    {\n      field: 'id',\n      search: query\n    },\n    {\n      field: 'name',\n      search: query\n    },\n    {\n      field: 'username',\n      search: query\n    },\n    {\n      field: 'email',\n      search: query\n    }\n  ], false); \n  // second parameter specifying whether to perform 'AND' or 'OR' search \n  // (meaning all columns should contain search query or at least one)\n  // 'AND' by default, so changing to 'OR' by setting false here\n}\n"},gQwm:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-example-source',\n  styles: [],\n  template: `\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\nexport class BasicExampleSourceComponent {\n\n  settings = {\n    columns: {\n      id: {\n        title: 'ID',\n        filter: false\n      },\n      name: {\n        title: 'Full Name',\n        filter: false\n      },\n      username: {\n        title: 'User Name',\n        filter: false\n      },\n      email: {\n        title: 'Email',\n        filter: false\n      }\n    }\n  };\n  \n  data = [\n    // ... our data here\n  ];\n  \n  source: LocalDataSource;\n  \n  constructor() {\n    this.source = new LocalDataSource(this.data);\n  }\n\n  onSearch(query: string = '') {\n    this.source.setFilter([\n      // fields we want to include in the search\n      {\n        field: 'id',\n        search: query\n      },\n      {\n        field: 'name',\n        search: query\n      },\n      {\n        field: 'username',\n        search: query\n      },\n      {\n        field: 'email',\n        search: query\n      }\n    ], false);\n    // second parameter specifying whether to perform 'AND' or 'OR' search \n    // (meaning all columns should contain search query or at least one)\n    // 'AND' by default, so changing to 'OR' by setting false here\n  }\n}\n"},qS9M:function(e,t,n){"use strict";n.r(t),n.d(t,"ExamplesModule",(function(){return V}));var a=n("sEIs"),i=n("2kYt"),s=n("nIj0"),r=n("vobO"),o=n("u5VG"),c=n("PCNd"),l=n("EM62"),m=n("aZ8m");let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["examples"]],decls:20,vars:0,consts:[["tagline","Examples"],[1,"main-content","with-sidebar"],[1,"fixed-sidebar"],[1,"examples-menu"],["routerLink","./using-filters","routerLinkActive","active"],["routerLink","./populate-from-server","routerLinkActive","active"],["routerLink","./custom-editors-viewers","routerLinkActive","active"],["routerLink","./various","routerLinkActive","active"],[1,"main-content-body"]],template:function(e,t){1&e&&(l.Jb(0,"header-component",0),l.Nb(1,"div",1),l.Nb(2,"nav",2),l.Nb(3,"h4"),l.mc(4,"Examples"),l.Mb(),l.Nb(5,"ul",3),l.Nb(6,"li"),l.Nb(7,"a",4),l.mc(8,"Standalone & Advanced filters"),l.Mb(),l.Mb(),l.Nb(9,"li"),l.Nb(10,"a",5),l.mc(11,"Loading data from server"),l.Mb(),l.Mb(),l.Nb(12,"li"),l.Nb(13,"a",6),l.mc(14,"Custom editors and viewers"),l.Mb(),l.Mb(),l.Nb(15,"li"),l.Nb(16,"a",7),l.mc(17,"Various"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(18,"div",8),l.Jb(19,"router-outlet"),l.Mb(),l.Mb())},directives:[m.a,a.b,a.a,a.d],styles:[".with-sidebar[_ngcontent-%COMP%]{position:relative}.with-sidebar[_ngcontent-%COMP%]   .main-content-body[_ngcontent-%COMP%]{padding-left:16rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]{display:block;margin-top:2rem;position:fixed;top:0;padding:290px 1rem 0;width:16rem;font-size:.875rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   .back-top[_ngcontent-%COMP%]{display:none;margin-bottom:1rem;font-weight:700}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1rem;list-style:none;margin-bottom:.875rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar.scrolled[_ngcontent-%COMP%]{position:fixed;top:0}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar.scrolled[_ngcontent-%COMP%]   .back-top[_ngcontent-%COMP%]{display:block}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   .examples-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{font-weight:700}@media screen and (max-width:64em){.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]{display:none}}@media screen and (min-width:42em) and (max-width:64em){.with-sidebar[_ngcontent-%COMP%]{padding:2rem 4rem}}@media screen and (max-width:42em){.with-sidebar[_ngcontent-%COMP%]{padding:2rem 1rem}}"]}),e})();var d=n("FT7q"),b=n("/RtY");let p=(()=>{class e{constructor(){this.settings={columns:{id:{title:"ID",filter:!1},name:{title:"Full Name",filter:!1},username:{title:"User Name",filter:!1},email:{title:"Email",filter:!1}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz"}],this.source=new o.c(this.data)}onSearch(e=""){this.source.setFilter([{field:"id",search:e},{field:"name",search:e},{field:"username",search:e},{field:"email",search:e}],!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["basic-example-source"]],decls:3,vars:2,consts:[["type","text","placeholder","Search...",1,"search",3,"keydown.enter"],["search",""],[3,"settings","source"]],template:function(e,t){if(1&e){const e=l.Ob();l.Nb(0,"input",0,1),l.Ub("keydown.enter",(function(){l.ec(e);const n=l.dc(1);return t.onSearch(n.value)})),l.Mb(),l.Jb(2,"ng2-smart-table",2)}2&e&&(l.xb(2),l.Xb("settings",t.settings)("source",t.source))},directives:[b.a],encapsulation:2}),e})(),h=(()=>{class e{constructor(){this.data=[{id:4,name:"Patricia Lebsack",email:"Julianne.OConner@kory.org",passed:"Yes"},{id:5,name:"Chelsey Dietrich",email:"Lucio_Hettinger@annie.ca",passed:"No"},{id:6,name:"Mrs. Dennis Schulist",email:"Karley_Dach@jasper.info",passed:"Yes"},{id:7,name:"Kurtis Weissnat",email:"Telly.Hoeger@billy.biz",passed:"No"},{id:8,name:"Nicholas Runolfsdottir V",email:"Sherwood@rosamond.me",passed:"Yes"},{id:9,name:"Glenna Reichert",email:"Chaim_McDermott@dana.io",passed:"No"},{id:10,name:"Clementina DuBuque",email:"Rey.Padberg@karina.biz",passed:"No"},{id:11,name:"Nicholas DuBuque",email:"Rey.Padberg@rosamond.biz",passed:"Yes"}],this.settings={columns:{id:{title:"ID"},name:{title:"Full Name",filter:{type:"list",config:{selectText:"Select...",list:[{value:"Glenna Reichert",title:"Glenna Reichert"},{value:"Kurtis Weissnat",title:"Kurtis Weissnat"},{value:"Chelsey Dietrich",title:"Chelsey Dietrich"}]}}},email:{title:"Email",filter:{type:"completer",config:{completer:{data:this.data,searchFields:"email",titleField:"email"}}}},passed:{title:"Passed",filter:{type:"checkbox",config:{true:"Yes",false:"No",resetText:"clear"}}}}}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["advanced-example-filters"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&l.Jb(0,"ng2-smart-table",0),2&e&&l.Xb("settings",t.settings)("source",t.data)},directives:[b.a],encapsulation:2}),e})(),f=(()=>{class e{constructor(){this.snippets={sourceRequire:n("v80l").default,createSource:n("+XFV").default,sourceTemplate:n("PJTM").default,search:n("JpPN").default,searchTable:n("cfa9").default,sourceFull:n("gQwm").default,hideFilters:n("x5t9").default}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["filter-examples"]],decls:101,vars:7,consts:[["id","separate-filter","href","#separate-filter","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","data-source","href","#data-source","aria-hidden","true",1,"anchor"],["highlight","",1,"typescript"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/basic-example-source.component.ts","target","_blank",1,"source"],["id","filters","href","#filters","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/advanced-example-filters.component.ts","target","_blank",1,"source"]],template:function(e,t){1&e&&(l.Nb(0,"h2"),l.mc(1,"Customized filters examples"),l.Mb(),l.Nb(2,"h3"),l.Nb(3,"a",0),l.Jb(4,"span",1),l.Mb(),l.mc(5,"Standalone Filter Example"),l.Mb(),l.Nb(6,"p"),l.mc(7," Say you don't need to have a filter field in the each table column or the requirements says that search field should be placed outside of the table?"),l.Jb(8,"br"),l.mc(9," Fortunately this is super easy to achieve, to do this we need to slightly modify our basic component example.\n"),l.Mb(),l.Nb(10,"h4"),l.Nb(11,"a",2),l.Jb(12,"span",1),l.Mb(),l.mc(13,"Data Source"),l.Mb(),l.Nb(14,"p"),l.mc(15," First thing you need to know is that all the data operations against the table "),l.Nb(16,"i"),l.mc(17,"must"),l.Mb(),l.mc(18," be done using the "),l.Nb(19,"strong"),l.mc(20,"DataSource"),l.Mb(),l.mc(21," table property. DataSource is an abstraction around your data which allows you easily modify the table data or subscribe to events to modify the table behaviour.\n"),l.Mb(),l.Nb(22,"p"),l.mc(23," To access the DataSource we either can take it from the table or pass it instead of our "),l.Nb(24,"i"),l.mc(25,"data array"),l.Mb(),l.mc(26,". Let's do the second option as it requires less code and is more demonstrative. Let's import the DataSource class by modifying the import statement:\n"),l.Mb(),l.Nb(27,"pre"),l.mc(28,"  "),l.Nb(29,"code",3),l.mc(30),l.Mb(),l.mc(31,"\n"),l.Mb(),l.Nb(32,"p"),l.mc(33," Note that the import now contains a "),l.Nb(34,"strong"),l.mc(35,"LocalDataSource"),l.Mb(),l.mc(36," class (the word "),l.Nb(37,"i"),l.mc(38,"Local"),l.Mb(),l.mc(39," here means that the data is processed locally in a browser, not on the server side)."),l.Jb(40,"br"),l.mc(41," Then let's create a DataSource instance and pass our data array into it as a constructor parameter:\n"),l.Mb(),l.Nb(42,"pre"),l.mc(43,"  "),l.Nb(44,"code",3),l.mc(45),l.Mb(),l.mc(46,"\n"),l.Mb(),l.Nb(47,"p"),l.mc(48," Now let's pass the source to the table instead of the data array:\n"),l.Mb(),l.Nb(49,"pre"),l.mc(50,"  "),l.Nb(51,"code",3),l.mc(52),l.Mb(),l.mc(53,"\n"),l.Mb(),l.Nb(54,"p"),l.mc(55," At this point if you look at the result there will be no difference comparing to the first example. Basically if you pass an array to the table component first thing it will do is wrap LocalDataSource object around your array as we did here manually."),l.Jb(56,"br"),l.mc(57," Now, having the DataSource we basically could change the table data in any way we need to - filter it, sort, paginate to some page, create/delete/modify the rows. In our example we need to be able to filter the data outside of the table, firstly let's add a search filed to the template with a listener:\n"),l.Mb(),l.Nb(58,"pre"),l.mc(59,"  "),l.Nb(60,"code",3),l.mc(61),l.Mb(),l.mc(62,"\n"),l.Mb(),l.Nb(63,"p"),l.mc(64," And the listener code which asks the DataSource to filter the data:\n"),l.Mb(),l.Nb(65,"pre"),l.mc(66,"  "),l.Nb(67,"code",3),l.mc(68),l.Mb(),l.mc(69,"\n"),l.Mb(),l.Nb(70,"p"),l.mc(71," Last thing, let's hide the default table filters to not conflict with our standalone one:\n"),l.Mb(),l.Nb(72,"pre"),l.mc(73,"  "),l.Nb(74,"code",3),l.mc(75),l.Mb(),l.mc(76,"\n"),l.Mb(),l.Nb(77,"p"),l.mc(78," And done! Now the table has a standalone search field:\n"),l.Mb(),l.Nb(79,"div"),l.Jb(80,"basic-example-source"),l.Mb(),l.Nb(81,"p"),l.mc(82," Same way you can modify the data of the table, for example by adding a row from a third party form or listening to some external event. Here's a full component code:\n"),l.Mb(),l.Nb(83,"pre",4),l.mc(84,"  "),l.Nb(85,"a",5),l.mc(86,"Demo Source"),l.Mb(),l.mc(87,"\n  "),l.Nb(88,"code",3),l.mc(89),l.Mb(),l.mc(90,"\n"),l.Mb(),l.Nb(91,"h3"),l.Nb(92,"a",6),l.Jb(93,"span",1),l.Mb(),l.mc(94,"Checkbox, Select and Completer filter types"),l.Mb(),l.Nb(95,"p"),l.mc(96," An example on how to use the built-in column filter types:\n"),l.Mb(),l.Nb(97,"div",4),l.Nb(98,"a",7),l.mc(99,"Demo Source"),l.Mb(),l.Jb(100,"advanced-example-filters"),l.Mb()),2&e&&(l.xb(30),l.nc(t.snippets.sourceRequire),l.xb(15),l.nc(t.snippets.createSource),l.xb(7),l.nc(t.snippets.sourceTemplate),l.xb(9),l.nc(t.snippets.search),l.xb(7),l.nc(t.snippets.searchTable),l.xb(7),l.nc(t.snippets.hideFilters),l.xb(14),l.nc(t.snippets.sourceFull))},directives:[d.a,p,h],encapsulation:2}),e})(),g=(()=>{class e{getData(){return new Promise((e,t)=>{setTimeout(()=>{e(this.generateData())},2e3)})}getNewExampleObj(e){return{id:e=void 0!==e?e:1e3*Math.random(),name:"Jack London "+e,username:"jack_london_"+e,email:`jack_london_${e}@example.com`}}generateData(){const t=[];for(let n=0;n<e.DATA_SIZE;n++)t.push(this.getNewExampleObj(n));return t}}return e.DATA_SIZE=500,e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Eb({token:e,factory:e.\u0275fac}),e})(),v=(()=>{class e{constructor(e){this.service=e,this.settings={columns:{id:{title:"ID",editable:!1,addable:!1},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}},this.source=new o.c,this.service.getData().then(e=>{this.source.load(e)})}}return e.\u0275fac=function(t){return new(t||e)(l.Ib(g))},e.\u0275cmp=l.Cb({type:e,selectors:[["basic-example-load"]],features:[l.wb([g])],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&l.Jb(0,"ng2-smart-table",0),2&e&&l.Xb("settings",t.settings)("source",t.source)},directives:[b.a],encapsulation:2}),e})(),y=(()=>{class e{constructor(e){this.settings={columns:{id:{title:"ID"},albumId:{title:"Album"},title:{title:"Title"},url:{title:"Url"}}},this.source=new o.e(e,{endPoint:"https://jsonplaceholder.typicode.com/photos"})}}return e.\u0275fac=function(t){return new(t||e)(l.Ib(r.a))},e.\u0275cmp=l.Cb({type:e,selectors:[["advanced-example-server"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&l.Jb(0,"ng2-smart-table",0),2&e&&l.Xb("settings",t.settings)("source",t.source)},directives:[b.a],encapsulation:2}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["server-examples"]],decls:22,vars:0,consts:[["id","from-server","href","#from-server","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/server/basic-example-load.component.ts","target","_blank",1,"source"],["id","server","href","#server","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/server/advanced-example-server.component.ts","target","_blank",1,"source"]],template:function(e,t){1&e&&(l.Nb(0,"h2"),l.mc(1,"Get data from external source example"),l.Mb(),l.Nb(2,"h3"),l.Nb(3,"a",0),l.Jb(4,"span",1),l.Mb(),l.mc(5,"Loading From Server Example"),l.Mb(),l.Nb(6,"p"),l.mc(7," This example shows how to pass the data loaded from some API to the table DataSource.\n"),l.Mb(),l.Nb(8,"div",2),l.Nb(9,"a",3),l.mc(10,"Demo Source"),l.Mb(),l.Jb(11,"basic-example-load"),l.Mb(),l.Nb(12,"h3"),l.Nb(13,"a",4),l.Jb(14,"span",1),l.Mb(),l.mc(15,"Server Data Source Example"),l.Mb(),l.Nb(16,"p"),l.mc(17," An example on how to load data user Server DataSource:\n"),l.Mb(),l.Nb(18,"div",2),l.Nb(19,"a",5),l.mc(20,"Demo Source"),l.Mb(),l.Jb(21,"advanced-example-server"),l.Mb())},directives:[v,y],encapsulation:2}),e})(),N=(()=>{class e{constructor(){this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",comments:"Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.",passed:"Yes"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",comments:"Vix iudico graecis in? Malis eirmod consectetuer duo ut?\n                Mel an aeterno vivendum accusata, qui ne amet stet definitiones.",passed:"Yes"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",comments:"Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.",passed:"No"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",comments:"Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?",passed:"Yes"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",comments:"Quo viris appellantur an, pro id eirmod oblique iuvaret,\n                timeam omittam comprehensam ad eam? Eos id dico gubergren,\n                cum dicant qualisque ea, id vim ferri moderatius?",passed:"No"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",comments:"Audire appareat sententiae qui no. Sed no rebum vitae quidam.",passed:"No"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",comments:"Mel dicat sanctus accusata ut! Eu sit choro vituperata,\n                qui cu quod gubergren elaboraret, mollis vulputate ex cum!",passed:"Yes"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",comments:"Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.",passed:"No"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",comments:"In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.",passed:"No"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",comments:"Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.\n                 Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?",passed:"Yes"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz",comments:"Lorem ipsum dolor sit amet, mea dolorum detraxit ea?",passed:"No"}],this.settings={columns:{id:{title:"ID"},name:{title:"Full Name",editor:{type:"completer",config:{completer:{data:this.data,searchFields:"name",titleField:"name",descriptionField:"email"}}}},username:{title:"User Name",type:"html",editor:{type:"list",config:{list:[{value:"Antonette",title:"Antonette"},{value:"Bret",title:"Bret"},{value:"<b>Samantha</b>",title:"Samantha"}]}}},email:{title:"Email",type:"string"},comments:{title:"Comments",editor:{type:"textarea"}},passed:{title:"Passed",editor:{type:"checkbox",config:{true:"Yes",false:"No"}}}}}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["advanced-example-types"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&l.Jb(0,"ng2-smart-table",0),2&e&&l.Xb("settings",t.settings)("source",t.data)},directives:[b.a],encapsulation:2}),e})();const M=["name"],C=["url"],x=["htmlValue"];let S=(()=>{class e extends o.a{constructor(){super()}ngAfterViewInit(){""!==this.cell.newValue&&(this.name.nativeElement.value=this.getUrlName(),this.url.nativeElement.value=this.getUrlHref())}updateValue(){this.cell.newValue=`<a href='${this.url.nativeElement.value}'>${this.name.nativeElement.value}</a>`}getUrlName(){return this.htmlValue.nativeElement.innerText}getUrlHref(){return this.htmlValue.nativeElement.querySelector("a").getAttribute("href")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&(l.sc(M,!0),l.sc(C,!0),l.sc(x,!0)),2&e&&(l.cc(n=l.Vb())&&(t.name=n.first),l.cc(n=l.Vb())&&(t.url=n.first),l.cc(n=l.Vb())&&(t.htmlValue=n.first))},features:[l.ub],decls:9,vars:10,consts:[[1,"form-control","short-input",3,"ngClass","name","disabled","placeholder","click","keyup","keydown.enter","keydown.esc"],["name",""],["url",""],[3,"hidden","innerHTML"],["htmlValue",""]],template:function(e,t){1&e&&(l.mc(0," Name: "),l.Nb(1,"input",0,1),l.Ub("click",(function(e){return t.onClick.emit(e)}))("keyup",(function(){return t.updateValue()}))("keydown.enter",(function(e){return t.onEdited.emit(e)}))("keydown.esc",(function(){return t.onStopEditing.emit()})),l.Mb(),l.Jb(3,"br"),l.mc(4," Url: "),l.Nb(5,"input",0,2),l.Ub("click",(function(e){return t.onClick.emit(e)}))("keyup",(function(){return t.updateValue()}))("keydown.enter",(function(e){return t.onEdited.emit(e)}))("keydown.esc",(function(){return t.onStopEditing.emit()})),l.Mb(),l.Jb(7,"div",3,4)),2&e&&(l.xb(1),l.Xb("ngClass",t.inputClass)("name",t.cell.getId())("disabled",!t.cell.isEditable())("placeholder",t.cell.getTitle()),l.xb(4),l.Xb("ngClass",t.inputClass)("name",t.cell.getId())("disabled",!t.cell.isEditable())("placeholder",t.cell.getTitle()),l.xb(2),l.Xb("hidden",!0)("innerHTML",t.cell.getValue(),l.fc))},directives:[i.h],encapsulation:2}),e})(),k=(()=>{class e{ngOnInit(){this.renderValue=this.value.toString().toUpperCase()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["ng-component"]],inputs:{value:"value",rowData:"rowData"},decls:1,vars:1,template:function(e,t){1&e&&l.mc(0),2&e&&l.oc(" ",t.renderValue," ")},encapsulation:2}),e})();var D=n("Ohay"),_=n("mWib");let E=(()=>{class e extends o.b{constructor(){super(),this.inputControl=new s.c}ngOnInit(){this.inputControl.valueChanges.pipe(Object(D.a)(),Object(_.a)(this.delay)).subscribe(e=>{this.query=null!==e?this.inputControl.value.toString():"",this.setFilter()})}ngOnChanges(e){e.query&&(this.query=e.query.currentValue,this.inputControl.setValue(this.query))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["ng-component"]],features:[l.ub,l.vb],decls:2,vars:3,consts:[["type","number",1,"form-control",3,"ngClass","formControl","placeholder"],["number",""]],template:function(e,t){1&e&&l.Jb(0,"input",0,1),2&e&&l.Xb("ngClass",t.inputClass)("formControl",t.inputControl)("placeholder",t.column.title)},directives:[s.l,s.b,i.h,s.i,s.d],encapsulation:2}),e})(),J=(()=>{class e{constructor(){this.data=[{id:1,name:"Leanne Graham",username:"Bret",link:'<a href="http://www.google.com">Google</a>'},{id:2,name:"Ervin Howell",username:"Antonette",link:'<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>'},{id:3,name:"Clementine Bauch",username:"Samantha",link:'<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>'},{id:4,name:"Patricia Lebsack",username:"Karianne",link:'<a href="https://github.com/akveo/blur-admin">Blur Admin</a>'}],this.settings={columns:{id:{title:"ID",filter:{type:"custom",component:E}},name:{title:"Full Name",type:"custom",renderComponent:k},username:{title:"User Name"},link:{title:"Link",type:"html",editor:{type:"custom",component:S}}}}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["advanced-example-custom-editor"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&l.Jb(0,"ng2-smart-table",0),2&e&&l.Xb("settings",t.settings)("source",t.data)},directives:[b.a],encapsulation:2}),e})(),L=(()=>{class e{constructor(){this.save=new l.n}ngOnInit(){this.renderValue=this.value.toString().toUpperCase()}onClick(){this.save.emit(this.rowData)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["button-view"]],inputs:{value:"value",rowData:"rowData"},outputs:{save:"save"},decls:2,vars:1,consts:[[3,"click"]],template:function(e,t){1&e&&(l.Nb(0,"button",0),l.Ub("click",(function(){return t.onClick()})),l.mc(1),l.Mb()),2&e&&(l.xb(1),l.nc(t.renderValue))},encapsulation:2}),e})(),P=(()=>{class e{constructor(){this.settings={columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"},button:{title:"Button",type:"custom",renderComponent:L,onComponentInitFunction(e){e.save.subscribe(e=>{alert(e.name+" saved!")})}}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",button:"Button #1"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",button:"Button #2"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",button:"Button #3"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",button:"Button #4"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",button:"Button #5"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["basic-example-button-view"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&l.Jb(0,"ng2-smart-table",0),2&e&&l.Xb("settings",t.settings)("source",t.data)},directives:[b.a],encapsulation:2}),e})(),O=(()=>{class e{constructor(){this.settings={actions:{custom:[{name:"view",title:"View "},{name:"edit",title:"Edit "},{name:"delete",title:"Delete "},{name:"duplicate",title:"Duplicate "}]},columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"}]}onCustom(e){alert(`Custom event '${e.action}' fired on row \u2116: ${e.data.id}`)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["basic-example-custom-actions"]],decls:1,vars:2,consts:[[3,"settings","source","custom"]],template:function(e,t){1&e&&(l.Nb(0,"ng2-smart-table",0),l.Ub("custom",(function(e){return t.onCustom(e)})),l.Mb()),2&e&&l.Xb("settings",t.settings)("source",t.data)},directives:[b.a],encapsulation:2}),e})(),F=(()=>{class e{constructor(){this.snippets={customEditorModule:n("cd1G").default}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["custom-edit-view-examples"]],decls:74,vars:1,consts:[["id","types","href","#types","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts","target","_blank",1,"source"],["id","custom-editor-renderer","href","#custom-editor-renderer","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts","target","_blank",1,"source"],["highlight","",1,"typescript"],["id","buttonview","href","#buttonview","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts","target","_blank",1,"source"],["id","multiselect","href","#customactions","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts","target","_blank",1,"source"]],template:function(e,t){1&e&&(l.Nb(0,"h2"),l.mc(1,"Customized edit and view cells examples"),l.Mb(),l.Nb(2,"h3"),l.Nb(3,"a",0),l.Jb(4,"span",1),l.Mb(),l.mc(5,"Select, Completer and Textarea column types"),l.Mb(),l.Nb(6,"p"),l.mc(7," An example on how to use select, completer, textarea column types:\n"),l.Mb(),l.Nb(8,"div",2),l.Nb(9,"a",3),l.mc(10,"Demo Source"),l.Mb(),l.Jb(11,"advanced-example-types"),l.Mb(),l.Nb(12,"h3"),l.Nb(13,"a",4),l.Jb(14,"span",1),l.Mb(),l.mc(15,"Custom editor/renderer column type"),l.Mb(),l.Nb(16,"p"),l.mc(17,"An example on how to use a custom cell editor and/or custom cell renderer:"),l.Mb(),l.Nb(18,"div",2),l.Nb(19,"a",5),l.mc(20,"Demo Source"),l.Mb(),l.Jb(21,"advanced-example-custom-editor"),l.Mb(),l.Nb(22,"p"),l.mc(23,"When implementing a custom editor or renderer remember to add it to the "),l.Nb(24,"code"),l.mc(25,"entryComponents"),l.Mb(),l.mc(26," and to the "),l.Nb(27,"code"),l.mc(28,"declarations"),l.Mb(),l.mc(29," part of your module"),l.Mb(),l.Nb(30,"pre"),l.mc(31,"  "),l.Nb(32,"code",6),l.mc(33),l.Mb(),l.mc(34,"\n"),l.Mb(),l.Nb(35,"p"),l.Nb(36,"b"),l.mc(37,"For the custom cell editor:"),l.Mb(),l.Jb(38,"br"),l.mc(39," To inherit the methods needed to interact with the table you can either extend the component with the "),l.Nb(40,"code"),l.mc(41,"DefaultEditor"),l.Mb(),l.mc(42," class or implement the "),l.Nb(43,"code"),l.mc(44,"Editor"),l.Mb(),l.mc(45," interface and reproduce the same methods on your component."),l.Jb(46,"br"),l.Nb(47,"b"),l.mc(48,"For the custom cell renderer:"),l.Mb(),l.Jb(49,"br"),l.mc(50," In this example the custom component is applying a "),l.Nb(51,"code"),l.mc(52,".toUpperCase()"),l.Mb(),l.mc(53," to one of the columns. You can implement the ViewCell interface to make sure you are setting up your component correctly.\n"),l.Mb(),l.Nb(54,"h3"),l.Nb(55,"a",7),l.Jb(56,"span",1),l.Mb(),l.mc(57,"Button View\n"),l.Mb(),l.Nb(58,"p"),l.mc(59,"An example on how to use custom button view:"),l.Mb(),l.Nb(60,"div",2),l.Nb(61,"a",8),l.mc(62,"Demo Source"),l.Mb(),l.Jb(63,"basic-example-button-view"),l.Mb(),l.Nb(64,"h3"),l.Nb(65,"a",9),l.Jb(66,"span",1),l.Mb(),l.mc(67,"Custom actions"),l.Mb(),l.Nb(68,"p"),l.mc(69,"An example on how to use custom actions:"),l.Mb(),l.Nb(70,"div",2),l.Nb(71,"a",10),l.mc(72,"Demo Source"),l.Mb(),l.Jb(73,"basic-example-custom-actions"),l.Mb()),2&e&&(l.xb(33),l.nc(t.snippets.customEditorModule))},directives:[N,J,d.a,P,O],encapsulation:2}),e})(),q=(()=>{class e{constructor(){this.settings={delete:{confirmDelete:!0},add:{confirmCreate:!0},edit:{confirmSave:!0},columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",notShownField:!0},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",notShownField:!0},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",notShownField:!1},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",notShownField:!1},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",notShownField:!1},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",notShownField:!1},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",notShownField:!1},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",notShownField:!0},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",notShownField:!1},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",notShownField:!1},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz",notShownField:!0}],this.source=new o.c(this.data)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}onSaveConfirm(e){window.confirm("Are you sure you want to save?")?(e.newData.name+=" + added in code",e.confirm.resolve(e.newData)):e.confirm.reject()}onCreateConfirm(e){window.confirm("Are you sure you want to create?")?(e.newData.name+=" + added in code",e.confirm.resolve(e.newData)):e.confirm.reject()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["advance-example-comfirm"]],decls:1,vars:2,consts:[[3,"settings","source","deleteConfirm","editConfirm","createConfirm"]],template:function(e,t){1&e&&(l.Nb(0,"ng2-smart-table",0),l.Ub("deleteConfirm",(function(e){return t.onDeleteConfirm(e)}))("editConfirm",(function(e){return t.onSaveConfirm(e)}))("createConfirm",(function(e){return t.onCreateConfirm(e)})),l.Mb()),2&e&&l.Xb("settings",t.settings)("source",t.source)},directives:[b.a],encapsulation:2}),e})(),A=(()=>{class e{constructor(){this.settings={selectMode:"multi",columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}},this.data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["basic-example-multi-select"]],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(e,t){1&e&&l.Jb(0,"ng2-smart-table",0),2&e&&l.Xb("settings",t.settings)("source",t.data)},directives:[b.a],encapsulation:2}),e})();const B=[{path:"",component:u,children:[{path:"",redirectTo:"using-filters"},{path:"using-filters",component:f},{path:"populate-from-server",component:w},{path:"custom-editors-viewers",component:F},{path:"various",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Cb({type:e,selectors:[["various-examples"]],decls:22,vars:0,consts:[["id","confirm","href","#confirm","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/various/advanced-example-confirm.component.ts","target","_blank",1,"source"],["id","multiselect","href","#multiselect","aria-hidden","true",1,"anchor"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/various/basic-example-multi-select.component.ts","target","_blank",1,"source"]],template:function(e,t){1&e&&(l.Nb(0,"h2"),l.mc(1,"Various examples"),l.Mb(),l.Nb(2,"h3"),l.Nb(3,"a",0),l.Jb(4,"span",1),l.Mb(),l.mc(5,"Confirm Action Example"),l.Mb(),l.Nb(6,"p"),l.mc(7," An example on how to confirm an action before it's applied to the table:\n"),l.Mb(),l.Nb(8,"div",2),l.Nb(9,"a",3),l.mc(10,"Demo Source"),l.Mb(),l.Jb(11,"advance-example-comfirm"),l.Mb(),l.Nb(12,"h3"),l.Nb(13,"a",4),l.Jb(14,"span",1),l.Mb(),l.mc(15,"Multi select"),l.Mb(),l.Nb(16,"p"),l.mc(17,"An example on how to use multi select mode:"),l.Mb(),l.Nb(18,"div",2),l.Nb(19,"a",5),l.mc(20,"Demo Source"),l.Mb(),l.Jb(21,"basic-example-multi-select"),l.Mb())},directives:[q,A],encapsulation:2}),e})()}]}];let V=(()=>{class e{}return e.\u0275mod=l.Gb({type:e}),e.\u0275inj=l.Fb({factory:function(t){return new(t||e)},imports:[[i.b,r.b,s.e,s.m,a.c.forChild(B),o.d,c.a]]}),e})()},v80l:function(e,t,n){"use strict";n.r(t),t.default="import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';"},x5t9:function(e,t,n){"use strict";n.r(t),t.default="settings = {\n  columns: {\n    id: {\n      title: 'ID',\n      filter: false\n    },\n    name: {\n      title: 'Full Name',\n      filter: false\n    },\n    username: {\n      title: 'User Name',\n      filter: false\n    },\n    email: {\n      title: 'Email',\n      filter: false\n    }\n  }\n};"}}]);