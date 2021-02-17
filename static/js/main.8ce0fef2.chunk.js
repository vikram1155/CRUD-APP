(this["webpackJsonpblog-crud"]=this["webpackJsonpblog-crud"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(16),i=c.n(s),j=(c(22),c(23),c(6)),a=c(0);var l=function(e){var t=e.blogs;return Object(a.jsx)("div",{className:"BlogList",children:t.map((function(e){return Object(a.jsx)("div",{className:"blog-preview",children:Object(a.jsx)("div",{children:Object(a.jsxs)(j.b,{to:"/blogs/".concat(e.id),children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("h5",{children:["Written by ",e.author]})]})})},"{blog.id}")}))})},o=c(8),b=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!0),j=Object(o.a)(i,2),a=j[0],l=j[1],b=Object(n.useState)(null),d=Object(o.a)(b,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw h("Could not Fetch");return e.json()})).then((function(e){s(e),l(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch error"):(u(e.message),l(!1))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isLoading:a,error:h}},d=function(){var e=b("http://localhost:8000/blogs"),t=e.data,c=e.isLoading,n=e.error;return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("h1",{children:"HomePage"}),n&&Object(a.jsxs)("div",{children:[" ",n]}),c&&Object(a.jsx)("div",{children:Object(a.jsx)("img",{height:"100",src:"https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"})}),t&&Object(a.jsx)(l,{blogs:t})]})};var h=function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("h1",{className:"a",children:"Your Feed"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)(j.b,{to:"/",children:"Home"}),Object(a.jsx)(j.b,{to:"/create",children:"Create"})]})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),j=i[0],l=i[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),h=d[0],O=d[1],x=Object(u.f)();return Object(a.jsxs)("div",{className:"create",children:[Object(a.jsx)("h2",{children:"Add a New Blog"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:j,author:h};fetch("http://localhost:8000/blogs",{method:"Post",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(){alert("New blog added"),x.push("/")}))},children:[Object(a.jsx)("label",{children:"Blog title:"}),Object(a.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(a.jsx)("label",{children:"Blog body:"}),Object(a.jsx)("textarea",{required:!0,value:j,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("label",{children:"Blog author:"}),Object(a.jsx)("input",{type:"text",required:!0,value:h,onChange:function(e){return O(e.target.value)}}),Object(a.jsx)("button",{children:"Add Blog"})]})]})},x=function(){var e=Object(u.g)().id,t=b("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,r=t.isLoading,s=Object(u.f)();return Object(a.jsxs)("div",{className:"blog-details",children:[r&&Object(a.jsx)("div",{children:Object(a.jsx)("img",{alt:"loading",height:"100",src:"https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"})}),n&&Object(a.jsx)("div",{children:n}),c&&Object(a.jsxs)("article",{children:[Object(a.jsx)("h2",{children:c.title}),Object(a.jsxs)("p",{children:["Written by ",c.author]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:c.body}),Object(a.jsx)("div",{className:"create",children:Object(a.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"Delete"}).then((function(){s.push("/")}))},children:"Delete"})})]})]})},g=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Webpage Cannot be Found"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"Notfound",children:Object(a.jsx)(j.b,{to:"/",children:"Back to home"})})]})};var f=function(){return Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",children:Object(a.jsx)(d,{})}),Object(a.jsx)(u.a,{path:"/Create",children:Object(a.jsx)(O,{})}),Object(a.jsx)(u.a,{path:"/Blogs/:id",children:Object(a.jsx)(x,{})}),Object(a.jsx)(u.a,{path:"*",children:Object(a.jsx)(g,{})})]})})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.8ce0fef2.chunk.js.map