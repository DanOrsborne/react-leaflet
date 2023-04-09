"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2772],{876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(7896),a=(t(2784),t(876));const o={title:"Panes"},l=void 0,c={unversionedId:"example-panes",id:"example-panes",title:"Panes",description:"",source:"@site/docs/example-panes.md",sourceDirName:".",slug:"/example-panes",permalink:"/docs/example-panes",draft:!1,tags:[],version:"current",frontMatter:{title:"Panes"},sidebar:"docs",previous:{title:"Layers control",permalink:"/docs/example-layers-control"},next:{title:"Draggable Marker",permalink:"/docs/example-draggable-marker"}},i={},p=[],s={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const outer = [\n  [50.505, -29.09],\n  [52.505, 29.09],\n]\nconst inner = [\n  [49.505, -2.09],\n  [53.505, 2.09],\n]\n\nfunction BlinkingPane() {\n  const [render, setRender] = useState(true)\n  const timerRef = useRef()\n  useEffect(() => {\n    timerRef.current = setInterval(() => {\n      setRender((r) => !r)\n    }, 5000)\n    return () => {\n      clearInterval(timerRef.current)\n    }\n  }, [])\n\n  return render ? (\n    <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>\n      <Rectangle bounds={outer} pathOptions={{ color: \'cyan\' }} />\n    </Pane>\n  ) : null\n}\n\nrender(\n  <MapContainer bounds={outer} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <BlinkingPane />\n    <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>\n      <Rectangle bounds={inner} pathOptions={{ color: \'yellow\' }} />\n      <Pane name="purple-rectangle">\n        <Rectangle bounds={outer} pathOptions={{ color: \'purple\' }} />\n      </Pane>\n    </Pane>\n  </MapContainer>,\n)\n')))}f.isMDXComponent=!0}}]);