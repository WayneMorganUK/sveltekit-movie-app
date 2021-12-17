import{S as G,i as O,s as P,e as p,k as C,c as b,a as g,d as u,n as D,b as a,O as M,f as y,D as h,F as J,l as A,H as T,t as V,g as $,h as q,K as L}from"./vendor-8fe9a59e.js";function B(c){let t,e,l,s,o,d,i,r,f,n;return{c(){t=p("section"),e=p("div"),l=p("iframe"),s=p("track"),d=C(),i=p("div"),r=p("i"),this.h()},l(m){t=b(m,"SECTION",{id:!0,class:!0});var _=g(t);e=b(_,"DIV",{class:!0});var E=g(e);l=b(E,"IFRAME",{class:!0,title:!0,src:!0,allow:!0});var j=g(l);s=b(j,"TRACK",{kind:!0}),j.forEach(u),E.forEach(u),d=D(_),i=b(_,"DIV",{class:!0});var w=g(i);r=b(w,"I",{class:!0,"aria-hidden":!0}),g(r).forEach(u),w.forEach(u),_.forEach(u),this.h()},h(){s.default=!0,a(s,"kind","captions"),a(l,"class","iframe absolute top-0 left-0 w-full h-full bg-contain"),a(l,"title","Trailer"),M(l.src,o="https://www.youtube.com/embed/"+c[0]+"?rel=0")||a(l,"src",o),a(l,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),l.allowFullscreen=!0,a(e,"class","absolute top-0 left-0 w-full h-full bg-contain"),a(r,"class","fa fa-window-close"),a(r,"aria-hidden","true"),a(i,"class","close absolute top-1 left-1 text-red-900 text-4xl xl:text-5xl hover:font-bold"),a(t,"id","trailer"),a(t,"class","top-0 left-0 bottom-0 right-0 bg-gray-800 bg-opacity-60 fixed z-50")},m(m,_){y(m,t,_),h(t,e),h(e,l),h(l,s),h(t,d),h(t,i),h(i,r),f||(n=J(i,"click",c[4]),f=!0)},p(m,_){_&1&&!M(l.src,o="https://www.youtube.com/embed/"+m[0]+"?rel=0")&&a(l,"src",o)},d(m){m&&u(t),f=!1,n()}}}function Q(c){let t,e=c[2]&&B(c);return{c(){e&&e.c(),t=A()},l(l){e&&e.l(l),t=A()},m(l,s){e&&e.m(l,s),y(l,t,s)},p(l,[s]){l[2]?e?e.p(l,s):(e=B(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:T,o:T,d(l){e&&e.d(l),l&&u(t)}}}function U(c,t,e){let{trailer_id:l}=t,s=!1;function o(){e(2,s=!0)}function d(){e(2,s=!1)}const i=()=>d();return c.$$set=r=>{"trailer_id"in r&&e(0,l=r.trailer_id)},[l,d,s,o,i]}class te extends G{constructor(t){super();O(this,t,U,Q,P,{trailer_id:0,show:3,hide:1})}get show(){return this.$$.ctx[3]}get hide(){return this.$$.ctx[1]}}function H(c,t,e){const l=c.slice();return l[1]=t[e],l}function K(c){let t,e,l,s,o,d=c[0],i=[];for(let r=0;r<d.length;r+=1)i[r]=R(H(c,d,r));return{c(){t=p("section"),e=p("h3"),l=V("Top Billed Cast"),s=C(),o=p("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){t=b(r,"SECTION",{id:!0,class:!0});var f=g(t);e=b(f,"H3",{class:!0});var n=g(e);l=$(n,"Top Billed Cast"),n.forEach(u),s=D(f),o=b(f,"DIV",{class:!0});var m=g(o);for(let _=0;_<i.length;_+=1)i[_].l(m);m.forEach(u),f.forEach(u),this.h()},h(){a(e,"class","text-skin-base flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold"),a(o,"class","flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"),a(t,"id","people"),a(t,"class","max-w-7xl mx-auto xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl")},m(r,f){y(r,t,f),h(t,e),h(e,l),h(t,s),h(t,o);for(let n=0;n<i.length;n+=1)i[n].m(o,null)},p(r,f){if(f&1){d=r[0];let n;for(n=0;n<d.length;n+=1){const m=H(r,d,n);i[n]?i[n].p(m,f):(i[n]=R(m),i[n].c(),i[n].m(o,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=d.length}},d(r){r&&u(t),L(i,r)}}}function W(c){let t,e;return{c(){t=p("img"),this.h()},l(l){t=b(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){a(t,"class","pt-8 flex justify-end items-end w-28 h-42 bottom-0 rounded-t"),M(t.src,e="/person.svg")||a(t,"src",e),a(t,"alt","profile")},m(l,s){y(l,t,s)},p:T,d(l){l&&u(t)}}}function X(c){let t,e;return{c(){t=p("img"),this.h()},l(l){t=b(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){a(t,"class","w-28 h-42 rounded-t"),M(t.src,e=z+c[1].profile_path)||a(t,"src",e),a(t,"alt","profile")},m(l,s){y(l,t,s)},p(l,s){s&1&&!M(t.src,e=z+l[1].profile_path)&&a(t,"src",e)},d(l){l&&u(t)}}}function R(c){let t,e,l,s,o,d=c[1].character+"",i,r,f,n=c[1].name+"",m,_,E;function j(v,k){return v[1].profile_path?X:W}let w=j(c),x=w(c);return{c(){t=p("div"),e=p("a"),l=p("div"),x.c(),s=C(),o=p("p"),i=V(d),r=C(),f=p("p"),m=V(n),E=C(),this.h()},l(v){t=b(v,"DIV",{class:!0});var k=g(t);e=b(k,"A",{href:!0});var I=g(e);l=b(I,"DIV",{class:!0});var N=g(l);x.l(N),N.forEach(u),s=D(I),o=b(I,"P",{class:!0});var S=g(o);i=$(S,d),S.forEach(u),r=D(I),f=b(I,"P",{class:!0});var F=g(f);m=$(F,n),F.forEach(u),I.forEach(u),E=D(k),k.forEach(u),this.h()},h(){a(l,"class","w-28 h-42 bg-blue-900"),a(o,"class","text-center flex justify-center items-center text-skin-base font-semibold line-clamp-1 xl:line-clamp-2"),a(f,"class","text-center flex justify-center items-center text-skin-muted line-clamp-1 xl:line-clamp-2"),a(e,"href",_=`/person/${c[1].id}`),a(t,"class","w-28 flex-shrink-0 mb-2 rounded relative bg-skin-primary m-0.5 sm:mr-3 hover:bg-selected")},m(v,k){y(v,t,k),h(t,e),h(e,l),x.m(l,null),h(e,s),h(e,o),h(o,i),h(e,r),h(e,f),h(f,m),h(t,E)},p(v,k){w===(w=j(v))&&x?x.p(v,k):(x.d(1),x=w(v),x&&(x.c(),x.m(l,null))),k&1&&d!==(d=v[1].character+"")&&q(i,d),k&1&&n!==(n=v[1].name+"")&&q(m,n),k&1&&_!==(_=`/person/${v[1].id}`)&&a(e,"href",_)},d(v){v&&u(t),x.d()}}}function Y(c){let t,e=c[0].length&&K(c);return{c(){e&&e.c(),t=A()},l(l){e&&e.l(l),t=A()},m(l,s){e&&e.m(l,s),y(l,t,s)},p(l,[s]){l[0].length?e?e.p(l,s):(e=K(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:T,o:T,d(l){e&&e.d(l),l&&u(t)}}}const z="https://image.tmdb.org/t/p/w200/";function Z(c,t,e){let{cast:l=[]}=t;return c.$$set=s=>{"cast"in s&&e(0,l=s.cast)},[l]}class le extends G{constructor(t){super();O(this,t,Z,Y,P,{cast:0})}}export{le as C,te as M};