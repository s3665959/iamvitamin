(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{160:function(e,n,t){e.exports=t(380)},165:function(e,n,t){},166:function(e,n,t){},167:function(e,n,t){},168:function(e,n,t){},169:function(e,n,t){},170:function(e,n){e.exports={siteUrl:"https://www.iamvitamin.com",consumerKey:"ck_45172b0b3e837b04f08194104c58d46a027d1ef7",consumerSecret:"cs_e38cd92e669bb2d7ea111afad300670158daa51d"}},187:function(e,n){},189:function(e,n){},219:function(e,n){},220:function(e,n){},285:function(e,n){},380:function(e,n,t){"use strict";t.r(n);var r=t(9),a=t.n(r),c=t(154),o=t.n(c),s=(t(165),t(155)),i=t(156),u=t(158),l=t(157),m=t(159),d=(t(166),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("h3",null," ",e.monster.name),a.a.createElement("img",{width:"640",height:"640",src:e.monster.images[0].src,alt:"Product"}),a.a.createElement("div",{className:"card-price"}," ",e.monster.price))}),h=(t(167),function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(d,{key:e.id,monster:e})})))}),f=(t(168),function(e){var n=e.placeholder,t=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),p=(t(169),t(170)),v=new(t(171))({url:p.siteUrl,consumerKey:p.consumerKey,consumerSecret:p.consumerSecret,wpAPI:!0,version:"wc/v1"}),w=function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(u.a)(this,Object(l.a)(n).call(this))).handleChange=function(n){return e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e}return Object(m.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.get("products"),fetch("http://iamvitamin.com/wp-json/wc/v3/products?filter[limit]=-1&consumer_key=ck_45172b0b3e837b04f08194104c58d46a027d1ef7&consumer_secret=cs_e38cd92e669bb2d7ea111afad300670158daa51d").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null," \u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e43\u0e2b\u0e21\u0e48 "),a.a.createElement(f,{placeholder:"search for products",handleChange:this.handleChange}),a.a.createElement(h,{monsters:r}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[160,1,2]]]);
//# sourceMappingURL=main.c1f808a4.chunk.js.map