(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(54)},23:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),i=(n(23),n(3)),s=n(4),l=n(6),u=n(5),m=n(7),d=n(56),g=n(58),p=n(57),h=n(10),v="https://thundery-rescue.000webhostapp.com/wp-json/wp/v2/",b=n(55),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.data;return"wp:featuredmedia"in t._embedded?(console.log("exist"),e=t._embedded["wp:featuredmedia"][0].source_url):e="No Image",console.log(t),c.a.createElement("div",{className:"post"},c.a.createElement("img",{src:e,alt:""}),c.a.createElement(b.a,{to:"/post/".concat(t.slug),style:{textDecoration:"none"}},c.a.createElement("h3",{className:"post-title"},t.title.rendered)))}}]),t}(a.Component),P=n(15),j=n.n(P),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"loading-screen-center"},c.a.createElement(j.a,{type:"Ball-Triangle",color:"#00BFFF",height:"100",width:"100"}))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prevPage,n=e.nextPage,a=e.buttonState,o=a.prev,r=a.next;return c.a.createElement("div",{className:"pagination"},c.a.createElement("input",{type:"button",value:"Prev",onClick:t,disabled:!o})," ",c.a.createElement("input",{type:"button",value:"Next",onClick:n,disabled:!r}))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!1,totalPages:"",currentPage:"",prevPage:"",nextPage:"",item:[]},n.getPosts=n.getPosts.bind(Object(h.a)(Object(h.a)(n))),n.getNextPage=n.getNextPage.bind(Object(h.a)(Object(h.a)(n))),n.getPrevPage=n.getPrevPage.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getPosts(1)}},{key:"getPosts",value:function(e){var t=this;this.setState({isLoading:!1});var n="";fetch("".concat(v,"Posts?per_page=").concat(6,"&page=").concat(e,"&_embed=1")).then(function(e){return n=e.headers.get("X-WP-TotalPages"),e.json()}).then(function(a){var c=e<=1?null:e-1,o=n==e||"0"===n?null:e+1;console.log(n),t.setState({isLoading:!0,totalPages:n,currentPage:e,prevPage:c,nextPage:o,items:a}),window.scrollTo(0,0)}).catch(function(e){return console.log(e)})}},{key:"getNextPage",value:function(){this.state.nextPage&&this.getPosts(this.state.nextPage)}},{key:"getPrevPage",value:function(){this.state.prevPage&&this.getPosts(this.state.prevPage)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.items;return t?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"post-list"},n.map(function(e,t){return c.a.createElement(f,{key:t,data:e})})),c.a.createElement(E,{nextPage:this.getNextPage,prevPage:this.getPrevPage,buttonState:{prev:this.state.prevPage,next:this.state.nextPage}})):c.a.createElement(O,null)}}]),t}(a.Component),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={isLoading:!1,item:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(e){var t=this;fetch("".concat(v,"posts?slug=").concat(this.props.match.params.id)).then(function(e){return e.json()}).then(function(e){t.setState({isLoading:!0,item:e})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.item;return t?c.a.createElement("div",{className:"post-page"},c.a.createElement("h1",null,n[0].title.rendered),c.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:n[0].content.rendered}})):c.a.createElement(O,null)}}]),t}(a.Component),k=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",null,"thundery Rescue")))},x=(a.Component,n(51),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{basename:"/React-WordPress/*"},c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement(g.a,null,c.a.createElement(p.a,{path:"/",component:y,exact:!0}),c.a.createElement(p.a,{path:"/post/:id",component:w}),c.a.createElement(p.a,{component:function(){return c.a.createElement("div",null,"404 not found")}}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.a5b96c65.chunk.js.map