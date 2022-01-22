import{S as z,i as F,s as K,e as u,t as k,k as E,l as L,c as m,a as v,h as I,d as _,m as S,b as h,g as $,G as c,Z as R,j as M,Q as te,I as W,w as ae,x as le,y as ne,q as ie,o as oe,B as re,J as ce}from"../../../chunks/vendor-035761c6.js";import{p as fe}from"../../../chunks/stores-60feb9bd.js";function X(n,s,a){const e=n.slice();return e[2]=s[a],e}function Y(n){let s,a,e,l,i=n[0].episodes,o=[];for(let t=0;t<i.length;t+=1)o[t]=ee(X(n,i,t));return{c(){s=u("h4"),a=k("Season Information"),e=E();for(let t=0;t<o.length;t+=1)o[t].c();l=L(),this.h()},l(t){s=m(t,"H4",{class:!0});var f=v(s);a=I(f,"Season Information"),f.forEach(_),e=S(t);for(let r=0;r<o.length;r+=1)o[r].l(t);l=L(),this.h()},h(){h(s,"class","pb-2")},m(t,f){$(t,s,f),c(s,a),$(t,e,f);for(let r=0;r<o.length;r+=1)o[r].m(t,f);$(t,l,f)},p(t,f){if(f&3){i=t[0].episodes;let r;for(r=0;r<i.length;r+=1){const g=X(t,i,r);o[r]?o[r].p(g,f):(o[r]=ee(g),o[r].c(),o[r].m(l.parentNode,l))}for(;r<o.length;r+=1)o[r].d(1);o.length=i.length}},d(t){t&&_(s),t&&_(e),te(o,t),t&&_(l)}}}function ee(n){let s,a,e,l,i,o,t,f,r=n[2].name+"",g,q,x,C,j=n[2].air_date+"",A,G,y,N,T,w,D=n[2].overview+"",H,O,B;return{c(){s=u("div"),a=u("a"),e=u("div"),l=u("img"),o=E(),t=u("div"),f=u("h4"),g=k(r),q=E(),x=u("h6"),C=k("Air Date: "),A=k(j),G=E(),y=u("h6"),N=k("Overview:"),T=E(),w=u("h6"),H=k(D),B=E(),this.h()},l(d){s=m(d,"DIV",{class:!0});var p=v(s);a=m(p,"A",{href:!0,class:!0});var V=v(a);e=m(V,"DIV",{class:!0});var P=v(e);l=m(P,"IMG",{class:!0,src:!0,alt:!0}),P.forEach(_),o=S(V),t=m(V,"DIV",{class:!0});var b=v(t);f=m(b,"H4",{});var Q=v(f);g=I(Q,r),Q.forEach(_),q=S(b),x=m(b,"H6",{});var J=v(x);C=I(J,"Air Date: "),A=I(J,j),J.forEach(_),G=S(b),y=m(b,"H6",{});var U=v(y);N=I(U,"Overview:"),U.forEach(_),T=S(b),w=m(b,"H6",{class:!0});var Z=v(w);H=I(Z,D),Z.forEach(_),b.forEach(_),V.forEach(_),B=S(p),p.forEach(_),this.h()},h(){h(l,"class","flex xl:w-80 xl:h-44 items-start"),R(l.src,i=n[2].still_path?se+n[2].still_path:"/default.jpg")||h(l,"src",i),h(l,"alt","season"),h(e,"class","flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"),h(w,"class","flex-1 pr-8 text-skin-muted mb-4"),h(t,"class","ml-2 block"),h(a,"href",O=`/episode/${n[1]}/${n[0].season_number}/${n[2].episode_number}`),h(a,"class","flex flex-col xl:flex-row text-skin-base xl:rounded-lg"),h(s,"class","bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg")},m(d,p){$(d,s,p),c(s,a),c(a,e),c(e,l),c(a,o),c(a,t),c(t,f),c(f,g),c(t,q),c(t,x),c(x,C),c(x,A),c(t,G),c(t,y),c(y,N),c(t,T),c(t,w),c(w,H),c(s,B)},p(d,p){p&1&&!R(l.src,i=d[2].still_path?se+d[2].still_path:"/default.jpg")&&h(l,"src",i),p&1&&r!==(r=d[2].name+"")&&M(g,r),p&1&&j!==(j=d[2].air_date+"")&&M(A,j),p&1&&D!==(D=d[2].overview+"")&&M(H,D),p&3&&O!==(O=`/episode/${d[1]}/${d[0].season_number}/${d[2].episode_number}`)&&h(a,"href",O)},d(d){d&&_(s)}}}function _e(n){let s,a,e=n[0].id&&Y(n);return{c(){s=u("section"),a=u("div"),e&&e.c(),this.h()},l(l){s=m(l,"SECTION",{id:!0});var i=v(s);a=m(i,"DIV",{class:!0});var o=v(a);e&&e.l(o),o.forEach(_),i.forEach(_),this.h()},h(){h(a,"class","max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"),h(s,"id","season")},m(l,i){$(l,s,i),c(s,a),e&&e.m(a,null)},p(l,[i]){l[0].id?e?e.p(l,i):(e=Y(l),e.c(),e.m(a,null)):e&&(e.d(1),e=null)},i:W,o:W,d(l){l&&_(s),e&&e.d()}}}const se="https://image.tmdb.org/t/p/w500/";function de(n,s,a){let{season_details:e}=s,{tv_id:l}=s;return n.$$set=i=>{"season_details"in i&&a(0,e=i.season_details),"tv_id"in i&&a(1,l=i.tv_id)},[e,l]}class he extends z{constructor(s){super();F(this,s,de,_e,K,{season_details:0,tv_id:1})}}function ue(n){let s,a;return s=new he({props:{season_details:n[0],tv_id:n[1]}}),{c(){ae(s.$$.fragment)},l(e){le(s.$$.fragment,e)},m(e,l){ne(s,e,l),a=!0},p(e,[l]){const i={};l&1&&(i.season_details=e[0]),s.$set(i)},i(e){a||(ie(s.$$.fragment,e),a=!0)},o(e){oe(s.$$.fragment,e),a=!1},d(e){re(s,e)}}}async function be({fetch:n,params:s}){return{props:{season_details:await(await(await n("../../api/postSeason",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({id:s.id,season_number:s.season_number})})).json()).res}}}function me(n,s,a){let e;ce(n,fe,o=>a(2,e=o));let{season_details:l}=s,i=e.params.id;return n.$$set=o=>{"season_details"in o&&a(0,l=o.season_details)},[l,i]}class ge extends z{constructor(s){super();F(this,s,me,ue,K,{season_details:0})}}export{ge as default,be as load};
