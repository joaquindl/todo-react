(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),s=c(7),a=c.n(s),i=(c(13),c(3)),l=c(8),r=c(0),d=function(t){var e=t.inputText,c=t.setInputText,o=t.todos,n=t.setTodos,s=t.setStatus;return Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",className:"todo-input",onChange:function(t){c(t.target.value)},value:e,placeholder:"Inserte una tarea"}),Object(r.jsx)("button",{className:"todo-button",type:"submit",onClick:function(t){t.preventDefault(),n([].concat(Object(l.a)(o),[{text:e,completed:!1,id:1e3*Math.random()}])),c("")},children:Object(r.jsx)("i",{className:"fas fa-plus-square"})}),Object(r.jsx)("div",{className:"select",onChange:function(t){s(t.target.value)},children:Object(r.jsxs)("select",{name:"todos",className:"filter-todo",children:[Object(r.jsx)("option",{value:"all",children:"Todos"}),Object(r.jsx)("option",{value:"completed",children:"Terminados"}),Object(r.jsx)("option",{value:"uncompleted",children:"Sin Terminar"})]})})]})},u=c(6),j=function(t){var e=t.todo,c=t.todos,o=t.setTodos;return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsx)("li",{className:"todo-item ".concat(e.completed&&"completed"),children:e.text}),Object(r.jsx)("button",{className:"complete-btn",onClick:function(){o(c.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},children:Object(r.jsx)("i",{className:"fas fa-check"})}),Object(r.jsx)("button",{className:"trash-btn",onClick:function(){o(c.filter((function(t){return t.id!==e.id})))},children:Object(r.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,c=t.setTodos,o=t.filtered;return Object(r.jsx)("div",{className:"todo-container",children:Object(r.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(r.jsx)(j,{todo:t,todos:e,setTodos:c},t.id)}))})})};c(15);var f=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)([]),a=Object(i.a)(s,2),l=a[0],u=a[1],j=Object(o.useState)("all"),f=Object(i.a)(j,2),m=f[0],O=f[1],p=Object(o.useState)([]),h=Object(i.a)(p,2),x=h[0],v=h[1];return Object(o.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}}()}),[]),Object(o.useEffect)((function(){!function(){switch(m){case"completed":v(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(l.filter((function(t){return!1===t.completed})));break;default:v(l)}}(),localStorage.setItem("todos",JSON.stringify(l))}),[l,m]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Todo List"})}),Object(r.jsx)(d,{inputText:c,setInputText:n,todos:l,setTodos:u,setStatus:O}),Object(r.jsx)(b,{todos:l,setTodos:u,filtered:x})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.a6004600.chunk.js.map