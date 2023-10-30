import{n as ge,y as se,b as g,s as W,k as j,f as v,g as b,d as u,c as M,N as et,l as A,h,i as C,A as _,B as ae,C as re,D as oe,m as ee,F as ye,V as Ie,j as de,I as B,W as $e,e as we,u as je}from"../chunks/scheduler.75aa8c17.js";import{S as ve,i as be,a as w,g as ie,t as N,c as fe,b as _e,d as ue,m as he,e as pe}from"../chunks/index.8fbd8643.js";import{s as tt,b as me,e as ne,u as lt,d as st}from"../chunks/string.59ed22c9.js";import{p as xe}from"../chunks/stores.c3253584.js";import{f as Ae,L as at,p as rt,a as Ce}from"../chunks/package.320212a8.js";import{e as ot}from"../chunks/singletons.5d7ca42e.js";function Oe(r,e,l){var n,i;const t=r.slice();t[22]=e[l],t[27]=l;const a=t[15](t[10],t[22]);t[23]=a;const s=(n=t[3])==null?void 0:n[t[27]];t[24]=s;const o=t[24]&&((i=t[5])==null?void 0:i[t[24]]);return t[25]=o,t}function Ne(r,e,l){const t=r.slice();return t[14]=e[l].name,t[28]=e[l].kind,t}const nt=r=>({homepage_url:r&256}),Se=r=>({homepage_url:r[8]}),it=r=>({npm_url:r&4096}),Te=r=>({npm_url:r[12]}),ft=r=>({description:r&64}),Ve=r=>({description:r[6]}),ct=r=>({repo_name:r&2048}),Le=r=>({repo_name:r[11]});function _t(r){let e,l;return{c(){e=g("div"),l=j(r[11]),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=b(e);l=A(a,r[11]),a.forEach(u),this.h()},h(){h(e,"class","repo_name svelte-maqaae")},m(t,a){C(t,e,a),_(e,l)},p(t,a){a&2048&&ee(l,t[11])},d(t){t&&u(e)}}}function We(r){let e;const l=r[21].description,t=se(l,r,r[20],Ve),a=t||ut(r);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),e=!0},p(s,o){t?t.p&&(!e||o&1048640)&&ae(t,l,s,s[20],e?oe(l,s[20],o,ft):re(s[20]),Ve):a&&a.p&&(!e||o&64)&&a.p(s,e?o:-1)},i(s){e||(w(a,s),e=!0)},o(s){N(a,s),e=!1},d(s){a&&a.d(s)}}}function ut(r){let e,l;return{c(){e=g("blockquote"),l=j(r[6]),this.h()},l(t){e=v(t,"BLOCKQUOTE",{class:!0});var a=b(e);l=A(a,r[6]),a.forEach(u),this.h()},h(){h(e,"class","spaced")},m(t,a){C(t,e,a),_(e,l)},p(t,a){a&64&&ee(l,t[6])},d(t){t&&u(e)}}}function Me(r){let e;const l=r[21].npm_url,t=se(l,r,r[20],Te),a=t||ht(r);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),e=!0},p(s,o){t?t.p&&(!e||o&1052672)&&ae(t,l,s,s[20],e?oe(l,s[20],o,it):re(s[20]),Te):a&&a.p&&(!e||o&16384)&&a.p(s,e?o:-1)},i(s){e||(w(a,s),e=!0)},o(s){N(a,s),e=!1},d(s){a&&a.d(s)}}}function ht(r){let e,l,t;return{c(){e=g("blockquote"),l=j("npm i -D "),t=j(r[14]),this.h()},l(a){e=v(a,"BLOCKQUOTE",{class:!0});var s=b(e);l=A(s,"npm i -D "),t=A(s,r[14]),s.forEach(u),this.h()},h(){h(e,"class","npm_url spaced svelte-maqaae")},m(a,s){C(a,e,s),_(e,l),_(e,t)},p(a,s){s&16384&&ee(t,a[14])},d(a){a&&u(e)}}}function Be(r){let e;const l=r[21].homepage_url,t=se(l,r,r[20],Se),a=t||pt(r);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),e=!0},p(s,o){t?t.p&&(!e||o&1048832)&&ae(t,l,s,s[20],e?oe(l,s[20],o,nt):re(s[20]),Se):a&&a.p&&(!e||o&8448)&&a.p(s,e?o:-1)},i(s){e||(w(a,s),e=!0)},o(s){N(a,s),e=!1},d(s){a&&a.d(s)}}}function pt(r){let e,l,t,a,s,o,n,i=Ae(r[8])+"",d;return{c(){e=g("div"),l=j(`homepage:
					`),t=g("a"),a=g("img"),n=W(),d=j(i),this.h()},l(f){e=v(f,"DIV",{class:!0});var p=b(e);l=A(p,`homepage:
					`),t=v(p,"A",{class:!0,href:!0});var c=b(t);a=v(c,"IMG",{src:!0,alt:!0}),n=M(c),d=A(c,i),c.forEach(u),p.forEach(u),this.h()},h(){Ie(a.src,s=me(r[8],"/")+"favicon.png")||h(a,"src",s),h(a,"alt",o="favicon to homepage at "+r[8]),de(a,"width","16px"),de(a,"height","16px"),de(a,"margin-right","var(--spacing_xs)"),h(t,"class","chip row svelte-maqaae"),h(t,"href",r[8]),B(t,"active",r[8]===r[13].url.href),h(e,"class","row svelte-maqaae")},m(f,p){C(f,e,p),_(e,l),_(e,t),_(t,a),_(t,n),_(t,d)},p(f,p){p&256&&!Ie(a.src,s=me(f[8],"/")+"favicon.png")&&h(a,"src",s),p&256&&o!==(o="favicon to homepage at "+f[8])&&h(a,"alt",o),p&256&&i!==(i=Ae(f[8])+"")&&ee(d,i),p&256&&h(t,"href",f[8]),p&8448&&B(t,"active",f[8]===f[13].url.href)},d(f){f&&u(e)}}}function Pe(r){let e,l,t,a;return{c(){e=g("div"),l=j("repo: "),t=g("a"),a=j(r[11]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=b(e);l=A(o,"repo: "),t=v(o,"A",{class:!0,title:!0,href:!0});var n=b(t);a=A(n,r[11]),n.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","chip svelte-maqaae"),h(t,"title","repo"),h(t,"href",r[10]),h(e,"class","row svelte-maqaae")},m(s,o){C(s,e,o),_(e,l),_(e,t),_(t,a)},p(s,o){o&2048&&ee(a,s[11]),o&1024&&h(t,"href",s[10])},d(s){s&&u(e)}}}function ze(r){let e,l,t,a;return{c(){e=g("div"),l=j("npm: "),t=g("a"),a=j(r[14]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=b(e);l=A(o,"npm: "),t=v(o,"A",{class:!0,title:!0,href:!0});var n=b(t);a=A(n,r[14]),n.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","chip svelte-maqaae"),h(t,"title","npm"),h(t,"href",r[12]),h(e,"class","row svelte-maqaae")},m(s,o){C(s,e,o),_(e,l),_(e,t),_(t,a)},p(s,o){o&16384&&ee(a,s[14]),o&4096&&h(t,"href",s[12])},d(s){s&&u(e)}}}function He(r){let e,l,t,a;return{c(){e=g("div"),l=j("version: "),t=g("a"),a=j(r[7]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=b(e);l=A(o,"version: "),t=v(o,"A",{class:!0,title:!0,href:!0});var n=b(t);a=A(n,r[7]),n.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","chip svelte-maqaae"),h(t,"title","version"),h(t,"href",r[9]),h(e,"class","row svelte-maqaae")},m(s,o){C(s,e,o),_(e,l),_(e,t),_(t,a)},p(s,o){o&128&&ee(a,s[7]),o&512&&h(t,"href",s[9])},d(s){s&&u(e)}}}function Ue(r){let e,l,t,a;return{c(){e=g("div"),l=j("license: "),t=g("a"),a=j(r[1]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=b(e);l=A(o,"license: "),t=v(o,"A",{class:!0,title:!0,href:!0});var n=b(t);a=A(n,r[1]),n.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","chip svelte-maqaae"),h(t,"title","license"),h(t,"href",r[4]),h(e,"class","row svelte-maqaae")},m(s,o){C(s,e,o),_(e,l),_(e,t),_(t,a)},p(s,o){o&2&&ee(a,s[1]),o&16&&h(t,"href",s[4])},d(s){s&&u(e)}}}function Re(r){let e,l,t,a,s;return{c(){e=g("section"),l=j(`data:
				`),t=g("a"),a=j("package.json"),this.h()},l(o){e=v(o,"SECTION",{class:!0});var n=b(e);l=A(n,`data:
				`),t=v(n,"A",{class:!0,title:!0,href:!0});var i=b(t);a=A(i,"package.json"),i.forEach(u),n.forEach(u),this.h()},h(){h(t,"class","chip svelte-maqaae"),h(t,"title","data"),h(t,"href",s=me(r[8],"/")+".well-known/package.json"),h(e,"class","row spaced svelte-maqaae")},m(o,n){C(o,e,n),_(e,l),_(e,t),_(t,a)},p(o,n){n&256&&s!==(s=me(o[8],"/")+".well-known/package.json")&&h(t,"href",s)},d(o){o&&u(e)}}}function Fe(r){let e,l,t=[],a=new Map,s=ne(r[2]);const o=n=>n[22];for(let n=0;n<s.length;n+=1){let i=Oe(r,s,n),d=o(i);a.set(d,t[n]=Qe(d,i))}return{c(){e=g("section"),l=g("menu");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=v(n,"SECTION",{class:!0});var i=b(e);l=v(i,"MENU",{});var d=b(l);for(let f=0;f<t.length;f+=1)t[f].l(d);d.forEach(u),i.forEach(u),this.h()},h(){h(e,"class","width_full spaced")},m(n,i){C(n,e,i),_(e,l);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(l,null)},p(n,i){i&33836&&(s=ne(n[2]),t=lt(t,i,o,1,n,s,a,l,st,Qe,null,Oe))},d(n){n&&u(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function Je(r){let e,l=ne(r[25].declarations),t=[];for(let a=0;a<l.length;a+=1)t[a]=Ke(Ne(r,l,a));return{c(){e=g("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=v(a,"UL",{class:!0});var s=b(e);for(let o=0;o<t.length;o+=1)t[o].l(s);s.forEach(u),this.h()},h(){h(e,"class","declarations svelte-maqaae")},m(a,s){C(a,e,s);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(a,s){if(s&44){l=ne(a[25].declarations);let o;for(o=0;o<l.length;o+=1){const n=Ne(a,l,o);t[o]?t[o].p(n,s):(t[o]=Ke(n),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},d(a){a&&u(e),$e(t,a)}}}function Ke(r){let e,l=r[14]+"",t,a;return{c(){e=g("li"),t=j(l),a=W(),this.h()},l(s){e=v(s,"LI",{class:!0});var o=b(e);t=A(o,l),a=M(o),o.forEach(u),this.h()},h(){h(e,"class","declaration chip svelte-maqaae"),B(e,"variable_declaration",r[28]==="VariableDeclaration"),B(e,"type_declaration",r[28]==="InterfaceDeclaration"||r[28]==="TypeAliasDeclaration"),B(e,"class_declaration",r[28]==="ClassDeclaration")},m(s,o){C(s,e,o),_(e,t),_(e,a)},p(s,o){o&44&&l!==(l=s[14]+"")&&ee(t,l),o&44&&B(e,"variable_declaration",s[28]==="VariableDeclaration"),o&44&&B(e,"type_declaration",s[28]==="InterfaceDeclaration"||s[28]==="TypeAliasDeclaration"),o&44&&B(e,"class_declaration",s[28]==="ClassDeclaration")},d(s){s&&u(e)}}}function Qe(r,e){let l,t,a,s=e[22]+"",o,n,i,d,f=e[25]&&Je(e);return{key:r,first:null,c(){l=g("li"),t=g("div"),a=g("a"),o=j(s),i=W(),f&&f.c(),d=W(),this.h()},l(p){l=v(p,"LI",{class:!0});var c=b(l);t=v(c,"DIV",{});var E=b(t);a=v(E,"A",{class:!0,href:!0});var q=b(a);o=A(q,s),q.forEach(u),E.forEach(u),i=M(c),f&&f.l(c),d=M(c),c.forEach(u),this.h()},h(){h(a,"class","chip svelte-maqaae"),h(a,"href",n=e[23]),h(l,"class","module svelte-maqaae"),B(l,"ts",e[22].endsWith(".js")),B(l,"svelte",e[22].endsWith(".svelte")),B(l,"css",e[22].endsWith(".css")),B(l,"json",e[22].endsWith(".json")),this.first=l},m(p,c){C(p,l,c),_(l,t),_(t,a),_(a,o),_(l,i),f&&f.m(l,null),_(l,d)},p(p,c){e=p,c&4&&s!==(s=e[22]+"")&&ee(o,s),c&1028&&n!==(n=e[23])&&h(a,"href",n),e[25]?f?f.p(e,c):(f=Je(e),f.c(),f.m(l,d)):f&&(f.d(1),f=null),c&4&&B(l,"ts",e[22].endsWith(".js")),c&4&&B(l,"svelte",e[22].endsWith(".svelte")),c&4&&B(l,"css",e[22].endsWith(".css")),c&4&&B(l,"json",e[22].endsWith(".json"))},d(p){p&&u(l),f&&f.d()}}}function mt(r){let e,l,t,a,s,o,n,i,d,f,p,c,E,q,S,P,te="view raw data for <code>pkg: PackageMeta</code>",Y,X,D,O=JSON.stringify(r[0],null,"	")+"",y,I,H;const z=r[21].repo_name,Z=se(z,r,r[20],Le),U=Z||_t(r),le=r[21].default,$=se(le,r,r[20],null);let T=r[6]&&We(r),V=r[12]&&Me(r),L=r[8]&&Be(r),R=r[10]&&Pe(r),F=r[12]&&ze(r),J=r[9]&&He(r),K=r[4]&&Ue(r),Q=r[8]&&Re(r),G=r[2]&&r[10]&&Fe(r);return{c(){e=g("div"),l=g("header"),U&&U.c(),t=W(),$&&$.c(),a=W(),T&&T.c(),s=W(),V&&V.c(),o=W(),n=g("section"),L&&L.c(),i=W(),R&&R.c(),d=W(),F&&F.c(),f=W(),J&&J.c(),p=W(),K&&K.c(),c=W(),Q&&Q.c(),E=W(),q=g("section"),S=g("details"),P=g("summary"),P.innerHTML=te,Y=W(),X=g("pre"),D=g("code"),y=j(O),I=W(),G&&G.c(),this.h()},l(m){e=v(m,"DIV",{class:!0});var k=b(e);l=v(k,"HEADER",{class:!0});var ke=b(l);U&&U.l(ke),ke.forEach(u),t=M(k),$&&$.l(k),a=M(k),T&&T.l(k),s=M(k),V&&V.l(k),o=M(k),n=v(k,"SECTION",{class:!0});var x=b(n);L&&L.l(x),i=M(x),R&&R.l(x),d=M(x),F&&F.l(x),f=M(x),J&&J.l(x),p=M(x),K&&K.l(x),c=M(x),Q&&Q.l(x),x.forEach(u),E=M(k),q=v(k,"SECTION",{class:!0});var Ee=b(q);S=v(Ee,"DETAILS",{});var ce=b(S);P=v(ce,"SUMMARY",{"data-svelte-h":!0}),et(P)!=="svelte-1ntes9w"&&(P.innerHTML=te),Y=M(ce),X=v(ce,"PRE",{class:!0});var qe=b(X);D=v(qe,"CODE",{});var De=b(D);y=A(De,O),De.forEach(u),qe.forEach(u),ce.forEach(u),Ee.forEach(u),I=M(k),G&&G.l(k),k.forEach(u),this.h()},h(){h(l,"class","spaced"),h(n,"class","properties width_full spaced svelte-maqaae"),h(X,"class","svelte-maqaae"),h(q,"class","width_full spaced"),h(e,"class","package_detail svelte-maqaae")},m(m,k){C(m,e,k),_(e,l),U&&U.m(l,null),_(e,t),$&&$.m(e,null),_(e,a),T&&T.m(e,null),_(e,s),V&&V.m(e,null),_(e,o),_(e,n),L&&L.m(n,null),_(n,i),R&&R.m(n,null),_(n,d),F&&F.m(n,null),_(n,f),J&&J.m(n,null),_(n,p),K&&K.m(n,null),_(n,c),Q&&Q.m(n,null),_(e,E),_(e,q),_(q,S),_(S,P),_(S,Y),_(S,X),_(X,D),_(D,y),_(e,I),G&&G.m(e,null),H=!0},p(m,[k]){Z?Z.p&&(!H||k&1050624)&&ae(Z,z,m,m[20],H?oe(z,m[20],k,ct):re(m[20]),Le):U&&U.p&&(!H||k&2048)&&U.p(m,H?k:-1),$&&$.p&&(!H||k&1048576)&&ae($,le,m,m[20],H?oe(le,m[20],k,null):re(m[20]),null),m[6]?T?(T.p(m,k),k&64&&w(T,1)):(T=We(m),T.c(),w(T,1),T.m(e,s)):T&&(ie(),N(T,1,1,()=>{T=null}),fe()),m[12]?V?(V.p(m,k),k&4096&&w(V,1)):(V=Me(m),V.c(),w(V,1),V.m(e,o)):V&&(ie(),N(V,1,1,()=>{V=null}),fe()),m[8]?L?(L.p(m,k),k&256&&w(L,1)):(L=Be(m),L.c(),w(L,1),L.m(n,i)):L&&(ie(),N(L,1,1,()=>{L=null}),fe()),m[10]?R?R.p(m,k):(R=Pe(m),R.c(),R.m(n,d)):R&&(R.d(1),R=null),m[12]?F?F.p(m,k):(F=ze(m),F.c(),F.m(n,f)):F&&(F.d(1),F=null),m[9]?J?J.p(m,k):(J=He(m),J.c(),J.m(n,p)):J&&(J.d(1),J=null),m[4]?K?K.p(m,k):(K=Ue(m),K.c(),K.m(n,c)):K&&(K.d(1),K=null),m[8]?Q?Q.p(m,k):(Q=Re(m),Q.c(),Q.m(n,null)):Q&&(Q.d(1),Q=null),(!H||k&1)&&O!==(O=JSON.stringify(m[0],null,"	")+"")&&ee(y,O),m[2]&&m[10]?G?G.p(m,k):(G=Fe(m),G.c(),G.m(e,null)):G&&(G.d(1),G=null)},i(m){H||(w(U,m),w($,m),w(T),w(V),w(L),H=!0)},o(m){N(U,m),N($,m),N(T),N(V),N(L),H=!1},d(m){m&&u(e),U&&U.d(m),$&&$.d(m),T&&T.d(),V&&V.d(),L&&L.d(),R&&R.d(),F&&F.d(),J&&J.d(),K&&K.d(),Q&&Q.d(),G&&G.d()}}}function dt(r,e,l){let t,a,s,o,n,i,d,f,p,c,E,q,S,P,te,Y,X,D;ye(r,xe,z=>l(13,D=z));let{$$slots:O={},$$scope:y}=e,{pkg:I}=e;const H=(z,Z)=>z+"/blob/main/src/lib/"+(Z.endsWith(".js")?Z.slice(0,-3)+".ts":Z);return r.$$set=z=>{"pkg"in z&&l(0,I=z.pkg),"$$scope"in z&&l(20,y=z.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&l(19,{package_json:t,npm_url:a,repo_name:s,repo_url:o,changelog_url:n,homepage_url:i}=I,t,(l(12,a),l(0,I)),(l(11,s),l(0,I)),(l(10,o),l(0,I)),(l(9,n),l(0,I)),(l(8,i),l(0,I))),r.$$.dirty&524288&&l(14,{name:d,version:f,description:p,license:c,repository:E,exports:q,modules:S}=t,d,(l(7,f),l(19,t),l(0,I)),(l(6,p),l(19,t),l(0,I)),(l(1,c),l(19,t),l(0,I)),(l(18,E),l(19,t),l(0,I)),(l(16,q),l(19,t),l(0,I)),(l(5,S),l(19,t),l(0,I))),r.$$.dirty&262144&&l(17,P=E?typeof E=="string"?E:E.url:null),r.$$.dirty&131074&&l(4,te=c&&P?P+"/blob/main/LICENSE":null),r.$$.dirty&65536&&l(3,Y=q&&Object.keys(q)),r.$$.dirty&65536&&l(2,X=q?Object.keys(q).map(z=>{const Z=tt(z,"./");return Z==="."?"index.js":Z}):null)},[I,c,X,Y,te,S,p,f,i,n,o,s,a,D,d,H,q,P,E,t,y,O]}class gt extends ve{constructor(e){super(),be(this,e,dt,mt,ge,{pkg:0})}}const vt=r=>r.split("/").filter(e=>e&&e!=="."&&e!==".."),bt=r=>{const e=[],l=vt(r);l.length&&e.push({type:"separator",path:"/"});let t="";for(let a=0;a<l.length;a++){const s=l[a];t+="/"+s,e.push({type:"piece",name:s,path:t}),a!==l.length-1&&e.push({type:"separator",path:t})}return e};function Ge(r,e,l){const t=r.slice();return t[11]=e[l],t}const kt=r=>({}),Ye=r=>({});function Et(r){let e;return{c(){e=j("•")},l(l){e=A(l,"•")},m(l,t){C(l,e,t)},d(l){l&&u(e)}}}function qt(r){let e,l;const t=r[10].separator,a=se(t,r,r[9],Ye),s=a||It();return{c(){e=g("span"),s&&s.c(),this.h()},l(o){e=v(o,"SPAN",{class:!0});var n=b(e);s&&s.l(n),n.forEach(u),this.h()},h(){h(e,"class","separator svelte-g6c005")},m(o,n){C(o,e,n),s&&s.m(e,null),l=!0},p(o,n){a&&a.p&&(!l||n&512)&&ae(a,t,o,o[9],l?oe(t,o[9],n,kt):re(o[9]),Ye)},i(o){l||(w(s,o),l=!0)},o(o){N(s,o),l=!1},d(o){o&&u(e),s&&s.d(o)}}}function Dt(r){let e,l=r[11].name+"",t,a;return{c(){e=g("a"),t=j(l),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var o=b(e);t=A(o,l),o.forEach(u),this.h()},h(){h(e,"href",a=r[0]+r[11].path),h(e,"class","svelte-g6c005"),B(e,"selected",r[11].path===r[3])},m(s,o){C(s,e,o),_(e,t)},p(s,o){o&4&&l!==(l=s[11].name+"")&&ee(t,l),o&5&&a!==(a=s[0]+s[11].path)&&h(e,"href",a),o&12&&B(e,"selected",s[11].path===s[3])},i:je,o:je,d(s){s&&u(e)}}}function It(r){let e;return{c(){e=j("/")},l(l){e=A(l,"/")},m(l,t){C(l,e,t)},d(l){l&&u(e)}}}function Xe(r){let e,l,t,a;const s=[Dt,qt],o=[];function n(i,d){return i[11].type==="piece"?0:1}return e=n(r),l=o[e]=s[e](r),{c(){l.c(),t=we()},l(i){l.l(i),t=we()},m(i,d){o[e].m(i,d),C(i,t,d),a=!0},p(i,d){let f=e;e=n(i),e===f?o[e].p(i,d):(ie(),N(o[f],1,1,()=>{o[f]=null}),fe(),l=o[e],l?l.p(i,d):(l=o[e]=s[e](i),l.c()),w(l,1),l.m(t.parentNode,t))},i(i){a||(w(l),a=!0)},o(i){N(l),a=!1},d(i){i&&u(t),o[e].d(i)}}}function wt(r){let e,l,t;const a=r[10].default,s=se(a,r,r[9],null),o=s||Et();let n=ne(r[2]),i=[];for(let f=0;f<n.length;f+=1)i[f]=Xe(Ge(r,n,f));const d=f=>N(i[f],1,1,()=>{i[f]=null});return{c(){e=g("div"),l=g("a"),o&&o.c();for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=v(f,"DIV",{class:!0});var p=b(e);l=v(p,"A",{href:!0,class:!0});var c=b(l);o&&o.l(c),c.forEach(u);for(let E=0;E<i.length;E+=1)i[E].l(p);p.forEach(u),this.h()},h(){h(l,"href",r[1]),h(l,"class","svelte-g6c005"),B(l,"selected",r[1]===r[3]),h(e,"class","breadcrumb svelte-g6c005")},m(f,p){C(f,e,p),_(e,l),o&&o.m(l,null);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);t=!0},p(f,[p]){if(s&&s.p&&(!t||p&512)&&ae(s,a,f,f[9],t?oe(a,f[9],p,null):re(f[9]),null),(!t||p&2)&&h(l,"href",f[1]),(!t||p&10)&&B(l,"selected",f[1]===f[3]),p&525){n=ne(f[2]);let c;for(c=0;c<n.length;c+=1){const E=Ge(f,n,c);i[c]?(i[c].p(E,p),w(i[c],1)):(i[c]=Xe(E),i[c].c(),w(i[c],1),i[c].m(e,null))}for(ie(),c=n.length;c<i.length;c+=1)d(c);fe()}},i(f){if(!t){w(o,f);for(let p=0;p<n.length;p+=1)w(i[p]);t=!0}},o(f){N(o,f),i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)N(i[p]);t=!1},d(f){f&&u(e),o&&o.d(f),$e(i,f)}}}function jt(r,e,l){let t,a,s,o,n,i;ye(r,xe,q=>l(8,i=q));let{$$slots:d={},$$scope:f}=e,{path:p=void 0}=e,{selected_path:c=void 0}=e,{base_path:E=void 0}=e;return r.$$set=q=>{"path"in q&&l(4,p=q.path),"selected_path"in q&&l(5,c=q.selected_path),"base_path"in q&&l(6,E=q.base_path),"$$scope"in q&&l(9,f=q.$$scope)},r.$$.update=()=>{r.$$.dirty&272&&l(7,t=p??i.url.pathname),r.$$.dirty&160&&l(3,a=c===null?null:c===void 0?t:c),r.$$.dirty&64&&l(0,s=E??ot),r.$$.dirty&128&&l(2,o=bt(t)),r.$$.dirty&1&&l(1,n=s||"/")},[s,n,o,a,p,c,E,t,i,f,d]}class Ze extends ve{constructor(e){super(),be(this,e,jt,wt,ge,{path:4,selected_path:5,base_path:6})}}function At(r){let e;return{c(){e=j("🧶")},l(l){e=A(l,"🧶")},m(l,t){C(l,e,t)},d(l){l&&u(e)}}}function Ct(r){let e;return{c(){e=j("🧶")},l(l){e=A(l,"🧶")},m(l,t){C(l,e,t)},d(l){l&&u(e)}}}function Ot(r){let e,l,t,a,s,o=r[0].repo_name+"",n,i,d,f,p,c,E,q,S,P,te,Y,X;return d=new Ze({props:{$$slots:{default:[At]},$$scope:{ctx:r}}}),E=new gt({props:{pkg:r[0]}}),P=new at({props:{pkg:r[0]}}),Y=new Ze({props:{$$slots:{default:[Ct]},$$scope:{ctx:r}}}),{c(){e=g("main"),l=g("div"),t=g("section"),a=g("header"),s=g("h1"),n=j(o),i=W(),_e(d.$$.fragment),f=W(),p=g("section"),c=g("div"),_e(E.$$.fragment),q=W(),S=g("section"),_e(P.$$.fragment),te=W(),_e(Y.$$.fragment),this.h()},l(D){e=v(D,"MAIN",{class:!0});var O=b(e);l=v(O,"DIV",{class:!0});var y=b(l);t=v(y,"SECTION",{class:!0});var I=b(t);a=v(I,"HEADER",{});var H=b(a);s=v(H,"H1",{class:!0});var z=b(s);n=A(z,o),z.forEach(u),H.forEach(u),i=M(I),ue(d.$$.fragment,I),I.forEach(u),y.forEach(u),f=M(O),p=v(O,"SECTION",{class:!0});var Z=b(p);c=v(Z,"DIV",{class:!0});var U=b(c);ue(E.$$.fragment,U),U.forEach(u),Z.forEach(u),q=M(O),S=v(O,"SECTION",{class:!0});var le=b(S);ue(P.$$.fragment,le),te=M(le),ue(Y.$$.fragment,le),le.forEach(u),O.forEach(u),this.h()},h(){h(s,"class","svelte-1tz8tj3"),h(t,"class","svelte-1tz8tj3"),h(l,"class","prose"),h(c,"class","panel padded_md width_md"),h(p,"class","box width_full spaced svelte-1tz8tj3"),h(S,"class","box svelte-1tz8tj3"),h(e,"class","width_md svelte-1tz8tj3")},m(D,O){C(D,e,O),_(e,l),_(l,t),_(t,a),_(a,s),_(s,n),_(t,i),he(d,t,null),_(e,f),_(e,p),_(p,c),he(E,c,null),_(e,q),_(e,S),he(P,S,null),_(S,te),he(Y,S,null),X=!0},p(D,[O]){const y={};O&2&&(y.$$scope={dirty:O,ctx:D}),d.$set(y);const I={};O&2&&(I.$$scope={dirty:O,ctx:D}),Y.$set(I)},i(D){X||(w(d.$$.fragment,D),w(E.$$.fragment,D),w(P.$$.fragment,D),w(Y.$$.fragment,D),X=!0)},o(D){N(d.$$.fragment,D),N(E.$$.fragment,D),N(P.$$.fragment,D),N(Y.$$.fragment,D),X=!1},d(D){D&&u(e),pe(d),pe(E),pe(P),pe(Y)}}}function Nt(r){return[rt(Ce.homepage,Ce)]}class Bt extends ve{constructor(e){super(),be(this,e,Nt,Ot,ge,{})}}export{Bt as component};
