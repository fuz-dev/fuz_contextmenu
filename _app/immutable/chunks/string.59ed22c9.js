import{t as A,a as P}from"./index.8fbd8643.js";import{P as p}from"./scheduler.75aa8c17.js";function B(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function C(n,t){n.d(1),t.delete(n.key)}function q(n,t){A(n,1,1,()=>{t.delete(n.key)})}function D(n,t){n.f(),q(n,t)}function E(n,t,l,w,g,u,i,a,s,S,r,$){let c=n.length,h=u.length,d=c;const m={};for(;d--;)m[n[d].key]=d;const y=[],k=new Map,b=new Map,W=[];for(d=h;d--;){const e=$(g,u,d),f=l(e);let o=i.get(f);o?w&&W.push(()=>o.p(e,t)):(o=S(f,e),o.c()),k.set(f,y[d]=o),f in m&&b.set(f,Math.abs(d-m[f]))}const j=new Set,x=new Set;function M(e){P(e,1),e.m(a,r),i.set(e.key,e),r=e.first,h--}for(;c&&h;){const e=y[h-1],f=n[c-1],o=e.key,_=f.key;e===f?(r=e.first,c--,h--):k.has(_)?!i.has(o)||j.has(o)?M(e):x.has(_)?c--:b.get(o)>b.get(_)?(x.add(o),M(e)):(j.add(_),c--):(s(f,i),c--)}for(;c--;){const e=n[c];k.has(e.key)||s(e,i)}for(;h;)M(y[h-1]);return p(W),y}function F(n,t){const l={},w={},g={$$scope:1};let u=n.length;for(;u--;){const i=n[u],a=t[u];if(a){for(const s in i)s in a||(w[s]=1);for(const s in a)g[s]||(l[s]=a[s],g[s]=1);n[u]=a}else for(const s in i)g[s]=1}for(const i in w)i in l||(l[i]=void 0);return l}function G(n){return typeof n=="object"&&n!==null?n:{}}const H=(n,t)=>!t||!n.startsWith(t)?n:n.substring(t.length),I=(n,t)=>!t||!n.endsWith(t)?n:n.substring(0,n.length-t.length),J=(n,t)=>n.endsWith(t)?n:n+t;export{G as a,J as b,I as c,C as d,B as e,D as f,F as g,q as o,H as s,E as u};
