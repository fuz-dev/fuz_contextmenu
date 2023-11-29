var H=Object.defineProperty;var K=(t,e,n)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var C=(t,e,n)=>(K(t,typeof e!="symbol"?e+"":e,n),n);import{u as w,$ as Q,d as B,a0 as T,P as v,J as R,R as S,a1 as W,G as D,a2 as M,g as X,a3 as Y,a4 as Z,a5 as tt,a6 as et,a7 as N,a8 as nt,a9 as st,aa as it,ab as at,ac as rt}from"./scheduler.4fd4cdc3.js";const F=typeof window<"u";let G=F?()=>window.performance.now():()=>Date.now(),A=F?t=>requestAnimationFrame(t):w;const p=new Set;function J(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),p.size!==0&&A(J)}function L(t){let e;return p.size===0&&A(J),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}const b=new Map;let O=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:T(e),rules:{}};return b.set(t,n),n}function U(t,e,n,s,a,r,u,l=0){const d=16.666/s;let i=`{
`;for(let g=0;g<=1;g+=d){const m=e+(n-e)*r(g);i+=g*100+`%{${u(m,1-m)}}
`}const f=i+`100% {${u(n,1-n)}}
}`,o=`__svelte_${ot(f)}_${l}`,_=Q(t),{stylesheet:c,rules:$}=b.get(_)||ft(_,t);$[o]||($[o]=!0,c.insertRule(`@keyframes ${o} ${f}`,c.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${s}ms linear ${a}ms 1 both`,O+=1,o}function z(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),a=n.length-s.length;a&&(t.style.animation=s.join(", "),O-=a,O||ut())}function ut(){A(()=>{O||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&B(e)}),b.clear())})}let x;function V(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function P(t,e,n){t.dispatchEvent(W(`${e?"intro":"outro"}${n}`))}const E=new Set;let y;function gt(){y={r:0,c:[],p:y}}function yt(){y.r||v(y.c),y=y.p}function ct(t,e){t&&t.i&&(E.delete(t),t.i(e))}function pt(t,e,n,s){if(t&&t.o){if(E.has(t))return;E.add(t),y.c.push(()=>{E.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const q={duration:0};function wt(t,e,n){const s={direction:"in"};let a=e(t,n,s),r=!1,u,l,d=0;function i(){u&&z(t,u)}function f(){const{delay:_=0,duration:c=300,easing:$=D,tick:h=w,css:g}=a||q;g&&(u=U(t,0,1,c,_,$,g,d++)),h(0,1);const m=G()+_,k=m+c;l&&l.abort(),r=!0,S(()=>P(t,!0,"start")),l=L(j=>{if(r){if(j>=k)return h(1,0),P(t,!0,"end"),i(),r=!1;if(j>=m){const I=$((j-m)/c);h(I,1-I)}}return r})}let o=!1;return{start(){o||(o=!0,z(t),R(a)?(a=a(s),V().then(f)):f())},invalidate(){o=!1},end(){r&&(i(),r=!1)}}}function xt(t,e,n){const s={direction:"out"};let a=e(t,n,s),r=!0,u;const l=y;l.r+=1;let d;function i(){const{delay:f=0,duration:o=300,easing:_=D,tick:c=w,css:$}=a||q;$&&(u=U(t,1,0,o,f,_,$));const h=G()+f,g=h+o;S(()=>P(t,!1,"start")),"inert"in t&&(d=t.inert,t.inert=!0),L(m=>{if(r){if(m>=g)return c(0,1),P(t,!1,"end"),--l.r||v(l.c),!1;if(m>=h){const k=_((m-h)/o);c(1-k,k)}}return r})}return R(a)?V().then(()=>{a=a(s),i()}):i(),{end(f){f&&"inert"in t&&(t.inert=d),f&&a.tick&&a.tick(1,0),r&&(u&&z(t,u),r=!1)}}}function vt(t){t&&t.c()}function kt(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:s,after_update:a}=t.$$;s&&s.m(e,n),S(()=>{const r=t.$$.on_mount.map(nt).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),a.forEach(S)}function dt(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(st.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(t,e,n,s,a,r,u=null,l=[-1]){const d=et;N(t);const i=t.$$={fragment:null,ctx:[],props:r,update:w,not_equal:a,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};u&&u(i.root);let f=!1;if(i.ctx=n?n(t,e.props||{},(o,_,...c)=>{const $=c.length?c[0]:_;return i.ctx&&a(i.ctx[o],i.ctx[o]=$)&&(!i.skip_bound&&i.bound[o]&&i.bound[o]($),f&&_t(t,o)),_}):[],i.update(),f=!0,v(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){at();const o=X(e.target);i.fragment&&i.fragment.l(o),o.forEach(B)}else i.fragment&&i.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor),rt(),Y()}N(d)}class St{constructor(){C(this,"$$");C(this,"$$set")}$destroy(){dt(this,1),this.$destroy=w}$on(e,n){if(!R(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const a=s.indexOf(n);a!==-1&&s.splice(a,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($t);export{St as S,ct as a,vt as b,yt as c,kt as d,dt as e,U as f,gt as g,z as h,Et as i,wt as j,xt as k,L as l,lt as m,G as n,pt as t};