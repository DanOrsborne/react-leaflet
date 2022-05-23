"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,2489],{7102:function(e,t,n){n.r(t),n.d(t,{default:function(){return xe}});var a=n(2784),r=n(2489),l=n(4773),i=n(6277),o=n(1077),c=n(4126),s=n(2105);var d=n(211),m="backToTopButton_EOoS",u="backToTopButtonShow_Iijp";function b(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],i=(0,a.useRef)(!1),o=(0,c.Ct)(),d=o.startScroll,m=o.cancelScroll;return(0,c.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(i.current?i.current=!1:a>=r?(m(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,s.S)((function(e){e.location.hash&&(i.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",d.k.common.backToTopButton,m,t&&u),type:"button",onClick:n})}var p=n(7963),v=n(9741),h=n(7683),f=n(3578),E=n(7896);function g(e){return a.createElement("svg",(0,E.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var _="collapseSidebarButton_YeeX",k="collapseSidebarButtonIcon_Ifa6";function C(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,o.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",_),onClick:t},a.createElement(g,{className:k}))}var I=n(3717),S=n(1461),N=n(3364),Z=n(2293),x=n(7661),y=n(8698),T=Symbol("EmptyContext"),L=a.createContext(T);function w(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],i=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(L.Provider,{value:i},t)}var A=n(9817),M=["item","onItemClick","activePath","level","index"];function F(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,o.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=e.index,c=(0,S.Z)(e,M),s=t.items,m=t.label,u=t.collapsible,b=t.className,p=t.href,f=function(e){var t=(0,v.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,Z.Wl)(e):void 0}),[e,t])}(t),g=(0,Z._F)(t,r),_=(0,x.Mg)(p,r),k=(0,y.u)({initialState:function(){return!!u&&(!g&&t.collapsed)}}),C=k.collapsed,I=k.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,N.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:g,collapsed:C,setCollapsed:I});var w=function(){var e=(0,a.useContext)(L);if(e===T)throw new N.i6("DocSidebarItemsExpandedStateProvider");return e}(),P=w.expandedItem,B=w.setExpandedItem;function H(e){void 0===e&&(e=!C),B(e?null:o),I(e)}var D=(0,h.L)().docs.sidebar.autoCollapseCategories;return(0,a.useEffect)((function(){u&&P&&P!==o&&D&&I(!0)}),[u,P,o,I,D]),a.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemCategory,d.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},b)},a.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(A.Z,(0,E.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!p&&u,"menu__link--active":g}),onClick:u?function(e){null==n||n(t),p?H(!1):(e.preventDefault(),H())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":u?!C:void 0,href:u?null!=f?f:"#":f},c),m),p&&u&&a.createElement(F,{categoryLabel:m,onClick:function(e){e.preventDefault(),H()}})),a.createElement(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(Q,{items:s,tabIndex:C?-1:0,onItemClick:n,activePath:r,level:l+1})))}var B=n(1344),H=n(1090),D="menuExternalLink_g0f0",R=["item","onItemClick","activePath","level","index"];function W(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(e.index,(0,S.Z)(e,R)),c=t.href,s=t.label,m=t.className,u=(0,Z._F)(t,r),b=(0,B.Z)(c);return a.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:s},a.createElement(A.Z,(0,E.Z)({className:(0,i.Z)("menu__link",!b&&D,{"menu__link--active":u}),"aria-current":u?"page":void 0,to:c},b&&{onClick:n?function(){return n(t)}:void 0},o),s,!b&&a.createElement(H.Z,null)))}var j="menuHtmlItem__i3S";function Y(e){var t=e.item,n=e.level,r=e.index,l=t.value,o=t.defaultStyle,c=t.className;return a.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(n),o&&j+" menu__list-item",c),key:r,dangerouslySetInnerHTML:{__html:l}})}var z=["item"];function U(e){var t=e.item,n=(0,S.Z)(e,z);switch(t.type){case"category":return a.createElement(P,(0,E.Z)({item:t},n));case"html":return a.createElement(Y,(0,E.Z)({item:t},n));default:return a.createElement(W,(0,E.Z)({item:t},n))}}var V=["items"];function q(e){var t=e.items,n=(0,S.Z)(e,V);return a.createElement(w,null,t.map((function(e,t){return a.createElement(U,(0,E.Z)({key:t,item:e,index:t},n))})))}var Q=(0,a.memo)(q),G="menu_squC",O="menuWithAnnouncementBar_jXCD";function X(e){var t=e.path,n=e.sidebar,r=e.className,l=function(){var e=(0,I.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",G,l&&O,r)},a.createElement("ul",{className:(0,i.Z)(d.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:n,activePath:t,level:1})))}var K="sidebar_mhZE",J="sidebarWithHideableNavbar__6UL",$="sidebarHidden__LRd",ee="sidebarLogo_F_0z";function te(e){var t=e.path,n=e.sidebar,r=e.onCollapse,l=e.isHidden,o=(0,v.Z)(),c=(0,h.L)(),s=c.navbar.hideOnScroll,d=c.docs.sidebar.hideable;return a.createElement("div",{className:(0,i.Z)(K,s&&J,l&&$)},s&&a.createElement(f.Z,{tabIndex:-1,className:ee}),a.createElement(X,{path:t,sidebar:n}),o?a.createElement("script",{async:!0,type:"text/javascript",src:"//cdn.carbonads.com/carbon.js?serve=CEAIC2QL&placement=react-leafletjsorg",id:"_carbonads_js"}):null,d&&a.createElement(C,{onClick:r}))}var ne=a.memo(te),ae=n(7136),re=n(7548),le=function(e){var t=e.sidebar,n=e.path,r=(0,ae.e)();return a.createElement("ul",{className:(0,i.Z)(d.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ie(e){return a.createElement(re.Zo,{component:le,props:e})}var oe=a.memo(ie);function ce(e){var t=(0,p.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ne,e),r&&a.createElement(oe,e))}var se=n(3181),de="expandButton_F7YU",me="expandButtonIcon_ieaY";function ue(e){var t=e.toggleSidebar;return a.createElement("div",{className:de,title:(0,o.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(g,{className:me}))}var be="docSidebarContainer_RUQH",pe="docSidebarContainerHidden_k3bM",ve=n(4228);function he(e){var t,n=e.children,r=(0,ve.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function fe(e){var t=e.sidebar,n=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,l=(0,se.TH)().pathname,o=(0,a.useState)(!1),c=o[0],s=o[1],m=(0,a.useCallback)((function(){c&&s(!1),r((function(e){return!e}))}),[r,c]);return a.createElement("aside",{className:(0,i.Z)(d.k.docs.docSidebarContainer,be,n&&pe),onTransitionEnd:function(e){e.currentTarget.classList.contains(be)&&n&&s(!0)}},a.createElement(he,null,a.createElement(ce,{sidebar:t,path:l,onCollapse:m,isHidden:c})),c&&a.createElement(ue,{toggleSidebar:m}))}var Ee={docMainContainer:"docMainContainer_Qrk0",docMainContainerEnhanced:"docMainContainerEnhanced_oEjD",docItemWrapperEnhanced:"docItemWrapperEnhanced_ChoN"};function ge(e){var t=e.hiddenSidebarContainer,n=e.children,r=(0,ve.V)();return a.createElement("main",{className:(0,i.Z)(Ee.docMainContainer,(t||!r)&&Ee.docMainContainerEnhanced)},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},n))}var _e="docPage_vgSg",ke="docsWrapper_GpM1";function Ce(e){var t=e.children,n=(0,ve.V)(),r=(0,a.useState)(!1),i=r[0],o=r[1];return a.createElement(l.Z,{wrapperClassName:ke},a.createElement(b,null),a.createElement("div",{className:_e},n&&a.createElement(fe,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),a.createElement(ge,{hiddenSidebarContainer:i},t)))}var Ie=n(4925),Se=n(328),Ne=n(5663),Ze=n(9092);function xe(e){var t=e.versionMetadata,n=(0,Z.hI)(e);if(!n)return a.createElement(r.default,null);var l=n.docElement,o=n.sidebarName,c=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ze.Z,{version:t.version,tag:(0,Ie.os)(t.pluginId,t.version)}),a.createElement(Se.FG,{className:(0,i.Z)(d.k.wrapper.docsPages,d.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(Ne.q,{version:t},a.createElement(ve.b,{name:o,items:c},a.createElement(Ce,null,l)))))}},2489:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(2784),r=n(4773),l=n(1077),i=n(328);function o(){return a.createElement(a.Fragment,null,a.createElement(i.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},5663:function(e,t,n){n.d(t,{E:function(){return o},q:function(){return i}});var a=n(2784),r=n(3364),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function o(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);