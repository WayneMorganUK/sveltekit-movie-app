import{S as s,i as a,s as r,j as t,m as e,o as n,x as o,u as i,v as p,l as m,f as d,w as c,d as u,L as f,M as $,r as l,H as h}from"../../../chunks/vendor-8fe9a59e.js";import{M as g}from"../../../chunks/MainSection-5ed8f046.js";import{a as j,A as k}from"../../../chunks/store-892411d9.js";import{p as v}from"../../../chunks/stores-d4b77a7d.js";import"../../../chunks/Spinner-5ae9cd83.js";function _(s){let a,r;return a=new g({props:{api_url:s[1]}}),{c(){t(a.$$.fragment)},l(s){e(a.$$.fragment,s)},m(s,t){n(a,s,t),r=!0},p(s,r){const t={};2&r&&(t.api_url=s[1]),a.$set(t)},i(s){r||(o(a.$$.fragment,s),r=!0)},o(s){i(a.$$.fragment,s),r=!1},d(s){p(a,s)}}}function w(s){let a,t,e=s[0].params.id,n=_(s);return{c(){n.c(),a=m()},l(s){n.l(s),a=m()},m(s,r){n.m(s,r),d(s,a,r),t=!0},p(s,[t]){1&t&&r(e,e=s[0].params.id)?(l(),i(n,1,1,h),c(),n=_(s),n.c(),o(n),n.m(a.parentNode,a)):n.p(s,t)},i(s){t||(o(n),t=!0)},o(s){i(n),t=!1},d(s){s&&u(a),n.d(s)}}}function x(s,a,r){let t,e,n,o;return f(s,v,(s=>r(0,e=s))),f(s,k,(s=>r(2,n=s))),f(s,j,(s=>r(3,o=s))),$(j,o="tv",o),s.$$.update=()=>{5&s.$$.dirty&&r(1,t=`https://api.themoviedb.org/3/discover/tv?api_key=${n}&with_genres=${e.params.id}&page=`)},[e,t,n]}class M extends s{constructor(s){super(),a(this,s,x,w,r,{})}}export{M as default};
