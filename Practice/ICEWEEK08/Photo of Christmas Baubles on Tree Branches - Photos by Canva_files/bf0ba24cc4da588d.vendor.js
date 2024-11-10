"use strict";(self.webpackChunk_canva_web=self.webpackChunk_canva_web||[]).push([[25436],{802011:(t,e,n)=>{n.d(e,{I:()=>i});var r=n(689735);class i{constructor(){i.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=i.id}setupOnce(t,e){const n=t=>{const n=e().getIntegration(i);if(n){try{if(function(t,e){if(!e)return!1;if(function(t,e){const n=t.message,r=e.message;if(!n&&!r)return!1;if(n&&!r||!n&&r)return!1;if(n!==r)return!1;if(!a(t,e))return!1;if(!o(t,e))return!1;return!0}(t,e))return!0;if(function(t,e){const n=c(e),r=c(t);if(!n||!r)return!1;if(n.type!==r.type||n.value!==r.value)return!1;if(!a(t,e))return!1;if(!o(t,e))return!1;return!0}(t,e))return!0;return!1}(t,n._previousEvent))return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(u){return n._previousEvent=t}return n._previousEvent=t}return t};n.id=this.name,t(n)}}function o(t,e){let n=u(t),r=u(e);if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++){const t=r[i],e=n[i];if(t.filename!==e.filename||t.lineno!==e.lineno||t.colno!==e.colno||t.function!==e.function)return!1}return!0}function a(t,e){let n=t.fingerprint,r=e.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;try{return!(n.join("")!==r.join(""))}catch(i){return!1}}function c(t){return t.exception&&t.exception.values&&t.exception.values[0]}function u(t){const e=t.exception;if(e)try{return e.values[0].stacktrace.frames}catch(n){return}}i.__initStatic()},681196:(t,e,n)=>{n.d(e,{S:()=>c});var r=n(844119),i=n(961918),o=n(2612),a=n(689735);class c{static __initStatic(){this.id="ExtraErrorData"}__init(){this.name=c.id}constructor(t){c.prototype.__init.call(this),this._options={depth:3,...t}}setupOnce(t,e){t(((t,n)=>{const r=e().getIntegration(c);return r?r.enhanceEventWithErrorData(t,n):t}))}enhanceEventWithErrorData(t,e={}){if(!e.originalException||!(0,r.VZ)(e.originalException))return t;const n=e.originalException.name||e.originalException.constructor.name,a=this._extractErrorData(e.originalException);if(a){const e={...t.contexts},c=(0,i.Fv)(a,this._options.depth);return(0,r.PO)(c)&&((0,o.xp)(c,"__sentry_skip_normalization__",!0),e[n]=c),{...t,contexts:e}}return t}_extractErrorData(t){try{const e=["name","message","stack","line","column","fileName","lineNumber","columnNumber","toJSON"],n={};for(const i of Object.keys(t)){if(-1!==e.indexOf(i))continue;const o=t[i];n[i]=(0,r.VZ)(o)?o.toString():o}if("function"==typeof t.toJSON){const e=t.toJSON();for(const t of Object.keys(e)){const i=e[t];n[t]=(0,r.VZ)(i)?i.toString():i}}return n}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.error("Unable to extract extra data from the Error object:",e)}return null}}c.__initStatic()},336105:(t,e,n)=>{n.d(e,{m:()=>i});var r=n(216256);class i{static __initStatic(){this.id="RewriteFrames"}__init(){this.name=i.id}__init2(){this._prefix="app:///"}constructor(t={}){i.prototype.__init.call(this),i.prototype.__init2.call(this),i.prototype.__init3.call(this),t.root&&(this._root=t.root),t.prefix&&(this._prefix=t.prefix),t.iteratee&&(this._iteratee=t.iteratee)}setupOnce(t,e){t((t=>{const n=e().getIntegration(i);return n?n.process(t):t}))}process(t){let e=t;return t.exception&&Array.isArray(t.exception.values)&&(e=this._processExceptionsEvent(e)),e}__init3(){this._iteratee=t=>{if(!t.filename)return t;const e=/^[A-Z]:\\/.test(t.filename),n=/^\//.test(t.filename);if(e||n){const n=e?t.filename.replace(/^[A-Z]:/,"").replace(/\\/g,"/"):t.filename,i=this._root?(0,r.Gf)(this._root,n):(0,r.EZ)(n);t.filename=`${this._prefix}${i}`}return t}}_processExceptionsEvent(t){try{return{...t,exception:{...t.exception,values:t.exception.values.map((t=>({...t,...t.stacktrace&&{stacktrace:this._processStacktrace(t.stacktrace)}})))}}}catch(e){return t}}_processStacktrace(t){return{...t,frames:t&&t.frames&&t.frames.map((t=>this._iteratee(t)))}}}i.__initStatic()},197062:(t,e,n)=>{n.d(e,{Rt:()=>i});var r=n(844119);n(355384).n2;function i(t,e){try{let n=t;const r=5,i=80,a=[];let c=0,u=0;const s=" > ",l=s.length;let f;for(;n&&c++<r&&(f=o(n,e),!("html"===f||c>1&&u+a.length*l+f.length>=i));)a.push(f),u+=f.length,n=n.parentNode;return a.reverse().join(s)}catch(n){return"<unknown>"}}function o(t,e){const n=t,i=[];let o,a,c,u,s;if(!n||!n.tagName)return"";i.push(n.tagName.toLowerCase());const l=e&&e.length?e.filter((t=>n.getAttribute(t))).map((t=>[t,n.getAttribute(t)])):null;if(l&&l.length)l.forEach((t=>{i.push(`[${t[0]}="${t[1]}"]`)}));else if(n.id&&i.push(`#${n.id}`),o=n.className,o&&(0,r.HD)(o))for(a=o.split(/\s+/),s=0;s<a.length;s++)i.push(`.${a[s]}`);const f=["type","name","title","alt"];for(s=0;s<f.length;s++)c=f[s],u=n.getAttribute(c),u&&i.push(`[${c}="${u}"]`);return i.join("")}},801364:(t,e,n)=>{function r(t){let e,n=t[0],r=1;for(;r<t.length;){const i=t[r],o=t[r+1];if(r+=2,("optionalAccess"===i||"optionalCall"===i)&&null==n)return;"access"===i||"optionalAccess"===i?(e=n,n=o(n)):"call"!==i&&"optionalCall"!==i||(n=o(((...t)=>n.call(e,...t))),e=void 0)}return n}n.d(e,{x:()=>r})},844119:(t,e,n)=>{n.d(e,{Cy:()=>p,HD:()=>a,Kj:()=>f,PO:()=>u,V9:()=>y,VZ:()=>i,cO:()=>s,i2:()=>h,kK:()=>l,pt:()=>c});const r=Object.prototype.toString;function i(t){switch(r.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return y(t,Error)}}function o(t,e){return r.call(t)===`[object ${e}]`}function a(t){return o(t,"String")}function c(t){return null===t||"object"!=typeof t&&"function"!=typeof t}function u(t){return o(t,"Object")}function s(t){return"undefined"!=typeof Event&&y(t,Event)}function l(t){return"undefined"!=typeof Element&&y(t,Element)}function f(t){return o(t,"RegExp")}function p(t){return u(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function h(t){return"number"==typeof t&&t!=t}function y(t,e){try{return t instanceof e}catch(n){return!1}}},689735:(t,e,n)=>{n.d(e,{kg:()=>a});var r=n(355384);const i=["debug","info","warn","error","log","assert","trace"];function o(){let t=!1;const e={enable:()=>{t=!0},disable:()=>{t=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?i.forEach((n=>{e[n]=(...e)=>{t&&function(t){if(!("console"in r.n2))return t();const e=r.n2.console,n={};i.forEach((t=>{const r=e[t]&&e[t].__sentry_original__;t in e&&r&&(n[t]=e[t],e[t]=r)}));try{return t()}finally{Object.keys(n).forEach((t=>{e[t]=n[t]}))}}((()=>{r.n2.console[n](`Sentry Logger [${n}]:`,...e)}))}})):i.forEach((t=>{e[t]=()=>{}})),e}let a;a="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?(0,r.YO)("logger",o):o()},255058:(t,e,n)=>{function r(){const t="function"==typeof WeakSet,e=t?new WeakSet:[];return[function(n){if(t)return!!e.has(n)||(e.add(n),!1);for(let t=0;t<e.length;t++){if(e[t]===n)return!0}return e.push(n),!1},function(n){if(t)e.delete(n);else for(let t=0;t<e.length;t++)if(e[t]===n){e.splice(t,1);break}}]}n.d(e,{i:()=>r})},961918:(t,e,n)=>{n.d(e,{Fv:()=>c});var r=n(844119),i=n(255058),o=n(2612),a=n(346516);function c(t,e=1/0,n=1/0){try{return u("",t,e,n)}catch(r){return{ERROR:`**non-serializable** (${r})`}}}function u(t,e,c=1/0,s=1/0,l=(0,i.i)()){const[f,p]=l;if(null===e||["number","boolean","string"].includes(typeof e)&&!(0,r.i2)(e))return e;const h=function(t,e){try{return"domain"===t&&e&&"object"==typeof e&&e._events?"[Domain]":"domainEmitter"===t?"[DomainEmitter]":void 0!==n.g&&e===n.g?"[Global]":"undefined"!=typeof window&&e===window?"[Window]":"undefined"!=typeof document&&e===document?"[Document]":(0,r.Cy)(e)?"[SyntheticEvent]":"number"==typeof e&&e!=e?"[NaN]":void 0===e?"[undefined]":"function"==typeof e?`[Function: ${(0,a.$P)(e)}]`:"symbol"==typeof e?`[${String(e)}]`:"bigint"==typeof e?`[BigInt: ${String(e)}]`:`[object ${Object.getPrototypeOf(e).constructor.name}]`}catch(i){return`**non-serializable** (${i})`}}(t,e);if(!h.startsWith("[object "))return h;if(e.__sentry_skip_normalization__)return e;if(0===c)return h.replace("object ","");if(f(e))return"[Circular ~]";const y=e;if(y&&"function"==typeof y.toJSON)try{return u("",y.toJSON(),c-1,s,l)}catch(b){}const g=Array.isArray(e)?[]:{};let d=0;const m=(0,o.Sh)(e);for(const n in m){if(!Object.prototype.hasOwnProperty.call(m,n))continue;if(d>=s){g[n]="[MaxProperties ~]";break}const t=m[n];g[n]=u(n,t,c-1,s,l),d+=1}return p(e),g}},2612:(t,e,n)=>{n.d(e,{Sh:()=>a,xp:()=>o});var r=n(197062),i=n(844119);n(294363);function o(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}function a(t){if((0,i.VZ)(t))return{message:t.message,name:t.name,stack:t.stack,...u(t)};if((0,i.cO)(t)){const e={type:t.type,target:c(t.target),currentTarget:c(t.currentTarget),...u(t)};return"undefined"!=typeof CustomEvent&&(0,i.V9)(t,CustomEvent)&&(e.detail=t.detail),e}return t}function c(t){try{return(0,i.kK)(t)?(0,r.Rt)(t):Object.prototype.toString.call(t)}catch(e){return"<unknown>"}}function u(t){if("object"==typeof t&&null!==t){const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}return{}}},216256:(t,e,n)=>{function r(t,e){let n=0;for(let r=t.length-1;r>=0;r--){const e=t[r];"."===e?t.splice(r,1):".."===e?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}n.d(e,{EZ:()=>s,Gf:()=>u});const i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;function o(t){const e=i.exec(t);return e?e.slice(1):[]}function a(...t){let e="",n=!1;for(let r=t.length-1;r>=-1&&!n;r--){const i=r>=0?t[r]:"/";i&&(e=`${i}/${e}`,n="/"===i.charAt(0))}return e=r(e.split("/").filter((t=>!!t)),!n).join("/"),(n?"/":"")+e||"."}function c(t){let e=0;for(;e<t.length&&""===t[e];e++);let n=t.length-1;for(;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}function u(t,e){t=a(t).substr(1),e=a(e).substr(1);const n=c(t.split("/")),r=c(e.split("/")),i=Math.min(n.length,r.length);let o=i;for(let a=0;a<i;a++)if(n[a]!==r[a]){o=a;break}let u=[];for(let a=o;a<n.length;a++)u.push("..");return u=u.concat(r.slice(o)),u.join("/")}function s(t,e){let n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}},346516:(t,e,n)=>{n.d(e,{$P:()=>i});n(801364);const r="<anonymous>";function i(t){try{return t&&"function"==typeof t&&t.name||r}catch(e){return r}}},294363:(t,e,n)=>{n.d(e,{$G:()=>r});n(844119);function r(t,e=0){return"string"!=typeof t||0===e||t.length<=e?t:`${t.substr(0,e)}...`}},355384:(t,e,n)=>{function r(t){return t&&t.Math==Math?t:void 0}n.d(e,{YO:()=>o,n2:()=>i});const i="object"==typeof globalThis&&r(globalThis)||"object"==typeof window&&r(window)||"object"==typeof self&&r(self)||"object"==typeof n.g&&r(n.g)||function(){return this}()||{};function o(t,e,n){const r=n||i,o=r.__SENTRY__=r.__SENTRY__||{};return o[t]||(o[t]=e())}},781820:(t,e,n)=>{var r,i=n(631400);t=n.hmd(t),r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:t;(0,i.Z)(r)},631400:(t,e,n)=>{function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,{Z:()=>r})},300468:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),r)}var i,o}function o(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,c(t,e,"get"))}function a(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,c(t,e,"set"),n),n}function c(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function u(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}n.d(e,{Z:()=>f});var s=function(t){if(!t)return[];Array.isArray(t)||(t=[t]);for(var e={},n=0;n<t.length;++n){var i,o=t[n];if(o&&"object"===r(o)&&(o=String(o)),"string"!=typeof o){var a="Locales should be strings, ".concat(JSON.stringify(o)," isn't.");throw new TypeError(a)}var c=o.split("-");if(!c.every((function(t){return/[a-z0-9]+/i.test(t)}))){var u=JSON.stringify(o),s="The locale ".concat(u," is not a structurally valid BCP 47 language tag.");throw new RangeError(s)}var l=c[0].toLowerCase();c[0]=null!==(i={in:"id",iw:"he",ji:"yi"}[l])&&void 0!==i?i:l,e[c.join("-")]=!0}return Object.keys(e)};function l(t){switch(r(t)){case"number":return t;case"bigint":throw new TypeError("Cannot convert a BigInt value to a number");default:return Number(t)}}function f(t,e,n,r){var c=function(t){do{if(e(t))return t;t=t.replace(/-?[^-]*$/,"")}while(t);return null},f=new WeakMap,p=new WeakMap,h=new WeakMap,y=new WeakMap,g=new WeakMap,d=function(){function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),u(this,f,{writable:!0,value:void 0}),u(this,p,{writable:!0,value:void 0}),u(this,h,{writable:!0,value:void 0}),u(this,y,{writable:!0,value:void 0}),u(this,g,{writable:!0,value:void 0}),a(this,f,function(e){for(var n=s(e),r=0;r<n.length;++r){var i=c(n[r]);if(i)return i}var o=(new t).resolvedOptions().locale;return c(o)}(n)),a(this,h,e(o(this,f))),a(this,p,r(o(this,f))),a(this,y,function(t){var e=Object.prototype.hasOwnProperty.call(t,"type")&&t.type;if(!e)return"cardinal";if("cardinal"===e||"ordinal"===e)return e;throw new RangeError("Not a valid plural type: "+JSON.stringify(e))}(i)),a(this,g,new t("en",i))}var m,b,_;return m=d,_=[{key:"supportedLocalesOf",value:function(t){return s(t).filter(c)}}],(b=[{key:"resolvedOptions",value:function(){var t=o(this,g).resolvedOptions(),e=t.minimumIntegerDigits,r=t.minimumFractionDigits,i=t.maximumFractionDigits,a=t.minimumSignificantDigits,c=t.maximumSignificantDigits,u=t.roundingPriority,s={locale:o(this,f),type:o(this,y),minimumIntegerDigits:e,minimumFractionDigits:r,maximumFractionDigits:i};return"number"==typeof a&&(s.minimumSignificantDigits=a,s.maximumSignificantDigits=c),s.pluralCategories=n(o(this,f),"ordinal"===o(this,y)).slice(0),s.roundingPriority=u||"auto",s}},{key:"select",value:function(t){if(!(this instanceof d))throw new TypeError("select() called on incompatible ".concat(this));if("number"!=typeof t&&(t=Number(t)),!isFinite(t))return"other";var e=o(this,g).format(Math.abs(t));return o(this,h).call(this,e,"ordinal"===o(this,y))}},{key:"selectRange",value:function(t,e){if(!(this instanceof d))throw new TypeError("selectRange() called on incompatible ".concat(this));if(void 0===t)throw new TypeError("start is undefined");if(void 0===e)throw new TypeError("end is undefined");var n=l(t),r=l(e);if(!isFinite(n))throw new RangeError("start must be finite");if(!isFinite(r))throw new RangeError("end must be finite");return o(this,p).call(this,this.select(n),this.select(r))}}])&&i(m.prototype,b),_&&i(m,_),Object.defineProperty(m,"prototype",{writable:!1}),d}();return"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(d.prototype,Symbol.toStringTag,{value:"Intl.PluralRules",writable:!1,configurable:!0}),Object.defineProperty(d,"prototype",{writable:!1}),d}},949286:(t,e,n)=>{n.d(e,{en:()=>c});const r="one",i="two",o="few",a="other",c={cardinal:[r,a],ordinal:[r,i,o,a]}},150268:(t,e,n)=>{n.d(e,{en:()=>r});const r=(t,e)=>{const n=String(t).split("."),r=!n[1],i=Number(n[0])==t,o=i&&n[0].slice(-1),a=i&&n[0].slice(-2);return e?1==o&&11!=a?"one":2==o&&12!=a?"two":3==o&&13!=a?"few":"other":1==t&&r?"one":"other"}},391850:(t,e,n)=>{n.d(e,{en:()=>i});const r=(t,e)=>"other",i=r}}]);
//# sourceMappingURL=sourcemaps/bf0ba24cc4da588d.vendor.js.map