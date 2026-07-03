"use strict";var v=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(r){throw (a=0, r)}};};var E=v(function(Ar,h){
var K=require('@stdlib/assert-is-plain-object/dist'),U=require('@stdlib/error-tools-fmtprodmsg/dist');function Y(e,a){return K(a)?null:new TypeError(U('0sz2V',a));}h.exports=Y
});var P=v(function(Or,d){
var z=require("repl"),B=require('@stdlib/streams-node-stdin/dist'),I=require('@stdlib/streams-node-stdout/dist');function J(){var e={prompt:"> ",input:B,output:I,useGlobal:!1,ignoreUndefined:!0,replMode:z.REPL_MODE_SLOPPY};return e}d.exports=J
});var p=v(function(yr,b){
var Q=require('@stdlib/namespace/dist'),W=Q();b.exports=W
});var A=v(function(Mr,w){
var Z=require('@stdlib/repl-help/data/data.json/dist');w.exports=Z
});var f=v(function(Nr,O){
O.exports=console
});var N=v(function(Tr,M){
var y=require('@stdlib/assert-has-own-property/dist'),c=p(),q=A(),$=f(),rr="No help information available.";function er(e){var a,r;if(y(q,e))a=q[e];else{for(r=0;r<c.length;r++)if(e===c[r].value){y(q,c[r].alias)&&(a=q[c[r].alias]);break}a===void 0&&(a=rr)}$.log(a)}M.exports=er
});var C=v(function(Cr,T){
var ar=require('@stdlib/repl-code-blocks/data/data.json/dist');T.exports=ar
});var L=v(function(Sr,k){
var S=require('@stdlib/assert-has-own-property/dist'),g=p(),m=C(),tr=f(),ir="No example available.";function ur(e){return a;function a(r){var n,t;if(S(m,r))n=m[r];else{for(t=0;t<g.length;t++)if(r===g[t].value){S(m,g[t].alias)&&(n=m[g[t].alias]);break}if(n===void 0)return tr.log(ir)}e.write("\n"),e.displayPrompt(),e.write(n)}}k.exports=ur
});var X=v(function(kr,j){
var _=p(),sr=f();function nr(){var e;for(e=0;e<_.length;e++)sr.log(_[e].alias)}j.exports=nr
});var G=v(function(Lr,D){
var or=require('@stdlib/utils-keys/dist'),R=require('@stdlib/utils-define-read-only-property/dist'),V=require('@stdlib/assert-has-own-property/dist'),vr=require('@stdlib/error-tools-fmtprodmsg/dist'),lr=require('@stdlib/object-deep-get/dist'),pr=N(),fr=L(),cr=X(),x=p();function qr(e){var a,r,n,t,i,u,s,l,o;for(t={help:pr,example:fr(e),namespace:cr},a=[],s=0;s<x.length;s++){for(u=t,i=x[s].alias,a.push(i),r=i.split("."),l=0;l<r.length-1;l++)o=r[l],V(u,o)||(u[o]={}),u=u[o];if(o=r[l],V(u,o))throw new Error(vr('0sz8I',i,lr(t,i)));u[o]=x[s].value}for(s=0;s<a.length;s++)if(r=a[s].split("."),r.length>1)for(u=t,l=0;l<r.length;l++)o=r[l],R(u,o,u[o]),u=u[o];for(n=or(t),s=0;s<n.length;s++)i=n[s],R(e.context,i,t[i])}D.exports=qr
});var H=v(function(_r,F){
var gr=require("repl"),mr=require('@stdlib/assert-is-function/dist'),xr=require('@stdlib/error-tools-fmtprodmsg/dist'),hr=E(),Er=P(),dr=G();function Pr(e,a){var r,n,t,i;if(n=Er(),arguments.length===1)i=e;else{if(t=hr(n,e),t)throw t;i=a}if(!mr(i))throw new TypeError(xr('0sz2b',i));r=gr.start(n),dr(r),setTimeout(u,0);function u(){i(null,r)}}F.exports=Pr
});var br=H();module.exports=br;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
