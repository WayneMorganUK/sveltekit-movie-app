import{N as h,S as y,i as b,s as u,j,m as S,o as w,x as c,u as l,v as M,l as _,f as N,w as v,d as C,L as m,M as d,r as O,H as T}from"../../chunks/vendor-8fe9a59e.js";import{a as f,s as g,c as q}from"../../chunks/store-fe56146d.js";import{M as B}from"../../chunks/MainSection-d39b3699.js";import{p as D}from"../../chunks/stores-d4b77a7d.js";import"../../chunks/Spinner-629d5ba5.js";function k(n){let s,o;return s=new B({props:{data:n[0],total_pages:n[1]}}),{c(){j(s.$$.fragment)},l(e){S(s.$$.fragment,e)},m(e,a){w(s,e,a),o=!0},p(e,a){const t={};a&1&&(t.data=e[0]),a&2&&(t.total_pages=e[1]),s.$set(t)},i(e){o||(c(s.$$.fragment,e),o=!0)},o(e){l(s.$$.fragment,e),o=!1},d(e){M(s,e)}}}function H(n){let s=n[0],o,e,a=k(n);return{c(){a.c(),o=_()},l(t){a.l(t),o=_()},m(t,i){a.m(t,i),N(t,o,i),e=!0},p(t,[i]){i&1&&u(s,s=t[0])?(O(),l(a,1,1,T),v(),a=k(t),a.c(),c(a),a.m(o.parentNode,o)):a.p(t,i)},i(t){e||(c(a),e=!0)},o(t){l(a),e=!1},d(t){t&&C(o),a.d(t)}}}async function E({fetch:n,page:s}){const e=await(await n("../../api/getShow",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:s.params.media,page:h(q)})})).json(),a=await e.res.results,t=await e.res.total_pages;return{props:{data:a,total_pages:t}}}function J(n,s,o){let e,a,t;m(n,g,r=>o(2,e=r)),m(n,D,r=>o(3,a=r)),m(n,f,r=>o(4,t=r));let{data:i}=s,{total_pages:p}=s;return d(f,t=a.params.media,t),d(g,e=null,e),n.$$set=r=>{"data"in r&&o(0,i=r.data),"total_pages"in r&&o(1,p=r.total_pages)},[i,p]}class F extends y{constructor(s){super();b(this,s,J,H,u,{data:0,total_pages:1})}}export{F as default,E as load};