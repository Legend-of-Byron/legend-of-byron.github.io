var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function a(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(){return f("")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function w(t){p=t}function v(){if(!p)throw new Error("Function called outside component initialization");return p}function b(t){v().$$.on_mount.push(t)}function y(){const t=v();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const a=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,a)}))}}}function x(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const M=[],T=[],$=[],C=[],D=Promise.resolve();let k=!1;function P(){k||(k=!0,D.then(Y))}function E(t){$.push(t)}let S=!1;const U=new Set;function Y(){if(!S){S=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];w(e),O(e.$$)}for(w(null),M.length=0;T.length;)T.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];U.has(e)||(U.add(e),e())}$.length=0}while(M.length);for(;C.length;)C.pop()();k=!1,S=!1,U.clear()}}function O(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const W=new Set;let N;function j(){N={r:0,c:[],p:N}}function q(){N.r||a(N.c),N=N.p}function _(t,e){t&&t.i&&(W.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),N.c.push((()=>{W.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function L(t,e){const n={},r={},a={$$scope:1};let o=t.length;for(;o--;){const i=t[o],u=e[o];if(u){for(const t in i)t in u||(r[t]=1);for(const t in u)a[t]||(n[t]=u[t],a[t]=1);t[o]=u}else for(const t in i)a[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function A(t){t&&t.c()}function H(t,e,r,i){const{fragment:u,on_mount:s,on_destroy:c,after_update:l}=t.$$;u&&u.m(e,r),i||E((()=>{const e=s.map(n).filter(o);c?c.push(...e):a(e),t.$$.on_mount=[]})),l.forEach(E)}function z(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(e,n,o,i,u,s,l=[-1]){const f=p;w(e);const d=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...r)=>{const a=r.length?r[0]:n;return d.ctx&&u(d.ctx[t],d.ctx[t]=a)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](a),h&&function(t,e){-1===t.$$.dirty[0]&&(M.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),h=!0,a(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(c)}else d.fragment&&d.fragment.c();n.intro&&_(e.$$.fragment),H(e,n.target,n.anchor,n.customElement),Y()}w(f)}class Q{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const R=[];function G(t,e){return{subscribe:I(t,e).subscribe}}function I(e,n=t){let r;const a=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!R.length;for(let t=0;t<a.length;t+=1){const n=a[t];n[1](),R.push(n,e)}if(t){for(let t=0;t<R.length;t+=2)R[t][0](R[t+1]);R.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,u=t){const s=[i,u];return a.push(s),1===a.length&&(r=n(o)||t),i(e),()=>{const t=a.indexOf(s);-1!==t&&a.splice(t,1),0===a.length&&(r(),r=null)}}}}function J(e,n,r){const i=!Array.isArray(e),u=i?[e]:e,s=n.length<2;return G(r,(e=>{let r=!1;const c=[];let l=0,f=t;const d=()=>{if(l)return;f();const r=n(i?c[0]:c,e);s?e(r):f=o(r)?r:t},h=u.map(((e,n)=>function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(e,(t=>{c[n]=t,l&=~(1<<n),r&&d()}),(()=>{l|=1<<n}))));return r=!0,d(),function(){a(h),f()}}))}function V(t){let n,r,a;const o=[t[2]];var i=t[0];function u(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(u()),n.$on("routeEvent",t[7])),{c(){n&&A(n.$$.fragment),r=h()},m(t,e){n&&H(n,t,e),s(t,r,e),a=!0},p(t,e){const a=4&e?L(o,[F(t[2])]):{};if(i!==(i=t[0])){if(n){j();const t=n;X(t.$$.fragment,1,0,(()=>{z(t,1)})),q()}i?(n=new i(u()),n.$on("routeEvent",t[7]),A(n.$$.fragment),_(n.$$.fragment,1),H(n,r.parentNode,r)):n=null}else i&&n.$set(a)},i(t){a||(n&&_(n.$$.fragment,t),a=!0)},o(t){n&&X(n.$$.fragment,t),a=!1},d(t){t&&c(r),n&&z(n,t)}}}function K(t){let n,r,a;const o=[{params:t[1]},t[2]];var i=t[0];function u(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(u()),n.$on("routeEvent",t[6])),{c(){n&&A(n.$$.fragment),r=h()},m(t,e){n&&H(n,t,e),s(t,r,e),a=!0},p(t,e){const a=6&e?L(o,[2&e&&{params:t[1]},4&e&&F(t[2])]):{};if(i!==(i=t[0])){if(n){j();const t=n;X(t.$$.fragment,1,0,(()=>{z(t,1)})),q()}i?(n=new i(u()),n.$on("routeEvent",t[6]),A(n.$$.fragment),_(n.$$.fragment,1),H(n,r.parentNode,r)):n=null}else i&&n.$set(a)},i(t){a||(n&&_(n.$$.fragment,t),a=!0)},o(t){n&&X(n.$$.fragment,t),a=!1},d(t){t&&c(r),n&&z(n,t)}}}function Z(t){let e,n,r,a;const o=[K,V],i=[];function u(t,e){return t[1]?0:1}return e=u(t),n=i[e]=o[e](t),{c(){n.c(),r=h()},m(t,n){i[e].m(t,n),s(t,r,n),a=!0},p(t,[a]){let s=e;e=u(t),e===s?i[e].p(t,a):(j(),X(i[s],1,1,(()=>{i[s]=null})),q(),n=i[e],n?n.p(t,a):(n=i[e]=o[e](t),n.c()),_(n,1),n.m(r.parentNode,r))},i(t){a||(_(n),a=!0)},o(t){X(n),a=!1},d(t){i[e].d(t),t&&c(r)}}}function tt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const et=G(null,(function(t){t(tt());const e=()=>{t(tt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));function nt(t,e){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return rt(t,e||t.getAttribute("href")),{update(e){rt(t,e)}}}function rt(t,e){if(!e||e.length<1||"/"!=e.charAt(0))throw Error('Invalid value for "href" attribute: '+e);t.setAttribute("href","#"+e),t.addEventListener("click",at)}function at(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");history.replaceState({scrollX:window.scrollX,scrollY:window.scrollY},void 0,void 0),window.location.hash=e}function ot(t,e,n){let{routes:r={}}=e,{prefix:a=""}=e,{restoreScrollState:o=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:r}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,a,o,i=[],u="",s=t.split("/");for(s[0]||s.shift();a=s.shift();)"*"===(n=a[0])?(i.push("wild"),u+="/(.*)"):":"===n?(r=a.indexOf("?",1),o=a.indexOf(".",1),i.push(a.substring(1,~r?r:~o?o:a.length)),u+=~r&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(u+=(~r?"?":"")+"\\"+a.substring(o))):u+="/"+a;return{keys:i,pattern:new RegExp("^"+u+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(t){if(a)if("string"==typeof a){if(!t.startsWith(a))return null;t=t.substr(a.length)||"/"}else if(a instanceof RegExp){const e=t.match(a);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let r=0;for(;r<this._keys.length;){try{n[this._keys[r]]=decodeURIComponent(e[r+1]||"")||null}catch(t){n[this._keys[r]]=null}r++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const u=[];r instanceof Map?r.forEach(((t,e)=>{u.push(new i(e,t))})):Object.keys(r).forEach((t=>{u.push(new i(t,r[t]))}));let s=null,c=null,l={};const f=y();async function d(t,e){await(P(),D),f(t,e)}let h=null;var m;o&&(window.addEventListener("popstate",(t=>{h=t.state&&t.state.scrollY?t.state:null})),m=()=>{h?window.scrollTo(h.scrollX,h.scrollY):window.scrollTo(0,0)},v().$$.after_update.push(m));let g=null,p=null;return et.subscribe((async t=>{g=t;let e=0;for(;e<u.length;){const r=u[e].match(t.location);if(!r){e++;continue}const a={route:u[e].path,location:t.location,querystring:t.querystring,userData:u[e].userData};if(!await u[e].checkConditions(a))return n(0,s=null),p=null,void d("conditionsFailed",a);d("routeLoading",Object.assign({},a));const o=u[e].component;if(p!=o){o.loading?(n(0,s=o.loading),p=o,n(1,c=o.loadingParams),n(2,l={}),d("routeLoaded",Object.assign({},a,{component:s,name:s.name}))):(n(0,s=null),p=null);const e=await o();if(t!=g)return;n(0,s=e&&e.default||e),p=o}return r&&"object"==typeof r&&Object.keys(r).length?n(1,c=r):n(1,c=null),n(2,l=u[e].props),void d("routeLoaded",Object.assign({},a,{component:s,name:s.name}))}n(0,s=null),p=null})),t.$$set=t=>{"routes"in t&&n(3,r=t.routes),"prefix"in t&&n(4,a=t.prefix),"restoreScrollState"in t&&n(5,o=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=o?"manual":"auto")},[s,c,l,r,a,o,function(e){x(t,e)},function(e){x(t,e)}]}J(et,(t=>t.location)),J(et,(t=>t.querystring));class it extends Q{constructor(t){super(),B(this,t,ot,Z,i,{routes:3,prefix:4,restoreScrollState:5})}}function ut(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function st(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ct(t){st(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function lt(t,e){st(2,arguments);var n=ct(t).getTime(),r=ut(e);return new Date(n+r)}function ft(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function dt(t,e){st(2,arguments);var n=ct(t),r=ct(e),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function ht(t){st(1,arguments);var e=ct(t);return!isNaN(e)}function mt(t,e){st(2,arguments);var n=ct(t),r=ct(e),a=n.getFullYear()-r.getFullYear(),o=n.getMonth()-r.getMonth();return 12*a+o}function gt(t,e){st(2,arguments);var n=ct(t),r=ct(e);return n.getTime()-r.getTime()}function pt(t){st(1,arguments);var e=ct(t);return e.setHours(23,59,59,999),e}function wt(t){st(1,arguments);var e=ct(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function vt(t){st(1,arguments);var e=ct(t);return pt(e).getTime()===wt(e).getTime()}function bt(t,e){st(2,arguments);var n,r=ct(t),a=ct(e),o=dt(r,a),i=Math.abs(mt(r,a));if(i<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*i);var u=dt(r,a)===-o;vt(ct(t))&&1===i&&1===dt(t,a)&&(u=!1),n=o*(i-u)}return 0===n?0:n}function yt(t,e){st(2,arguments);var n=gt(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var xt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Mt(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var Tt={date:Mt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Mt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Mt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},$t={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Ct(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function Dt(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=r.match(i);if(!u)return null;var s,c=u[0],l=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,(function(t){return t.test(c)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var kt,Pt={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof xt[t]?xt[t]:1===e?xt[t].one:xt[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:Tt,formatRelative:function(t,e,n,r){return $t[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Ct({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Ct({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Ct({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Ct({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Ct({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(kt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(kt.matchPattern);if(!a)return null;var o=a[0],i=n.match(kt.parsePattern);if(!i)return null;var u=kt.valueCallback?kt.valueCallback(i[0]):i[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}),era:Dt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Dt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Dt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Dt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Dt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Et(t,e){st(2,arguments);var n=ut(e);return lt(t,-n)}function St(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Ut=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return St("yy"===e?r%100:r,e.length)},Yt=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):St(n+1,2)},Ot=function(t,e){return St(t.getUTCDate(),e.length)},Wt=function(t,e){return St(t.getUTCHours()%12||12,e.length)},Nt=function(t,e){return St(t.getUTCHours(),e.length)},jt=function(t,e){return St(t.getUTCMinutes(),e.length)},qt=function(t,e){return St(t.getUTCSeconds(),e.length)},_t=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return St(Math.floor(r*Math.pow(10,n-3)),e.length)},Xt=864e5;function Lt(t){st(1,arguments);var e=1,n=ct(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function Ft(t){st(1,arguments);var e=ct(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=Lt(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=Lt(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function At(t){st(1,arguments);var e=Ft(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Lt(n);return r}var Ht=6048e5;function zt(t,e){st(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:ut(a),i=null==n.weekStartsOn?o:ut(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=ct(t),s=u.getUTCDay(),c=(s<i?7:0)+s-i;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function Bt(t,e){st(1,arguments);var n=ct(t,e),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:ut(i),s=null==a.firstWeekContainsDate?u:ut(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var l=zt(c,e),f=new Date(0);f.setUTCFullYear(r,0,s),f.setUTCHours(0,0,0,0);var d=zt(f,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function Qt(t,e){st(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:ut(a),i=null==n.firstWeekContainsDate?o:ut(n.firstWeekContainsDate),u=Bt(t,e),s=new Date(0);s.setUTCFullYear(u,0,i),s.setUTCHours(0,0,0,0);var c=zt(s,e);return c}var Rt=6048e5;var Gt="midnight",It="noon",Jt="morning",Vt="afternoon",Kt="evening",Zt="night",te={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return Ut(t,e)},Y:function(t,e,n,r){var a=Bt(t,r),o=a>0?a:1-a;return"YY"===e?St(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):St(o,e.length)},R:function(t,e){return St(Ft(t),e.length)},u:function(t,e){return St(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return St(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return St(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Yt(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return St(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){st(1,arguments);var n=ct(t),r=zt(n,e).getTime()-Qt(n,e).getTime();return Math.round(r/Rt)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):St(a,e.length)},I:function(t,e,n){var r=function(t){st(1,arguments);var e=ct(t),n=Lt(e).getTime()-At(e).getTime();return Math.round(n/Ht)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):St(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Ot(t,e)},D:function(t,e,n){var r=function(t){st(1,arguments);var e=ct(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/Xt)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):St(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return St(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return St(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return St(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?It:0===a?Gt:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?Kt:a>=12?Vt:a>=4?Jt:Zt,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Wt(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Nt(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):St(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):St(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):jt(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):qt(t,e)},S:function(t,e){return _t(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return ne(a);case"XXXX":case"XX":return re(a);case"XXXXX":case"XXX":default:return re(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return ne(a);case"xxxx":case"xx":return re(a);case"xxxxx":case"xxx":default:return re(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ee(a,":");case"OOOO":default:return"GMT"+re(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ee(a,":");case"zzzz":default:return"GMT"+re(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return St(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return St((r._originalDate||t).getTime(),e.length)}};function ee(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+St(o,2)}function ne(t,e){return t%60==0?(t>0?"-":"+")+St(Math.abs(t)/60,2):re(t,e)}function re(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+St(Math.floor(a/60),2)+n+St(a%60,2)}function ae(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function oe(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var ie={p:oe,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return ae(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",ae(a,e)).replace("{{time}}",oe(o,e))}},ue=["D","DD"],se=["YY","YYYY"];function ce(t){return-1!==ue.indexOf(t)}function le(t){return-1!==se.indexOf(t)}function fe(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var de=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,he=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,me=/^'([^]*?)'?$/,ge=/''/g,pe=/[a-zA-Z]/;function we(t){return t.match(me)[1].replace(ge,"'")}function ve(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({},t)}var be=1440,ye=43200;function xe(e){let n,r,a,i,h,p,w,v,b,y,x,M,T,$=e[0].title+"";return{c(){n=l("a"),r=l("div"),a=f(e[1]),i=d(),h=l("div"),p=f($),w=d(),v=l("div"),b=f(e[2]),y=f(" ago"),m(r,"class","svelte-4falj4"),m(h,"class","svelte-4falj4"),m(v,"title",e[3]),m(v,"class","svelte-4falj4"),m(n,"class","chapter-metadata svelte-4falj4"),m(n,"href",x=`/chapters/${e[0].key}`)},m(e,c){var l;s(e,n,c),u(n,r),u(r,a),u(n,i),u(n,h),u(h,p),u(n,w),u(n,v),u(v,b),u(v,y),M||(l=nt.call(null,n),T=l&&o(l.destroy)?l.destroy:t,M=!0)},p(t,[e]){2&e&&g(a,t[1]),1&e&&$!==($=t[0].title+"")&&g(p,$),4&e&&g(b,t[2]),8&e&&m(v,"title",t[3]),1&e&&x!==(x=`/chapters/${t[0].key}`)&&m(n,"href",x)},i:t,o:t,d(t){t&&c(n),M=!1,T()}}}function Me(t,e,n){let{chapterMetadata:r}=e,{index:a}=e;const o=t=>{const e=new Date(t),n=function(t,e,n){st(2,arguments);var r=n||{},a=r.locale||Pt;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var o=dt(t,e);if(isNaN(o))throw new RangeError("Invalid time value");var i,u,s=ve(r);s.addSuffix=Boolean(r.addSuffix),s.comparison=o,o>0?(i=ct(e),u=ct(t)):(i=ct(t),u=ct(e));var c,l=yt(u,i),f=(ft(u)-ft(i))/1e3,d=Math.round((l-f)/60);if(d<2)return r.includeSeconds?l<5?a.formatDistance("lessThanXSeconds",5,s):l<10?a.formatDistance("lessThanXSeconds",10,s):l<20?a.formatDistance("lessThanXSeconds",20,s):l<40?a.formatDistance("halfAMinute",null,s):l<60?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",1,s):0===d?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",d,s);if(d<45)return a.formatDistance("xMinutes",d,s);if(d<90)return a.formatDistance("aboutXHours",1,s);if(d<be){var h=Math.round(d/60);return a.formatDistance("aboutXHours",h,s)}if(d<2520)return a.formatDistance("xDays",1,s);if(d<ye){var m=Math.round(d/be);return a.formatDistance("xDays",m,s)}if(d<86400)return c=Math.round(d/ye),a.formatDistance("aboutXMonths",c,s);if((c=bt(u,i))<12){var g=Math.round(d/ye);return a.formatDistance("xMonths",g,s)}var p=c%12,w=Math.floor(c/12);return p<3?a.formatDistance("aboutXYears",w,s):p<9?a.formatDistance("overXYears",w,s):a.formatDistance("almostXYears",w+1,s)}(e,new Date);return{dateFormatted:function(t,e,n){st(2,arguments);var r=String(e),a=n||{},o=a.locale||Pt,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:ut(i),s=null==a.firstWeekContainsDate?u:ut(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,l=null==c?0:ut(c),f=null==a.weekStartsOn?l:ut(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var d=ct(t);if(!ht(d))throw new RangeError("Invalid time value");var h=ft(d),m=Et(d,h),g={firstWeekContainsDate:s,weekStartsOn:f,locale:o,_originalDate:d};return r.match(he).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ie[e])(t,o.formatLong,g):t})).join("").match(de).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return we(n);var i=te[r];if(i)return!a.useAdditionalWeekYearTokens&&le(n)&&fe(n,e,t),!a.useAdditionalDayOfYearTokens&&ce(n)&&fe(n,e,t),i(m,n,o.localize,g);if(r.match(pe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(e,"dd/MM/yyyy"),timeSincePublishedInWords:n}};let i,u;return b((()=>{const t=o(r.publishedAt);console.log(t),n(3,u=t.dateFormatted),n(2,i=t.timeSincePublishedInWords)})),t.$$set=t=>{"chapterMetadata"in t&&n(0,r=t.chapterMetadata),"index"in t&&n(1,a=t.index)},[r,a,i,u]}class Te extends Q{constructor(t){super(),B(this,t,Me,xe,i,{chapterMetadata:0,index:1})}}function $e(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function Ce(t){let e,n;return e=new Te({props:{chapterMetadata:t[1],index:t[3]}}),{c(){A(e.$$.fragment)},m(t,r){H(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.chapterMetadata=t[1]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function De(t){let e,n,r=t[0],a=[];for(let e=0;e<r.length;e+=1)a[e]=Ce($e(t,r,e));const o=t=>X(a[t],1,1,(()=>{a[t]=null}));return{c(){e=l("div");for(let t=0;t<a.length;t+=1)a[t].c()},m(t,r){s(t,e,r);for(let t=0;t<a.length;t+=1)a[t].m(e,null);n=!0},p(t,[n]){if(1&n){let i;for(r=t[0],i=0;i<r.length;i+=1){const o=$e(t,r,i);a[i]?(a[i].p(o,n),_(a[i],1)):(a[i]=Ce(o),a[i].c(),_(a[i],1),a[i].m(e,null))}for(j(),i=r.length;i<a.length;i+=1)o(i);q()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)_(a[t]);n=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)X(a[t]);n=!1},d(t){t&&c(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(a,t)}}}function ke(t,e,n){let{chaptersMetada:r=[]}=e;return t.$$set=t=>{"chaptersMetada"in t&&n(0,r=t.chaptersMetada)},[r]}class Pe extends Q{constructor(t){super(),B(this,t,ke,De,i,{chaptersMetada:0})}}const Ee=function(){const{subscribe:t,set:e,update:n}=I({metadata:[],selectedIndex:null}),r=()=>async function(){const t=await fetch("./chapters/chapters.json");return await t.json()}().then((t=>{e({metadata:t,selectedIndex:0})})).catch(console.error);return r(),{subscribe:t,selected:t=>n((e=>(e.selectedIndex=t,e))),reset:r}}();function Se(t){let e,n,r,a,o,i;return o=new Pe({props:{chaptersMetada:t[0]}}),{c(){e=l("h1"),e.textContent=`${Ue}`,n=d(),r=l("p"),r.textContent=`${t[1]}`,a=d(),A(o.$$.fragment)},m(t,u){s(t,e,u),s(t,n,u),s(t,r,u),s(t,a,u),H(o,t,u),i=!0},p(t,[e]){const n={};1&e&&(n.chaptersMetada=t[0]),o.$set(n)},i(t){i||(_(o.$$.fragment,t),i=!0)},o(t){X(o.$$.fragment,t),i=!1},d(t){t&&c(e),t&&c(n),t&&c(r),t&&c(a),z(o,t)}}}const Ue="Legend of Byron";function Ye(t,e,n){let r,a=[];var o;b((()=>{r=Ee.subscribe((t=>{n(0,a=t.metadata)}))})),o=()=>{r()},v().$$.on_destroy.push(o);return[a,"\n        is a story set in the future of a young man named \n        Byron as he goes on a journey of self discovery.\n    "]}class Oe extends Q{constructor(t){super(),B(this,t,Ye,Se,i,{})}}function We(e){let n;return{c(){n=l("div"),m(n,"contenteditable","")},m(t,r){s(t,n,r),n.innerHTML=e[0]},p(t,[e]){1&e&&(n.innerHTML=t[0])},i:t,o:t,d(t){t&&c(n)}}}function Ne(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(a,o){function i(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}s((r=r.apply(t,e||[])).next())}))};let a,{params:o={chapter:""}}=e;return b((()=>r(void 0,void 0,void 0,(function*(){n(0,a=yield function(){return r(this,void 0,void 0,(function*(){const t=yield fetch(`./chapters/${o.chapter}.html`,{cache:"force-cache"});return yield t.text()}))}())})))),t.$$set=t=>{"params"in t&&n(1,o=t.params)},[a,o]}class je extends Q{constructor(t){super(),B(this,t,Ne,We,i,{params:1})}}function qe(e){let n;return{c(){n=l("h1"),n.textContent="That page does not exist"},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class _e extends Q{constructor(t){super(),B(this,t,null,qe,i,{})}}function Xe(e){let n,r,a;return r=new it({props:{routes:e[0]}}),{c(){n=l("main"),A(r.$$.fragment)},m(t,e){s(t,n,e),H(r,n,null),a=!0},p:t,i(t){a||(_(r.$$.fragment,t),a=!0)},o(t){X(r.$$.fragment,t),a=!1},d(t){t&&c(n),z(r)}}}function Le(t){return[{"/":Oe,"/chapters/:chapter":je,"*":_e}]}return new class extends Q{constructor(t){super(),B(this,t,Le,Xe,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map