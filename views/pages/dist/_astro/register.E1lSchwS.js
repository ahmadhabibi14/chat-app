import{S as $e,i as we,s as ke,b as V,a as U,c as S,d as b,e as k,f as H,g as h,h as y,j as ee,k as q,l as M,m as I,n as E,o as te,p as c,q as ye,r as B,t as $,u as C,v as Ce,w as G,x as Te}from"./index.7qfkvOvh.js";import{I as je}from"./Icon.EjFrvX-M.js";import{R as Le}from"./RiSystemLoader4Fill.thdniLxq.js";import{G as ge,I as O}from"./growl.ZBeT-kUE.js";import{a as ze}from"./axios.L6U4YIEh.js";import"./each.-oqiv04n.js";/* empty css                       */function de(a){let n,s;return n=new je({props:{size:"23",src:Le,className:"fill-white animate-spin"}}),{c(){S(n.$$.fragment)},l(e){H(n.$$.fragment,e)},m(e,u){E(n,e,u),s=!0},i(e){s||($(n.$$.fragment,e),s=!0)},o(e){C(n.$$.fragment,e),s=!1},d(e){G(n,e)}}}function me(a){let n,s="Register";return{c(){n=k("span"),n.textContent=s},l(e){n=y(e,"SPAN",{"data-svelte-h":!0}),q(n)!=="svelte-17kzaxj"&&(n.textContent=s)},m(e,u){te(e,n,u)},d(e){e&&M(n)}}}function Ie(a){let n,s,e,u,w="Create an account !",v,i,f,D,N,m,P,R,g,l,W,x,J,K,_,A,Q,T,ne='<span class="h-px grow bg-zinc-400"></span> <span>or</span> <span class="h-px grow bg-zinc-400"></span>',X,j,ae='<a class="flex flex-row gap-3 justify-center items-center font-semibold py-2 rounded-md border-zinc-200 border hover:bg-zinc-100" href="/oauth/google"><img src="/icons/oauth/google.svg" class="w-5 h-auto" alt="Google"/> <span>Continue with Google</span></a> <a class="flex flex-row gap-3 justify-center items-center font-semibold py-2 rounded-md border-zinc-200 border hover:bg-zinc-100" href="/oauth/facebook"><img src="/icons/oauth/facebook.svg" class="w-5 h-auto" alt="facebook"/> <span>Continue with Facebook</span></a>',Y,L,se='Already have account? <a href="/login" class="text-emerald-700 hover:underline">Login</a>',F,Z,le,_e={};n=new ge({props:_e}),a[7](n);function be(t){a[8](t)}let oe={id:"email",label:"Email",type:"email",placeholder:"gojosatoru@example.com"};a[0]!==void 0&&(oe.value=a[0]),f=new O({props:oe}),V.push(()=>U(f,"value",be));function he(t){a[9](t)}let ie={id:"username",label:"Username",type:"text",placeholder:"gojosatoru98"};a[1]!==void 0&&(ie.value=a[1]),m=new O({props:ie}),V.push(()=>U(m,"value",he));function ve(t){a[10](t)}let re={id:"full_name",label:"Fullname",type:"text",placeholder:"Gojo Satoru"};a[2]!==void 0&&(re.value=a[2]),g=new O({props:re}),V.push(()=>U(g,"value",ve));function xe(t){a[11](t)}let ue={id:"password",label:"Password",type:"password",placeholder:"password123"};a[3]!==void 0&&(ue.value=a[3]),x=new O({props:ue}),V.push(()=>U(x,"value",xe));let r=a[4]&&de(),p=!a[4]&&me();return{c(){S(n.$$.fragment),s=b(),e=k("div"),u=k("h1"),u.textContent=w,v=b(),i=k("div"),S(f.$$.fragment),N=b(),S(m.$$.fragment),R=b(),S(g.$$.fragment),W=b(),S(x.$$.fragment),K=b(),_=k("button"),r&&r.c(),A=b(),p&&p.c(),Q=b(),T=k("div"),T.innerHTML=ne,X=b(),j=k("div"),j.innerHTML=ae,Y=b(),L=k("span"),L.innerHTML=se,this.h()},l(t){H(n.$$.fragment,t),s=h(t),e=y(t,"DIV",{class:!0});var o=ee(e);u=y(o,"H1",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-1f2nrsn"&&(u.textContent=w),v=h(o),i=y(o,"DIV",{class:!0});var d=ee(i);H(f.$$.fragment,d),N=h(d),H(m.$$.fragment,d),R=h(d),H(g.$$.fragment,d),W=h(d),H(x.$$.fragment,d),K=h(d),_=y(d,"BUTTON",{class:!0});var z=ee(_);r&&r.l(z),A=h(z),p&&p.l(z),z.forEach(M),d.forEach(M),Q=h(o),T=y(o,"DIV",{class:!0,"data-svelte-h":!0}),q(T)!=="svelte-54ypqb"&&(T.innerHTML=ne),X=h(o),j=y(o,"DIV",{class:!0,"data-svelte-h":!0}),q(j)!=="svelte-r9tovc"&&(j.innerHTML=ae),Y=h(o),L=y(o,"SPAN",{class:!0,"data-svelte-h":!0}),q(L)!=="svelte-uff996"&&(L.innerHTML=se),o.forEach(M),this.h()},h(){I(u,"class","font-bold text-2xl"),I(_,"class","bg-emerald-700 hover:bg-emerald-600 font-semibold justify-center text-white flex items-center rounded-md py-2 w-full"),I(i,"class","flex flex-col gap-4"),I(T,"class","flex flex-row gap-2 items-center"),I(j,"class","flex flex-col gap-3"),I(L,"class","text-sm text-center font-semibold"),I(e,"class","w-[500px] h-fit bg-white shadow-md p-5 rounded-md flex flex-col gap-4")},m(t,o){E(n,t,o),te(t,s,o),te(t,e,o),c(e,u),c(e,v),c(e,i),E(f,i,null),c(i,N),E(m,i,null),c(i,R),E(g,i,null),c(i,W),E(x,i,null),c(i,K),c(i,_),r&&r.m(_,null),c(_,A),p&&p.m(_,null),c(e,Q),c(e,T),c(e,X),c(e,j),c(e,Y),c(e,L),F=!0,Z||(le=ye(_,"click",a[6]),Z=!0)},p(t,[o]){const d={};n.$set(d);const z={};!D&&o&1&&(D=!0,z.value=t[0],B(()=>D=!1)),f.$set(z);const fe={};!P&&o&2&&(P=!0,fe.value=t[1],B(()=>P=!1)),m.$set(fe);const pe={};!l&&o&4&&(l=!0,pe.value=t[2],B(()=>l=!1)),g.$set(pe);const ce={};!J&&o&8&&(J=!0,ce.value=t[3],B(()=>J=!1)),x.$set(ce),t[4]?r?o&16&&$(r,1):(r=de(),r.c(),$(r,1),r.m(_,A)):r&&(Te(),C(r,1,1,()=>{r=null}),Ce()),t[4]?p&&(p.d(1),p=null):p||(p=me(),p.c(),p.m(_,null))},i(t){F||($(n.$$.fragment,t),$(f.$$.fragment,t),$(m.$$.fragment,t),$(g.$$.fragment,t),$(x.$$.fragment,t),$(r),F=!0)},o(t){C(n.$$.fragment,t),C(f.$$.fragment,t),C(m.$$.fragment,t),C(g.$$.fragment,t),C(x.$$.fragment,t),C(r),F=!1},d(t){t&&(M(s),M(e)),a[7](null),G(n,t),G(f),G(m),G(g),G(x),r&&r.d(),p&&p.d(),Z=!1,le()}}}function Se(a,n,s){let e="",u="",w="",v="",i=!1,f=ge;async function D(){if(u==""||v==""||e==""||w=="")return f.showWarning("Please fill all fields");s(4,i=!0),await ze({method:"post",url:"/api/register",data:{email:e,username:u,full_name:w,password:v},headers:{"Content-Type":"application/json"}}).then(l=>{s(4,i=!1),console.log(l.data),f.showSuccess(l.data.data.message),setTimeout(()=>window.location.href="/",1200)}).catch(l=>{s(4,i=!1),console.log(l.response),f.showError(l.response.data.errors)})}function N(l){V[l?"unshift":"push"](()=>{f=l,s(5,f)})}function m(l){e=l,s(0,e)}function P(l){u=l,s(1,u)}function R(l){w=l,s(2,w)}function g(l){v=l,s(3,v)}return[e,u,w,v,i,f,D,N,m,P,R,g]}class Re extends $e{constructor(n){super(),we(this,n,Se,Ie,ke,{})}}export{Re as default};