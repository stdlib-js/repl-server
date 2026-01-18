"use strict";var v=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var E=v(function(Ar,h){
var K=require('@stdlib/assert-is-plain-object/dist'),U=require('@stdlib/error-tools-fmtprodmsg/dist');function Y(r,a){return K(a)?null:new TypeError(U('0sz2V',a));}h.exports=Y
});var P=v(function(Or,d){
var z=require("repl"),B=require('@stdlib/streams-node-stdin/dist'),I=require('@stdlib/streams-node-stdout/dist');function J(){var r={prompt:"> ",input:B,output:I,useGlobal:!1,ignoreUndefined:!0,replMode:z.REPL_MODE_SLOPPY};return r}d.exports=J
});var p=v(function(yr,b){
var Q=require('@stdlib/namespace/dist'),W=Q();b.exports=W
});var A=v(function(Mr,w){
var Z=require('@stdlib/repl-help/data/data.json/dist');w.exports=Z
});var f=v(function(Nr,O){
O.exports=console
});var N=v(function(Tr,M){
var y=require('@stdlib/assert-has-own-property/dist'),c=p(),q=A(),$=f(),rr="No help information available.";function er(r){var a,e;if(y(q,r))a=q[r];else{for(e=0;e<c.length;e++)if(r===c[e].value){y(q,c[e].alias)&&(a=q[c[e].alias]);break}a===void 0&&(a=rr)}$.log(a)}M.exports=er
});var C=v(function(Cr,T){
var ar=require('@stdlib/repl-code-blocks/data/data.json/dist');T.exports=ar
});var L=v(function(Sr,k){
var S=require('@stdlib/assert-has-own-property/dist'),g=p(),m=C(),tr=f(),ir="No example available.";function ur(r){return a;function a(e){var n,t;if(S(m,e))n=m[e];else{for(t=0;t<g.length;t++)if(e===g[t].value){S(m,g[t].alias)&&(n=m[g[t].alias]);break}if(n===void 0)return tr.log(ir)}r.write("\n"),r.displayPrompt(),r.write(n)}}k.exports=ur
});var X=v(function(kr,j){
var _=p(),sr=f();function nr(){var r;for(r=0;r<_.length;r++)sr.log(_[r].alias)}j.exports=nr
});var G=v(function(Lr,D){
var or=require('@stdlib/utils-keys/dist'),R=require('@stdlib/utils-define-read-only-property/dist'),V=require('@stdlib/assert-has-own-property/dist'),vr=require('@stdlib/error-tools-fmtprodmsg/dist'),lr=require('@stdlib/object-deep-get/dist'),pr=N(),fr=L(),cr=X(),x=p();function qr(r){var a,e,n,t,i,u,s,l,o;for(t={help:pr,example:fr(r),namespace:cr},a=[],s=0;s<x.length;s++){for(u=t,i=x[s].alias,a.push(i),e=i.split("."),l=0;l<e.length-1;l++)o=e[l],V(u,o)||(u[o]={}),u=u[o];if(o=e[l],V(u,o))throw new Error(vr('0sz8I',i,lr(t,i)));u[o]=x[s].value}for(s=0;s<a.length;s++)if(e=a[s].split("."),e.length>1)for(u=t,l=0;l<e.length;l++)o=e[l],R(u,o,u[o]),u=u[o];for(n=or(t),s=0;s<n.length;s++)i=n[s],R(r.context,i,t[i])}D.exports=qr
});var H=v(function(_r,F){
var gr=require("repl"),mr=require('@stdlib/assert-is-function/dist'),xr=require('@stdlib/error-tools-fmtprodmsg/dist'),hr=E(),Er=P(),dr=G();function Pr(r,a){var e,n,t,i;if(n=Er(),arguments.length===1)i=r;else{if(t=hr(n,r),t)throw t;i=a}if(!mr(i))throw new TypeError(xr('0sz2b',i));e=gr.start(n),dr(e),setTimeout(u,0);function u(){i(null,e)}}F.exports=Pr
});var br=H();module.exports=br;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
