import{z as p,A as u,B as g,E as D,H as S,C as h,D as F,F as H,G as T,I as A,J as b,K as v,U as L,L as k}from"./B07kJ9fQ.js";function O(E,m,[t,s]=[0,0]){u&&t===0&&g();var a=E,f=null,e=null,i=L,N=t>0?D:0,c=!1;const R=(n,l=!0)=>{c=!0,o(l,n)},o=(n,l)=>{if(i===(i=n))return;let I=!1;if(u&&s!==-1){if(t===0){const r=a.data;r===S?s=0:r===h?s=1/0:(s=parseInt(r.substring(1)),s!==s&&(s=i?1/0:-1))}const _=s>t;!!i===_&&(a=F(),H(a),T(!1),I=!0,s=-1)}i?(f?A(f):l&&(f=b(()=>l(a))),e&&v(e,()=>{e=null})):(e?A(e):l&&(e=b(()=>l(a,[t+1,s]))),f&&v(f,()=>{f=null})),I&&T(!0)};p(()=>{c=!1,m(R),c||o(null,null)},N),u&&(a=k)}export{O as i};
