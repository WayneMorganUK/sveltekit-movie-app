import{S as m,i as u,s as l,j as p,m as g,o as f,x as _,u as d,v as h,L as j,M as S}from"../../../chunks/vendor-fc6286ba.js";import{d as i,a as w,s as c}from"../../../chunks/store-07881416.js";import{M as y}from"../../../chunks/MainSection-8e495d87.js";import"../../../chunks/ProgressBar-f61e37f1.js";function b(n){let e,s;return e=new y({props:{total_pages:n[0],genres:n[1]}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,a){f(e,t,a),s=!0},p(t,[a]){const o={};a&1&&(o.total_pages=t[0]),a&2&&(o.genres=t[1]),e.$set(o)},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}const O=!0;async function P({fetch:n,page:e}){i.set(void 0);const s=e.params.id;w.set(e.params.media);const a=await(await n("../../api/getShowGenre",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:e.params.media,page:"1",genre:s})})).json();return i.set(await a.res.results),{props:{total_pages:await a.res.total_pages,genres:s}}}function k(n,e,s){let t;j(n,c,r=>s(2,t=r));let{total_pages:a}=e,{genres:o}=e;return S(c,t=null,t),n.$$set=r=>{"total_pages"in r&&s(0,a=r.total_pages),"genres"in r&&s(1,o=r.genres)},[a,o]}class T extends m{constructor(e){super();u(this,e,k,b,l,{total_pages:0,genres:1})}}export{T as default,P as load,O as prerender};
