import{S as d,i as g,s as l,w as h,x as k,y,q as c,o as i,B as w,l as p,g as b,p as j,d as S,J as m,R as v,n as M,I as $}from"../chunks/vendor-035761c6.js";import{d as u,c as q,s as _}from"../chunks/store-70017b87.js";import{M as B}from"../chunks/MainSection-3ab32004.js";import"../chunks/ProgressBar-6e1a97c1.js";function f(r){let t,o;return t=new B({props:{total_pages:r[0]}}),{c(){h(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){y(t,e,s),o=!0},p(e,s){const a={};s&1&&(a.total_pages=e[0]),t.$set(a)},i(e){o||(c(t.$$.fragment,e),o=!0)},o(e){i(t.$$.fragment,e),o=!1},d(e){w(t,e)}}}function C(r){let t=r[1],o,e,s=f(r);return{c(){s.c(),o=p()},l(a){s.l(a),o=p()},m(a,n){s.m(a,n),b(a,o,n),e=!0},p(a,[n]){n&2&&l(t,t=a[1])?(M(),i(s,1,1,$),j(),s=f(a),s.c(),c(s),s.m(o.parentNode,o)):s.p(a,n)},i(a){e||(c(s),e=!0)},o(a){i(s),e=!1},d(a){a&&S(o),s.d(a)}}}async function T({fetch:r}){u.set(void 0),q.set(1);const t=await r("/api/postShow",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:"movie",page:"1"})}),o=await t.json();u.set(o.res.results);const e=await o.res.total_pages;return t.ok?{props:{total_pages:e}}:{status:t.status,error:new Error("what we have here is a failure to communicate")}}function J(r,t,o){let e,s;m(r,_,n=>o(2,e=n)),m(r,u,n=>o(1,s=n));let{total_pages:a}=t;return v(_,e=null,e),r.$$set=n=>{"total_pages"in n&&o(0,a=n.total_pages)},[a,s]}class E extends d{constructor(t){super();g(this,t,J,C,l,{total_pages:0})}}export{E as default,T as load};