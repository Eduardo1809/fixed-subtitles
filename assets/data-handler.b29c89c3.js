var o=[];let c=0,m=0;const r=o.map(t=>{let e=0;const l=t.slice(3).map(s=>{let d=0,i=0;const n=s.slice(3).map(a=>(e=Math.max(e,a[1]),d=Math.max(d,a[1]),i+=a[2],a[2]>0&&m++,{name:a[0],lastModified:a[1],changedLines:a[2]}));return c+=i,{name:s[0],metadata:s[1],commits:s[2],lastModified:d,changedLines:i,files:n}});return{folder:t[0],slug:t[1],metadata:t[2],lastModified:e,groups:l}}).sort((t,e)=>e.lastModified-t.lastModified),M=r.slice(0,4);export{m as a,M as l,r as s,c as t};
