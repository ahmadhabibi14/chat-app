function T(){}function dt(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function k(){return Object.create(null)}function y(t){t.forEach(I)}function O(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function ht(t,e){return t===e?!0:(x||(x=document.createElement("a")),x.href=e,t===x.href)}function R(t){return Object.keys(t).length===0}function mt(t){return t??""}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const a=e[c];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=c?r+1:Q(1,r,$=>e[n[$]].claim_order,c))-1;i[l]=n[a]+1;const f=a+1;n[f]=l,r=Math.max(f,r)}const o=[],s=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const a=c<o.length?o[c]:null;t.insertBefore(s[l],a)}}function V(t,e){if(E){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function W(t,e,n){t.insertBefore(e,n||null)}function X(t,e,n){E&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function P(t){return document.createElement(t)}function q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function gt(){return M(" ")}function yt(){return M("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t,e){for(const n in e)Y(t,n,e[n])}function wt(t){return t.dataset.svelteH}function Z(t){return Array.from(t.childNodes)}function D(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,i,r=!1){D(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function z(t,e,n,i){return G(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function vt(t,e,n){return z(t,e,n,P)}function Et(t,e,n){return z(t,e,n,q)}function tt(t,e){return G(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function bt(t){return tt(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return-1}function Nt(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);D(t);const r=t.splice(n,i-n+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);if(o.length===0)return new b(e);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,o)}function Tt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e){t.value=e??""}function St(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Lt(t){const e=t.querySelector(":checked");return e&&e.__value}class et{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=q(n.nodeName):this.e=P(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)W(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class b extends et{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],e)}}let g;function p(t){g=t}function nt(){if(!g)throw new Error("Function called outside component initialization");return g}function Mt(t){nt().$$.on_mount.push(t)}const h=[],B=[];let m=[];const A=[],it=Promise.resolve();let S=!1;function rt(){S||(S=!0,it.then(F))}function L(t){m.push(t)}function Ht(t){A.push(t)}const N=new Set;let _=0;function F(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),lt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;B.length;)B.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;A.length;)A.pop()();S=!1,N.clear(),p(t)}function lt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}function st(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const w=new Set;let d;function jt(){d={r:0,c:[],p:d}}function kt(){d.r||y(d.c),d=d.p}function ct(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Ct(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Bt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function It(t){t&&t.c()}function Ot(t,e){t&&t.l(e)}function ot(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),L(()=>{const o=t.$$.on_mount.map(I).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...o):y(o),t.$$.on_mount=[]}),r.forEach(L)}function ut(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pt(t,e,n,i,r,o,s=null,u=[-1]){const l=g;p(t);const c=t.$$={fragment:null,ctx:[],props:o,update:T,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:k(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(f,$,...H)=>{const j=H.length?H[0]:$;return c.ctx&&r(c.ctx[f],c.ctx[f]=j)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](j),a&&ft(t,f)),$}):[],c.update(),a=!0,y(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){J();const f=Z(e.target);c.fragment&&c.fragment.l(f),f.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&ct(t.$$.fragment),ot(t,e.target,e.anchor),K(),F()}p(l)}class qt{$$=void 0;$$set=void 0;$destroy(){ut(this,1),this.$destroy=T}$on(e,n){if(!O(n))return T;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const at="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(at);export{Lt as A,M as B,tt as C,At as D,Tt as E,L as F,St as G,T as H,pt as I,mt as J,dt as K,q as L,b as M,Et as N,Nt as O,xt as P,ht as Q,qt as S,Bt as a,B as b,It as c,gt as d,P as e,Ot as f,bt as g,vt as h,Pt as i,Z as j,wt as k,v as l,Y as m,ot as n,X as o,V as p,$t as q,Ht as r,_t as s,ct as t,Ct as u,kt as v,ut as w,jt as x,yt as y,Mt as z};
