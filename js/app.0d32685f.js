(function(a){function t(t){for(var o,n,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(a[o]=l[o]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],o=!0,i=1;i<e.length;i++){var l=e[i];0!==s[l]&&(o=!1)}o&&(r.splice(t--,1),a=n(n.s=e[0]))}return a}var o={},s={app:0},r=[];function n(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=a,n.c=o,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var o in a)n.d(e,o,function(t){return a[t]}.bind(null,o));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"02a6":function(a,t,e){},"034f":function(a,t,e){"use strict";var o=e("85ec"),s=e.n(o);s.a},"226d":function(a,t,e){},"379d":function(a,t,e){a.exports=e.p+"img/face.46b465b0.png"},"39b3":function(a,t,e){"use strict";var o=e("02a6"),s=e.n(o);s.a},"4e8a":function(a,t,e){"use strict";var o=e("5986"),s=e.n(o);s.a},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"d-flex flex-column justify-content-between",attrs:{id:"app"}},[e("cabecera"),e("router-view"),e("foter")],1)},r=[],n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("nav",{staticClass:"navbar navbar-expand-sm navbar-light d-flex justify-content-around",staticStyle:{"background-color":"white"}},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a._v("Notas")]),a._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsibleNavId"}},[e("ul",{staticClass:"navbar-nav mr-auto align-midle mt-2 ml-4 mt-lg-0"},[e("li",{staticClass:"nav-item active mr-2"},[e("router-link",{attrs:{to:"/notas"}},[a._v("Notas")])],1),e("li",{staticClass:"nav-item active"},[e("router-link",{attrs:{to:"/olimpiadas"}},[a._v("Olimpiadas")])],1)]),e("button",{staticClass:"btn btn-outline-primary my-2 my-sm-0",attrs:{id:"registro"},on:{click:function(t){return a.abrirModal2()}}},[a._v("Registro")]),e("button",{staticClass:"btn btn-outline-primary my-2 my-sm-0",attrs:{id:"login"},on:{click:function(t){return a.abrirModal()}}},[a._v("Login")])])]),a._m(1)])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"navbar-toggler d-lg-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal fade",attrs:{id:"modelRegister",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"modal-title"},[a._v("Inicia Sesión")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("E-mail")]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"Nombre",id:"",placeholder:"","aria-describedby":"helpId"}}),e("label",{attrs:{for:""}},[a._v("Contraseña")]),e("input",{staticClass:"form-control",attrs:{type:"password",name:"Nombre",id:"",placeholder:"","aria-describedby":"helpId"}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[a._v("Cerrar")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[a._v("Entrar")])])])]),e("div",{staticClass:"modal fade",attrs:{id:"modelLogin",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"modal-title"},[a._v("Regístrate")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Nombre:")]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"Nombre",id:""}}),e("label",{attrs:{for:""}},[a._v("Apellidos:")]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"Apellidos",id:""}}),e("label",{attrs:{for:""}},[a._v("E-mail")]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"Apellidos",id:""}}),e("br"),e("div",{staticClass:"btn-group",attrs:{"data-toggle":"buttons"}},[e("label",{staticClass:"btn btn-primary active"},[e("input",{attrs:{type:"radio",name:"Género",value:"Hombre",id:"",checked:"",autocomplete:"off"}}),a._v(" Hombre ")]),e("label",{staticClass:"btn btn-primary"},[e("input",{attrs:{type:"radio",name:"Género",value:"Mujer",id:"",autocomplete:"off"}}),a._v(" Mujer ")])]),e("br"),e("br"),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"inlineRadioOptions",id:"inlineRadio1",value:"option1"}}),e("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[e("i",{staticClass:"fa fa-facebook-square",staticStyle:{"font-size":"2rem",color:"rgb(27, 128, 223)"}})])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"inlineRadioOptions",id:"inlineRadio2",value:"option2"}}),e("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio2"}},[e("i",{staticClass:"fa fa-instagram",staticStyle:{"font-size":"2rem",color:"rgb(27, 128, 223)"}})])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"inlineRadioOptions",id:"inlineRadio3",value:"option3"}}),e("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio3"}},[e("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"2rem",color:"rgb(27, 128, 223)"}})])]),e("br"),e("br"),e("label",{attrs:{for:""}},[a._v("Contraseña")]),e("input",{staticClass:"form-control",attrs:{type:"password",name:"Nombre",id:"",placeholder:"","aria-describedby":"helpId"}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[a._v("Cerrar")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[a._v("Registrar")])])])])])])}],l=e("1157");window.$=l;var c={name:"cabecera",props:[],mounted:function(){},data:function(){return{}},methods:{abrirModal:function(){l("#modelLogin").modal("show")},abrirModal2:function(){l("#modelRegister").modal("show")}},computed:{}},d=c,u=e("2877"),m=Object(u["a"])(d,n,i,!1,null,"bbf214e2",null),p=m.exports,f=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},b=[function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"mx-0"},[o("footer",{staticClass:"row mx-0 d-flex justify-content-center"},[o("ul",{staticClass:"d-flex justify-content-around mt-2"},[o("a",{attrs:{href:"#"}},[o("img",{attrs:{alt:"Borrar",id:"redes",src:e("379d")}})]),o("a",{attrs:{href:"#"}},[o("img",{attrs:{alt:"Borrar",id:"redes",src:e("799c")}})]),o("a",{attrs:{href:"#"}},[o("img",{attrs:{alt:"Borrar",id:"redes",src:e("9b6b")}})])])])])}],v={name:"footer",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},g=v,h=(e("4e8a"),Object(u["a"])(g,f,b,!1,null,"d5d48f98",null)),C=h.exports,y={name:"app",components:{cabecera:p,foter:C}},_=y,x=(e("034f"),Object(u["a"])(_,s,r,!1,null,null,null)),N=x.exports,w=e("5f5b"),O=(e("f9e3"),e("2dd8"),e("8c4f")),k=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},j=[function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{attrs:{id:"olimpiadas"}},[o("div",{staticClass:"jumbotron jumbotron-fluid ",attrs:{id:"imagenPrincipal"}},[o("div",{staticClass:"container"},[o("h1",{staticClass:"display-3"},[a._v(" 明日発見")]),o("p",{staticClass:"lead"},[a._v("Descubre el mañana")])])]),o("div",{staticClass:"row mx-0"},[o("div",{staticClass:"col-12 col-md-8"},[o("div",{staticClass:"row seccion"},[o("div",{staticClass:"col-12 col-md-7 "},[o("h1",[a._v("Atenas 1896")]),o("p",[a._v(" Los Juegos Olímpicos de Atenas 1896, conocidos oficialmente como Juegos de la I Olimpiada, se celebraron en Atenas, Grecia, entre el 6 y el 15 de abril de 1896. Participaron 241 atletas masculinos —no hubo participación femenina— de 14 países, que disputaron en 43 competiciones de 9 deportes. Fueron los primeros Juegos Olímpicos de la Edad Contemporánea. A pesar de los muchos obstáculos y reveses, los Juegos Olímpicos de 1896 fueron reconocidos como un gran éxito. Tuvieron la mayor participación internacional en un evento deportivo hasta esa fecha. El Estadio Panathinaikó, que fue el primer gran estadio del mundo moderno, vio rebasada su capacidad con la multitud de personas más grande que se había reunido jamás para ver un evento deportivo.Lo más sobresaliente para los griegos fue la victoria de su compatriota Spiridon Louis en la maratón. El competidor más exitoso fue el luchador y gimnasta alemán Carl Schuhmann, que ganó cuatro medallas de oro.Desde entonces, cada cuatro años, deportistas de todos los países se reúnen para competir entre ellos. Solo las grandes guerras del siglo XX han impedido la realización de los Juegos Olímpicos, pero al culminar estas, se ha continuado con la tradición. Atenas organizó nuevamente los Juegos Olímpicos en 2004. ")])]),o("div",{staticClass:"col-12 col-md-5 imagen"},[o("img",{attrs:{src:e("acee"),alt:""}})])]),o("div",{staticClass:"row seccion"},[o("div",{staticClass:"col-12 col-md-5 imagen"},[o("img",{attrs:{src:e("c78a"),alt:""}})]),o("div",{staticClass:"col-12 col-md-7 "},[o("h1",[a._v("Paris 1900")]),o("p",[a._v(" Los Juegos Olímpicos de París 1900, oficialmente Juegos de la II Olimpiada, son la segunda edición de las olimpiadas modernas. Tuvieron lugar en París, Francia, del 14 de mayo al 28 de octubre de 1900, en el marco de la Exposición Universal. La decisión de celebrar los Juegos de 1900 en París se tomó en la reunión del I Congreso Olímpico celebrado en 1894. Tras los Juegos de 1896 Pierre de Coubertin, presidente del Comité Olímpico Internacional (COI), quería organizar los Juegos de la II Olimpiada, pero Alfred Picard, comisario general de la Exposición Universal quería organizar «competiciones internacionales de ejercicio físico y deportes» durante el evento. El por entonces órgano rector del deporte en Francia, la Union des sociétés françaises de sports athlétiques (USFSA), en noviembre de 1898 decidió finalmente celebrar las competiciones de la Exposición en lugar de los Juegos de Coubertin que, en la primavera de 1899 se vio obligado a aceptar la propuesta de la USFSA: «Las competiciones de la Exposición se celebran en lugar de los Juegos Olímpicos de 1900 y cuentan como equivalentes a la II Olimpiada.» No hubo ceremonia de apertura ni de clausura, las pruebas se desarrollaron a lo largo de cinco meses y estos eventos no se denominan «Juegos Olímpicos» en los documentos oficiales ni en los carteles promocionales, por lo que muchos atletas ignorarían, algunos hasta su muerte, que habían competido en los Juegos Olímpicos. ")])])])]),o("div",{staticClass:"col-12 col-md-4 tabla"},[o("table",{staticClass:"table table-striped table-bordered"},[o("thead",[o("tr",[o("th",[a._v("Grandes atletas de la historia")])])]),o("tbody",[o("tr",[o("td",{attrs:{scope:"row"}},[a._v("Johnny Weissmuller")])]),o("tr",[o("td",{attrs:{scope:"row"}},[a._v("Jesse Owens")])]),o("tr",[o("td",{attrs:{scope:"row"}},[a._v("Nadia Comaneci")])]),o("tr",[o("td",{attrs:{scope:"row"}},[a._v("Michael Phelps")])]),o("tr",[o("td",{attrs:{scope:"row"}},[a._v("Usain Bolt")])]),o("tr",[o("td",{attrs:{scope:"row"}},[a._v("Simeone Biles")])])])])])])])}],S={name:"olimpiadas",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},E=S,I=(e("39b3"),Object(u["a"])(E,k,j,!1,null,"72c30414",null)),J=I.exports,P=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"mx-0 "},[e("form",{staticClass:"formu"},[e("div",{staticClass:"row mt-4 d-flex justify-content-center mx-0 form-group ",attrs:{id:"notas"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.nuevaNota,expression:"nuevaNota"}],attrs:{type:"text",placeholder:"¿que quieres recordar?"},domProps:{value:a.nuevaNota},on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.add(t)},input:function(t){t.target.composing||(a.nuevaNota=t.target.value)}}}),e("button",{on:{click:[a.add,function(t){a.show=!a.show}]}},[a._v("Agregar")])]),e("div",{staticClass:"row mt-4 d-flex justify-content-center mx-0 form-group",attrs:{id:"buscar"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.buscar,expression:"buscar"}],attrs:{type:"text",placeholder:"Buscar nota"},domProps:{value:a.buscar},on:{input:function(t){t.target.composing||(a.buscar=t.target.value)}}})])]),e("div",{staticClass:"formu"},[e("h5",[a._v("Total de tareas: "+a._s(a.totalNotas)+" tareas completadas:"+a._s(a.totalCompletadas)+" ")]),e("a",{on:{click:a.eliminar}},[a._v(" Eliminar las completadas")])]),e("div",{staticClass:"row mt-4  mx-0"},[e("transition-group",{staticClass:"col-12",attrs:{name:"slide-fade",tag:"ol"}},a._l(a.ListaArray,(function(t,o){return e("notas",{key:t,attrs:{nota:t,index:o},on:{eliminarNota:a.borrar}})})),1)],1)])},A=[],$=(e("a4d3"),e("e01a"),e("d28b"),e("4de4"),e("c975"),e("a434"),e("d3b7"),e("3ca3"),e("ddb0"),function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"col-12"},[o("div",{staticClass:"card border-dark mb-3 text-left"},[o("div",{staticClass:"card-body d-flex justify-content-between"},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.nota.acabada,expression:"nota.acabada"}],staticClass:"texto",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.nota.acabada)?a._i(a.nota.acabada,null)>-1:a.nota.acabada},on:{change:function(t){var e=a.nota.acabada,o=t.target,s=!!o.checked;if(Array.isArray(e)){var r=null,n=a._i(e,r);o.checked?n<0&&a.$set(a.nota,"acabada",e.concat([r])):n>-1&&a.$set(a.nota,"acabada",e.slice(0,n).concat(e.slice(n+1)))}else a.$set(a.nota,"acabada",s)}}}),o("h4",{staticClass:"card-title texto",class:{completada:a.nota.acabada}},[a._v(a._s(a.nota.text))])]),o("button",{staticClass:"btn btn-outline-secondary rounded-circle",on:{click:function(t){return a.eliminar(a.nota)}}},[o("img",{attrs:{alt:"Borrar",id:"papelera",src:e("7faa")}})])]),o("div",{staticClass:"card-footer bg-transparent border-dark"},[o("small",{staticClass:"form-text text-muted",attrs:{id:"info"}},[a._v("Añadido:"+a._s(a.nota.fecha))])])])])}),q=[],R={name:"nota",props:["nota","index"],mounted:function(){},data:function(){return{}},methods:{eliminar:function(a){this.$emit("eliminarNota",a)}},computed:{}},L=R,M=(e("b484"),Object(u["a"])(L,$,q,!1,null,"ee2e77d8",null)),T=M.exports,z={name:"contenido",components:{notas:T},props:[],mounted:function(){if(localStorage.getItem("arrNotas"))try{this.arrNotas=JSON.parse(localStorage.getItem("arrNotas"))}catch(a){localStorage.removeItem("arrNotas")}},updated:function(){this.guardarNotas()},data:function(){return{arrNotas:[],nuevaNota:null,buscar:"",show:!0}},methods:{add:function(){this.nuevaNota&&(this.arrNotas.push({text:this.nuevaNota,acabada:!1,fecha:(new Date).toLocaleString()}),this.nuevaNota="",this.guardarNotas())},eliminar:function(){this.arrNotas=this.arrNotas.filter((function(a){return 0==a.acabada})),this.guardarNotas()},borrar:function(a){this.arrNotas.splice(this.arrNotas.indexOf(a),1),this.guardarNotas()},guardarNotas:function(){var a=JSON.stringify(this.arrNotas);localStorage.setItem("arrNotas",a)}},computed:{totalNotas:function(){return this.arrNotas.length},totalCompletadas:function(){var a=0,t=!0,e=!1,o=void 0;try{for(var s,r=this.arrNotas[Symbol.iterator]();!(t=(s=r.next()).done);t=!0){var n=s.value;n.acabada&&a++}}catch(i){e=!0,o=i}finally{try{t||null==r.return||r.return()}finally{if(e)throw o}}return a},ListaArray:function(){var a=this.buscar;return this.arrNotas.filter((function(t){return-1!=t.text.indexOf(a)}))}}},B=z,U=(e("632a"),Object(u["a"])(B,P,A,!1,null,"51b5b54e",null)),F=U.exports;o["default"].config.productionTip=!1,o["default"].use(w["a"]),o["default"].use(O["a"]);var G=[{path:"/notas",component:F},{path:"/olimpiadas",component:J},{path:"*",component:J}],D=new O["a"]({routes:G});new o["default"]({render:function(a){return a(N)},router:D}).$mount("#app")},5986:function(a,t,e){},"632a":function(a,t,e){"use strict";var o=e("226d"),s=e.n(o);s.a},7955:function(a,t,e){},"799c":function(a,t,e){a.exports=e.p+"img/twt.56bf037c.png"},"7faa":function(a,t,e){a.exports=e.p+"img/papelera.9ff93d87.png"},"85ec":function(a,t,e){},"9b6b":function(a,t,e){a.exports=e.p+"img/yt.6cdf0f33.png"},acee:function(a,t,e){a.exports=e.p+"img/atenas1896.18d3877a.jpeg"},b484:function(a,t,e){"use strict";var o=e("7955"),s=e.n(o);s.a},c78a:function(a,t,e){a.exports=e.p+"img/paris1900.59b19499.jpeg"}});
//# sourceMappingURL=app.0d32685f.js.map