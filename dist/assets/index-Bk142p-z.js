import{m as $,h as T,v as _}from"./index-Z587fgxQ.js";var z={exports:{}};(function(a){var s=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function t(l,i,u){this.fn=l,this.context=i,this.once=u||!1}function e(l,i,u,f,m){if(typeof u!="function")throw new TypeError("The listener must be a function");var y=new t(u,f||l,m),h=r?r+i:i;return l._events[h]?l._events[h].fn?l._events[h]=[l._events[h],y]:l._events[h].push(y):(l._events[h]=y,l._eventsCount++),l}function o(l,i){--l._eventsCount===0?l._events=new n:delete l._events[i]}function c(){this._events=new n,this._eventsCount=0}c.prototype.eventNames=function(){var i=[],u,f;if(this._eventsCount===0)return i;for(f in u=this._events)s.call(u,f)&&i.push(r?f.slice(1):f);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(u)):i},c.prototype.listeners=function(i){var u=r?r+i:i,f=this._events[u];if(!f)return[];if(f.fn)return[f.fn];for(var m=0,y=f.length,h=new Array(y);m<y;m++)h[m]=f[m].fn;return h},c.prototype.listenerCount=function(i){var u=r?r+i:i,f=this._events[u];return f?f.fn?1:f.length:0},c.prototype.emit=function(i,u,f,m,y,h){var g=r?r+i:i;if(!this._events[g])return!1;var d=this._events[g],w=arguments.length,A,p;if(d.fn){switch(d.once&&this.removeListener(i,d.fn,void 0,!0),w){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,u),!0;case 3:return d.fn.call(d.context,u,f),!0;case 4:return d.fn.call(d.context,u,f,m),!0;case 5:return d.fn.call(d.context,u,f,m,y),!0;case 6:return d.fn.call(d.context,u,f,m,y,h),!0}for(p=1,A=new Array(w-1);p<w;p++)A[p-1]=arguments[p];d.fn.apply(d.context,A)}else{var F=d.length,M;for(p=0;p<F;p++)switch(d[p].once&&this.removeListener(i,d[p].fn,void 0,!0),w){case 1:d[p].fn.call(d[p].context);break;case 2:d[p].fn.call(d[p].context,u);break;case 3:d[p].fn.call(d[p].context,u,f);break;case 4:d[p].fn.call(d[p].context,u,f,m);break;default:if(!A)for(M=1,A=new Array(w-1);M<w;M++)A[M-1]=arguments[M];d[p].fn.apply(d[p].context,A)}}return!0},c.prototype.on=function(i,u,f){return e(this,i,u,f,!1)},c.prototype.once=function(i,u,f){return e(this,i,u,f,!0)},c.prototype.removeListener=function(i,u,f,m){var y=r?r+i:i;if(!this._events[y])return this;if(!u)return o(this,y),this;var h=this._events[y];if(h.fn)h.fn===u&&(!m||h.once)&&(!f||h.context===f)&&o(this,y);else{for(var g=0,d=[],w=h.length;g<w;g++)(h[g].fn!==u||m&&!h[g].once||f&&h[g].context!==f)&&d.push(h[g]);d.length?this._events[y]=d.length===1?d[0]:d:o(this,y)}return this},c.prototype.removeAllListeners=function(i){var u;return i?(u=r?r+i:i,this._events[u]&&o(this,u)):(this._events=new n,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,a.exports=c})(z);var V=z.exports;const U=$(V);var N=function(){var a=function(s,r){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},a(s,r)};return function(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");a(s,r);function n(){this.constructor=s}s.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),D=function(a){N(s,a);function s(){return a!==null&&a.apply(this,arguments)||this}return s}(U),G=function(){var a=function(s,r){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},a(s,r)};return function(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");a(s,r);function n(){this.constructor=s}s.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),W=function(){return W=Object.assign||function(a){for(var s,r=1,n=arguments.length;r<n;r++){s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(a[t]=s[t])}return a},W.apply(this,arguments)},I=function(a,s,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(u){try{i(n.next(u))}catch(f){o(f)}}function l(u){try{i(n.throw(u))}catch(f){o(f)}}function i(u){u.done?e(u.value):t(u.value).then(c,l)}i((n=n.apply(a,s||[])).next())})},j=function(a,s){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(u){return l([i,u])}}function l(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=s.call(a,r)}catch(u){i=[6,u],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},C=function(a,s){var r=typeof Symbol=="function"&&a[Symbol.iterator];if(!r)return a;var n=r.call(a),t,e=[],o;try{for(;(s===void 0||s-- >0)&&!(t=n.next()).done;)e.push(t.value)}catch(c){o={error:c}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return e},B=function(a){G(s,a);function s(r,n){var t=a.call(this)||this;if(t._handleMessage=function(e){if(t._injectedProvider&&e.source===window||e.origin===t._providerUrl.origin&&e.source===t._popup){if(e.data.method==="connected"){var o=new T(e.data.params.publicKey);(!t._publicKey||!t._publicKey.equals(o))&&(t._publicKey&&!t._publicKey.equals(o)&&t._handleDisconnect(),t._publicKey=o,t._autoApprove=!!e.data.params.autoApprove,t.emit("connect",t._publicKey))}else if(e.data.method==="disconnected")t._handleDisconnect();else if((e.data.result||e.data.error)&&t._responsePromises.has(e.data.id)){var c=C(t._responsePromises.get(e.data.id),2),l=c[0],i=c[1];e.data.result?l(e.data.result):i(new Error(e.data.error))}}},t._handleConnect=function(){return t._handlerAdded||(t._handlerAdded=!0,window.addEventListener("message",t._handleMessage),window.addEventListener("beforeunload",t.disconnect)),t._injectedProvider?new Promise(function(e){t._sendRequest("connect",{}),e()}):(window.name="parent",t._popup=window.open(t._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(function(e){t.once("connect",e)}))},t._handleDisconnect=function(){t._handlerAdded&&(t._handlerAdded=!1,window.removeEventListener("message",t._handleMessage),window.removeEventListener("beforeunload",t.disconnect)),t._publicKey&&(t._publicKey=null,t.emit("disconnect")),t._responsePromises.forEach(function(e,o){var c=C(e,2);c[0];var l=c[1];t._responsePromises.delete(o),l("Wallet disconnected")})},t._sendRequest=function(e,o){return I(t,void 0,void 0,function(){var c,l=this;return j(this,function(i){if(e!=="connect"&&!this.connected)throw new Error("Wallet not connected");return c=this._nextRequestId,++this._nextRequestId,[2,new Promise(function(u,f){l._responsePromises.set(c,[u,f]),l._injectedProvider?l._injectedProvider.postMessage({jsonrpc:"2.0",id:c,method:e,params:W({network:l._network},o)}):(l._popup.postMessage({jsonrpc:"2.0",id:c,method:e,params:o},l._providerUrl.origin),l.autoApprove||l._popup.focus())})]})})},t.connect=function(){return t._popup&&t._popup.close(),t._handleConnect()},t.disconnect=function(){return I(t,void 0,void 0,function(){return j(this,function(e){switch(e.label){case 0:return this._injectedProvider?[4,this._sendRequest("disconnect",{})]:[3,2];case 1:e.sent(),e.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}})})},t.sign=function(e,o){return I(t,void 0,void 0,function(){var c,l,i;return j(this,function(u){switch(u.label){case 0:if(!(e instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:e,display:o})];case 1:return c=u.sent(),l=_.decode(c.signature),i=new T(c.publicKey),[2,{signature:l,publicKey:i}]}})})},t.signTransaction=function(e){return I(t,void 0,void 0,function(){var o,c,l;return j(this,function(i){switch(i.label){case 0:return[4,this._sendRequest("signTransaction",{message:_.encode(e.serializeMessage())})];case 1:return o=i.sent(),c=_.decode(o.signature),l=new T(o.publicKey),e.addSignature(l,c),[2,e]}})})},t.signAllTransactions=function(e){return I(t,void 0,void 0,function(){var o,c,l;return j(this,function(i){switch(i.label){case 0:return[4,this._sendRequest("signAllTransactions",{messages:e.map(function(u){return _.encode(u.serializeMessage())})})];case 1:return o=i.sent(),c=o.signatures.map(function(u){return _.decode(u)}),l=new T(o.publicKey),e=e.map(function(u,f){return u.addSignature(l,c[f]),u}),[2,e]}})})},t.signAndSendTransaction=function(e,o){return o===void 0&&(o={}),I(t,void 0,void 0,function(){var c,l,i;return j(this,function(u){switch(u.label){case 0:return[4,this._sendRequest("signAndSendTransaction",W({transaction:_.encode(e.serialize({requireAllSignatures:!1,verifySignatures:!1}))},o))];case 1:return c=u.sent(),l=c.publicKey,i=c.signature,[2,{publicKey:new T(l),signature:i}]}})})},Q(r))t._injectedProvider=r;else if(J(r))t._providerUrl=new URL(r),t._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:n}).toString();else throw new Error("provider parameter must be an injected provider or a URL string.");return t._network=n,t._publicKey=null,t._autoApprove=!1,t._popup=null,t._handlerAdded=!1,t._nextRequestId=1,t._responsePromises=new Map,t}return Object.defineProperty(s.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"connected",{get:function(){return this._publicKey!==null},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),s}(U);function J(a){return typeof a=="string"}function Q(a){return X(a)&&Y(a.postMessage)}function X(a){return typeof a=="object"&&a!==null}function Y(a){return typeof a=="function"}var Z=function(){var a=function(s,r){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},a(s,r)};return function(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");a(s,r);function n(){this.constructor=s}s.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),S=function(a,s,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(u){try{i(n.next(u))}catch(f){o(f)}}function l(u){try{i(n.throw(u))}catch(f){o(f)}}function i(u){u.done?e(u.value):t(u.value).then(c,l)}i((n=n.apply(a,s||[])).next())})},E=function(a,s){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(u){return l([i,u])}}function l(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=s.call(a,r)}catch(u){i=[6,u],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},ee=function(a){Z(s,a);function s(r,n,t){var e=a.call(this)||this;return e._instance=null,e.handleMessage=function(o){},e._sendRequest=function(o,c){return S(e,void 0,void 0,function(){var l,i;return E(this,function(u){switch(u.label){case 0:return!((l=this._instance)===null||l===void 0)&&l.sendRequest?[4,this._instance.sendRequest(o,c)]:[3,2];case 1:return[2,u.sent()];case 2:return!((i=this._instance)===null||i===void 0)&&i._sendRequest?[4,this._instance._sendRequest(o,c)]:[3,4];case 3:return[2,u.sent()];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}})})},e._handleConnect=function(){e.emit("connect")},e._handleDisconnect=function(){window.clearInterval(e._pollTimer),e.emit("disconnect")},e._network=n,e._provider=t,e}return Object.defineProperty(s.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),s.prototype.connect=function(){return S(this,void 0,void 0,function(){var r=this;return E(this,function(n){switch(n.label){case 0:return this._instance=new B(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var t,e;((e=(t=r._instance)===null||t===void 0?void 0:t._popup)===null||e===void 0?void 0:e.closed)!==!1&&r._handleDisconnect()},200),[4,this._instance.connect()];case 1:return n.sent(),[2]}})})},s.prototype.disconnect=function(){return S(this,void 0,void 0,function(){return E(this,function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return r.sent(),[2]}})})},s.prototype.signTransaction=function(r){return S(this,void 0,void 0,function(){var n;return E(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransaction",{message:_.encode(r)})];case 1:return n=t.sent(),[2,_.decode(n.signature)]}})})},s.prototype.signAllTransactions=function(r){return S(this,void 0,void 0,function(){var n;return E(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactions",{messages:r.map(function(e){return _.encode(e)})})];case 1:return n=t.sent(),[2,n.signatures.map(function(e){return _.decode(e)})]}})})},s.prototype.signAndSendTransaction=function(r,n){return S(this,void 0,void 0,function(){var t;return E(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:_.encode(r),options:n})];case 1:return t=e.sent(),[2,t.signature]}})})},s.prototype.signMessage=function(r,n){return n===void 0&&(n="hex"),S(this,void 0,void 0,function(){var t;return E(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(r,n)];case 1:return t=e.sent().signature,[2,Uint8Array.from(t)]}})})},s}(D);let R;const ne=new Uint8Array(16);function te(){if(!R&&(R=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(ne)}const v=[];for(let a=0;a<256;++a)v.push((a+256).toString(16).slice(1));function re(a,s=0){return v[a[s+0]]+v[a[s+1]]+v[a[s+2]]+v[a[s+3]]+"-"+v[a[s+4]]+v[a[s+5]]+"-"+v[a[s+6]]+v[a[s+7]]+"-"+v[a[s+8]]+v[a[s+9]]+"-"+v[a[s+10]]+v[a[s+11]]+v[a[s+12]]+v[a[s+13]]+v[a[s+14]]+v[a[s+15]]}const ie=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),H={randomUUID:ie};function oe(a,s,r){if(H.randomUUID&&!s&&!a)return H.randomUUID();a=a||{};const n=a.random||(a.rng||te)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,s){r=r||0;for(let t=0;t<16;++t)s[r+t]=n[t];return s}return re(n)}var se=function(){var a=function(s,r){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},a(s,r)};return function(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");a(s,r);function n(){this.constructor=s}s.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),q=function(){return q=Object.assign||function(a){for(var s,r=1,n=arguments.length;r<n;r++){s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(a[t]=s[t])}return a},q.apply(this,arguments)},O=function(a,s,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(u){try{i(n.next(u))}catch(f){o(f)}}function l(u){try{i(n.throw(u))}catch(f){o(f)}}function i(u){u.done?e(u.value):t(u.value).then(c,l)}i((n=n.apply(a,s||[])).next())})},P=function(a,s){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(u){return l([i,u])}}function l(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=s.call(a,r)}catch(u){i=[6,u],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},L=function(a){se(s,a);function s(r,n){var t=this,e;return t=a.call(this)||this,t._publicKey=null,t._messageHandlers={},t.handleMessage=function(o){if(t._messageHandlers[o.id]){var c=t._messageHandlers[o.id],l=c.resolve,i=c.reject;delete t._messageHandlers[o.id],o.error?i(o.error):l(o.result)}},t._sendMessage=function(o){if(!t.connected)throw new Error("Wallet not connected");return new Promise(function(c,l){var i,u,f=oe();t._messageHandlers[f]={resolve:c,reject:l},(u=(i=t._iframe)===null||i===void 0?void 0:i.contentWindow)===null||u===void 0||u.postMessage({channel:"solflareWalletAdapterToIframe",data:q({id:f},o)},"*")})},t._iframe=r,t._publicKey=new T((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n)),t}return Object.defineProperty(s.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),s.prototype.connect=function(){return O(this,void 0,void 0,function(){return P(this,function(r){return[2]})})},s.prototype.disconnect=function(){return O(this,void 0,void 0,function(){return P(this,function(r){switch(r.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return r.sent(),[2]}})})},s.prototype.signTransaction=function(r){var n;return O(this,void 0,void 0,function(){var t,e;return P(this,function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:_.encode(r)}})];case 2:return t=o.sent().signature,[2,_.decode(t)];case 3:throw e=o.sent(),new Error(((n=e==null?void 0:e.toString)===null||n===void 0?void 0:n.call(e))||"Failed to sign transaction");case 4:return[2]}})})},s.prototype.signAllTransactions=function(r){var n;return O(this,void 0,void 0,function(){var t,e;return P(this,function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:r.map(function(c){return _.encode(c)})}})];case 2:return t=o.sent().signatures,[2,t.map(function(c){return _.decode(c)})];case 3:throw e=o.sent(),new Error(((n=e==null?void 0:e.toString)===null||n===void 0?void 0:n.call(e))||"Failed to sign transactions");case 4:return[2]}})})},s.prototype.signAndSendTransaction=function(r,n){var t;return O(this,void 0,void 0,function(){var e,o;return P(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:_.encode(r),options:n}})];case 2:return e=c.sent(),[2,e];case 3:throw o=c.sent(),new Error(((t=o==null?void 0:o.toString)===null||t===void 0?void 0:t.call(o))||"Failed to sign and send transaction");case 4:return[2]}})})},s.prototype.signMessage=function(r,n){var t;return n===void 0&&(n="hex"),O(this,void 0,void 0,function(){var e,o;return P(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:r,display:n}})];case 2:return e=c.sent(),[2,Uint8Array.from(_.decode(e))];case 3:throw o=c.sent(),new Error(((t=o==null?void 0:o.toString)===null||t===void 0?void 0:t.call(o))||"Failed to sign message");case 4:return[2]}})})},s}(D);function K(a){return a.version===void 0}var ae="1.4.1",ce=function(){var a=function(s,r){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},a(s,r)};return function(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");a(s,r);function n(){this.constructor=s}s.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),k=function(){return k=Object.assign||function(a){for(var s,r=1,n=arguments.length;r<n;r++){s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(a[t]=s[t])}return a},k.apply(this,arguments)},b=function(a,s,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(u){try{i(n.next(u))}catch(f){o(f)}}function l(u){try{i(n.throw(u))}catch(f){o(f)}}function i(u){u.done?e(u.value):t(u.value).then(c,l)}i((n=n.apply(a,s||[])).next())})},x=function(a,s){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(u){return l([i,u])}}function l(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=s.call(a,r)}catch(u){i=[6,u],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},ue=function(a){var s=typeof Symbol=="function"&&Symbol.iterator,r=s&&a[s],n=0;if(r)return r.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")},fe=function(a){ce(s,a);function s(r){var n=a.call(this)||this;return n._network="mainnet-beta",n._provider=null,n._iframeParams={},n._adapterInstance=null,n._element=null,n._iframe=null,n._connectHandler=null,n._flutterHandlerInterval=null,n._handleEvent=function(t){var e,o,c,l;switch(t.type){case"connect_native_web":{n._collapseIframe(),n._adapterInstance=new ee(n._iframe,n._network,((e=t.data)===null||e===void 0?void 0:e.provider)||n._provider||"https://solflare.com/provider"),n._adapterInstance.on("connect",n._webConnected),n._adapterInstance.on("disconnect",n._webDisconnected),n._adapterInstance.connect(),n._setPreferredAdapter("native_web");return}case"connect":{n._collapseIframe(),n._adapterInstance=new L(n._iframe,((o=t.data)===null||o===void 0?void 0:o.publicKey)||""),n._adapterInstance.connect(),n._setPreferredAdapter((c=t.data)===null||c===void 0?void 0:c.adapter),n._connectHandler&&(n._connectHandler.resolve(),n._connectHandler=null),n.emit("connect",n.publicKey);return}case"disconnect":{n._connectHandler&&(n._connectHandler.reject(),n._connectHandler=null),n._disconnected(),n.emit("disconnect");return}case"accountChanged":{!((l=t.data)===null||l===void 0)&&l.publicKey?(n._adapterInstance=new L(n._iframe,t.data.publicKey),n._adapterInstance.connect(),n.emit("accountChanged",n.publicKey)):n.emit("accountChanged",void 0);return}case"collapse":{n._collapseIframe();return}default:return}},n._handleResize=function(t){t.resizeMode==="full"?t.params.mode==="fullscreen"?n._expandIframe():t.params.mode==="hide"&&n._collapseIframe():t.resizeMode==="coordinates"&&n._iframe&&(n._iframe.style.top=isFinite(t.params.top)?"".concat(t.params.top,"px"):"",n._iframe.style.bottom=isFinite(t.params.bottom)?"".concat(t.params.bottom,"px"):"",n._iframe.style.left=isFinite(t.params.left)?"".concat(t.params.left,"px"):"",n._iframe.style.right=isFinite(t.params.right)?"".concat(t.params.right,"px"):"",n._iframe.style.width=isFinite(t.params.width)?"".concat(t.params.width,"px"):t.params.width,n._iframe.style.height=isFinite(t.params.height)?"".concat(t.params.height,"px"):t.params.height)},n._handleMessage=function(t){var e;if(((e=t.data)===null||e===void 0?void 0:e.channel)==="solflareIframeToWalletAdapter"){var o=t.data.data||{};o.type==="event"?n._handleEvent(o.event):o.type==="resize"?n._handleResize(o):o.type==="response"&&n._adapterInstance&&n._adapterInstance.handleMessage(o)}},n._removeElement=function(){n._flutterHandlerInterval!==null&&(clearInterval(n._flutterHandlerInterval),n._flutterHandlerInterval=null),n._element&&(n._element.remove(),n._element=null)},n._removeDanglingElements=function(){var t,e,o=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var c=ue(o),l=c.next();!l.done;l=c.next()){var i=l.value;i.parentElement&&i.remove()}}catch(u){t={error:u}}finally{try{l&&!l.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}},n._injectElement=function(){n._removeElement(),n._removeDanglingElements();var t=k(k({},n._iframeParams),{cluster:n._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||"",version:1,sdkVersion:ae}),e=n._getPreferredAdapter();e&&(t.adapter=e),n._provider&&(t.provider=n._provider);var o=Object.keys(t).map(function(l){return"".concat(l,"=").concat(encodeURIComponent(t[l]))}).join("&"),c="".concat(s.IFRAME_URL,"?").concat(o);n._element=document.createElement("div"),n._element.className="solflare-wallet-adapter-iframe",n._element.innerHTML=`
      <iframe src='`.concat(c,`' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `),document.body.appendChild(n._element),n._iframe=n._element.querySelector("iframe"),window.fromFlutter=n._handleMobileMessage,n._flutterHandlerInterval=setInterval(function(){window.fromFlutter=n._handleMobileMessage},100),window.addEventListener("message",n._handleMessage,!1)},n._collapseIframe=function(){n._iframe&&(n._iframe.style.top="",n._iframe.style.right="",n._iframe.style.height="2px",n._iframe.style.width="2px")},n._expandIframe=function(){n._iframe&&(n._iframe.style.top="0px",n._iframe.style.bottom="0px",n._iframe.style.left="0px",n._iframe.style.right="0px",n._iframe.style.width="100%",n._iframe.style.height="100%")},n._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},n._setPreferredAdapter=function(t){localStorage&&t&&localStorage.setItem("solflarePreferredWalletAdapter",t)},n._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},n._webConnected=function(){n._connectHandler&&(n._connectHandler.resolve(),n._connectHandler=null),n.emit("connect",n.publicKey)},n._webDisconnected=function(){n._connectHandler&&(n._connectHandler.reject(),n._connectHandler=null),n._disconnected(),n.emit("disconnect")},n._disconnected=function(){window.removeEventListener("message",n._handleMessage,!1),n._removeElement(),n._clearPreferredAdapter(),n._adapterInstance=null},n._handleMobileMessage=function(t){var e,o;(o=(e=n._iframe)===null||e===void 0?void 0:e.contentWindow)===null||o===void 0||o.postMessage({channel:"solflareMobileToIframe",data:t},"*")},r!=null&&r.network&&(n._network=r==null?void 0:r.network),r!=null&&r.provider&&(n._provider=r==null?void 0:r.provider),r!=null&&r.params&&(n._iframeParams=k({},r==null?void 0:r.params)),n}return Object.defineProperty(s.prototype,"publicKey",{get:function(){var r;return((r=this._adapterInstance)===null||r===void 0?void 0:r.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isConnected",{get:function(){var r;return!!(!((r=this._adapterInstance)===null||r===void 0)&&r.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),s.prototype.connect=function(){return b(this,void 0,void 0,function(){var r=this;return x(this,function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise(function(t,e){r._connectHandler={resolve:t,reject:e}})]);case 1:return n.sent(),[2]}})})},s.prototype.disconnect=function(){return b(this,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return r.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},s.prototype.signTransaction=function(r){return b(this,void 0,void 0,function(){var n,t,e,o,c=this;return x(this,function(l){switch(l.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=K(r)?r.serializeMessage():r.message.serialize(),[4,this._adapterInstance.signTransaction(n)];case 1:return t=l.sent(),K(r)?r.addSignature(this.publicKey,Buffer.from(t)):(e=r.message.staticAccountKeys.slice(0,r.message.header.numRequiredSignatures),o=e.findIndex(function(i){return i.equals(c.publicKey)}),o>=0&&(r.signatures[o]=t)),[2,r]}})})},s.prototype.signAllTransactions=function(r){return b(this,void 0,void 0,function(){var n,t,e,o,c,l,i=this;return x(this,function(u){switch(u.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=r.map(function(f){return K(f)?f.serializeMessage():f.message.serialize()}),[4,this._adapterInstance.signAllTransactions(n)];case 1:for(t=u.sent(),e=0;e<r.length;e++)o=r[e],K(o)?o.addSignature(this.publicKey,Buffer.from(t[e])):(c=o.message.staticAccountKeys.slice(0,o.message.header.numRequiredSignatures),l=c.findIndex(function(f){return f.equals(i.publicKey)}),l>=0&&(o.signatures[l]=t[e]));return[2,r]}})})},s.prototype.signAndSendTransaction=function(r,n){return b(this,void 0,void 0,function(){var t;return x(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=K(r)?r.serialize({verifySignatures:!1,requireAllSignatures:!1}):r.serialize(),[4,this._adapterInstance.signAndSendTransaction(t,n)];case 1:return[2,e.sent()]}})})},s.prototype.signMessage=function(r,n){return n===void 0&&(n="utf8"),b(this,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(r,n)];case 1:return[2,t.sent()]}})})},s.prototype.sign=function(r,n){return n===void 0&&(n="utf8"),b(this,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:return[4,this.signMessage(r,n)];case 1:return[2,t.sent()]}})})},s.prototype.detectWallet=function(r){var n;return r===void 0&&(r=10),b(this,void 0,void 0,function(){return x(this,function(t){return window.SolflareApp||!((n=window.solflare)===null||n===void 0)&&n.isSolflare?[2,!0]:[2,new Promise(function(e){var o,c;o=setInterval(function(){var l;(window.SolflareApp||!((l=window.solflare)===null||l===void 0)&&l.isSolflare)&&(clearInterval(o),clearTimeout(c),e(!0))},500),c=setTimeout(function(){clearInterval(o),e(!1)},r*1e3)})]})})},s.IFRAME_URL="https://connect.solflare.com/",s}(U);export{fe as default};
