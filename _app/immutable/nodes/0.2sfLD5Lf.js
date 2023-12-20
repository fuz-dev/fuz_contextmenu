import{r as ne,n as I,u as i,v as ae,w as B,x as re,y as ee,e as b,s as E,z as he,d as f,c as C,A as Q,i as u,B as te,C as se,D as le,H as oe,E as _e,b as P,f as R,g as fe,h as y}from"../chunks/scheduler.pWdzoXt9.js";import{S as U,i as Y,a as T,t as M,b as V,d as W,m as X,e as Z}from"../chunks/index.18-3kxY_.js";import{i as ie,s as ue,a as de,D as ye,r as be,c as ge,b as ke,T as we,d as Ee,l as Ce,e as Te,f as Me,g as ve,h as Se,C as He,j as Ae}from"../chunks/Contextmenu.q_HbewLM.js";import{w as F}from"../chunks/index.T_VPnrq6.js";const De=!0,Qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:De},Symbol.toStringTag,{value:"Module"})),Oe=Symbol(),je=(t=!1)=>{const e=typeof t=="boolean"?F(t):t;return ne(Oe,e),e};function Ke(t){let e,s;return{c:i,l:i,m(l,_){e||(s=ae(window,"keydown",t[1]),e=!0)},p:i,i,o:i,d(l){e=!1,s()}}}function Le(t,e,s){let l,_=i,o=()=>(_(),_=B(c,m=>s(3,l=m)),c);t.$$.on_destroy.push(()=>_());let{devmode:c}=e;o();let{should_toggle:n=m=>m.key==="`"&&m.ctrlKey&&!m.shiftKey}=e;const r=m=>{!ie(m.target)&&n(m)&&re(c,l=!l,l)};return t.$$set=m=>{"devmode"in m&&o(s(0,c=m.devmode)),"should_toggle"in m&&s(2,n=m.should_toggle)},[c,r,n]}class qe extends U{constructor(e){super(),Y(this,e,Le,Ke,I,{devmode:0,should_toggle:2})}}const ze=t=>({style:t&1,theme_style_html:t&2,theme_setup_script:t&4,selected_theme:t&8,selected_color_scheme:t&16}),p=t=>({style:t[0],theme_style_html:t[1],theme_setup_script:t[2],selected_theme:t[3],selected_color_scheme:t[4]});function x(t){let e,s;return{c(){e=new oe(!1),s=b(),this.h()},l(l){e=_e(l,!1),s=b(),this.h()},h(){e.a=s},m(l,_){e.m(t[1],l,_),u(l,s,_)},p(l,_){_&2&&e.p(l[1])},d(l){l&&(f(s),e.d())}}}function $(t){let e,s,l,_,o,c;return{c(){e=P("meta"),s=E(),l=P("meta"),_=E(),o=P("script"),c=new oe(!1),this.h()},l(n){e=R(n,"META",{name:!0,content:!0}),s=C(n),l=R(n,"META",{name:!0,content:!0}),_=C(n),o=R(n,"SCRIPT",{});var r=fe(o);c=_e(r,!1),r.forEach(f),this.h()},h(){y(e,"name","color-scheme"),y(e,"content",t[6]),y(l,"name","theme-color"),y(l,"content",t[5]),c.a=null},m(n,r){u(n,e,r),u(n,s,r),u(n,l,r),u(n,_,r),u(n,o,r),c.m(t[2],o)},p(n,r){r&64&&y(e,"content",n[6]),r&32&&y(l,"content",n[5]),r&4&&c.p(n[2])},d(n){n&&(f(e),f(s),f(l),f(_),f(o))}}}function Ne(t){let e,s,l,_,o=t[1]&&x(t),c=t[2]&&$(t);const n=t[22].default,r=ee(n,t,t[21],p);return{c(){o&&o.c(),e=b(),c&&c.c(),s=b(),l=E(),r&&r.c()},l(m){const h=he("svelte-1qw2uo0",document.head);o&&o.l(h),e=b(),c&&c.l(h),s=b(),h.forEach(f),l=C(m),r&&r.l(m)},m(m,h){o&&o.m(document.head,null),Q(document.head,e),c&&c.m(document.head,null),Q(document.head,s),u(m,l,h),r&&r.m(m,h),_=!0},p(m,[h]){m[1]?o?o.p(m,h):(o=x(m),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),m[2]?c?c.p(m,h):(c=$(m),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null),r&&r.p&&(!_||h&2097183)&&te(r,n,m,m[21],_?le(n,m[21],h,ze):se(m[21]),p)},i(m){_||(T(r,m),_=!0)},o(m){M(r,m),_=!1},d(m){m&&f(l),o&&o.d(m),f(e),c&&c.d(m),f(s),r&&r.d(m)}}}function Pe(t,e,s){let l,_,o,c,n=i,r=()=>(n(),n=B(g,a=>s(19,c=a)),g),m,h=i,G=()=>(h(),h=B(k,a=>s(20,m=a)),k);t.$$.on_destroy.push(()=>n()),t.$$.on_destroy.push(()=>h());let{$$slots:me={},$$scope:J}=e,{sync_color_scheme:v=Ee}=e,{load_color_scheme:S=Ce}=e,{save_color_scheme:H=Te}=e,{load_theme:A=Me}=e,{save_theme:D=ve}=e,{selected_theme:g=F(A())}=e;r(),ue(g);let{selected_color_scheme:k=F(S())}=e;G(),de(k);let{color_scheme_fallback:d=void 0}=e,{color_scheme_css:O=void 0}=e,{theme_color:j=void 0}=e,{style:w=null}=e,{theme_style_html:K=null}=e,{theme_setup_script:L=null}=e,q=0,z=0,N=0;return t.$$set=a=>{"sync_color_scheme"in a&&s(7,v=a.sync_color_scheme),"load_color_scheme"in a&&s(8,S=a.load_color_scheme),"save_color_scheme"in a&&s(9,H=a.save_color_scheme),"load_theme"in a&&s(10,A=a.load_theme),"save_theme"in a&&s(11,D=a.save_theme),"selected_theme"in a&&r(s(3,g=a.selected_theme)),"selected_color_scheme"in a&&G(s(4,k=a.selected_color_scheme)),"color_scheme_fallback"in a&&s(12,d=a.color_scheme_fallback),"color_scheme_css"in a&&s(13,O=a.color_scheme_css),"theme_color"in a&&s(14,j=a.theme_color),"style"in a&&s(0,w=a.style),"theme_style_html"in a&&s(1,K=a.theme_style_html),"theme_setup_script"in a&&s(2,L=a.theme_setup_script),"$$scope"in a&&s(21,J=a.$$scope)},t.$$.update=()=>{t.$$.dirty&524288&&s(18,l=c.name),t.$$.dirty&786432&&s(0,w=l===ye.name?null:be(c)),t.$$.dirty&1&&s(1,K=w?ge(w):null),t.$$.dirty&4096&&s(2,L=ke(d)),t.$$.dirty&1081472&&s(15,q++,q)&&v?.(m),t.$$.dirty&1114624&&s(16,z++,z)&&H?.(m),t.$$.dirty&657408&&s(17,N++,N)&&D?.(c),t.$$.dirty&12288&&s(6,_=O??(d==="dark"||d==="light"?d:matchMedia("(prefers-color-scheme: dark)").matches?"dark light":"light dark")),t.$$.dirty&16384&&s(5,o=j??we)},[w,K,L,g,k,o,_,v,S,H,A,D,d,O,j,q,z,N,l,c,m,J,me]}class Re extends U{constructor(e){super(),Y(this,e,Pe,Ne,I,{sync_color_scheme:7,load_color_scheme:8,save_color_scheme:9,load_theme:10,save_theme:11,selected_theme:3,selected_color_scheme:4,color_scheme_fallback:12,color_scheme_css:13,theme_color:14,style:0,theme_style_html:1,theme_setup_script:2})}}const ce=[{name:"Contextmenu",slug:"Contextmenu",pathname:"",category:"components",component:He,related:[]}];for(const t of ce)Se(t);function Be(t){let e;const s=t[1].default,l=ee(s,t,t[2],null);return{c(){l&&l.c()},l(_){l&&l.l(_)},m(_,o){l&&l.m(_,o),e=!0},p(_,o){l&&l.p&&(!e||o&4)&&te(l,s,_,_[2],e?le(s,_[2],o,null):se(_[2]),null)},i(_){e||(T(l,_),e=!0)},o(_){M(l,_),e=!1},d(_){l&&l.d(_)}}}function Fe(t){let e,s,l,_;return e=new Re({props:{$$slots:{default:[Be]},$$scope:{ctx:t}}}),l=new qe({props:{devmode:t[0]}}),{c(){V(e.$$.fragment),s=E(),V(l.$$.fragment)},l(o){W(e.$$.fragment,o),s=C(o),W(l.$$.fragment,o)},m(o,c){X(e,o,c),u(o,s,c),X(l,o,c),_=!0},p(o,[c]){const n={};c&4&&(n.$$scope={dirty:c,ctx:o}),e.$set(n)},i(o){_||(T(e.$$.fragment,o),T(l.$$.fragment,o),_=!0)},o(o){M(e.$$.fragment,o),M(l.$$.fragment,o),_=!1},d(o){o&&f(s),Z(e,o),Z(l,o)}}}function Ie(t,e,s){let{$$slots:l={},$$scope:_}=e;const o=je(!1);return Ae(new Map(ce.map(c=>[c.name,c]))),t.$$set=c=>{"$$scope"in c&&s(2,_=c.$$scope)},[o,l,_]}class Ve extends U{constructor(e){super(),Y(this,e,Ie,Fe,I,{})}}export{Ve as component,Qe as universal};
