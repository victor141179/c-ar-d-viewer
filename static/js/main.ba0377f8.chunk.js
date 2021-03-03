(this["webpackJsonpc-ar-d-viewer"]=this["webpackJsonpc-ar-d-viewer"]||[]).push([[0],{11:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o(4),a=o.n(r),i=o(2),s=(o(9),o(0));function c(e){var t=e.video,o=e.markerFound,r=e.instructions,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],u=c[1],d=Object(n.useState)(!0),b=Object(i.a)(d,2),p=b[0],j=b[1],m=Object(n.useState)(!0),h=Object(i.a)(m,2),y=h[0],f=h[1],g=document.querySelector("#container"),O=document.querySelector("#screen"),v=document.querySelector("#orient");t||(t=document.querySelector("#video"));return Object(s.jsxs)(s.Fragment,{children:[r&&Object(s.jsx)("div",{className:"messages",children:Object(s.jsx)("p",{className:"instructions",children:r})}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{className:"play-button",disabled:!o,onClick:function(){v.classList.toggle("rotated"),O.setAttribute("height",y?2:4),O.setAttribute("width",y?4:2),f((function(e){return!e}))},children:Object(s.jsx)("i",{id:"orient",className:"fas fa-mobile"})}),Object(s.jsx)("button",{onClick:function(){t||(t=document.querySelector("#video")),l?(t.pause(),u(!1)):o&&(t.play(),u(!0),t.addEventListener("ended",(function e(){console.log("ended"),u(!1),t.removeEventListener("ended",e)})))},disabled:!o,className:"play-button",children:l?Object(s.jsx)("i",{className:"fas fa-pause"}):Object(s.jsx)("i",{className:"fas fa-play"})}),Object(s.jsx)("button",{onClick:function(){console.log(O),p?(O.removeAttribute("look-at"),O.object3D.position.set(0,0,.2),O.object3D.rotation.set(0,0,0)):(O.setAttribute("look-at",{src:"#player"}),O.object3D.position.set(0,0,-2)),g.object3D.rotation.x+=p?-90:90,j((function(e){return!e}))},disabled:!o,className:"play-button",children:p?"Flat":"Upright"})]})]})}o(11);var l=o.p+"static/media/scene.dbaf5295.gltf";var u=function(){var e="Hold Camera over Hiro Marker to Start!",t=Object(n.useState)(!1),o=Object(i.a)(t,2),r=o[0],a=o[1],u=Object(n.useState)(e),d=Object(i.a)(u,2),b=d[0],p=d[1],j=Object(n.useRef)(null),m=new URLSearchParams(window.location.search),h=m.get("video"),y=m.get("message")||"Happy Birthday!";console.log("cake",l);var f=function(){a((function(e){return!e})),p((function(t){return t?"":e}))};return Object(n.useEffect)((function(){console.log("c-ar-d-viewer 0.12.0");var e=document.querySelector(".a-canvas"),t=document.querySelector("#hiro").sceneEl;return t.addEventListener("markerFound",f),t.addEventListener("markerLost",f),e.classList.remove("a-canvas"),e.classList.add("override"),function(){t.removeEventListener("markerFound",f),t.removeEventListener("markerLost",f)}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c,{videoRef:j.current,markerFound:r,instructions:b}),Object(s.jsxs)("a-scene",{"vr-mode-ui":!1,embed:!0,arjs:"trackingMethod: best;",id:"aframebox",children:[Object(s.jsx)("a-assets",{children:Object(s.jsx)("video",{id:"video",crossOrigin:"anonymous",loop:!1,preload:"auto",src:"https://card-euwest-convert.s3-eu-west-1.amazonaws.com/".concat(h),playsInline:!0,ref:j})}),Object(s.jsx)("a-marker",{id:"hiro",preset:"hiro",children:Object(s.jsxs)("a-entity",{id:"container",position:"0 0 0",children:[Object(s.jsx)("a-video",{id:"screen",src:"#video","look-at":"src: #player",position:"0 0 -2",height:"4",width:"2",rotation:"0 0 0"}),Object(s.jsx)("a-text",{value:y,position:"-1 3 1","look-at":"src: #player"}),Object(s.jsx)("a-entity",{id:"balloonClust","gltf-model":"url(https://richhouse83.github.io/c-ar-d-viewer/balloon-cluster/scene.gltf)",crossOrigin:"anonymous",scale:"0.2 0.2 0.2",position:"0 3.2 -1",animation__bob:"property: object3D.position.y; to: 3.2; dir: alternate; dur: 1500; loop: true",animation__spin:"property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 5000",animation__wobble:"property: rotation; from: -7 0 6; to: 6 0 -6; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1400"}),Object(s.jsx)("a-entity",{id:"balloon3","gltf-model":"url(https://richhouse83.github.io/c-ar-d-viewer/balloon/scene.gltf)",scale:"0.1 0.1 0.1",position:"-1.2 3.1 -2",animation__bob:"property: object3D.position.y; to: 4; dir: alternate; dur: 3000; loop: true",animation__spin:"property: rotation; to: 0 360 0; easing: easeInOutQuad; loop: true; dur: 4500",animation__wobble:"property: rotation; from: -8 0 9; to: 10 0 -8; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1200"}),Object(s.jsx)("a-entity",{id:"balloon1","gltf-model":"url(https://richhouse83.github.io/c-ar-d-viewer/balloon/scene.gltf)",scale:"0.1 0.1 0.1",position:"1 3 -2",animation:"property: object3D.position.y; to: 3.2; dir: alternate; dur: 2000; loop: true",animation__spin:"property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 6800",animation__wobble:"property: rotation; from: -9 0 9; to: 8 0 -10; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1320"}),Object(s.jsx)("a-entity",{id:"cake","gltf-model":"url(https://richhouse83.github.io/c-ar-d-viewer/cake/scene.gltf)",scale:"0.01 0.01 0.01",position:"-2 0 -1",animation__spin:"property: rotation; to: 0 360 0; easing: easeInOutQuad; loop: true; dur: 4500",animation__wobble:"property: rotation; from: -8 0 9; to: 10 0 -8; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1200"})]})}),Object(s.jsx)("a-entity",{id:"player",camera:!0,position:"0 0.3 2"})]})]})},d=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,13)).then((function(t){var o=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;o(e),n(e),r(e),a(e),i(e)}))};setTimeout(a.a.render(Object(s.jsx)(u,{}),document.getElementById("root")),1500),d()},9:function(e,t,o){}},[[12,1,2]]]);
//# sourceMappingURL=main.ba0377f8.chunk.js.map