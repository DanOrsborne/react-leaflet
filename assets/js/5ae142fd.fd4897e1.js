"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[545],{876:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=t(7896),o=t(1461),a=(t(2784),t(876)),i=["components"],s={title:"View bounds"},u=void 0,c={unversionedId:"example-view-bounds",id:"example-view-bounds",isDocsHomePage:!1,title:"View bounds",description:"Click a rectangle to fit the map to its bounds",source:"@site/docs/example-view-bounds.md",sourceDirName:".",slug:"/example-view-bounds",permalink:"/docs/example-view-bounds",tags:[],version:"current",frontMatter:{title:"View bounds"},sidebar:"docs",previous:{title:"Draggable Marker",permalink:"/docs/example-draggable-marker"},next:{title:"Animated panning",permalink:"/docs/example-animated-panning"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Usage")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Click a rectangle to fit the map to its bounds"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const innerBounds = [\n  [49.505, -2.09],\n  [53.505, 2.09],\n]\nconst outerBounds = [\n  [50.505, -29.09],\n  [52.505, 29.09],\n]\n\nconst redColor = { color: 'red' }\nconst whiteColor = { color: 'white' }\n\nfunction SetBoundsRectangles() {\n  const [bounds, setBounds] = useState(outerBounds)\n  const map = useMap()\n\n  const innerHandlers = useMemo(\n    () => ({\n      click() {\n        setBounds(innerBounds)\n        map.fitBounds(innerBounds)\n      },\n    }),\n    [map],\n  )\n  const outerHandlers = useMemo(\n    () => ({\n      click() {\n        setBounds(outerBounds)\n        map.fitBounds(outerBounds)\n      },\n    }),\n    [map],\n  )\n\n  return (\n    <>\n      <Rectangle\n        bounds={outerBounds}\n        eventHandlers={outerHandlers}\n        pathOptions={bounds === outerBounds ? redColor : whiteColor}\n      />\n      <Rectangle\n        bounds={innerBounds}\n        eventHandlers={innerHandlers}\n        pathOptions={bounds === innerBounds ? redColor : whiteColor}\n      />\n    </>\n  )\n}\n\nrender(\n  <MapContainer bounds={outerBounds} scrollWheelZoom={false}>\n    <TileLayer\n      attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <SetBoundsRectangles />\n  </MapContainer>,\n)\n")))}d.isMDXComponent=!0}}]);