(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{70:function(e,t,a){e.exports={TagIndexPage:"TagIndexPage_TagIndexPage__3MWyB"}},72:function(e,t,a){e.exports={TagPage:"TagPage_TagPage__21HFr"}},84:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(7),u=a(10),c=a(0),s=a.n(c),i=a(1),l=a(5),f=a(9),p=a(2),g=a(70),m=a.n(g);var h=function(e){var t=e.tags;return s.a.createElement("div",{className:m.a.TagIndexPage},s.a.createElement("h1",null,"Tags"),s.a.createElement("ul",null,t.map(function(e){return s.a.createElement("li",{key:e.href},s.a.createElement(p.Link,{href:e.href},e.name," (",e.count,")"))})))},b=a(24),d=a(72),v=a.n(d);var w=function(e){var t=e.blogRoot,a=e.name,n=e.routes;return s.a.createElement("div",{className:v.a.TagPage},s.a.createElement("h1",null,a," posts"),s.a.createElement("ul",null,n.map(function(e){return s.a.createElement("li",{key:e.url.href},s.a.createElement(b.a,{blogRoot:t,route:e}))})))};var j=function(e){var t=Object.values(e.routes);return Array.from(new Set([].concat.apply([],t.map(function(e){return e.data&&e.data.tags||[]}))))},E=Object(i.e)(Object(i.m)(function(e,t){return Object(u.a)({},t,{tagsRoot:e.mountpath})}),Object(i.j)({"/":Object(i.l)({title:"Tags",getView:function(){var e=Object(o.a)(r.a.mark(function e(t){var a,n,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.mountpath.replace(/\/$/,""),e.next=3,t.router.resolveSiteMap("/",{predicate:function(e){return-1===e.url.pathname.indexOf(a)}});case 3:return n=e.sent,o=j(n),u=Object(f.fromPairs)(o.map(function(e){return[e.toLowerCase(),[]]})),Object.values(n.routes).forEach(function(e){var t=e.data;t&&t.tags&&t.tags.forEach(function(t){t=t.toLowerCase(),u[t]&&u[t].push(e)})}),e.abrupt("return",s.a.createElement(h,{tags:o.map(function(e){return{name:e,href:Object(l.join)(t.mountpath,e.toLowerCase()),count:(u[e]||[]).length}})}));case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),"/:tag":Object(i.l)({getTitle:function(e){return e.params.tag},getView:function(){var e=Object(o.a)(r.a.mark(function e(t,a){var n,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params.tag.toLowerCase(),e.next=3,t.router.resolveSiteMap(a.blogRoot,{predicate:function(e){return-1===e.url.pathname.indexOf(a.tagsRoot)}});case 3:return o=e.sent,u=[],Object.values(o.routes).forEach(function(e){(e.data&&e.data.tags||[]).find(function(e){return e.toLowerCase()===n})&&u.push(e)}),e.abrupt("return",s.a.createElement(w,{blogRoot:a.blogRoot,name:t.params.tag,routes:u}));case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()})}));t.default=E}}]);
//# sourceMappingURL=1.871397b8.chunk.js.map