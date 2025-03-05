import{s as Fe,d as Ze}from"../chunks/C2FWLlK8.js";import{S as Pe,i as Je,d as s,a as xe,n as Ue,o as Ye,p as Be,w as R,b as k,c as i,q as We,e as g,f as m,j as y,h as A,g as ze,l as d,u as Ke,k as p,s as D,t as _,v as Qe,m as Ve,x as et,r as tt}from"../chunks/B6v-gt_j.js";import{b as oe}from"../chunks/BBdO-q-K.js";import{e as Ge}from"../chunks/D6YF6ztN.js";import{V as nt}from"../chunks/C36p-J12.js";function Ie(o,e,t){const r=o.slice();return r[5]=e[t],r[7]=t,r}function rt(o){let e=o[0].info.jurisdictionName+"",t,r,a=o[0].info.electionName+"",n;return{c(){t=_(e),r=D(),n=_(a)},l(l){t=d(l,e),r=A(l),n=d(l,a)},m(l,b){k(l,t,b),k(l,r,b),k(l,n,b)},p(l,b){b&1&&e!==(e=l[0].info.jurisdictionName+"")&&R(t,e),b&1&&a!==(a=l[0].info.electionName+"")&&R(n,a)},d(l){l&&(s(t),s(r),s(n))}}}function ot(o){let e,t=o[0].info.jurisdictionName+"",r,a,n=o[0].info.electionName+"",l,b;return{c(){e=p("a"),r=_(t),a=D(),l=_(n),this.h()},l(c){e=m(c,"A",{href:!0});var u=y(e);r=d(u,t),a=A(u),l=d(u,n),u.forEach(s),this.h()},h(){g(e,"href",b=o[0].info.website)},m(c,u){k(c,e,u),i(e,r),i(e,a),i(e,l)},p(c,u){u&1&&t!==(t=c[0].info.jurisdictionName+"")&&R(r,t),u&1&&n!==(n=c[0].info.electionName+"")&&R(l,n),u&1&&b!==(b=c[0].info.website)&&g(e,"href",b)},d(c){c&&s(e)}}}function at(o){let e,t,r=o[5].name+"",a;return{c(){e=_(`,
          `),t=p("strong"),a=_(r)},l(n){e=d(n,`,
          `),t=m(n,"STRONG",{});var l=y(t);a=d(l,r),l.forEach(s)},m(n,l){k(n,e,l),k(n,t,l),i(t,a)},p(n,l){l&1&&r!==(r=n[5].name+"")&&R(a,r)},d(n){n&&(s(e),s(t))}}}function lt(o){let e,t,r=o[5].name+"",a;return{c(){e=_(`, and
          `),t=p("strong"),a=_(r)},l(n){e=d(n,`, and
          `),t=m(n,"STRONG",{});var l=y(t);a=d(l,r),l.forEach(s)},m(n,l){k(n,e,l),k(n,t,l),i(t,a)},p(n,l){l&1&&r!==(r=n[5].name+"")&&R(a,r)},d(n){n&&(s(e),s(t))}}}function it(o){let e,t=o[5].name+"",r;return{c(){e=p("strong"),r=_(t)},l(a){e=m(a,"STRONG",{});var n=y(e);r=d(n,t),n.forEach(s)},m(a,n){k(a,e,n),i(e,r)},p(a,n){n&1&&t!==(t=a[5].name+"")&&R(r,t)},d(a){a&&s(e)}}}function Le(o){let e;function t(n,l){return n[7]==0?it:n[7]==n[0].winners.length-1?lt:at}let r=t(o),a=r(o);return{c(){a.c(),e=Ve()},l(n){a.l(n),e=Ve()},m(n,l){a.m(n,l),k(n,e,l)},p(n,l){r===(r=t(n))&&a?a.p(n,l):(a.d(1),a=r(n),a&&(a.c(),a.m(e.parentNode,e)))},d(n){n&&s(e),a.d(n)}}}function st(o){let e;return{c(){e=_("were the winners out of")},l(t){e=d(t,"were the winners out of")},m(t,r){k(t,e,r)},d(t){t&&s(e)}}}function ft(o){let e;return{c(){e=_("was the winner out of")},l(t){e=d(t,"was the winner out of")},m(t,r){k(t,e,r)},d(t){t&&s(e)}}}function ct(o){let e;return{c(){e=_("candidates")},l(t){e=d(t,"candidates")},m(t,r){k(t,e,r)},d(t){t&&s(e)}}}function ut(o){let e;return{c(){e=_("candidate")},l(t){e=d(t,"candidate")},m(t,r){k(t,e,r)},d(t){t&&s(e)}}}function He(o){let e=o[0].info.notes+"",t;return{c(){t=_(e)},l(r){t=d(r,e)},m(r,a){k(r,t,a)},p(r,a){a&1&&e!==(e=r[0].info.notes+"")&&R(t,e)},d(r){r&&s(t)}}}function dt(o){let e,t,r,a,n,l,b="approval.vote",c,u,M=o[0].info.jurisdictionName+"",J,B,H=o[0].info.officeName+"",O,W,j,T,h,q,v,E,V=qe(o[0].info.date)+"",z,me,ae,le,X,pe,he,ve,ge,G,be,Z,x=o[0].ballotCount.toLocaleString()+"",ie,we,ee,$e=o[2].toLocaleString()+"",ke,ye,te,ne=(o[2]/o[0].ballotCount).toFixed(1)+"",se,Ee,Ne,K,U,F;function Ce(f,w){return f[0].info.website?ot:rt}let fe=Ce(o),I=fe(o),Q=Ge(o[1](o[0].candidates)),$=[];for(let f=0;f<Q.length;f+=1)$[f]=Le(Ie(o,Q,f));function Se(f,w){return f[0].winners.length==1?ft:st}let ce=Se(o),P=ce(o);function Xe(f,w){return f[3]==1?ut:ct}let ue=Xe(o)(o),C=o[0].info.notes&&He(o);return U=new nt({props:{report:o[0]}}),{c(){e=p("div"),t=p("p"),r=D(),a=p("div"),n=p("h1"),l=p("a"),l.textContent=b,c=_(`
      //
      `),u=p("strong"),J=_(M),B=D(),O=_(H),W=D(),j=p("div"),T=p("div"),h=p("p"),q=_(`The
      `),I.c(),v=_(`
      was held on
      `),E=p("strong"),z=_(V),me=_(`.
      `);for(let f=0;f<$.length;f+=1)$[f].c();ae=D(),P.c(),le=D(),X=p("strong"),pe=_(o[3]),he=D(),ue.c(),ve=_(". "),C&&C.c(),ge=D(),G=p("p"),be=_("There were "),Z=p("strong"),ie=_(x),we=_(` ballots,
      with `),ee=p("strong"),ke=_($e),ye=_(` approvals. There was an
      average of `),te=p("strong"),se=_(ne),Ee=_(` approvals
      per ballot in this race.`),Ne=D(),K=p("div"),Qe(U.$$.fragment),this.h()},l(f){e=m(f,"DIV",{class:!0});var w=y(e);t=m(w,"P",{class:!0}),y(t).forEach(s),r=A(w),a=m(w,"DIV",{class:!0});var L=y(a);n=m(L,"H1",{});var N=y(n);l=m(N,"A",{href:!0,"data-svelte-h":!0}),ze(l)!=="svelte-1ibrwq9"&&(l.textContent=b),c=d(N,`
      //
      `),u=m(N,"STRONG",{});var re=y(u);J=d(re,M),re.forEach(s),B=A(N),O=d(N,H),N.forEach(s),L.forEach(s),w.forEach(s),W=A(f),j=m(f,"DIV",{class:!0});var de=y(j);T=m(de,"DIV",{class:!0});var _e=y(T);h=m(_e,"P",{});var S=y(h);q=d(S,`The
      `),I.l(S),v=d(S,`
      was held on
      `),E=m(S,"STRONG",{});var je=y(E);z=d(je,V),je.forEach(s),me=d(S,`.
      `);for(let Te=0;Te<$.length;Te+=1)$[Te].l(S);ae=A(S),P.l(S),le=A(S),X=m(S,"STRONG",{});var Ae=y(X);pe=d(Ae,o[3]),Ae.forEach(s),he=A(S),ue.l(S),ve=d(S,". "),C&&C.l(S),S.forEach(s),ge=A(_e),G=m(_e,"P",{});var Y=y(G);be=d(Y,"There were "),Z=m(Y,"STRONG",{});var De=y(Z);ie=d(De,x),De.forEach(s),we=d(Y,` ballots,
      with `),ee=m(Y,"STRONG",{});var Me=y(ee);ke=d(Me,$e),Me.forEach(s),ye=d(Y,` approvals. There was an
      average of `),te=m(Y,"STRONG",{});var Re=y(te);se=d(Re,ne),Re.forEach(s),Ee=d(Y,` approvals
      per ballot in this race.`),Y.forEach(s),_e.forEach(s),Ne=A(de),K=m(de,"DIV",{class:!0});var Oe=y(K);Ke(U.$$.fragment,Oe),Oe.forEach(s),de.forEach(s),this.h()},h(){g(t,"class","description"),g(l,"href",oe+"/"),g(a,"class","electionHeader"),g(e,"class","row"),g(T,"class","leftCol"),g(K,"class","rightCol"),g(j,"class","row")},m(f,w){k(f,e,w),i(e,t),i(e,r),i(e,a),i(a,n),i(n,l),i(n,c),i(n,u),i(u,J),i(n,B),i(n,O),k(f,W,w),k(f,j,w),i(j,T),i(T,h),i(h,q),I.m(h,null),i(h,v),i(h,E),i(E,z),i(h,me);for(let L=0;L<$.length;L+=1)$[L]&&$[L].m(h,null);i(h,ae),P.m(h,null),i(h,le),i(h,X),i(X,pe),i(h,he),ue.m(h,null),i(h,ve),C&&C.m(h,null),i(T,ge),i(T,G),i(G,be),i(G,Z),i(Z,ie),i(G,we),i(G,ee),i(ee,ke),i(G,ye),i(G,te),i(te,se),i(G,Ee),i(j,Ne),i(j,K),We(U,K,null),F=!0},p(f,[w]){if((!F||w&1)&&M!==(M=f[0].info.jurisdictionName+"")&&R(J,M),(!F||w&1)&&H!==(H=f[0].info.officeName+"")&&R(O,H),fe===(fe=Ce(f))&&I?I.p(f,w):(I.d(1),I=fe(f),I&&(I.c(),I.m(h,v))),(!F||w&1)&&V!==(V=qe(f[0].info.date)+"")&&R(z,V),w&3){Q=Ge(f[1](f[0].candidates));let N;for(N=0;N<Q.length;N+=1){const re=Ie(f,Q,N);$[N]?$[N].p(re,w):($[N]=Le(re),$[N].c(),$[N].m(h,ae))}for(;N<$.length;N+=1)$[N].d(1);$.length=Q.length}ce!==(ce=Se(f))&&(P.d(1),P=ce(f),P&&(P.c(),P.m(h,le))),f[0].info.notes?C?C.p(f,w):(C=He(f),C.c(),C.m(h,null)):C&&(C.d(1),C=null),(!F||w&1)&&x!==(x=f[0].ballotCount.toLocaleString()+"")&&R(ie,x),(!F||w&1)&&ne!==(ne=(f[2]/f[0].ballotCount).toFixed(1)+"")&&R(se,ne);const L={};w&1&&(L.report=f[0]),U.$set(L)},i(f){F||(Be(U.$$.fragment,f),F=!0)},o(f){Ye(U.$$.fragment,f),F=!1},d(f){f&&(s(e),s(W),s(j)),I.d(),xe($,f),P.d(),ue.d(),C&&C.d(),Ue(U)}}}function qe(o){let e=new Date(o);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]} ${e.getUTCDate()}, ${e.getUTCFullYear()}`}function _t(o,e,t){let{report:r}=e;function a(c){return r.candidates[c]}function n(c){return c.length==1?[r.candidates[0]]:c.filter(u=>u.winner===!0)}Ze("candidates",{getCandidate:a});const l=r.candidates.map(c=>c.votes).reduce((c,u)=>c+u),b=r.candidates.filter(c=>!c.writeIn).length;return o.$$set=c=>{"report"in c&&t(0,r=c.report)},[r,n,l,b]}class mt extends Pe{constructor(e){super(),Je(this,e,_t,dt,Fe,{report:0})}}function pt(o){let e,t,r,a,n,l,b,c,u,M,J,B,H,O,W=`<p style="font-style: italic;">This report was generated by <a href="${oe}/">approval.vote</a>
      and may be reproduced under
      <a href="https://creativecommons.org/licenses/by/2.0/">CC-BY</a>. Learn
      more <a href="${oe}/about">about approval.vote</a>.</p>`,j,T,h,q;return document.title=e="approval.vote: "+o[0].info.jurisdictionName+" / "+o[0].info.name+" / "+o[0].info.date.slice(0,4),M=new mt({props:{report:o[0]}}),{c(){t=p("meta"),r=p("meta"),a=p("meta"),n=p("meta"),l=p("meta"),b=p("meta"),c=D(),u=p("div"),Qe(M.$$.fragment),J=D(),B=p("hr"),H=D(),O=p("div"),O.innerHTML=W,j=D(),T=p("a"),h=_("card"),this.h()},l(v){const E=tt("svelte-d6yeo7",document.head);t=m(E,"META",{property:!0,content:!0}),r=m(E,"META",{property:!0,content:!0}),a=m(E,"META",{property:!0,content:!0}),n=m(E,"META",{property:!0,content:!0}),l=m(E,"META",{name:!0,content:!0}),b=m(E,"META",{name:!0,content:!0}),E.forEach(s),c=A(v),u=m(v,"DIV",{class:!0});var V=y(u);Ke(M.$$.fragment,V),J=A(V),B=m(V,"HR",{}),H=A(V),O=m(V,"DIV",{class:!0,"data-svelte-h":!0}),ze(O)!=="svelte-12xp6gq"&&(O.innerHTML=W),V.forEach(s),j=A(v),T=m(v,"A",{style:!0,href:!0});var z=y(T);h=d(z,"card"),z.forEach(s),this.h()},h(){g(t,"property","og:title"),g(t,"content",o[0].info.jurisdictionName+" / "+o[0].info.name),g(r,"property","twitter:card"),g(r,"content","summary"),g(a,"property","twitter:creator"),g(a,"content","@felixsargent"),g(n,"property","twitter:title"),g(n,"content",o[0].info.jurisdictionName+" / "+o[0].info.name),g(l,"name","twitter:description"),g(l,"content","approval.vote: "+o[0].info.jurisdictionName+" / "+o[0].info.name+" / "+o[0].info.date.slice(0,4)),g(b,"name","twitter:image"),g(b,"content",oe+"/icon.png"),g(O,"class","row"),g(u,"class","wide container"),et(T,"display","none"),g(T,"href",oe+"/card/"+o[1])},m(v,E){i(document.head,t),i(document.head,r),i(document.head,a),i(document.head,n),i(document.head,l),i(document.head,b),k(v,c,E),k(v,u,E),We(M,u,null),i(u,J),i(u,B),i(u,H),i(u,O),k(v,j,E),k(v,T,E),i(T,h),q=!0},p(v,[E]){(!q||E&1)&&e!==(e="approval.vote: "+v[0].info.jurisdictionName+" / "+v[0].info.name+" / "+v[0].info.date.slice(0,4))&&(document.title=e)},i(v){q||(Be(M.$$.fragment,v),q=!0)},o(v){Ye(M.$$.fragment,v),q=!1},d(v){v&&(s(c),s(u),s(j),s(T)),s(t),s(r),s(a),s(n),s(l),s(b),Ue(M)}}}function ht(o,e,t){let{data:r}=e,a=r.report,n=r.path;return o.$$set=l=>{"data"in l&&t(2,r=l.data)},[a,n,r]}class Et extends Pe{constructor(e){super(),Je(this,e,ht,pt,Fe,{data:2})}}export{Et as component};
