var ae=Object.defineProperty,le=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var G=(r,e,t)=>e in r?ae(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,S=(r,e)=>{for(var t in e||(e={}))z.call(e,t)&&G(r,t,e[t]);if(N)for(var t of N(e))F.call(e,t)&&G(r,t,e[t]);return r},X=(r,e)=>le(r,ce(e));var x=(r,e)=>{var t={};for(var s in r)z.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&N)for(var s of N(r))e.indexOf(s)<0&&F.call(r,s)&&(t[s]=r[s]);return t};import{S as ue,i as fe,s as he,e as de,c as _e,a as pe,d as k,b as C,f as q,t as me,g as ge,h as we,j,k as be,l as R,m as M,n as ve,o as P,p as B,q as K,r as I,u as $,v as T,w as V,x as w,y as ye,z as Ee,A as Re,B as Y,C as J}from"./chunks/vendor-fc6286ba.js";import{i as $e}from"./chunks/singletons-12a22614.js";function Q(r){let e,t,s;const i=[r[2]||{}];var o=r[0][1];function n(a){let l={$$slots:{default:[ke]},$$scope:{ctx:a}};for(let c=0;c<i.length;c+=1)l=Y(l,i[c]);return{props:l}}return o&&(e=new o(n(r))),{c(){e&&j(e.$$.fragment),t=R()},l(a){e&&M(e.$$.fragment,a),t=R()},m(a,l){e&&P(e,a,l),q(a,t,l),s=!0},p(a,l){const c=l&4?B(i,[K(a[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:a}),o!==(o=a[0][1])){if(e){I();const u=e;$(u.$$.fragment,1,0,()=>{T(u,1)}),V()}o?(e=new o(n(a)),j(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(a){s||(e&&w(e.$$.fragment,a),s=!0)},o(a){e&&$(e.$$.fragment,a),s=!1},d(a){a&&k(t),e&&T(e,a)}}}function Z(r){let e,t,s;const i=[r[3]||{}];var o=r[0][2];function n(a){let l={};for(let c=0;c<i.length;c+=1)l=Y(l,i[c]);return{props:l}}return o&&(e=new o(n())),{c(){e&&j(e.$$.fragment),t=R()},l(a){e&&M(e.$$.fragment,a),t=R()},m(a,l){e&&P(e,a,l),q(a,t,l),s=!0},p(a,l){const c=l&8?B(i,[K(a[3]||{})]):{};if(o!==(o=a[0][2])){if(e){I();const u=e;$(u.$$.fragment,1,0,()=>{T(u,1)}),V()}o?(e=new o(n()),j(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(a){s||(e&&w(e.$$.fragment,a),s=!0)},o(a){e&&$(e.$$.fragment,a),s=!1},d(a){a&&k(t),e&&T(e,a)}}}function ke(r){let e,t,s=r[0][2]&&Z(r);return{c(){s&&s.c(),e=R()},l(i){s&&s.l(i),e=R()},m(i,o){s&&s.m(i,o),q(i,e,o),t=!0},p(i,o){i[0][2]?s?(s.p(i,o),o&1&&w(s,1)):(s=Z(i),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(I(),$(s,1,1,()=>{s=null}),V())},i(i){t||(w(s),t=!0)},o(i){$(s),t=!1},d(i){s&&s.d(i),i&&k(e)}}}function Le(r){let e,t,s=r[0][1]&&Q(r);return{c(){s&&s.c(),e=R()},l(i){s&&s.l(i),e=R()},m(i,o){s&&s.m(i,o),q(i,e,o),t=!0},p(i,o){i[0][1]?s?(s.p(i,o),o&1&&w(s,1)):(s=Q(i),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(I(),$(s,1,1,()=>{s=null}),V())},i(i){t||(w(s),t=!0)},o(i){$(s),t=!1},d(i){s&&s.d(i),i&&k(e)}}}function ee(r){let e,t=r[5]&&te(r);return{c(){e=de("div"),t&&t.c(),this.h()},l(s){e=_e(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var i=pe(e);t&&t.l(i),i.forEach(k),this.h()},h(){C(e,"id","svelte-announcer"),C(e,"aria-live","assertive"),C(e,"aria-atomic","true"),C(e,"class","svelte-1pdgbjn")},m(s,i){q(s,e,i),t&&t.m(e,null)},p(s,i){s[5]?t?t.p(s,i):(t=te(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&k(e),t&&t.d()}}}function te(r){let e;return{c(){e=me(r[6])},l(t){e=ge(t,r[6])},m(t,s){q(t,e,s)},p(t,s){s&64&&we(e,t[6])},d(t){t&&k(e)}}}function Se(r){let e,t,s,i;const o=[r[1]||{}];var n=r[0][0];function a(c){let u={$$slots:{default:[Le]},$$scope:{ctx:c}};for(let h=0;h<o.length;h+=1)u=Y(u,o[h]);return{props:u}}n&&(e=new n(a(r)));let l=r[4]&&ee(r);return{c(){e&&j(e.$$.fragment),t=be(),l&&l.c(),s=R()},l(c){e&&M(e.$$.fragment,c),t=ve(c),l&&l.l(c),s=R()},m(c,u){e&&P(e,c,u),q(c,t,u),l&&l.m(c,u),q(c,s,u),i=!0},p(c,[u]){const h=u&2?B(o,[K(c[1]||{})]):{};if(u&525&&(h.$$scope={dirty:u,ctx:c}),n!==(n=c[0][0])){if(e){I();const f=e;$(f.$$.fragment,1,0,()=>{T(f,1)}),V()}n?(e=new n(a(c)),j(e.$$.fragment),w(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else n&&e.$set(h);c[4]?l?l.p(c,u):(l=ee(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){i||(e&&w(e.$$.fragment,c),i=!0)},o(c){e&&$(e.$$.fragment,c),i=!1},d(c){e&&T(e,c),c&&k(t),l&&l.d(c),c&&k(s)}}}function qe(r,e,t){let{stores:s}=e,{page:i}=e,{components:o}=e,{props_0:n=null}=e,{props_1:a=null}=e,{props_2:l=null}=e;ye("__svelte__",s),Ee(s.page.notify);let c=!1,u=!1,h=null;return Re(()=>{const f=s.page.subscribe(()=>{c&&(t(5,u=!0),t(6,h=document.title||"untitled page"))});return t(4,c=!0),f}),r.$$set=f=>{"stores"in f&&t(7,s=f.stores),"page"in f&&t(8,i=f.page),"components"in f&&t(0,o=f.components),"props_0"in f&&t(1,n=f.props_0),"props_1"in f&&t(2,a=f.props_1),"props_2"in f&&t(3,l=f.props_2)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[o,n,a,l,c,u,h,s,i]}class Ae extends ue{constructor(e){super();fe(this,e,qe,Se,he,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const Oe="modulepreload",se={},je="/_app/",b=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${je}${s}`,s in se)return;se[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const n=document.createElement("link");if(n.rel=i?"stylesheet":Oe,i||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),i)return new Promise((a,l)=>{n.addEventListener("load",a),n.addEventListener("error",l)})})).then(()=>e())},d=[()=>b(()=>import("./pages/__layout.svelte-f4eb42df.js"),["pages/__layout.svelte-f4eb42df.js","assets/pages/__layout.svelte-d7d8cb99.css","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/singletons-12a22614.js"]),()=>b(()=>import("./pages/__error.svelte-1cf9c0b1.js"),["pages/__error.svelte-1cf9c0b1.js","assets/pages/__error.svelte-8a5069d9.css","chunks/vendor-fc6286ba.js"]),()=>b(()=>import("./pages/index.svelte-0b7a5c7b.js"),["pages/index.svelte-0b7a5c7b.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/MainSection-8e495d87.js","chunks/ProgressBar-f61e37f1.js"]),()=>b(()=>import("./pages/NotFound.svelte-9659fd5f.js"),["pages/NotFound.svelte-9659fd5f.js","chunks/vendor-fc6286ba.js"]),()=>b(()=>import("./pages/trending/[media].svelte-40e542c5.js"),["pages/trending/[media].svelte-40e542c5.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/MainSection-8e495d87.js","chunks/ProgressBar-f61e37f1.js"]),()=>b(()=>import("./pages/episode/[id]/[season_number]/[episode_number].svelte-a1e7498f.js"),["pages/episode/[id]/[season_number]/[episode_number].svelte-a1e7498f.js","chunks/vendor-fc6286ba.js"]),()=>b(()=>import("./pages/seasons/[id]/[season_number].svelte-7534c8b0.js"),["pages/seasons/[id]/[season_number].svelte-7534c8b0.js","chunks/vendor-fc6286ba.js","chunks/stores-462c50b9.js"]),()=>b(()=>import("./pages/person/[id].svelte-c20e0cad.js"),["pages/person/[id].svelte-c20e0cad.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js"]),()=>b(()=>import("./pages/search/[id].svelte-63c2cd3f.js"),["pages/search/[id].svelte-63c2cd3f.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/MainSection-8e495d87.js","chunks/ProgressBar-f61e37f1.js"]),()=>b(()=>import("./pages/genre/[media]/[id].svelte-5293c531.js"),["pages/genre/[media]/[id].svelte-5293c531.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/MainSection-8e495d87.js","chunks/ProgressBar-f61e37f1.js"]),()=>b(()=>import("./pages/movie/[id].svelte-cb05cc7d.js"),["pages/movie/[id].svelte-cb05cc7d.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/ProgressBar-f61e37f1.js","chunks/Cast-6bfa9e9c.js","assets/Cast-cd25fbf7.css"]),()=>b(()=>import("./pages/tv/[id].svelte-6c7edfff.js"),["pages/tv/[id].svelte-6c7edfff.js","chunks/vendor-fc6286ba.js","chunks/store-07881416.js","chunks/ProgressBar-f61e37f1.js","chunks/Cast-6bfa9e9c.js","assets/Cast-cd25fbf7.css","chunks/stores-462c50b9.js"])],v=decodeURIComponent,Pe=[[/^\/$/,[d[0],d[2]],[d[1]]],[/^\/NotFound\/?$/,[d[0],d[3]],[d[1]]],,,,[/^\/trending\/([^/]+?)\/?$/,[d[0],d[4]],[d[1]],r=>({media:v(r[1])})],[/^\/episode\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,[d[0],d[5]],[d[1]],r=>({id:v(r[1]),season_number:v(r[2]),episode_number:v(r[3])})],[/^\/seasons\/([^/]+?)\/([^/]+?)\/?$/,[d[0],d[6]],[d[1]],r=>({id:v(r[1]),season_number:v(r[2])})],[/^\/person\/([^/]+?)\/?$/,[d[0],d[7]],[d[1]],r=>({id:v(r[1])})],[/^\/search\/([^/]+?)\/?$/,[d[0],d[8]],[d[1]],r=>({id:v(r[1])})],[/^\/genre\/([^/]+?)\/([^/]+?)\/?$/,[d[0],d[9]],[d[1]],r=>({media:v(r[1]),id:v(r[2])})],[/^\/movie\/([^/]+?)\/?$/,[d[0],d[10]],[d[1]],r=>({id:v(r[1])})],,,,,,,,,,,,,,,[/^\/tv\/([^/]+?)\/?$/,[d[0],d[11]],[d[1]],r=>({id:v(r[1])})]],Te=[d[0](),d[1]()];function Ue(r){let e=r.baseURI;if(!e){const t=r.getElementsByTagName("base");e=t.length?t[0].href:r.URL}return e}let re="";function Ie(r){re=r.base,r.assets}function W(){return{x:pageXOffset,y:pageYOffset}}function ie(r){return r.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function ne(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}class Ve{constructor({base:e,routes:t,trailing_slash:s,renderer:i}){this.base=e,this.routes=t,this.trailing_slash=s,this.navigating=0,this.renderer=i,i.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let e;addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{const o=X(S({},history.state||{}),{"sveltekit:scroll":W()});history.replaceState(o,document.title,window.location.href)},200)});const t=o=>{const n=ie(o);n&&n.href&&n.hasAttribute("sveltekit:prefetch")&&this.prefetch(ne(n))};let s;const i=o=>{clearTimeout(s),s=setTimeout(()=>{t(o)},20)};addEventListener("touchstart",t),addEventListener("mousemove",i),addEventListener("click",o=>{if(!this.enabled||o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const n=ie(o);if(!n||!n.href)return;const a=ne(n),l=a.toString();if(l===location.href){location.hash||o.preventDefault();return}const c=(n.getAttribute("rel")||"").split(/\s+/);if(n.hasAttribute("download")||c&&c.includes("external")||(n instanceof SVGAElement?n.target.baseVal:n.target)||!this.owns(a))return;const u=n.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),f=location.href.indexOf("#"),E=h>=0?l.substring(0,h):l,m=f>=0?location.href.substring(0,f):location.href;history.pushState({},"",a.href),E===m&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(a,u?W():null,!1,[],a.hash),o.preventDefault()}),addEventListener("popstate",o=>{if(o.state&&this.enabled){const n=new URL(location.href);this._navigate(n,o.state["sveltekit:scroll"],!1,[])}})}owns(e){return e.origin===location.origin&&e.pathname.startsWith(this.base)}parse(e){if(this.owns(e)){const t=e.pathname.slice(this.base.length)||"/",s=decodeURI(t),i=this.routes.filter(([a])=>a.test(s)),o=new URLSearchParams(e.search);return{id:`${t}?${o}`,routes:i,path:t,decoded_path:s,query:o}}}async goto(e,{noscroll:t=!1,replaceState:s=!1,keepfocus:i=!1,state:o={}}={},n){const a=new URL(e,Ue(document));return this.enabled&&this.owns(a)?(history[s?"replaceState":"pushState"](o,"",e),this._navigate(a,t?W():null,i,n,a.hash)):(location.href=a.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(e){const t=this.parse(e);if(!t)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(t)}async _navigate(e,t,s,i,o){const n=this.parse(e);if(!n)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,n.path!=="/"){const a=n.path.endsWith("/");(a&&this.trailing_slash==="never"||!a&&this.trailing_slash==="always"&&!(n.path.split("/").pop()||"").includes("."))&&(n.path=a?n.path.slice(0,-1):n.path+"/",history.replaceState({},"",`${this.base}${n.path}${location.search}`))}await this.renderer.handle_navigation(n,i,!1,{hash:o,scroll:t,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function oe(r){return r instanceof Error||r&&r.name&&r.message?r:new Error(JSON.stringify(r))}function De(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}function Ne(r){const e=r.status&&r.status>=400&&r.status<=599&&!r.redirect;if(r.error||e){const t=r.status;if(!r.error&&e)return{status:t||500,error:new Error};const s=typeof r.error=="string"?new Error(r.error):r.error;return s instanceof Error?!t||t<400||t>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:t,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(r.redirect){if(!r.status||Math.floor(r.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof r.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(r.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return r}function Ce(r){const e=J(r);let t=!0;function s(){t=!0,e.update(n=>n)}function i(n){t=!1,e.set(n)}function o(n){let a;return e.subscribe(l=>{(a===void 0||t&&l!==a)&&n(a=l)})}return{notify:s,set:i,subscribe:o}}function He(r,e){const t=typeof r=="string"?r:r.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(t)}]`;e&&typeof e.body=="string"&&(s+=`[data-body="${De(e.body)}"]`);const i=document.querySelector(s);if(i&&i.textContent){const o=JSON.parse(i.textContent),{body:n}=o,a=x(o,["body"]);return Promise.resolve(new Response(n,a))}return fetch(r,e)}class Me{constructor({Root:e,fallback:t,target:s,session:i,host:o}){this.Root=e,this.fallback=t,this.host=o,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Ce({}),navigating:J(null),session:J(i)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe(async a=>{if(this.$session=a,!n||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),n=!0}async start({status:e,error:t,nodes:s,page:i}){const o=[];let n={},a,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,h=await this._load_node({module:await s[c],page:i,stuff:n,status:u?e:void 0,error:u?t:void 0});if(o.push(h),h&&h.loaded)if(h.loaded.error){if(t)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:i.path,query:i.query}}else h.loaded.stuff&&(n=S(S({},n),h.loaded.stuff))}a=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:i,branch:o})}catch(c){if(t)throw c;a=await this._load_error({status:500,error:oe(c),path:i.path,query:i.query})}if(a.redirect){location.href=new URL(a.redirect,location.href).href;return}this._init(a)}async handle_navigation(e,t,s,i){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:e.path,query:e.query}}),await this.update(e,t,s,i)}async update(e,t,s,i){var l;const o=this.token={};let n=await this._get_navigation_result(e,s);if(o!==this.token)return;if(this.invalid.clear(),n.redirect)if(t.length>10||t.includes(e.path))n=await this._load_error({status:500,error:new Error("Redirect loop"),path:e.path,query:e.query});else{this.router?this.router.goto(n.redirect,{replaceState:!0},[...t,e.path]):location.href=new URL(n.redirect,location.href).href;return}if(n.reload?location.reload():this.started?(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null)):this._init(n),i){const{hash:c,scroll:u,keepfocus:h}=i;h||((l=getSelection())==null||l.removeAllRanges(),document.body.focus());const f=Math.round(pageYOffset),E=document.documentElement.scrollHeight-innerHeight;await 0;const m=Math.round(pageYOffset),L=document.documentElement.scrollHeight-innerHeight;if(m===Math.min(f,L)||E-f==L-m){const A=c&&document.getElementById(c.slice(1));u?scrollTo(u.x,u.y):A?A.scrollIntoView():scrollTo(0,0)}}else await 0;if(this.loading.promise=null,this.loading.id=null,!this.router)return;const a=n.state.branch[n.state.branch.length-1];a&&a.module.router===!1?this.router.disable():this.router.enable()}load(e){return this.loading.promise=this._get_navigation_result(e,!1),this.loading.id=e.id,this.loading.promise}invalidate(e){return this.invalid.add(e),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const t=this.router&&this.router.parse(new URL(location.href));t&&await this.update(t,[],!0),this.invalidating=null})),this.invalidating}_init(e){this.current=e.state;const t=document.querySelector("style[data-svelte]");t&&t.remove(),this.root=new this.Root({target:this.target,props:S({stores:this.stores},e.props),hydrate:!0}),this.started=!0}async _get_navigation_result(e,t){if(this.loading.id===e.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<e.routes.length;s+=1){const i=e.routes[s];let o=s+1;for(;o<e.routes.length;){const a=e.routes[o];if(a[0].toString()===i[0].toString())a[1].forEach(l=>l()),o+=1;else break}const n=await this._load({route:i,info:e},t);if(n)return n}return await this._load_error({status:404,error:new Error(`Not found: ${e.path}`),path:e.path,query:e.query})}async _get_navigation_result_from_branch({page:e,branch:t}){const s=t.filter(Boolean),i=s.find(l=>l.loaded&&l.loaded.redirect),o={redirect:i&&i.loaded?i.loaded.redirect:void 0,state:{page:e,branch:t,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;o.props[`props_${l}`]=c?await c.props:null}(!this.current.page||e.path!==this.current.page.path||e.query.toString()!==this.current.page.query.toString())&&(o.props.page=e);const n=s[s.length-1],a=n.loaded&&n.loaded.maxage;if(a){const l=`${e.path}?${e.query}`;let c=!1;const u=()=>{this.cache.get(l)===o&&this.cache.delete(l),f(),clearTimeout(h)},h=setTimeout(u,a*1e3),f=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,o)}return o}async _load_node({status:e,error:t,module:s,page:i,stuff:o}){const n={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:o},a={};for(const c in i.params)Object.defineProperty(a,c,{get(){return n.uses.params.add(c),i.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:i.host,params:a,get path(){return n.uses.path=!0,i.path},get query(){return n.uses.query=!0,i.query}},get session(){return n.uses.session=!0,l},get stuff(){return n.uses.stuff=!0,S({},o)},fetch(f,E){const m=typeof f=="string"?f:f.url,{href:L}=new URL(m,new URL(i.path,document.baseURI));return n.uses.dependencies.push(L),c?fetch(f,E):He(f,E)}};t&&(u.status=e,u.error=t);const h=await s.load.call(null,u);if(!h)return;n.loaded=Ne(h),n.loaded.stuff&&(n.stuff=n.loaded.stuff)}return n}async _load({route:e,info:{path:t,decoded_path:s,query:i}},o){const n=`${s}?${i}`;if(!o){const _=this.cache.get(n);if(_)return _}const[a,l,c,u]=e,h=u?u(a.exec(s)):{},f=this.current.page&&{path:t!==this.current.page.path,params:Object.keys(h).filter(_=>this.current.page.params[_]!==h[_]),query:i.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},E={host:this.host,path:t,query:i,params:h};let m=[],L={},H=!1,A=200,U;l.forEach(_=>_());e:for(let _=0;_<l.length;_+=1){let p;try{if(!l[_])continue;const y=await l[_](),g=this.current.branch[_];if(!g||y!==g.module||f.path&&g.uses.path||f.params.some(O=>g.uses.params.has(O))||f.query&&g.uses.query||f.session&&g.uses.session||g.uses.dependencies.some(O=>this.invalid.has(O))||H&&g.uses.stuff){p=await this._load_node({module:y,page:E,stuff:L});const O=_===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(A=p.loaded.status,U=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(H=!0)}else if(O&&y.load)return}else p=g}catch(y){A=500,U=oe(y)}if(U){for(;_--;)if(c[_]){let y,g,D=_;for(;!(g=m[D]);)D-=1;try{if(y=await this._load_node({status:A,error:U,module:await c[_](),page:E,stuff:g.stuff}),y&&y.loaded&&y.loaded.error)continue;m=m.slice(0,D+1).concat(y);break e}catch{continue}}return await this._load_error({status:A,error:U,path:t,query:i})}else p&&p.loaded&&p.loaded.stuff&&(L=S(S({},L),p.loaded.stuff)),m.push(p)}return await this._get_navigation_result_from_branch({page:E,branch:m})}async _load_error({status:e,error:t,path:s,query:i}){const o={host:this.host,path:s,query:i,params:{}},n=await this._load_node({module:await this.fallback[0],page:o,stuff:{}}),a=[n,await this._load_node({status:e,error:t,module:await this.fallback[1],page:o,stuff:n&&n.loaded&&n.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:o,branch:a})}}async function Je({paths:r,target:e,session:t,host:s,route:i,spa:o,trailing_slash:n,hydrate:a}){const l=new Me({Root:Ae,fallback:Te,target:e,session:t,host:s}),c=i?new Ve({base:r.base,routes:Pe,trailing_slash:n,renderer:l}):null;$e(c),Ie(r),a&&await l.start(a),c&&(o&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Je as start};
