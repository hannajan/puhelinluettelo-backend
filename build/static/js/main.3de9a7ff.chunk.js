(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(16),c=n.n(r),a=n(7),u=n(3),o=n(2),i=n(0),l=function(e){var t=e.filter,n=e.handleFilterChange;return Object(i.jsxs)("p",{children:["filter shown with ",Object(i.jsx)("input",{value:t,onChange:n})]})},s=function(e){var t=e.addNewPerson,n=e.newName,r=e.handleNameChange,c=e.newNumber,a=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:r})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:c,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var t=e.persons,n=e.filter,r=e.handleClick,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(i.jsx)("ul",{children:c.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:r,value:e.id,children:"delete"})]},e.name)}))})},f=function(e){var t=e.message,n=e.type;return null===t?null:Object(i.jsx)("div",{className:n,children:t})},j=n(4),h=n.n(j),b="/api/persons",m={getAll:function(){return h.a.get(b).then((function(e){return e.data}))},create:function(e){return h.a.post(b,e).then((function(e){return e.data}))},update:function(e,t){return h.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){var t=h.a.delete("".concat(b,"/").concat(e));return console.log(t),t.then((function(e){return e.data}))}},p=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),j=Object(u.a)(c,2),h=j[0],b=j[1],p=Object(o.useState)(""),O=Object(u.a)(p,2),x=O[0],v=O[1],g=Object(o.useState)(""),w=Object(u.a)(g,2),y=w[0],C=w[1],N=Object(o.useState)({text:null,type:null}),k=Object(u.a)(N,2),S=k[0],T=k[1];Object(o.useEffect)((function(){m.getAll().then((function(e){r(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(f,{message:S.text,type:S.type}),Object(i.jsx)(l,{filter:y,handleFilterChange:function(e){return C(e.target.value)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(s,{handleNameChange:function(e){return b(e.target.value)},handleNumberChange:function(e){return v(e.target.value)},addNewPerson:function(e){if(e.preventDefault(),n.find((function(e){return e.name===h}))){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?")))!function(e){var t=Object(a.a)(Object(a.a)({},e),{},{number:x});m.update(e.id,t).then((function(t){r(n.map((function(n){return n.id!==e.id?n:t}))),b(""),v("")})).catch((function(t){T({text:"".concat(e.name," was already deleted from server"),type:"error"}),setTimeout((function(){T({text:null,type:null})}),3e3)}))}(n.find((function(e){return e.name===h})))}else{var t={name:h,number:x};m.create(t).then((function(e){r(n.concat(e)),b(""),v(""),T({text:"Added ".concat(e.name),type:"confirm"}),setTimeout((function(){T({text:null,type:null})}),3e3)})).catch((function(e){console.log(e.response.data.error),T({text:e.response.data.error,type:"error"}),setTimeout((function(){T({text:null,type:null})}),5e3)}))}},newName:h,newNumber:x}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(d,{persons:n,filter:y,handleClick:function(e){var t=e.target.value,c=n.find((function(e){return e.id===t}));window.confirm("Delete ".concat(c.name))&&m.remove(t).then((function(){r(n.filter((function(e){return e.id!==t}))),T({text:"".concat(c.name," was deleted"),type:"confirm"}),setTimeout((function(){T({text:null,type:null})}),3e3)}))}})]})};n(41);c.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3de9a7ff.chunk.js.map