(function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],s=0,d=[];s<i.length;s++)u=i[s],o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"446c":function(e,t,n){"use strict";var r=n("92d9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Index")],1)},u=[],i=n("e3ba"),c={name:"app",components:{Index:i["default"]}},l=c,f=n("2877"),s=Object(f["a"])(l,a,u,!1,null,null,null),d=s.exports,p=function(){return Promise.resolve().then(n.bind(null,"e3ba"))},v=[{path:"/",name:"/",redirect:"/index",components:p}],h=n("e069"),b=n.n(h);n("dcad");r["default"].use(o["a"]),r["default"].use(b.a);var m={routes:v},g=new o["a"](m);r["default"].component("Button",h["Button"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(d)},router:g}).$mount("#app")},"92d9":function(e,t,n){},e3ba:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("video",{staticClass:"video",attrs:{controls:"",src:"http://1252524126.vod2.myqcloud.com/9764a7a5vodtransgzp1252524126/6b8babae5285890786435081820/drm/v.f230.m3u8"}})])}],a=(n("cadf"),n("551c"),n("097d"),{data:function(){return{place:["在家呆着 ?","新加坡","马来西亚","张家界","加班","日本","印度","泰国","西藏","福建"],x:0,flag:!1,time:""}},methods:{button:function(e){var t=this;if(this.flag=!e,e)clearInterval(this.time);else{var n=this.place.length;this.time=setInterval(function(){var e=Math.ceil(Math.random()*n);e>1&&(t.x=e-1)},10)}},popsort:function(e){if(e instanceof Array){for(var t=e.length,n=0;n<t;n++)for(var r=0;r<t-1-n;r++)if(e[r]>e[r+1]){var o=e[r+1];e[r+1]=e[r],e[r]=o}return e}}}}),u=a,i=(n("446c"),n("2877")),c=Object(i["a"])(u,r,o,!1,null,"604b4aa7",null);t["default"]=c.exports}});
//# sourceMappingURL=app.a3ad1fba.js.map