import{S as C,i as D,s as H,a as b,k as h,q as v,D as I,h as n,c as g,l as E,m as $,r as S,b as _,E as q,u as j,I as k,J}from"../chunks/index.81eab480.js";import{d as P}from"../chunks/singletons.b4b941ad.js";const w=()=>{const s=P;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},x={subscribe(s){return w().page.subscribe(s)}};function y(s){let r,i,t,o=s[0].status+"",c,p,l,u=s[0].error.message+"",m;return document.title=r=s[0].status,{c(){i=b(),t=h("h1"),c=v(o),p=b(),l=h("p"),m=v(u)},l(e){I("svelte-1pmtc3j",document.head).forEach(n),i=g(e),t=E(e,"H1",{});var d=$(t);c=S(d,o),d.forEach(n),p=g(e),l=E(e,"P",{});var f=$(l);m=S(f,u),f.forEach(n)},m(e,a){_(e,i,a),_(e,t,a),q(t,c),_(e,p,a),_(e,l,a),q(l,m)},p(e,[a]){a&1&&r!==(r=e[0].status)&&(document.title=r),a&1&&o!==(o=e[0].status+"")&&j(c,o),a&1&&u!==(u=e[0].error.message+"")&&j(m,u)},i:k,o:k,d(e){e&&n(i),e&&n(t),e&&n(p),e&&n(l)}}}function z(s,r,i){let t;return J(s,x,o=>i(0,t=o)),[t]}let F=class extends C{constructor(r){super(),D(this,r,z,y,H,{})}};export{F as component};
