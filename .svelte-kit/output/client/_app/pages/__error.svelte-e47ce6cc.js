import{S as z,i as C,s as F,e as p,t as v,k as h,c as k,a as y,h as E,d as n,m as b,g as m,G as j,j as G,l as P,R as I,b as R,I as S}from"../chunks/vendor-b506428e.js";function T(r){let s,u,a,f,_=r[0].stack+"",o;return{c(){s=p("h2"),u=v("This page does not exist"),a=h(),f=p("pre"),o=v(_)},l(t){s=k(t,"H2",{});var l=y(s);u=E(l,"This page does not exist"),l.forEach(n),a=b(t),f=k(t,"PRE",{});var d=y(f);o=E(d,_),d.forEach(n)},m(t,l){m(t,s,l),j(s,u),m(t,a,l),m(t,f,l),j(f,o)},p(t,l){l&1&&_!==(_=t[0].stack+"")&&G(o,_)},d(t){t&&n(s),t&&n(a),t&&n(f)}}}function L(r){let s,u,a,f,_,o,t,l,d;document.title=s=r[1];let i=r[0].stack&&T(r);return{c(){u=h(),a=p("h1"),f=v(r[1]),_=h(),o=p("p"),t=v(r[2]),l=h(),i&&i.c(),d=P(),this.h()},l(e){I('[data-svelte="svelte-1az6e94"]',document.head).forEach(n),u=b(e),a=k(e,"H1",{class:!0});var q=y(a);f=E(q,r[1]),q.forEach(n),_=b(e),o=k(e,"P",{class:!0});var H=y(o);t=E(H,r[2]),H.forEach(n),l=b(e),i&&i.l(e),d=P(),this.h()},h(){R(a,"class","svelte-1vd85o7"),R(o,"class","svelte-1vd85o7")},m(e,c){m(e,u,c),m(e,a,c),j(a,f),m(e,_,c),m(e,o,c),j(o,t),m(e,l,c),i&&i.m(e,c),m(e,d,c)},p(e,[c]){c&2&&s!==(s=e[1])&&(document.title=s),e[0].stack?i?i.p(e,c):(i=T(e),i.c(),i.m(d.parentNode,d)):i&&(i.d(1),i=null)},i:S,o:S,d(e){e&&n(u),e&&n(a),e&&n(_),e&&n(o),e&&n(l),i&&i.d(e),e&&n(d)}}}function w({error:r,status:s}){return{props:{error:r,status:s}}}function N(r,s,u){let{status:a}=s,{error:f}=s;const _=typeof navigator!="undefined"&&navigator.onLine===!1,o=_?"Offline":a,t=_?"Find the internet and try again":f.message;return r.$$set=l=>{"status"in l&&u(3,a=l.status),"error"in l&&u(0,f=l.error)},[f,o,t,a]}class A extends z{constructor(s){super();C(this,s,N,L,F,{status:3,error:0})}}export{A as default,w as load};