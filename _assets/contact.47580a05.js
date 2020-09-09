let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as t,r as a,u as s,a as n,o as i,c as d,b as l,t as o,w as r,v as c,e as u,f as m,g as b,F as g}from"./index.e0cdfda3.js";function p(){const e=a(""),t=a(""),n=a(""),i=a("idle");const{t:d}=s();return{name:e,email:t,message:n,state:i,onSubmit:async function(){if("submitting"===i.value||"submitted"===i.value)return;if(!e.value||!t.value||!n.value)return void(i.value="missing-data");if(!t.value.match(/.+@.+\..+/))return void(i.value="invalid-email");const a=new URLSearchParams;a.append("name",e.value),a.append("email",t.value),a.append("message",n.value),a.append("slug","contact-form"),i.value="submitting";const s=await fetch("https://us-central1-comments-api-888d3.cloudfunctions.net/comment/qgustavor/fixed-subtitles",{method:"post",body:a,headers:{"content-type":"application/x-www-form-urlencoded"}});i.value=s.ok?"submitted":"error"},t:d}}var v=t({setup:p});const f={class:"flex flex-col text-center w-full mb-10"},x={class:"sm:text-3xl text-2xl font-medium title-font mb-4"},h={class:"px-2 lg:w-1/2 md:w-2/3 mx-auto leading-relaxed text-base"},y={class:"flex flex-wrap"},w={class:"p-2 w-1/2"},k={class:"p-2 w-1/2"},j={class:"p-2 w-full"},S={class:"p-2 w-full flex content-center"},U={class:"my-auto"},V={key:0},q={key:1},L={key:2},z={key:3},C={key:4},E={class:"p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center"},F={class:"underline",href:"https://github.com/qgustavor/fixed-subtitles"};var H;v.render=function(e,t,a,s,p,v){const H=n("i18n-t");return i(),d(g,null,[l("div",f,[l("h1",x,o(s.t("contact.title")),1),l("p",h,o(s.t("contact.headline")),1)]),l("form",{class:"lg:w-1/2 md:w-2/3 mx-auto",onSubmit:t[4]||(t[4]=b((...e)=>s.onSubmit(...e),["prevent"]))},[l("div",y,[l("div",w,[r(l("input",{class:"w-full dark:bg-gray-800 rounded border border-gray-700 dark:text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2",placeholder:s.t("contact.name"),type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>s.name=e),disabled:"submitting"===s.state||"submitted"===s.state},null,8,["placeholder","disabled"]),[[c,s.name]])]),l("div",k,[r(l("input",{class:"w-full dark:bg-gray-800 rounded border border-gray-700 dark:text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2",placeholder:s.t("contact.email"),type:"email","onUpdate:modelValue":t[2]||(t[2]=e=>s.email=e),disabled:"submitting"===s.state||"submitted"===s.state},null,8,["placeholder","disabled"]),[[c,s.email]])]),l("div",j,[r(l("textarea",{class:"w-full dark:bg-gray-800 rounded border border-gray-700 dark:text-white focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block",placeholder:s.t("contact.message"),"onUpdate:modelValue":t[3]||(t[3]=e=>s.message=e),disabled:"submitting"===s.state||"submitted"===s.state},null,8,["placeholder","disabled"]),[[c,s.message]])]),l("div",S,[l("button",{class:["flex text-white border-0 py-2 px-8 focus:outline-none rounded text-lg mr-5",["idle"===s.state&&"bg-indigo-500 hover:bg-indigo-600","submitted"===s.state&&"bg-green-500","submitting"===s.state&&"bg-gray-500","missing-data"===s.state&&"bg-red-500 hover:bg-red-600","invalid-email"===s.state&&"bg-red-500 hover:bg-red-600","error"===s.state&&"bg-red-500 hover:bg-red-600"]],disabled:"submitting"===s.state||"submitted"===s.state},o(s.t("contact.submit")),11,["disabled"]),l("div",U,["missing-data"===s.state?(i(),d("div",V,o(s.t("contact.messages.missing-data")),1)):u("",!0),"invalid-email"===s.state?(i(),d("div",q,o(s.t("contact.messages.invalid-email")),1)):u("",!0),"submitting"===s.state?(i(),d("div",L,o(s.t("contact.messages.submitting")),1)):u("",!0),"submitted"===s.state?(i(),d("div",z,o(s.t("contact.messages.submitted")),1)):u("",!0),"error"===s.state?(i(),d("div",C,o(s.t("contact.messages.error")),1)):u("",!0)])]),l("div",E,[l(H,{keypath:"contact.extra"},{project:m(()=>[l("a",F,o(s.t("contact.extra-project")),1)]),_:1})])])],32)],64)},v.components=(H=v.components,Object.assign({},{},H));export default v;export{p as setup};
