/*! For license information please see c4f5d8e4.46c3c643.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195,514],{5894:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(2779),o=t.n(r),u=t(2784),a=t(1510),i=t(77),c=t(7614),l=t(6097),s=t(1358),f=t(5351),p={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX"};function d(n){var e=n.text,t=(0,l.Z)().isDarkTheme?"logo-title-alt":"logo-title";return u.createElement("h1",{className:"hero__title"},u.createElement("img",{src:(0,i.Z)("img/"+t+".svg"),alt:e,width:"480"}))}function v(){var n=(0,c.Z)().siteConfig,e=void 0===n?{}:n;return u.createElement(f.Z,{title:e.title,description:"React components for Leaflet maps"},u.createElement("header",{className:o()("hero",p.heroBanner)},u.createElement("div",{className:"container"},u.createElement(d,{text:e.title}),u.createElement("p",{className:"hero__subtitle"},e.tagline),u.createElement("div",{className:p.buttons},u.createElement(a.Z,{className:o()("button button--outline button--primary button--lg",p.getStarted),to:(0,i.Z)("docs/start-introduction")},"Get Started")))),u.createElement("main",null,u.createElement(s.Z,{live:!0,noInline:!0,className:"tsx"},'const position = [51.505, -0.09]\n        \nrender(\n  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Marker position={position}>\n      <Popup>\n        A pretty CSS3 popup. <br /> Easily customizable.\n      </Popup>\n    </Marker>\n  </MapContainer>\n)')))}},5326:function(n,e,t){"use strict";t.d(e,{Z:function(){return _n}});var r={};t.r(r),t.d(r,{CONTEXT_VERSION:function(){return l},LeafletContext:function(){return s},LeafletProvider:function(){return f},addClassName:function(){return w},createContainerComponent:function(){return d},createControlComponent:function(){return R},createControlHook:function(){return y},createDivOverlayComponent:function(){return v},createDivOverlayHook:function(){return g},createElementHook:function(){return L},createLayerComponent:function(){return j},createLayerHook:function(){return Z},createLeafComponent:function(){return m},createOverlayComponent:function(){return I},createPathComponent:function(){return M},createPathHook:function(){return S},createTileLayerComponent:function(){return N},removeClassName:function(){return x},updateCircle:function(){return i},updateClassName:function(){return E},updateGridLayer:function(){return _},updateMediaOverlay:function(){return z},useAttribution:function(){return a},useEventHandlers:function(){return h},useLayerLifecycle:function(){return P},useLeafletContext:function(){return p},usePathOptions:function(){return k},withPane:function(){return b}});var o={};t.r(o),t.d(o,{AttributionControl:function(){return B},Circle:function(){return D},CircleMarker:function(){return W},FeatureGroup:function(){return J},GeoJSON:function(){return q},ImageOverlay:function(){return K},LayerGroup:function(){return $},LayersControl:function(){return en},MapConsumer:function(){return rn},MapContainer:function(){return an},Marker:function(){return ln},Pane:function(){return dn},Polygon:function(){return mn},Polyline:function(){return hn},Popup:function(){return bn},Rectangle:function(){return Cn},SVGOverlay:function(){return Pn},ScaleControl:function(){return On},TileLayer:function(){return kn},Tooltip:function(){return Sn},VideoOverlay:function(){return jn},WMSTileLayer:function(){return Mn},ZoomControl:function(){return Nn},useMap:function(){return T},useMapEvent:function(){return H},useMapEvents:function(){return A}});var u=t(2784);function a(n,e){var t=(0,u.useRef)(e);(0,u.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function i(n,e,t){e.center!==t.center&&n.setLatLng(e.center),null!=e.radius&&e.radius!==t.radius&&n.setRadius(e.radius)}var c=t(8316),l=1,s=(0,u.createContext)(null),f=s.Provider;function p(){var n=(0,u.useContext)(s);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function d(n){function e(e,t){var r=n(e).current,o=r.instance,a=r.context;return(0,u.useImperativeHandle)(t,(function(){return o})),null==e.children?null:u.createElement(f,{value:a},e.children)}return(0,u.forwardRef)(e)}function v(n){function e(e,t){var r=(0,u.useState)(!1),o=r[0],a=r[1],i=n(e,a).current.instance;(0,u.useImperativeHandle)(t,(function(){return i})),(0,u.useEffect)((function(){o&&i.update()}),[i,o,e.children]);var l=i._contentNode;return l?(0,c.createPortal)(e.children,l):null}return(0,u.forwardRef)(e)}function m(n){function e(e,t){var r=n(e).current.instance;return(0,u.useImperativeHandle)(t,(function(){return r})),null}return(0,u.forwardRef)(e)}function y(n){return function(e){var t=p(),r=n(e,t),o=r.current.instance,a=(0,u.useRef)(e.position),i=e.position;return(0,u.useEffect)((function(){return o.addTo(t.map),function(){o.remove()}}),[t.map,o]),(0,u.useEffect)((function(){null!=i&&i!==a.current&&(o.setPosition(i),a.current=i)}),[o,i]),r}}function h(n,e){var t=(0,u.useRef)();(0,u.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function b(n,e){var t,r=null!=(t=n.pane)?t:e.pane;return r?Object.assign({},n,{pane:r}):n}function g(n,e){return function(t,r){var o=p(),u=n(b(t,o),o);return a(o.map,t.attribution),h(u.current,t.eventHandlers),e(u.current,o,t,r),u}}var C=t(5062);function O(n){return n.split(" ").filter(Boolean)}function w(n,e){O(e).forEach((function(e){C.DomUtil.addClass(n,e)}))}function x(n,e){O(e).forEach((function(e){C.DomUtil.removeClass(n,e)}))}function E(n,e,t){null!=n&&t!==e&&(null!=e&&e.length>0&&x(n,e),null!=t&&t.length>0&&w(n,t))}function L(n,e){return null==e?function(e,t){return(0,u.useRef)(n(e,t))}:function(t,r){var o=(0,u.useRef)(n(t,r)),a=(0,u.useRef)(t),i=o.current.instance;return(0,u.useEffect)((function(){a.current!==t&&(e(i,t,a.current),a.current=t)}),[i,t,r]),o}}function P(n,e){(0,u.useEffect)((function(){var t;return(null!=(t=e.layerContainer)?t:e.map).addLayer(n.instance),function(){var t;null==(t=e.layerContainer)||t.removeLayer(n.instance),e.map.removeLayer(n.instance)}}),[e,n])}function Z(n){return function(e){var t=p(),r=n(b(e,t),t);return a(t.map,e.attribution),h(r.current,e.eventHandlers),P(r.current,t),r}}function k(n,e){var t=(0,u.useRef)();(0,u.useEffect)((function(){if(e.pathOptions!==t.current){var r,o=null!=(r=e.pathOptions)?r:{};n.instance.setStyle(o),t.current=o}}),[n,e])}function S(n){return function(e){var t=p(),r=n(b(e,t),t);return h(r.current,e.eventHandlers),P(r.current,t),k(r.current,e),r}}function R(n){return m(y(L((function(e,t){return{instance:n(e),context:t}}))))}function j(n,e){return d(Z(L(n,e)))}function I(n,e){return v(g(L(n),e))}function M(n,e){return d(S(L(n,e)))}function N(n,e){return m(Z(L(n,e)))}function _(n,e,t){var r=e.opacity,o=e.zIndex;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}function z(n,e,t){e.bounds instanceof C.LatLngBounds&&e.bounds!==t.bounds&&n.setBounds(e.bounds),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=e.zIndex&&e.zIndex!==t.zIndex&&n.setZIndex(e.zIndex)}function T(){return p().map}function H(n,e){var t=T();return(0,u.useEffect)((function(){return t.on(n,e),function(){t.off(n,e)}}),[t,n,e]),t}function A(n){var e=T();return(0,u.useEffect)((function(){return e.on(n),function(){e.off(n)}}),[e,n]),e}var B=R((function(n){return new C.Control.Attribution(n)})),G=t(1461),V=["center","children"],D=M((function(n,e){var t=n.center,r=(n.children,(0,G.Z)(n,V)),o=new C.Circle(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),i),U=["center","children"],W=M((function(n,e){var t=n.center,r=(n.children,(0,G.Z)(n,U)),o=new C.CircleMarker(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),i),F=["children"],J=M((function(n,e){n.children;var t=(0,G.Z)(n,F),r=new C.FeatureGroup([],t);return{instance:r,context:Object.assign({},e,{layerContainer:r,overlayContainer:r})}})),X=["data"],q=M((function(n,e){var t=n.data,r=(0,G.Z)(n,X),o=new C.GeoJSON(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.style!==t.style&&(null==e.style?n.resetStyle():n.setStyle(e.style))})),Y=["bounds","url"],K=j((function(n,e){var t=n.bounds,r=n.url,o=(0,G.Z)(n,Y),u=new C.ImageOverlay(r,t,o);return{instance:u,context:Object.assign({},e,{overlayContainer:u})}}),(function(n,e,t){z(n,e,t),e.url!==t.url&&n.setUrl(e.url)})),Q=["children"],$=j((function(n,e){n.children;var t=(0,G.Z)(n,Q),r=new C.LayerGroup([],t);return{instance:r,context:Object.assign({},e,{layerContainer:r})}})),nn=["children"],en=d(y(L((function(n,e){n.children;var t=(0,G.Z)(n,nn),r=new C.Control.Layers(void 0,void 0,t);return{instance:r,context:Object.assign({},e,{layersControl:r})}}),(function(n,e,t){e.collapsed!==t.collapsed&&(!0===e.collapsed?n.collapse():n.expand())}))));function tn(n){return function(e){var t=p(),r=(0,u.useRef)(e),o=(0,u.useState)(null),a=o[0],i=o[1],c=t.layersControl,l=t.map,s=(0,u.useCallback)((function(e){null!=c&&(r.current.checked&&l.addLayer(e),n(c,e,r.current.name),i(e))}),[c,l]),d=(0,u.useCallback)((function(n){null==c||c.removeLayer(n),i(null)}),[c]),v=(0,u.useMemo)((function(){return Object.assign({},t,{layerContainer:{addLayer:s,removeLayer:d}})}),[t,s,d]);return(0,u.useEffect)((function(){null!==a&&r.current!==e&&(!0!==e.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=e.checked&&!1!==e.checked||l.removeLayer(a):l.addLayer(a),r.current=e)})),e.children?u.createElement(f,{value:v},e.children):null}}function rn(n){return(0,n.children)(T())}en.BaseLayer=tn((function(n,e,t){n.addBaseLayer(e,t)})),en.Overlay=tn((function(n,e,t){n.addOverlay(e,t)}));var on=["children","className","id","placeholder","style","whenCreated"];function un(){return un=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},un.apply(this,arguments)}function an(n){var e=n.children,t=n.className,r=n.id,o=n.placeholder,a=n.style,i=n.whenCreated,c=(0,G.Z)(n,on),s=(0,u.useRef)(null),p=function(n,e){var t=(0,u.useState)(null),r=t[0],o=t[1];return(0,u.useEffect)((function(){if(null!==n.current&&null===r){var t=new C.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),o(t)}}),[n,r,e]),r}(s,c),d=(0,u.useRef)(!1);(0,u.useEffect)((function(){null!=p&&!1===d.current&&null!=i&&(d.current=!0,i(p))}),[p,i]);var v=(0,u.useState)({className:t,id:r,style:a})[0],m=(0,u.useMemo)((function(){return p?{__version:l,map:p}:null}),[p]),y=m?u.createElement(f,{value:m},e):null!=o?o:null;return u.createElement("div",un({},v,{ref:s}),y)}var cn=["position"],ln=j((function(n,e){var t=n.position,r=(0,G.Z)(n,cn),o=new C.Marker(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),sn=t(4952),fn=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function pn(n,e){n[e];return(0,G.Z)(n,[e].map(sn.Z))}function dn(n){var e=(0,u.useState)(),t=e[0],r=e[1],o=p(),a=(0,u.useMemo)((function(){return Object.assign({},o,{pane:n.name})}),[o]);return(0,u.useEffect)((function(){return r(function(n,e){var t,r=n.name;if(-1!==fn.indexOf(r))throw new Error("You must use a unique name for a pane that is not a default Leaflet pane: "+r);if(null!=e.map.getPane(r))throw new Error("A pane with this name already exists: "+r);var o=null!=(t=n.pane)?t:e.pane,u=o?e.map.getPane(o):void 0,a=e.map.createPane(r,u);return null!=n.className&&w(a,n.className),null!=n.style&&Object.keys(n.style).forEach((function(e){a.style[e]=n.style[e]})),a}(n,o)),function(){var e=o.map.getPane(n.name);null==e||null==e.remove||e.remove(),null!=o.map._panes&&(o.map._panes=pn(o.map._panes,n.name),o.map._paneRenderers=pn(o.map._paneRenderers,n.name))}}),[]),null!=n.children&&null!=t?(0,c.createPortal)(u.createElement(f,{value:a},n.children),t):null}var vn=["positions"],mn=M((function(n,e){var t=n.positions,r=(0,G.Z)(n,vn),o=new C.Polygon(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),yn=["positions"],hn=M((function(n,e){var t=n.positions,r=(0,G.Z)(n,yn),o=new C.Polyline(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),bn=I((function(n,e){return{instance:new C.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,r){var o=t.onClose,a=t.onOpen,i=t.position;(0,u.useEffect)((function(){var t=n.instance;function u(n){n.popup===t&&(t.update(),r(!0),null==a||a())}function c(n){n.popup===t&&(r(!1),null==o||o())}return e.map.on({popupopen:u,popupclose:c}),null==e.overlayContainer?(null!=i&&t.setLatLng(i),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){var n;e.map.off({popupopen:u,popupclose:c}),null==(n=e.overlayContainer)||n.unbindPopup(),e.map.removeLayer(t)}}),[n,e,r,o,a,i])})),gn=["bounds"],Cn=M((function(n,e){var t=n.bounds,r=(0,G.Z)(n,gn),o=new C.Rectangle(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.bounds!==t.bounds&&n.setBounds(e.bounds)})),On=R((function(n){return new C.Control.Scale(n)})),wn=["attributes","bounds"],xn=["children"],En=Z(L((function(n,e){var t=n.attributes,r=n.bounds,o=(0,G.Z)(n,wn),u=document.createElementNS("http://www.w3.org/2000/svg","svg");return u.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach((function(n){u.setAttribute(n,t[n])})),{instance:new C.SVGOverlay(u,r,o),container:u,context:e}}),z));function Ln(n,e){var t=n.children,r=(0,G.Z)(n,xn),o=En(r).current,a=o.instance,i=o.container;return(0,u.useImperativeHandle)(e,(function(){return a})),null==i||null==t?null:(0,c.createPortal)(t,i)}var Pn=(0,u.forwardRef)(Ln),Zn=["url"],kn=N((function(n,e){var t=n.url,r=(0,G.Z)(n,Zn);return{instance:new C.TileLayer(t,b(r,e)),context:e}}),_),Sn=I((function(n,e){return{instance:new C.Tooltip(n,e.overlayContainer),context:e}}),(function(n,e,t,r){var o=t.onClose,a=t.onOpen;(0,u.useEffect)((function(){var t=e.overlayContainer;if(null!=t){var u=n.instance,i=function(n){n.tooltip===u&&(u.update(),r(!0),null==a||a())},c=function(n){n.tooltip===u&&(r(!1),null==o||o())};return t.on({tooltipopen:i,tooltipclose:c}),t.bindTooltip(u),function(){t.off({tooltipopen:i,tooltipclose:c}),null!=t._map&&t.unbindTooltip()}}}),[n,e,r,o,a])})),Rn=["bounds","url"],jn=j((function(n,e){var t,r=n.bounds,o=n.url,u=(0,G.Z)(n,Rn),a=new C.VideoOverlay(o,r,u);!0===u.play&&(null==(t=a.getElement())||t.play());return{instance:a,context:Object.assign({},e,{overlayContainer:a})}}),(function(n,e,t){z(n,e,t),"string"==typeof e.url&&e.url!==t.url&&n.setUrl(e.url);var r=n.getElement();null!=r&&(!0!==e.play||t.play?e.play||!0!==t.play||r.pause():r.play())})),In=["params","url"],Mn=N((function(n,e){var t=n.params,r=void 0===t?{}:t,o=n.url,u=(0,G.Z)(n,In);return{instance:new C.TileLayer.WMS(o,Object.assign({},r,b(u,e))),context:e}}),(function(n,e,t){_(n,e,t),null!=e.params&&e.params!==t.params&&n.setParams(e.params)})),Nn=R((function(n){return new C.Control.Zoom(n)})),_n=Object.assign({L:C,React:u},r,u,o)},2779:function(n,e){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var u=typeof t;if("string"===u||"number"===u)n.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&n.push(a)}}else if("object"===u)if(t.toString===Object.prototype.toString)for(var i in t)r.call(t,i)&&t[i]&&n.push(i);else n.push(t.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(t=function(){return o}.apply(e,[]))||(n.exports=t)}()}}]);