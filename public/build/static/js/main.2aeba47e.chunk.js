(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l);a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(5),i=a(7),o=a(1),s=a.n(o),m=a(2),p=a(3),b=a(10),E=a.n(b),d=E.a.create({baseURL:"/auth",withCredentials:!0}),f=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/signup",t);case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/login",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/currentuser");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.put("/updateuser",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/logout");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=Object(n.createContext)();function y(e){var t=e.children,a=Object(n.useState)(null),l=Object(p.a)(a,2),c=l[0],u=l[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,a=t.user,u(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return r.a.createElement(g.Provider,{value:{user:c,ctxUser:function(e){return u(e)},clearctxUser:function(){return u(null)}}},t)}var x=a(6),k=a(9);var w=function(e){var t=e.children,a=Object(n.useContext)(g),l=a.user,c=a.clearctxUser,o=Object(i.f)(),p=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:c(),o.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("img",{src:"https://res.cloudinary.com/dxncdwsau/image/upload/v1600963193/All_My_Books/%C3%8Dcono_de_libros_blanco_hajncl.png",alt:"Books icon"}),"\xa0 ",r.a.createElement(u.b,{to:"/userhome"},"All My Books"))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"navicon"},r.a.createElement(x.a,{icon:k.a}),"\xa0",r.a.createElement("img",{src:null===l||void 0===l?void 0:l.profilePhoto,alt:"User"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/userconfig"},"Configuraci\xf3n")),r.a.createElement("li",{onClick:p},r.a.createElement(u.b,null,"Cierra sesi\xf3n"))))))),r.a.createElement("main",null,t))};function N(e){var t=Object(n.useState)(e),a=Object(p.a)(t,2),r=a[0],l=a[1];return{value:r,onChange:function(e){l(e.target.value)}}}var S=a(16);var C=function(e){var t=e.history,a=Object(n.useContext)(g).ctxUser,l=N(""),c=N(""),i=N(""),o=Object(n.useState)(!0),b=Object(p.a)(o,2),E=b[0],d=b[1],h=Object(n.useState)(!1),j=Object(p.a)(h,2),O=j[0],y=j[1],k=Object(n.useState)(""),w=Object(p.a)(k,2),C=w[0],A=w[1];function _(){return(_=Object(m.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=l.value,n=c.value,r=i.value,e.next=6,f({username:a,email:n,password:r}).catch((function(e){console.dir(e.response.data.message),B(e.response.data.message)}));case 6:O&&d(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(m.a)(s.a.mark((function e(n){var r,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=c.value,l=i.value,e.next=5,v({email:r,password:l}).catch((function(e){console.dir(e.response.data.message),B(e.response.data.message)}));case 5:u=e.sent,O?console.log("Hay un error"):t.push("/userhome"),a(u);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){d(!E)}var B=function(e){y(!0),A(e)};return r.a.createElement("div",{className:"homepage"},r.a.createElement("div",null,r.a.createElement("h1",null,"All My Books"),r.a.createElement("h2",null,"El lugar para ordenar todos tus libros"),r.a.createElement("img",{src:"https://res.cloudinary.com/dxncdwsau/image/upload/v1600883938/All_My_Books/Book_shelf_warm_colors_omdjq1.jpg",alt:"Bookshelf by colors"})),E&&r.a.createElement("div",null,r.a.createElement("h2",null,"Crea una cuenta"),r.a.createElement("form",{onSubmit:function(e){return _.apply(this,arguments)}},r.a.createElement("label",null,"Nombre de usuario: "),r.a.createElement("br",null),r.a.createElement("input",Object.assign({required:!0,type:"text",name:"username",id:"username"},l)),r.a.createElement("br",null),r.a.createElement("label",null,"Email:"),r.a.createElement("br",null),r.a.createElement("input",Object.assign({required:!0,type:"text",name:"email",id:"email"},c)),r.a.createElement("br",null),r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("br",null),r.a.createElement("input",Object.assign({required:!0,type:"password",name:"password",id:"password"},i)),r.a.createElement("br",null),O&&r.a.createElement("p",null,C),r.a.createElement("button",{type:"submit"},"Crea tu cuenta")),r.a.createElement("div",null,r.a.createElement(u.b,null,r.a.createElement(x.a,{icon:S.b})," \xa0Google"),r.a.createElement(u.b,null,r.a.createElement(x.a,{icon:S.a})," Facebook")),r.a.createElement("hr",null),r.a.createElement("div",{className:"signupbtn"},r.a.createElement("p",null,"\xbfYa tienes cuenta?")," ",r.a.createElement("button",{onClick:I},"Inicia sesi\xf3n"))),!E&&r.a.createElement("div",null,r.a.createElement("h2",null,"Inicia sesi\xf3n"),r.a.createElement("form",{onSubmit:function(e){return P.apply(this,arguments)}},r.a.createElement("label",null,"Email"),r.a.createElement("input",Object.assign({required:!0,type:"text",name:"email",id:"email"},c)),r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",Object.assign({required:!0,type:"password",name:"password",id:"password"},i)),r.a.createElement("button",{type:"submit"},"Inicia sesi\xf3n"),O&&r.a.createElement("p",null,C)),r.a.createElement("div",null,r.a.createElement(u.b,null,r.a.createElement(x.a,{icon:S.b})," \xa0Google"),r.a.createElement(u.b,null,r.a.createElement(x.a,{icon:S.a})," Facebook")),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("button",{onClick:I},"Crea una cuenta"))))},A=E.a.create({baseURL:"/api",withCredentials:!0}),_=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.post("/newbook",t);case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/userbooks/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/detailbook/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.put("/updatebook/".concat(t),a);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.delete("/deletebook/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=E.a.create({baseURL:"/api",withCredentials:!0}),q=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post("/shelfnew",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/booksshlef/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("usershelves");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.put("addbook/".concat(t),a);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.put("removebook/".concat(t),a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var M=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))};var Q=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),i=Object(p.a)(c,2),o=i[0],b=i[1],E=Object(n.useState)(!1),d=Object(p.a)(E,2),f=d[0],v=d[1],h=Object(n.useState)(1),j=Object(p.a)(h,2),O=j[0],g=j[1],y=Object(n.useState)(!1),w=Object(p.a)(y,2),S=w[0],C=w[1],A=Object(n.useState)(!1),_=Object(p.a)(A,2),I=_[0],B=_[1],F=Object(n.useState)(!1),L=Object(p.a)(F,2),U=L[0],T=L[1],R=N("");function Q(){return G.apply(this,arguments)}function G(){return(G=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(O);case 2:t=e.sent,l(t.user.books),b(t.user.shelves);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:a=e.sent,l(a.books.books);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,q({name:R.value});case 3:B(!1),T(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){B(!I)}return Object(n.useEffect)((function(){Q(),v(!1),T(!1)}),[f,U]),r.a.createElement("div",{className:"userhome"},r.a.createElement("div",null,r.a.createElement("h3",null,"Estantes"),r.a.createElement("ul",null,!I&&r.a.createElement("button",{onClick:W},"Agrega un nuevo estante"),I&&r.a.createElement("form",{onSubmit:function(e){return K.apply(this,arguments)}},r.a.createElement("label",null,"Nombre del estante"),r.a.createElement("input",Object.assign({required:!0,type:"text",name:"name",id:"name"},R)),r.a.createElement("button",{type:"submit"},"Crear estante"),r.a.createElement("button",{onClick:W},"Cancelar")),r.a.createElement("li",null,r.a.createElement(u.b,{onClick:Q},r.a.createElement(x.a,{icon:k.b}),"\xa0Todos tus libros")),null===o||void 0===o?void 0:o.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(u.b,{onClick:function(){return function(e){return J.apply(this,arguments)}(e._id)}},r.a.createElement(x.a,{icon:k.b}),"\xa0",e.name))})))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/newbook"},"Nuevo libro")),r.a.createElement("div",null,a?a.map((function(e,t){return r.a.createElement("div",{key:t,className:"bookcard"},r.a.createElement("img",{src:e.cover,alt:"Book cover"}),r.a.createElement("div",null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.authorFirstName," ",e.authorLastName)),r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement(u.b,{to:"/detialbook/".concat(e._id)},"Detalles"))))})):r.a.createElement(M,null),a===[]&&r.a.createElement("p",null,"A\xfan no tienes libros")),S&&r.a.createElement("button",{onClick:function(){O<=1?C(!1):g(O-1),v(!0),console.log(O)}},"Regresa"),a&&r.a.createElement("button",{onClick:function(){g(O+1),v(!0),C(!0),console.log(O)}},"Ver m\xe1s libros")))},G=E.a.create({baseURL:"/api",withCredentials:!0}),J=function(){var e=Object(m.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.post("/note/".concat(t),a);case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),K=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.delete("/notedelete/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=E.a.create({baseURL:"/api",withCredentials:!0}),H=function(){var e=Object(m.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("/quote/".concat(t),a);case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.delete("/quotedelete/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Y=function(e){var t=e.bookIdToUse,a=e.setNewNote,l=N(""),c=N(""),u=N(""),i=Object(n.useState)(!1),o=Object(p.a)(i,2),b=o[0],E=o[1];function d(){return(d=Object(m.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,J(t,{description:l.value,chapter:c.value,pages:u.value});case 3:E(!1),a(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){E(!b)}return r.a.createElement("div",{className:"newnoteformat"},!b&&r.a.createElement("button",{onClick:f},r.a.createElement(x.a,{icon:k.e})," Agregar nueva nota"),b&&r.a.createElement("form",{onSubmit:function(e){return d.apply(this,arguments)}},r.a.createElement("label",null,"Descripci\xf3n:"),r.a.createElement("textarea",Object.assign({required:!0,autofocus:!0,type:"text",name:"description",id:"description",placeholder:"Escribe aqu\xed todo lo que quiras guardar sobre el libro..."},l)),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Cap\xedtulo relacionado:\xa0"),r.a.createElement("input",Object.assign({type:"text",name:"chapter",id:"chapter",placeholder:"Ejs. Cap\xedtulo 1, cap I, Prefacio"},c))),r.a.createElement("div",null,r.a.createElement("label",null,"P\xe1ginas:\xa0"),r.a.createElement("input",Object.assign({type:"text",name:"pages",id:"pages",placeholder:"Ejs. 2-4, 7 y 15"},u)))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"}," Crear nota"),r.a.createElement("button",{onClick:f},"Cancelar"))))};var $=function(e){var t=e.bookIdToUse,a=e.setNewQuote,l=N(""),c=N(""),u=N(""),i=Object(n.useState)(!1),o=Object(p.a)(i,2),b=o[0],E=o[1];function d(){return(d=Object(m.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,H(t,{description:l.value,note:c.value,pages:u.value});case 3:E(!1),a(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){E(!b)}return r.a.createElement("div",{className:"newnoteformat"},!b&&r.a.createElement("button",{onClick:f},r.a.createElement(x.a,{icon:k.e}),"Agrega una nueva cita"),b&&r.a.createElement("form",{className:"newquote",onSubmit:function(e){return d.apply(this,arguments)}},r.a.createElement("label",null,"Cita textual:"),r.a.createElement("textarea",Object.assign({required:!0,type:"text",name:"description",id:"description",placeholder:"Escribe aqu\xed la cita que quieras guardar, no es necesario ponerla entre comillas"},l)),r.a.createElement("label",null,"Nota:"),r.a.createElement("textarea",Object.assign({type:"text",name:"note",id:"note",placeholder:"\xbfAlg\xfan pensamiento relacionada a la cita?"},c)),r.a.createElement("label",null,"P\xe1ginas:"),r.a.createElement("input",Object.assign({type:"text",name:"pages",id:"pages",placeholder:"Ejs. 2-4, 7 y 15"},u)),r.a.createElement("div",{className:"newquote"},r.a.createElement("button",{type:"submit"}," Crear cita"),r.a.createElement("button",{onClick:f},"Cancelar"))))};var z=function(e){var t=e.bookData,a=Object(n.useState)(!1),l=Object(p.a)(a,2),c=l[0],u=l[1],i=Object(n.useState)(!1),o=Object(p.a)(i,2),s=o[0],m=o[1],b=Object(n.useState)(!1),E=Object(p.a)(b,2),d=E[0],f=E[1],v=Object(n.useState)(!1),h=Object(p.a)(v,2),j=h[0],O=h[1];return r.a.createElement("div",null,r.a.createElement("p",null,"Selecciona un formato de referencias: "),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"reference",value:"apa",onChange:function(){u(!0),m(!1),f(!1),O(!1),console.log(t.publisher)}}),r.a.createElement("label",{for:"apa"},"APA"),r.a.createElement("input",{type:"radio",name:"reference",value:"mla",onChange:function(){u(!1),m(!0),f(!1),O(!1)}}),r.a.createElement("label",{for:"mla"},"MLA"),r.a.createElement("input",{type:"radio",name:"reference",value:"chicago",onChange:function(){u(!1),m(!1),f(!0),O(!1)}}),r.a.createElement("label",{for:"chicago"},"Chicago"),r.a.createElement("input",{type:"radio",name:"reference",value:"UNE-ISO 690 ",onChange:function(){u(!1),m(!1),f(!1),O(!0)}}),r.a.createElement("label",{for:"UNE-ISO 690"},"UNE-ISO 690 ")),r.a.createElement("div",null,c&&r.a.createElement("p",null,t.authorLastName?t.authorLastName:"Apellido",", ",t.authorFirstName?t.authorFirstName.charAt(0):"Iniciales",". (",t.published?t.published.slice(0,4):"A\xf1o de publicaci\xf3n","). ",r.a.createElement("em",null,t.title),". ",""===t.publisher?t.publisher:"Editorial"),s&&r.a.createElement("p",null,t.authorLastName?t.authorLastName:"Apellido",", ",t.authorFirstName?t.authorFirstName:"Nombre",". ",r.a.createElement("em",null,t.title),". ",t.publishPlace?t.publishPlace:"Lugar de publicaci\xf3n",": ",""===t.publisher?t.publisher:"Editorial",", ",t.published?t.published.slice(0,4):"A\xf1o de publicaci\xf3n",". "),d&&r.a.createElement("p",null,t.authorLastName?t.authorLastName:"Apellido",", ",t.authorFirstName?t.authorFirstName:"Nombre",". ",r.a.createElement("em",null,t.title),". ",t.publishPlace?t.publishPlace:"Lugar de publicaci\xf3n",": ",""===t.publisher?t.publisher:"Editorial",", ",t.published?t.published.slice(0,4):"A\xf1o de publicaci\xf3n",". "),j&&r.a.createElement("p",null,t.authorLastName?t.authorLastName.toUpperCase():"Apellido",", ",t.authorFirstName?t.authorFirstName:"Nombre",". ",r.a.createElement("em",null,t.title,".")," ",t.publishPlace?t.publishPlace:"Lugar de publicaci\xf3n",": ",""===t.publisher?t.publisher:"Editorial",", ",t.published?t.published.slice(0,4):"A\xf1o de publicaci\xf3n",". ISBN: ",t.ISBN?t.ISBN:"ISBN")))};var X=function(e){var t=e.shelves,a=e.bookId,l=e.setNewShelf,c=N(""),u=Object(n.useState)(!1),i=Object(p.a)(u,2),o=i[0],b=i[1],E=Object(n.useState)(null),d=Object(p.a)(E,2),f=d[0],v=d[1];function h(){return(h=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,v(t.shelves.shelves);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(a,{shelfId:t});case 2:l(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,T(a,{shelfId:c.value});case 3:b(!1),l(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),r.a.createElement("div",null,!o&&r.a.createElement("div",null,t?t.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e.name),r.a.createElement("button",{onClick:function(){return function(e){return j.apply(this,arguments)}(e._id)}},"Quitar estante"))})):r.a.createElement("p",null,"A\xfan no tienes estantes"),r.a.createElement("button",{onClick:function(){b(!o)}},"A\xf1ade el libro a un estante")),o&&r.a.createElement("form",{onSubmit:function(e){return O.apply(this,arguments)}},r.a.createElement("label",null,"A\xf1ade a un estante"),r.a.createElement("select",Object.assign({required:!0,name:"shelf"},c),r.a.createElement("option",{value:"",selected:!0},"Selecciona un estante"),null===f||void 0===f?void 0:f.map((function(e,t){return r.a.createElement("option",{value:e._id}," ",e.name)}))),r.a.createElement("button",{type:"submit"},"A\xf1ade libro")))};var Z=function(e){var t,a,l=e.book,c=e.setUpdateBook,o=e.bookShelves,b=e.bookId,d=e.setNewShelf,f=Object(n.useState)(!1),v=Object(p.a)(f,2),h=v[0],j=v[1],O=Object(i.f)(),g=N(l.title),y=N(l.authorFirstName),w=N(l.authorLastName),S=N(l.publisher),C=N(l.published),A=N(l.edition),_=N(l.ISBN),P=N(l.publishPlace),I=N(l.pages),L=N(""),q=N(l.description),D=Object(n.useState)(l.cover),U=Object(p.a)(D,2),T=U[0],R=U[1];function M(){return(M=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(l._id);case 2:O.push("/userhome");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){j(!h)}function G(){return(G=Object(m.a)(s.a.mark((function e(t){var a,n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files,(n=new FormData).append("file",a[0]),n.append("upload_preset","all_my_books"),e.next=6,E.a.post("http://api.cloudinary.com/v1_1/dxncdwsau/image/upload",n);case 6:r=e.sent,l=r.data.secure_url,R(l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,B(l._id,{title:g.value,authorFirstName:y.value,authorLastName:w.value,publisher:S.value,published:C.value,edition:A.value,ISBN:_.value,publishPlace:P.value,pages:I.value,format:L.value,description:q.value,cover:T});case 3:j(!1),c(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"bookDetailCard"},!h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:l.cover,alt:"Book cover"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:Q}," ",r.a.createElement(x.a,{icon:k.d}),"\xa0",r.a.createElement(u.b,null,"Editar libro")),r.a.createElement("button",{onClick:function(){return M.apply(this,arguments)}}," ",r.a.createElement(x.a,{icon:k.h}),"\xa0 ",r.a.createElement(u.b,{to:""},"Eliminar libro")))),r.a.createElement("div",null,r.a.createElement("h2",null,l.title),r.a.createElement("h3",null,l.authorFirstName," ",l.authorLastName),r.a.createElement("p",null,r.a.createElement("b",null,"Editorial:")," ",l.publisher),r.a.createElement("p",null,r.a.createElement("b",null,"A\xf1o de publicaci\xf3n:")," ",null===(t=l.published)||void 0===t?void 0:t.slice(0,4)),r.a.createElement("p",null,r.a.createElement("b",null,"Lugar de publicaci\xf3n:")," ",l.publishPlace),r.a.createElement("p",null,r.a.createElement("b",null,"Edici\xf3n:")," ",l.edition),r.a.createElement("p",null,r.a.createElement("b",null,"Formato:")," ",null===(a=l.format)||void 0===a?void 0:a.toLowerCase()),r.a.createElement("p",null,r.a.createElement("b",null,"N\xfamero de p\xe1ginas:")," ",l.pages),r.a.createElement("p",null,r.a.createElement("b",null,"ISBN:")," ",l.ISBN)),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"Rese\xf1a:")),r.a.createElement("p",null,l.description)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"Estantes: ")),r.a.createElement(X,{shelves:o,bookId:b,setNewShelf:d})))),h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:l.cover,alt:"Book cover"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:Q},r.a.createElement(u.b,null,"Cancelar")))),r.a.createElement("form",{onSubmit:function(e){return J.apply(this,arguments)}},r.a.createElement("label",null,"T\xedtulo"),r.a.createElement("input",Object.assign({required:!0,type:"text",name:"title",id:"title"},g)),r.a.createElement("br",null),r.a.createElement("label",null,"Nombre del autor(a)"),r.a.createElement("input",Object.assign({type:"text",name:"authorFirstName",id:"authorFirstName"},y)),r.a.createElement("br",null),r.a.createElement("label",null,"Apellido del autor(a)"),r.a.createElement("input",Object.assign({type:"text",name:"authorLastName",id:"authorLastName"},w)),r.a.createElement("br",null),r.a.createElement("label",null,"Editorial"),r.a.createElement("input",Object.assign({type:"text",name:"publisher",id:"publisher"},S)),r.a.createElement("br",null),r.a.createElement("label",null,"A\xf1o de publicaci\xf3n"),r.a.createElement("input",Object.assign({type:"text",name:"published",id:"published"},C)),r.a.createElement("br",null),r.a.createElement("label",null,"Edici\xf3n"),r.a.createElement("input",Object.assign({type:"text",name:"edition",id:"edition"},A)),r.a.createElement("br",null),r.a.createElement("label",null,"ISBN"),r.a.createElement("input",Object.assign({type:"text",name:"ISBN",id:"ISBN"},_)),r.a.createElement("br",null),r.a.createElement("label",null,"Lugar de publicaci\xf3n"),r.a.createElement("input",Object.assign({type:"text",name:"publishPlace",id:"publishPlace"},P)),r.a.createElement("br",null),r.a.createElement("label",null,"P\xe1ginas"),r.a.createElement("input",Object.assign({type:"text",name:"pages",id:"pages"},I)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Descripci\xf3n"),r.a.createElement("input",Object.assign({type:"text",name:"description",id:"description"},q)),r.a.createElement("br",null),r.a.createElement("label",null,"Formato"),r.a.createElement("select",Object.assign({required:!0,name:"format"},L),r.a.createElement("option",{value:"",selected:!0},"Selecciona una opci\xf3n"),r.a.createElement("option",{value:"TAPA BLANDA"},"Tapa blanda"),r.a.createElement("option",{value:"TAPA DURA"},"Tapa dura"),r.a.createElement("option",{value:"EBOOK "},"Ebook")),r.a.createElement("label",null,"Portada"),r.a.createElement("input",{type:"file",onChange:function(e){return G.apply(this,arguments)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Editar libro"))))};var ee=function(e){var t=e.match.params.bookId,a=Object(n.useState)(null),l=Object(p.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)(!0),b=Object(p.a)(o,2),E=b[0],d=b[1],f=Object(n.useState)(!1),v=Object(p.a)(f,2),h=v[0],j=v[1],O=Object(n.useState)(!1),g=Object(p.a)(O,2),y=g[0],w=g[1],N=Object(n.useState)(null),S=Object(p.a)(N,2),C=S[0],A=S[1],_=Object(n.useState)(null),P=Object(p.a)(_,2),B=P[0],F=P[1],L=Object(n.useState)(null),q=Object(p.a)(L,2),D=q[0],U=q[1],T=Object(n.useState)(!1),R=Object(p.a)(T,2),Q=R[0],G=R[1],J=Object(n.useState)(!1),W=Object(p.a)(J,2),H=W[0],X=W[1],ee=Object(n.useState)(!1),te=Object(p.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(!1),le=Object(p.a)(re,2),ce=le[0],ue=le[1];function ie(){return(ie=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:a=e.sent,i(a.book),A(a.book.notes),F(a.book.quotes),U(a.book.bookshelves);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t);case 2:G(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:X(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){ie.apply(this,arguments)}(),G(!1),X(!1),ue(!1),ne(!1)}),[Q,H,ce,ae]),r.a.createElement("div",{className:"bookdetail"},c?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{book:c,setUpdateBook:ue,bookShelves:D,bookId:t,setNewShelf:ne}),r.a.createElement("div",{className:"notesbook"},r.a.createElement(u.b,{onClick:function(){d(!0),j(!1),w(!1)}},r.a.createElement(x.a,{icon:k.c}),"\xa0Notas"),r.a.createElement(u.b,{onClick:function(){d(!1),j(!0),w(!1)}},r.a.createElement(x.a,{icon:k.g}),"\xa0Citas"),r.a.createElement(u.b,{onClick:function(){d(!1),j(!1),w(!0)}},r.a.createElement(x.a,{icon:k.f}),"\xa0Referencia"),E&&r.a.createElement("div",{className:"notescards"},r.a.createElement(Y,{bookIdToUse:t,setNewNote:G}),C?C.map((function(e,t){return r.a.createElement("div",{className:"onenotecard",key:t},r.a.createElement("p",null,e.chapter),e.pages&&r.a.createElement("p",null,"P\xe1gina(s): ",e.pages),r.a.createElement("p",null,e.description),r.a.createElement("button",{onClick:function(){!function(e){oe.apply(this,arguments)}(e._id)}},"Eliminar nota"))})):r.a.createElement("p",null,"Agrega tus notas sobre el libro")),h&&r.a.createElement("div",{className:"notescards"},r.a.createElement($,{bookIdToUse:t,setNewQuote:X}),null===B||void 0===B?void 0:B.map((function(e,t){return r.a.createElement("div",{className:"onenotecard",key:t},r.a.createElement("p",null,"\xab",e.description,"\xbb"),e.pages&&r.a.createElement("p",null,"P\xe1gina(s): ",e.pages),e.note&&r.a.createElement("p",null,"Nota: ",e.note),r.a.createElement("button",{onClick:function(){!function(e){se.apply(this,arguments)}(e._id)}},"Eliminar nota"))}))),y&&r.a.createElement("div",{className:"notescards"},"Referencias",r.a.createElement(z,{bookData:c})))):r.a.createElement(M,null))};var te=function(e){var t=e.history,a=N(""),l=N(""),c=N(""),u=N(""),i=N(""),o=N(""),b=N(""),d=N(""),f=N(""),v=N(""),h=N(""),j=Object(n.useState)("https://res.cloudinary.com/dxncdwsau/image/upload/v1601179377/All%20My%20Books/All_My_Books_fwa6ma.jpg"),O=Object(p.a)(j,2),g=O[0],y=O[1];function x(){return(x=Object(m.a)(s.a.mark((function e(t){var a,n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files,(n=new FormData).append("file",a[0]),n.append("upload_preset","all_my_books"),e.next=6,E.a.post("http://api.cloudinary.com/v1_1/dxncdwsau/image/upload",n);case 6:r=e.sent,l=r.data.secure_url,y(l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(m.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,_({title:a.value,authorFirstName:l.value,authorLastName:c.value,publisher:u.value,published:i.value,edition:o.value,ISBN:b.value,publishPlace:d.value,pages:f.value,format:v.value,description:h.value,cover:g});case 3:t.push("/userhome");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"newbook"},r.a.createElement("h2",null,"Crea un nuevo libro"),r.a.createElement("form",{onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement("label",null,"T\xedtulo"),r.a.createElement("input",Object.assign({required:!0,type:"text",name:"title",id:"title"},a)),r.a.createElement("br",null),r.a.createElement("label",null,"Nombre del autor(a)"),r.a.createElement("input",Object.assign({type:"text",name:"author",id:"author"},l)),r.a.createElement("br",null),r.a.createElement("label",null,"Apellido del autor(a)"),r.a.createElement("input",Object.assign({type:"text",name:"author",id:"author"},c)),r.a.createElement("br",null),r.a.createElement("label",null,"Editorial"),r.a.createElement("input",Object.assign({type:"text",name:"publisher",id:"publisher"},u)),r.a.createElement("br",null),r.a.createElement("label",null,"A\xf1o de publicaci\xf3n"),r.a.createElement("input",Object.assign({type:"text",name:"published",id:"published"},i)),r.a.createElement("br",null),r.a.createElement("label",null,"Edici\xf3n"),r.a.createElement("input",Object.assign({type:"text",name:"edition",id:"edition"},o)),r.a.createElement("br",null),r.a.createElement("label",null,"ISBN"),r.a.createElement("input",Object.assign({type:"text",name:"ISBN",id:"ISBN"},b)),r.a.createElement("br",null),r.a.createElement("label",null,"Lugar de publicaci\xf3n"),r.a.createElement("input",Object.assign({type:"text",name:"publishPlace",id:"publishPlace"},d)),r.a.createElement("br",null),r.a.createElement("label",null,"P\xe1ginas"),r.a.createElement("input",Object.assign({type:"text",name:"pages",id:"pages"},f)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Descripci\xf3n"),r.a.createElement("input",Object.assign({type:"text",name:"description",id:"description"},h)),r.a.createElement("br",null),r.a.createElement("label",null,"Formato"),r.a.createElement("select",Object.assign({required:!0,name:"format"},v),r.a.createElement("option",{value:"",selected:!0},"Selecciona una opci\xf3n"),r.a.createElement("option",{value:"TAPA BLANDA"},"Tapa blanda"),r.a.createElement("option",{value:"TAPA DURA"},"Tapa dura"),r.a.createElement("option",{value:"EBOOK "},"Ebook")),r.a.createElement("label",null,"Portada"),r.a.createElement("input",{type:"file",onChange:function(e){return x.apply(this,arguments)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"}," Crear libro")))};var ae=function(){var e=Object(n.useContext)(g).user,t=N(null===e||void 0===e?void 0:e.username),a=N(null===e||void 0===e?void 0:e.email),l=Object(n.useState)(null===e||void 0===e?void 0:e.profilePhoto),c=Object(p.a)(l,2),i=c[0],o=c[1],b=Object(n.useState)(!1),d=Object(p.a)(b,2),f=d[0],v=d[1],h=Object(n.useState)(null),O=Object(p.a)(h,2),y=O[0],w=O[1],S=Object(n.useState)(!1),C=Object(p.a)(S,2),A=(C[0],C[1],Object(n.useState)(!1)),_=Object(p.a)(A,2),P=_[0],I=_[1],B=N(null===y||void 0===y?void 0:y.name);function F(){return(F=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,w(t.shelves.shelves);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){I(!P)}function q(){v(!f)}function D(){return(D=Object(m.a)(s.a.mark((function e(t){var a,n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files,(n=new FormData).append("file",a[0]),n.append("upload_preset","all_my_books"),e.next=6,E.a.post("http://api.cloudinary.com/v1_1/dxncdwsau/image/upload",n);case 6:r=e.sent,l=r.data.secure_url,o(l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(m.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,j({username:t.value,email:a.value,profilePhoto:i});case 3:console.log(t.value),v(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"userProfile"},!f&&e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:e.profilePhoto,alt:"Profile"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:q}," ",r.a.createElement(x.a,{icon:k.d}),"\xa0",r.a.createElement(u.b,null,"Editar")))),r.a.createElement("div",null,r.a.createElement("h2",null,e.username),r.a.createElement("h3",null,e.email)),!P&&r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"Estantes:")),r.a.createElement("ul",null,y?y.map((function(e,t){return r.a.createElement("li",null,e.name)})):r.a.createElement("p",null,"A\xfan no tienes estantes")),r.a.createElement("button",{onClick:L},"Edita tus estantes")),P&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,null===y||void 0===y?void 0:y.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,y.name),r.a.createElement("input",Object.assign({type:"text",name:"name",id:"name"},B)))}))),r.a.createElement("button",{onClick:L},"Cancelar"))):r.a.createElement(r.a.Fragment,null),f&&e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:e.profilePhoto,alt:"Profile"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:q},r.a.createElement(u.b,null,"Cancelar")))),r.a.createElement("form",{onSubmit:function(e){return T.apply(this,arguments)}},r.a.createElement("label",null,"Nombre de usuario: "),r.a.createElement("input",Object.assign({required:!0,type:"text",name:"username",id:"username"},t)),r.a.createElement("br",null),r.a.createElement("label",null,"Email: "),r.a.createElement("input",Object.assign({type:"text",name:"email",id:"email"},a)),r.a.createElement("label",null,"Foto de perfil: "),r.a.createElement("input",{type:"file",onChange:function(e){return D.apply(this,arguments)}}),r.a.createElement("button",{type:"submit"},"Editar libro"))):r.a.createElement(r.a.Fragment,null))},ne=function(){return r.a.createElement(u.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{component:C,path:"/",exact:!0}),r.a.createElement(w,null,r.a.createElement(i.a,{component:Q,path:"/userhome",exact:!0}),r.a.createElement(i.a,{component:te,path:"/newbook",exact:!0}),r.a.createElement(i.a,{component:ee,path:"/detialbook/:bookId",exact:!0}),r.a.createElement(i.a,{component:ae,path:"/userconfig",exact:!0}))))};c.a.render(r.a.createElement(y,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2aeba47e.chunk.js.map