(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),l=a(3),o=a.n(l),u=a(6),s=a(2),m=(a(13),a(14),a(1)),p=a.n(m),g=(p.a.shape({userId:p.a.number.isRequired,id:p.a.number.isRequired,title:p.a.string.isRequired,body:p.a.string.isRequired}),function(e){var t=e.posts;return e.loading?c.a.createElement("h1",null,"Loading..."):c.a.createElement("ul",{className:"list-group"},t.map((function(e){return c.a.createElement("li",{className:"list-group-item",key:e.id},e.id,". \xa0",e.body)})))}),d=(a(17),function(e){for(var t=e.length,a=e.perPage,n=e.onPageChange,r=e.handleNext,i=e.handlePrevious,l=e.currentPage,o=e.withInfo,u=e.onPerPage,s=[],m=Math.ceil(t/a),p=1;p<=m;p+=1)s.push(p);return c.a.createElement("nav",{"aria-label":"Page navigation example"},c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{value:a,onChange:u,className:"select",id:"inputGroupSelect04","aria-label":"Example select with button addon"},c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"5"},"5"),c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"20"},"20"))),c.a.createElement("h2",null,o()),c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",{className:1===l?"page-item disabled":"page-item"},c.a.createElement("button",{type:"button",className:"page-link",onClick:i},"Previous")),s.map((function(e){return c.a.createElement("li",{className:e===l?"page-item active":"page-item",key:e},c.a.createElement("button",{type:"button",className:"page-link",onClick:function(){return n(e)}},e))})),c.a.createElement("li",{className:l===m?"page-item disabled":"page-item"},c.a.createElement("button",{type:"button",className:"page-link",onClick:r},"Next"))))}),f=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),l=Object(s.a)(i,2),m=l[0],p=l[1],f=Object(n.useState)(1),h=Object(s.a)(f,2),b=h[0],E=h[1],v=Object(n.useState)(10),N=Object(s.a)(v,2),P=N[0],j=N[1],k=b*P,y=k-P,O=m.slice(y,k);Object(n.useEffect)((function(){r(!0),function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return p(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),r(!1)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{posts:O,loading:a}),c.a.createElement(d,{onPerPage:function(e){j(+e.target.value),E(1)},length:m.length,perPage:P,onPageChange:function(e){E(e)},handlePrevious:function(){E(b-1)},handleNext:function(){E(b+1)},currentPage:b,withInfo:function(){return"".concat(y+1," - ").concat(k," of ").concat(m.length)}}))};i.a.render(c.a.createElement(f,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.a78560aa.chunk.js.map