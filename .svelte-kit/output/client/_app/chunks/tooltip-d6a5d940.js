import{S,i as T,s as M,e as _,k as E,c as v,a as b,d,m as I,b as a,g as y,G as m,I as k,H as z,l as D,J as P,X as C,t as L,h as N,j as R,O as J}from"./vendor-b506428e.js";import{v as K,b as Q}from"./store-5c7cf519.js";function U(i){let e,t,l,s,o,u,f,n;return{c(){e=_("section"),t=_("section"),l=_("div"),s=_("div"),o=E(),u=_("div"),f=E(),n=_("div"),this.h()},l(c){e=v(c,"SECTION",{id:!0,class:!0});var r=b(e);t=v(r,"SECTION",{class:!0});var h=b(t);l=v(h,"DIV",{class:!0});var p=b(l);s=v(p,"DIV",{class:!0}),b(s).forEach(d),o=I(p),u=v(p,"DIV",{class:!0}),b(u).forEach(d),f=I(p),n=v(p,"DIV",{class:!0}),b(n).forEach(d),p.forEach(d),h.forEach(d),r.forEach(d),this.h()},h(){a(s,"class","w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-1d7ew8h"),a(u,"class","w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-1d7ew8h"),a(n,"class","w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-1d7ew8h"),a(l,"class","inline-flex flex-nowrap flex-row items-center justify-between mx-auto w-12 svelte-1d7ew8h"),a(t,"class","flex absolute items-center h-8 top-1/2 left-1/2 transform -translate-x-1/2 "),a(e,"id","spinner"),a(e,"class","w-full h-full m-auto")},m(c,r){y(c,e,r),m(e,t),m(t,l),m(l,s),m(l,o),m(l,u),m(l,f),m(l,n)},p:k,i:k,o:k,d(c){c&&d(e)}}}class ce extends S{constructor(e){super();T(this,e,null,U,M,{})}}function X(i){let e,t,l,s,o,u,f;function n(h,p){if(h[2]==="YouTube")return Z;if(h[2]==="Vimeo")return W}let c=n(i),r=c&&c(i);return{c(){e=_("section"),t=_("div"),r&&r.c(),l=E(),s=_("div"),o=_("i"),this.h()},l(h){e=v(h,"SECTION",{id:!0,class:!0});var p=b(e);t=v(p,"DIV",{class:!0});var j=b(t);r&&r.l(j),j.forEach(d),l=I(p),s=v(p,"DIV",{class:!0});var A=b(s);o=v(A,"I",{class:!0,"aria-hidden":!0}),b(o).forEach(d),A.forEach(d),p.forEach(d),this.h()},h(){a(t,"class","absolute top-0 left-0 w-full h-full bg-contain"),a(o,"class","fa fa-window-close"),a(o,"aria-hidden","true"),a(s,"class","close absolute top-1 left-1 text-red-900 text-4xl xl:text-5xl hover:font-bold"),a(e,"id","trailer"),a(e,"class","top-0 left-0 bottom-0 right-0 bg-gray-800 bg-opacity-60 fixed z-50")},m(h,p){y(h,e,p),m(e,t),r&&r.m(t,null),m(e,l),m(e,s),m(s,o),u||(f=z(s,"click",i[5]),u=!0)},p(h,p){c===(c=n(h))&&r?r.p(h,p):(r&&r.d(1),r=c&&c(h),r&&(r.c(),r.m(t,null)))},d(h){h&&d(e),r&&r.d(),u=!1,f()}}}function W(i){let e,t;return{c(){e=_("iframe"),this.h()},l(l){e=v(l,"IFRAME",{class:!0,title:!0,src:!0,frameborder:!0,allow:!0}),b(e).forEach(d),this.h()},h(){a(e,"class","iframe absolute top-0 left-0 w-full h-full bg-contain"),a(e,"title","trailer"),C(e.src,t="https://player.vimeo.com/video/"+i[3])||a(e,"src",t),a(e,"frameborder","0"),a(e,"allow","autoplay; fullscreen"),e.allowFullscreen=!0},m(l,s){y(l,e,s)},p(l,s){s&8&&!C(e.src,t="https://player.vimeo.com/video/"+l[3])&&a(e,"src",t)},d(l){l&&d(e)}}}function Z(i){let e,t,l;return{c(){e=_("iframe"),t=_("track"),this.h()},l(s){e=v(s,"IFRAME",{class:!0,title:!0,src:!0,allow:!0,width:!0});var o=b(e);t=v(o,"TRACK",{kind:!0}),o.forEach(d),this.h()},h(){t.default=!0,a(t,"kind","captions"),a(e,"class","iframe absolute top-0 left-0 w-full h-full bg-contain"),a(e,"title","Trailer"),C(e.src,l="https://www.youtube.com/embed/"+i[3]+"?rel=0")||a(e,"src",l),a(e,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),a(e,"width","1080"),e.allowFullscreen=!0},m(s,o){y(s,e,o),m(e,t)},p(s,o){o&8&&!C(e.src,l="https://www.youtube.com/embed/"+s[3]+"?rel=0")&&a(e,"src",l)},d(s){s&&d(e)}}}function ee(i){let e,t=i[1]&&X(i);return{c(){t&&t.c(),e=D()},l(l){t&&t.l(l),e=D()},m(l,s){t&&t.m(l,s),y(l,e,s)},p(l,[s]){l[1]?t?t.p(l,s):(t=X(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(l){t&&t.d(l),l&&d(e)}}}function te(i,e,t){let l,s;P(i,K,c=>t(2,l=c)),P(i,Q,c=>t(3,s=c));let o=!1;function u(){t(1,o=!0)}function f(){t(1,o=!1)}return[f,o,l,s,u,()=>f()]}class ne extends S{constructor(e){super();T(this,e,te,ee,M,{show:4,hide:0})}get show(){return this.$$.ctx[4]}get hide(){return this.$$.ctx[0]}}function Y(i,e,t){const l=i.slice();return l[1]=e[t],l}function q(i){let e,t,l,s,o,u=i[0],f=[];for(let n=0;n<u.length;n+=1)f[n]=B(Y(i,u,n));return{c(){e=_("section"),t=_("h3"),l=L("Top Billed Cast"),s=E(),o=_("div");for(let n=0;n<f.length;n+=1)f[n].c();this.h()},l(n){e=v(n,"SECTION",{id:!0,class:!0});var c=b(e);t=v(c,"H3",{class:!0});var r=b(t);l=N(r,"Top Billed Cast"),r.forEach(d),s=I(c),o=v(c,"DIV",{class:!0});var h=b(o);for(let p=0;p<f.length;p+=1)f[p].l(h);h.forEach(d),c.forEach(d),this.h()},h(){a(t,"class","flex justify-center text-2xl font-bold text-skin-base xl:inline-block xl:justify-start xl:my-5"),a(o,"class","relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"),a(e,"id","people"),a(e,"class","pt-1 mx-auto max-w-7xl xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 xl:rounded-2xl")},m(n,c){y(n,e,c),m(e,t),m(t,l),m(e,s),m(e,o);for(let r=0;r<f.length;r+=1)f[r].m(o,null)},p(n,c){if(c&1){u=n[0];let r;for(r=0;r<u.length;r+=1){const h=Y(n,u,r);f[r]?f[r].p(h,c):(f[r]=B(h),f[r].c(),f[r].m(o,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=u.length}},d(n){n&&d(e),J(f,n)}}}function le(i){let e,t;return{c(){e=_("img"),this.h()},l(l){e=v(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){a(e,"class","bottom-0 flex items-end justify-end pt-8 rounded-t w-28 h-42"),C(e.src,t="/person.svg")||a(e,"src",t),a(e,"alt","profile")},m(l,s){y(l,e,s)},p:k,d(l){l&&d(e)}}}function se(i){let e,t;return{c(){e=_("img"),this.h()},l(l){e=v(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){a(e,"class","rounded-t w-28 h-42"),C(e.src,t=H+i[1].profile_path)||a(e,"src",t),a(e,"alt","profile")},m(l,s){y(l,e,s)},p(l,s){s&1&&!C(e.src,t=H+l[1].profile_path)&&a(e,"src",t)},d(l){l&&d(e)}}}function B(i){let e,t,l,s,o,u=i[1].character+"",f,n,c,r=i[1].name+"",h,p,j;function A(x,g){return x[1].profile_path?se:le}let V=A(i),w=V(i);return{c(){e=_("div"),t=_("a"),l=_("div"),w.c(),s=E(),o=_("p"),f=L(u),n=E(),c=_("p"),h=L(r),j=E(),this.h()},l(x){e=v(x,"DIV",{class:!0});var g=b(e);t=v(g,"A",{href:!0});var $=b(t);l=v($,"DIV",{class:!0});var O=b(l);w.l(O),O.forEach(d),s=I($),o=v($,"P",{class:!0});var F=b(o);f=N(F,u),F.forEach(d),n=I($),c=v($,"P",{class:!0});var G=b(c);h=N(G,r),G.forEach(d),$.forEach(d),j=I(g),g.forEach(d),this.h()},h(){a(l,"class","bg-blue-900 w-28 h-42"),a(o,"class","flex items-center justify-center font-semibold text-center text-skin-base line-clamp-1 xl:line-clamp-2"),a(c,"class","flex items-center justify-center text-center text-skin-muted line-clamp-1 xl:line-clamp-2"),a(t,"href",p=`/person/${i[1].id}`),a(e,"class","w-28 flex-shrink-0 mb-2 rounded relative bg-skin-primary m-0.5 sm:mr-3 hover:bg-selected")},m(x,g){y(x,e,g),m(e,t),m(t,l),w.m(l,null),m(t,s),m(t,o),m(o,f),m(t,n),m(t,c),m(c,h),m(e,j)},p(x,g){V===(V=A(x))&&w?w.p(x,g):(w.d(1),w=V(x),w&&(w.c(),w.m(l,null))),g&1&&u!==(u=x[1].character+"")&&R(f,u),g&1&&r!==(r=x[1].name+"")&&R(h,r),g&1&&p!==(p=`/person/${x[1].id}`)&&a(t,"href",p)},d(x){x&&d(e),w.d()}}}function re(i){let e,t=i[0].length&&q(i);return{c(){t&&t.c(),e=D()},l(l){t&&t.l(l),e=D()},m(l,s){t&&t.m(l,s),y(l,e,s)},p(l,[s]){l[0].length?t?t.p(l,s):(t=q(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(l){t&&t.d(l),l&&d(e)}}}const H="https://image.tmdb.org/t/p/w200/";function ie(i,e,t){let{cast:l=[]}=e;return i.$$set=s=>{"cast"in s&&t(0,l=s.cast)},[l]}class fe extends S{constructor(e){super();T(this,e,ie,re,M,{cast:0})}}function ue(i){let e,t;function l(u){t=i.getAttribute("title"),i.removeAttribute("title"),e=document.createElement("div"),e.textContent=t,e.setAttribute("style",`
			border: 1px solid #ddd;
			box-shadow: 1px 1px 1px #ddd;
			background: white;
			border-radius: 4px;
			padding: 4px;
			position: absolute;
			top: ${u.pageX+5}px;
			left: ${u.pageY+5}px;
		`),document.body.appendChild(e)}function s(u){e.style.left=`${u.pageX+5}px`,e.style.top=`${u.pageY+5}px`}function o(){document.body.removeChild(e),i.setAttribute("title",t)}return i.addEventListener("mouseover",l),i.addEventListener("mouseleave",o),i.addEventListener("mousemove",s),{destroy(){i.removeEventListener("mouseover",l),i.removeEventListener("mouseleave",o),i.removeEventListener("mousemove",s)}}}export{fe as C,ne as M,ce as S,ue as t};
