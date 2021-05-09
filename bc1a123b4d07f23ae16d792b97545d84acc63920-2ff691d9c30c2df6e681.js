/*! For license information please see bc1a123b4d07f23ae16d792b97545d84acc63920-2ff691d9c30c2df6e681.js.LICENSE.txt */
(self.webpackChunkben_randall=self.webpackChunkben_randall||[]).push([[784],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n(1060),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},1060:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var u=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+u+"`."):null;for(var c=arguments.length,l=Array(c>6?c-6:0),f=6;f<c;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,u,o,s].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},6187:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(5900),i=n.n(o),u=n(7294),s=n(9541),c=u.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,c=e.as,l=void 0===c?"div":c,f=e.className,d=(0,a.Z)(e,["bsPrefix","fluid","as","className"]),p=(0,s.vE)(n,"container"),v="string"==typeof o?"-"+o:"-fluid";return u.createElement(l,(0,r.Z)({ref:t},d,{className:i()(f,o?""+p+v:p)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return o}});var r=n(7294),a=r.createContext({});a.Consumer,a.Provider;function o(e,t){var n=(0,r.useContext)(a);return e||n[t]||t}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,s,c,l;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(s=u;0!=s--;)if(!o(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(s=u;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((u=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=u;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=u;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!o(e[c[s]],i[c[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function l(){s=e(c.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},8283:function(e,t,n){"use strict";n.d(t,{Z:function(){return Wt}});var r=n(7294),a=n(2122),o=n(9756),i=n(5900),u=n.n(i);n(1143);function s(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t){return Object.keys(t).reduce((function(n,i){var u,l=n,f=l[s(i)],d=l[i],p=(0,o.Z)(l,[s(i),i].map(c)),v=t[i],m=function(e,t,n){var a=(0,r.useRef)(void 0!==e),o=(0,r.useState)(t),i=o[0],u=o[1],s=void 0!==e,c=a.current;return a.current=s,!s&&c&&i!==t&&u(t),[s?e:i,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(d,f,e[v]),h=m[0],y=m[1];return(0,a.Z)({},p,((u={})[i]=h,u[v]=y,u))}),e)}n(3639);var f=/-(.)/g;var d=n(9541),p=function(e){return e[0].toUpperCase()+(t=e,t.replace(f,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var v=r.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.as,c=(0,o.Z)(e,["bsPrefix","className","as"]);n=(0,d.vE)(n,"navbar-brand");var l=s||(c.href?"a":"span");return r.createElement(l,(0,a.Z)({},c,{ref:t,className:u()(i,n)}))}));v.displayName="NavbarBrand";var m=v;function h(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var y=/([A-Z])/g;var b=/^ms-/;function g(e){return function(e){return e.replace(y,"-$1").toLowerCase()}(e).replace(b,"-ms-")}var E=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var x=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(g(t))||function(e,t){return h(e).getComputedStyle(e,t)}(e).getPropertyValue(g(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!E.test(e))}(a)?n+=g(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(g(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},T=n(3552),w=n(3935),C=!1,S=r.createContext(null),O="unmounted",N="exited",A="entering",k="entered",P="exiting",j=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=N,r.appearStatus=A):a=k:a=t.unmountOnExit||t.mountOnEnter?O:N,r.state={status:a},r.nextCallback=null,r}(0,T.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===O?{status:N}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==A&&n!==k&&(t=A):n!==A&&n!==k||(t=P)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===A?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===N&&this.setState({status:O})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[w.findDOMNode(this),r],o=a[0],i=a[1],u=this.getTimeouts(),s=r?u.appear:u.enter;!e&&!n||C?this.safeSetState({status:k},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:A},(function(){t.props.onEntering(o,i),t.onTransitionEnd(s,(function(){t.safeSetState({status:k},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:w.findDOMNode(this);t&&!C?(this.props.onExit(r),this.safeSetState({status:P},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:N},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:N},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:w.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===O)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,o.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(S.Provider,{value:null},"function"==typeof n?n(e,a):r.cloneElement(r.Children.only(n),a))},t}(r.Component);function L(){}j.contextType=S,j.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:L,onEntering:L,onEntered:L,onExit:L,onExiting:L,onExited:L},j.UNMOUNTED=O,j.EXITED=N,j.ENTERING=A,j.ENTERED=k,j.EXITING=P;var R=j,I=!("undefined"==typeof window||!window.document||!window.document.createElement),M=!1,D=!1;try{var Z={get passive(){return M=!0},get once(){return D=M=!0}};I&&(window.addEventListener("test",Z,Z),window.removeEventListener("test",Z,!0))}catch(Xt){}var _=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!D){var a=r.once,o=r.capture,i=n;!D&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,M?r:o)}e.addEventListener(t,n,r)};var K=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var B=function(e,t,n,r){return _(e,t,n,r),function(){K(e,t,n,r)}};function U(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=B(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function q(e,t,n,r){var a,o;null==n&&(a=x(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=U(e,n,r),u=B(e,"transitionend",t);return function(){i(),u()}}function H(e,t){var n=x(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function F(e,t){var n=H(e,"transitionDuration"),r=H(e,"transitionDelay"),a=q(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}var Y,V=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var z={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function W(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=z[e];return n+parseInt(x(t,r[0]),10)+parseInt(x(t,r[1]),10)}var X=((Y={}).exited="collapse",Y.exiting="collapsing",Y.entering="collapsing",Y.entered="collapse show",Y),$={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:W},G=r.forwardRef((function(e,t){var n=e.onEnter,i=e.onEntering,s=e.onEntered,c=e.onExit,l=e.onExiting,f=e.className,d=e.children,p=e.dimension,v=void 0===p?"height":p,m=e.getDimensionValue,h=void 0===m?W:m,y=(0,o.Z)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),b="function"==typeof v?v():v,g=(0,r.useMemo)((function(){return V((function(e){e.style[b]="0"}),n)}),[b,n]),E=(0,r.useMemo)((function(){return V((function(e){var t="scroll"+b[0].toUpperCase()+b.slice(1);e.style[b]=e[t]+"px"}),i)}),[b,i]),x=(0,r.useMemo)((function(){return V((function(e){e.style[b]=null}),s)}),[b,s]),T=(0,r.useMemo)((function(){return V((function(e){e.style[b]=h(b,e)+"px",e.offsetHeight}),c)}),[c,h,b]),w=(0,r.useMemo)((function(){return V((function(e){e.style[b]=null}),l)}),[b,l]);return r.createElement(R,(0,a.Z)({ref:t,addEndListener:F},y,{"aria-expanded":y.role?y.in:null,onEnter:g,onEntering:E,onEntered:x,onExit:T,onExiting:w}),(function(e,t){return r.cloneElement(d,(0,a.Z)({},t,{className:u()(f,d.props.className,X[e],"width"===b&&"width")}))}))}));G.defaultProps=$;var J=G,Q=r.createContext(null);Q.displayName="NavbarContext";var ee=Q,te=r.forwardRef((function(e,t){var n=e.children,i=e.bsPrefix,u=(0,o.Z)(e,["children","bsPrefix"]);return i=(0,d.vE)(i,"navbar-collapse"),r.createElement(ee.Consumer,null,(function(e){return r.createElement(J,(0,a.Z)({in:!(!e||!e.expanded)},u),r.createElement("div",{ref:t,className:i},n))}))}));te.displayName="NavbarCollapse";var ne=te;var re=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function ae(e){var t=re(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var oe=r.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.children,c=e.label,l=e.as,f=void 0===l?"button":l,p=e.onClick,v=(0,o.Z)(e,["bsPrefix","className","children","label","as","onClick"]);n=(0,d.vE)(n,"navbar-toggler");var m=(0,r.useContext)(ee)||{},h=m.onToggle,y=m.expanded,b=ae((function(e){p&&p(e),h&&h()}));return"button"===f&&(v.type="button"),r.createElement(f,(0,a.Z)({},v,{ref:t,onClick:b,"aria-label":c,className:u()(i,n,!y&&"collapsed")}),s||r.createElement("span",{className:n+"-icon"}))}));oe.displayName="NavbarToggle",oe.defaultProps={label:"Toggle navigation"};var ie=oe,ue=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},se=r.createContext(null),ce=function(e,t){var n=void 0===t?{}:t,i=n.displayName,s=void 0===i?p(e):i,c=n.Component,l=n.defaultProps,f=r.forwardRef((function(t,n){var i=t.className,s=t.bsPrefix,l=t.as,f=void 0===l?c||"div":l,p=(0,o.Z)(t,["className","bsPrefix","as"]),v=(0,d.vE)(s,e);return r.createElement(f,(0,a.Z)({ref:n,className:u()(i,v)},p))}));return f.defaultProps=l,f.displayName=s,f}("navbar-text",{Component:"span"}),le=r.forwardRef((function(e,t){var n=l(e,{expanded:"onToggle"}),i=n.bsPrefix,s=n.expand,c=n.variant,f=n.bg,p=n.fixed,v=n.sticky,m=n.className,h=n.children,y=n.as,b=void 0===y?"nav":y,g=n.expanded,E=n.onToggle,x=n.onSelect,T=n.collapseOnSelect,w=(0,o.Z)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=(0,d.vE)(i,"navbar"),S=(0,r.useCallback)((function(){x&&x.apply(void 0,arguments),T&&g&&E&&E(!1)}),[x,T,g,E]);void 0===w.role&&"nav"!==b&&(w.role="navigation");var O=C+"-expand";"string"==typeof s&&(O=O+"-"+s);var N=(0,r.useMemo)((function(){return{onToggle:function(){return E&&E(!g)},bsPrefix:C,expanded:!!g}}),[C,g,E]);return r.createElement(ee.Provider,{value:N},r.createElement(se.Provider,{value:S},r.createElement(b,(0,a.Z)({ref:t},w,{className:u()(m,C,s&&O,c&&C+"-"+c,f&&"bg-"+f,v&&"sticky-"+v,p&&"fixed-"+p)}),h)))}));le.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},le.displayName="Navbar",le.Brand=m,le.Toggle=ie,le.Collapse=ne,le.Text=ce;var fe=le,de=(n(7526),r.createContext(null));de.displayName="CardContext";var pe=de,ve=Function.prototype.bind.call(Function.prototype.call,[].slice);var me=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var he=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=me(e),r=me(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},ye=r.createContext(null);ye.displayName="NavContext";var be=ye,ge=r.createContext(null),Ee=function(){},xe=r.forwardRef((function(e,t){var n,i,u=e.as,s=void 0===u?"ul":u,c=e.onSelect,l=e.activeKey,f=e.role,d=e.onKeyDown,p=(0,o.Z)(e,["as","onSelect","activeKey","role","onKeyDown"]),v=(0,r.useReducer)((function(e){return!e}),!1)[1],m=(0,r.useRef)(!1),h=(0,r.useContext)(se),y=(0,r.useContext)(ge);y&&(f=f||"tablist",l=y.activeKey,n=y.getControlledId,i=y.getControllerId);var b=(0,r.useRef)(null),g=function(e){var t=b.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",ve(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var i=o+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},E=function(e,t){null!=e&&(c&&c(e,t),h&&h(e,t))};(0,r.useEffect)((function(){if(b.current&&m.current){var e=b.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var x=he(t,b);return r.createElement(se.Provider,{value:E},r.createElement(be.Provider,{value:{role:f,activeKey:ue(l),getControlledId:n||Ee,getControllerId:i||Ee}},r.createElement(s,(0,a.Z)({},p,{onKeyDown:function(e){var t;switch(d&&d(e),e.key){case"ArrowLeft":case"ArrowUp":t=g(-1);break;case"ArrowRight":case"ArrowDown":t=g(1);break;default:return}t&&(e.preventDefault(),E(t.dataset.rbEventKey,e),m.current=!0,v())},ref:x,role:f}))))})),Te=r.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.children,c=e.as,l=void 0===c?"div":c,f=(0,o.Z)(e,["bsPrefix","className","children","as"]);return n=(0,d.vE)(n,"nav-item"),r.createElement(l,(0,a.Z)({},f,{ref:t,className:u()(i,n)}),s)}));Te.displayName="NavItem";var we=Te;function Ce(e){return!e||"#"===e.trim()}var Se=r.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,u=e.disabled,s=e.onKeyDown,c=(0,o.Z)(e,["as","disabled","onKeyDown"]),l=function(e){var t=c.href,n=c.onClick;(u||Ce(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return Ce(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),u&&(c.tabIndex=-1,c["aria-disabled"]=!0),r.createElement(i,(0,a.Z)({ref:t},c,{onClick:l,onKeyDown:V((function(e){" "===e.key&&(e.preventDefault(),l(e))}),s)}))}));Se.displayName="SafeAnchor";var Oe=Se,Ne=(n(2473),r.forwardRef((function(e,t){var n=e.active,i=e.className,s=e.eventKey,c=e.onSelect,l=e.onClick,f=e.as,d=(0,o.Z)(e,["active","className","eventKey","onSelect","onClick","as"]),p=ue(s,d.href),v=(0,r.useContext)(se),m=(0,r.useContext)(be),h=n;if(m){d.role||"tablist"!==m.role||(d.role="tab");var y=m.getControllerId(p),b=m.getControlledId(p);d["data-rb-event-key"]=p,d.id=y||d.id,d["aria-controls"]=b||d["aria-controls"],h=null==n&&null!=p?m.activeKey===p:n}"tab"===d.role&&(d.disabled&&(d.tabIndex=-1,d["aria-disabled"]=!0),d["aria-selected"]=h);var g=ae((function(e){l&&l(e),null!=p&&(c&&c(p,e),v&&v(p,e))}));return r.createElement(f,(0,a.Z)({},d,{ref:t,onClick:g,className:u()(i,h&&"active")}))})));Ne.defaultProps={disabled:!1};var Ae=Ne,ke={disabled:!1,as:Oe},Pe=r.forwardRef((function(e,t){var n=e.bsPrefix,i=e.disabled,s=e.className,c=e.href,l=e.eventKey,f=e.onSelect,p=e.as,v=(0,o.Z)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=(0,d.vE)(n,"nav-link"),r.createElement(Ae,(0,a.Z)({},v,{href:c,ref:t,eventKey:l,as:p,disabled:i,onSelect:f,className:u()(s,n,i&&"disabled")}))}));Pe.displayName="NavLink",Pe.defaultProps=ke;var je=Pe,Le=r.forwardRef((function(e,t){var n,i,s,c=l(e,{activeKey:"onSelect"}),f=c.as,p=void 0===f?"div":f,v=c.bsPrefix,m=c.variant,h=c.fill,y=c.justify,b=c.navbar,g=c.className,E=c.children,x=c.activeKey,T=(0,o.Z)(c,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=(0,d.vE)(v,"nav"),C=!1,S=(0,r.useContext)(ee),O=(0,r.useContext)(pe);return S?(i=S.bsPrefix,C=null==b||b):O&&(s=O.cardHeaderBsPrefix),r.createElement(xe,(0,a.Z)({as:p,ref:t,activeKey:x,className:u()(g,(n={},n[w]=!C,n[i+"-nav"]=C,n[s+"-"+m]=!!s,n[w+"-"+m]=!!m,n[w+"-fill"]=h,n[w+"-justified"]=y,n))},T),E)}));Le.displayName="Nav",Le.defaultProps={justify:!1,fill:!1},Le.Item=we,Le.Link=je;var Re,Ie,Me,De,Ze=Le,_e=n(6187),Ke=n(5444),Be=n(5697),Ue=n.n(Be),qe=n(4839),He=n.n(qe),Fe=n(2993),Ye=n.n(Fe),Ve=n(6494),ze=n.n(Ve),We="bodyAttributes",Xe="htmlAttributes",$e="titleAttributes",Ge={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Je=(Object.keys(Ge).map((function(e){return Ge[e]})),"charset"),Qe="cssText",et="href",tt="http-equiv",nt="innerHTML",rt="itemprop",at="name",ot="property",it="rel",ut="src",st="target",ct={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},lt="defaultTitle",ft="defer",dt="encodeSpecialCharacters",pt="onChangeClientState",vt="titleTemplate",mt=Object.keys(ct).reduce((function(e,t){return e[ct[t]]=t,e}),{}),ht=[Ge.NOSCRIPT,Ge.SCRIPT,Ge.STYLE],yt="data-react-helmet",bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Et=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},wt=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ct=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},St=function(e){var t=Pt(e,Ge.TITLE),n=Pt(e,vt);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Pt(e,lt);return t||r||void 0},Ot=function(e){return Pt(e,pt)||function(){}},Nt=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return xt({},e,t)}),{})},At=function(e,t){return t.filter((function(e){return void 0!==e[Ge.BASE]})).map((function(e){return e[Ge.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},kt=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Mt("Helmet: "+e+' should be of type "Array". Instead found type "'+bt(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],s=u.toLowerCase();-1===t.indexOf(s)||n===it&&"canonical"===e[n].toLowerCase()||s===it&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(u)||u!==nt&&u!==Qe&&u!==rt||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],s=ze()({},r[u],a[u]);r[u]=s}return e}),[]).reverse()},Pt=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},jt=(Re=Date.now(),function(e){var t=Date.now();t-Re>16?(Re=t,e(t)):setTimeout((function(){jt(e)}),0)}),Lt=function(e){return clearTimeout(e)},Rt="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||jt:n.g.requestAnimationFrame||jt,It="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Lt:n.g.cancelAnimationFrame||Lt,Mt=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Dt=null,Zt=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;Bt(Ge.BODY,r),Bt(Ge.HTML,a),Kt(f,d);var p={baseTag:Ut(Ge.BASE,n),linkTags:Ut(Ge.LINK,o),metaTags:Ut(Ge.META,i),noscriptTags:Ut(Ge.NOSCRIPT,u),scriptTags:Ut(Ge.SCRIPT,c),styleTags:Ut(Ge.STYLE,l)},v={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(v[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),s(e,v,m)},_t=function(e){return Array.isArray(e)?e.join(""):e},Kt=function(e,t){void 0!==e&&document.title!==e&&(document.title=_t(e)),Bt(Ge.TITLE,t)},Bt=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(yt),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var s=i[u],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(yt):n.getAttribute(yt)!==i.join(",")&&n.setAttribute(yt,i.join(","))}},Ut=function(e,t){var n=document.head||document.querySelector(Ge.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===nt)n.innerHTML=t.innerHTML;else if(r===Qe)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(yt,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},qt=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ht=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ct[n]||n]=e[n],t}),t)},Ft=function(e,t,n){switch(e){case Ge.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[yt]=!0,o=Ht(n,a),[r.createElement(Ge.TITLE,o,e)];var e,n,a,o},toString:function(){return function(e,t,n,r){var a=qt(n),o=_t(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Ct(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Ct(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case We:case Xe:return{toComponent:function(){return Ht(t)},toString:function(){return qt(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,o=((a={key:n})[yt]=!0,a);return Object.keys(t).forEach((function(e){var n=ct[e]||e;if(n===nt||n===Qe){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),r.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===nt||e===Qe)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Ct(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===ht.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Yt=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.scriptTags,c=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:Ft(Ge.BASE,t,r),bodyAttributes:Ft(We,n,r),htmlAttributes:Ft(Xe,a,r),link:Ft(Ge.LINK,o,r),meta:Ft(Ge.META,i,r),noscript:Ft(Ge.NOSCRIPT,u,r),script:Ft(Ge.SCRIPT,s,r),style:Ft(Ge.STYLE,c,r),title:Ft(Ge.TITLE,{title:f,titleAttributes:d},r)}},Vt=He()((function(e){return{baseTag:At([et,st],e),bodyAttributes:Nt(We,e),defer:Pt(e,ft),encode:Pt(e,dt),htmlAttributes:Nt(Xe,e),linkTags:kt(Ge.LINK,[it,et],e),metaTags:kt(Ge.META,[at,Je,tt,ot,rt],e),noscriptTags:kt(Ge.NOSCRIPT,[nt],e),onChangeClientState:Ot(e),scriptTags:kt(Ge.SCRIPT,[ut,nt],e),styleTags:kt(Ge.STYLE,[Qe],e),title:St(e),titleAttributes:Nt($e,e)}}),(function(e){Dt&&It(Dt),e.defer?Dt=Rt((function(){Zt(e,(function(){Dt=null}))})):(Zt(e),Dt=null)}),Yt)((function(){return null})),zt=(Ie=Vt,De=Me=function(e){function t(){return gt(this,t),wt(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!Ye()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case Ge.SCRIPT:case Ge.NOSCRIPT:return{innerHTML:t};case Ge.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return xt({},r,((t={})[n.type]=[].concat(r[n.type]||[],[xt({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case Ge.TITLE:return xt({},a,((t={})[r.type]=i,t.titleAttributes=xt({},o),t));case Ge.BODY:return xt({},a,{bodyAttributes:xt({},o)});case Ge.HTML:return xt({},a,{htmlAttributes:xt({},o)})}return xt({},a,((n={})[r.type]=xt({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=xt({},t);return Object.keys(e).forEach((function(t){var r;n=xt({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[mt[n]||n]=e[n],t}),t)}(Tt(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case Ge.LINK:case Ge.META:case Ge.NOSCRIPT:case Ge.SCRIPT:case Ge.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Tt(e,["children"]),a=xt({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(Ie,a)},Et(t,null,[{key:"canUseDOM",set:function(e){Ie.canUseDOM=e}}]),t}(r.Component),Me.propTypes={base:Ue().object,bodyAttributes:Ue().object,children:Ue().oneOfType([Ue().arrayOf(Ue().node),Ue().node]),defaultTitle:Ue().string,defer:Ue().bool,encodeSpecialCharacters:Ue().bool,htmlAttributes:Ue().object,link:Ue().arrayOf(Ue().object),meta:Ue().arrayOf(Ue().object),noscript:Ue().arrayOf(Ue().object),onChangeClientState:Ue().func,script:Ue().arrayOf(Ue().object),style:Ue().arrayOf(Ue().object),title:Ue().string,titleAttributes:Ue().object,titleTemplate:Ue().string},Me.defaultProps={defer:!0,encodeSpecialCharacters:!0},Me.peek=Ie.peek,Me.rewind=function(){var e=Ie.rewind();return e||(e=Yt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},De);zt.renderStatic=zt.rewind;function Wt(e){var t=e.children;return r.createElement(_e.Z,{className:"layout-container"},r.createElement(zt,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",null,"Ben Randall"),r.createElement("link",{rel:"canonical",href:"http://benrandall.me"})),r.createElement(fe,{expand:"lg"},r.createElement(fe.Brand,null,"Ben Randall ✨"),r.createElement(fe.Toggle,{"aria-controls":"basic-navbar-nav"}),r.createElement(fe.Collapse,{id:"basic-navbar-nav"},r.createElement(Ze,{as:"ul",className:"ml-auto"},r.createElement(Ze.Item,{as:"li"},r.createElement(Ke.Link,{to:"/"},"Home"))))),t,r.createElement("div",{className:"footer"},r.createElement("p",null,"✨ Benjamin Randall 2021 ✨")))}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=bc1a123b4d07f23ae16d792b97545d84acc63920-2ff691d9c30c2df6e681.js.map