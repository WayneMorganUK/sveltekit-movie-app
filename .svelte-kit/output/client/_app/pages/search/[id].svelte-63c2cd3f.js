import{N as i,S as c,i as p,s as m,j as u,m as l,o as f,x as _,u as g,v as d}from"../../chunks/vendor-fc6286ba.js";import{d as r,a as h}from"../../chunks/store-07881416.js";import{M as $}from"../../chunks/MainSection-8e495d87.js";import"../../chunks/ProgressBar-f61e37f1.js";function j(n){let a,s;return a=new $({props:{total_pages:n[0]}}),{c(){u(a.$$.fragment)},l(t){l(a.$$.fragment,t)},m(t,e){f(a,t,e),s=!0},p(t,[e]){const o={};e&1&&(o.total_pages=t[0]),a.$set(o)},i(t){s||(_(a.$$.fragment,t),s=!0)},o(t){g(a.$$.fragment,t),s=!1},d(t){d(a,t)}}}async function x({fetch:n,page:a}){const t=await(await n("../api/getSearch",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:i(h),page:"1",query:a.params.id})})).json();r.set(await t.res.results);const e=await t.res.total_pages;return{props:{data:r,total_pages:e}}}function y(n,a,s){let{total_pages:t}=a;return n.$$set=e=>{"total_pages"in e&&s(0,t=e.total_pages)},[t]}class M extends c{constructor(a){super();p(this,a,y,j,m,{total_pages:0})}}export{M as default,x as load};
