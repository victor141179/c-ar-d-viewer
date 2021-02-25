(this["webpackJsonpc-ar-d-viewer"]=this["webpackJsonpc-ar-d-viewer"]||[]).push([[0],{11:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o(3),r=o.n(a),i=o(4),s=(o(9),o(0));function l(e){var t=e.video,o=Object(n.useState)(!1),a=Object(i.a)(o,2),r=a[0],l=a[1];return Object(s.jsx)("div",{className:"buttons",children:Object(s.jsx)("button",{onClick:function(){t||(t=document.querySelector("#video")),console.log(t),r?(t.pause(),l(!1)):(t.play(),l(!0),t.addEventListener("ended",(function e(){console.log("ended"),l(!1),t.removeEventListener("ended",e)})))},className:"play-button",children:r?"Pause":"Play"})})}var c=function(){console.log("update to v6");var e=Object(n.useRef)(null),t=new URLSearchParams(window.location.search).get("video");return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{videoRef:e.current}),Object(s.jsxs)("a-scene",{embed:!0,arjs:"trackingMethod: best;",children:[Object(s.jsx)("a-assets",{children:Object(s.jsx)("video",{id:"video",crossOrigin:"anonymous",loop:!1,preload:"auto",src:"https://card-euwest-convert.s3-eu-west-1.amazonaws.com/".concat(t),playsInline:!0,ref:e})}),Object(s.jsxs)("a-marker",{preset:"hiro",children:[Object(s.jsxs)("a-entity",{id:"balloon-container",animation__spin:"property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 24000",children:[Object(s.jsx)("a-entity",{id:"balloon1","gltf-model":"url(./balloon/scene.gltf)",scale:"0.1 0.1 0.1",position:"1 3 -2",animation:"property: object3D.position.y; to: 3.2; dir: alternate; dur: 2000; loop: true",animation__spin:"property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 6800",animation__wobble:"property: rotation; from: -9 0 9; to: 8 0 -10; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1320"}),Object(s.jsx)("a-entity",{id:"balloonClust","gltf-model":"url(./balloon-cluster/scene.gltf)",scale:"0.2 0.2 0.2",position:"-4 3.5 -1",animation__bob:"property: object3D.position.y; to: 3.2; dir: alternate; dur: 1500; loop: true",animation__spin:"property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 5000",animation__wobble:"property: rotation; from: -7 0 6; to: 6 0 -6; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1400"}),Object(s.jsx)("a-entity",{id:"balloon3","gltf-model":"url(./balloon/scene.gltf)",scale:"0.1 0.1 0.1",position:"2 3.2 3",animation__bob:"property: object3D.position.y; to: 4; dir: alternate; dur: 3000; loop: true",animation__spin:"property: rotation; to: 0 360 0; easing: easeInOutQuad; loop: true; dur: 4500",animation__wobble:"property: rotation; from: -8 0 9; to: 10 0 -8; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1200"})]}),Object(s.jsx)("a-video",{id:"screen",src:"#video","look-at":"src: #player",position:"0 1 0",scale:"2 2 2",rotation:"180 180 180"})]}),Object(s.jsx)("a-entity",{id:"player",camera:!0})]})]})},d=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,12)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;o(e),n(e),a(e),r(e),i(e)}))};setTimeout(r.a.render(Object(s.jsx)(c,{}),document.getElementById("root")),1500),d()},9:function(e,t,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.833e679a.chunk.js.map