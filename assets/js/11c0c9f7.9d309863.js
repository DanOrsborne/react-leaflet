"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1703],{876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,y=s["".concat(c,".").concat(f)]||s[f]||m[f]||p;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=r(7896),o=(r(2784),r(876));const p={title:"Popup with Marker"},a=void 0,i={unversionedId:"example-popup-marker",id:"version-3.x/example-popup-marker",title:"Popup with Marker",description:"",source:"@site/versioned_docs/version-3.x/example-popup-marker.md",sourceDirName:".",slug:"/example-popup-marker",permalink:"/docs/v3/example-popup-marker",draft:!1,tags:[],version:"3.x",frontMatter:{title:"Popup with Marker"},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/v3/start-setup"},next:{title:"Events",permalink:"/docs/v3/example-events"}},c={},l=[],u={toc:l},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'\n\nconst position = [51.505, -0.09]\n\nfunction PopupExample() {\n  return (\n    <MapContainer center={position} zoom={13}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <Marker position={position}>\n        <Popup>\n          A pretty CSS3 popup. <br /> Easily customizable.\n        </Popup>\n      </Marker>\n    </MapContainer>\n  )\n}\n")))}m.isMDXComponent=!0}}]);