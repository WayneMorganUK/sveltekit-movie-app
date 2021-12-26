import{S as qe,i as Fe,s as Te,e as v,k,t as A,c as h,a as p,d,n as w,g as P,b as m,O as Oe,f as O,D as f,h as W,H as ue,K as Ye,l as se,r as we,u as C,w as Ee,x as j,L as me,M as Ce,X as dt,j as ve,m as he,o as pe,v as ge,Z as Ke,F as ut}from"../../chunks/vendor-fc6286ba.js";import{e as $e,f as et,b as tt,a as Le}from"../../chunks/store-07881416.js";import{P as mt}from"../../chunks/ProgressBar-f61e37f1.js";import{S as vt,C as ht,M as pt}from"../../chunks/Cast-6bfa9e9c.js";import{p as gt}from"../../chunks/stores-462c50b9.js";function lt(a,e,t){const l=a.slice();return l[2]=e[t],l}function st(a){let e,t,l,s,i,_,o,r,c=a[2].name+"",u,E,S,Z,g=a[2].air_date+"",U,Y,z,B,J,q,X=a[2].overview+"",$,F,ae;return{c(){e=v("div"),t=v("a"),l=v("div"),s=v("img"),_=k(),o=v("div"),r=v("h4"),u=A(c),E=k(),S=v("h6"),Z=A("Air Date: "),U=A(g),Y=k(),z=v("h6"),B=A("Overview:"),J=k(),q=v("h6"),$=A(X),ae=k(),this.h()},l(V){e=h(V,"DIV",{class:!0});var y=p(e);t=h(y,"A",{href:!0,class:!0});var ee=p(t);l=h(ee,"DIV",{class:!0});var H=p(l);s=h(H,"IMG",{class:!0,src:!0,alt:!0}),H.forEach(d),_=w(ee),o=h(ee,"DIV",{class:!0});var G=p(o);r=h(G,"H4",{});var re=p(r);u=P(re,c),re.forEach(d),E=w(G),S=h(G,"H6",{});var M=p(S);Z=P(M,"Air Date: "),U=P(M,g),M.forEach(d),Y=w(G),z=h(G,"H6",{});var Q=p(z);B=P(Q,"Overview:"),Q.forEach(d),J=w(G),q=h(G,"H6",{class:!0});var te=p(q);$=P(te,X),te.forEach(d),G.forEach(d),ee.forEach(d),ae=w(y),y.forEach(d),this.h()},h(){m(s,"class","flex xl:w-40 xl: h-60 items-start"),Oe(s.src,i=a[2].poster_path?at+a[2].poster_path:"/default.jpg")||m(s,"src",i),m(s,"alt","episode"),m(l,"class","flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-40 xl:h-60 xl:items-start"),m(q,"class","flex-1 pr-8 text-skin-muted mb-4"),m(o,"class","justify-self-center ml-2 block xl:justify-start"),m(t,"href",F=`/seasons/${a[1]}/${a[2].season_number}`),m(t,"class","flex flex-col xl:flex-row text-skin-base xl:rounded-lg"),m(e,"class","bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg")},m(V,y){O(V,e,y),f(e,t),f(t,l),f(l,s),f(t,_),f(t,o),f(o,r),f(r,u),f(o,E),f(o,S),f(S,Z),f(S,U),f(o,Y),f(o,z),f(z,B),f(o,J),f(o,q),f(q,$),f(e,ae)},p(V,y){y&1&&!Oe(s.src,i=V[2].poster_path?at+V[2].poster_path:"/default.jpg")&&m(s,"src",i),y&1&&c!==(c=V[2].name+"")&&W(u,c),y&1&&g!==(g=V[2].air_date+"")&&W(U,g),y&1&&X!==(X=V[2].overview+"")&&W($,X),y&3&&F!==(F=`/seasons/${V[1]}/${V[2].season_number}`)&&m(t,"href",F)},d(V){V&&d(e)}}}function bt(a){let e,t,l,s,i,_=a[0].seasons,o=[];for(let r=0;r<_.length;r+=1)o[r]=st(lt(a,_,r));return{c(){e=v("section"),t=v("div"),l=v("h4"),s=A("Season Information"),i=k();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=h(r,"SECTION",{id:!0});var c=p(e);t=h(c,"DIV",{class:!0});var u=p(t);l=h(u,"H4",{class:!0});var E=p(l);s=P(E,"Season Information"),E.forEach(d),i=w(u);for(let S=0;S<o.length;S+=1)o[S].l(u);u.forEach(d),c.forEach(d),this.h()},h(){m(l,"class","pb-2"),m(t,"class","max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"),m(e,"id","Seasons")},m(r,c){O(r,e,c),f(e,t),f(t,l),f(l,s),f(t,i);for(let u=0;u<o.length;u+=1)o[u].m(t,null)},p(r,[c]){if(c&3){_=r[0].seasons;let u;for(u=0;u<_.length;u+=1){const E=lt(r,_,u);o[u]?o[u].p(E,c):(o[u]=st(E),o[u].c(),o[u].m(t,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=_.length}},i:ue,o:ue,d(r){r&&d(e),Ye(o,r)}}}const at="https://www.themoviedb.org/t/p/original";function kt(a,e,t){let{tv_details:l}=e,{movie_id:s}=e;return a.$$set=i=>{"tv_details"in i&&t(0,l=i.tv_details),"movie_id"in i&&t(1,s=i.movie_id)},[l,s]}class wt extends qe{constructor(e){super();Fe(this,e,kt,bt,Te,{tv_details:0,movie_id:1})}}function rt(a,e,t){const l=a.slice();return l[11]=e[t].id,l[12]=e[t].name,l[14]=t,l}function Et(a){let e,t;return e=new vt({}),{c(){ve(e.$$.fragment)},l(l){he(e.$$.fragment,l)},m(l,s){pe(e,l,s),t=!0},p:ue,i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){ge(e,l)}}}function It(a){let e,t,l,s,i,_,o,r,c,u,E=a[0].name+"",S,Z,g,U=(a[0]?a[0].first_air_date.substring(0,4):"")+"",Y,z,B,J,q=("first_air_date"in a[0]?a[0].first_air_date:"No Date Available")+"",X,$,F,ae,V,y,ee,H,G,re,M,Q,te=a[0].tagline+"",Ie,He,ie,Ge,Be,ne,be=a[0].overview+"",xe,De,le,je,oe,fe,K,ce=a[0].genres,T=[];for(let n=0;n<ce.length;n+=1)T[n]=nt(rt(a,ce,n));let I=a[0].vote_average&&ot(a);function Ue(n,b){return n[1]!==999?Dt:xt}let ye=Ue(a),L=ye(a);le=new ht({props:{cast:a[3]}});let x=a[1]!==999&&ft(a),D=a[5]==="tv"&&ct(a);return{c(){e=v("section"),t=v("div"),l=v("div"),s=v("div"),i=v("img"),o=k(),r=v("div"),c=v("div"),u=v("h4"),S=A(E),Z=k(),g=v("span"),Y=A(U),z=k(),B=v("div"),J=v("div"),X=A(q),$=k(),F=v("span"),ae=A("\u2022"),V=k(),y=v("div");for(let n=0;n<T.length;n+=1)T[n].c();ee=k(),H=v("div"),I&&I.c(),G=k(),L.c(),re=k(),M=v("div"),Q=v("div"),Ie=A(te),He=k(),ie=v("h4"),Ge=A("Overview"),Be=k(),ne=v("div"),xe=A(be),De=k(),ve(le.$$.fragment),je=k(),x&&x.c(),oe=k(),D&&D.c(),fe=se(),this.h()},l(n){e=h(n,"SECTION",{id:!0,class:!0,style:!0});var b=p(e);t=h(b,"DIV",{class:!0,style:!0});var R=p(t);l=h(R,"DIV",{class:!0});var N=p(l);s=h(N,"DIV",{class:!0});var ke=p(s);i=h(ke,"IMG",{class:!0,src:!0,alt:!0}),ke.forEach(d),o=w(N),r=h(N,"DIV",{class:!0});var _e=p(r);c=h(_e,"DIV",{class:!0});var Se=p(c);u=h(Se,"H4",{class:!0});var Ve=p(u);S=P(Ve,E),Z=w(Ve),g=h(Ve,"SPAN",{class:!0});var Xe=p(g);Y=P(Xe,U),Xe.forEach(d),Ve.forEach(d),z=w(Se),B=h(Se,"DIV",{class:!0});var Ne=p(B);J=h(Ne,"DIV",{class:!0});var Ae=p(J);X=P(Ae,q),$=w(Ae),F=h(Ae,"SPAN",{class:!0});var Ze=p(F);ae=P(Ze,"\u2022"),Ze.forEach(d),Ae.forEach(d),V=w(Ne),y=h(Ne,"DIV",{});var ze=p(y);for(let Je=0;Je<T.length;Je+=1)T[Je].l(ze);ze.forEach(d),Ne.forEach(d),Se.forEach(d),ee=w(_e),H=h(_e,"DIV",{class:!0});var Pe=p(H);I&&I.l(Pe),G=w(Pe),L.l(Pe),Pe.forEach(d),re=w(_e),M=h(_e,"DIV",{class:!0});var de=p(M);Q=h(de,"DIV",{class:!0});var Qe=p(Q);Ie=P(Qe,te),Qe.forEach(d),He=w(de),ie=h(de,"H4",{class:!0});var Re=p(ie);Ge=P(Re,"Overview"),Re.forEach(d),Be=w(de),ne=h(de,"DIV",{class:!0});var We=p(ne);xe=P(We,be),We.forEach(d),de.forEach(d),_e.forEach(d),N.forEach(d),R.forEach(d),b.forEach(d),De=w(n),he(le.$$.fragment,n),je=w(n),x&&x.l(n),oe=w(n),D&&D.l(n),fe=se(),this.h()},h(){m(i,"class","h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto"),Oe(i.src,_=a[0].poster_path?Me+"w500"+a[0].poster_path:"/default.jpg")||m(i,"src",_),m(i,"alt","movie poster"),m(s,"class","col-start-1 col-end-2 "),m(g,"class","text-lg xl:text-4xl text-skin-inverted"),m(u,"class","w-full xl:text-4xl"),m(F,"class","hidden xl:px-2 xl:inline"),m(J,"class","pl-0"),m(B,"class","xl:flex"),m(c,"class","mt-6 xl:mt-0 w-full mb-6 flex flex-wrap"),m(H,"class","mb-5 w-full h-16 flex items-center justify-start"),m(Q,"class","text-lg italic opacity-70"),m(ie,"class","my-2 w-full font-semibold"),m(ne,"class","overview-details"),m(M,"class","w-full"),m(r,"class","xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10"),m(l,"class","grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl"),m(t,"class","bg-gradient-to-r xl:rounded-2xl"),Ke(t,"background-image","linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"),m(e,"id","media"),m(e,"class","text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain xl:bg-cover xl:rounded-2xl"),Ke(e,"background-image","url("+Me+"original/"+a[0].backdrop_path+")")},m(n,b){O(n,e,b),f(e,t),f(t,l),f(l,s),f(s,i),f(l,o),f(l,r),f(r,c),f(c,u),f(u,S),f(u,Z),f(u,g),f(g,Y),f(c,z),f(c,B),f(B,J),f(J,X),f(J,$),f(J,F),f(F,ae),f(B,V),f(B,y);for(let R=0;R<T.length;R+=1)T[R].m(y,null);f(r,ee),f(r,H),I&&I.m(H,null),f(H,G),L.m(H,null),f(r,re),f(r,M),f(M,Q),f(Q,Ie),f(M,He),f(M,ie),f(ie,Ge),f(M,Be),f(M,ne),f(ne,xe),O(n,De,b),pe(le,n,b),O(n,je,b),x&&x.m(n,b),O(n,oe,b),D&&D.m(n,b),O(n,fe,b),K=!0},p(n,b){if((!K||b&1&&!Oe(i.src,_=n[0].poster_path?Me+"w500"+n[0].poster_path:"/default.jpg"))&&m(i,"src",_),(!K||b&1)&&E!==(E=n[0].name+"")&&W(S,E),(!K||b&1)&&U!==(U=(n[0]?n[0].first_air_date.substring(0,4):"")+"")&&W(Y,U),(!K||b&1)&&q!==(q=("first_air_date"in n[0]?n[0].first_air_date:"No Date Available")+"")&&W(X,q),b&33){ce=n[0].genres;let N;for(N=0;N<ce.length;N+=1){const ke=rt(n,ce,N);T[N]?T[N].p(ke,b):(T[N]=nt(ke),T[N].c(),T[N].m(y,null))}for(;N<T.length;N+=1)T[N].d(1);T.length=ce.length}n[0].vote_average?I?(I.p(n,b),b&1&&j(I,1)):(I=ot(n),I.c(),j(I,1),I.m(H,G)):I&&(we(),C(I,1,1,()=>{I=null}),Ee()),ye===(ye=Ue(n))&&L?L.p(n,b):(L.d(1),L=ye(n),L&&(L.c(),L.m(H,null))),(!K||b&1)&&te!==(te=n[0].tagline+"")&&W(Ie,te),(!K||b&1)&&be!==(be=n[0].overview+"")&&W(xe,be),(!K||b&1)&&Ke(e,"background-image","url("+Me+"original/"+n[0].backdrop_path+")");const R={};b&8&&(R.cast=n[3]),le.$set(R),n[1]!==999?x?(x.p(n,b),b&2&&j(x,1)):(x=ft(n),x.c(),j(x,1),x.m(oe.parentNode,oe)):x&&(we(),C(x,1,1,()=>{x=null}),Ee()),n[5]==="tv"?D?(D.p(n,b),b&32&&j(D,1)):(D=ct(n),D.c(),j(D,1),D.m(fe.parentNode,fe)):D&&(we(),C(D,1,1,()=>{D=null}),Ee())},i(n){K||(j(I),j(le.$$.fragment,n),j(x),j(D),K=!0)},o(n){C(I),C(le.$$.fragment,n),C(x),C(D),K=!1},d(n){n&&d(e),Ye(T,n),I&&I.d(),L.d(),n&&d(De),ge(le,n),n&&d(je),x&&x.d(n),n&&d(oe),D&&D.d(n),n&&d(fe)}}}function it(a){let e,t;return{c(){e=v("span"),t=A("|"),this.h()},l(l){e=h(l,"SPAN",{class:!0});var s=p(e);t=P(s,"|"),s.forEach(d),this.h()},h(){m(e,"class","mx-2")},m(l,s){O(l,e,s),f(e,t)},d(l){l&&d(e)}}}function nt(a){let e,t=a[12]+"",l,s,i,_,o=a[14]!==a[0].genres.length-1&&it();return{c(){e=v("a"),l=A(t),i=k(),o&&o.c(),_=se(),this.h()},l(r){e=h(r,"A",{class:!0,href:!0});var c=p(e);l=P(c,t),c.forEach(d),i=w(r),o&&o.l(r),_=se(),this.h()},h(){m(e,"class","hover:text-skin-selected"),m(e,"href",s="/genre/"+a[5]+"/"+a[11])},m(r,c){O(r,e,c),f(e,l),O(r,i,c),o&&o.m(r,c),O(r,_,c)},p(r,c){c&1&&t!==(t=r[12]+"")&&W(l,t),c&33&&s!==(s="/genre/"+r[5]+"/"+r[11])&&m(e,"href",s),r[14]!==r[0].genres.length-1?o||(o=it(),o.c(),o.m(_.parentNode,_)):o&&(o.d(1),o=null)},d(r){r&&d(e),r&&d(i),o&&o.d(r),r&&d(_)}}}function ot(a){let e,t,l;return t=new mt({props:{progress:a[0].vote_average}}),{c(){e=v("div"),ve(t.$$.fragment),this.h()},l(s){e=h(s,"DIV",{class:!0});var i=p(e);he(t.$$.fragment,i),i.forEach(d),this.h()},h(){m(e,"class","bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60")},m(s,i){O(s,e,i),pe(t,e,null),l=!0},p(s,i){const _={};i&1&&(_.progress=s[0].vote_average),t.$set(_)},i(s){l||(j(t.$$.fragment,s),l=!0)},o(s){C(t.$$.fragment,s),l=!1},d(s){s&&d(e),ge(t)}}}function xt(a){let e,t,l;return{c(){e=v("div"),t=v("p"),l=A("No Trailer Available"),this.h()},l(s){e=h(s,"DIV",{class:!0});var i=p(e);t=h(i,"P",{class:!0});var _=p(t);l=P(_,"No Trailer Available"),_.forEach(d),i.forEach(d),this.h()},h(){m(t,"class","flex justify-center ml-4"),m(e,"class","flex pl-5")},m(s,i){O(s,e,i),f(e,t),f(t,l)},p:ue,d(s){s&&d(e)}}}function Dt(a){let e,t,l,s,i,_,o;return{c(){e=v("div"),t=v("i"),l=k(),s=v("p"),i=A("Play Trailer"),this.h()},l(r){e=h(r,"DIV",{class:!0});var c=p(e);t=h(c,"I",{class:!0,"aria-hidden":!0}),p(t).forEach(d),l=w(c),s=h(c,"P",{class:!0});var u=p(s);i=P(u,"Play Trailer"),u.forEach(d),c.forEach(d),this.h()},h(){m(t,"class","flex items-center fa fa-play fa-2x"),m(t,"aria-hidden","true"),m(s,"class","flex justify-center ml-4 text-2xl items-center"),m(e,"class","transform -translate-x-10 flex pl-5 cursor-pointer hover:opacity-80")},m(r,c){O(r,e,c),f(e,t),f(e,l),f(e,s),f(s,i),_||(o=ut(e,"click",a[6]),_=!0)},p:ue,d(r){r&&d(e),_=!1,o()}}}function ft(a){let e,t,l={trailer_id:a[1]};return e=new pt({props:l}),a[7](e),{c(){ve(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,i){pe(e,s,i),t=!0},p(s,i){const _={};i&2&&(_.trailer_id=s[1]),e.$set(_)},i(s){t||(j(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){a[7](null),ge(e,s)}}}function ct(a){let e=a[0],t,l,s=_t(a);return{c(){s.c(),t=se()},l(i){s.l(i),t=se()},m(i,_){s.m(i,_),O(i,t,_),l=!0},p(i,_){_&1&&Te(e,e=i[0])?(we(),C(s,1,1,ue),Ee(),s=_t(i),s.c(),j(s),s.m(t.parentNode,t)):s.p(i,_)},i(i){l||(j(s),l=!0)},o(i){C(s),l=!1},d(i){i&&d(t),s.d(i)}}}function _t(a){let e,t;return e=new wt({props:{tv_details:a[0],movie_id:a[2]}}),{c(){ve(e.$$.fragment)},l(l){he(e.$$.fragment,l)},m(l,s){pe(e,l,s),t=!0},p(l,s){const i={};s&1&&(i.tv_details=l[0]),s&4&&(i.movie_id=l[2]),e.$set(i)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){ge(e,l)}}}function jt(a){let e,t,l,s;const i=[It,Et],_=[];function o(r,c){return r[0].id&&r[1]?0:1}return e=o(a),t=_[e]=i[e](a),{c(){t.c(),l=se()},l(r){t.l(r),l=se()},m(r,c){_[e].m(r,c),O(r,l,c),s=!0},p(r,[c]){let u=e;e=o(r),e===u?_[e].p(r,c):(we(),C(_[u],1,1,()=>{_[u]=null}),Ee(),t=_[e],t?t.p(r,c):(t=_[e]=i[e](r),t.c()),j(t,1),t.m(l.parentNode,l))},i(r){s||(j(t),s=!0)},o(r){C(t),s=!1},d(r){_[e].d(r),r&&d(l)}}}const Me="https://image.tmdb.org/t/p/";function yt(a,e,t){let l,s,i,_;me(a,$e,g=>t(8,l=g)),me(a,et,g=>t(9,s=g)),me(a,tt,g=>t(10,i=g)),me(a,Le,g=>t(5,_=g));let{tv_details:o}=e,{trailer_id:r}=e,{movie_id:c}=e,{cast:u}=e;Ce(tt,i=o.name,i),Ce(et,s=o.number_of_seasons,s),Ce($e,l=o.id,l);let E;window.scrollTo({top:-1e3,behavior:"smooth"});const S=()=>E.show();function Z(g){dt[g?"unshift":"push"](()=>{E=g,t(4,E)})}return a.$$set=g=>{"tv_details"in g&&t(0,o=g.tv_details),"trailer_id"in g&&t(1,r=g.trailer_id),"movie_id"in g&&t(2,c=g.movie_id),"cast"in g&&t(3,u=g.cast)},[o,r,c,u,E,_,S,Z]}class St extends qe{constructor(e){super();Fe(this,e,yt,jt,Te,{tv_details:0,trailer_id:1,movie_id:2,cast:3})}}function Vt(a){let e,t;return e=new St({props:{tv_details:a[0],trailer_id:a[1],cast:a[2],movie_id:a[3]}}),{c(){ve(e.$$.fragment)},l(l){he(e.$$.fragment,l)},m(l,s){pe(e,l,s),t=!0},p(l,[s]){const i={};s&1&&(i.tv_details=l[0]),s&2&&(i.trailer_id=l[1]),s&4&&(i.cast=l[2]),e.$set(i)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){ge(e,l)}}}async function Mt({fetch:a,page:e}){const s=await(await(await a("../api/getMovie",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:"tv",id:e.params.id})})).json()).res,_=await(await a("../api/getTrailer",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:"tv",id:e.params.id})})).json(),o=await _.res.results.length?_.res.results[0].key:999,u=await(await(await a("../../api/getCast",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:"tv",id:e.params.id})})).json()).res.cast;return{props:{tv_details:s,trailer_id:o,cast:u}}}function Nt(a,e,t){let l,s;me(a,gt,c=>t(4,l=c)),me(a,Le,c=>t(5,s=c));let{tv_details:i}=e,{trailer_id:_}=e,{cast:o}=e;Ce(Le,s="tv",s);let r=l.params.id;return a.$$set=c=>{"tv_details"in c&&t(0,i=c.tv_details),"trailer_id"in c&&t(1,_=c.trailer_id),"cast"in c&&t(2,o=c.cast)},[i,_,o,r]}class Ht extends qe{constructor(e){super();Fe(this,e,Nt,Vt,Te,{tv_details:0,trailer_id:1,cast:2})}}export{Ht as default,Mt as load};
