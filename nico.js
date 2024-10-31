(()=>{"use strict";function e(e=0){return new Promise((n=>setTimeout((()=>n()),e)))}function n(e){return document.querySelector(`#downloader-setting .downloader-helper-${e.replace(/\./g,".downloader-helper-")}`)}function t(e){return new Promise((n=>{const t=new XMLHttpRequest;t.open("GET",e),t.responseType="arraybuffer",t.onload=()=>n(t.response),t.send()}))}function o(e){return new Promise((n=>{const t=new FileReader;t.onloadend=()=>n(t.result),t.readAsDataURL(e)}))}const r=[],a=CanvasRenderingContext2D.prototype.drawImage;async function i(e){if(e.startsWith("data:image/png")){const n=await new Promise((n=>{const t=new Image;t.onload=()=>n(t),t.src=e})),t=document.createElement("canvas");t.width=n.naturalWidth,t.height=n.naturalHeight;const o=t.getContext("2d");a.call(o,n,0,0),e=t.toDataURL("image/jpeg",1)}for(let n=0;n<3;++n)if(r[r.length-1-n]===e)return!1;return c(),r.push(e),n("captureNum").textContent=`${r.length}`,n("preview").src=e,!0}function s(){return r}new Set;let d=0,l=0;function c(){l=0}function u(){l=0,d++}function p(){d--,d<0&&(d=0),0===d&&c&&c()}const h=new WeakSet,f=[];function w(e){return f.some((n=>n instanceof RegExp?n.test(e):e.startsWith(n)))}!function(){const e=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,t,...o){return w(t)&&h.add(this),n.call(this,e,t,...o)},XMLHttpRequest.prototype.send=function(...n){return h.has(this)||u(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(h.has(this)||p())})),e.call(this,...n)}}();const g=new Set;window.addEventListener("message",(e=>{const n=e.data;n&&("request-end"===n.type&&g.has(n.requestId)?(g.delete(n.requestId),p()):"request-start"===n.type&&(g.add(n.requestId),u()))}),!1);const v=window.fetch;window.fetch=async function(e,...n){const t="string"==typeof e?e:e instanceof Request?e.url:e.href,o=v.call(this,e,...n);w(t)||(u(),o.finally((()=>p())));const r=await o;return["blob","arrayBuffer","text","json"].forEach((e=>{const n=Response.prototype[e];r[e]=function(){const e=n.call(this);return u(),e.finally((()=>p())),e}})),r},HTMLCanvasElement.prototype.toDataURL||window.bk_toDataURL;var y=Uint8Array,m=Uint16Array,b=Int32Array,x=new y([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),L=new y([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),k=(new y([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(e,n){for(var t=new m(31),o=0;o<31;++o)t[o]=n+=1<<e[o-1];var r=new b(t[30]);for(o=1;o<30;++o)for(var a=t[o];a<t[o+1];++a)r[a]=a-t[o]<<5|o;return{b:t,r}}),E=k(x,2),C=E.b,R=E.r;C[28]=258,R[258]=28;for(var A=k(L,0),S=(A.b,A.r,new m(32768)),q=0;q<32768;++q){var D=(43690&q)>>1|(21845&q)<<1;D=(61680&(D=(52428&D)>>2|(13107&D)<<2))>>4|(3855&D)<<4,S[q]=((65280&D)>>8|(255&D)<<8)>>1}var I=new y(288);for(q=0;q<144;++q)I[q]=8;for(q=144;q<256;++q)I[q]=9;for(q=256;q<280;++q)I[q]=7;for(q=280;q<288;++q)I[q]=8;var T=new y(32);for(q=0;q<32;++q)T[q]=5;var M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U=function(e,n,t){var o=new Error(n||M[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,U),!t)throw o;return o},H=new y(0),P=function(){for(var e=new Int32Array(256),n=0;n<256;++n){for(var t=n,o=9;--o;)t=(1&t&&-306674912)^t>>>1;e[n]=t}return e}(),z=function(e,n,t){for(;t;++n)e[n]=t,t>>>=8},B="undefined"!=typeof TextEncoder&&new TextEncoder,X="undefined"!=typeof TextDecoder&&new TextDecoder;try{X.decode(H,{stream:!0})}catch(e){}function $(e,n){if(n){for(var t=new y(e.length),o=0;o<e.length;++o)t[o]=e.charCodeAt(o);return t}if(B)return B.encode(e);var r,a,i,s=e.length,d=new y(e.length+(e.length>>1)),l=0,c=function(e){d[l++]=e};for(o=0;o<s;++o){if(l+5>d.length){var u=new y(l+8+(s-o<<1));u.set(d),d=u}var p=e.charCodeAt(o);p<128||n?c(p):p<2048?(c(192|p>>6),c(128|63&p)):p>55295&&p<57344?(c(240|(p=65536+(1047552&p)|1023&e.charCodeAt(++o))>>18),c(128|p>>12&63),c(128|p>>6&63),c(128|63&p)):(c(224|p>>12),c(128|p>>6&63),c(128|63&p))}return r=d,(null==(a=0)||a<0)&&(a=0),(null==(i=l)||i>r.length)&&(i=r.length),new y(r.subarray(a,i))}var j=function(e){var n=0;if(e)for(var t in e){var o=e[t].length;o>65535&&U(9),n+=o+4}return n},W=function(e,n,t,o,r,a,i,s){var d=o.length,l=t.extra,c=s&&s.length,u=j(l);z(e,n,null!=i?33639248:67324752),n+=4,null!=i&&(e[n++]=20,e[n++]=t.os),e[n]=20,n+=2,e[n++]=t.flag<<1|(a<0&&8),e[n++]=r&&8,e[n++]=255&t.compression,e[n++]=t.compression>>8;var p=new Date(null==t.mtime?Date.now():t.mtime),h=p.getFullYear()-1980;if((h<0||h>119)&&U(10),z(e,n,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>1),n+=4,-1!=a&&(z(e,n,t.crc),z(e,n+4,a<0?-a-2:a),z(e,n+8,t.size)),z(e,n+12,d),z(e,n+14,u),n+=16,null!=i&&(z(e,n,c),z(e,n+6,t.attrs),z(e,n+10,i),n+=14),e.set(o,n),n+=d,u)for(var f in l){var w=l[f],g=w.length;z(e,n,+f),z(e,n+2,g),e.set(w,n+4),n+=4+g}return c&&(e.set(s,n),n+=c),n},F=function(){function e(e){var n;this.filename=e,this.c=(n=-1,{p:function(e){for(var t=n,o=0;o<e.length;++o)t=P[255&t^e[o]]^t>>>8;n=t},d:function(){return~n}}),this.size=0,this.compression=0}return e.prototype.process=function(e,n){this.ondata(null,e,n)},e.prototype.push=function(e,n){this.ondata||U(5),this.c.p(e),this.size+=e.length,n&&(this.crc=this.c.d()),this.process(e,n||!1)},e}(),N=function(){function e(e){this.ondata=e,this.u=[],this.d=1}return e.prototype.add=function(e){var n=this;if(this.ondata||U(5),2&this.d)this.ondata(U(4+8*(1&this.d),0,1),null,!1);else{var t=$(e.filename),o=t.length,r=e.comment,a=r&&$(r),i=o!=e.filename.length||a&&r.length!=a.length,s=o+j(e.extra)+30;o>65535&&this.ondata(U(11,0,1),null,!1);var d=new y(s);W(d,0,e,t,i,-1);var l=[d],c=function(){for(var e=0,t=l;e<t.length;e++){var o=t[e];n.ondata(null,o,!1)}l=[]},u=this.d;this.d=0;var p=this.u.length,h=function(e,n){var t={};for(var o in e)t[o]=e[o];for(var o in n)t[o]=n[o];return t}(e,{f:t,u:i,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(c(),u){var e=n.u[p+1];e?e.r():n.d=1}u=1}}),f=0;e.ondata=function(t,o,r){if(t)n.ondata(t,o,r),n.terminate();else if(f+=o.length,l.push(o),r){var a=new y(16);z(a,0,134695760),z(a,4,e.crc),z(a,8,f),z(a,12,e.size),l.push(a),h.c=f,h.b=s+f+16,h.crc=e.crc,h.size=e.size,u&&h.r(),u=1}else u&&c()},this.u.push(h)}},e.prototype.end=function(){var e=this;2&this.d?this.ondata(U(4+8*(1&this.d),0,1),null,!0):(this.d?this.e():this.u.push({r:function(){1&e.d&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3)},e.prototype.e=function(){for(var e=0,n=0,t=0,o=0,r=this.u;o<r.length;o++)t+=46+(d=r[o]).f.length+j(d.extra)+(d.o?d.o.length:0);for(var a=new y(t+22),i=0,s=this.u;i<s.length;i++){var d=s[i];W(a,e,d,d.f,d.u,-d.c-2,n,d.o),e+=46+d.f.length+j(d.extra)+(d.o?d.o.length:0),n+=d.b}var l,c,u,p,h;l=a,c=e,u=this.u.length,p=t,h=n,z(l,c,101010256),z(l,c+8,u),z(l,c+10,u),z(l,c+12,p),z(l,c+16,h),this.ondata(null,a,!0),this.d=2},e.prototype.terminate=function(){for(var e=0,n=this.u;e<n.length;e++)n[e].t();this.d=2},e}();function O(e,n){e.addEventListener("mousedown",(e=>e.stopPropagation())),e.addEventListener("click",(t=>{t.stopPropagation(),e.classList.contains("downloader-helper-disabled")||n()}))}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout;let Y=0;function G(e,n){const t=[];for(const o of Array.from(e.children)){if(o.tagName!==n)break;t.push(o)}return t}!async function(o,r){!function(){if(location.hash.includes("debugCanvas")){const e=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(n,...t){return console.log("drawImage",this,n,t),e.call(this,n,...t)}}}(),await new Promise((e=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>e()),0):document.addEventListener("DOMContentLoaded",(()=>e()))}));const a=document.createElement("div");a.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .downloader-helper-button,\n    #downloader-setting .downloader-helper-checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .downloader-helper-button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .downloader-helper-button.downloader-helper-disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .downloader-helper-checkbox > .downloader-helper-box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="downloader-helper-captureNum"></span></div>\n  <div>Preview:<br /><img class="downloader-helper-preview" /></div>\n  <div class="downloader-helper-buttons">\n    <div class="downloader-helper-save-container">\n      <div>\n        <div class="downloader-helper-button downloader-helper-auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="downloader-helper-button downloader-helper-auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="downloader-helper-l2r-container" style="display: none;">\n      <div class="downloader-helper-checkbox downloader-helper-l2r">\n        <div class="downloader-helper-box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="downloader-helper-button downloader-helper-download">Save</div>\n    </div>\n  </div>\n  <div class="downloader-helper-auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="downloader-helper-progress" style="display:none">\n    Compress: <span class="downloader-helper-current"></span> / <span class="downloader-helper-total"></span>\n  </div>\n</div>\n',document.body.prepend(a);let i=null;const c=[0,0];async function u(t=1/0){n("buttons").style.display="none",n("auto-working").style.display="block",await async function(n,t){for(;;){if(l>=12||s().length>=t)return;if(await e(1e3),0===d)try{await n()&&(l=0),l++}catch(e){}}}(o,t),n("save-container").style.display="none",n("l2r-container").style.display="none",n("buttons").style.display="block",n("button.download").classList.remove("downloader-helper-disabled"),n("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(e=>{i=[e.pageX,e.pageY]})),window.addEventListener("mouseup",(()=>{i=null})),window.addEventListener("mousemove",(e=>{if(i){const n=[e.pageX,e.pageY];c[0]+=n[0]-i[0],c[1]+=n[1]-i[1],document.getElementById("downloader-setting").style.transform=`translate(${c[0]}px, ${c[1]}px)`,i=n}})),O(n("auto"),(()=>u())),O(n("auto-limit"),(()=>{const e=window.prompt("How many pages?","10");null!==e&&u(parseInt(e,10))}));const p=n("l2r");O(p,(()=>{const e=p.querySelector(".box");e.style.background=e.style.background?"":"darkblue"})),O(n("download"),(async()=>{n("button.download").classList.add("downloader-helper-disabled"),n("progress").style.display="inline-block",n("progress .total").textContent=s().length.toString(),n("progress .current").textContent="0";const e=await async function(e,o){return new Promise((o=>{const r=[],a=new N(((e,n,t)=>{if(!e&&(r.push(n),t)){const e=window.URL.createObjectURL(new Blob(r));o(e)}})),i=`${e.length}`.length;(async()=>{for(let r=0;r<e.length;++r){const s=new F(`${(r+1).toString().padStart(i,"0")}.jpg`);a.add(s),s.push(new Uint8Array(await t(e[r])),!0),o=`${r+1}`,n("progress .current").textContent=o}var o;a.end()})()}))}(s()),o=document.createElement("a");o.href=e,o.download=document.title+".zip",o.click(),n("progress").style.display="none",r&&r(),n("button.download").classList.remove("downloader-helper-disabled")}))}((async()=>{const e=document.querySelectorAll("li.page > .note");if(Y<e.length){const n=G(e[Y],"CANVAS").reverse();if(n.length)n.forEach((e=>i(e.toDataURL("image/jpeg",1))));else{const n=G(e[Y],"IMG").reverse();for(const e of n){const n=await(await v(e.src)).blob();i(await o(n))}}}Y++,Y<e.length&&e[Y].scrollIntoView()}))})();