"use strict";(self.webpackChunkjavascript_capstone=self.webpackChunkjavascript_capstone||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),i=t.n(a),o=t(645),r=t.n(o)()(i());r.push([n.id,"* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #111010;\n  font-family: 'Roboto Condensed', sans-serif;\n  color: #fff;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 3rem 5rem;\n  background-color: #1d1c1c;\n  height: 5rem;\n}\n\n.logo-movie {\n  display: flex;\n  gap: 4rem;\n  align-items: center;\n}\n\n.img-logo {\n  height: 4rem;\n  width: 4rem;\n}\n\nli {\n  list-style: none;\n}\n\n.links {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.main-content {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-row-gap: 1.5rem;\n  padding: 2rem 5rem;\n}\n\n.likeBtn {\n  width: 24px;\n  height: 24px;\n}\n\n.popup {\n  background-color: #1d1c1c;\n  padding: 3rem;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n}\n\n.popup-container {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.image-cancelbtn {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.id-image {\n  width: 90%;\n  height: 50vh;\n}\n\n.cancel-img {\n  width: 40px;\n  height: 40px; \n  background-color: rgb(231, 54, 54);\n}\n\n.sub-details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.comment-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-self: flex-start;\n}\n\n.footer {\n  height: 3rem;\n  background-color: #1d1c1c;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n",""]);const c=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);a&&r[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},r=[],c=0;c<n.length;c++){var s=n[c],l=a.base?s[0]+a.base:s[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=i(u,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=a(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var c=t(o[r]);e[c].references--}for(var s=a(n,i),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},478:(n,e,t)=>{var a=t(379),i=t.n(a),o=t(795),r=t.n(o),c=t(569),s=t.n(c),l=t(565),d=t.n(l),p=t(216),m=t.n(p),u=t(589),f=t.n(u),h=t(426),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=m(),i()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const v=t.p+"df945fde705454cbd07d.jpeg",y=t.p+"6af010327c10a0167290.svg";(async()=>{const n=await fetch("https://api.tvmaze.com/shows"),e=(await n.json()).slice(0,30);document.querySelector(".movies-length").textContent=`Movies(${e.length})`;const t=document.querySelector(".main-content");e.forEach((n=>{const e=document.createElement("div");e.classList.add("list-container"),e.innerHTML=`\n      <img src="${n.image.medium}" alt="image"/> \n      <div class="listLikeGroup">\n        <div class="elementName">\n          ${n.name}\n        </div>\n        <div class="likeCounter">\n          <img class="likeImg likeBtn" src="${v}" alt="like logo"/> \n        </div>\n      </div>\n      <button class="commentBtn">Comments</button>\n    `,e.querySelector(".commentBtn").addEventListener("click",(()=>{const e=document.createElement("div");e.className="popup",e.innerHTML=`\n        <div class="popup-container">\n          <div class="image-cancelbtn">\n            <img src="${n.image.original}" class="id-image">\n            <img src="${y}" class="cancel-img">\n          </div>\n          <h2 class="moviee">${n.name}</h2>\n          <span class="sub-details">\n            <p>Release date: ${n.premiered}</p>\n            <a href="${n.officialSite}">Watch Movie</a>\n          </span>\n          <div class="comment-container">\n            <h2 class="comment-title">Add Comment</h2>\n            <form class="form">\n              <input type="text" placeholder="Username">\n              <textarea placeholder="Your insight"></textarea>\n              <button type="submit" class="submit-btn">Comment</button>\n            </form>\n          </div>\n        </div>\n      `,e.querySelector(".cancel-img").addEventListener("click",(()=>{e.remove()})),document.body.prepend(e)})),t.appendChild(e)}))})(),(async()=>{const n=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi//apps/pfgR2udmM1C7KAakhBx1/comments",{method:"GET",headers:{"Content-Type":"application/json"}});await n.json()})()}},n=>{n(n.s=478)}]);