import{S as d,i as k,s as _,w as h,x as y,y as b,q as c,o as l,B as w,l as p,g as S,p as j,d as B,J as m,P as M,n as P,I as q}from"../../../chunks/vendor-b506428e.js";import{c as C,d as u,a as J,s as g}from"../../../chunks/store-5c7cf519.js";import{M as N}from"../../../chunks/MainSection-15544e19.js";import"../../../chunks/ProgressBar-0e64a379.js";function f(o){let s,a;return s=new N({props:{total_pages:o[0],genres:o[1]}}),{c(){h(s.$$.fragment)},l(e){y(s.$$.fragment,e)},m(e,t){b(s,e,t),a=!0},p(e,t){const n={};t&1&&(n.total_pages=e[0]),t&2&&(n.genres=e[1]),s.$set(n)},i(e){a||(c(s.$$.fragment,e),a=!0)},o(e){l(s.$$.fragment,e),a=!1},d(e){w(s,e)}}}function O(o){let s=o[2],a,e,t=f(o);return{c(){t.c(),a=p()},l(n){t.l(n),a=p()},m(n,r){t.m(n,r),S(n,a,r),e=!0},p(n,[r]){r&4&&_(s,s=n[2])?(P(),l(t,1,1,q),j(),t=f(n),t.c(),c(t),t.m(a.parentNode,a)):t.p(n,r)},i(n){e||(c(t),e=!0)},o(n){l(t),e=!1},d(n){n&&B(a),t.d(n)}}}const U=!0;async function z({fetch:o,params:s}){C.set(1),u.set(void 0);const a=s.id;J.set(s.media);const e=await(await o("../../api/getShowGenre",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:s.media,genre:a,page:"1"})})).json();return u.set(await e.res.results),{props:{total_pages:await e.res.total_pages,genres:a}}}function T(o,s,a){let e,t;m(o,g,i=>a(3,e=i)),m(o,u,i=>a(2,t=i));let{total_pages:n}=s,{genres:r}=s;return M(g,e=null,e),o.$$set=i=>{"total_pages"in i&&a(0,n=i.total_pages),"genres"in i&&a(1,r=i.genres)},[n,r,t]}class A extends d{constructor(s){super();k(this,s,T,O,_,{total_pages:0,genres:1})}}export{A as default,z as load,U as prerender};
