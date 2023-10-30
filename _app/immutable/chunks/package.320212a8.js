import{n as H,K,X as S,Y as V,g,d as p,h as c,Z as j,j as k,i as D,A as _,u as I,y as T,b,s as L,f as C,c as A,B as q,C as R,D as B,k as N,l as Q,m as U}from"./scheduler.75aa8c17.js";import{S as P,i as Z,a as y,t as x,b as W,d as X,m as Y,e as J}from"./index.8fbd8643.js";import{s as w,c as F,g as $}from"./string.59ed22c9.js";const ce=(n,e)=>{const{name:t}=e,i=(f=>f?F(w(F(f,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),a=e.homepage??null,s=!e.private&&!!e.exports&&e.version!=="0.0.1",u=s?"https://www.npmjs.com/package/"+e.name:null,r=s&&i?i+"/blob/main/CHANGELOG.md":null,h=ee(t),v=i?w(i,"https://github.com/").split("/")[0]:null;return{url:n,package_json:e,name:t,repo_name:h,repo_url:i,owner_name:v,homepage_url:a,npm_url:u,changelog_url:r,published:s}},ee=n=>n[0]==="@"?n.split("/")[1]:n,G=n=>w(new URL(n).host,"www.");function te(n){let e,t,l=[{xmlns:"http://www.w3.org/2000/svg"},{"aria-label":n[2]},{viewBox:"0 0 1024 1024"},{fill:"none"},n[3]],i={};for(let a=0;a<l.length;a+=1)i=K(i,l[a]);return{c(){e=S("svg"),t=S("path"),this.h()},l(a){e=V(a,"svg",{xmlns:!0,"aria-label":!0,viewBox:!0,fill:!0});var s=g(e);t=V(s,"path",{fill:!0,"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),g(t).forEach(p),s.forEach(p),this.h()},h(){c(t,"fill",n[1]),c(t,"fill-rule","evenodd"),c(t,"clip-rule","evenodd"),c(t,"d",`M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z`),c(t,"transform","scale(64)"),j(e,i),k(e,"width",n[0]),k(e,"height",n[0])},m(a,s){D(a,e,s),_(e,t)},p(a,[s]){s&2&&c(t,"fill",a[1]),j(e,i=$(l,[{xmlns:"http://www.w3.org/2000/svg"},s&4&&{"aria-label":a[2]},{viewBox:"0 0 1024 1024"},{fill:"none"},s&8&&a[3]])),k(e,"width",a[0]),k(e,"height",a[0])},i:I,o:I,d(a){a&&p(e)}}}function ne(n,e,t){let{size:l="var(--spacing_7, 64px)"}=e,{fill:i="var(--color, #000)"}=e,{label:a="GitHub icon"}=e,{attrs:s=void 0}=e;return n.$$set=u=>{"size"in u&&t(0,l=u.size),"fill"in u&&t(1,i=u.fill),"label"in u&&t(2,a=u.label),"attrs"in u&&t(3,s=u.attrs)},[l,i,a,s]}class se extends P{constructor(e){super(),Z(this,e,ne,te,H,{size:0,fill:1,label:2,attrs:3})}}const ae=n=>({}),O=n=>({});function le(n){let e,t;return e=new se({}),{c(){W(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,i){Y(e,l,i),t=!0},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function M(n){let e,t,l=G(n[0])+"",i;return{c(){e=b("div"),t=b("a"),i=N(l),this.h()},l(a){e=C(a,"DIV",{class:!0});var s=g(e);t=C(s,"A",{href:!0,rel:!0});var u=g(t);i=Q(u,l),u.forEach(p),s.forEach(p),this.h()},h(){c(t,"href",n[0]),c(t,"rel","me"),c(e,"class","root_url svelte-1o3q16b")},m(a,s){D(a,e,s),_(e,t),_(t,i)},p(a,s){s&1&&l!==(l=G(a[0])+"")&&U(i,l),s&1&&c(t,"href",a[0])},d(a){a&&p(e)}}}function ie(n){let e,t,l,i,a,s;const u=n[4].default,r=T(u,n,n[3],null),h=n[4].logo,v=T(h,n,n[3],O),f=v||le();let m=n[0]&&M(n);return{c(){e=b("footer"),r&&r.c(),t=L(),l=b("div"),i=b("a"),f&&f.c(),a=L(),m&&m.c(),this.h()},l(o){e=C(o,"FOOTER",{class:!0});var d=g(e);r&&r.l(d),t=A(d),l=C(d,"DIV",{class:!0});var E=g(l);i=C(E,"A",{href:!0,rel:!0,class:!0});var z=g(i);f&&f.l(z),z.forEach(p),E.forEach(p),a=A(d),m&&m.l(d),d.forEach(p),this.h()},h(){c(i,"href",n[1]),c(i,"rel","me"),c(i,"class","svelte-1o3q16b"),c(l,"class","logo svelte-1o3q16b"),c(e,"class","panel padded_lg svelte-1o3q16b")},m(o,d){D(o,e,d),r&&r.m(e,null),_(e,t),_(e,l),_(l,i),f&&f.m(i,null),_(e,a),m&&m.m(e,null),s=!0},p(o,[d]){r&&r.p&&(!s||d&8)&&q(r,u,o,o[3],s?B(u,o[3],d,null):R(o[3]),null),v&&v.p&&(!s||d&8)&&q(v,h,o,o[3],s?B(h,o[3],d,ae):R(o[3]),O),(!s||d&2)&&c(i,"href",o[1]),o[0]?m?m.p(o,d):(m=M(o),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i(o){s||(y(r,o),y(f,o),s=!0)},o(o){x(r,o),x(f,o),s=!1},d(o){o&&p(e),r&&r.d(o),f&&f.d(o),m&&m.d()}}}function oe(n,e,t){let l,{$$slots:i={},$$scope:a}=e,{pkg:s}=e,{root_url:u=null}=e;return n.$$set=r=>{"pkg"in r&&t(2,s=r.pkg),"root_url"in r&&t(0,u=r.root_url),"$$scope"in r&&t(3,a=r.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&t(1,{repo_url:l}=s,l)},[u,l,s,a,i]}class de extends P{constructor(e){super(),Z(this,e,oe,ie,H,{pkg:2,root_url:0})}}const fe={name:"@fuz.dev/fuz_contextmenu",description:"contextmenu for Svelte and Fuz",version:"0.5.0",type:"module",license:"MIT",homepage:"https://contextmenu.fuz.dev/",repository:"https://github.com/fuz-dev/fuz_contextmenu",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},engines:{node:">=20.7"},scripts:{start:"gro dev",dev:"gro dev",build:"gro build",test:"gro test",deploy:"gro deploy"},files:["dist"],peerDependencies:{"@fuz.dev/fuz_library":"*","@grogarden/util":"*",svelte:"*"},devDependencies:{"@changesets/changelog-git":"^0.1.14","@feltjs/eslint-config":"^0.4.1","@fuz.dev/fuz":"^0.76.0","@fuz.dev/fuz_code":"^0.4.0","@fuz.dev/fuz_dialog":"^0.4.0","@fuz.dev/fuz_library":"^0.16.0","@grogarden/gro":"^0.97.0","@grogarden/util":"^0.15.2","@sveltejs/adapter-static":"^2.0.3","@sveltejs/kit":"^1.27.1","@sveltejs/package":"^2.2.2","@types/prismjs":"^1.26.2","@typescript-eslint/eslint-plugin":"^6.9.0","@typescript-eslint/parser":"^6.9.0",eslint:"^8.52.0","eslint-plugin-svelte":"^2.34.0",prettier:"^3.0.3","prettier-plugin-svelte":"^3.0.3","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^4.2.2","svelte-check":"^3.5.2",tslib:"^2.6.2",typescript:"^5.2.2",uvu:"^0.5.6"},eslintConfig:{root:!0,extends:"@feltjs"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},exports:{"./Contextmenu.svelte":{svelte:"./dist/Contextmenu.svelte",default:"./dist/Contextmenu.svelte",types:"./dist/Contextmenu.svelte.d.ts"},"./contextmenu.js":{default:"./dist/contextmenu.js",types:"./dist/contextmenu.d.ts"},"./ContextmenuEntry.svelte":{svelte:"./dist/ContextmenuEntry.svelte",default:"./dist/ContextmenuEntry.svelte",types:"./dist/ContextmenuEntry.svelte.d.ts"},"./ContextmenuLinkEntry.svelte":{svelte:"./dist/ContextmenuLinkEntry.svelte",default:"./dist/ContextmenuLinkEntry.svelte",types:"./dist/ContextmenuLinkEntry.svelte.d.ts"},"./ContextmenuSubmenu.svelte":{svelte:"./dist/ContextmenuSubmenu.svelte",default:"./dist/ContextmenuSubmenu.svelte",types:"./dist/ContextmenuSubmenu.svelte.d.ts"},"./ContextmenuTextEntry.svelte":{svelte:"./dist/ContextmenuTextEntry.svelte",default:"./dist/ContextmenuTextEntry.svelte",types:"./dist/ContextmenuTextEntry.svelte.d.ts"},"./package.gen.js":{default:"./dist/package.gen.js",types:"./dist/package.gen.d.ts"},"./package.js":{default:"./dist/package.js",types:"./dist/package.d.ts"}},modules:{"./contextmenu.js":{path:"contextmenu.ts",declarations:[{name:"ContextmenuParams",kind:"TypeAliasDeclaration"},{name:"ContextmenuActionParams",kind:"TypeAliasDeclaration"},{name:"to_contextmenu_params",kind:"VariableDeclaration"},{name:"ItemState",kind:"TypeAliasDeclaration"},{name:"EntryState",kind:"InterfaceDeclaration"},{name:"SubmenuState",kind:"InterfaceDeclaration"},{name:"RootMenuState",kind:"InterfaceDeclaration"},{name:"ContextmenuRun",kind:"InterfaceDeclaration"},{name:"Contextmenu",kind:"InterfaceDeclaration"},{name:"ContextmenuStore",kind:"InterfaceDeclaration"},{name:"ContextmenuStoreOptions",kind:"InterfaceDeclaration"},{name:"create_contextmenu",kind:"VariableDeclaration"},{name:"open_contextmenu",kind:"VariableDeclaration"},{name:"set_contextmenu",kind:"VariableDeclaration"},{name:"get_contextmenu",kind:"VariableDeclaration"},{name:"set_contextmenu_submenu",kind:"VariableDeclaration"},{name:"get_contextmenu_submenu",kind:"VariableDeclaration"},{name:"set_contextmenu_dimensions",kind:"VariableDeclaration"},{name:"get_contextmenu_dimensions",kind:"VariableDeclaration"}]},"./package.gen.js":{path:"package.gen.ts",declarations:[]},"./package.js":{path:"package.ts",declarations:[{name:"package_json",kind:"VariableDeclaration"}]}}};export{de as L,fe as a,G as f,ce as p};