(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/mas":function(e,t,a){e.exports={navigation:"post-navigation-module--navigation--3VtCO",buttons:"post-navigation-module--buttons--CZBoe"}},"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var c=a("TqRt");t.__esModule=!0,t.default=void 0;var i,r=c(a("PJYZ")),n=c(a("VbXa")),s=c(a("8OQS")),d=c(a("pVnL")),l=c(a("q1tI")),o=c(a("17x9")),f=function(e){var t=(0,d.default)({},e),a=t.resolutions,c=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),c&&(t.fluid=c,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(w&&!!window.matchMedia(t).matches)},u=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(w&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),a=u(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,w="undefined"!=typeof window,m=w&&window.IntersectionObserver,x=new WeakMap;function _(e){return e.map((function(e){var t=e.src,a=e.srcSet,c=e.srcSetWebp,i=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},c&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:c,sizes:r}),l.default.createElement("source",{media:i,srcSet:a,sizes:r}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,c=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:c})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,c=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:c})}))}function R(e,t){var a=e.srcSet,c=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?c:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),x.set(e,t)),function(){a.unobserve(e),x.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",c=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+n+s+a+c+t+r+i+d+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var a=e.src,c=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(V,(0,d.default)({ref:t,src:a},r,{ariaHidden:n}));return c.length>1?l.default.createElement("picture",null,i(c),s):s})),V=l.default.forwardRef((function(e,t){var a=e.sizes,c=e.srcSet,i=e.src,r=e.style,n=e.onLoad,o=e.onError,f=e.loading,p=e.draggable,u=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":u,sizes:a,srcSet:c,src:i},g,{onLoad:n,onError:o,ref:t,loading:f,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));V.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=w&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&m&&!a.isCritical&&!a.seenBefore;var c=a.isCritical||w&&(v||!a.useIOSupport);return a.state={isVisible:c,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=u(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,c=e.className,i=e.style,r=void 0===i?{}:i,n=e.imgStyle,s=void 0===n?{}:n,o=e.placeholderStyle,p=void 0===o?{}:o,u=e.placeholderClassName,h=e.fluid,b=e.fixed,v=e.backgroundColor,w=e.durationFadeIn,m=e.Tag,x=e.itemProp,S=e.loading,R=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,d.default)({opacity:j?1:0,transition:L?"opacity "+w+"ms":"none"},s),W="boolean"==typeof v?"lightgray":v,C={transitionDelay:w+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},L&&C,{},s,{},p),N={title:t,alt:this.state.isVisible?"":a,style:k,className:u,itemProp:x};if(h){var P=h,M=g(h);return l.default.createElement(m,{className:(c||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(m,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),W&&l.default.createElement(m,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:W,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&C)}),M.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:N,imageVariants:P,generateSources:E}),M.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:N,imageVariants:P,generateSources:y}),this.state.isVisible&&l.default.createElement("picture",null,_(P),l.default.createElement(V,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:S},M,{imageVariants:P}))}}))}if(b){var H=b,G=g(b),T=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},r);return"inherit"===r.display&&delete T.display,l.default.createElement(m,{className:(c||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},W&&l.default.createElement(m,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:W,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},L&&C)}),G.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:N,imageVariants:H,generateSources:E}),G.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:N,imageVariants:H,generateSources:y}),this.state.isVisible&&l.default.createElement("picture",null,_(H),l.default.createElement(V,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:S},G,{imageVariants:H}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),W=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string});L.propTypes={resolutions:z,sizes:W,fixed:o.default.oneOfType([z,o.default.arrayOf(z)]),fluid:o.default.oneOfType([W,o.default.arrayOf(W)]),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var C=L;t.default=C},AX8O:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return w}));var c=a("q1tI"),i=a.n(c),r=a("Bl7J"),n=a("FU/f"),s=a("fYzJ"),d=a("DlV6"),l=a.n(d),o=(a("0mN4"),a("Z2Ku"),a("L9s1"),a("a65h")),f=a("9eSz"),p=a.n(f),u=a("rDCr"),g=a.n(u),h=a("ma3e"),b=function(e){var t=Object(c.useState)(0),a=t[0],r=t[1],n=o.data.allFile;console.log(n);var s=n.edges.filter((function(t){return t.node.relativeDirectory.includes(e.folder)})).map((function(e){var t=e.node;return{id:t.id,fixed:t.childImageSharp.fixed,fluid:t.childImageSharp.fluid}}));if(s.length<1)return i.a.createElement("div",null);var d=s.length-1,l=s[a];return i.a.createElement("div",{className:g.a.carouselContainer},i.a.createElement("div",{className:g.a.carousel},i.a.createElement("div",{className:g.a.backgroundImage},i.a.createElement(p.a,{fluid:l.fluid,id:l.id})),i.a.createElement("div",{className:g.a.foregroundImage},i.a.createElement(p.a,{fixed:l.fixed,id:l.id}))),i.a.createElement("div",{className:g.a.navigation},i.a.createElement("div",{onClick:function(){return r(0===a?d:a-1)}},i.a.createElement(h.a,{size:"2em"})),i.a.createElement("div",{onClick:function(){return r(a===d?0:a+1)}},i.a.createElement(h.b,{size:"2em"}))))},v=a("b6eB"),w=(t.default=function(e){var t=e.data,a=e.pageContext,c=t.projectsJson,d=Object(n.a)(c.fields.slug,c.title),o=c.technologies.languages,f=c.technologies.libraries,p=t.allProjectsJson.edges,u=new s.a(p,a.next,"Project"),g=new s.a(p,a.prev,"Project"),h=o&&o.length>1?"Languages":"Language",w=f&&f.length>1?"Libraries":"Library";return i.a.createElement(r.a,{title:d,hidePagination:!0},i.a.createElement("div",{className:l.a.listing},c.images&&i.a.createElement(b,{folder:c.images}),i.a.createElement("div",{className:l.a.content},i.a.createElement("h2",null,"Technologies"),o&&i.a.createElement("div",null,i.a.createElement("h3",null,h),i.a.createElement("ul",null,o.map((function(e){return i.a.createElement("li",null,e)})))),f&&i.a.createElement("div",null,i.a.createElement("h3",null,w),i.a.createElement("ul",null,f.map((function(e){return i.a.createElement("li",null,e)})))),i.a.createElement("h2",null,"Description"),i.a.createElement("p",null,c.description),i.a.createElement("h2",null,"Lessons"),i.a.createElement("ul",null,c.lessons.map((function(e){return i.a.createElement("li",null,e)}))))),i.a.createElement(v.a,{nextPost:u,prevPost:g,home:"/projects"}))},"1190212964")},DlV6:function(e,t,a){e.exports={listing:"project-listing-module--listing--xlao5",content:"project-listing-module--content--38tNg"}},EK0E:function(e,t,a){"use strict";var c,i=a("dyZX"),r=a("CkkT")(0),n=a("KroJ"),s=a("Z6vF"),d=a("czNK"),l=a("ZD67"),o=a("0/R4"),f=a("s5qY"),p=a("s5qY"),u=!i.ActiveXObject&&"ActiveXObject"in i,g=s.getWeak,h=Object.isExtensible,b=l.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},w={get:function(e){if(o(e)){var t=g(e);return!0===t?b(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(f(this,"WeakMap"),e,t)}},m=e.exports=a("4LiD")("WeakMap",v,w,l,!0,!0);p&&u&&(d((c=l.getConstructor(v,"WeakMap")).prototype,w),s.NEED=!0,r(["delete","has","get","set"],(function(e){var t=m.prototype,a=t[e];n(t,e,(function(t,i){if(o(t)&&!h(t)){this._f||(this._f=new c);var r=this._f[e](t,i);return"set"==e?this:r}return a.call(this,t,i)}))})))},"FU/f":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("pIFo"),a("KKXr");var c=function(e,t){var a=e.split("/"),c=a[a.length-2].replace("-"," ");return t||c}},INYr:function(e,t,a){"use strict";var c=a("XKFU"),i=a("CkkT")(6),r="findIndex",n=!0;r in[]&&Array(1)[r]((function(){n=!1})),c(c.P+c.F*n,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(r)},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP");var c=a("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=c.createContext&&c.createContext(i),n=function(){return(n=Object.assign||function(e){for(var t,a=1,c=arguments.length;a<c;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(c=Object.getOwnPropertySymbols(e);i<c.length;i++)t.indexOf(c[i])<0&&(a[c[i]]=e[c[i]])}return a};function d(e){return function(t){return c.createElement(l,n({attr:n({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return c.createElement(t.tag,n({key:a},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var a,i=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var r=e.attr,d=e.title,l=s(e,["attr","title"]);return c.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:a,style:n({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),d&&c.createElement("title",null,d),e.children)};return void 0!==r?c.createElement(r.Consumer,null,(function(e){return t(e)})):t(i)}},OGtf:function(e,t,a){var c=a("XKFU"),i=a("eeVq"),r=a("vhPU"),n=/"/g,s=function(e,t,a,c){var i=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(c).replace(n,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),c(c.P+c.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var c=a("3Lyj"),i=a("Z6vF").getWeak,r=a("y3w9"),n=a("0/R4"),s=a("9gX7"),d=a("SlkY"),l=a("CkkT"),o=a("aagx"),f=a("s5qY"),p=l(5),u=l(6),g=0,h=function(e){return e._l||(e._l=new b)},b=function(){this.a=[]},v=function(e,t){return p(e.a,(function(e){return e[0]===t}))};b.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=u(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,r){var l=e((function(e,c){s(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=c&&d(c,a,e[r],e)}));return c(l.prototype,{delete:function(e){if(!n(e))return!1;var a=i(e);return!0===a?h(f(this,t)).delete(e):a&&o(a,this._i)&&delete a[this._i]},has:function(e){if(!n(e))return!1;var a=i(e);return!0===a?h(f(this,t)).has(e):a&&o(a,this._i)}}),l},def:function(e,t,a){var c=i(r(t),!0);return!0===c?h(e).set(t,a):c[e._i]=a,e},ufstore:h}},a65h:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"relativeDirectory":"posts/images/KotlinToDo","childImageSharp":{"fixed":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'711\'%20viewBox=\'0%200%20400%20711\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2045v44h401V0H0v45M226%207c-2%201-2%203-2%207v5h9v-5c0-5-2-8-4-8l-3%201m111%200c-2%201-2%203-2%207v5h9v-5c0-5-2-8-4-8l-3%201M9%2013v5h13V7H9v6m307%2034c-9%203-10%2017%200%2021%204%201%208%201%2011-3%209-8%200-21-11-18m-3%204c-5%206-1%2015%207%2015%205%200%208-4%208-8%200-8-9-12-15-7m28%20582c-26%209-28%2045-3%2057%207%204%2020%203%2026%200%2019-10%2024-34%209-49-8-9-22-12-32-8\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","width":281,"height":500,"src":"/static/4595c148c3049cdb2ddb84c7bad43d28/bcd5c/preview_2.jpg","srcSet":"/static/4595c148c3049cdb2ddb84c7bad43d28/bcd5c/preview_2.jpg 1x,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/34180/preview_2.jpg 1.5x,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/dff5b/preview_2.jpg 2x","srcWebp":"/static/4595c148c3049cdb2ddb84c7bad43d28/ce070/preview_2.webp","srcSetWebp":"/static/4595c148c3049cdb2ddb84c7bad43d28/ce070/preview_2.webp 1x,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/f9c66/preview_2.webp 1.5x,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/23ceb/preview_2.webp 2x"},"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'711\'%20viewBox=\'0%200%20400%20711\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2045v44h401V0H0v45M226%207c-2%201-2%203-2%207v5h9v-5c0-5-2-8-4-8l-3%201m111%200c-2%201-2%203-2%207v5h9v-5c0-5-2-8-4-8l-3%201M9%2013v5h13V7H9v6m307%2034c-9%203-10%2017%200%2021%204%201%208%201%2011-3%209-8%200-21-11-18m-3%204c-5%206-1%2015%207%2015%205%200%208-4%208-8%200-8-9-12-15-7m28%20582c-26%209-28%2045-3%2057%207%204%2020%203%2026%200%2019-10%2024-34%209-49-8-9-22-12-32-8\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":0.5617977528089888,"src":"/static/4595c148c3049cdb2ddb84c7bad43d28/2f1b1/preview_2.jpg","srcSet":"/static/4595c148c3049cdb2ddb84c7bad43d28/fd013/preview_2.jpg 200w,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/25252/preview_2.jpg 400w,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/2f1b1/preview_2.jpg 800w,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/1920d/preview_2.jpg 1080w","srcWebp":"/static/4595c148c3049cdb2ddb84c7bad43d28/ccdb5/preview_2.webp","srcSetWebp":"/static/4595c148c3049cdb2ddb84c7bad43d28/6b183/preview_2.webp 200w,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/fc32b/preview_2.webp 400w,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/ccdb5/preview_2.webp 800w,\\n/static/4595c148c3049cdb2ddb84c7bad43d28/4c77b/preview_2.webp 1080w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"node":{"relativeDirectory":"posts/images/KotlinToDo","childImageSharp":{"fixed":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'565\'%20height=\'500\'%20viewBox=\'0%200%20565%20500\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2016l1%2031v17h278V2H0v14m283%2017v31h279V2H283v31m218%204c-7%208%203%2018%2011%2011%203-3%203-7%200-10-3-4-9-4-11-1m1%201c-4%204-1%2010%204%2010%206%200%208-7%204-10-3-3-6-2-8%200M237%20445c-21%2011-15%2041%209%2041%2018%200%2027-21%2016-36-6-6-18-9-25-5m283-1c-21%208-16%2040%206%2042%2024%202%2032-32%2010-42h-16\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","width":565,"height":500,"src":"/static/0ff87c68a38aef4cea27d0e06b35052e/1bcea/preview_3.png","srcSet":"/static/0ff87c68a38aef4cea27d0e06b35052e/1bcea/preview_3.png 1x","srcWebp":"/static/0ff87c68a38aef4cea27d0e06b35052e/ce070/preview_3.webp","srcSetWebp":"/static/0ff87c68a38aef4cea27d0e06b35052e/ce070/preview_3.webp 1x"},"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'354\'%20viewBox=\'0%200%20400%20354\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%202v23l1%2021h197V1H99L0%202m200%200v23l1%2021h197V1h-99l-99%201m-32%20313c-6%202-8%207-8%2014s0%207%203%2011c10%209%2026%202%2026-11%200-11-11-18-21-14m200%200c-8%203-11%2015-7%2022%208%2013%2028%207%2028-8%200-11-12-18-21-14\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.1299435028248588,"src":"/static/0ff87c68a38aef4cea27d0e06b35052e/12c7f/preview_3.png","srcSet":"/static/0ff87c68a38aef4cea27d0e06b35052e/8ac63/preview_3.png 200w,\\n/static/0ff87c68a38aef4cea27d0e06b35052e/3891b/preview_3.png 400w,\\n/static/0ff87c68a38aef4cea27d0e06b35052e/12c7f/preview_3.png 792w","srcWebp":"/static/0ff87c68a38aef4cea27d0e06b35052e/c8ca9/preview_3.webp","srcSetWebp":"/static/0ff87c68a38aef4cea27d0e06b35052e/6b183/preview_3.webp 200w,\\n/static/0ff87c68a38aef4cea27d0e06b35052e/fc32b/preview_3.webp 400w,\\n/static/0ff87c68a38aef4cea27d0e06b35052e/c8ca9/preview_3.webp 792w","sizes":"(max-width: 792px) 100vw, 792px"}}}},{"node":{"relativeDirectory":"posts/images/KotlinToDo","childImageSharp":{"fixed":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'281\'%20height=\'500\'%20viewBox=\'0%200%20281%20500\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2032v31h282V0H0v32m237%20414c-14%207-16%2024-5%2035%2013%2014%2036%204%2036-15%200-16-16-27-31-20\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","width":281,"height":500,"src":"/static/9010f17a3b457d8fc58bc1d768c53de5/bcd5c/preview_1.jpg","srcSet":"/static/9010f17a3b457d8fc58bc1d768c53de5/bcd5c/preview_1.jpg 1x,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/34180/preview_1.jpg 1.5x,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/dff5b/preview_1.jpg 2x","srcWebp":"/static/9010f17a3b457d8fc58bc1d768c53de5/ce070/preview_1.webp","srcSetWebp":"/static/9010f17a3b457d8fc58bc1d768c53de5/ce070/preview_1.webp 1x,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/f9c66/preview_1.webp 1.5x,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/23ceb/preview_1.webp 2x"},"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'281\'%20height=\'500\'%20viewBox=\'0%200%20281%20500\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2032v31h282V0H0v32m237%20414c-14%207-16%2024-5%2035%2013%2014%2036%204%2036-15%200-16-16-27-31-20\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":0.5617977528089888,"src":"/static/9010f17a3b457d8fc58bc1d768c53de5/2f1b1/preview_1.jpg","srcSet":"/static/9010f17a3b457d8fc58bc1d768c53de5/fd013/preview_1.jpg 200w,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/25252/preview_1.jpg 400w,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/2f1b1/preview_1.jpg 800w,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/1920d/preview_1.jpg 1080w","srcWebp":"/static/9010f17a3b457d8fc58bc1d768c53de5/ccdb5/preview_1.webp","srcSetWebp":"/static/9010f17a3b457d8fc58bc1d768c53de5/6b183/preview_1.webp 200w,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/fc32b/preview_1.webp 400w,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/ccdb5/preview_1.webp 800w,\\n/static/9010f17a3b457d8fc58bc1d768c53de5/4c77b/preview_1.webp 1080w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"node":{"relativeDirectory":"posts/images/woojiahao.github.io","childImageSharp":{"fixed":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'990\'%20height=\'500\'%20viewBox=\'0%200%20990%20500\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M343%20145l3%204c2%202%202%202%201%203-2%202-2%202-3%200v-2l-1-1-2-1-1-1-2-1c-3%200-3%200-3%206l-1%203v3c-2%200-2%201%200%203h2c1-1%202%200%204%202%205%204%2012%202%2012-4%200-4-3-12-4-12l-2-1c-1-2-3-3-3-1m-46%204l1%201%201%206-1%205-1%201%203%201%204-1-1-1-1-3c0-3%205-3%206%201l-1%202-1%201%203%201c2%200%203%200%203-7v-7h-3c-3%200-3%200-2%201%201%203%201%204-2%205-3%200-3%200-3-2l1-3%201-1h-7m108%200l1%201%202%204c3%2010%203%2010%205%205l3-5%201%204c2%206%203%206%204%200l3-7c1-1%200-2-1-2-2-1-4%201-2%201v4c-2%204-2%203-2-3-1-2-5-3-6-2l1%201v3l-2%203c-1%200-2-5-1-6%202-1%202-1-2-1h-4m79%200l-2%201v11l-1%201%203%201c3%200%203%200%202-3%200-4%200-4%202-4%203%200%203%200%203%203l-1%202v1l3%201%203-1-1-1-1-5%201-6%201-1h-7l1%201%201%203c0%202%200%202-3%202-2%200-2%200-2-3l1-4-3%201m-100%204v2l1%205c-1%203-1%203%201%203s3%200%203-4l1-5%201%204c-1%205-1%205%201%205s3-1%203-4l1-5%201%204c-1%205-1%205%202%205%202%200%202%200%201-3-1-8%200-8-8-8l-8%201\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","width":990,"height":500,"src":"/static/f3cd09a78e5ab29afac5ad6b51f76fa3/1bcea/preview_1.png","srcSet":"/static/f3cd09a78e5ab29afac5ad6b51f76fa3/1bcea/preview_1.png 1x,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/eecba/preview_1.png 1.5x","srcWebp":"/static/f3cd09a78e5ab29afac5ad6b51f76fa3/ce070/preview_1.webp","srcSetWebp":"/static/f3cd09a78e5ab29afac5ad6b51f76fa3/ce070/preview_1.webp 1x,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/f9c66/preview_1.webp 1.5x"},"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'202\'%20viewBox=\'0%200%20400%20202\'%20preserveAspectRatio=\'none\'/%3e","aspectRatio":1.9801980198019802,"src":"/static/f3cd09a78e5ab29afac5ad6b51f76fa3/bc8e0/preview_1.png","srcSet":"/static/f3cd09a78e5ab29afac5ad6b51f76fa3/8ac63/preview_1.png 200w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/3891b/preview_1.png 400w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/bc8e0/preview_1.png 800w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/6050d/preview_1.png 1200w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/00405/preview_1.png 1600w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/61197/preview_1.png 1921w","srcWebp":"/static/f3cd09a78e5ab29afac5ad6b51f76fa3/ccdb5/preview_1.webp","srcSetWebp":"/static/f3cd09a78e5ab29afac5ad6b51f76fa3/6b183/preview_1.webp 200w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/fc32b/preview_1.webp 400w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/ccdb5/preview_1.webp 800w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/9000d/preview_1.webp 1200w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/e0075/preview_1.webp 1600w,\\n/static/f3cd09a78e5ab29afac5ad6b51f76fa3/7035b/preview_1.webp 1921w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"node":{"relativeDirectory":"posts/images/woojiahao.github.io","childImageSharp":{"fixed":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'432\'%20height=\'500\'%20viewBox=\'0%200%20432%20500\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M110%2016l1%203%201-1h2c1%201%201%201%201-1l1%201%202%201h1c1%201%205%200%205-2h1c0%202%201%202%208%202l8-1h2l1-2%201%202c0%201%202%202%202%200%201-1-2-4-3-3l-32-1c-2%200-2%200-2%202m39%200l1%203%201-1h6l1-1c0%202%201%202%202%202h2l3-1h14c2-3%201-3-16-3l-11-1c-3%200-3%200-3%202m-32%20119l-3%201h-6c-1-2-3%201-3%203h1c1-1%201-1%202%201h7l14-1c13%200%2014%200%2014-2l-6-1-5-1h-11l-2-1-2%201m60%201l-1%202c1%202%207%202%207%201h1l2%201%202-1h1c0%202%202%203%203%201l5-1c3%201%204%200%204-1%201-2%200-3-2-2h-7l-7-1h-1l-2%201-2-1c0-1-1-1-3%201m49-1l-12%201h-9l-1%202c0%203%200%203%202%202l2-1h3l3%201h5l2-1h2c1-2%202-2%202-1%201%202%2010%202%2010%201v-2c0-1-1-2-3-1l-3-1h-3m-89%2044c0%202%201%203%203%200h1c0%203%2020%203%2020%200h1l2%202%202-2c-1-2-2-3-5-2h-3l-2%201h-1c0-2%200-2-1-1h-2c0-2-2-1-2%201s0%202-1%201c0-2-1-2-4-2h-3l-2-1c-2%200-3%201-3%203m-32%2081c-3%203%200%204%2015%204l16%201c2%201%204%200%204-3%200-2-1-2-2-2h-33m117%200l-1%202c0%202%201%202%2011%202l13%201c1%201%206-1%206-3s-1-2-7-2h-7c0-2-4-1-4%201s0%202-1%201c0-2-1-2-2-2h-8m-100%2041l-2%202-8-1c-7-1-7-1-7%202%200%202%200%202%2013%202%2010%200%2013-1%2012-2l1-1%201%202%202%201%205%201c2%200%202%200%202-2s0-3-3-3-4%201-4%202c-1%201-1%200-1-1%200-3%200-3-1-2-1%202-7%202-8%200h-2m-7%2085c0%203%200%203%203%203l3-1h3l14%201c17%200%2016%200%2016-2s-1-2-4-2l-4-1h-1l-1%201h-1c-3%201-8%200-8-1h-1c-3%201-16%202-18%200-1-1-1-1-1%202m-10%2042l1%203%201-1h1c2%201%2022%201%2021-1l1-1%201%201c0%201%201%202%204%202h6c3%202%205%200%204-2%200-1-1-2-4-2l-4-1h-1l-2%201-2-1h-1l-1%201-2%201h-1l-2-1-1-1-3-1-3%201-3%201-3%201-2-1c-3-3-5-3-5%201m84%200v3h13l12-1c0-3-1-3-2-2h-1l-2-2h-3l-2%201-2-1h-12c-1-1-1%200-1%202\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","width":432,"height":500,"src":"/static/3e1a5ca44d0639e2f4349130ac19cc15/1bcea/preview_2.png","srcSet":"/static/3e1a5ca44d0639e2f4349130ac19cc15/1bcea/preview_2.png 1x,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/eecba/preview_2.png 1.5x,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/e92c7/preview_2.png 2x","srcWebp":"/static/3e1a5ca44d0639e2f4349130ac19cc15/ce070/preview_2.webp","srcSetWebp":"/static/3e1a5ca44d0639e2f4349130ac19cc15/ce070/preview_2.webp 1x,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/f9c66/preview_2.webp 1.5x,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/23ceb/preview_2.webp 2x"},"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'463\'%20viewBox=\'0%200%20400%20463\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M102%2015l1%202%201-1h1c1%202%209%202%2010%200h22c0-2-3-3-4-2l-29-1c-2%200-2%200-2%202m6%20110l-1%201h-7c0-2-2-1-2%201-1%201%200%202%201%202l2%201h5l14-1h13c0-3-1-3-6-3l-5-1h-12l-1-1-1%201M97%20241c-1%203%201%204%2014%204l15%201c3%200%204-1%203-3%200-1-1-2-4-2h-24c0-2-3-1-4%200m108%200c-1%203%201%204%209%204l8-1h1c1%202%206%202%208%201%204-3%201-4-5-4h-7l-1-1-2%202h-1l-2-1-5-1-3%201m-92%2038c-1%201-2%202-5%201h-6c-2%200-3%203%200%203h3c1%201%202%200%202-1h1c1%202%2013%202%2013%200v-1l1%201%202%201%204%201c1%202%203%200%203-2%200-1-1-2-3-2l-4-1h-11m-6%2077c-1%202%200%204%203%205l2-1h1l1-1h1c1%201%202%202%205%201l5%201h4l8-1c5%201%206%200%206-1%200-2-1-2-3-2l-5-1h-28m-10%2041c0%202%201%203%202%201h1c0%202%2020%202%2020%200h1l7%201c7%201%207%201%207-2%200-2-1-2-4-2h-4c0-1-1-1-1%201h-3v-1l-2-1c-3%202-5%202-6%201-1-2-11%200-11%202h-1c-1-4-6-4-6%200\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":0.8620689655172413,"src":"/static/3e1a5ca44d0639e2f4349130ac19cc15/bc8e0/preview_2.png","srcSet":"/static/3e1a5ca44d0639e2f4349130ac19cc15/8ac63/preview_2.png 200w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/3891b/preview_2.png 400w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/bc8e0/preview_2.png 800w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/6050d/preview_2.png 1200w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/00405/preview_2.png 1600w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/61197/preview_2.png 1921w","srcWebp":"/static/3e1a5ca44d0639e2f4349130ac19cc15/ccdb5/preview_2.webp","srcSetWebp":"/static/3e1a5ca44d0639e2f4349130ac19cc15/6b183/preview_2.webp 200w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/fc32b/preview_2.webp 400w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/ccdb5/preview_2.webp 800w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/9000d/preview_2.webp 1200w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/e0075/preview_2.webp 1600w,\\n/static/3e1a5ca44d0639e2f4349130ac19cc15/7035b/preview_2.webp 1921w","sizes":"(max-width: 800px) 100vw, 800px"}}}}]}}}')},b6eB:function(e,t,a){"use strict";var c=a("q1tI"),i=a.n(c),r=a("Wbzz"),n=a("ma3e"),s=a("/mas"),d=a.n(s);t.a=function(e){var t=e.nextPost,a=e.prevPost,c=e.home;return i.a.createElement("div",{className:d.a.navigation},i.a.createElement("hr",null),i.a.createElement("div",{className:d.a.buttons},t.published?i.a.createElement("p",null,i.a.createElement(r.a,{to:t.slug},i.a.createElement(n.a,{style:{marginRight:"15px"}}),t.title)):i.a.createElement("p",null,i.a.createElement(r.a,{to:c},i.a.createElement(n.c,{style:{marginRight:"15px"}})," Home")),a.published?i.a.createElement("p",null,i.a.createElement(r.a,{to:a.slug},a.title,i.a.createElement(n.b,{style:{marginLeft:"15px"}}))):i.a.createElement("p",null,i.a.createElement(r.a,{to:c},i.a.createElement(n.c,{style:{marginRight:"15px"}})," Home"))))}},fYzJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a("FU/f"),i=function(e,t,a){var i=e.filter((function(e){return e.node.fields.slug===t})),r=0!==i.length?i[0].node:void 0;if(r){var n;switch(this.slug=r.fields.slug,a){case"Project":n=r;break;case"Post":n=r.frontmatter;break;default:throw new Error("Invalid node type")}this.title=Object(c.a)(this.slug,n.title),this.published=n.published}else this.published=!1}},rDCr:function(e,t,a){e.exports={carouselContainer:"image-carousel-module--carousel-container--1tyxZ",carousel:"image-carousel-module--carousel--2Xg0b",backgroundImage:"image-carousel-module--background-image--1RgHi",foregroundImage:"image-carousel-module--foreground-image--157Xf",navigation:"image-carousel-module--navigation--1gega"}}}]);
//# sourceMappingURL=component---src-templates-project-listing-js-f4de02d56947d08224a6.js.map