(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{"/mas":function(t,e,n){t.exports={navigation:"post-navigation-module--navigation--3VtCO",buttons:"post-navigation-module--buttons--CZBoe"}},AphP:function(t,e,n){"use strict";var r=n("XKFU"),o=n("S/j/"),i=n("apmT");r(r.P+r.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=o(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},Bl7J:function(t,e,n){"use strict";var r=n("hvP/"),o=n("q1tI"),i=n.n(o),a=n("fcpr"),u=n.n(a),c=n("Wbzz"),l=n("mBog"),s=n.n(l),f=n("yoHs"),p=n.n(f);p.a.baseFontSize="18px";var h=new s.a(p.a),d=(h.scale,h.rhythm),b=(h.options,n("EYWl")),g=function(t){var e=t.tabTitle,n=t.pageTitle,o=t.pagination,a=(t.tags,t.home,t.children),l=r.data.site.siteMetadata,s=l.title,f=l.repositoryUrl;return i.a.createElement("div",{className:u.a.layout},i.a.createElement(b.a,{title:e}),i.a.createElement("header",null,i.a.createElement(c.Link,{to:"/"},i.a.createElement("h3",null,s)),i.a.createElement("nav",null,i.a.createElement(c.Link,{to:"/blog"},"Blog"),i.a.createElement(c.Link,{to:"/projects"},"Projects"),i.a.createElement(c.Link,{to:"/about"},"About Me"),i.a.createElement(c.Link,{to:"/recommendations"},"Recommendations"))),i.a.createElement("div",{className:u.a.title},i.a.createElement("h1",null,n),o&&i.a.createElement("p",{style:{marginTop:d(2)}},"Page ",o.currentPage,"/",o.numPages)),i.a.createElement("div",{style:{marginBottom:d(1)}},a),i.a.createElement("footer",null,"Copyright © 2020. ",s," is built with Gatsby.js. The repository can be found ",i.a.createElement("a",{href:f},"here.")))};e.a=g;g.defaultProps={tabTitle:null,pageTitle:null,pagination:null,tags:[],home:null}},"Eb/5":function(t,e,n){"use strict";n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});e.LARGER_DISPLAY_WIDTH="1600px",e.LARGE_DISPLAY_WIDTH="1280px",e.DEFAULT_WIDTH="980px",e.TABLET_WIDTH="768px",e.MOBILE_WIDTH="480px",e.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",e.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",e.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",e.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",e.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",e.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",e.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",e.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",e.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",e.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},"FU/f":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("pIFo"),n("KKXr");var r=function(t,e){var n=t.split("/"),r=n[n.length-2].replace("-"," ");return e||r}},L2L3:function(t,e,n){t.exports={subtitle:"blog-post-module--subtitle--2sM_R"}},Lnxd:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function c(t){return function(e){return r.createElement(l,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return r.createElement(e.tag,a({key:n},e.attr),t(e.child))}))}(t.child))}}function l(t){var e=function(e){var n,o=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var i=t.attr,c=t.title,l=u(t,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,l,{className:n,style:a({color:t.color||e.color},e.style,t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},aZJH:function(t,e){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}t.exports=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!n(e))throw new Error("Hue is not a number");if(!n(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var o=0;if(0!==e){o=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var i=0;return r?(i=t/100,t="100%,"):(i=(100-t)/100,t="0%,"),"hsla("+e+","+o+"%,"+t+i+")"}},b6eB:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("IdFE"),u=n("Tgqd"),c=n("/mas"),l=n.n(c);e.a=function(t){var e=t.nextPost,n=t.prevPost,r=t.home;return o.a.createElement("div",{className:l.a.navigation},o.a.createElement("hr",null),o.a.createElement("div",{className:l.a.buttons},e.published?o.a.createElement("p",null,o.a.createElement(i.Link,{to:e.slug},o.a.createElement(a.a,{style:{marginRight:"15px"}}),e.title)):o.a.createElement("p",null,o.a.createElement(i.Link,{to:r},o.a.createElement(u.a,{style:{marginRight:"15px"}})," Home")),n.published?o.a.createElement("p",null,o.a.createElement(i.Link,{to:n.slug},n.title,o.a.createElement(a.b,{style:{marginLeft:"15px"}}))):o.a.createElement("p",null,o.a.createElement(i.Link,{to:r},o.a.createElement(u.a,{style:{marginRight:"15px"}})," Home"))))}},fYzJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("FU/f"),o=function(t,e,n){var o=t.filter((function(t){return t.node.fields.slug===e})),i=0!==o.length?o[0].node:void 0;if(i){var a;switch(this.slug=i.fields.slug,n){case"Project":a=i;break;case"Post":a=i.frontmatter;break;default:throw new Error("Invalid node type")}this.title=Object(r.a)(this.slug,a.title),this.published=a.published}else this.published=!1}},fcpr:function(t,e,n){t.exports={layout:"layout-module--layout--WT_lX",title:"layout-module--title--2pFnw"}},"hvP/":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"A Programmer\'s Perspective","repositoryUrl":"https://github.com/woojiahao.github.io"}}}}')},mBog:function(t,e,n){(function(e){n("AphP"),n("HAE/"),n("V+eJ"),n("f3/d"),n("eM6i"),n("hHhE"),n("LK8F"),n("pIFo"),n("Oyvg"),n("a1Th"),n("h7Nl"),n("SRfc"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("KKXr"),n("8+KV"),n("bWfx"),n("91GP"),n("ioFf");var r,o,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,r,o=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))a.call(n,l)&&(o[l]=n[l]);if(i){r=i(n);for(var s=0;s<r.length;s++)u.call(n,r[s])&&(o[r[s]]=n[r[s]])}}return o},l=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},s=function(t){return l(t)[0]},f=function(t){return null==t&&(t=t),function(e,n,r,o){null==r&&(r=t),null==o&&(o=r);var i=l(e)[1];if(i===n)return e;var a=s(e);if("px"!==i)if("em"===i)a=s(e)*s(r);else if("rem"===i)a=s(e)*s(t);else{if("ex"!==i)return e;a=s(e)*s(r)*2}var u=a;if("px"!==n)if("em"===n)u=a/s(o);else if("rem"===n)u=a/s(t);else{if("ex"!==n)return e;u=a/s(o)/2}return parseFloat(u.toFixed(5))+n}},p=l,h=function(t){return p(t)[1]},d=function(t){return p(t)[0]},b={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},g=function(t,e){var n,r=f(e.baseFontSize),o=d(r(t,"px")),i=d(e.baseLineHeightInPx),a=d(r(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(n+=e.roundToNearestHalfLine?.5:1),n},m=function(t){var e=f(t.baseFontSize);return function(n,r,o){null==n&&(n=1),null==r&&(r=t.baseFontSize),null==o&&(o=0);var i=n*d(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,r);return"px"===h(a)&&(a=Math.floor(d(a))+h(a)),parseFloat(d(a).toFixed(5))+h(a)}},y=Object.prototype.toString;function v(t){return!isNaN(parseFloat(t))&&isFinite(t)}r=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Number]"==y.call(t)},o={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};var _=function(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!v(e))throw new Error("Hue is not a number");if(!v(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var r=0;0!==e&&(r=19.92978+-.3651759*t+.001737214*Math.pow(t,2));var o=0;return n?(o=t/100,t="100%,"):(o=(100-t)/100,t="0%,"),"hsla("+e+","+r+"%,"+t+o+")"},j="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var x,O="object"==typeof j&&j&&j.Object===Object&&j,S="object"==typeof self&&self&&self.Object===Object&&self,E=O||S||Function("return this")(),F=E.Symbol,z=Object.prototype,L=z.hasOwnProperty,k=z.toString,P=F?F.toStringTag:void 0,A=Object.prototype.toString,M=F?F.toStringTag:void 0,T=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":M&&M in Object(t)?function(t){var e=L.call(t,P),n=t[P];try{t[P]=void 0;var r=!0}catch(t){}var o=k.call(t);return r&&(e?t[P]=n:delete t[P]),o}(t):function(t){return A.call(t)}(t)},I=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},B=function(t){if(!I(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},R=E["__core-js_shared__"],N=(x=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",H=Function.prototype.toString,D=function(t){if(null!=t){try{return H.call(t)}catch(t){}try{return t+""}catch(t){}}return""},W=/^\[object .+?Constructor\]$/,C=Function.prototype,U=Object.prototype,q=RegExp("^"+C.toString.call(U.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Y=function(t){return!(!I(t)||function(t){return!!N&&N in t}(t))&&(B(t)?q:W).test(D(t))},J=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Y(n)?n:void 0},$=function(){try{var t=J(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),G=function(t,e,n){"__proto__"==e&&$?$(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},Q=function(t,e){return t===e||t!=t&&e!=e},V=Object.prototype.hasOwnProperty,K=function(t,e,n){var r=t[e];V.call(t,e)&&Q(r,n)&&(void 0!==n||e in t)||G(t,e,n)},Z=Array.isArray,X=function(t){return null!=t&&"object"==typeof t},tt=function(t){return"symbol"==typeof t||X(t)&&"[object Symbol]"==T(t)},et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nt=/^\w*$/,rt=function(t,e){if(Z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!tt(t))||nt.test(t)||!et.test(t)||null!=e&&t in Object(e)},ot=J(Object,"create"),it=Object.prototype.hasOwnProperty,at=Object.prototype.hasOwnProperty;function ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ut.prototype.clear=function(){this.__data__=ot?ot(null):{},this.size=0},ut.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ut.prototype.get=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(e,t)?e[t]:void 0},ut.prototype.has=function(t){var e=this.__data__;return ot?void 0!==e[t]:at.call(e,t)},ut.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ot&&void 0===e?"__lodash_hash_undefined__":e,this};var ct=ut,lt=function(t,e){for(var n=t.length;n--;)if(Q(t[n][0],e))return n;return-1},st=Array.prototype.splice;function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ft.prototype.clear=function(){this.__data__=[],this.size=0},ft.prototype.delete=function(t){var e=this.__data__,n=lt(e,t);return!(n<0||(n==e.length-1?e.pop():st.call(e,n,1),--this.size,0))},ft.prototype.get=function(t){var e=this.__data__,n=lt(e,t);return n<0?void 0:e[n][1]},ft.prototype.has=function(t){return lt(this.__data__,t)>-1},ft.prototype.set=function(t,e){var n=this.__data__,r=lt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var pt=ft,ht=J(E,"Map"),dt=function(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=function(){this.size=0,this.__data__={hash:new ct,map:new(ht||pt),string:new ct}},bt.prototype.delete=function(t){var e=dt(this,t).delete(t);return this.size-=e?1:0,e},bt.prototype.get=function(t){return dt(this,t).get(t)},bt.prototype.has=function(t){return dt(this,t).has(t)},bt.prototype.set=function(t,e){var n=dt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};var gt=bt;function mt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(mt.Cache||gt),n}mt.Cache=gt;var yt=mt,vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_t=/\\(\\)?/g,jt=function(t){var e=yt((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(vt,(function(t,n,r,o){e.push(r?o.replace(_t,"$1"):n||t)})),e}),(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}(),wt=F?F.prototype:void 0,xt=wt?wt.toString:void 0,Ot=function t(e){if("string"==typeof e)return e;if(Z(e))return function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,t)+"";if(tt(e))return xt?xt.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},St=function(t,e){return Z(t)?t:rt(t,e)?[t]:jt(function(t){return null==t?"":Ot(t)}(t))},Et=/^(?:0|[1-9]\d*)$/,Ft=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Et.test(t))&&t>-1&&t%1==0&&t<e},zt=function(t){if("string"==typeof t||tt(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e},Lt=function(t,e,n){return null==t?t:function(t,e,n,r){if(!I(t))return t;for(var o=-1,i=(e=St(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=zt(e[o]),l=n;if(o!=a){var s=u[c];void 0===(l=r?r(s,c,u):void 0)&&(l=I(s)?s:Ft(e[o+1])?[]:{})}K(u,c,l),u=u[c]}return t}(t,e,n)},kt=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},Pt=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var u=i[++r];if(!1===e(o[u],u,o))break}return t},At=function(t){return X(t)&&"[object Arguments]"==T(t)},Mt=Object.prototype,Tt=Mt.hasOwnProperty,It=Mt.propertyIsEnumerable,Bt=At(function(){return arguments}())?At:function(t){return X(t)&&Tt.call(t,"callee")&&!It.call(t,"callee")},Rt=function(){return!1},Nt=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?E.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||Rt})),Ht=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;var Wt=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&O.process,i=function(){try{return r&&r.require&&r.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),Ct=Wt&&Wt.isTypedArray,Ut=Ct?function(t){return function(e){return t(e)}}(Ct):function(t){return X(t)&&Ht(t.length)&&!!Dt[T(t)]},qt=Object.prototype.hasOwnProperty,Yt=function(t,e){var n=Z(t),r=!n&&Bt(t),o=!n&&!r&&Nt(t),i=!n&&!r&&!o&&Ut(t),a=n||r||o||i,u=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=u.length;for(var l in t)!e&&!qt.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Ft(l,c))||u.push(l);return u},Jt=Object.prototype,$t=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Jt)},Gt=function(t,e){return function(n){return t(e(n))}},Qt=Gt(Object.keys,Object),Vt=Object.prototype.hasOwnProperty,Kt=function(t){return null!=t&&Ht(t.length)&&!B(t)},Zt=function(t){return Kt(t)?Yt(t):function(t){if(!$t(t))return Qt(t);var e=[];for(var n in Object(t))Vt.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)},Xt=function(t,e){if(null==t)return t;if(!Kt(t))return function(t,e){return t&&Pt(t,e,Zt)}(t,e);for(var n=t.length,r=-1,o=Object(t);++r<n&&!1!==e(o[r],r,o););return t},te=function(t){return t},ee=function(t,e){return(Z(t)?kt:Xt)(t,function(t){return"function"==typeof t?t:te}(e))};function ne(t){var e=this.__data__=new pt(t);this.size=e.size}ne.prototype.clear=function(){this.__data__=new pt,this.size=0},ne.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},ne.prototype.get=function(t){return this.__data__.get(t)},ne.prototype.has=function(t){return this.__data__.has(t)},ne.prototype.set=function(t,e){var n=this.__data__;if(n instanceof pt){var r=n.__data__;if(!ht||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new gt(r)}return n.set(t,e),this.size=n.size,this};var re=ne,oe=function(t,e,n){(void 0===n||Q(t[e],n))&&(void 0!==n||e in t)||G(t,e,n)},ie=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?E.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=i?i(n):new t.constructor(n);return t.copy(r),r}})),ae=E.Uint8Array,ue=function(t,e){var n=e?function(t){var e=new t.constructor(t.byteLength);return new ae(e).set(new ae(t)),e}(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},ce=Object.create,le=function(){function t(){}return function(e){if(!I(e))return{};if(ce)return ce(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),se=Gt(Object.getPrototypeOf,Object),fe=Function.prototype,pe=Object.prototype,he=fe.toString,de=pe.hasOwnProperty,be=he.call(Object),ge=function(t,e){return"__proto__"==e?void 0:t[e]},me=Object.prototype.hasOwnProperty,ye=function(t){if(!I(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=$t(t),n=[];for(var r in t)("constructor"!=r||!e&&me.call(t,r))&&n.push(r);return n},ve=function(t){return Kt(t)?Yt(t,!0):ye(t)},_e=function(t){return function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=r?r(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),o?G(n,u,c):K(n,u,c)}return n}(t,ve(t))},je=function(t,e,n,r,o,i,a){var u=ge(t,n),c=ge(e,n),l=a.get(c);if(l)oe(t,n,l);else{var s=i?i(u,c,n+"",t,e,a):void 0,f=void 0===s;if(f){var p=Z(c),h=!p&&Nt(c),d=!p&&!h&&Ut(c);s=c,p||h||d?Z(u)?s=u:function(t){return X(t)&&Kt(t)}(u)?s=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(u):h?(f=!1,s=ie(c,!0)):d?(f=!1,s=ue(c,!0)):s=[]:function(t){if(!X(t)||"[object Object]"!=T(t))return!1;var e=se(t);if(null===e)return!0;var n=de.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&he.call(n)==be}(c)||Bt(c)?(s=u,Bt(u)?s=_e(u):(!I(u)||r&&B(u))&&(s=function(t){return"function"!=typeof t.constructor||$t(t)?{}:le(se(t))}(c))):f=!1}f&&(a.set(c,s),o(s,c,r,i,a),a.delete(c)),oe(t,n,s)}},we=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},xe=Math.max,Oe=function(t){return function(){return t}},Se=Date.now,Ee=function(t){var e=0,n=0;return function(){var r=Se(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}($?function(t,e){return $(t,"toString",{configurable:!0,enumerable:!1,value:Oe(e),writable:!0})}:te),Fe=function(t,e){return Ee(function(t,e,n){return e=xe(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=xe(r.length-e,0),a=Array(i);++o<i;)a[o]=r[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=r[o];return u[e]=n(a),we(t,this,u)}}(t,e,te),t+"")},ze=function(t){return Fe((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&function(t,e,n){if(!I(n))return!1;var r=typeof e;return!!("number"==r?Kt(n)&&Ft(e,n.length):"string"==r&&e in n)&&Q(n[e],t)}(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var u=n[r];u&&t(e,u,r)}return e}))}((function(t,e,n){!function t(e,n,r,o,i){e!==n&&Pt(n,(function(a,u){if(I(a))i||(i=new re),je(e,n,u,r,t,o,i);else{var c=o?o(ge(e,u),a,u+"",e,n,i):void 0;void 0===c&&(c=a),oe(e,u,c)}}),ve)}(t,e,n)})),Le=function(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n};function ke(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new gt;++e<n;)this.add(t[e])}ke.prototype.add=ke.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},ke.prototype.has=function(t){return this.__data__.has(t)};var Pe=ke,Ae=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},Me=function(t,e){return t.has(e)},Te=function(t,e,n,r,o,i){var a=1&n,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var s=-1,f=!0,p=2&n?new Pe:void 0;for(i.set(t,e),i.set(e,t);++s<u;){var h=t[s],d=e[s];if(r)var b=a?r(d,h,s,e,t,i):r(h,d,s,t,e,i);if(void 0!==b){if(b)continue;f=!1;break}if(p){if(!Ae(e,(function(t,e){if(!Me(p,e)&&(h===t||o(h,t,n,r,i)))return p.push(e)}))){f=!1;break}}else if(h!==d&&!o(h,d,n,r,i)){f=!1;break}}return i.delete(t),i.delete(e),f},Ie=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},Be=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Re=F?F.prototype:void 0,Ne=Re?Re.valueOf:void 0,He=Object.prototype.propertyIsEnumerable,De=Object.getOwnPropertySymbols,We=De?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}(De(t),(function(e){return He.call(t,e)})))}:function(){return[]},Ce=function(t){return function(t,e,n){var r=e(t);return Z(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Zt,We)},Ue=Object.prototype.hasOwnProperty,qe=J(E,"DataView"),Ye=J(E,"Promise"),Je=J(E,"Set"),$e=J(E,"WeakMap"),Ge=D(qe),Qe=D(ht),Ve=D(Ye),Ke=D(Je),Ze=D($e),Xe=T;(qe&&"[object DataView]"!=Xe(new qe(new ArrayBuffer(1)))||ht&&"[object Map]"!=Xe(new ht)||Ye&&"[object Promise]"!=Xe(Ye.resolve())||Je&&"[object Set]"!=Xe(new Je)||$e&&"[object WeakMap]"!=Xe(new $e))&&(Xe=function(t){var e=T(t),n="[object Object]"==e?t.constructor:void 0,r=n?D(n):"";if(r)switch(r){case Ge:return"[object DataView]";case Qe:return"[object Map]";case Ve:return"[object Promise]";case Ke:return"[object Set]";case Ze:return"[object WeakMap]"}return e});var tn,en=Xe,nn="[object Arguments]",rn="[object Array]",on="[object Object]",an=Object.prototype.hasOwnProperty,un=function(t,e,n,r,o,i){var a=Z(t),u=Z(e),c=a?rn:en(t),l=u?rn:en(e),s=(c=c==nn?on:c)==on,f=(l=l==nn?on:l)==on,p=c==l;if(p&&Nt(t)){if(!Nt(e))return!1;a=!0,s=!1}if(p&&!s)return i||(i=new re),a||Ut(t)?Te(t,e,n,r,o,i):function(t,e,n,r,o,i,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new ae(t),new ae(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Q(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=Ie;case"[object Set]":if(u||(u=Be),t.size!=e.size&&!(1&r))return!1;var c=a.get(t);if(c)return c==e;r|=2,a.set(t,e);var l=Te(u(t),u(e),r,o,i,a);return a.delete(t),l;case"[object Symbol]":if(Ne)return Ne.call(t)==Ne.call(e)}return!1}(t,e,c,n,r,o,i);if(!(1&n)){var h=s&&an.call(t,"__wrapped__"),d=f&&an.call(e,"__wrapped__");if(h||d){var b=h?t.value():t,g=d?e.value():e;return i||(i=new re),o(b,g,n,r,i)}}return!!p&&(i||(i=new re),function(t,e,n,r,o,i){var a=1&n,u=Ce(t),c=u.length;if(c!=Ce(e).length&&!a)return!1;for(var l=c;l--;){var s=u[l];if(!(a?s in e:Ue.call(e,s)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var p=!0;i.set(t,e),i.set(e,t);for(var h=a;++l<c;){var d=t[s=u[l]],b=e[s];if(r)var g=a?r(b,d,s,e,t,i):r(d,b,s,t,e,i);if(!(void 0===g?d===b||o(d,b,n,r,i):g)){p=!1;break}h||(h="constructor"==s)}if(p&&!h){var m=t.constructor,y=e.constructor;m!=y&&"constructor"in t&&"constructor"in e&&!("function"==typeof m&&m instanceof m&&"function"==typeof y&&y instanceof y)&&(p=!1)}return i.delete(t),i.delete(e),p}(t,e,n,r,o,i))},cn=function t(e,n,r,o,i){return e===n||(null==e||null==n||!X(e)&&!X(n)?e!=e&&n!=n:un(e,n,r,o,t,i))},ln=function(t){return t==t&&!I(t)},sn=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}},fn=function(t){var e=function(t){for(var e=Zt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,ln(o)]}return e}(t);return 1==e.length&&e[0][2]?sn(e[0][0],e[0][1]):function(n){return n===t||function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],l=t[c],s=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var f=new re;if(r)var p=r(l,s,c,t,e,f);if(!(void 0===p?cn(s,l,3,r,f):p))return!1}}return!0}(n,t,e)}},pn=function(t,e){for(var n=0,r=(e=St(e,t)).length;null!=t&&n<r;)t=t[zt(e[n++])];return n&&n==r?t:void 0},hn=function(t,e){return null!=t&&e in Object(t)},dn=function(t,e){return null!=t&&function(t,e,n){for(var r=-1,o=(e=St(e,t)).length,i=!1;++r<o;){var a=zt(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Ht(o)&&Ft(a,o)&&(Z(t)||Bt(t))}(t,e,hn)},bn=function(t,e){return rt(t)&&ln(e)?sn(zt(t),e):function(n){var r=function(t,e,n){var r=null==t?void 0:pn(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?dn(n,t):cn(e,r,3)}},gn=function(t){return rt(t)?function(t){return function(e){return null==e?void 0:e[t]}}(zt(t)):function(t){return function(e){return pn(e,t)}}(t)},mn=function(t){return"function"==typeof t?t:null==t?te:"object"==typeof t?Z(t)?bn(t[0],t[1]):fn(t):gn(t)},yn=function(t,e,n,r,o){return o(t,(function(t,o,i){n=r?(r=!1,t):e(n,t,o,i)})),n},vn=function(t,e,n){var r=Z(t)?Le:yn,o=arguments.length<3;return r(t,mn(e),n,o,Xt)},_n=function(t,e,n){var r;return void 0===t&&(t={}),r=Z(e)?e:[e],ee(r,(function(e){ee(n,(function(n,r){Lt(t,e+"."+r,n)}))})),t},jn=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],wn=function(t){return-1!==jn.indexOf(t)?t:"'"+t+"'"},xn=(tn=w((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"})))&&tn.__esModule&&Object.prototype.hasOwnProperty.call(tn,"default")?tn.default:tn;t.exports=function(t){var e,n,i,a,u=c({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),l=(e=u,n=JSON.parse(JSON.stringify(b)),i=Object.assign({},n,e),a=f(i.baseFontSize),h(i.baseLineHeight)?(d(a(i.baseFontSize,"px")),i.baseLineHeightInPx=a(i.baseLineHeight,"px")):i.baseLineHeightInPx=d(i.baseFontSize)*i.baseLineHeight+"px",{rhythm:m(i),establishBaseline:function(){return f((t=i).baseFontSize),{fontSize:d(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return g(t,i)},adjustFontSizeTo:function(t,e,n){return null==e&&(e="auto"),function(t,e,n,r){null==n&&(n=r.baseFontSize),"%"===h(t)&&(t=d(r.baseFontSize)*(d(t)/100)+"px");var o=f(r.baseFontSize);t=o(t,"px",n=o(n,"px"));var i=m(r);return"auto"===e&&(e=g(t,r)),{fontSize:o(t,r.rhythmUnit,n),lineHeight:i(e,n)}}(t,e,n,i)}});return l.scale=function(t){var e=parseInt(u.baseFontSize,10),n=function(t,e){var n;return null==t&&(t=0),null==e&&(e="golden"),n=r(e)?e:null!=o[e]?o[e]:o.golden,Math.pow(n,t)}(t,u.scaleRatio)*e+"px";return l.adjustFontSizeTo(n)},Object.assign({},{options:u},l,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var n={},r=t.establishBaseline();n=_n(n,"html",{font:r.fontSize+"/"+r.lineHeight+" "+e.bodyFontFamily.map(wn).join(","),boxSizing:"border-box",overflowY:"scroll"}),n=_n(n,["*","*:before","*:after"],{boxSizing:"inherit"}),n=_n(n,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(wn).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),n=_n(n,"img",{maxWidth:"100%"});var o;o=function(t){return"number"==typeof t||X(t)&&"[object Number]"==T(t)}(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):function(t){return"string"==typeof t||!Z(t)&&X(t)&&"[object String]"==T(t)}(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),n=_n(n,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),n=_n(n,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),n=_n(n,["b","strong","dt","th"],{fontWeight:e.boldWeight}),n=_n(n,"hr",{background:_(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),n=_n(n,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),n=_n(n,"li",{marginBottom:"calc("+o+" / 2)"}),n=_n(n,["ol li","ul li"],{paddingLeft:0}),n=_n(n,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),n=_n(n,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),n=_n(n,["li > p"],{marginBottom:"calc("+o+" / 2)"}),n=_n(n,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(n=_n(n,["abbr","acronym"],{borderBottom:"1px dotted "+_(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+_(50),cursor:"help",textDecoration:"none"},n=_n(n,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),n=_n(n,["thead"],{textAlign:"left"}),n=_n(n,["td,th"],{textAlign:"left",borderBottom:"1px solid "+_(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),n=_n(n,"th:first-child,td:first-child",{paddingLeft:0}),n=_n(n,"th:last-child,td:last-child",{paddingRight:0}),n=_n(n,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(wn).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),s=t.scale(-.3);return ee([i,a,u,c,l,s],(function(t,r){n=Lt(n,"h"+(r+1)+".fontSize",t.fontSize),n=Lt(n,"h"+(r+1)+".lineHeight",e.headerLineHeight)})),Z(e.plugins)&&(n=vn(e.plugins,(function(n,r){return ze(n,r(t,e,n))}),n)),e.overrideStyles&&B(e.overrideStyles)&&(n=ze(n,e.overrideStyles(t,e,n))),e.overrideThemeStyles&&B(e.overrideThemeStyles)&&(n=ze(n,e.overrideThemeStyles(t,e,n))),n}(l,u)},toString:function(){return function(t,e,n){var r=function t(e){return vn(e,(function(e,n,r){return e+=r+"{",ee(n,(function(n,r){if(I(n)){var o={};o[r]=n,e+=t(o)}else{var i=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(r,"-")+":"+n+";";["Webkit","ms","Moz","O"].forEach((function(t){r.slice(0,t.length)===t&&(i="-"+i)})),e+=i}})),e+="}"}),"")}(n);return e.includeNormalize&&(r=""+xn+r),r}(0,u,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString();var e=document.head;e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}})}}).call(this,n("yLpj"))},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return f}));var r=n("q1tI"),o=n.n(r),i=n("Bl7J"),a=n("FU/f"),u=n("L2L3"),c=n.n(u),l=n("b6eB"),s=n("fYzJ");e.default=function(t){var e=t.data,n=t.pageContext,r=e.markdownRemark,u=Object(a.a)(r.fields.slug,r.frontmatter.title),f=e.allMarkdownRemark.edges,p=new s.a(f,n.next,"Post"),h=new s.a(f,n.prev,"Post");return o.a.createElement(i.a,{pageTitle:u,tabTitle:u},o.a.createElement("div",null,o.a.createElement("h4",{className:c.a.subtitle},"Published on: ",r.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),o.a.createElement(l.a,{nextPost:p,prevPost:h,home:"/blog"}))};var f="2753423265"},yoHs:function(t,e,n){"use strict";n("91GP"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});var r,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("aZJH"),a=(r=i)&&r.__esModule?r:{default:r},u=n("Eb/5");var c={title:"St. Annes",baseFontSize:"16px",baseLineHeight:1.5625,googleFonts:[{name:"Source Serif Pro",styles:["600"]},{name:"Source Sans Pro",styles:["400","400i","700"]}],headerFontFamily:["Source Serif Pro","sans-serif"],bodyFontFamily:["Source Sans Pro","sans-serif"],headerColor:"hsla(0,0%,0%,1)",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:600,bodyWeight:400,boldWeight:700,overrideStyles:function(t,e){var n=t.adjustFontSizeTo,r=t.scale,i=t.rhythm;return function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({a:{color:"#fb251b",textDecoration:"none"},"a:hover,a:active":{color:e.bodyColor},"h1,h2,h3,h4,h5,h6":{marginTop:i(2)},blockquote:o({},r(.2),{color:(0,a.default)(41),paddingLeft:i(1.125),marginLeft:0,borderLeft:i(6/16)+" solid",borderColor:"#fcea0e"}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":o({},n(e.baseFontSize),{color:e.bodyColor,fontWeight:e.bodyWeight}),"blockquote cite:before":{content:'"— "'}},u.MOBILE_MEDIA_QUERY,{blockquote:{marginLeft:i(-3/4),marginRight:0,borderLeft:i(3/16)+" solid",borderColor:"#fcea0e",paddingLeft:i(9/16)}})}};e.default=c}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d37aa197d0ebbbfed578.js.map