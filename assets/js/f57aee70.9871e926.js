"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8482],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2009:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(2784),r=n(6277);const l={tabItem:"tabItem_OMyP"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},7336:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7896),r=n(2784),l=n(6277),o=n(4126),i=n(7267),p=n(2424),s=n(2244),u=n(4155);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[p,s]=f({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=p??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var b=n(9741);const h={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(c(t),p(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7896),r=(n(2784),n(876)),l=n(7336),o=n(2009);const i={title:"Map creation and interactions"},p=void 0,s={unversionedId:"api-map",id:"api-map",title:"Map creation and interactions",description:"MapContainer",source:"@site/docs/api-map.mdx",sourceDirName:".",slug:"/api-map",permalink:"/docs/api-map",draft:!1,tags:[],version:"current",frontMatter:{title:"Map creation and interactions"},sidebar:"docs",previous:{title:"Map placeholder",permalink:"/docs/example-map-placeholder"},next:{title:"Child components",permalink:"/docs/api-components"}},u={},c=[{value:"MapContainer",id:"mapcontainer",level:2},{value:"Hooks",id:"hooks",level:2},{value:"useMap",id:"usemap",level:3},{value:"useMapEvents",id:"usemapevents",level:3},{value:"useMapEvent",id:"usemapevent",level:3}],m={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mapcontainer"},"MapContainer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MapContainer")," component is responsible for creating the ",(0,r.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference.html#map"},"Leaflet Map")," instance and providing it to its ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-components"},"child components"),", using a ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context"),"."),(0,r.kt)("p",null,"When creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"MapContainer")," element, its props are used as options to ",(0,r.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference.html#map-l-map"},"create the Map instance"),"."),(0,r.kt)("p",null,"The following additional props are supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bounds")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LatLngBoundsExpression"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boundsOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FitBoundsOptions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"children")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"className")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSSProperties"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"whenReady")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("p",null,"Except for its ",(0,r.kt)("inlineCode",{parentName:"p"},"children"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MapContainer")," props are ",(0,r.kt)("strong",{parentName:"p"},"immutable"),": changing them after they have been set a first time will have no effect on the Map instance or its container.",(0,r.kt)("br",{parentName:"p"}),"\n","The Leaflet ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," instance created by the ",(0,r.kt)("inlineCode",{parentName:"p"},"MapContainer")," element can be accessed by ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-components"},"child components")," using one of ",(0,r.kt)("a",{parentName:"p",href:"#hooks"},"the provided hooks"),"."),(0,r.kt)(l.Z,{defaultValue:"absolute",groupId:"import-specifier",values:[{label:"Absolute specifier import",value:"absolute"},{label:"Bare specifier import",value:"bare"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"absolute",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'\n"))),(0,r.kt)(o.Z,{value:"bare",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { MapContainer } from 'react-leaflet/MapContainer'\n")))),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("h3",{id:"usemap"},"useMap"),(0,r.kt)("p",null,"Hook providing the Leaflet ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," instance in any descendant of a ",(0,r.kt)("a",{parentName:"p",href:"#mapcontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"MapContainer")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyComponent() {\n  const map = useMap()\n  console.log('map center:', map.getCenter())\n  return null\n}\n\nfunction MyMapComponent() {\n  return (\n    <MapContainer center={[50.5, 30.5]} zoom={13}>\n      <MyComponent />\n    </MapContainer>\n  )\n}\n")),(0,r.kt)(l.Z,{defaultValue:"absolute",groupId:"import-specifier",values:[{label:"Absolute specifier import",value:"absolute"},{label:"Bare specifier import",value:"bare"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"absolute",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'\n"))),(0,r.kt)(o.Z,{value:"bare",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useMap } from 'react-leaflet/hooks'\n")))),(0,r.kt)("h3",{id:"usemapevents"},"useMapEvents"),(0,r.kt)("p",null,"Hook attaching the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"LeafletEventHandlerFnMap")," event handlers to the map instance and returning the instance in any descendant of a ",(0,r.kt)("a",{parentName:"p",href:"#mapcontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"MapContainer")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyComponent() {\n  const map = useMapEvents({\n    click: () => {\n      map.locate()\n    },\n    locationfound: (location) => {\n      console.log('location found:', location)\n    },\n  })\n  return null\n}\n\nfunction MyMapComponent() {\n  return (\n    <MapContainer center={[50.5, 30.5]} zoom={13}>\n      <MyComponent />\n    </MapContainer>\n  )\n}\n")),(0,r.kt)(l.Z,{defaultValue:"absolute",groupId:"import-specifier",values:[{label:"Absolute specifier import",value:"absolute"},{label:"Bare specifier import",value:"bare"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"absolute",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useMapEvents } from 'https://cdn.esm.sh/react-leaflet/hooks'\n"))),(0,r.kt)(o.Z,{value:"bare",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useMapEvents } from 'react-leaflet/hooks'\n")))),(0,r.kt)("h3",{id:"usemapevent"},"useMapEvent"),(0,r.kt)("p",null,"Hook attaching a single event handler to the map instance and returning the instance in any descendant of a ",(0,r.kt)("a",{parentName:"p",href:"#mapcontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"MapContainer")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyComponent() {\n  const map = useMapEvent('click', () => {\n    map.setView([50.5, 30.5], map.getZoom())\n  })\n  return null\n}\n\nfunction MyMapComponent() {\n  return (\n    <MapContainer center={[50.5, 30.5]} zoom={13}>\n      <MyComponent />\n    </MapContainer>\n  )\n}\n")),(0,r.kt)(l.Z,{defaultValue:"absolute",groupId:"import-specifier",values:[{label:"Absolute specifier import",value:"absolute"},{label:"Bare specifier import",value:"bare"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"absolute",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useMapEvent } from 'https://cdn.esm.sh/react-leaflet/hooks'\n"))),(0,r.kt)(o.Z,{value:"bare",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useMapEvent } from 'react-leaflet/hooks'\n")))))}f.isMDXComponent=!0}}]);