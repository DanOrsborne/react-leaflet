"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3980],{876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(7896),a=(t(2784),t(876));const o={title:"Animated panning"},i=void 0,p={unversionedId:"example-animated-panning",id:"version-3.x/example-animated-panning",title:"Animated panning",description:"",source:"@site/versioned_docs/version-3.x/example-animated-panning.md",sourceDirName:".",slug:"/example-animated-panning",permalink:"/docs/v3/example-animated-panning",draft:!1,tags:[],version:"3.x",frontMatter:{title:"Animated panning"},sidebar:"docs",previous:{title:"View bounds",permalink:"/docs/v3/example-view-bounds"},next:{title:"React control",permalink:"/docs/v3/example-react-control"}},c={},l=[],s={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from 'react'\nimport { MapContainer, TileLayer, useMapEvent } from 'react-leaflet'\n\nfunction SetViewOnClick({ animateRef }) {\n  const map = useMapEvent('click', (e) => {\n    map.setView(e.latlng, map.getZoom(), {\n      animate: animateRef.current || false,\n    })\n  })\n\n  return null\n}\n\nfunction AnimateExample() {\n  const animateRef = useRef(false)\n\n  return (\n    <>\n      <p>\n        <label>\n          <input\n            type=\"checkbox\"\n            onChange={() => {\n              animateRef.current = !animateRef.current\n            }}\n          />\n          Animate panning\n        </label>\n      </p>\n      <MapContainer center={[51.505, -0.09]} zoom={13}>\n        <TileLayer\n          attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n          url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n        />\n        <SetViewOnClick animateRef={animateRef} />\n      </MapContainer>\n    </>\n  )\n}\n")))}u.isMDXComponent=!0}}]);