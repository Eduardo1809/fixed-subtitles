const L=function(){return function(){return function n(r,h,s){function i(a,t){if(!h[a]){if(!r[a]){var l=typeof require=="function"&&require;if(!t&&l)return l(a,!0);if(e)return e(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=h[a]={exports:{}};r[a][0].call(c.exports,function(p){return i(r[a][1][p]||p)},c,c.exports,n,r,h,s)}return h[a].exports}for(var e=typeof require=="function"&&require,o=0;o<s.length;o++)i(s[o]);return i}}()({1:[function(n,r,h){var s=n("regexp.execall"),i=n("fzip"),e=n("flatmap"),o=n("./src/descriptor"),a=function(l,u){u=u||{};var c=null;return e(l,function(p){var f=o(p,c);return f&&(f.type!="comment"||u.comments)?(c||f.key!="Format"||(c=f.value),[f]):null})},t=function(l,u){l=l.toString();var c=s(/^\s*\[(.*)\]\s*$/gm,l);return i(c,c.slice(1),function(p,f){var b=p[1],_=p.index+p[0].length+1,v=f?f.index:l.length,g=l.slice(_,v).split(`
`);return{section:b,body:a(g,u)}})};r.exports=t,r.exports.default=t},{"./src/descriptor":42,flatmap:2,fzip:3,"regexp.execall":40}],2:[function(n,r,h){r.exports=function(s,i,e){var o=[];return Array.isArray(s)&&s.forEach(function(a,t,l){var u=i.call(e,a,t,l);Array.isArray(u)?o.push.apply(o,u):u!=null&&o.push(u)}),o}},{}],3:[function(n,r,h){var s=n("./zip"),i=n("lodash.zipobject"),e=function(o){return function(){if(!arguments.length)return null;var a,t=[].slice.call(arguments,0,-1),l=[].slice.call(arguments,-1)[0];return typeof l=="string"&&(a=l.split(",").map(Function.call.bind("".trim)),l=function(){return i(a,arguments)}),typeof l!="function"?(t.push(l),s.apply(null,t)):t.length?s.apply(null,t)[o](function(u){return l.apply(null,u)}):null}};r.exports=e("map"),r.exports.each=e("forEach")},{"./zip":4,"lodash.zipobject":39}],4:[function(n,r,h){var s=n("lodash.zip");r.exports=function(){return arguments.length>1?s.apply(null,arguments):arguments.length==1?arguments[0].map(function(i){return[i]}):null}},{"lodash.zip":38}],5:[function(n,r,h){r.exports=[]},{}],6:[function(n,r,h){var s=n("lodash._basecreate"),i=n("lodash.isobject"),e=n("lodash._setbinddata"),o=n("lodash._slice"),a=[].push;r.exports=function(t){var l=t[0],u=t[2],c=t[4];function p(){if(u){var f=o(u);a.apply(f,arguments)}if(this instanceof p){var b=s(l.prototype),_=l.apply(b,f||arguments);return i(_)?_:b}return l.apply(c,f||arguments)}return e(p,t),p}},{"lodash._basecreate":7,"lodash._setbinddata":18,"lodash._slice":20,"lodash.isobject":29}],7:[function(n,r,h){(function(s){var i=n("lodash._isnative"),e=n("lodash.isobject"),o=(n("lodash.noop"),i(o=Object.create)&&o);function a(t,l){return e(t)?o(t):{}}o||(a=function(){function t(){}return function(l){if(e(l)){t.prototype=l;var u=new t;t.prototype=null}return u||s.Object()}}()),r.exports=a}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{"lodash._isnative":14,"lodash.isobject":29,"lodash.noop":34}],8:[function(n,r,h){var s=n("lodash.bind"),i=n("lodash.identity"),e=n("lodash._setbinddata"),o=n("lodash.support"),a=/^\s*function[ \n\r\t]+\w/,t=/\bthis\b/,l=Function.prototype.toString;r.exports=function(u,c,p){if(typeof u!="function")return i;if(c===void 0||!("prototype"in u))return u;var f=u.__bindData__;if(f===void 0&&(o.funcNames&&(f=!u.name),!(f=f||!o.funcDecomp))){var b=l.call(u);o.funcNames||(f=!a.test(b)),f||(f=t.test(b),e(u,f))}if(f===!1||f!==!0&&1&f[1])return u;switch(p){case 1:return function(_){return u.call(c,_)};case 2:return function(_,v){return u.call(c,_,v)};case 3:return function(_,v,g){return u.call(c,_,v,g)};case 4:return function(_,v,g,j){return u.call(c,_,v,g,j)}}return s(u,c)}},{"lodash._setbinddata":18,"lodash.bind":21,"lodash.identity":26,"lodash.support":37}],9:[function(n,r,h){var s=n("lodash._basecreate"),i=n("lodash.isobject"),e=n("lodash._setbinddata"),o=n("lodash._slice"),a=[].push;r.exports=function t(l){var u=l[0],c=l[1],p=l[2],f=l[3],b=l[4],_=l[5],v=1&c,g=2&c,j=4&c,k=8&c,y=u;function d(){var w=v?b:this;if(p){var m=o(p);a.apply(m,arguments)}if((f||j)&&(m||(m=o(arguments)),f&&a.apply(m,f),j&&m.length<_))return c|=16,t([u,k?c:-4&c,m,null,b,_]);if(m||(m=arguments),g&&(u=w[y]),this instanceof d){w=s(u.prototype);var x=u.apply(w,m);return i(x)?x:w}return u.apply(w,m)}return e(d,l),d}},{"lodash._basecreate":7,"lodash._setbinddata":18,"lodash._slice":20,"lodash.isobject":29}],10:[function(n,r,h){var s=n("lodash.forin"),i=n("lodash._getarray"),e=n("lodash.isfunction"),o=n("lodash._objecttypes"),a=n("lodash._releasearray"),t="[object Arguments]",l="[object Array]",u="[object Boolean]",c="[object Date]",p="[object Number]",f="[object Object]",b="[object RegExp]",_="[object String]",v=Object.prototype,g=v.toString,j=v.hasOwnProperty;r.exports=function k(y,d,w,m,x,S){if(w){var O=w(y,d);if(O!==void 0)return!!O}if(y===d)return y!==0||1/y==1/d;var U=typeof d;if(!(y!=y||y&&o[typeof y]||d&&o[U]))return!1;if(y==null||d==null)return y===d;var z=g.call(y),q=g.call(d);if(z==t&&(z=f),q==t&&(q=f),z!=q)return!1;switch(z){case u:case c:return+y==+d;case p:return y!=+y?d!=+d:y==0?1/y==1/d:y==+d;case b:case _:return y==String(d)}var W=z==l;if(!W){var K=j.call(y,"__wrapped__"),R=j.call(d,"__wrapped__");if(K||R)return k(K?y.__wrapped__:y,R?d.__wrapped__:d,w,m,x,S);if(z!=f)return!1;var F=y.constructor,N=d.constructor;if(F!=N&&!(e(F)&&F instanceof F&&e(N)&&N instanceof N)&&"constructor"in y&&"constructor"in d)return!1}var C=!x;x||(x=i()),S||(S=i());for(var D=x.length;D--;)if(x[D]==y)return S[D]==d;var A=0;if(O=!0,x.push(y),S.push(d),W){if(D=y.length,A=d.length,(O=A==D)||m)for(;A--;){var B=D,I=d[A];if(m)for(;B--&&!(O=k(y[B],I,w,m,x,S)););else if(!(O=k(y[A],I,w,m,x,S)))break}}else s(d,function($,E,P){if(j.call(P,E))return A++,O=j.call(y,E)&&k(y[E],$,w,m,x,S)}),O&&!m&&s(y,function($,E,P){if(j.call(P,E))return O=--A>-1});return x.pop(),S.pop(),C&&(a(x),a(S)),O}},{"lodash._getarray":13,"lodash._objecttypes":16,"lodash._releasearray":17,"lodash.forin":24,"lodash.isfunction":28}],11:[function(n,r,h){r.exports=function(s){return s.charCodeAt(0)}},{}],12:[function(n,r,h){var s=n("lodash._basebind"),i=n("lodash._basecreatewrapper"),e=n("lodash.isfunction"),o=n("lodash._slice"),a=[],t=a.push,l=a.unshift;r.exports=function u(c,p,f,b,_,v){var g=1&p,j=4&p,k=16&p,y=32&p;if(!(2&p||e(c)))throw new TypeError;k&&!f.length&&(p&=-17,k=f=!1),y&&!b.length&&(p&=-33,y=b=!1);var d=c&&c.__bindData__;return d&&d!==!0?((d=o(d))[2]&&(d[2]=o(d[2])),d[3]&&(d[3]=o(d[3])),!g||1&d[1]||(d[4]=_),!g&&1&d[1]&&(p|=8),!j||4&d[1]||(d[5]=v),k&&t.apply(d[2]||(d[2]=[]),f),y&&l.apply(d[3]||(d[3]=[]),b),d[1]|=p,u.apply(null,d)):(p==1||p===17?s:i)([c,p,f,b,_,v])}},{"lodash._basebind":6,"lodash._basecreatewrapper":9,"lodash._slice":20,"lodash.isfunction":28}],13:[function(n,r,h){var s=n("lodash._arraypool");r.exports=function(){return s.pop()||[]}},{"lodash._arraypool":5}],14:[function(n,r,h){var s=Object.prototype.toString,i=RegExp("^"+String(s).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");r.exports=function(e){return typeof e=="function"&&i.test(e)}},{}],15:[function(n,r,h){r.exports=40},{}],16:[function(n,r,h){r.exports={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1}},{}],17:[function(n,r,h){var s=n("lodash._arraypool"),i=n("lodash._maxpoolsize");r.exports=function(e){e.length=0,s.length<i&&s.push(e)}},{"lodash._arraypool":5,"lodash._maxpoolsize":15}],18:[function(n,r,h){var s=n("lodash._isnative"),i=n("lodash.noop"),e={configurable:!1,enumerable:!1,value:null,writable:!1},o=function(){try{var t={},l=s(l=Object.defineProperty)&&l,u=l(t,t,t)&&l}catch{}return u}(),a=o?function(t,l){e.value=l,o(t,"__bindData__",e)}:i;r.exports=a},{"lodash._isnative":14,"lodash.noop":34}],19:[function(n,r,h){var s=n("lodash._objecttypes"),i=Object.prototype.hasOwnProperty;r.exports=function(e){var o,a=e,t=[];if(!a||!s[typeof e])return t;for(o in a)i.call(a,o)&&t.push(o);return t}},{"lodash._objecttypes":16}],20:[function(n,r,h){r.exports=function(s,i,e){i||(i=0),e===void 0&&(e=s?s.length:0);for(var o=-1,a=e-i||0,t=Array(a<0?0:a);++o<a;)t[o]=s[i+o];return t}},{}],21:[function(n,r,h){var s=n("lodash._createwrapper"),i=n("lodash._slice");r.exports=function(e,o){return arguments.length>2?s(e,17,i(arguments,2),null,o):s(e,1,null,null,o)}},{"lodash._createwrapper":12,"lodash._slice":20}],22:[function(n,r,h){var s=n("lodash._basecreatecallback"),i=n("lodash._baseisequal"),e=n("lodash.isobject"),o=n("lodash.keys"),a=n("lodash.property");r.exports=function(t,l,u){var c=typeof t;if(t==null||c=="function")return s(t,l,u);if(c!="object")return a(t);var p=o(t),f=p[0],b=t[f];return p.length!=1||b!=b||e(b)?function(_){for(var v=p.length,g=!1;v--&&(g=i(_[p[v]],t[p[v]],null,!0)););return g}:function(_){var v=_[f];return b===v&&(b!==0||1/b==1/v)}}},{"lodash._basecreatecallback":8,"lodash._baseisequal":10,"lodash.isobject":29,"lodash.keys":31,"lodash.property":36}],23:[function(n,r,h){var s=n("lodash._basecreatecallback"),i=n("lodash.forown");r.exports=function(e,o,a){var t=-1,l=e?e.length:0;if(o=o&&a===void 0?o:s(o,a,3),typeof l=="number")for(;++t<l&&o(e[t],t,e)!==!1;);else i(e,o);return e}},{"lodash._basecreatecallback":8,"lodash.forown":25}],24:[function(n,r,h){var s=n("lodash._basecreatecallback"),i=n("lodash._objecttypes");r.exports=function(e,o,a){var t,l=e,u=l;if(!l||!i[typeof l])return u;for(t in o=o&&a===void 0?o:s(o,a,3),l)if(o(l[t],t,e)===!1)return u;return u}},{"lodash._basecreatecallback":8,"lodash._objecttypes":16}],25:[function(n,r,h){var s=n("lodash._basecreatecallback"),i=n("lodash.keys"),e=n("lodash._objecttypes");r.exports=function(o,a,t){var l,u=o,c=u;if(!u||!e[typeof u])return c;a=a&&t===void 0?a:s(a,t,3);for(var p=-1,f=e[typeof u]&&i(u),b=f?f.length:0;++p<b;)if(a(u[l=f[p]],l,o)===!1)return c;return c}},{"lodash._basecreatecallback":8,"lodash._objecttypes":16,"lodash.keys":31}],26:[function(n,r,h){r.exports=function(s){return s}},{}],27:[function(n,r,h){var s=n("lodash._isnative"),i=Object.prototype.toString,e=s(e=Array.isArray)&&e,o=e||function(a){return a&&typeof a=="object"&&typeof a.length=="number"&&i.call(a)=="[object Array]"||!1};r.exports=o},{"lodash._isnative":14}],28:[function(n,r,h){r.exports=function(s){return typeof s=="function"}},{}],29:[function(n,r,h){var s=n("lodash._objecttypes");r.exports=function(i){return!(!i||!s[typeof i])}},{"lodash._objecttypes":16}],30:[function(n,r,h){var s="[object String]",i=Object.prototype.toString;r.exports=function(e){return typeof e=="string"||e&&typeof e=="object"&&i.call(e)==s||!1}},{}],31:[function(n,r,h){var s=n("lodash._isnative"),i=n("lodash.isobject"),e=n("lodash._shimkeys"),o=s(o=Object.keys)&&o,a=o?function(t){return i(t)?o(t):[]}:e;r.exports=a},{"lodash._isnative":14,"lodash._shimkeys":19,"lodash.isobject":29}],32:[function(n,r,h){var s=n("lodash.createcallback"),i=n("lodash.forown");r.exports=function(e,o,a){var t=-1,l=e?e.length:0;if(o=s(o,a,3),typeof l=="number")for(var u=Array(l);++t<l;)u[t]=o(e[t],t,e);else u=[],i(e,function(c,p,f){u[++t]=o(c,p,f)});return u}},{"lodash.createcallback":22,"lodash.forown":25}],33:[function(n,r,h){var s=n("lodash._charatcallback"),i=n("lodash.createcallback"),e=n("lodash.foreach"),o=(n("lodash.forown"),n("lodash.isarray")),a=n("lodash.isstring");r.exports=function(t,l,u){var c=-1/0,p=c;if(typeof l!="function"&&u&&u[l]===t&&(l=null),l==null&&o(t))for(var f=-1,b=t.length;++f<b;){var _=t[f];_>p&&(p=_)}else l=l==null&&a(t)?s:i(l,u,3),e(t,function(v,g,j){var k=l(v,g,j);k>c&&(c=k,p=v)});return p}},{"lodash._charatcallback":11,"lodash.createcallback":22,"lodash.foreach":23,"lodash.forown":25,"lodash.isarray":27,"lodash.isstring":30}],34:[function(n,r,h){r.exports=function(){}},{}],35:[function(n,r,h){var s=n("lodash.map");r.exports=s},{"lodash.map":32}],36:[function(n,r,h){r.exports=function(s){return function(i){return i[s]}}},{}],37:[function(n,r,h){(function(s){var i=n("lodash._isnative"),e={};e.funcDecomp=!i(s.WinRTError)&&/\bthis\b/.test(function(){return this}),e.funcNames=typeof Function.name=="string",r.exports=e}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{"lodash._isnative":14}],38:[function(n,r,h){var s=n("lodash.max"),i=n("lodash.pluck");r.exports=function(){for(var e=arguments.length>1?arguments:arguments[0],o=-1,a=e?s(i(e,"length")):0,t=Array(a<0?0:a);++o<a;)t[o]=i(e,o);return t}},{"lodash.max":33,"lodash.pluck":35}],39:[function(n,r,h){var s=n("lodash.isarray");r.exports=function(i,e){var o=-1,a=i?i.length:0,t={};for(e||!a||s(i[0])||(e=[]);++o<a;){var l=i[o];e?t[l]=e[o]:l&&(t[l[0]]=l[1])}return t}},{"lodash.isarray":27}],40:[function(n,r,h){r.exports=function(s,i){var e,o=[];if(!s.global)return(e=s.exec(i))?[e]:[];for(;(e=s.exec(i))&&(o.push(e),e[0]!=""););return o}},{}],41:[function(n,r,h){var s=Function.call.bind(Object.prototype.toString);r.exports=function(i,e){if(!e){if(Array.isArray(i)&&!i.length)return{};if(Array.isArray(i[0]))return i.reduce(function(a,t){return a[t[0]]=t[1],a},{});if(o=i[0],s(o)==="[object Object]")return i.reduce(function(a,t){return a[t.key]=t.value,a},{});throw new TypeError("Expected vals to be an array")}var o;return function(a,t){return(a.length>t.length?t:a).reduce(function(l,u,c){return l[a[c]]=t[c],l},{})}(i,e)}},{}],42:[function(n,r,h){var s=n("zipmap");r.exports=function(i,e){if(/^\s*$/.test(i))return null;if(i[0]==";")return{type:"comment",value:i.slice(1)};var o=i.split(":"),a=o[0],t=o.slice(1).join(":").trim();if(e||a=="Format"){if(t=t.split(","),e&&t.length>e.length){var l=t.slice(e.length-1).join(",");t.length=e.length-1,t.push(l)}t=t.map(Function.call.bind("".trim)),e&&(t=s(e,t))}return{key:a,value:t}}},{zipmap:41}]},{},[1])(1)}();function M(n){const r=L(n),h=r.find(e=>e.section==="Events"),s=r.find(e=>e.section.includes("Styles")),i=new Set;for(const e of h.body){if(e.key!=="Dialogue")continue;let o=s.body.find(b=>b.value.Name===e.value.Style);if(o||(o=s.body.find(b=>b.value.Name==="Default")),o||(o=s.body.find(b=>b.key==="Style")),!o)continue;let a=o.value.Fontname.trim(),t=Number(o.value.Bold)===-1,l=Number(o.value.Italic)===-1;const u=()=>a+(t?":bold":"")+(l?":italic":"");let c=null;const p=()=>{const b=c;c=u(),b!==c&&i.add(c)};e.value.Text.startsWith("{")||p();const f=e.value.Text.replace(/\}\{/g,"").match(/\{.+?\}/g);if(f)for(const b of f){const _=b.slice(1,-1).match(/\\fn[^\\]+|\\[ib]\d+/g)||[];for(const v of _)v.startsWith("\\fn")?a=v.substr(3).trim():v.startsWith("\\b")?t=v.substr(2)!=="0":v.startsWith("\\i")&&(l=v.substr(2)!=="0");p()}}return Array.from(i).sort().map(e=>{const o=e.replace(/(:bold)?(:italic)?$/,""),a=e.substr(o.length).replace(/:/g,"")||"regular";return{name:o,variant:a}}).reduce((e,o)=>{const a=e.findIndex(t=>t.name===o.name);return a===-1?e.push({name:o.name,variants:[o.variant]}):e[a].variants.push(o.variant),e},[])}export{M as getFontsFromSubtitle};
