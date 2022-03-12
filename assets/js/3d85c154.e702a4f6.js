"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7485],{876:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return f}});var r=t(2784);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,u(u({ref:e},l),{},{components:t})):r.createElement(m,u({ref:e},l))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,u=new Array(a);u[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:o,u[1]=i;for(var c=2;c<a;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},600:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(7896),o=t(1461),a=(t(2784),t(876)),u=["components"],i={title:"View bounds"},s=void 0,c={unversionedId:"example-view-bounds",id:"version-3.x/example-view-bounds",title:"View bounds",description:"",source:"@site/versioned_docs/version-3.x/example-view-bounds.md",sourceDirName:".",slug:"/example-view-bounds",permalink:"/docs/example-view-bounds",tags:[],version:"3.x",frontMatter:{title:"View bounds"},sidebar:"docs",previous:{title:"Draggable Marker",permalink:"/docs/example-draggable-marker"},next:{title:"Animated panning",permalink:"/docs/example-animated-panning"}},l={},p=[],d={toc:p};function f(n){var e=n.components,t=(0,o.Z)(n,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useMemo, useState } from 'react'\nimport { MapContainer, Reactangle, TileLayer, useMap } from 'react-leaflet'\n\nconst innerBounds = [\n  [49.505, -2.09],\n  [53.505, 2.09],\n]\nconst outerBounds = [\n  [50.505, -29.09],\n  [52.505, 29.09],\n]\n\nconst redColor = { color: 'red' }\nconst whiteColor = { color: 'white' }\n\nfunction SetBoundsRectangles() {\n  const [bounds, setBounds] = useState(outerBounds)\n  const map = useMap()\n\n  const innerHandlers = useMemo(\n    () => ({\n      click() {\n        setBounds(innerBounds)\n        map.fitBounds(innerBounds)\n      },\n    }),\n    [map],\n  )\n  const outerHandlers = useMemo(\n    () => ({\n      click() {\n        setBounds(outerBounds)\n        map.fitBounds(outerBounds)\n      },\n    }),\n    [map],\n  )\n\n  return (\n    <>\n      <Rectangle\n        bounds={outerBounds}\n        eventHandlers={outerHandlers}\n        pathOptions={bounds === outerBounds ? redColor : whiteColor}\n      />\n      <Rectangle\n        bounds={innerBounds}\n        eventHandlers={innerHandlers}\n        pathOptions={bounds === innerBounds ? redColor : whiteColor}\n      />\n    </>\n  )\n}\n\nfunction BoundsExample() {\n  return (\n    <MapContainer bounds={outerBounds}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <SetBoundsRectangles />\n    </MapContainer>\n  )\n}\n")))}f.isMDXComponent=!0}}]);