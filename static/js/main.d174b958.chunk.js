(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(16),i=n.n(a),s=n(3),o=n(7),u=n.n(o);n(43);var h=n(17),l=n(18),j=n(20),b=n(19),p=n(0),f=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("img",{src:this.props.src})}}]),n}(r.a.Component),O=f;var d=function(){var t=Object(c.useState)(),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(),i=Object(s.a)(a,2),o=i[0],h=i[1],l=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){u.a.get("https://api.unsplash.com/photos?client_id=yMkkUrmMz1GlVVCkbutsQ6V7VJ8BhGxhhG6egLo0WR8").then((function(t){r(t.data)}))}),[1]),n}(),j=function(t){var e=Object(c.useState)([]),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){u.a.get("https://api.unsplash.com/search/photos?query="+t+"&client_id=yMkkUrmMz1GlVVCkbutsQ6V7VJ8BhGxhhG6egLo0WR8").then((function(t){a(t.data.results)}))}),[t]),r}(o);return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",style:{width:500,height:50,marginLeft:470,marginTop:10,fontSize:20},onChange:function(t){return r(t.target.value)},placeholder:"Search for Photos"}),Object(p.jsx)("button",{style:{backgroundColor:"black",color:"white",height:50,width:100,marginLeft:10,marginTop:10,fontSize:20},onClick:function(){h(n)},children:"Search "})]}),Object(p.jsx)("div",{style:{textAlign:"center",fontSize:40,fontFamily:"Arial"},children:o?n:Object(p.jsx)("label",{children:"Random"})}),Object(p.jsx)("div",{className:"contain",children:o?j.map((function(t,e){return Object(p.jsx)(O,{src:t.urls.regular},e)})):l.map((function(t,e){return Object(p.jsx)(O,{src:t.urls.regular},e)}))})]})};i.a.render(Object(p.jsx)(d,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d174b958.chunk.js.map