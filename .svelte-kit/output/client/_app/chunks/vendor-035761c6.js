function d(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function L(){return Object.create(null)}function y(t){t.forEach(D)}function T(t){return typeof t=="function"}function K(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let w;function dt(t,n){return w||(w=document.createElement("a")),w.href=n,t===w.href}function Q(t){return Object.keys(t).length===0}function N(t,...n){if(t==null)return d;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t){let n;return N(t,e=>n=e)(),n}function mt(t,n,e){t.$$.on_destroy.push(N(n,e))}function pt(t,n,e,i){if(t){const c=z(t,n,e,i);return t[0](c)}}function z(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],u=Math.max(n.dirty.length,c.length);for(let o=0;o<u;o+=1)l[o]=n.dirty[o]|c[o];return l}return n.dirty|c}return n.dirty}function bt(t,n,e,i,c,l){if(c){const u=z(n,e,i,l);t.p(u,c)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function xt(t,n,e){return t.set(e),n}let E=!1;function R(){E=!0}function U(){E=!1}function V(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:V(1,c,m=>n[e[m]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],u=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);o>=r;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);l.reverse(),u.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<u.length;r++){for(;s<l.length&&u[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(u[r],a)}}function Y(t,n){if(E){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function $t(t,n,e){E&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Z(t){t.parentNode.removeChild(t)}function vt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function tt(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function wt(){return j(" ")}function Et(){return j("")}function kt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function At(t){return function(n){return n.preventDefault(),t.call(this,n)}}function St(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function et(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,c=!1){it(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,n,e,i){return B(t,c=>c.nodeName===n,c=>{const l=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];e[o.name]||l.push(o.name)}l.forEach(u=>c.removeAttribute(u))},()=>i(n))}function Nt(t,n,e){return O(t,n,e,tt)}function jt(t,n,e){return O(t,n,e,nt)}function rt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Ct(t){return rt(t," ")}function qt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Mt(t,n){t.value=n==null?"":n}function Dt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Lt(t,n,e){t.classList[e?"add":"remove"](n)}function ct(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}function Tt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let x;function $(t){x=t}function b(){if(!x)throw new Error("Function called outside component initialization");return x}function zt(t){b().$$.on_mount.push(t)}function Bt(t){b().$$.after_update.push(t)}function Ot(t){b().$$.on_destroy.push(t)}function Pt(){const t=b();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const c=ct(n,e);i.slice().forEach(l=>{l.call(t,c)})}}}function Ft(t,n){b().$$.context.set(t,n)}function Ht(t){return b().$$.context.get(t)}const v=[],P=[],k=[],F=[],H=Promise.resolve();let C=!1;function I(){C||(C=!0,H.then(W))}function It(){return I(),H}function q(t){k.push(t)}const M=new Set;let A=0;function W(){const t=x;do{for(;A<v.length;){const n=v[A];A++,$(n),ut(n.$$)}for($(null),v.length=0,A=0;P.length;)P.pop()();for(let n=0;n<k.length;n+=1){const e=k[n];M.has(e)||(M.add(e),e())}k.length=0}while(v.length);for(;F.length;)F.pop()();C=!1,M.clear(),$(t)}function ut(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}const S=new Set;let h;function Wt(){h={r:0,c:[],p:h}}function Gt(){h.r||y(h.c),h=h.p}function st(t,n){t&&t.i&&(S.delete(t),t.i(n))}function Jt(t,n,e,i){if(t&&t.o){if(S.has(t))return;S.add(t),h.c.push(()=>{S.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Kt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const u=t[l],o=n[l];if(o){for(const r in u)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[l]=o}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Qt(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t){t&&t.c()}function Ut(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:o}=t.$$;c&&c.m(n,e),i||q(()=>{const r=l.map(D).filter(T);u?u.push(...r):y(r),t.$$.on_mount=[]}),o.forEach(q)}function lt(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(v.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Vt(t,n,e,i,c,l,u,o=[-1]){const r=x;$(t);const s=t.$$={fragment:null,ctx:null,props:l,update:d,not_equal:c,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:L(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};u&&u(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,m,..._)=>{const p=_.length?_[0]:m;return s.ctx&&c(s.ctx[f],s.ctx[f]=p)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](p),a&&at(t,f)),m}):[],s.update(),a=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){R();const f=et(n.target);s.fragment&&s.fragment.l(f),f.forEach(Z)}else s.fragment&&s.fragment.c();n.intro&&st(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),U(),W()}$(r)}class Xt{$destroy(){lt(this,1),this.$destroy=d}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const g=[];function ft(t,n){return{subscribe:_t(t,n).subscribe}}function _t(t,n=d){let e;const i=new Set;function c(o){if(K(t,o)&&(t=o,e)){const r=!g.length;for(const s of i)s[1](),g.push(s,t);if(r){for(let s=0;s<g.length;s+=2)g[s][0](g[s+1]);g.length=0}}}function l(o){c(o(t))}function u(o,r=d){const s=[o,r];return i.add(s),i.size===1&&(e=n(c)||d),o(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:u}}function Yt(t,n,e){const i=!Array.isArray(t),c=i?[t]:t,l=n.length<2;return ft(e,u=>{let o=!1;const r=[];let s=0,a=d;const f=()=>{if(s)return;a();const _=n(i?r[0]:r,u);l?u(_):a=T(_)?_:d},m=c.map((_,p)=>N(_,G=>{r[p]=G,s&=~(1<<p),o&&f()},()=>{s|=1<<p}));return o=!0,f(),function(){y(m),a()}})}export{Ot as $,Qt as A,lt as B,J as C,_t as D,It as E,Yt as F,Y as G,kt as H,d as I,mt as J,nt as K,jt as L,Mt as M,At as N,y as O,Lt as P,vt as Q,xt as R,Xt as S,pt as T,Tt as U,bt as V,gt as W,yt as X,Ht as Y,dt as Z,Pt as _,et as a,P as a0,ht as a1,St as b,Nt as c,Z as d,tt as e,Dt as f,$t as g,rt as h,Vt as i,qt as j,wt as k,Et as l,Ct as m,Wt as n,Jt as o,Gt as p,st as q,Ft as r,K as s,j as t,Bt as u,zt as v,Rt as w,Ut as x,ot as y,Kt as z};