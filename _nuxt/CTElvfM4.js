import{g as m,B as _,C as d,l as o,o as x,c as f,D as z,_ as S}from"./BwlOd0_C.js";const I=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;_(s=>({"5fa51ebc":p.value}));const e=d();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const n=u,l=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var t,r,i;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((r=e.nuxtIcon)!=null&&r.size))return;const s=n.size||((i=e.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(x(),f("span",{style:z({width:a.value,height:a.value})},null,4))}}),y=S(I,[["__scopeId","data-v-5ee01813"]]);export{y as default};
