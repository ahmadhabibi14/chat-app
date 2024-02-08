import{S as ie,i as ce,s as fe,e as h,h as p,j as m,l as f,m as i,o as T,H as te,z as ue,d as x,k as de,g as D,I as he,B as N,C as A,K as le,p as n,E as P}from"./index.vfLk9hgJ.js";import{e as ae}from"./each.-oqiv04n.js";import{a as pe}from"./axios.L6U4YIEh.js";const ve="a3816072a7eb497fa7ae2b2b7f3e5d11";function se(c){const e=new Date(c),a=e.toLocaleDateString("default",{weekday:"long"}),l=e.getDate(),o=e.toLocaleDateString("default",{month:"long"}),v=e.getFullYear();return`${a}, ${l} ${o} ${v}`}function re(c,e,a){const l=c.slice();return l[2]=e[a],l}function oe(c){let e,a='<span class="w-4 h-px bg-zinc-200"></span> <p class="font-semibold">News</p> <span class="grow h-px bg-zinc-200"></span>',l,o,v=ae(c[0]),s=[];for(let t=0;t<v.length;t+=1)s[t]=ne(re(c,v,t));return{c(){e=h("div"),e.innerHTML=a,l=x(),o=h("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),de(e)!=="svelte-wrwvng"&&(e.innerHTML=a),l=D(t),o=p(t,"DIV",{class:!0});var u=m(o);for(let r=0;r<s.length;r+=1)s[r].l(u);u.forEach(f),this.h()},h(){i(e,"class","flex flex-row items-center gap-2"),i(o,"class","flex flex-col gap-3")},m(t,u){T(t,e,u),T(t,l,u),T(t,o,u);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(o,null)},p(t,u){if(u&1){v=ae(t[0]);let r;for(r=0;r<v.length;r+=1){const w=re(t,v,r);s[r]?s[r].p(w,u):(s[r]=ne(w),s[r].c(),s[r].m(o,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=v.length}},d(t){t&&(f(e),f(l),f(o)),he(s,t)}}}function ne(c){let e,a,l,o,v,s,t,u,r=c[2].title+"",w,Y,E,k=c[2].description+"",j,F,g,b,I,z=c[2].author+"",H,U,y,V=se(c[2].publishedAt)+"",L,W,$,S=c[2].source.name+"",M,J,q;return{c(){e=h("a"),a=h("div"),l=h("img"),v=x(),s=h("div"),t=h("div"),u=h("h4"),w=N(r),Y=x(),E=h("p"),j=N(k),F=x(),g=h("div"),b=h("div"),I=h("p"),H=N(z),U=x(),y=h("p"),L=N(V),W=x(),$=h("span"),M=N(S),J=x(),this.h()},l(_){e=p(_,"A",{href:!0,target:!0,class:!0});var d=m(e);a=p(d,"DIV",{class:!0});var O=m(a);l=p(O,"IMG",{src:!0,alt:!0,class:!0}),O.forEach(f),v=D(d),s=p(d,"DIV",{class:!0});var C=m(s);t=p(C,"DIV",{class:!0});var G=m(t);u=p(G,"H4",{class:!0});var Q=m(u);w=A(Q,r),Q.forEach(f),Y=D(G),E=p(G,"P",{class:!0});var R=m(E);j=A(R,k),R.forEach(f),G.forEach(f),F=D(C),g=p(C,"DIV",{class:!0});var K=m(g);b=p(K,"DIV",{class:!0});var B=m(b);I=p(B,"P",{class:!0});var X=m(I);H=A(X,z),X.forEach(f),U=D(B),y=p(B,"P",{class:!0});var Z=m(y);L=A(Z,V),Z.forEach(f),B.forEach(f),W=D(K),$=p(K,"SPAN",{class:!0});var ee=m($);M=A(ee,S),ee.forEach(f),K.forEach(f),C.forEach(f),J=D(d),d.forEach(f),this.h()},h(){le(l.src,o=c[2].urlToImage)||i(l,"src",o),i(l,"alt","news"),i(l,"class","w-full h-full object-cover duration-75 group-hover:scale-110"),i(a,"class","border border-zinc-100 h-32 overflow-hidden rounded-md"),i(u,"class","line-clamp-1 font-semibold"),i(E,"class","text-xs text-zinc-600 line-clamp-2"),i(t,"class","flex flex-col gap-2"),i(I,"class","text-blue-500 text-sm"),i(y,"class","text-xs"),i(b,"class","flex flex-col gap-1"),i($,"class","text-xs py-1.5 px-3 rounded-full font-semibold text-purple-500 bg-purple-500/20 h-fit w-fit"),i(g,"class","flex flex-row justify-between items-center"),i(s,"class","flex flex-col justify-between"),i(e,"href",q=c[2].url),i(e,"target","_blank"),i(e,"class","group grid grid-cols-[auto_65%] p-4 hover:bg-zinc-100 active:bg-zinc-200 rounded-md gap-4 items-stretch")},m(_,d){T(_,e,d),n(e,a),n(a,l),n(e,v),n(e,s),n(s,t),n(t,u),n(u,w),n(t,Y),n(t,E),n(E,j),n(s,F),n(s,g),n(g,b),n(b,I),n(I,H),n(b,U),n(b,y),n(y,L),n(g,W),n(g,$),n($,M),n(e,J)},p(_,d){d&1&&!le(l.src,o=_[2].urlToImage)&&i(l,"src",o),d&1&&r!==(r=_[2].title+"")&&P(w,r),d&1&&k!==(k=_[2].description+"")&&P(j,k),d&1&&z!==(z=_[2].author+"")&&P(H,z),d&1&&V!==(V=se(_[2].publishedAt)+"")&&P(L,V),d&1&&S!==(S=_[2].source.name+"")&&P(M,S),d&1&&q!==(q=_[2].url)&&i(e,"href",q)},d(_){_&&f(e)}}}function _e(c){let e,a=c[0]&&c[0].length&&oe(c);return{c(){e=h("div"),a&&a.c(),this.h()},l(l){e=p(l,"DIV",{class:!0});var o=m(e);a&&a.l(o),o.forEach(f),this.h()},h(){i(e,"class","flex flex-col gap-4")},m(l,o){T(l,e,o),a&&a.m(e,null)},p(l,[o]){l[0]&&l[0].length?a?a.p(l,o):(a=oe(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:te,o:te,d(l){l&&f(e),a&&a.d()}}}function me(c,e,a){let l=[];async function o(){const s=`https://newsapi.org/v2/everything?q=tech&language=en&sortBy=popularity&excludeDomains=yahoo.com&pageSize=100&apiKey=${ve}`;await pe({method:"GET",url:s}).then(t=>{a(0,l=[...l,...t.data.articles])}).catch(t=>{console.log(t)})}return ue(async()=>await o()),[l]}class xe extends ie{constructor(e){super(),ce(this,e,me,_e,fe,{})}}export{xe as default};