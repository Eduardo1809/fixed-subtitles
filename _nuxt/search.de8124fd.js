import{_ as gt}from"./ShowTable.vue.e85c8169.js";import{a as pt,v as mt,f as Q,k as Mt,x as _t,y as xt,h as yt,l as Et,t as X,u as v,m as J,w as It,p as St,o as wt,q as At}from"./entry.94301f33.js";import{s as Z}from"./data-handler.20f3dd26.js";function I(s){return Array.isArray?Array.isArray(s):ct(s)==="[object Array]"}const bt=1/0;function Lt(s){if(typeof s=="string")return s;let t=s+"";return t=="0"&&1/s==-bt?"-0":t}function Rt(s){return s==null?"":Lt(s)}function y(s){return typeof s=="string"}function rt(s){return typeof s=="number"}function kt(s){return s===!0||s===!1||Nt(s)&&ct(s)=="[object Boolean]"}function it(s){return typeof s=="object"}function Nt(s){return it(s)&&s!==null}function m(s){return s!=null}function K(s){return!s.trim().length}function ct(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const $t="Incorrect 'index' type",Ot=s=>`Invalid value for key ${s}`,Ct=s=>`Pattern length exceeds max of ${s}.`,vt=s=>`Missing ${s} property in key`,Tt=s=>`Property 'weight' in key '${s}' must be a positive integer`,q=Object.prototype.hasOwnProperty;class Ft{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(n=>{let r=ot(n);e+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,e+=r.weight}),this._keys.forEach(n=>{n.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ot(s){let t=null,e=null,n=null,r=1,i=null;if(y(s)||I(s))n=s,t=tt(s),e=B(s);else{if(!q.call(s,"name"))throw new Error(vt("name"));const c=s.name;if(n=c,q.call(s,"weight")&&(r=s.weight,r<=0))throw new Error(Tt(c));t=tt(c),e=B(c),i=s.getFn}return{path:t,id:e,weight:r,src:n,getFn:i}}function tt(s){return I(s)?s:s.split(".")}function B(s){return I(s)?s.join("."):s}function Pt(s,t){let e=[],n=!1;const r=(i,c,o)=>{if(m(i))if(!c[o])e.push(i);else{let a=c[o];const h=i[a];if(!m(h))return;if(o===c.length-1&&(y(h)||rt(h)||kt(h)))e.push(Rt(h));else if(I(h)){n=!0;for(let l=0,f=h.length;l<f;l+=1)r(h[l],c,o+1)}else c.length&&r(h,c,o+1)}};return r(s,y(t)?t.split("."):t,0),n?e:e[0]}const jt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Kt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,t)=>s.score===t.score?s.idx<t.idx?-1:1:s.score<t.score?-1:1},Bt={location:0,threshold:.6,distance:100},Dt={useExtendedSearch:!1,getFn:Pt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...Kt,...jt,...Bt,...Dt};const Wt=/[^ ]+/g;function Vt(s=1,t=3){const e=new Map,n=Math.pow(10,t);return{get(r){const i=r.match(Wt).length;if(e.has(i))return e.get(i);const c=1/Math.pow(i,.5*s),o=parseFloat(Math.round(c*n)/n);return e.set(i,o),o},clear(){e.clear()}}}class Y{constructor({getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){this.norm=Vt(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((e,n)=>{this._keysMap[e.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,y(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();y(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!m(t)||K(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach((r,i)=>{let c=r.getFn?r.getFn(t):this.getFn(t,r.path);if(m(c)){if(I(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:h,value:l}=a.pop();if(m(l))if(y(l)&&!K(l)){let f={v:l,i:h,n:this.norm.get(l)};o.push(f)}else I(l)&&l.forEach((f,d)=>{a.push({nestedArrIndex:d,value:f})})}n.$[i]=o}else if(y(c)&&!K(c)){let o={v:c,n:this.norm.get(c)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function at(s,t,{getFn:e=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new Y({getFn:e,fieldNormWeight:n});return r.setKeys(s.map(ot)),r.setSources(t),r.create(),r}function zt(s,{getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){const{keys:n,records:r}=s,i=new Y({getFn:t,fieldNormWeight:e});return i.setKeys(n),i.setIndexRecords(r),i}function T(s,{errors:t=0,currentLocation:e=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=t/s.length;if(i)return c;const o=Math.abs(n-e);return r?c+o/r:o?1:c}function Ht(s=[],t=u.minMatchCharLength){let e=[],n=-1,r=-1,i=0;for(let c=s.length;i<c;i+=1){let o=s[i];o&&n===-1?n=i:!o&&n!==-1&&(r=i-1,r-n+1>=t&&e.push([n,r]),n=-1)}return s[i-1]&&i-n>=t&&e.push([n,i-1]),e}const R=32;function Yt(s,t,e,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(t.length>R)throw new Error(Ct(R));const l=t.length,f=s.length,d=Math.max(0,Math.min(n,f));let g=i,p=d;const M=o>1||a,b=M?Array(f):[];let E;for(;(E=s.indexOf(t,p))>-1;){let _=T(t,{currentLocation:E,expectedLocation:d,distance:r,ignoreLocation:h});if(g=Math.min(_,g),p=E+l,M){let S=0;for(;S<l;)b[E+S]=1,S+=1}}p=-1;let k=[],L=1,O=l+f;const dt=1<<l-1;for(let _=0;_<l;_+=1){let S=0,w=O;for(;S<w;)T(t,{errors:_,currentLocation:d+w,expectedLocation:d,distance:r,ignoreLocation:h})<=g?S=w:O=w,w=Math.floor((O-S)/2+S);O=w;let G=Math.max(1,d-w+1),j=c?f:Math.min(d+w,f)+l,N=Array(j+2);N[j+1]=(1<<_)-1;for(let x=j;x>=G;x-=1){let C=x-1,U=e[s.charAt(C)];if(M&&(b[C]=+!!U),N[x]=(N[x+1]<<1|1)&U,_&&(N[x]|=(k[x+1]|k[x])<<1|1|k[x+1]),N[x]&dt&&(L=T(t,{errors:_,currentLocation:C,expectedLocation:d,distance:r,ignoreLocation:h}),L<=g)){if(g=L,p=C,p<=d)break;G=Math.max(1,2*d-p)}}if(T(t,{errors:_+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>g)break;k=N}const P={isMatch:p>=0,score:Math.max(.001,L)};if(M){const _=Ht(b,o);_.length?a&&(P.indices=_):P.isMatch=!1}return P}function Gt(s){let t={};for(let e=0,n=s.length;e<n;e+=1){const r=s.charAt(e);t[r]=(t[r]||0)|1<<n-e-1}return t}class ht{constructor(t,{location:e=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:Gt(d),startIndex:g})},f=this.pattern.length;if(f>R){let d=0;const g=f%R,p=f-g;for(;d<p;)l(this.pattern.substr(d,R),d),d+=R;if(g){const M=f-R;l(this.pattern.substr(M),M)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,t.length-1]]),p}const{location:r,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:h}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:M,startIndex:b})=>{const{isMatch:E,score:k,indices:L}=Yt(t,p,M,{location:r+b,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:n,ignoreLocation:h});E&&(d=!0),f+=k,E&&L&&(l=[...l,...L])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(g.indices=l),g}}class A{constructor(t){this.pattern=t}static isMultiMatch(t){return et(t,this.multiRegex)}static isSingleMatch(t){return et(t,this.singleRegex)}search(){}}function et(s,t){const e=s.match(t);return e?e[1]:null}class Ut extends A{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class Qt extends A{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Xt extends A{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class Jt extends A{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class Zt extends A{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class qt extends A{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class lt extends A{constructor(t,{location:e=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(t),this._bitapSearch=new ht(t,{location:e,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class ut extends A{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,e))>-1;)e=n+i,r.push([n,e-1]);const c=!!r.length;return{isMatch:c,score:c?0:1,indices:r}}}const D=[Ut,ut,Xt,Jt,qt,Zt,Qt,lt],st=D.length,te=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ee="|";function se(s,t={}){return s.split(ee).map(e=>{let n=e.trim().split(te).filter(i=>i&&!!i.trim()),r=[];for(let i=0,c=n.length;i<c;i+=1){const o=n[i];let a=!1,h=-1;for(;!a&&++h<st;){const l=D[h];let f=l.isMultiMatch(o);f&&(r.push(new l(f,t)),a=!0)}if(!a)for(h=-1;++h<st;){const l=D[h];let f=l.isSingleMatch(o);if(f){r.push(new l(f,t));break}}}return r})}const ne=new Set([lt.type,ut.type]);class re{constructor(t,{isCaseSensitive:e=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:r,findAllMatches:c,ignoreLocation:i,location:o,threshold:a,distance:h},this.pattern=e?t:t.toLowerCase(),this.query=se(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,c=[],o=0;for(let a=0,h=e.length;a<h;a+=1){const l=e[a];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const g=l[f],{isMatch:p,indices:M,score:b}=g.search(t);if(p){if(i+=1,o+=b,n){const E=g.constructor.type;ne.has(E)?c=[...c,...M]:c.push(M)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const W=[];function ie(...s){W.push(...s)}function V(s,t){for(let e=0,n=W.length;e<n;e+=1){let r=W[e];if(r.condition(s,t))return new r(s,t)}return new ht(s,t)}const F={AND:"$and",OR:"$or"},z={PATH:"$path",PATTERN:"$val"},H=s=>!!(s[F.AND]||s[F.OR]),ce=s=>!!s[z.PATH],oe=s=>!I(s)&&it(s)&&!H(s),nt=s=>({[F.AND]:Object.keys(s).map(t=>({[t]:s[t]}))});function ft(s,t,{auto:e=!0}={}){const n=r=>{let i=Object.keys(r);const c=ce(r);if(!c&&i.length>1&&!H(r))return n(nt(r));if(oe(r)){const a=c?r[z.PATH]:i[0],h=c?r[z.PATTERN]:r[a];if(!y(h))throw new Error(Ot(a));const l={keyId:B(a),pattern:h};return e&&(l.searcher=V(h,t)),l}let o={children:[],operator:i[0]};return i.forEach(a=>{const h=r[a];I(h)&&h.forEach(l=>{o.children.push(n(l))})}),o};return H(s)||(s=nt(s)),n(s)}function ae(s,{ignoreFieldNorm:t=u.ignoreFieldNorm}){s.forEach(e=>{let n=1;e.matches.forEach(({key:r,norm:i,score:c})=>{const o=r?r.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(t?1:i))}),e.score=n})}function he(s,t){const e=s.matches;t.matches=[],m(e)&&e.forEach(n=>{if(!m(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let c={indices:r,value:i};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),t.matches.push(c)})}function le(s,t){t.score=s.score}function ue(s,t,{includeMatches:e=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return e&&r.push(he),n&&r.push(le),s.map(i=>{const{idx:c}=i,o={item:t[c],refIndex:c};return r.length&&r.forEach(a=>{a(i,o)}),o})}class ${constructor(t,e={},n){this.options={...u,...e},this.options.useExtendedSearch,this._keyStore=new Ft(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof Y))throw new Error($t);this._myIndex=e||at(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){m(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,e.push(i))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let a=y(t)?y(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return ae(a,{ignoreFieldNorm:o}),i&&a.sort(c),rt(e)&&e>-1&&(a=a.slice(0,e)),ue(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const e=V(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;const{isMatch:a,score:h,indices:l}=e.searchIn(i);a&&r.push({item:i,idx:c,matches:[{score:h,value:i,norm:o,indices:l}]})}),r}_searchLogical(t){const e=ft(t,this.options),n=(o,a,h)=>{if(!o.children){const{keyId:f,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:d});return g&&g.length?[{idx:h,item:a,matches:g}]:[]}const l=[];for(let f=0,d=o.children.length;f<d;f+=1){const g=o.children[f],p=n(g,a,h);if(p.length)l.push(...p);else if(o.operator===F.AND)return[]}return l},r=this._myIndex.records,i={},c=[];return r.forEach(({$:o,i:a})=>{if(m(o)){let h=n(e,o,a);h.length&&(i[a]||(i[a]={idx:a,item:o,matches:[]},c.push(i[a])),h.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),c}_searchObjectList(t){const e=V(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:c,i:o})=>{if(!m(c))return;let a=[];n.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:c[l],searcher:e}))}),a.length&&i.push({idx:o,item:c,matches:a})}),i}_findMatches({key:t,value:e,searcher:n}){if(!m(e))return[];let r=[];if(I(e))e.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;const{isMatch:a,score:h,indices:l}=n.searchIn(i);a&&r.push({score:h,key:t,value:i,idx:c,norm:o,indices:l})});else{const{v:i,n:c}=e,{isMatch:o,score:a,indices:h}=n.searchIn(i);o&&r.push({score:a,key:t,value:i,norm:c,indices:h})}return r}}$.version="6.6.2";$.createIndex=at;$.parseIndex=zt;$.config=u;$.parseQuery=ft;ie(re);const fe={class:"container py-5 px-6 mx-auto"},de={class:"text-2xl"},_e=pt({__name:"search",setup(s){const t=new $(Z,{keys:["metadata.title","folder"]}),e=mt(),n=Q(()=>t.search(e.query.q,{limit:10}).map(o=>o.item)),r=Mt(),{t:i}=_t(),c=Q(()=>i("search.title",{query:e.query.q}));return xt({title:c}),(o,a)=>{const h=gt,l=St;return wt(),yt("div",fe,[Et("h2",de,X(v(c)),1),J(h,{shows:v(n)},null,8,["shows"]),J(l,{to:v(r)("/shows/"),class:"block mt-4 px-6 py-4 text-xl text-center font-bold rounded border border-neutral-500 bg-neutral-900 dark:bg-neutral-500 text-neutral-100 dark:text-neural-900"},{default:It(()=>[At(X(o.$t("index.actions.browse.action",v(Z).length)),1)]),_:1},8,["to"])])}}});export{_e as default};
